(function(){
	'use strict'; 

	angular.module('data')
	.service('MenuDataService', MenuDataService);

	MenuDataService.$inject=['$http'];
	function MenuDataService($http){
		var service = this;

		service.getAllCategories = function(){
			return $http({
				method: "GET",
				url: "https://davids-restaurant.herokuapp.com/categories.json"
			})
			.then(
					function success(response){
						return response.data;
					},
					function error(response){
						console.log("Something went wrong with the GET in the getAllCategories method");
					}
			);
		};
		
		service.getItemsForCategory = function(categoryShortName){
			return $http({
				method: "GET",
				url: "https://davids-restaurant.herokuapp.com/menu_items.json"
			})
			.then(
					function success(response){
						var filteredMenu = [];
						for(var i = 0 ; i < response.data.menu_items.length; i++){
							if(response.data.menu_items[i].short_name.indexOf(categoryShortName) !== -1){
								filteredMenu.push(response.data.menu_items[i]);
							}
						}
						return filteredMenu;
					},
					function error(response){
						console.log("Something went wrong with the GET in the getItemsForCategory method");
					}
			);
		};

	};

})();
