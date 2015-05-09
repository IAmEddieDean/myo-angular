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
    salad: {
      url: '/assets/salad.jpg',
      name: 'Salad',
      type: 'good'
    },
    grilledChicken: {
      url: '/assets/grilled-chicken.jpg',
      name: 'Grilled Chicken',
      type: 'good'
    },
    fish: {
      url: '/assets/salmon.jpg',
      name: 'Salmon',
      type: 'good'
    },
    vegetables: {
      url: '/assets/vegetables.jpg',
      name: 'Vegetables',
      type: 'good'
    },
    innNout: {
      url: '/assets/inn-n-out.jpg',
      name: 'Inn n Out',
      type: 'bad'
    },
    macAndCheese: {
      url: '/assets/mac-and-cheese.jpg',
      name: 'Mac and Cheese',
      type: 'bad'
    },
    iceCream: {
      url: '/assets/ice-cream.jpg',
      name: 'Ice Cream',
      type: 'bad'
    },
    chimichangas: {
      url: '/assets/chimichangas.jpg',
      name: 'Chimichangas',
      type: 'bad'
    }
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
      left.image = choiceInfo[options.good[indexA]].url;
      right.image = choiceInfo[options.bad[indexB]].url;
    }else{
      left.image = choiceInfo[options.good[indexB]].url;
      right.image = choiceInfo[options.bad[indexA]].url;
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
    checkResults();
  };
  function checkResults(){
    if($scope.userChoices.length === choices.foods.good.length){
      User.saveResults($scope.userChoices)
      .then(function(response){
        $state.go('results');
      });
    }
  }
});
