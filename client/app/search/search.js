angular.module('receptacle.search', ["firebase"])
   .controller('SearchController',
      ["$scope", "$firebaseArray",
        function ($scope, $firebaseArray) {

        var obj = $firebaseArray(new Firebase("https://receptacle.firebaseio.com/"));

        $scope.search = ""; //this is the key line.

        obj.$loaded().then(function() {
          $scope.data = obj;
          $scope.names = $scope.data.map(function(element){
            return element.type;
          });
        });
    }])
