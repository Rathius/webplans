Meteor.startup(function(){
	if(Meteor.users.find().count() < 1){
		var users = [
			{
				name: "Superuser",
				email: "gary@bluegrassmediagroup.com",
				roles: ["admin"]
			}
		];
		
		_.each(users, function(user){
			var id;
			
			id = Accounts.createUser({
				email: user_email,
				password: "password",
				profile: {
					name: user.name
				}
			});
			
			if(user.roles.length > 0){
				Roles.addUsersToRoles(id, user.roles);
			}
		});
	}
});

Accounts.onCreateUser(function(options, user){
    Subscribers.insert({
        user_id: user._id,
        user_email: user.emails[0].address,
        plan_id: getDefaultPlan()._id,
        plan_name: getDefaultPlan().plan_name,
        plan_label: getDefaultPlan().plan_label,
        plan_duration: getDefaultPlan().plan_days,
        plan_description: getDefaultPlan().plan_description,
        plan_price: getDefaultPlan().plan_price,
        join_date: new Date()
    });
    
    if(options.profile){
        user.profile = options.profile;
    }
    
    return user;
});

function getDefaultPlan(){
    return Plans.findOne({
        is_default_plan: '1'
    });
}