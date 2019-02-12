'use strict';

angular.
  module('newsList').
  component('newsList', {
    templateUrl: 'news-list/news-list.template.html',
    controller: ['Lucyd',
      function NewsListController(Lucyd) {

        this.onChange = function() {
          if (this.term) {
             Lucyd.query({term: this.term}, function (response) {
              this.items = response.payload[0];
            }.bind(this));
          }
        }

        $('#search').focus();
      }
    ]
  });
