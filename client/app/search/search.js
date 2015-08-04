angular.module('receptacle.search', [])

  .controller('SearchController',
      ['$scope', '$location', '$anchorScroll',
        function ($scope, $location, $anchorScroll) {
        $scope.length = this.length;
        $scope.gotoBottom = function () {

          $location.hash('bottom');
          $anchorScroll();
        };
      }]);