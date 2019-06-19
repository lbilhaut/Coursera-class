(function(){

  'use strict';
  
  angular.module('ShoppingList',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController )
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
  
  //////////////////////////////////////
  ToBuyController.$inject=['$scope','ShoppingListCheckOffService'];
  function ToBuyController($scope, ShoppingListCheckOffService){
    var toBuy = this;
    
    toBuy.toBuyList = ShoppingListCheckOffService.getToBuyItems();
   toBuy.updateList = function(itemIndex){
	   ShoppingListCheckOffService.updateShoppingList(itemIndex);
	   };
  
  };
  
  
  //////////////////////////////////////  
  AlreadyBoughtController.$inject=['$scope','ShoppingListCheckOffService'];
  function AlreadyBoughtController($scope, ShoppingListCheckOffService){
    var alreadyBought = this;
    
    alreadyBought.alreadyBoughtList = ShoppingListCheckOffService.getBoughtItems();
  };
  
  //////////////////////////////////////
  function ShoppingListCheckOffService(){
    var service = this;
    
  var toBuyItems =[
    {
     name: "Cookies",
     quantity: 1
    },
    {
     name: "Chips",
     quantity: 2
    },
    {
     name: "Houmous",
     quantity: 3
    },
    {
     name: "Carrot",
     quantity: 4
    },
    {
     name: "Drinks",
     quantity: 5
    }
  ];
    
    var boughtItems =[];
    
    service.getToBuyItems = function(){
    	return toBuyItems;
    };
    
    service.getBoughtItems = function(){
      return boughtItems;
    };
    
    service.updateShoppingList = function(itemIndex){
      var item = toBuyItems[itemIndex];
      toBuyItems.splice(itemIndex,1);
      boughtItems.push(item);
    };
    
    
  };
  
  
})();
