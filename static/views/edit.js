define(['jade'], function(jade){
  return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<h2>');
var __val__ = name()
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h2><input data-bind="value: name"/><select>');
// iterate items
;(function(){
  if ('number' == typeof items.length) {
    for (var $index = 0, $$l = items.length; $index < $$l; $index++) {
      var item = items[$index];

buf.push('<option>');
var __val__ = item
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</option>');
    }
  } else {
    for (var $index in items) {
      var item = items[$index];

buf.push('<option>');
var __val__ = item
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