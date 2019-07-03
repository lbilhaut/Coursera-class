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
	return ddo;

	}



//// Controller
	NarrowItDownController.$inject=['$scope','MenuSearchService'];
	function NarrowItDownController($scope, MenuSearchService){
		var menu = this;

		menu.buttonActivated = function(){
			// console.log("Search term is " + $scope.searchWord);
			// console.log("Button activated!");
			menu.nothingFoundDisplay = false;

			if($scope.searchWord === undefined){
				//			console.log("Search word is undefined");
				menu.nothingFoundDisplay = true;
				menu.found=[];
			}
			if ($scope.searchWord !== undefined && $scope.searchWord.trim().length === 0){
				//			console.log("No search word");
				menu.nothingFoundDisplay = true;
				menu.found=[];
			}


			if (!menu.nothingFoundDisplay){
				menu.found = MenuSearchService.getMatchedMenuItems($scope.searchWord);
				menu.found.then( function (foundItems){
					menu.found = foundItems;
					if(menu.found.length === 0){
		//				console.log("No items found");
						menu.nothingFoundDisplay = true;
					}
				})
				.catch(function (error){
					console.log("Something went wrong");
				});

			}

		};

		menu.removeItem = function(itemIndex){
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
	//					console.log("search term found!");
						var item = {
								name: response.data.menu_items[i].name,
								short_name : response.data.menu_items[i].short_name,
								description : response.data.menu_items[i].description
						};
						foundItems.push(item);
					}
				}
				return foundItems;

			})
			.catch(function (error){
				console.log("Something went wrong");
			});

		};

	}


})();
