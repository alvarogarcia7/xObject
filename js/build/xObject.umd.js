/*! xObject 2013-09-27 */
/* Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and plain browser loading. */
!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["exports"],b):"undefined"!=typeof exports?b(exports):b(a.esprima={})}(this,function(a){
!function(a){"use strict";var b=a.xObject||{},c=function(a,d,e){var f,g="function"==typeof a?a.apply(a.prototype,d||[]):a,h=function(){};return b.mixin(g||{},e||{}),g.hasOwnProperty("__extends__")&&g.__extends__&&(a.prototype=c(g.__extends__,d)),h.prototype=a.prototype||{},b.mixin(h.prototype,g),f=new h,g.hasOwnProperty("__constructor__")&&g.__constructor__.apply(f,d||[]),f};return b.hooks=function(a){var b=a;return{push:function(a){b.push(a)},invokeAll:function(a,c){for(var d=b.length,e=0;d>e;e++)b[e](a,c)}}}(b.Hook||[]),b.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)},b.mixin=function(a,b){var c;for(c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},b.create=function(){var a,d,e=[],f={};if(!arguments.length)throw new Error("First argument (constructor or proto) required.");if("object"!=typeof arguments[0]&&"function"!=typeof arguments[0])throw new TypeError("Invalid type argument '"+typeof arguments[0]+"'. Here expected either function (constructor) or object (proto)");if(2===arguments.length&&b.isArray(arguments[1])&&"object"!=typeof arguments[1])throw new TypeError("Invalid type argument '"+typeof arguments[1]+"'. Here expected either arguments array or properties object");if(3===arguments.length&&"object"!=typeof arguments[2])throw new TypeError("Invalid type argument '"+typeof arguments[2]+"'. Here expected properties object");return d=arguments[0],b.isArray(arguments[1])?(e=arguments[1],f=arguments[2]||{}):f=arguments[1],a=c(d,e,f),b.hooks.invokeAll(a,arguments),a},a.xObject=b,b}(this),function(a){"use strict";var b=a.xObject||{};return b.hooks=b.hooks||[],b.hooks.push(function(a){if(a.__mixin__&&b.isArray(a.__mixin__))for(var c=0,d=a.__mixin__.length;d>c;c++){var e=a.__mixin__[c];b.mixin(a,e)}}),b}(this),function(a,b){"use strict";a.jsa=a.jsa||{},a.jsa.Hook=a.jsa.Hook||[],a.jsa.Hook.push(function(c){var d=function(b,c){if("string"==typeof c){if(c in{string:null,number:null,"boolean":null,"function":null})return typeof b===c;if("array"===c)return a.jsa.isArray(b);throw new SyntaxError("Invalid type hint '"+c+"'. Type hint can be a string ('string', 'number', 'boolean', 'array') or an object.")}return b instanceof c},e=function(a,b,c){var e=c[a];c[a]=function(){for(var f=0,g=arguments.length;g>f;f++)if(arguments[f]&&b[f]&&!d(arguments[f],b[f]))throw new TypeError("Argument #"+(parseInt(f,10)+1)+" of method '"+a+"' "+("string"==typeof b[f]?"is required to be a '"+b[f]+"'":" violates the implemented interface"));return e.apply(c,arguments)}};if(c.hasOwnProperty("__implements__")&&c.__implements__)for(var f in c.__implements__)if(c.__implements__.hasOwnProperty(f)){if(c[f]===b)throw new SyntaxError("Implemented interface requires '"+f+"' method");e(f,c.__implements__[f],c)}})}(this),function(a,b){"use strict";var c=a.xObject||{};c.hooks=c.hooks||[],c.querySelectorFn=c.querySelectorFn||a.jQuery||function(b,c){return c=c||a.document,"object"==typeof b?b:c.querySelector(b)},c.hooks.push(function(a){var d=0;if(a instanceof c.WidgetAbstract!=!1){if(a.boundingBox===b)throw new TypeError("Widget derivative is expected to get an argument, which contains settings object with boundingBox property");if(a.node={},a.node.boundingBox=c.querySelectorFn(a.boundingBox),a.HTML_PARSER)for(d in a.HTML_PARSER)a.HTML_PARSER.hasOwnProperty(d)&&(a.node[d]=c.querySelectorFn(a.HTML_PARSER[d],a.node.boundingBox))}}),c.hooks.push(function(a){var b=["init","renderUi","bindUi","syncUi"],d=0,e=b.length;if(a instanceof c.BaseAbstract!=!1)for(;e>d;d++)a[b[d]]&&a[b[d]]()}),c.BaseAbstract=function(){return{}},c.WidgetAbstract=function(){return{__extends__:c.BaseAbstract}}}(this);
a.xObject=xObject});