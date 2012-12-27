define(['ko'], function(ko) {
    //Redefine this var to point to your views namespace root
    var views_prefix = 'views/';

    //define a template source that simply treats the template name as its content
    ko.templateSources.stringTemplate = function(templateName) {
        this.templateName = templateName;

        var loadingTemplate = function() {
            return 'loading ...';
        };

        try {
            var jadeFunc = require(views_prefix + this.templateName);
            this.templateFunc = ko.observable(jadeFunc);
        }
        catch (e) {
            this.templateFunc = ko.observable(loadingTemplate);
            require([views_prefix + this.templateName], function(template) {
                this.templateFunc(template);
            }.bind(this));
        }
    };

    ko.utils.extend(ko.templateSources.stringTemplate.prototype, {
        data: function(key, value) {
            this.data = this.data || {};
            if (arguments.length == 1) {
                return this.data[key];
            }
            this.data[key] = value;
        },
        text: function(value) {
            if (arguments.length === 0) {
                return require(views_prefix + this.templateName);
            }
            //this.templates[this.templateName] = value;
            this.rewrittenTemplate = value;
        }
    });

    function createStringTemplateEngine(templateEngine) {
        templateEngine.makeTemplateSource = function(template) {
            return new ko.templateSources.stringTemplate(template);
        };

        templateEngine.renderTemplateSource = function(templateSource, bindingContext, options) {
            var locals = options['locals'] || bindingContext['$data'];
            var templateTextFunc = templateSource.templateFunc();
            var templateText = templateTextFunc(locals);
            return ko.utils.parseHtmlFragment(templateText);
        };

        return templateEngine;
    }

    ko.setTemplateEngine(createStringTemplateEngine(new ko.nativeTemplateEngine()));
    return ko;
});