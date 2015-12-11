Template.registerHelper('currentRoute', function(route){
	return Router.current().route.getName() === route;
});