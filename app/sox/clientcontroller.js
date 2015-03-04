(function () {
  "use strict";
  angular.module('demoApp')
    .controller('ClientController', function (SuperSoxService, $rootScope, $routeParams, $location) {
        var clientCtrl = this;

      //  clientCtrl.supersox = SuperSoxService.getSox();

       SuperSoxService.getSox().success(function(data){
         clientCtrl.supersox = data;
       });




       SuperSoxService.getSock($routeParams.soxId).success(function(data){
          clientCtrl.singleItem = data;
        });


        clientCtrl.currentIndex = $routeParams.soxId;

       clientCtrl.boughtSuperSox = SuperSoxService.getBoughtSox();
      //  clientCtrl.total = SuperSoxService.getTotal();


        clientCtrl.go = function (id) {
          $location.path('/detail/' + $routeParams.soxId);
        };

        // clientCtrl.alertMe = function () {
        //   alert("Hi from mainCtrl");
        // };

        // clientCtrl.addSuperHero = function (newHero) {
        //   SuperHerosService.addHero(newHero);
        //   $scope.newHero = {};
        // };
        //
        // clientCtrl.deleteSuperHero = function () {
        //   SuperHerosService.deleteHero();
        //
        // };



        clientCtrl.buySuperSox = function (newBoughtSox) {
          console.log("buy button works!");
          console.log(newBoughtSox);
          SuperSoxService.buySox(newBoughtSox);

          //  $scope.newBoughtSox = {};

        };

        // clientCtrl.numSoxInCart = SuperSoxService.getNumSox(clientCtrl.boughtSuperSox);
        //
        // clientCtrl.getTotal = function(boughtSuperSox) {
        //   console.log()
        // };

    });

})();
