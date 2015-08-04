var receptacle = angular.module('receptacle', [
  // 'receptacle.services',
  'receptacle.search',
  'ui.router'
]);

receptacle.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('search', {
        url: '/',
        templateUrl: 'app/search/search.html',
        controller: 'SearchController'
      });
    $stateProvider
      .state('beta', {
        url: '/beta',
        template: '<h1>Next?</h1>' + '<h3>Finish preprocessor for all requests for trash in the local area</h3>',
        controller: 'SearchController'
      });
    $urlRouterProvider
      .otherwise('/');
  });

// receptacle.factory("sharedScope", function($rootScope) {
//     var scope = $rootScope.$new(true);
//     scope.data = [{type: 'cans', receptacle: 'blue bin'},
//                   {type: 'can', receptacle: 'blue bin'},
//                   {type: 'container', receptacle: 'blue bin'},
//                   {type: 'soap bottles', receptacle: 'blue bin'},
//                   {type: 'jars', receptacle: 'blue bin'},
//                   {type: 'buckets', receptacle: 'blue bin'},
//                   {type: 'aluminum', receptacle: 'blue bin'},
//                   {type: 'glass', receptacle: 'blue bin'},
//                   {type: 'bottle', receptacle: 'blue bin'},
//                   {type: 'foil', receptacle: 'blue bin'},
//                   {type: 'paper', receptacle: 'blue bin'},
//                   {type: 'magazine', receptacle: 'blue bin'},
//                   {type: 'food', receptacle: 'green bin'},
//                   {type: 'newspaper', receptacle: 'blue bin'},
//                   {type: 'fruits', receptacle: 'green bin'},
//                   {type: 'vegetables', receptacle: 'green bin'},
//                   {type: 'banana', receptacle: 'green bin'},
//                   {type: 'carrots', receptacle: 'green bin'},
//                   {type: 'bananas', receptacle: 'green bin'},
//                   {type: 'carrot', receptacle: 'green bin'},
//                   {type: 'styrafoam', receptacle: 'trash can'},
//                   {type: 'plastic bags', receptacle: 'trash can'},
//                   {type: 'plastic bags', receptacle: 'trash can'},
//                   {type: 'shrinkwrap', receptacle: 'trash can'},];
//     return scope;
// });
