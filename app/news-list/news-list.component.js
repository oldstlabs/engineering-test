'use strict';

angular.
  module('newsList').
  component('newsList', {
    templateUrl: 'news-list/news-list.template.html',
    controller: ['Lucyd',
      function NewsListController(Lucyd) {
        this.orderBy = 'title';

        this.onChange = function() {
          if (this.term) {
             Lucyd.query({term: this.term}, function (response) {
              this.items = response.payload[0];
              this.items.sort(function (a, b) {
                return (a[this.orderBy] < b[this.orderBy]) ? -1 : (a[this.orderBy] > b[this.orderBy]) ? 1 : 0;
              }.bind(this));
            }.bind(this));
          }
        }

        $('#search').focus();
      }
    ]
  });
