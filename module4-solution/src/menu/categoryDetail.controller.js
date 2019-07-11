(function(){

	'use strict';

	angular.module('data')
	.controller('CategoryDetailController', CategoryDetailController);

	CategoryDetailController.$inject = ['items','MenuDataService'];
	function CategoryDetailController(items, MenuDataService) {
		var menuDetails = this;	
		menuDetails.items = items;
	};


})();
