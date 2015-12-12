Template.registerHelper('currentRoute', function(route){
	return Router.current().route.getName() === route;
});

Template.registerHelper('formatDate', function(date){
	return new Date(date).toDateString();
});

Template.registerHelper('getEndDate', function(join_date, plan_duration){
	var end_date = join_date.setDate(join_date.getDate() + plan_duration);
	return new Date(end_date).toDateString();
});