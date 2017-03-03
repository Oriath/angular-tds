app.controller("CurrencyController", ['$http', function($http) {

    var self = this;

    this.currencies = {};

    $http.get('data/currencymap.json').then(function(response) {
            self.currencies = response.data;
        },
        function(response) {
            console.log("Erreur avec le statut Http : "+response.status);
        });

    this.from = "";
    this.to = "";
    this.what = 1;
    this.result = "";

    this.getResult = function(){
        $http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+from.code+'_'+to.code, {jsonpCallbackParam: 'callback'})
            .then(function(response) {
                self.result=response.data[self.from.code+'_'+self.to.code].val;
            });
    };

    this.swap = function(){
        tmp = self.from;
        self.from = self.to;
        self.to = tmp;
    };
}]);

