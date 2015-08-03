angular.module('receptacle', [])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/links', {
      templateUrl: 'app/links/links.html',
      controller: 'LinksController'
    })
    .when('/shorten', {
      templateUrl: 'app/shorten/shorten.html',
      controller: 'ShortenController'
    })
});