(function(){
	'use strict';

	angular.module('NarrowItDownApp',[])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItems);

	
	function FoundItems(){
		var ddo = {
				templateUrl: 'foundItems.html',
//				scope:{
//					name: '<',
//				},
//			controller: FoundItemsDirectiveController,
//			controllerAs: 'list',
//			bindToController: true
			restrict: 'E'
		};
		console.log("In the directive");
		return ddo;
		
	}
	
	
//	function FoundItemsDirectiveController(){
//		
//	}
	
	NarrowItDownController.$inject=['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
		var menu = this;

		menu.found = [];
		
		MenuSearchService.getMatchedMenuItems("chicken").then(
				function (foundItems){
					menu.found = foundItems;
//					console.log("Found items after return " + foundItems[42].description);						
					console.log("Found is " + menu.found[42].name);
			}
		);
		
	

//		promise.then(function (response){
//		console.log("Response is returned!");
//		console.log(response.data.menu_items[42].name);

//		menu.categories = response.data;
//		})
//		.catch(function (error){
//		console.log("Something went wrong");
//		});

	}

	MenuSearchService.$inject=['$http'];
	function MenuSearchService($http){

		var service = this;

		console.log("In the MenuSearchService");

//		service.getMenuItems = function(){
//		console.log("In the getMenuItems service");
//		var response = $http({
//		method: "GET",
//		url: "https://davids-restaurant.herokuapp.com/menu_items.json"
//		});

		service.getMatchedMenuItems = function(searchTerm){
			console.log("In the getMenuItems service");
			console.log("searchTerm is "  + searchTerm)
			var foundItems =[];

			return  $http({
				method: "GET",
				url: "https://davids-restaurant.herokuapp.com/menu_items.json"
			})
			.then(function (response){
				console.log("Response is returned!");
				console.log("searchTerm is still "  + searchTerm);
				console.log("Length of menu is " + response.data.menu_items.length);
				for(var i = 0; i < response.data.menu_items.length; i++){
					if(response.data.menu_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !==-1){
						console.log("search term found!");
						var item = {
								name: response.data.menu_items[i].name,
								short_name : response.data.menu_items[i].short_name,
								description : response.data.menu_items[i].description
						};
						foundItems.push(item);
					}
				}
				console.log("Found items before return " + foundItems);
				console.log("Length is " + foundItems.length);
//				console.log("Item 4 " + foundItems[4].name);
				return foundItems;

			})
			.catch(function (error){
				console.log("Something went wrong");
			});
			
		};

	}


})();
