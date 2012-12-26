require.config({
    baseUrl: '.',
    paths: {
        ko: 'vendor/knockout-2.2.0.debug',
        ko_jade: 'vendor/knockout-jade',
        jade: 'static/views/jade',
        views: 'static/views'
    }
});

require(['ko_jade', 'views/view', 'views/edit'], function(ko, view, edit) {
    function ViewModel() {
        this.isEditable = ko.observable(false);
        this.name = ko.observable('testName');

        this.jade_array = [
            {value: 'jade variable 1 value'},
            {value: 'jade variable 2 value'},
            {value: 'jade variable 3 value'}
        ];

        this.selectTemplate = function() {
            return this.isEditable() ? 'edit' : 'view';
        }.bind(this)
    }

    var viewModel = new ViewModel();

    viewModel.isEditable.subscribe(function(newValue) {
        console.log(newValue);
    });

    var container = document.getElementsByClassName('container')[0];

    ko.applyBindings(viewModel, container);
});