Meteor.startup(function(){
	if(Meteor.users.find().count() < 1){
		var user = [
			{
				name: "Superuser",
				email: "gary@bluegrassmediagroup.com",
				roles: ["admin"]
			}
		];
		
		_each(users, function(user){
			var id;
			
			id = Accounts.createUser({
				email: user.email,
				password: "password"
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