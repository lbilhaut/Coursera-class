(function(){
	'use strict';

	angular.module('NarrowItDownApp',[])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItems);


/////// Directive
	function FoundItems(){
	var ddo = {
	templateUrl: 'foundItems.html',
	scope:{
	found: '=foundItems',
	onRemove: '&'
	},
//	controller: FoundItemsDirectiveController,
//	controllerAs: 'list',
//	bindToController: true
	restrict: 'E'
	};
	console.log("In the directive");
	return ddo;

	}



//// Controller
	NarrowItDownController.$inject=['$scope','MenuSearchService'];
	function NarrowItDownController($scope, MenuSearchService){
		var menu = this;

		menu.buttonActivated = function(){
			console.log("Search term is " + $scope.searchWord);
			console.log("Button activated!");
			var found = MenuSearchService.getMatchedMenuItems($scope.searchWord);
			console.log("After returning foundItems");

			found.then( function (foundItems){
				menu.found = foundItems;
			})
			.catch(function (error){
				console.log("Something went wrong");
			});

		};

		menu.removeItem = function(itemIndex){
			console.log("In the remove function");
			menu.found.splice(itemIndex,1);
		};
	}

////// Service
	MenuSearchService.$inject=['$http'];
	function MenuSearchService($http){

		var service = this;

		service.getMatchedMenuItems = function(searchTerm){
	//		console.log("searchTerm is "  + searchTerm)
			var foundItems =[];

			return  $http({
				method: "GET",
				url: "https://davids-restaurant.herokuapp.com/menu_items.json"
			})
			.then(function (response){
		//		console.log("searchTerm is still "  + searchTerm);
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
				console.log("Returning foundItems");
				return foundItems;

			})
			.catch(function (error){
				console.log("Something went wrong");
			});

		};

	}


})();
