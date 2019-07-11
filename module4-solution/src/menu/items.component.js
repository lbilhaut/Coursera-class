(function(){
	'use strict';

	angular.module('data')
	.component('items', {
		templateUrl: 'src/menu/templates/allItems.template.html',
		bindings: {
			items: '<'
		}
	});

})();
