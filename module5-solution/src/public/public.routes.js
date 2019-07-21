(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.signup', {
      url: '/signup',
      templateUrl: 'src/public/users/signup.html',
      controller: 'UserController',
      controllerAs: 'UserCtrl'
    })
    .state('public.signup.user' , {
      url:'/signup/{menuNumber}',
      templateUrl: 'src/public/users/signin.html'
    })
    .state('public.myinfo', {
      url: '/myinfo',
      templateUrl: 'src/public/users/myinfo.html',
      controller: 'UserInfoController',
      controllerAs: 'UserInfoCtrl',
      resolve: {
        userInfo: ['UserService', function(UserService){
            var userinfo = UserService.getUser();
            // console.log("User name is "+ userinfo.firstName);
            // console.log("Favorite dish name is "+ userinfo.favoriteDish);
            return userinfo;
        }],
        itemInfo: ['UserService', function(UserService){
          // console.log("in the resolve of itemInfo");
          var userinfo = UserService.getUser();
          return UserService.getItemInfo(userinfo.favoriteDish);
        }]
      }
    });
}
})();
