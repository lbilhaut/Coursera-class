(function(){
  'use strict';

angular.module('MenuApp', ['ui.router']);

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL mathes
  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'home.html'
  })
  .state('categories',{
    url: '/categories',
    templateUrl: 'categories.template.html'
  });

};


})();
