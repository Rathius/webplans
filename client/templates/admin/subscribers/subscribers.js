Template.listsubscribers.events({
    'click .cancel-subscription': function(event){
        if(confirm("Are you sure?")){
            Subscribers.remove(this._id);
            toastr.success("Subscription Cancelled");
            
            return false;
        }
        return false;
    }
});