var receptacle = angular.module('receptacle', [
  // 'receptacle.factory',
  // move data to here eventually.
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
      //presentation only.
    $stateProvider
      .state('beta', {
        url: '/beta',
        template: '<h1 class="next">Next?</h1>' +
        '<h3 class="next">Finish preprocessor for all requests' +
        ' for trash that goes into curbside bins,</h3>' +
        ' <h3 class="next"> using local database then Tie in API from Earth911, for coverage on ' +
        'hazardous wastes and materials that go to special places</h3>' +
        '<h3 class="next">The scope of my project grew, it should work throughout the U.S.</h3>',
        controller: 'SearchController'
      });
      //presentation only.
    $stateProvider
      .state('intro', {
        url: '/intro',
        template: '<h1 class="intro">Why?</h1>' + '<h3 class="intro">I am that guy that has' +
        ' lightbulbs and batteries lying around his room.</h3>' +
        ' <h3 class="intro">When pitching the project, a database for recycling information' +'<h3>'
        + '<h3 class="intro"> and creating an ' +
        '<a style="font-size: 125%;"target="_blank" href="http://api.earth911.com/docs/method/earth911.getMaterials/"> API ' +
        '</a> for this project was discussed.</h3>' +
        '<h3 class="intro">Built starting point for UI, front end & preprocessing simple items </h3>' +
        '<h3 class="intro"> that can be sent to bins we have access to.</h3>',
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
