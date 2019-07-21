(function () {
"use strict";

angular.module('public')
.component('userInfo', {
  templateUrl: 'src/public/users/user-info.html',
  bindings: {
    userdetail: '<'
  },
  controller: UserInfoPathController
});

UserInfoPathController.$inject = ['ApiPath'];
function UserInfoPathController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

// MenuItemController.$inject = ['ApiPath'];
// function MenuItemController(ApiPath) {
//   var $ctrl = this;
//   $ctrl.basePath = ApiPath;
// }

})();
