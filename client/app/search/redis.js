angular.module('receptacle.search', [])
   .controller('RedisController',
      ["$scope",
        function RedisController($scope) {
        $scope.search = "Redis";
    }]);
