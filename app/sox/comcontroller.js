(function () {
  "use strict";
  angular.module('demoApp')
    .controller('CommentController', function (SuperSoxService, $rootScope, $routeParams, $location) {
        var comCtrl = this;

    //  comCtrl.coms = SuperService.getComs();
      //  SuperSoxService.getComs().success(function(data){
      //    comCtrl.coms = data;
      //  });
      SuperSoxService.getSock($routeParams.soxId).success(function(data){
         comCtrl.singleItem = data;
       });

       comCtrl.currentIndex = $routeParams.soxId;

      comCtrl.addCom = function (sox, NewCom) {
        SuperSoxService.addCom(sox, NewCom);
      };

    });

  })();
