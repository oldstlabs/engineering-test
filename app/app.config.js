'use strict';

angular.
  module('newsApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<news-list></news-list>'
        }).
        otherwise('/');
    }
  ]);
