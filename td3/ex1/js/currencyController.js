app.controller("CurrencyController", ['$http', function($http) {

    var self = this;

    this.currencies = {};

    $http.get('data/currencymap.json').then(function(response) {
            self.currencies = response.data;
        },
        function(response) {
            console.log("Erreur avec le statut Http : "+response.status);
        });

    this.from = "EUR";
    this.to = "USD";
    this.what = 1;
    this.result;
    this.histo = true;
    this.historique = [
        {
            id : 1,
            conversion : {from : 1,
                to : 1,
                amount : function(){return 1;},
                initialAmount : function(){return 0;},
                delta : 1,
                rate : 1,
                what : 1,
                date : 1,
                update: "ok",
                initialRate : 1
            }
        }
    ];
    this.conversion={from : this.from,
        to : this.to,
        amount : function(){return 1;},
        initialAmount : function(){return 0;},
        delta : 1,
        rate : 1,
        what : this.what,
        date : "",
        update: "ok",
        initialRate : 1
    };

    this.getResult = function(){
        $http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from+'_'+self.to, {jsonpCallbackParam: 'callback'})
            .then(function(response) {
                self.result=response.data[self.from+'_'+self.to].val;
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

