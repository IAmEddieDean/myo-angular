'use strict';

angular.module('myo')
.controller('ProfilesCtrl', function($scope, User, $state, $window){

  checkProfile();
  $scope.isEdit = false;

  function checkProfile(){
    User.getProfile()
    .then(function(response){
      $scope.user = response.data;
      if(response.data.sex || response.data.email || response.data.twitter || response.data.age){
        $scope.isEdit = true;
      }
  });
}

  $scope.submit = function(user){
    var u = angular.copy(user);
    delete u.__v;
    delete u.createdAt;
    console.log(user);
    User.saveProfile(u)
    .then(function(response){
      console.log(response);
      $state.go('home');
    }).catch(function(){
      $window.swal({title: 'Profile Error', text: 'There was a problem saving your profile. Please try again.', type: 'error'});
    });
  };

});
