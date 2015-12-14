angular.module('receptacle.search', [])
   .controller('SearchController',
      ["$scope",
        function ($scope) {
        $scope.search = "Redis";
    }]);
