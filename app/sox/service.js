(function () {
  "use strict";
  angular.module('demoApp')
    .factory('SuperSoxService', function ($http) {

      var url = 'http://tiy-fee-rest.herokuapp.com/collections/sox';

    //   var superSox = [
    //     {
    //       name: "Monkey Socks",
    //       photo: "images/monkeysox.jpg",
    //       price: "12.00"
    //     },
    //     {
    //       name: "This Sucks Socks",
    //       photo: "images/suxsox.jpg",
    //       price: "12.00"
    //     },
    //     {
    //       name: "South Park Socks",
    //       photo: "images/southparksox.jpg",
    //       price: "15.00"
    //     },
    //     {
    //       name: "Workaholic Socks",
    //       photo: "images/workaholicsox.jpg",
    //       price: "16.00"
    //     },
    //     {
    //     name: "Star Wars Socks",
    //     photo: "images/StarWarssox.jpg",
    //     price: "26.00"
    //   },
    //   {
    //   name: "Shark Socks",
    //   photo: "images/sharksox.jpg",
    //   price: "16.00"
    // },

    //  ];

      var boughtSuperSox = [


      ];

      var getSuperSox = function () {
        // return superSox;
        return $http.get(url);
      };

      var getBougthSox = function () {
          return boughtSuperSox;
      };

      var addSuperSox = function (newSox) {
        // superSox.push(sox);
        newSox.comments = [];
        console.log("add button works!");
        $http.post(url, newSox);
      };

      var deleteSuperSox = function (id) {
        // var index= superSox.indexOf(sox);
         console.log("delete button works!");
         console.log(id);
        // superSox.splice(index, 1);

        $http.delete(url + '/' + id);
      //  $rootScope.$broadcast('product:deleted');

      };

      var getSingleSox = function (id) {
        // return superSox[index];

        return $http.get(url + '/' + id);
      };

      var editSuperSox = function (sox, id) {
//      superSox[index] = sox;
      console.log("edit button works!");
      $http.put(url + '/' + id, sox);


    };

    var getBoughtSox = function () {
      return boughtSuperSox;

    };


      var buySuperSox = function (newBoughtSox) {
        console.log(newBoughtSox);
        boughtSuperSox.push(newBoughtSox);
        console.log(boughtSuperSox);
        console.log(boughtSuperSox.length);

      };

      // var getComs = function () {
      //
      //   return $http.get(url);
      // };



      var addComment = function (sox, NewCom) {
        console.log("add comment button works!");
      //  sox.comments.push(Newcom);


        sox.comments.push(NewCom);
        $http.put(url + '/' + sox._id, sox);
      };

  //     var getNumBoughtSox= function (boughtSuperSox) {
  //       return boughtSuperSox.length;
  //       console.log(boughtSuperSox.length);
  //     };
   //
  //     var getTotal = function () {
  //       var total= 0;
  //       if(boughtSuperSox.length > 0){
  //         for(var i=0; i < boughtSuperSox.length; i ++) {
  //           console.log(boughtSuperSox.length);
  //           total += +boughtSuperSox[i].price;
  //         }
  //       }
  //       return total;
  //  };

    // var deleteBoughtSox: function () {
    //
    // }
      return {

        getSox: getSuperSox,
        addSox: addSuperSox,
        deleteSox: deleteSuperSox,
        editSox: editSuperSox,
        buySox: buySuperSox,
        getBoughtSox: getBoughtSox,
      //  getNumSox: getNumBoughtSox,
        getSock: getSingleSox,
      //  getTotal: getTotal
        addCom: addComment,
      //  getComs: getComs,
      };
    })

})();
