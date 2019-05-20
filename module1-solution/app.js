(function(){
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', checkingLunch);

  checkingLunch.$inject=['$scope'];

  function checkingLunch($scope){
    $scope.items = "";
    $scope.color = "black";


    $scope.countingItems = function(itemsArray){
      var itemsArray = $scope.items.split(',');

      if(itemsArray.length == 1 && itemsArray[0].trim().length == 0){
        $scope.message = "Please, enter data first";
      }

      else{
        for(var i = 0; i < itemsArray.length; i++){
            if(itemsArray[i].trim().length == 0){
              console.log("in the if for empty string");
              itemsArray.splice(i,1);
              i--;
            }
            console.log(itemsArray);
            console.log("lenth is " + itemsArray.length);

          if(itemsArray.length <= 3){
            $scope.message = "Enjoy!";
            $scope.color="lightgreen";
          }
          else{
            $scope.message = "Too much!";
            $scope.color="red";
          }

        }

      }
    };
  };


})();
