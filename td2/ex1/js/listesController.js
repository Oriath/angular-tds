/**
 * Created by Utilisateur on 07/02/2017.
 */

app.controller("ListesController", function(){

    var self = this;

    this.dispoItems = [
        {
            "url": "http://tutorialzine.com/2013/07/50-must-have-plugins-for-extending-twitter-bootstrap/",
            "title": "50 Must-have plugins for extending Twitter Bootstrap",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/07/featured_4-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/08/simple-registration-system-php-mysql/",
            "title": "Making a Super Simple Registration System With PHP and MySQL",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/08/simple_registration_system-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/08/slideout-footer-css/",
            "title": "Create a slide-out footer with this neat z-index trick",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/08/slide-out-footer-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/06/digital-clock/",
            "title": "How to Make a Digital Clock with jQuery and CSS3",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/06/digital_clock-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/05/diagonal-fade-gallery/",
            "title": "Smooth Diagonal Fade Gallery with CSS3 Transitions",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/05/featured-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/05/mini-ajax-file-upload-form/",
            "title": "Mini AJAX File Upload Form",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/05/ajax-file-upload-form-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/04/services-chooser-backbone-js/",
            "title": "Your First Backbone.js App – Service Chooser",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/04/service_chooser_form-100x100.jpg"
        }
    ];

    this.includedItems = [];
    this.selectedDispoItems = [];
    this.selectedIncludedItems = [];
    this.step = 1;

    function enleverUnDispo(item, index){
        self.dispoItems.splice(self.dispoItems.indexOf(item), 1);
    }

    function enleverUnIncluded(item, index){
        self.includedItems.splice(self.includedItems.indexOf(item), 1);
    }

    this.addToIncluded = function(){
        self.includedItems = self.includedItems.concat(self.selectedDispoItems);
        self.selectedDispoItems.forEach(enleverUnDispo);
        self.selectedDispoItems = [];
    };

    this.addAllToIncluded = function(){
        self.includedItems = self.includedItems.concat(self.dispoItems);
        self.dispoItems = [];
    };

    this.removeFromIncluded = function(){
        self.dispoItems = self.dispoItems.concat(self.selectedIncludedItems);
        self.selectedIncludedItems.forEach(enleverUnIncluded);
        self.selectedIncludedItems = [];
    };

    this.removeAllFromIncluded = function(){
        self.dispoItems = self.dispoItems.concat(self.includedItems);
        self.includedItems = [];
    };
});