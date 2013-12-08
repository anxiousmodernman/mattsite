'use strict';


// Declare app level module which depends on filters, and services
angular.module('mattsite', [
  'ngRoute',
  'mattsite.filters',
  'mattsite.services',
  'mattsite.directives',
  'mattsite.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bio', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/items', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
