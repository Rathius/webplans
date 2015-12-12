Template.editplan.helpers({
    'checkValue': function(val1, val2){
        if(val1 == val2){
            return "selected";
        }
    }
});

Template.addplans.events({
	'submit .add-plan-form': function(event){
		var plan_name = event.target.plan_name.value;
		var plan_label = event.target.plan_label.value;
		var plan_days = event.target.plan_days.value;
		var plan_description = event.target.plan_description.value;
		var is_default_plan = event.target.is_default_plan.value;
		var plan_price = event.target.plan_price.value;
		
		
		Plans.insert({
			plan_name: plan_name,
			plan_label: plan_label,
			plan_days: plan_days,
			plan_description: plan_description,
			is_default_plan: is_default_plan,
			plan_price: plan_price
		});
				
		toastr.success('Plan Added');
		Router.go('/admin/plans');
		
		return false;
		
	}
});

Template.editplan.events({
	'submit .edit-plan-form': function(event){
		var plan_name = event.target.plan_name.value;
		var plan_label = event.target.plan_label.value;
		var plan_days = event.target.plan_days.value;
		var plan_description = event.target.plan_description.value;
		var is_default_plan = event.target.is_default_plan.value;
		var plan_price = event.target.plan_price.value;
		
		Plans.update({
    		_id: this._id
		},{
    		$set:{
        		plan_name: plan_name,
    			plan_label: plan_label,
    			plan_days: plan_days,
    			plan_description: plan_description,
    			is_default_plan: is_default_plan,
    			plan_price: plan_price
    		}
		});
				
		toastr.success('Plan Updated');
		Router.go('/admin/plans');
		
		return false;
		
	}
});

Template.listplans.events({
    'click .delete-plan': function(event){
        if(confirm("Are you sure?")){
            Plans.remove(this._id);
            toastr.success("Plan Deleted");
            
            return false;
        }
        return false;
    }
});