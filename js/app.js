var app = angular.module('notepad', [
  'ngRoute'
]);
 
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'pages/home.html',
        controller: 'MainCtrl'
      }).
      when('/editor', {
        templateUrl: 'pages/editor.html',
        controller: 'EditorCtrl'
      }).
      when('/editor/:id', {
        templateUrl: 'pages/editor.html',
        controller: 'EditorCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);