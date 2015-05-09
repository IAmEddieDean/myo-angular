'use strict';



angular.module('myo')
.controller('DecisionsCtrl', function($rootScope, $scope, $state, User){

  $scope.choose = function(side){
    if (side === 'right'){
      userChoices.push($scope.right);
      getChoices('food');
    }else{
      userChoices.push($scope.left);
      getChoices('food');
    }
  };

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

    if(rand % 2){
      $rootScope.left = choiceInfo[options.good[indexA]];
      $rootScope.right = choiceInfo[options.bad[indexB]];
      console.log($scope.left.url);
      console.log($scope.right.url);
    }else{
      $scope.left = choiceInfo[options.good[indexB]];
      $scope.right = choiceInfo[options.bad[indexA]];
      console.log($scope.left.url);
      console.log($scope.right.url);
    }
  }

  var userChoices = [];

  // $scope.choose = function(event){
  //   console.log(event);
  //   var choice = event;
  //   if(choice === 82){
  //
  //   }else if(choice === 76){
  //   }
  //   checkResults();
  // };

  function checkResults(){
    if(userChoices.length === choices.foods.good.length){
      User.saveResults(userChoices)
      .then(function(response){
        console.log(response);
        $state.go('results');
      });
    }
  }

  // $scope.myMyo = $window.Myo.create();
  // $scope.myMyo.on('connected', function () {
  //   $scope.myMyo.setLockingPolicy('none');
  // });
  //
  // $scope.myMyo.on('wave_in', function(){
  //   console.log('left');
  //   // $scope.myMyo.off('wave_in', function(){
  //   // //   $scope.myMyo.off('wave_out',function(){
  //   //     $scope.choose('left');
  //   // //   });
  //   // });
  // });
  //
  // $scope.myMyo.on('wave_out', function(){
  //   console.log('right');
  //   // $scope.myMyo.off('wave_out',function(){
  //   // //   $scope.myMyo.off('wave_in',function(){
  //   //     $scope.choose('right');
  //   // //   });
  //   // });
  // });

});
