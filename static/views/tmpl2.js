define(['jade'], function(jade){
  return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<h1>');
var __val__ = name()
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h1><input data-bind="value: name"/>');
}
return buf.join("");
};
});