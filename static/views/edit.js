define(['jade'], function(jade){
  return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<h1>');
var __val__ = name()
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h1><input data-bind="value: name"/><select>');
// iterate jade_array
;(function(){
  if ('number' == typeof jade_array.length) {
    for (var $index = 0, $$l = jade_array.length; $index < $$l; $index++) {
      var jade_var = jade_array[$index];

buf.push('<option>');
var __val__ = jade_var.value
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</option>');
    }
  } else {
    for (var $index in jade_array) {
      var jade_var = jade_array[$index];

buf.push('<option>');
var __val__ = jade_var.value
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</option>');
   }
  }
}).call(this);

buf.push('</select>');
}
return buf.join("");
};
});