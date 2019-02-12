'use strict';

angular.
  module('core.lucyd').
  factory('Lucyd', ['$resource',
    function($resource) {
      return $resource('/news', {}, {
        query: {
          method: 'GET'
        }
      });
    }
  ]);
