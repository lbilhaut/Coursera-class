(function(){

  'use strict';
  
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController )
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
  
  //////////////////////////////////////
  ToBuyController.$inject=['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;
    
    toBuy.toBuyList = ShoppingListCheckOffService.getToBuyItems();
    
    toBuy.updateList = function(itemIndex){
	   ShoppingListCheckOffService.updateShoppingList(itemIndex);
	   };
  
  };
  
  
  //////////////////////////////////////  
  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
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
