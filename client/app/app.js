var receptacle = angular.module('receptacle', [
  // 'receptacle.factory',
  // move data to here eventually.
  'receptacle.search',
  'ui.router'
]).config(function ($stateProvider, $urlRouterProvider) {
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