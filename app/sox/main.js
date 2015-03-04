(function () {
  "use strict";

  angular.module('demoApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/sox', {
        templateUrl: 'sox/sox.html',
        controller: 'SoxController as sox'
      })
      .when('/', {
        templateUrl: 'sox/views/splash.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/tiy', {
        template: '<h1>{{hello}}</h1><input type="text" ng-model="hello">'
      })
      .when('/not-found', {
        templateUrl: 'sox/views/404.html'
      })
      .when('/splash', {
        templateUrl: 'sox/views/splash.html',
        controller: 'MainController as mainCtrl' /// put what controller you want to control this here
      })
      .when('/admin', {
        templateUrl: 'sox/views/admin.html',
        controller: 'AdminController as adminCtrl' /// put what controller you want to control this here
      })
      .when('/client', {
        templateUrl: 'sox/views/client.html',
        controller: 'ClientController as clientCtrl' /// put what controller you want to control this here
      })

      .when('/about', {
        templateUrl: 'sox/views/about.html',
        controller: 'ClientController as clientCtrl' /// put what controller you want to control this here
      })

      .when('/edit/:soxIndex', {
        templateUrl: 'sox/views/editDetail.html',
        controller: 'AdminController as adminCtrl'

      })

      .when('/detail/:soxIndex',{
        templateUrl: 'sox/views/detail.html',
        controller: 'ClientController as clientCtrl'

      })

      .when('/shopcart', {
        templateUrl: 'sox/views/shopcart.html',
        controller: 'ClientController as clientCtrl'

      })


      .otherwise({
        redirectTo: 'sox/not-found'
      });



  })

  .constant('_', _);


})();
