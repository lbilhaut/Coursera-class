(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['userInfo', 'itemInfo'];
function UserInfoController(userInfo, itemInfo) {
  var ctrl = this;
  ctrl.userdetail = {};
      ctrl.alreadySignedUp=false;
  if (userInfo != undefined && itemInfo != undefined){
    ctrl.alreadySignedUp=true;
    ctrl.userdetail.firstName = userInfo.firstName;
    ctrl.userdetail.lastName = userInfo.lastName;
    ctrl.userdetail.emailAddress = userInfo.emailAddress;
    ctrl.userdetail.phoneNumber = userInfo.phoneNumber;
    ctrl.userdetail.favoriteDish = userInfo.favoriteDish;

    ctrl.itemdetail = {};
    ctrl.itemdetail.name = itemInfo.name;
    ctrl.itemdetail.description = itemInfo.description;
    ctrl.itemdetail.imageURL = itemInfo.imageURL;
    }
  else{
 ctrl.alreadySignedUp = false;
  console.log("No user is signed up yet.")
  }

}

})();
