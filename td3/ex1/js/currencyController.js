app.controller("CurrencyController", ['$http', function($http) {

    var self = this;

    this.currencies = {};
    this.from = "";
    this.to = "";

    $http.get('data/currencymap.json').then(function(response) {
            self.currencies = response.data;
            self.from = self.currencies["EUR"];
            self.to = self.currencies["USD"];
        },
        function(response) {
            console.log("Erreur avec le statut Http : "+response.status);
        });

    this.what = 1;
    this.result;
    this.histo = true;
    this.historique = {};

    this.getResult = function(){
        $http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from.code+'_'+self.to.code, {jsonpCallbackParam: 'callback'})
            .then(function(response) {
                self.result = response.data[self.from.code + '_' + self.to.code].val * self.what;
                var conversion = {
                    from : self.from,
                    to : self.to,
                    amount : function(){ return self.what * this.rate},
                    initialAmount : function(){ return self.what * this.initialRate},
                    delta : 0,
                    rate : response.data[self.from.code + '_' + self.to.code].val,
                    what : self.what,
                    date : new Date(),
                    update: false,
                    initialRate : response.data[self.from.code + '_' + self.to.code].val
                };
                var key = self.from.code + self.to.code;
                if(self.historique[key]){
                    var oldConversion = self.historique[key];
                    oldConversion.what = self.what;
                    conversion.delta = conversion.amount() - oldConversion.initialAmount();
                    conversion.initialRate = oldConversion.initialRate;
                }
                conversion.update = false;
                self.historique[key] = conversion;
            });
    };

    this.swap = function(){
        tmp = self.from;
        self.from = self.to;
        self.to = tmp;
    };

    this.histoNonVide = function(){
        if(self.historique.length > 0)
            return true;
        else
            return false;
    };
}]);

