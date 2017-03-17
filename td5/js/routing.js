angular.module("MainModule").config(["$routeProvider","$locationProvider",function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/main', {
        templateUrl: 'templates/main.html',
        controller: 'MainController',
        controllerAs: 'mnCtrl3'
    }).
    when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'MainController',
        controllerAs:'mnCtrl1'
    }).
    when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'MainController',
        controllerAs: 'mnCtrl2'
    }).
    otherwise({
        redirectTo: '/main'
    });
    if(window.history && window.history.pushState){
        $locationProvider.html5Mode(true);
    }
}]);