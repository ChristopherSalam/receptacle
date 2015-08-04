angular.module('receptacle.search', [])

  .controller('SearchController', function ($scope) {

    $scope.search = '';
    // $scope.data = [{type: 'cans', receptacle: 'blue bin'}, //address1: {addLine1: "berkeley recycling"}
    //                {type: 'newspaper', receptacle: 'blue bin'},
    //                {type: 'carrots', receptacle: 'green bin'},
    //                {type: 'styrafoam', receptacle: 'trash'}];

    // // $scope.getLinks = function(){
    //   return $scope.data;
    // }g

  });
  // $scope.trustSrc = function(src) {  /*removed from scope $sce Search */
  //   return $sce.trustAsResourceUrl(src);
  // }

  // $scope.search = function(){
  //   Links.links().then(function(data){
  //     $scope.data.links = data;
  //   });
  // }