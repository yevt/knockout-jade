define(['ko'], function(ko) {
    //Redefine this var to point to your views namespace root
    var views_prefix = 'views/';

    //define a template source that simply treats the template name as its content
    ko.templateSources.stringTemplate = function(template, templates) {
        this.templateName = template;
        this.templates = templates || {};
    };

    ko.utils.extend(ko.templateSources.stringTemplate.prototype, {
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
            if (arguments.length === 0) {
                return require(views_prefix + this.templateName);
            }
            this.templates[this.templateName] = value;
        }
    });

    function createStringTemplateEngine(templateEngine, templates) {
        templateEngine.makeTemplateSource = function(template) {
            return new ko.templateSources.stringTemplate(template, templates);
        };

        templateEngine.renderTemplateSource = function(templateSource, bindingContext, options) {
            var locals = options['locals'] || bindingContext['$data'];
            var templateTextFunc = templateSource['text']();
            var templateText = templateTextFunc(locals);
            return ko.utils.parseHtmlFragment(templateText);
        };

        return templateEngine;
    }

    ko.setTemplateEngine(createStringTemplateEngine(new ko.nativeTemplateEngine()));
    return ko;
});