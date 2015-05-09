'use strict';

angular.module('myo')
.factory('Gesture', function($rootScope, $http, nodeUrl){

  function Gesture(){
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

  return Gesture;
});
