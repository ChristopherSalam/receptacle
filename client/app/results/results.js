angular.module('receptacle.results', [])

.controller('LinksController', function ($scope, Links, $sce) {

  $scope.data = [2,2,31]; //{cans: "water bottle"}

  $scope.getLinks = function(){
    return $scope.data;
  }

  // $scope.getLinks();
});


  // $scope.trustSrc = function(src) {
  //   return $sce.trustAsResourceUrl(src);
  // }

    // Links.links().then(function(data){
    //   $scope.data = data;
    // });
