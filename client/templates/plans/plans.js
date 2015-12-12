Template.plans.events({
    'click .buy-plan': function(event){
        var plan_id = event.currentTarget.id;
        var plan_name = event.currentTarget.rel;
        
        var plan_info = Plans.findOne({_id: plan_id})
        
        
        Subscribers.insert({
            plan_name: plan_info.plan_name,
            plan_label: plan_info.plan_label,
            plan_days: plan_info.plan_days,
            plan_price: plan_info.plan_price,
            plan_description: plan_info.plan_description,
            user_id: Meteor.userId(),
            user_email: Meteor.user().emails[0].address,
            join_date: new Date()
        });
        
        toastr.success("Joined Plan!");
    }
});