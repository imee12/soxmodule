(function () {
  "use strict";
  angular.module('demoApp')
    .controller('AdminController', function (SuperSoxService, $rootScope, $routeParams, $location) {
        var adminCtrl = this;

        SuperSoxService.getSox().success(function(data){
          adminCtrl.supersox = data;
        });

        SuperSoxService.getSock($routeParams.soxId).success(function(data){
           adminCtrl.singleItem = data;
         });

         adminCtrl.currentIndex = $routeParams.soxId;

        // adminCtrl.go = function (id) {
        //   $location.path('/edit/' + id);
        //   console.log("single sox id is:", adminCtrl.singleItem);
        // };

        adminCtrl.addSuperSox = function (newSox) {
          SuperSoxService.addSox(newSox);
          //$scope.newSox = {};
        };

        adminCtrl.deleteSuperSox = function (id) {
          SuperSoxService.deleteSox(id);

        };

        adminCtrl.getSingleSox = function (id) {

        };

        adminCtrl.editItem = function (sox, id) {

        SuperSoxService.editSox(sox, $routeParams.soxId);
        $location.path('/admin');
          // $location.path('/edit' + $routeParams.soxId);
        }


    });

})();
