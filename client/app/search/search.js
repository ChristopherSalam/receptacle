angular.module('receptacle.search', [])
   .controller('SearchController',
      ['$scope',
        function ($scope, $location) {
        $scope.search = ""; //this is the key line.
		$scope.data = [{type: 'cans', receptacle: 'blue bin'},
                        {type: 'can', receptacle: 'blue bin'},
                        {type: 'container', receptacle: 'blue bin'},
                        {type: 'soap bottles', receptacle: 'blue bin'},
                        {type: 'jars', receptacle: 'blue bin'},
                        {type: 'buckets', receptacle: 'blue bin'},
                        {type: 'aluminum', receptacle: 'blue bin'},
                        {type: 'glass', receptacle: 'blue bin'},
                        {type: 'bottle', receptacle: 'blue bin'},
                        {type: 'foil', receptacle: 'blue bin'},
                        {type: 'paper', receptacle: 'blue bin'},
                        {type: 'magazine', receptacle: 'blue bin'},
                        {type: 'food', receptacle: 'green bin'},
                        {type: 'newspaper', receptacle: 'blue bin'},
                        {type: 'fruits', receptacle: 'green bin'},
                        {type: 'vegetables', receptacle: 'green bin'},
                        {type: 'banana', receptacle: 'green bin'},
                        {type: 'carrots', receptacle: 'green bin'},
                        {type: 'bananas', receptacle: 'green bin'},
                        {type: 'carrot', receptacle: 'green bin'},
                        {type: 'styrafoam', receptacle: 'trash can'},
                        {type: 'plastic bags', receptacle: 'trash can'},
                        {type: 'plasticbags', receptacle: 'trash can'},
                        {type: 'shrinkwrap', receptacle: 'trash can'},
                        {type: 'HELLAtoxicwaste', receptacle: 'wildcard'},
                        {type: 'lightbulbs', receptacle: 'bulb'},
                        {type: 'cardboard', receptacle: 'cardboard'},
                        {type: 'motor oil', receptacle: 'wildcard'}]
        $scope.names = $scope.data.map(function(element){return element.type});
    //Load US States as options from CSV - but this can also be created dynamically
      }])
