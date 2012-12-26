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

    var viewModel = {
        isEditable: ko.observable(false),
        name: ko.observable('model name'),
        items: [
            'array item 1',
            'array item 2',
            'array item 3'
        ],
        selectTemplate: function() {
            return viewModel.isEditable() ? 'edit' : 'view';
        }
    };

    var container = document.getElementsByClassName('container')[0];
    ko.applyBindings(viewModel, container);
});