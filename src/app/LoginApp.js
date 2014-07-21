angular
    .module('ng-login', [
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/login/login.html'
            });
    });
