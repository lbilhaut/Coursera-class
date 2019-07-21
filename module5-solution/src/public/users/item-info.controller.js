(function () {
"use strict";

angular.module('public')
.controller('ItemInfoController', ItemInfoController);

ItemInfoController.$inject = ['itemInfo'];
function ItemInfoController(itemInfo) {
  var ctrl = this;
  ctrl.itemdetail = {};
  ctrl.itemdetail.name = itemInfo.name;
  ctrl.itemdetail.description = itemInfo.description;
  ctrl.itemdetail.imageURL = itemInfo.imageURL;
}


})();
