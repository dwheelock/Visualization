!function(t,o){"function"==typeof define&&define.amd?define([],o):t.common_Class=o()}(this,function(){function t(){}return t.prototype.constructor=t,t.prototype._class="common_Class",t.prototype["class"]=function(t){return arguments.length?(this._class=t,this):this._class},t.prototype.classID=function(){return this._class.split(" ").pop()},t.prototype["implements"]=function(t){for(var o in t)void 0===this[o]&&t.hasOwnProperty(o)&&(this[o]=t[o])},t.prototype.mixin=function(t){this["implements"](t.prototype);for(var o in t.prototype)"_class"===o&&t.prototype.hasOwnProperty(o)&&(this[o]+=" "+t.prototype[o])},t});