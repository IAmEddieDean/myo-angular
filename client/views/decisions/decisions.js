'use strict';

angular.module('myo')
.controller('DecisionsCtrl', function($scope, $state, User){
  getChoices('food');
  
  var choices = {
    foods: {
      good: ['salad', 'grilled chicken', 'fish', 'vegetables'],
      bad: ['inn n out', 'mac and cheese', 'ice cream', 'chimichangas']
    }
  };
  
  function getChoices(category){
    switch (category){
      case 'food':
        showChoices(choices.food);
        break;
    }
  }
  
  function showChoices(options){
    var rand = Math.ceiling(Math.random() * 2);
    var len = options.good.length - 1;
    var indexA = Math.ceiling(Math.random() * len);
    var indexB = Math.ceiling(Math.random() * len);

    if(rand % 2){
      $scope.left = options.good[indexA];
      $scope.right = options.bad[indexB];
    }else{
      $scope.left = options.bad[indexA];
      $scope.right = options.good[indexB];
    }
  }
  
  
  
  $scope.click = function(choice){
    
  };

});
