var app = angular.module('portfolio', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        //homepage
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

    //
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);


app.controller('MainCtrl', function () {});