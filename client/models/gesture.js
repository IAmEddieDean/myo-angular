'use strict';

angular.module('myo')
.factory('Gesture', function($rootScope, $window){

  function Gesture(){
  }

  var myMyo = $window.Myo.create();
  myMyo.on('connected', function () {
    myMyo.setLockingPolicy('none');
  });

  myMyo.on('wave_in', function(){
    console.log('left');
    // myMyo.off('wave_in', function(){
    // //   myMyo.off('wave_out',function(){
    //     choose('left');
    // //   });
    // });
  });

  myMyo.on('wave_out', function(){
    console.log('right');
    // myMyo.off('wave_out',function(){
    // //   myMyo.off('wave_in',function(){
    //     choose('right');
    // //   });
    // });
  });

  return Gesture;
});
