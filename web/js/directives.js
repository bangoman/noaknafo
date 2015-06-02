'use strict';

/* Directives */
angular.module('noaknafoDirective', ['ngResource'])

  /* 
   * @toggle
   * Toggle active class name in menu / shop page etc	
   */
  .directive('toggle', function toggleDirective() {
    // Constants
    var TOGGLE_CLASS = 'selected';
    var DEF_GROUPNAME = 'default';

    // Variables - Pivate;
    var groups = {};
    
    // DDO
    return {
      restrict: 'A',
      link: togglePostLink
    };

    // Functions - Definitions
    function addElement(groupName, elem) {
      var list = groups[groupName] || (groups[groupName] = []);
      if (list.indexOf(elem) === -1) list.push(elem);
    }
    
    function removeElement(groupName, elem) {
      var list = groups[groupName] || [];
      var idx = list.indexOf(elem);
      if (idx !== -1) list.splice(idx, 1); 
    }
    
    function setActive(groupName, elem) {
      angular.forEach(groups[groupName], function (el) {
        el.removeClass(TOGGLE_CLASS);
      });
      elem.addClass(TOGGLE_CLASS);
    }

    function togglePostLink(scope, elem, attrs) {
      var groupName = attrs.toggle || DEF_GROUPNAME;
      addElement(groupName, elem);

      elem.on('click', onClick);
      scope.$on('$destroy', onDestroy);

      // Helpers
      function onClick() {
        setActive(groupName, elem);
      }

      function onDestroy() {
        removeElement(groupName, elem);
      }
    }
  });