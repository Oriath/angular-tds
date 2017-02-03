/**
 * Created by Utilisateur on 03/02/2017.
 */

app.controller("ServicesController", ["$http", function(http){

    this.nbActive = 1;
    this.codePromo= "";
    this.activePromo= false;
    this.promos;

    http.get("./promo.json").then(function(response) {
        this.promos = response.data;

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
        console.log("Promos : "+JSON.stringify(this.promos));
        if(this.promos[this.codePromo])
            return this.total()*this.promos[this.codePromo];
        else
            return "Code indisponible";
    }

    /*this.totalRemise = function(codePromo){
        if(this.promos[codePromo])
            return this.total()*this.promos[codePromo];
        else
            return "Code indisponible";
    }*/
}]);