angular.module('receptacle.search', [])

  .controller('SearchController', function ($scope) {

    $scope.data = {};
    $scope.search = function(){};

  });


  // $scope.trustSrc = function(src) {  /*removed from scope $sce Search */
  //   return $sce.trustAsResourceUrl(src);
  // }

  // $scope.search = function(){
  //   Links.links().then(function(data){
  //     $scope.data.links = data;
  //   });
  // }