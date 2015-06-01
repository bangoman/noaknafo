'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: GenericViewCtrl});
    $routeProvider.when('/shop', {templateUrl: 'partials/shop.html', controller: shopCtrl});
    $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: GenericViewCtrl});
    $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: GenericViewCtrl});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
