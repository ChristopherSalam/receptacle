var receptacle = angular.module('receptacle', [
  // 'receptacle.services',
  'receptacle.search',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('search', {
        url: '/',
        templateUrl: 'app/search/search.html',
        controller: 'SearchController'
      });
    $stateProvider
      .state('contacts', {
        template: '<h1>My Contacts</h1>'
      });
    $urlRouterProvider
      .otherwise('/');
  });
