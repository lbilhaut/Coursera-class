(function(){

	'use strict';

	angular.module('data')
	.controller('CategoriesController', CategoriesController);

	CategoriesController.$inject = ['categories','MenuDataService'];
	function CategoriesController(categories,MenuDataService) {
		var menuCategories = this;		
		menuCategories.categories = categories;
	};


})();