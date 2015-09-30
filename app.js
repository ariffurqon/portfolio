var app = angular.module('portfolio', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainCtrl'
        })
        .when('/freelance', {
            templateUrl: 'views/projects.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

});


app.controller('MainCtrl', function () {});