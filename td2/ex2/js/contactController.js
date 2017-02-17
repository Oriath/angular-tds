angular.module("ContactApp").controller("ContactController", function() {

    var self = this;

    this.contacts = [
        {"nom":"Picard",
            "prenom":"Guillaume",
            "mail":"yoyoyo@gmail.com"},
        {"nom":"Picard",
            "prenom":"Guillaume",
            "mail":"yoyoyo@gmail.com"},
        {"nom":"Picard",
            "prenom":"Guillaume",
            "mail":"yoyoyo@gmail.com"}
    ];
    this.contact = [];
    this.tmpContact = [];
    this.operation = "";
    this.edit = "";

    this.toUpdate = function(contact){

    };

    this.toAdd = function(){

    };

    this.add = function(){

    };

    this.update = function(){

    };

    this.delete = function(contact){

    };
});