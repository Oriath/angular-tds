var app = angular.module("CurrencyApp",[]);

app.config(['$sceDelegateProvider', function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://free.currencyconverterapi.com/**'
    ]);
}]);