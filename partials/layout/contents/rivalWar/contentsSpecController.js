'use strict';

define(['projectWeb'], function () {

  var contentsSpecModule = angular.module('contentsSpecControllerModule', ['rivalWarLayoutServiceModule']);

  contentsSpecModule.controller('contentsSpecController', ['$scope',
    '$ocLazyLoad', '$stateParams', 'rivalWarLayoutService',
    function ($scope, $ocLazyLoad, $stateParams, rivalWarLayoutService) {

      console.log('contentsSpecController');

    }]);

  contentsSpecModule.controller('specCtrlLeft', function ($window, $rootScope, $scope, $filter) {

    // init
    $scope.theme = "Galaxy 6";
    $scope.sort = {
      sortingOrder: 'progress',
      reverse: true
    };
    $scope.filteredItems = [];
    $scope.groupedItems = [];
    $scope.itemsPerPage = 5;
    $scope.currentPage = 0;
    $scope.pagedItems = [];
    $scope.gap = 5;
    $scope.items = [
      {"specTag": "tag name 1", "progress": 37},
      {"specTag": "tag name 2", "progress": 21},
      {"specTag": "tag name 3", "progress": 29},
      {"specTag": "tag name 4", "progress": 72},
      {"specTag": "tag name 5", "progress": 85},
      {"specTag": "tag name 6", "progress": 37},
      {"specTag": "tag name 7", "progress": 97},
      {"specTag": "tag name 8", "progress": 45},
      {"specTag": "tag name 9", "progress": 88},
      {"specTag": "tag name 10", "progress": 15},
      {"specTag": "tag name 11", "progress": 18},
      {"specTag": "tag name 12", "progress": 28},
      {"specTag": "tag name 13", "progress": 40},
      {"specTag": "tag name 14", "progress": 87},
      {"specTag": "tag name 15", "progress": 38},
      {"specTag": "tag name 16", "progress": 79},
      {"specTag": "tag name 17", "progress": 13},
      {"specTag": "tag name 18", "progress": 4},
      {"specTag": "tag name 19", "progress": 21},
      {"specTag": "tag name 20", "progress": 74},
      {"specTag": "tag name 21", "progress": 96},
      {"specTag": "tag name 22", "progress": 36},
      {"specTag": "tag name 23", "progress": 33},
      {"specTag": "tag name 24", "progress": 51},
      {"specTag": "tag name 25", "progress": 21},
      {"specTag": "tag name 26", "progress": 5},
      {"specTag": "tag name 27", "progress": 47},
      {"specTag": "tag name 28", "progress": 35},
      {"specTag": "tag name 29", "progress": 83},
      {"specTag": "tag name 30", "progress": 38},
      {"specTag": "tag name 31", "progress": 90},
      {"specTag": "tag name 32", "progress": 42},
      {"specTag": "tag name 33", "progress": 83},
      {"specTag": "tag name 34", "progress": 35},
      {"specTag": "tag name 35", "progress": 26},
      {"specTag": "tag name 36", "progress": 13},
      {"specTag": "tag name 37", "progress": 39},
      {"specTag": "tag name 38", "progress": 72},
      {"specTag": "tag name 39", "progress": 83},
      {"specTag": "tag name 40", "progress": 66},
      {"specTag": "tag name 41", "progress": 74},
      {"specTag": "tag name 42", "progress": 57},
      {"specTag": "tag name 43", "progress": 58},
      {"specTag": "tag name 44", "progress": 44},
      {"specTag": "tag name 45", "progress": 87},
      {"specTag": "tag name 46", "progress": 42},
      {"specTag": "tag name 47", "progress": 48},
      {"specTag": "tag name 48", "progress": 78},
      {"specTag": "tag name 49", "progress": 39},
      {"specTag": "tag name 50", "progress": 93}
    ];

    var searchMatch = function (haystack, needle) {
      if (!needle) {
        return true;
      }
      return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    };

    // init the filtered items
    $scope.search = function () {
      $scope.filteredItems = $filter('filter')($scope.items, function (item) {
        for (var attr in item) {
          if (searchMatch(item[attr], $scope.query))
            return true;
        }
        return false;
      });
      // take care of the sorting order
      if ($scope.sort.sortingOrder !== '') {
        $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
      }
      $scope.currentPage = 0;
      // now group by pages
      $scope.groupToPages();
    };

    // calculate page in place
    $scope.groupToPages = function () {
      $scope.pagedItems = [];

      for (var i = 0; i < $scope.filteredItems.length; i++) {
        if (i % $scope.itemsPerPage === 0) {
          $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.filteredItems[i]];
        } else {
          $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
        }
      }
    };

    $scope.range = function (size, start, end) {
      var ret = [];

      if (size < end) {
        end = size;
        start = size - $scope.gap;
      }
      for (var i = start; i < end; i++) {
        ret.push(i);
      }
      return ret;
    };

    $scope.prevPage = function () {
      if ($scope.currentPage > 0) {
        $scope.currentPage--;
      }
    };

    $scope.nextPage = function () {
      if ($scope.currentPage < $scope.pagedItems.length - 1) {
        $scope.currentPage++;
      }
    };

    $scope.setPage = function () {
      $scope.currentPage = this.n;
    };

    // functions have been describe process the data for display
    $scope.search();


  });

  // 비교상세스펙 - 오른쪽
  contentsSpecModule.controller('specCtrlRight', function ($scope, $filter) {
    // init
    $scope.theme = "iPhone 6";
    $scope.sort = {
      sortingOrder: 'progress',
      reverse: true
    };
    $scope.filteredItems = [];
    $scope.groupedItems = [];
    $scope.itemsPerPage = 5;
    $scope.currentPage = 0;
    $scope.pagedItems = [];
    $scope.gap = 5;
    $scope.items = [
      {"specTag": "tag name 1", "progress": 35},
      {"specTag": "tag name 2", "progress": 23},
      {"specTag": "tag name 3", "progress": 2},
      {"specTag": "tag name 4", "progress": 7},
      {"specTag": "tag name 5", "progress": 67},
      {"specTag": "tag name 6", "progress": 77},
      {"specTag": "tag name 7", "progress": 9},
      {"specTag": "tag name 8", "progress": 15},
      {"specTag": "tag name 9", "progress": 28},
      {"specTag": "tag name 10", "progress": 45},
      {"specTag": "tag name 11", "progress": 78},
      {"specTag": "tag name 12", "progress": 88},
      {"specTag": "tag name 13", "progress": 80},
      {"specTag": "tag name 14", "progress": 77},
      {"specTag": "tag name 15", "progress": 88},
      {"specTag": "tag name 16", "progress": 99},
      {"specTag": "tag name 17", "progress": 93},
      {"specTag": "tag name 18", "progress": 24},
      {"specTag": "tag name 19", "progress": 11},
      {"specTag": "tag name 20", "progress": 44},
      {"specTag": "tag name 21", "progress": 66},
      {"specTag": "tag name 22", "progress": 46},
      {"specTag": "tag name 23", "progress": 23},
      {"specTag": "tag name 24", "progress": 11},
      {"specTag": "tag name 25", "progress": 91},
      {"specTag": "tag name 26", "progress": 95},
      {"specTag": "tag name 27", "progress": 41},
      {"specTag": "tag name 28", "progress": 39},
      {"specTag": "tag name 29", "progress": 38},
      {"specTag": "tag name 30", "progress": 35},
      {"specTag": "tag name 31", "progress": 0},
      {"specTag": "tag name 32", "progress": 1},
      {"specTag": "tag name 33", "progress": 60},
      {"specTag": "tag name 34", "progress": 4},
      {"specTag": "tag name 35", "progress": 17},
      {"specTag": "tag name 36", "progress": 33},
      {"specTag": "tag name 37", "progress": 76},
      {"specTag": "tag name 38", "progress": 49},
      {"specTag": "tag name 39", "progress": 83},
      {"specTag": "tag name 40", "progress": 96},
      {"specTag": "tag name 41", "progress": 34},
      {"specTag": "tag name 42", "progress": 56},
      {"specTag": "tag name 43", "progress": 78},
      {"specTag": "tag name 44", "progress": 24},
      {"specTag": "tag name 45", "progress": 47},
      {"specTag": "tag name 46", "progress": 44},
      {"specTag": "tag name 47", "progress": 98},
      {"specTag": "tag name 48", "progress": 8},
      {"specTag": "tag name 49", "progress": 9},
      {"specTag": "tag name 50", "progress": 3}
    ];
    var searchMatch = function (haystack, needle) {
      if (!needle) {
        return true;
      }
      return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    };

    // init the filtered items
    $scope.search = function () {
      $scope.filteredItems = $filter('filter')($scope.items, function (item) {
        for (var attr in item) {
          if (searchMatch(item[attr], $scope.query))
            return true;
        }
        return false;
      });
      // take care of the sorting order
      if ($scope.sort.sortingOrder !== '') {
        $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
      }
      $scope.currentPage = 0;
      // now group by pages
      $scope.groupToPages();
    };

    // calculate page in place
    $scope.groupToPages = function () {
      $scope.pagedItems = [];

      for (var i = 0; i < $scope.filteredItems.length; i++) {
        if (i % $scope.itemsPerPage === 0) {
          $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.filteredItems[i]];
        } else {
          $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
        }
      }
    };

    $scope.range = function (size, start, end) {
      var ret = [];

      if (size < end) {
        end = size;
        start = size - $scope.gap;
      }
      for (var i = start; i < end; i++) {
        ret.push(i);
      }
      return ret;
    };

    $scope.prevPage = function () {
      if ($scope.currentPage > 0) {
        $scope.currentPage--;
      }
    };

    $scope.nextPage = function () {
      if ($scope.currentPage < $scope.pagedItems.length - 1) {
        $scope.currentPage++;
      }
    };

    $scope.setPage = function () {
      $scope.currentPage = this.n;
    };

    // functions have been describe process the data for display
    $scope.search();

  });
});
