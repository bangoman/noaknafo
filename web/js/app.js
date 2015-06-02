'use strict';

/* App Module */

angular.module('noaknafoWeb', [ 'ngRoute','noaknafoAnimations','noaknafoCtrl','noaknafoFilters','noaknafoServices', 'noaknafoDirective' ])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'GenericViewCtrl', activeTab:  "home"});
    $routeProvider.when('/shop', {templateUrl: 'partials/shop.html', controller: 'shopCtrl', activeTab:  "shop"});
    $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'GenericViewCtrl', activeTab:  "about"});
    $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'GenericViewCtrl', activeTab:  "contact"});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
