var app = angular.module('spaDemo') //spaDemo is the ng-app, [] is for dependency injection, you can add other modules.
	.factory("customersFactory", function(){
		var factory = {};
		 var customers = [{name:'dave',city:'al'}, {name : 'dada', city : 'LA'}, {name : 'mama', city :'HOU'}];
		factory.getCustomers = function(){
			return customers;
		}
		return factory;
	});


var myControllers = {};

myControllers.controllerSpaDemo1 = function($scope, customersFactory) //anonymous function
{
	$scope.customers = customersFactory.getCustomers();
};

myControllers.controllerSpaDemo2 = function($scope, customersFactory) //anonymous function
{
	$scope.customers = customersFactory.getCustomers();

	$scope.addCustomer = function()
	{
		$scope.customers.push({name: $scope.newCustomer.name, city: $scope.newCustomer.city});
	}
};


app.controller(myControllers);

app.directive('myFirstDirective', function(){
	
	var directive = {};
	//restrict = E, signifies that directive is Element directive
	directive.restrict = 'E';

	/**
	
    A new HTML element (<date-picker></date>).
    An attribute on an element (<input type="text" date-picker/>).
    As a class (<input type="text" class="date-picker"/>).
    As comment (<!--directive:date-picker-->).

	**/

	//template replaces the complete element with its text. 
   directive.template = "hello from directive"//"Student: <b>{{student.name}}</b> , Roll No: <b>{{student.rollno}}</b>";
   
   //scope is used to distinguish each student element based on criteria.
   directive.scope = {
      student : "=name"
   }

   //compile is called during application initialization. AngularJS calls it once when html page is loaded.
	
   directive.compile = function(element, attributes) {
      element.css("border", "1px solid #cccccc");
      
      //linkFunction is linked with each element with scope to get the element specific data.
      var linkFunction = function($scope, element, attributes) {
         //element.html("Student: <b>"+$scope.student.name +"</b> , Roll No: <b>"+$scope.student.rollno+"</b><br/>");
         element.css("background-color", "#ff00ff");
      }
      return linkFunction;
   }
   return directive;


});