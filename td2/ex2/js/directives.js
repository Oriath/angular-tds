angular.module("ContactApp").directive("contactElem",function(){
    return{
        restrict:'EA',
        template:'<td>{{contact.nom}}</td>' +
                 '<td>{{contact.prenom}}</td>' +
                 '<td>{{contact.adresse}}</td>' +
                 '<td><a class="btn btn-info btn-xs" href="" data-ng-click="cttCtrl.toUpdate(contact)"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a>' +
                 '&nbsp;<a class="btn btn-danger btn-xs" href="" data-ng-click="cttCtrl.delete(contact)"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span></a></td>',
        scope:{contact:'='}
    }
});

angular.module("ContactApp").directive("frmContact", function(){
    return{
        restrict:'EA',
        template:'<form name="frmContact" data-ng-submit="frmContact.$valid &amp;&amp; cttCtrl.update()" class="ng-pristine ng-invalid ng-invalid-required ng-valid-email">' +
                 '<input class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" type="text" data-ng-model="cttCtrl.contact.nom" placeholder="Entrez un nom..." required="true">' +
                 '<input class="form-control ng-pristine ng-untouched ng-valid" type="text" data-ng-model="cttCtrl.contact.prenom" placeholder="Prénom...">' +
                 '<input class="form-control ng-pristine ng-valid-email ng-invalid ng-invalid-required ng-touched" type="email" data-ng-model="CttCtrl.contact.email" placeholder="Adresse email...">' +
                 '<input type="submit" value="Valider" class="btn btn-primary">' +
                 '<input type="button" value="Annuler" data-ng-click="cttCtrl.edit=false" class="btn btn-primary">' +
                 '</form>'
    };
});