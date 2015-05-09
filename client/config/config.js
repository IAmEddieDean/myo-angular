'use strict';

angular.module('myo')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html'})
  .state('about', {url: '/about', templateUrl: '/views/general/about.html'})
  .state('faq', {url: '/faq', templateUrl: '/views/general/faq.html'})
  .state('contact', {url: '/contact', templateUrl: '/views/general/contact.html'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('dashboards', {url: '/dashboards', templateUrl: '/views/dashboards/dashboards.html', controller: 'DashboardsCtrl'})
  .state('decisions-show', {url: '/decisions/{decisionId}/show', templateUrl: '/views/decisions/decisions-show.html', controller: 'DecisionsCtrl'})
  .state('decisions', {url: '/decisions', templateUrl: '/views/decisions/decisions.html', controller: 'DecisionsCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('profile', {url: '/profile', templateUrl: '/views/users/profile.html', controller: 'ProfilesCtrl'});
});
