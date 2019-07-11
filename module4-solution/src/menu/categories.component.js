(function(){
	'use strict';

	angular.module('data')
	.component('categories', {
		templateUrl: 'src/menu/templates/allCategories.template.html',
		bindings: {
			categories: '<'
		}
	});

})();


