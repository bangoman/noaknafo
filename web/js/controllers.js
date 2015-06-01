'use strict';

/* Controllers */

function GenericViewCtrl($scope) {
}
GenericViewCtrl.$inject = ['$scope'];


function ContactViewCtrl($scope, $http) {

    $scope.lastForm = {};

    $scope.resetForm = function() {
        $scope.form = angular.copy($scope.lastForm);
    }

}

function shopCtrl($scope, $http, $rootScope ) {

  $rootScope.SelectedImg = '10.jpg';
  $rootScope.leftImgId = 0;
  $rootScope.bottomImgId = 0;
  $scope.lastForm = {};

  $scope.leftImages = [
    {'id': '1',
     'img': '1.jpg'},
    {'id': '2',
     'img': '2.jpg'},
    {'id': '3',
     'img': '3.jpg'},
    {'id': '4',
     'img': '4.jpg'}
  ];

  $scope.bottomImages = [
    {'id': '1',
     'img': '1.jpg'},
    {'id': '2',
     'img': '2.jpg'},
  ];

  $scope.displayImages = [
    {'leftImgId': '1','BottomImgIid': '1','img': '1.jpg'},
    {'leftImgId': '1','BottomImgIid': '2','img': '2.jpg'},
    {'leftImgId': '2','BottomImgIid': '1','img': '3.jpg'},
    {'leftImgId': '2','BottomImgIid': '2','img': '4.jpg'},
    {'leftImgId': '3','BottomImgIid': '1','img': '5.jpg'},
    {'leftImgId': '3','BottomImgIid': '2','img': '6.jpg'},
    {'leftImgId': '4','BottomImgIid': '1','img': '7.jpg'},
    {'leftImgId': '4','BottomImgIid': '2','img': '8.jpg'},
   
  ];

  $scope.resetForm = function() {
    
    $scope.form = angular.copy($scope.lastForm);
  }

  $scope.prev = function () {
    
    alert("prev pressed");
  }

  $scope.next = function () {
    
    alert("next pressed");
  }

  $scope.getLeftImg = function ( id ) {

    // alert(id);
    $rootScope.leftImgId = id;
    $scope.get_image();
  }
  
  $scope.getBottomImg = function ( id ) {

    $rootScope.bottomImgId = id;
    $scope.get_image();

  }

  $scope.get_image = function() {

    console.log($rootScope.leftImgId + '::' + $rootScope.bottomImgId );
    // have to cal api to get the right image here
    // for test: using if condition

    if ( $rootScope.leftImgId == 1 && $rootScope.bottomImgId == 1 ) {

      $rootScope.SelectedImg = '1.jpg';
    } else if ( $rootScope.leftImgId == 2 && $rootScope.bottomImgId == 1 ) {

      $rootScope.SelectedImg = '2.jpg';
    } else if ( $rootScope.leftImgId == 3 && $rootScope.bottomImgId == 1 ) {

      $rootScope.SelectedImg = '3.jpg';
    } else if ( $rootScope.leftImgId == 4 && $rootScope.bottomImgId == 1 ) {

      $rootScope.SelectedImg = '4.jpg';
    } else if ( $rootScope.leftImgId == 1 && $rootScope.bottomImgId == 2 ) {

      $rootScope.SelectedImg = '5.jpg';
    } else if ( $rootScope.leftImgId == 2 && $rootScope.bottomImgId == 2 ) {

      $rootScope.SelectedImg = '6.jpg';
    } else if ( $rootScope.leftImgId == 3 && $rootScope.bottomImgId == 2 ) {

      $rootScope.SelectedImg = '7.jpg';
    }  else if ( $rootScope.leftImgId == 4 && $rootScope.bottomImgId == 2 ) {

      $rootScope.SelectedImg = '8.jpg';
    } else
    {
      $rootScope.SelectedImg = '10.jpg';

    }
  };

}

ContactViewCtrl.$inject = ['$scope', '$http'];
