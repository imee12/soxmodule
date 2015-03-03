(function(app) {

    app.config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: "common/views/main.html"
        })
        .when('/not-found', {
          templateUrl: "common/views/not-found.html"
        })
        .otherwise({
          redirectTo: '/not-found'
        });
    });

    app.run(function () {});

    app.controller('AppController', function ($scope) {

    });

}(angular.module("superSox", [
    'ngRoute',
])));

(function () {
  "use strict";
  angular.module("superSox")
    .controller("MainCtrl", function () {
      var main = this;
      main.heros = [
        {
          name: "Superman",
          photo: "http://www.placecage.com/100/100"
        },
        {
          name: "Black Widow",
          photo: "http://www.placecage.com/100/100"
        },
        {
          name: "Batman",
          photo: "http://www.placecage.com/100/100"
        },
        {
          name: "Wonder Woman",
          photo: "http://www.placecage.com/100/100"
        }
      ];

      main.notFound = "We're sorry, but the page you requested is not found."
  });
})();
