require.config({
    baseUrl: '.',
    paths: {
        ko: 'vendor/knockout-2.2.0.debug',
        jade: 'static/views/jade',
        views: 'static/views'
    }
});




//require(['ko'], function(ko) {
//    ko.JadeTemplateEngine = function() {}
//    ko.JadeTemplateEngine.prototype = ko.utils.extend(new ko.templateEngine(), {
//        renderTemplateSource: function(templateSource, bindingContext, options) {
//
//        }
//    });
//});


require(['ko', 'views/tmpl1'], function(ko, tmpl1) {
    function ViewModel() {
        this.isEditable = ko.observable(false);

        this.items = ko.observableArray([
            {id:1, name: 'name1'},
            {id:2, name: 'name2'}
        ]);

        this.selectTemplate = function() {
            return this.isEditable() ? 'edit' : 'view'
        }.bind(this)
    };

    var viewModel = new ViewModel();

    viewModel.isEditable.subscribe(function(newValue) {
        console.log(newValue);
    });

    var container = document.getElementsByClassName('container')[0];
    ko.applyBindings(viewModel, container);
});