'use strict';

/* Filters */

angular.module('noaknafoFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
