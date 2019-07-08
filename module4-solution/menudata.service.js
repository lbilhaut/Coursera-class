(function(){
  'use strict';  
angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject=('$http');
function MenuDataService($http){
  var service = this;

  service.getAllCategories = function(){
      var response = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      })
      console.log("Returning response");
      return response;
  };

}

})();
