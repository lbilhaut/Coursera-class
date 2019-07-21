(function(){
  "use strict";

  angular.module('public')
  .controller('UserController', UserController);

  UserController.$inject = ['UserService'];
  function UserController(UserService) {
    var $ctrl = this;

    $ctrl.user = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      favoriteDish: ''
    }

    $ctrl.completed=false;
    $ctrl.dishExist = true;
    $ctrl.message = '';

    $ctrl.signupSubmit = function(menuNumber){

        var promise = UserService.getItemInfo(menuNumber);

        promise.then(function (response){
          if(response === undefined){
            $ctrl.dishExist = false;
            $ctrl.completed=false;
          }
          else{
            $ctrl.dishExist = true;
            UserService.saveUser($ctrl.user);
            $ctrl.completed = true;
            $ctrl.dishName = response.name;
          }
        })
        .catch(function(error){
          console.log(error);
        });
    };
  };

})();
