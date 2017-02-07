/**
 * Created by Utilisateur on 27/01/2017.
 */
app.controller("NoteController", ["$cookies", function(cookies){
    this.messageNote = "";
    this.info = "";
    this.status = 1;

    this.save = function(){
        this.status = 0;
        this.info = "Note sauvegardée";
        cookies.put("note", this.messageNote);
    };

    this.clear = function(){
        this.messageNote = "";
        this.info = "";
        this.status = 1;
    };

    this.count = function(){
        var cpt = 100 - this.messageNote.length;
        if(cpt < 100)
            this.info = "Note modifiée";
        if(cpt < 20)
            this.status = 3;
        else if(cpt < 50)
            this.status = 2;
        /*else
            this.status = 1;*/
        return cpt;
    };
}]);