/**
 * Created by Utilisateur on 03/02/2017.
 */

app.controller("ServicesController", ["$http", function(http){

    var self = this;

    this.reduc = 0;
    this.nbActive = 1;
    this.codePromo = "";
    this.activePromo = false;
    this.promos = "";

    http.get("./promo.json").then(function(response) {
        self.promos = response.data;
    }, function() {
    });

    this.services = [
                        {
                            "name": "Web Development",
                            "price": 300,
                            "active":true
                        },{
                            "name": "Design",
                            "price": 400,
                            "active":false
                        },{
                            "name": "Integration",
                            "price": 250,
                            "active":false
                        },{
                            "name": "Formation",
                            "price": 220,
                            "active":false
                        }
                    ];

    this.total = function(){
        total = 0;
        for(i=0; i<self.services.length; i++)
        {
            if (self.services[i].active)
                total += self.services[i].price
        }
        return total;
    };

    this.toggleActive = function(service){
        service.active = !service.active;
        if(service.active)
            self.nbActive++;
        else
            self.nbActive--;
    };

    this.remise = function(){
        if(self.codePromo.length>0 && self.promos[self.codePromo]) {
            self.reduc = 1;
            return self.total() * self.promos[self.codePromo];
        }
        else {
            self.reduc = 0;
            return "Code indisponible";
        }
    }

    this.totalRemise = function(){
        if(self.codePromo.length>0 && self.promos[self.codePromo])
            return self.total() - self.total()*self.promos[self.codePromo];
        else
            return "";
    }
}]);