require.config({
    baseUrl: '.',
    paths: {
        ko: 'vendor/knockout-2.2.0.debug',
        jade: 'static/views/jade',
        views: 'static/views'
    }
});




require(['ko'], function(ko) {

});


require(['ko', 'views/tmpl1'], function(ko, tmpl1) {

    //define a template source that simply treats the template name as its content
    ko.templateSources.stringTemplate = function(template, templates) {
        this.templateName = template;
        this.templates = templates || {};
    }

    ko.utils.extend(ko.templateSources.stringTemplate.prototype, {
//        renderTemplateSource: function() {
//
//        },
        data: function(key, value) {
            console.log("data", key, value, this.templateName);
            this.templates._data = this.templates._data || {};
            this.templates._data[this.templateName] = this.templates._data[this.templateName] || {};

            if (arguments.length === 1) {
                return this.templates._data[this.templateName][key];
            }

            this.templates._data[this.templateName][key] = value;
        },
        text: function(value) {
            console.log("text", value, this.templateName, arguments, this)
            if (arguments.length === 0) {
//                return this.templates[this.templateName];
                return require('views/' + this.templateName);
            }
            this.templates[this.templateName] = value;
        }
    });

//    ko.templateEngine.prototype['renderTemplate'] = function(template, templateDocument, bindingContext, options) {
//        console.log(arguments);
//
//        //var templateSource = this['makeTemplateSource'](template, templateDocument);
//
//        //console.log(templateSource);
//
//        //var rendered = this['renderTemplateSource'](templateSource, bindingContext, options);
//
//        console.log('RENDERED', rendered);
//
//        var rendered = require('views/' + template)(bindingContext.data);
//
//        return rendered;
//    };


//modify an existing templateEngine to work with string templates
    function createStringTemplateEngine(templateEngine, templates) {
        templateEngine.makeTemplateSource = function(template) {
            return new ko.templateSources.stringTemplate(template, templates);
        }
        return templateEngine;
    }



    function ViewModel() {
        this.isEditable = ko.observable(false);

        this.name = ko.observable('testName');

        this.selectTemplate = function() {
            return this.isEditable() ? 'tmpl1' : 'tmpl1'
        }.bind(this)
    };

    var viewModel = new ViewModel();

    viewModel.isEditable.subscribe(function(newValue) {
        console.log(newValue);
    });

    var container = document.getElementsByClassName('container')[0];



    ko.setTemplateEngine(createStringTemplateEngine(new ko.nativeTemplateEngine(), viewModel.templates));
    ko.applyBindings(viewModel, container);
});