/**
 * Created by Utilisateur on 27/01/2017.
 */
angular.module("NoteApp").controller("NoteController", function(){
    this.messageNote = "";
    this.info = "";
    this.status = 1;

    this.save = function(){
        this.status = 0;
        this.info = "Note sauvegardée";
    };

    this.clear = function(){
        this.messageNote = "";
    };

    this.count = function(){
        var cpt = 100 - this.messageNote.length;
        if(cpt < 20)
            this.status = 3;
        else if(cpt < 50)
            this.status = 2;
        else
            this.status = 1;
        return cpt;
    };
});