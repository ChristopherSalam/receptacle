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


// app.controller("first", function($scope, sharedScope) {
//     $scope.data1 = sharedScope.data;
// });

// app.controller("second", function($scope, sharedScope) {
//     $scope.data2 = sharedScope.data;
// });