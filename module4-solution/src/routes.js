(function(){
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {

		// Redirect to home page if no other URL matches
		$urlRouterProvider.otherwise('/');

		// *** Set up UI states ***
		$stateProvider

		// Home page
		.state('home', {
			url: '/',
			templateUrl: 'src/menu/templates/home.template.html'
		})
//		Categories
		.state('categories', {
			url: '/categories',
			templateUrl: 'src/menu/templates/categories.template.html',
			controller: 'CategoriesController as CatCtrl',
			resolve: {
				categories: ['MenuDataService', function (MenuDataService){
					var request = MenuDataService.getAllCategories();
					return request;
				}]
			}
		})
		// Items
		.state('items', {
			url:'/items/{categoryId}',
			templateUrl: 'src/menu/templates/menuItems.template.html',
			controller: 'CategoryDetailController as CatDetailCtrl',
			resolve: {
				items: ['$stateParams', 'MenuDataService',
				        function ($stateParams, MenuDataService) {
							var request =  MenuDataService.getItemsForCategory($stateParams.categoryId);
							return request;
						}]
			}
		});
	};



})();
