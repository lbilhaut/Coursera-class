(function(){

  'use strict';
  
  angular.module('ShoppingList',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController )
  .service('ShoppingLisCheckOffService', ShoppingLisCheckOffService);
  
  ToBuyController.$inject=['ShoppingLisCheckOffService'];
  function ToBuyController(ShoppingLisCheckOffService){
  
  }
  
  
  AlreadyBoughtController.$inject=['ShoppingLisCheckOffService'];
  function AlreadyBoughtController(ShoppingLisCheckOffService){
  
  }
  
  
})();

