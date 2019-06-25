(function(){
	'use strict';
	
	angular.module('NarrowItDownApp',[])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService);
	
	NarrowItDownController.$inject=['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
		var controllerInstance = this;
		
		MenuSearchService.getMenuItems();
		
	}
	
	MenuSearchService.$inject=['$http'];
	function MenuSearchService($http){
		
		var service = this;
		
		console.log("In the MenuSearchService");
		
		service.getMenuItems = function(){
			console.log("In the getMenuItems service");
			var response = $http({
				method: "GET",
				url: "https://davids-restaurant.herokuapp.com/menu_items.json"
			})
			.then(function (response){
				controllerInstance.items = response.data.menu_items;
				console.log("items are " + items);
			})
			.catch(function(error){
				console.log("Something went wrong");
			});
			console.log("Returning the response " + response);
			return response;
		};
		
	}
	
	
})();
