/**
 * Created by Utilisateur on 03/02/2017.
 */

app.controller("ServicesController", ["$http", function(http){

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
        for(i=0; i<this.services.length; i++)
        {
            if (this.services[i].active)
                total += this.services[i].price
        }
        return total;
    };

    this.toggleActive = function(service){
        service.active = !service.active;
        if(service.active)
            this.nbActive++;
        else
            this.nbActive--;
    };

    this.remise = function(){
        if(this.codePromo.length>0 && self.promos[this.codePromo]) {
            this.reduc = 1;
            return this.total() * self.promos[this.codePromo];
        }
        else {
            this.reduc = 0;
            return "Code indisponible";
        }
    }

    this.totalRemise = function(){
        if(this.codePromo.length>0 && self.promos[this.codePromo])
            return this.total() - this.total()*self.promos[this.codePromo];
        else
            return "";
    }
}]);