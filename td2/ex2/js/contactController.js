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
    this.contact = {};
    this.tmpContact = {};
    this.operation = "";
    this.edit = false;

    this.toUpdate = function(contact){
        self.edit = true;
        self.contact = contact;
        self.operation = "Modifier un contact";
    };

    this.toAdd = function(){
        self.edit = true;
        self.operation = "Ajouter un contact";
    };

    this.add = function(){
        self.edit = false;
        self.tmpContact = {"nom":"Picard",
            "prenom":"Guillaume",
            "mail":"yoyoyo@gmail.com"};
        self.contacts.push(self.tmpContact);
        console.log(self.tmpContact);
    };

    this.update = function(){
        self.edit = false;
        self.tmpContact = {"nom":"Picard",
            "prenom":"Guillaume",
            "mail":"yoyoyo@gmail.com"};
        self.contacts.splice(indexOf(self.contact), 1, self.tmpContact);
    };

    this.delete = function(contact){
        self.contacts.splice(contacts.indexOf(contact), 1);
    };
});