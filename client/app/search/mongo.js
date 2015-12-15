angular.module('receptacle.mongo', [])
   .controller('MongoController',
      ["$scope", function MongoController($scope, $http) {

        $scope.search = "";

          $http({
            method:"POST",
            url: '/mongo',
            accepts: "application/json",
            datatype:"json",
            data: { "query" : query },
            error: function(jqxhr, textstatus, errorthrown){ console.log("error",query,errorthrown); }
          }).then(function(response) {
              $scope.data = response.data;
              console.log(response);
            });

          $scope.names = $scope.data.map(function(element){
            return element.type;
          });
    }]);
