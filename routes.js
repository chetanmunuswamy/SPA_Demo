(function(){
	var app = angular.module('spaDemo', ['ngRoute']).config(config);
	
	//app.config(config);
	console.log("inside routes1")

	function config($routeProvider)
	{
		console.log("inside routes2")
		$routeProvider.when('/', {
			controller: 'controllerSpaDemo1',
			templateUrl: 'views/view1.html'
		})
		.when('/view2', {
			controller: 'controllerSpaDemo2',
			templateUrl: 'views/view2.html'
		})
		.otherwise({
			redirectTo: '/'
		})

	}
})();