!function(t,e){"function"==typeof define&&define.amd?define(["d3","../common/HTMLWidget","../api/IInput","css!./Input"],e):t.form_CheckBox=e(t.d3,t.common_HTMLWidget,t.api_IInput)}(this,function(t,e,n){function o(){e.call(this),n.call(this),this._tag="div",this._inputElement=[]}return o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.prototype._class+=" form_CheckBox",o.prototype["implements"](n.prototype),o.prototype.publish("selectOptions",[],"array","Array of options used to fill a dropdown list"),o.prototype.enter=function(t,n){e.prototype.enter.apply(this,arguments);var o=this,p=n.append("ul");this.selectOptions().length||this.selectOptions().push(""),this.selectOptions().forEach(function(t,e){o._inputElement[e]=p.append("li").append("input").attr("type","checkbox"),o._inputElement[e].node().insertAdjacentHTML("afterend","<text>"+t+"</text>")}),this._inputElement.forEach(function(t,e){t.attr("name",o.name()),t.on("click",function(t){t.click(t)}),t.on("blur",function(t){t.blur(t)}),t.on("change",function(t){var e=[];o._inputElement.forEach(function(t,n){t.property("checked")&&e.push(t.property("value"))}),o.value(e),t.change(t)})})},o.prototype.update=function(t,n){e.prototype.update.apply(this,arguments);var o=this;this._inputElement.forEach(function(t,e){t.property("value",o.selectOptions()[e]),-1!==o.value().indexOf(o.selectOptions()[e])&&"false"!==o.value()?t.property("checked",!0):t.property("checked",!1)})},o.prototype.insertSelectOptions=function(t){var e="";t.length>0?t.forEach(function(t){var n=t instanceof Array?t[0]:t,o=t instanceof Array?t[1]?t[1]:t[0]:t;e+="<option value='"+n+"'>"+o+"</option>"}):e+="<option>selectOptions not set</option>",this._inputElement[0].html(e)},o});