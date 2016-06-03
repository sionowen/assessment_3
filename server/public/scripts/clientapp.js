var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "HomeController"
    })
    .when('/other', {
      templateUrl: '/views/other.html',
      controller: "OtherController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);
