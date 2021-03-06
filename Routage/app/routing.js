module.exports = function($routeProvider, $locationProvider) {
        $routeProvider.
        when('/route1', {
            templateUrl: 'views/route1-template.html',
            controller: 'RouteController',
            controllerAs:'rtCtrl1'
        }).
        when('/route2/:nom', {
            templateUrl: 'views/route2-template.html',
            controller: 'RouteController',
            controllerAs: 'rtCtrl2'
        }).otherwise({
            redirectTo: '/route1'
        });
        if(window.history && window.history.pushState){
            $locationProvider.html5Mode(true);
        }
    };