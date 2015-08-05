angular.module('receptacle.search', [])

   .controller('SearchController',
      ['$scope', '$location', '$anchorScroll',
        function ($scope, $location, $anchorScroll) {
        $scope.search = ""; //this is the key line.

        $scope.gotoBottom = function () {

          $location.hash('bottom')
          $anchorScroll()
        };
      }])