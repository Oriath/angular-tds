angular.module("App", ['ngRoute',require("./app2")]);
angular.module("App").controller("App1Controller", ["$scope",require("./controller1")]);
angular.module("App").directive("dirClient",require("./directives"));
angular.module("App").config(["$routeProvider",require("./routes")]);

var angular = require('angular-latest');
angular.module("myApp",[]);

var modules = [require('angular-animate')];
angular.module("myApp", modules);