var receptacle = angular.module('receptacle', [
  'receptacle.search',
  'ui.router'
]).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('search', {
        url: '/',
        templateUrl: 'app/search/search.html',
        controller: 'SearchController'
      })
      .state('searchFirebase', {
        url: '/firebase',
        templateUrl: 'app/search/searchFirebase.html',
        controller: 'SearchController'
      })
      .state('searchMongo', {
        url: '/mongo',
        templateUrl: 'app/search/searchMongo.html',
        controller: 'MongoController'
      })
      .state('searchRedis', {
        url: '/redis',
        templateUrl: 'app/search/searchRedis.html',
        controller: 'RedisController'
      })
      .state('intro', {
        url: '/intro',
        templateUrl: 'app/intro/intro.html'
      });
    $urlRouterProvider
      .otherwise('/');
  });
