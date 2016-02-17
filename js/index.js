var app = angular.module('annonipModule', ['ui.router']);

	app.controller('AnnonipController', ['$scope', function($scope) {
		$scope.$on('$viewContentLoaded', function(event) {
			$('select').material_select();
		});
	}]);

	app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

		  // For any unmatched url, redirect to /
		  $urlRouterProvider.otherwise("/");

		  // Now set up the states
		  $stateProvider
		    .state('root', {
	      		url: "/",
				views: 
				{
			        "header": { templateUrl: "views/header.html" },
			        "content": { templateUrl: "views/content.html" },
			        "footer": { templateUrl: "views/footer.html" }

		      	}		    
			})
		    .state('discount', {
	      		url: "/discount",
				views: 
				{
			        "content": { 
			        	templateUrl: "views/discount.html",
			        	controller: "AnnonipController"
			    	},
			        "footer": { templateUrl: "views/footer.html" }

		      	}	
			});

			$locationProvider.html5Mode(true)

	});