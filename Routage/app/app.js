angular.module("sampleApp", ['ngRoute']);
angular.module("sampleApp").controller("RouteController", ["$routeParams", "code", require("./controllers")]);
angular.module("sampleApp").config(["$routeProvider","$locationProvider",require("./routing")]);
angular.module("sampleApp").factory("code",require("./factories"));