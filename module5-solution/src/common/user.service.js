(function(){
'use strict';

angular.module("common")
.service("UserService", UserService);

UserService.$inject = ['$http', 'ApiPath'];
function UserService($http, ApiPath) {
  var service = this;
  service.message = '';
  var newUser = {};
  var dish = {};

  service.getItemInfo = function (itemNumber) {
     return $http.get(ApiPath + '/menu_items/' + itemNumber + '.json').then(function success (response) {
        var imgURL = ApiPath + '/images/' + itemNumber + '.jpg';
        dish.name = response.data.name;
        dish.description = response.data.description;
        dish.imageURL = imgURL;
        return dish;
        // console.log('getItemInfo method: Favorite Item is ' + response.data.name);
     })
     .catch(function (error){
       console.log('error while retrieve the user favorite dish');
     });
   };

   service.saveUser = function(user){
     newUser = {
       firstName: user.firstName,
       lastName: user.lastName,
       emailAddress: user.emailAddress,
       phoneNumber: user.phoneNumber,
       favoriteDish: user.favoriteDish
      };
      return newUser;
    }

  service.getUser = function(){
    return newUser;
  }

};

})();
