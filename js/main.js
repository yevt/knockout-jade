require.config({
    baseUrl: '.',
    paths: {
        ko: 'vendor/knockout-2.2.0.debug',
        ko_jade: 'vendor/knockout-jade-templates',
        jade: 'static/views/jade',
        views: 'static/views'
    }
});

require(['ko_jade', 'views/tmpl1', 'views/tmpl2'], function(ko, tmpl1, tmpl2) {











    function ViewModel() {
        this.isEditable = ko.observable(false);

        this.name = ko.observable('testName');
        this.testVar = 'testVar';

        this.selectTemplate = function() {
            return this.isEditable() ? 'tmpl1' : 'tmpl2'
        }.bind(this)
    };

    var viewModel = new ViewModel();

    viewModel.isEditable.subscribe(function(newValue) {
        console.log(newValue);
    });

    var container = document.getElementsByClassName('container')[0];


    ko.applyBindings(viewModel, container);
});