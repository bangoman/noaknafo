'use strict';

/* Controllers */

angular.module('noaknafoCtrl', [])
  
/* 
 * @GenericViewCtrl
 *
 */
  .controller('GenericViewCtrl', [ '$scope', '$http', '$rootScope', '$route', '$routeParams', function( $scope, $http, $rootScope, $route, $routeParams ) {

    $rootScope.activeTab = $route.current.activeTab; 
  }])

/* 
 * @shopCtrl
 *
 */
  .controller('shopCtrl', [ '$scope', '$http', '$rootScope', '$route', '$routeParams', '$window', function( $scope, $http, $rootScope, $route, $routeParams, $window ) {

    var windowH = $window.innerHeight;
    // $scope.scrollH = windowH * 0.8;
    $scope.scrollHeight = windowH * 0.5 +'px';
    console.log( $scope.scrollHeight );
    $rootScope.activeTab = $route.current.activeTab; 
    $rootScope.SelectedImg = '10.jpg';
    $rootScope.SelectedImgMob = '10.jpg';

    $rootScope.leftImgId = 0;
    $rootScope.bottomImgId = 0;

    $scope.leftImages = [
      {'id': '1',
       'img': '1.jpg'},
      {'id': '2',
       'img': '2.jpg'},
      {'id': '3',
       'img': '3.jpg'},
      {'id': '4',
       'img': '4.jpg'},
       {'id': '5',
       'img': '1.jpg'},
      {'id': '6',
       'img': '2.jpg'},
      {'id': '7',
       'img': '3.jpg'},
      {'id': '8',
       'img': '4.jpg'},
    ];

    $scope.bottomImages = [
      {'id': '1',
       'img': '1.jpg'},
      {'id': '2',
       'img': '2.jpg'},
      {'id': '3',
       'img': '3.jpg'},
      {'id': '4',
       'img': '4.jpg'},
      {'id': '5',
       'img': '1.jpg'},
      {'id': '6',
       'img': '2.jpg'},
      {'id': '7',
       'img': '1.jpg'},
      {'id': '8',
       'img': '2.jpg'},
      {'id': '9',
       'img': '3.jpg'},
      {'id': '10',
       'img': '4.jpg'},
      {'id': '11',
       'img': '1.jpg'},
      {'id': '12',
       'img': '2.jpg'}  
    ];

    $scope.displayImages = [
      {'leftImgId': '1','BottomImgId': '1','img': '1.jpg'},
      {'leftImgId': '1','BottomImgId': '2','img': '2.jpg'},
      {'leftImgId': '2','BottomImgId': '1','img': '3.jpg'},
      {'leftImgId': '2','BottomImgId': '2','img': '4.jpg'},
      {'leftImgId': '3','BottomImgId': '1','img': '5.jpg'},
      {'leftImgId': '3','BottomImgId': '2','img': '6.jpg'},
      {'leftImgId': '4','BottomImgId': '1','img': '7.jpg'},
      {'leftImgId': '4','BottomImgId': '2','img': '8.jpg'},
    ];

    // Ctroller to scroll to top 
    $scope.scrollTop = function () {

      var element = angular.element( document.querySelector( '#scroll_list' ) );  
      var scroll_cover = angular.element( document.querySelector( '.scroll_cover' ) );
      var top = element[0].offsetTop;
      var scrollHeight = scroll_cover[0].scrollHeight;
      var clientHeight = scroll_cover[0].clientHeight;
      var nodeLength = element[0].children.length;

      if ( nodeLength > 0) {
        
        var nodeHeight = element[0].children[0].clientHeight;
        var totalNodeH = nodeLength * nodeHeight;
        var nh = totalNodeH - clientHeight; 

        if ( scrollHeight >=  (clientHeight + (-1*top ))) {

          top = top - ( 2 * (nodeHeight ) );
          console.log('top',top);
          element.css('top',top+'px');
        } else {
          var fix = -1*(scrollHeight - clientHeight);
          element.css('top',fix+'px');
        };

      };
      
    }

    // Ctroller to scroll to bottom
    $scope.scrollBottom = function () {

      var element = angular.element( document.querySelector( '#scroll_list' ) ); 
      var scroll_cover = angular.element( document.querySelector( '.scroll_cover' ) );

      var top = element[0].offsetTop;
      var clientHeight = scroll_cover[0].clientHeight;
      var nodeLength = element[0].children.length;

      if ( nodeLength > 0) {
        
        var nodeHeight = element[0].children[0].clientHeight;
        var totalNodeH = nodeLength * nodeHeight;
        var nh = totalNodeH - clientHeight; 

        if ( top < ( -1 * clientHeight / 4 ) ) {

          top = top + ( 2 * nodeHeight );
          // console.log(top);
          element.css('top',top+'px');
        };
      };
    };

    // Ctroller to scroll to the Left 
    $scope.scrollLeft = function () {

      var element = angular.element( document.querySelector( '#scroll_list_1' ) );  
      var scroll_cover = angular.element( document.querySelector( '.scroll_cover_1' ) );

      var left = element[0].offsetLeft;
      var clientWidth = scroll_cover[0].clientWidth;

      var nodeLength = element[0].children.length;
      // console.log(nodeLength);
      if ( nodeLength > 0) {
        
        var nodeWidth = element[0].children[0].clientWidth;
        var totalNodeW = nodeLength * nodeWidth;
        var nh = totalNodeW - clientWidth; 

        if ( (left * -1 ) < ( totalNodeW - ( clientWidth ) ) ) {

          left = left - (2 * nodeWidth);
          // console.log('left:',left);
          element.css('left',left+'px');
        };
      };
    };

    // Ctroller to scroll to the right
    $scope.scrollRight = function () {

      var element = angular.element( document.querySelector( '#scroll_list_1' ) );  
      var scroll_cover = angular.element( document.querySelector( '.scroll_cover_1' ) );
      var left = element[0].offsetLeft;
      var clientWidth = scroll_cover[0].clientWidth;
      var nodeLength = element[0].children.length;

      if ( nodeLength > 0) {
        var nodeWidth = element[0].children[0].clientWidth;
        var totalNodeW = nodeLength * nodeWidth;
        var nh = totalNodeW - clientWidth; 

        if ( left < ( -1 * clientWidth / 4 ) ) {

          left = left + ( 2 * nodeWidth );
          // console.log(top);
          element.css('left',left+'px');
        };
      };
    };

    $scope.getLeftImg = function ( id ) {

      var child_element = angular.element( document.querySelector( '#child_'+id ) );
      var scroll_list = angular.element( document.querySelector( '#scroll_list' ) );  
      var scroll_cover = angular.element( document.querySelector( '.scroll_cover' ) );  
      var clientHeight = scroll_cover[0].clientHeight
      var scrollHeight = scroll_list[0].scrollHeight;

      var top = ( -1 * child_element[0].offsetTop );  
      console.log( 'top',top );

      if ( top >=  (-1*(scrollHeight - clientHeight) )) {

        scroll_list.css('top',top+'px');
      } else {
        var fix = -1*(scrollHeight - clientHeight);
        scroll_list.css('top',fix+'px');
      };
         
      $rootScope.leftImgId = id;
      $scope.get_image();
      $scope.showNext();
    };
    
    $scope.getBottomImg = function ( id ) {
     
      var child_element = angular.element( document.querySelector( '#bot_child_'+id ) );
      var scroll_list = angular.element( document.querySelector( '#scroll_list_1' ) );  
      var scroll_cover = angular.element( document.querySelector( '.scroll_cover_1' ) );  

      var clientWidth = scroll_cover[0].clientWidth
      var scrollWidth = scroll_list[0].scrollWidth;
      var left = ( -1 * child_element[0].offsetLeft );  

      if ( left >=  (-1*(scrollWidth - clientWidth) )) {

        scroll_list.css('left',left+'px');
      } else {
        var fix = -1 * (scrollWidth - clientWidth);
        scroll_list.css('left',fix+'px');
      };

      $rootScope.bottomImgId = id;
      $scope.get_mob_image();
      $scope.get_image();
    };

    // Get preview image in mobile screen
    $scope.get_mob_image = function () {

      if ( $rootScope.bottomImgId ) {      
        $rootScope.SelectedImgMob = $scope.get_image_by_id( $scope.bottomImages, $rootScope.bottomImgId );
      }
    };

    // Get preview image in desktop
    $scope.get_image = function() {

      var arr = $scope.displayImages;
      for (var d = 0, len = arr.length; d < len; d += 1) {

        if ( (arr[d].leftImgId === $rootScope.leftImgId) && (arr[d].BottomImgId === $rootScope.bottomImgId) ) {
          $rootScope.SelectedImg = arr[d].img;
        } 
      }
      console.log('SelectedImg',$rootScope.SelectedImg);
    };

    // Get image from imageset 2 
    // For mobile screens
    $scope.get_image_by_id = function(arr, id) {
      for (var d = 0, len = arr.length; d < len; d += 1) {
        if (arr[d].id === id) {
          return arr[d].img;
          console.log('sasas', arr[d].img);
        }
      }
    };

    //image manipulation in small screens
    $scope.showImgMob = 0;
    $scope.showPrevMob = 0;

    $scope.showNext = function () {
      
      $scope.showPrevMob = 0;
      $scope.showImgMob = 1;
    };

    $scope.showPrev = function () {
      
      $scope.showPrevMob = 0;
      $scope.showImgMob = 0;
      
    };

    $scope.showPreview = function () {
      
      $scope.showPrevMob = 1;
    };
  }])

/* 
 * @GenericViewCtrl
 *
 */
  .controller('contactCtrl', [ 'Wizards', '$scope', '$http', '$rootScope', '$route', '$routeParams', function( $scope, $http, $rootScope, $route, $routeParams, Wizards ) {

    console.log('contactctrl');
  }]);
