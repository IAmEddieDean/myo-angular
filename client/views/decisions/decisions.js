'use strict';

angular.module('myo')
.controller('DecisionsCtrl', function($scope, $state, User){
  var choices = {
    foods: {
      good: ['salad', 'grilledChicken', 'fish', 'vegetables'],
      bad: ['innNout', 'macAndCheese', 'iceCream', 'chimichangas']
    }
  };

  var choiceInfo = {
    salad: '/assets/salad.jpg',
    grilledChicken: '/assets/grilled-chicken.jpg',
    fish: '/assets/salmon.jpg',
    vegetables: '/assets/vegetables.jpg',
    innNout: '/assets/inn-n-out.jpg',
    macAndCheese: '/assets/mac-and-cheese.jpg',
    iceCream: '/assets/ice-cream.jpg',
    chimichangas: '/assets/chimichangas.jpg'
  };

  getChoices('food');

  function getChoices(category){
    switch (category){
      case 'food':
        showChoices(choices.foods);
        break;
    }
  }

  function showChoices(options){
    var rand = Math.ceil(Math.random() * 2);
    var len = options.good.length;
    var indexA = Math.ceil(Math.random() * len) -1;
    var indexB = Math.ceil(Math.random() * len) -1;
    var left = {};
    var right = {};

    if(rand % 2){
      left.image = choiceInfo[options.good[indexA]];
      right.image = choiceInfo[options.bad[indexB]];
    }else{
      left.image = choiceInfo[options.good[indexB]];
      right.image = choiceInfo[options.bad[indexA]];
    }
    $scope.left = left;
    $scope.right = right;
  }

  $scope.good = 0;
  $scope.bad = 0;
  $scope.userChoices = [];

  $scope.click = function(choice){

  };

  $scope.choose = function(choice){
    $scope.userChoices.push(choice);
    getChoices('food');
    console.log($scope.userChoices.keys());
    checkResults();
  };
  function checkResults(){
    if($scope.userChoices.length === choices.foods.good.length){
      User.saveResults($scope.userChoices)
      .then(function(response){
        console.log(response);
        $state.go('results');
      });
    }
  }
});
