(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module("sampleApp", ['ngRoute']);
angular.module("sampleApp").controller("RouteController", ["$routeParams", "code", require("./controllers")]);
angular.module("sampleApp").config(["$routeProvider","$locationProvider",require("./routing")]);
angular.module("sampleApp").factory("code",require("./factories"));
},{"./controllers":2,"./factories":3,"./routing":4}],2:[function(require,module,exports){
module.exports = function($routeParams,code){
    this.content1="Contenu du template de route1";
    this.params=$routeParams;
    this.code=code;
};
},{}],3:[function(require,module,exports){
module.exports = function() {
    return {
        value:"noCode"
    }
}
},{}],4:[function(require,module,exports){
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
},{}]},{},[1]);
