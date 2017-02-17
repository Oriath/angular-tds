angular.module("ContactApp").directive("contactElem", function(){
    return{
        restrict:'EA',
        template:'<td>{{contact.nom}}</td><td>{{contact.prenom}}</td><td>{{contact.mail}}</td><td><div class="btn btn-info btn-xs glyphicon glyphicon-edit" data-ng-click="toUpdate(contact)" aria-hidden="true"></div> <div class="btn btn-danger btn-xs glyphicon glyphicon-remove-circle" data-ng-click="delete(contact)" aria-hidden="true"></div></td>',
        scope:{contact:'='}
    };
});