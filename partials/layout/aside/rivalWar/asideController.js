'use strict';

define(['projectWeb'], function () {

  var rivalWarAsideModule = angular.module('rivalWarAsideControllerModule', []);

  rivalWarAsideModule.controller('rivalWarAsideController',
    function ($rootScope, $scope, $http, $q) {

      console.log('rivalWarAsideController');

      $scope.init = function () {
        var def = $q.defer();
            $http({
            method: 'GET' ,
            cache: false,
            url: 'http://localhost:8080/rivalWar/api/menu/getChildMenu.do?c_id=2',
            headers: {
              'X-Requested-With':' XMLHttpRequest'
            }
          }).success(function(response) {
            $scope.warList = response;
            def.resolve(response);
          }).finally(function() {
            console.log('good');
          });
        return def.promise;
      };

    });
});