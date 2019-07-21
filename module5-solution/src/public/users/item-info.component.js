(function () {
"use strict";

angular.module('public')
.component('itemInfo', {
  templateUrl: 'src/public/users/item-info.html',
  bindings: {
    itemdetail: '<'
  },
  controller: ItemInfoPathController
});

  ItemInfoPathController.$inject = ['ApiPath'];
  function ItemInfoPathController(ApiPath) {
    var $ctrl = this;
    $ctrl.basePath = ApiPath;
  }

})();
