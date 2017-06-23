/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.cmd&&define.cmd.jQuery&&define("jquery",[],function(){return p})})(window);
$.extend(jQuery.easing,{
	easeIn: function (x,t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOut: function (x,t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function (x,t, b, c, d) {
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function (x,t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function (x,t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function (x,t, b, c, d) {
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function (x,t, b, c, d, a, p) {
		if (t === 0) { 
			return b; 
		}
		if ( (t /= d) == 1 ) {
			return b+c; 
		}
		if (!p) {
			p=d*0.3; 
		}
		if (!a || a < Math.abs(c)) {
			a = c; 
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	elasticOut: function (x,t, b, c, d, a, p) {
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	elasticBoth: function (x,t, b, c, d, a, p) {
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c; 
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) * 
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function (x,t, b, c, d, s) {
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function (x,t, b, c, d, s) {
		if (typeof s == 'undefined') {
			s = 1.70158;
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	backBoth: function (x,t, b, c, d, s) {
		if (typeof s == 'undefined') {
			s = 1.70158; 
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function (x,t, b, c, d) {
		return c - jQuery.easing['bounceOut'](x,d-t, 0, c, d) + b;
	},
	bounceOut: function (x,t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},
	bounceBoth: function (x,t, b, c, d) {
		if (t < d/2) {
			return jQuery.easing['bounceIn'](x,t*2, 0, c, d) * 0.5 + b;
		}
		return jQuery.easing['bounceOut'](x,t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
});
/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
jQuery.easing = {
                easein: function(x, t, b, c, d) {
                    return c * (t /= d) * t + b
                },
                easeinout: function(x, t, b, c, d) {
                    if (t < d / 2) return 2 * c * t * t / (d * d) + b;
                    var a = t - d / 2;
                    return - 2 * c * a * a / (d * d) + 2 * c * a / d + c / 2 + b
                },
                easeout: function(x, t, b, c, d) {
                    return - c * t * t / (d * d) + 2 * c * t / d + b
                },
                expoin: function(x, t, b, c, d) {
                    var a = 1;
                    if (c < 0) {
                        a *= -1;
                        c *= -1
                    }
                    return a * (Math.exp(Math.log(c) / d * t)) + b
                },
                expoout: function(x, t, b, c, d) {
                    var a = 1;
                    if (c < 0) {
                        a *= -1;
                        c *= -1
                    }
                    return a * ( - Math.exp( - Math.log(c) / d * (t - d)) + c + 1) + b
                },
                expoinout: function(x, t, b, c, d) {
                    var a = 1;
                    if (c < 0) {
                        a *= -1;
                        c *= -1
                    }
                    if (t < d / 2) return a * (Math.exp(Math.log(c / 2) / (d / 2) * t)) + b;
                    return a * ( - Math.exp( - 2 * Math.log(c / 2) / d * (t - d)) + c + 1) + b
                },
                bouncein: function(x, t, b, c, d) {
                    return c - jQuery.easing['bounceout'](x, d - t, 0, c, d) + b
                },
                bounceout: function(x, t, b, c, d) {
                    if ((t /= d) < (1 / 2.75)) {
                        return c * (7.5625 * t * t) + b
                    } else if (t < (2 / 2.75)) {
                        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b
                    } else if (t < (2.5 / 2.75)) {
                        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b
                    } else {
                        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b
                    }
                },
                bounceinout: function(x, t, b, c, d) {
                    if (t < d / 2) return jQuery.easing['bouncein'](x, t * 2, 0, c, d) * .5 + b;
                    return jQuery.easing['bounceout'](x, t * 2 - d, 0, c, d) * .5 + c * .5 + b
                },
                elasin: function(x, t, b, c, d) {
                    var s = 1.70158;
                    var p = 0;
                    var a = c;
                    if (t == 0) return b;
                    if ((t /= d) == 1) return b + c;
                    if (!p) p = d * .3;
                    if (a < Math.abs(c)) {
                        a = c;
                        var s = p / 4
                    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
                    return - (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
                },
                elasout: function(x, t, b, c, d) {
                    var s = 1.70158;
                    var p = 0;
                    var a = c;
                    if (t == 0) return b;
                    if ((t /= d) == 1) return b + c;
                    if (!p) p = d * .3;
                    if (a < Math.abs(c)) {
                        a = c;
                        var s = p / 4
                    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
                    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
                },
                elasinout: function(x, t, b, c, d) {
                    var s = 1.70158;
                    var p = 0;
                    var a = c;
                    if (t == 0) return b;
                    if ((t /= d / 2) == 2) return b + c;
                    if (!p) p = d * (.3 * 1.5);
                    if (a < Math.abs(c)) {
                        a = c;
                        var s = p / 4
                    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
                    if (t < 1) return - .5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b
                },
                backin: function(x, t, b, c, d) {
                    var s = 1.70158;
                    return c * (t /= d) * t * ((s + 1) * t - s) + b
                },
                backout: function(x, t, b, c, d) {
                    var s = 1.70158;
                    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
                },
                backinout: function(x, t, b, c, d) {
                    var s = 1.70158;
                    if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b
                },
                linear: function(x, t, b, c, d) {
                    return c * t / d + b
                }
    };
jQuery.effects||function(f,j){function n(c){var a;if(c&&c.constructor==Array&&c.length==3)return c;if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)];if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))return[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))return[parseInt(a[1],
16),parseInt(a[2],16),parseInt(a[3],16)];if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(c))return o.transparent;return o[f.trim(c).toLowerCase()]}function s(c,a){var b;do{b=f.curCSS(c,a);if(b!=""&&b!="transparent"||f.nodeName(c,"body"))break;a="backgroundColor"}while(c=c.parentNode);return n(b)}function p(){var c=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
a={},b,d;if(c&&c.length&&c[0]&&c[c[0]])for(var e=c.length;e--;){b=c[e];if(typeof c[b]=="string"){d=b.replace(/\-(\w)/g,function(g,h){return h.toUpperCase()});a[d]=c[b]}}else for(b in c)if(typeof c[b]==="string")a[b]=c[b];return a}function q(c){var a,b;for(a in c){b=c[a];if(b==null||f.isFunction(b)||a in t||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(b)))delete c[a]}return c}function u(c,a){var b={_:0},d;for(d in a)if(c[d]!=a[d])b[d]=a[d];return b}function k(c,a,b,d){if(typeof c=="object"){d=
a;b=null;a=c;c=a.effect}if(f.isFunction(a)){d=a;b=null;a={}}if(typeof a=="number"||f.fx.speeds[a]){d=b;b=a;a={}}if(f.isFunction(b)){d=b;b=null}a=a||{};b=b||a.duration;b=f.fx.off?0:typeof b=="number"?b:b in f.fx.speeds?f.fx.speeds[b]:f.fx.speeds._default;d=d||a.complete;return[c,a,b,d]}function m(c){if(!c||typeof c==="number"||f.fx.speeds[c])return true;if(typeof c==="string"&&!f.effects[c])return true;return false}f.effects={};f.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
"borderTopColor","borderColor","color","outlineColor"],function(c,a){f.fx.step[a]=function(b){if(!b.colorInit){b.start=s(b.elem,a);b.end=n(b.end);b.colorInit=true}b.elem.style[a]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")"}});var o={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},r=["add","remove","toggle"],t={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};f.effects.animateClass=function(c,a,b,
d){if(f.isFunction(b)){d=b;b=null}return this.queue("fx",function(){var e=f(this),g=e.attr("style")||" ",h=q(p.call(this)),l,v=e.attr("className");f.each(r,function(w,i){c[i]&&e[i+"Class"](c[i])});l=q(p.call(this));e.attr("className",v);e.animate(u(h,l),a,b,function(){f.each(r,function(w,i){c[i]&&e[i+"Class"](c[i])});if(typeof e.attr("style")=="object"){e.attr("style").cssText="";e.attr("style").cssText=g}else e.attr("style",g);d&&d.apply(this,arguments)});h=f.queue(this);l=h.splice(h.length-1,1)[0];
h.splice(1,0,l);f.dequeue(this)})};f.fn.extend({_addClass:f.fn.addClass,addClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{add:c},a,b,d]):this._addClass(c)},_removeClass:f.fn.removeClass,removeClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{remove:c},a,b,d]):this._removeClass(c)},_toggleClass:f.fn.toggleClass,toggleClass:function(c,a,b,d,e){return typeof a=="boolean"||a===j?b?f.effects.animateClass.apply(this,[a?{add:c}:{remove:c},b,d,e]):this._toggleClass(c,
a):f.effects.animateClass.apply(this,[{toggle:c},a,b,d])},switchClass:function(c,a,b,d,e){return f.effects.animateClass.apply(this,[{add:a,remove:c},b,d,e])}});f.extend(f.effects,{version:"1.8.11",save:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.data("ec.storage."+a[b],c[0].style[a[b]])},restore:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.css(a[b],c.data("ec.storage."+a[b]))},setMode:function(c,a){if(a=="toggle")a=c.is(":hidden")?"show":"hide";return a},getBaseline:function(c,
a){var b;switch(c[0]){case "top":b=0;break;case "middle":b=0.5;break;case "bottom":b=1;break;default:b=c[0]/a.height}switch(c[1]){case "left":c=0;break;case "center":c=0.5;break;case "right":c=1;break;default:c=c[1]/a.width}return{x:c,y:b}},createWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent();var a={width:c.outerWidth(true),height:c.outerHeight(true),"float":c.css("float")},b=f("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",
border:"none",margin:0,padding:0});c.wrap(b);b=c.parent();if(c.css("position")=="static"){b.css({position:"relative"});c.css({position:"relative"})}else{f.extend(a,{position:c.css("position"),zIndex:c.css("z-index")});f.each(["top","left","bottom","right"],function(d,e){a[e]=c.css(e);if(isNaN(parseInt(a[e],10)))a[e]="auto"});c.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return b.css(a).show()},removeWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent().replaceWith(c);
return c},setTransition:function(c,a,b,d){d=d||{};f.each(a,function(e,g){unit=c.cssUnit(g);if(unit[0]>0)d[g]=unit[0]*b+unit[1]});return d}});f.fn.extend({effect:function(c){var a=k.apply(this,arguments),b={options:a[1],duration:a[2],callback:a[3]};a=b.options.mode;var d=f.effects[c];if(f.fx.off||!d)return a?this[a](b.duration,b.callback):this.each(function(){b.callback&&b.callback.call(this)});return d.call(this,b)},_show:f.fn.show,show:function(c){if(m(c))return this._show.apply(this,arguments);
else{var a=k.apply(this,arguments);a[1].mode="show";return this.effect.apply(this,a)}},_hide:f.fn.hide,hide:function(c){if(m(c))return this._hide.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="hide";return this.effect.apply(this,a)}},__toggle:f.fn.toggle,toggle:function(c){if(m(c)||typeof c==="boolean"||f.isFunction(c))return this.__toggle.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="toggle";return this.effect.apply(this,a)}},cssUnit:function(c){var a=this.css(c),
b=[];f.each(["em","px","%","pt"],function(d,e){if(a.indexOf(e)>0)b=[parseFloat(a),e]});return b}});f.easing.jswing=f.easing.swing;f.extend(f.easing,{def:"easeOutQuad",swing:function(c,a,b,d,e){return f.easing[f.easing.def](c,a,b,d,e)},easeInQuad:function(c,a,b,d,e){return d*(a/=e)*a+b},easeOutQuad:function(c,a,b,d,e){return-d*(a/=e)*(a-2)+b},easeInOutQuad:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a+b;return-d/2*(--a*(a-2)-1)+b},easeInCubic:function(c,a,b,d,e){return d*(a/=e)*a*a+b},easeOutCubic:function(c,
a,b,d,e){return d*((a=a/e-1)*a*a+1)+b},easeInOutCubic:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a+b;return d/2*((a-=2)*a*a+2)+b},easeInQuart:function(c,a,b,d,e){return d*(a/=e)*a*a*a+b},easeOutQuart:function(c,a,b,d,e){return-d*((a=a/e-1)*a*a*a-1)+b},easeInOutQuart:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a+b;return-d/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(c,a,b,d,e){return d*(a/=e)*a*a*a*a+b},easeOutQuint:function(c,a,b,d,e){return d*((a=a/e-1)*a*a*a*a+1)+b},easeInOutQuint:function(c,
a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a*a+b;return d/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(c,a,b,d,e){return-d*Math.cos(a/e*(Math.PI/2))+d+b},easeOutSine:function(c,a,b,d,e){return d*Math.sin(a/e*(Math.PI/2))+b},easeInOutSine:function(c,a,b,d,e){return-d/2*(Math.cos(Math.PI*a/e)-1)+b},easeInExpo:function(c,a,b,d,e){return a==0?b:d*Math.pow(2,10*(a/e-1))+b},easeOutExpo:function(c,a,b,d,e){return a==e?b+d:d*(-Math.pow(2,-10*a/e)+1)+b},easeInOutExpo:function(c,a,b,d,e){if(a==0)return b;if(a==
e)return b+d;if((a/=e/2)<1)return d/2*Math.pow(2,10*(a-1))+b;return d/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(c,a,b,d,e){return-d*(Math.sqrt(1-(a/=e)*a)-1)+b},easeOutCirc:function(c,a,b,d,e){return d*Math.sqrt(1-(a=a/e-1)*a)+b},easeInOutCirc:function(c,a,b,d,e){if((a/=e/2)<1)return-d/2*(Math.sqrt(1-a*a)-1)+b;return d/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=
g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g))+b},easeOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*a)*Math.sin((a*e-c)*2*Math.PI/g)+d+b},easeInOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e/2)==2)return b+d;g||(g=e*0.3*1.5);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/
h);if(a<1)return-0.5*h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)+b;return h*Math.pow(2,-10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)*0.5+d+b},easeInBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*(a/=e)*a*((g+1)*a-g)+b},easeOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*((a=a/e-1)*a*((g+1)*a+g)+1)+b},easeInOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;if((a/=e/2)<1)return d/2*a*a*(((g*=1.525)+1)*a-g)+b;return d/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+b},easeInBounce:function(c,
a,b,d,e){return d-f.easing.easeOutBounce(c,e-a,0,d,e)+b},easeOutBounce:function(c,a,b,d,e){return(a/=e)<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(c,a,b,d,e){if(a<e/2)return f.easing.easeInBounce(c,a*2,0,d,e)*0.5+b;return f.easing.easeOutBounce(c,a*2-e,0,d,e)*0.5+d*0.5+b}})}(jQuery);
;
(function(c){c.ui=c.ui||{};var n=/left|center|right/,o=/top|center|bottom/,t=c.fn.position,u=c.fn.offset;c.fn.position=function(b){if(!b||!b.of)return t.apply(this,arguments);b=c.extend({},b);var a=c(b.of),d=a[0],g=(b.collision||"flip").split(" "),e=b.offset?b.offset.split(" "):[0,0],h,k,j;if(d.nodeType===9){h=a.width();k=a.height();j={top:0,left:0}}else if(d.setTimeout){h=a.width();k=a.height();j={top:a.scrollTop(),left:a.scrollLeft()}}else if(d.preventDefault){b.at="left top";h=k=0;j={top:b.of.pageY,
left:b.of.pageX}}else{h=a.outerWidth();k=a.outerHeight();j=a.offset()}c.each(["my","at"],function(){var f=(b[this]||"").split(" ");if(f.length===1)f=n.test(f[0])?f.concat(["center"]):o.test(f[0])?["center"].concat(f):["center","center"];f[0]=n.test(f[0])?f[0]:"center";f[1]=o.test(f[1])?f[1]:"center";b[this]=f});if(g.length===1)g[1]=g[0];e[0]=parseInt(e[0],10)||0;if(e.length===1)e[1]=e[0];e[1]=parseInt(e[1],10)||0;if(b.at[0]==="right")j.left+=h;else if(b.at[0]==="center")j.left+=h/2;if(b.at[1]==="bottom")j.top+=
k;else if(b.at[1]==="center")j.top+=k/2;j.left+=e[0];j.top+=e[1];return this.each(function(){var f=c(this),l=f.outerWidth(),m=f.outerHeight(),p=parseInt(c.curCSS(this,"marginLeft",true))||0,q=parseInt(c.curCSS(this,"marginTop",true))||0,v=l+p+(parseInt(c.curCSS(this,"marginRight",true))||0),w=m+q+(parseInt(c.curCSS(this,"marginBottom",true))||0),i=c.extend({},j),r;if(b.my[0]==="right")i.left-=l;else if(b.my[0]==="center")i.left-=l/2;if(b.my[1]==="bottom")i.top-=m;else if(b.my[1]==="center")i.top-=
m/2;i.left=Math.round(i.left);i.top=Math.round(i.top);r={left:i.left-p,top:i.top-q};c.each(["left","top"],function(s,x){c.ui.position[g[s]]&&c.ui.position[g[s]][x](i,{targetWidth:h,targetHeight:k,elemWidth:l,elemHeight:m,collisionPosition:r,collisionWidth:v,collisionHeight:w,offset:e,my:b.my,at:b.at})});c.fn.bgiframe&&f.bgiframe();f.offset(c.extend(i,{using:b.using}))})};c.ui.position={fit:{left:function(b,a){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();b.left=
d>0?b.left-d:Math.max(b.left-a.collisionPosition.left,b.left)},top:function(b,a){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();b.top=d>0?b.top-d:Math.max(b.top-a.collisionPosition.top,b.top)}},flip:{left:function(b,a){if(a.at[0]!=="center"){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();var g=a.my[0]==="left"?-a.elemWidth:a.my[0]==="right"?a.elemWidth:0,e=a.at[0]==="left"?a.targetWidth:-a.targetWidth,h=-2*a.offset[0];b.left+=
a.collisionPosition.left<0?g+e+h:d>0?g+e+h:0}},top:function(b,a){if(a.at[1]!=="center"){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();var g=a.my[1]==="top"?-a.elemHeight:a.my[1]==="bottom"?a.elemHeight:0,e=a.at[1]==="top"?a.targetHeight:-a.targetHeight,h=-2*a.offset[1];b.top+=a.collisionPosition.top<0?g+e+h:d>0?g+e+h:0}}}};if(!c.offset.setOffset){c.offset.setOffset=function(b,a){if(/static/.test(c.curCSS(b,"position")))b.style.position="relative";var d=c(b),
g=d.offset(),e=parseInt(c.curCSS(b,"top",true),10)||0,h=parseInt(c.curCSS(b,"left",true),10)||0;g={top:a.top-g.top+e,left:a.left-g.left+h};"using"in a?a.using.call(b,g):d.css(g)};c.fn.offset=function(b){var a=this[0];if(!a||!a.ownerDocument)return null;if(b)return this.each(function(){c.offset.setOffset(this,b)});return u.call(this)}}})(jQuery);
;
/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash compat -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=null===n,e=n===w,u=n===n,o=null===t,i=t===w,f=t===t;if(n>t&&!o||!u||r&&!i&&f||e&&f)return 1;if(n<t&&!r||!f||o&&!e&&u||i&&u)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n=="function"||false}function u(n){return null==n?"":n+""}function o(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););
return r}function i(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function f(t,r){return n(t.a,r.a)||t.b-r.b}function a(n){return Nn[n]}function c(n){return Tn[n]}function l(n,t,r){return t?n=Bn[n]:r&&(n=Dn[n]),"\\"+n}function s(n){return"\\"+Dn[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n=="object"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n);
}function v(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=P,o[++u]=r);return o}function g(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Pn[n]}function m(_){function Nn(n){if(h(n)&&!(Wo(n)||n instanceof zn)){if(n instanceof Pn)return n;if(eu.call(n,"__chain__")&&eu.call(n,"__wrapped__"))return qr(n)}return new Pn(n)}function Tn(){}function Pn(n,t,r){this.__wrapped__=n,this.__actions__=r||[],
this.__chain__=!!t}function zn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=Cu,this.__views__=[]}function Bn(){this.__data__={}}function Dn(n){var t=n?n.length:0;for(this.data={hash:mu(null),set:new hu};t--;)this.push(n[t])}function Mn(n,t){var r=n.data;return(typeof t=="string"||de(t)?r.set.has(t):r.hash[t])?0:-1}function qn(n,t){var r=-1,e=n.length;for(t||(t=De(e));++r<e;)t[r]=n[r];return t}function Kn(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););
return n}function Vn(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Zn(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Xn(n,t){for(var r=-1,e=n.length,u=De(e);++r<e;)u[r]=t(n[r],r,n);return u}function Hn(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function Qn(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function nt(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;
return false}function tt(n,t,r,e){return n!==w&&eu.call(e,r)?n:t}function rt(n,t,r){for(var e=-1,u=Ko(t),o=u.length;++e<o;){var i=u[e],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(f!==w||i in n)||(n[i]=a)}return n}function et(n,t){return null==t?n:ot(t,Ko(t),n)}function ut(n,t){for(var r=-1,e=null==n,u=!e&&Sr(n),o=u?n.length:0,i=t.length,f=De(i);++r<i;){var a=t[r];f[r]=u?Ur(a,o)?n[a]:w:e?w:n[a]}return f}function ot(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var o=t[e];r[o]=n[o]}return r}function it(n,t,r){
var e=typeof n;return"function"==e?t===w?n:Dt(n,t,r):null==n?Ne:"object"==e?At(n):t===w?Be(n):jt(n,t)}function ft(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==w)return f;if(!de(n))return n;if(e=Wo(n)){if(f=Ir(n),!t)return qn(n,f)}else{var a=ou.call(n),c=a==K;if(a!=Z&&a!=z&&(!c||u))return Ln[a]?Er(n,a,t):u?n:{};if(Gn(n))return u?n:{};if(f=Rr(c?{}:n),!t)return et(f,n)}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Kn:gt)(n,function(e,u){f[u]=ft(e,t,r,u,n,o,i);
}),f}function at(n,t,r){if(typeof n!="function")throw new Xe(T);return _u(function(){n.apply(w,r)},t)}function ct(n,t){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=jr(),f=i===r,a=f&&t.length>=F&&mu&&hu?new Dn(t):null,c=t.length;a&&(i=Mn,f=false,t=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(t[l]===a)continue n;u.push(a)}else 0>i(t,a,0)&&u.push(a);return u}function lt(n,t){var r=true;return zu(n,function(n,e,u){return r=!!t(n,e,u)}),r}function st(n,t,r,e){var u=e,o=u;return zu(n,function(n,i,f){
i=+t(n,i,f),(r(i,u)||i===e&&i===o)&&(u=i,o=n)}),o}function pt(n,t){var r=[];return zu(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function ht(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function _t(n,t,r,e){e||(e=[]);for(var u=-1,o=n.length;++u<o;){var i=n[u];h(i)&&Sr(i)&&(r||Wo(i)||_e(i))?t?_t(i,t,r,e):Hn(e,i):r||(e[e.length]=i)}return e}function vt(n,t){return Du(n,t,Ee)}function gt(n,t){return Du(n,t,Ko)}function yt(n,t){return Mu(n,t,Ko)}function dt(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){
var i=t[r];ye(n[i])&&(o[++u]=i)}return o}function mt(n,t,r){if(null!=n){n=Dr(n),r!==w&&r in n&&(t=[r]),r=0;for(var e=t.length;null!=n&&r<e;)n=Dr(n)[t[r++]];return r&&r==e?n:w}}function wt(n,t,r,e,u,o){if(n===t)return true;if(null==n||null==t||!de(n)&&!h(t))return n!==n&&t!==t;n:{var i=wt,f=Wo(n),a=Wo(t),c=B,l=B;f||(c=ou.call(n),c==z?c=Z:c!=Z&&(f=je(n))),a||(l=ou.call(t),l==z?l=Z:l!=Z&&je(t));var s=c==Z&&!Gn(n),a=l==Z&&!Gn(t),l=c==l;if(!l||f||s){if(!e&&(c=s&&eu.call(n,"__wrapped__"),a=a&&eu.call(t,"__wrapped__"),
c||a)){n=i(c?n.value():n,a?t.value():t,r,e,u,o);break n}if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==t;break n}u.push(n),o.push(t),n=(f?mr:xr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=wr(n,t,c)}return n}function xt(n,t,r){var e=t.length,u=e,o=!r;if(null==n)return!u;for(n=Dr(n);e--;){var i=t[e];if(o&&i[2]?i[1]!==n[i[0]]:!(i[0]in n))return false}for(;++e<u;){var i=t[e],f=i[0],a=n[f],c=i[1];if(o&&i[2]){if(a===w&&!(f in n))return false}else if(i=r?r(a,c,f):w,i===w?!wt(c,a,r,true):!i)return false;
}return true}function bt(n,t){var r=-1,e=Sr(n)?De(n.length):[];return zu(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function At(n){var t=kr(n);if(1==t.length&&t[0][2]){var r=t[0][0],e=t[0][1];return function(n){return null==n?false:(n=Dr(n),n[r]===e&&(e!==w||r in n))}}return function(n){return xt(n,t)}}function jt(n,t){var r=Wo(n),e=Wr(n)&&t===t&&!de(t),u=n+"";return n=Mr(n),function(o){if(null==o)return false;var i=u;if(o=Dr(o),!(!r&&e||i in o)){if(o=1==n.length?o:mt(o,St(n,0,-1)),null==o)return false;i=Gr(n),o=Dr(o);
}return o[i]===t?t!==w||i in o:wt(t,o[i],w,true)}}function kt(n,t,r,e,u){if(!de(n))return n;var o=Sr(t)&&(Wo(t)||je(t)),i=o?w:Ko(t);return Kn(i||t,function(f,a){if(i&&(a=f,f=t[a]),h(f)){e||(e=[]),u||(u=[]);n:{for(var c=a,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,Sr(_)&&(Wo(_)||je(_))?v=Wo(p)?p:Sr(p)?qn(p):[]:xe(_)||_e(_)?v=_e(p)?Ie(p):xe(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=kt(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[a],
l=r?r(c,f,a,n,t):w,(s=l===w)&&(l=f),l===w&&(!o||a in n)||!s&&(l===l?l===c:c!==c)||(n[a]=l)}),n}function Ot(n){return function(t){return null==t?w:Dr(t)[n]}}function It(n){var t=n+"";return n=Mr(n),function(r){return mt(r,n,t)}}function Rt(n,t){for(var r=n?t.length:0;r--;){var e=t[r];if(e!=u&&Ur(e)){var u=e;vu.call(n,e,1)}}return n}function Et(n,t){return n+wu(Ru()*(t-n+1))}function Ct(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function St(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,
0>t&&(t=-t>u?0:u+t),r=r===w||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=De(u);++e<u;)r[e]=n[e+t];return r}function Ut(n,t){var r;return zu(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function $t(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Wt(t,r,e){var u=br(),o=-1;return r=Xn(r,function(n){return u(n)}),t=bt(t,function(n){return{a:Xn(r,function(t){return t(n)}),b:++o,c:n}}),$t(t,function(t,r){var u;n:{for(var o=-1,i=t.a,f=r.a,a=i.length,c=e.length;++o<a;)if(u=n(i[o],f[o])){
if(o>=c)break n;o=e[o],u*="asc"===o||true===o?1:-1;break n}u=t.b-r.b}return u})}function Ft(n,t){var r=0;return zu(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function Lt(n,t){var e=-1,u=jr(),o=n.length,i=u===r,f=i&&o>=F,a=f&&mu&&hu?new Dn(void 0):null,c=[];a?(u=Mn,i=false):(f=false,a=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((t||f)&&a.push(s),c.push(l))}return c}function Nt(n,t){for(var r=-1,e=t.length,u=De(e);++r<e;)u[r]=n[t[r]];
return u}function Tt(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););return r?St(n,e?0:o,e?o+1:u):St(n,e?o+1:0,e?u:o)}function Pt(n,t){var r=n;r instanceof zn&&(r=r.value());for(var e=-1,u=t.length;++e<u;)var o=t[e],r=o.func.apply(o.thisArg,Hn([r],o.args));return r}function zt(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Uu){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)&&null!==i?e=o+1:u=o}return u}return Bt(n,t,Ne,r)}function Bt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=null===t,a=t===w;u<o;){
var c=wu((u+o)/2),l=r(n[c]),s=l!==w,p=l===l;(i?p||e:f?p&&s&&(e||null!=l):a?p&&(e||s):null==l?0:e?l<=t:l<t)?u=c+1:o=c}return ku(o,Su)}function Dt(n,t,r){if(typeof n!="function")return Ne;if(t===w)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Mt(n){var t=new au(n.byteLength);
return new gu(t).set(new gu(n)),t}function qt(n,t,r){for(var e=r.length,u=-1,o=ju(n.length-e,0),i=-1,f=t.length,a=De(f+o);++i<f;)a[i]=t[i];for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function Kt(n,t,r){for(var e=-1,u=r.length,o=-1,i=ju(n.length-u,0),f=-1,a=t.length,c=De(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function Vt(n,t){return function(r,e,u){var o=t?t():{};if(e=br(e,u,3),Wo(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r);
}}else zu(r,function(t,r,u){n(o,t,e(t,r,u),u)});return o}}function Zt(n){return pe(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u?r[u-2]:w,i=2<u?r[2]:w,f=1<u?r[u-1]:w;for(typeof o=="function"?(o=Dt(o,f,5),u-=2):(o=typeof f=="function"?f:w,u-=o?1:0),i&&$r(r[0],r[1],i)&&(o=3>u?w:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}function Yt(n,t){return function(r,e){var u=r?Vu(r):0;if(!Lr(u))return n(r,e);for(var o=t?u:-1,i=Dr(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function Gt(n){return function(t,r,e){
var u=Dr(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){var f=e[i];if(false===r(u[f],f,u))break}return t}}function Jt(n,t){function r(){return(this&&this!==Yn&&this instanceof r?e:n).apply(t,arguments)}var e=Ht(n);return r}function Xt(n){return function(t){var r=-1;t=Fe(Ue(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Ht(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);
case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Pu(n.prototype),t=n.apply(r,t);return de(t)?t:r}}function Qt(n){function t(r,e,u){return u&&$r(r,e,u)&&(e=w),r=dr(r,n,w,w,w,w,w,e),r.placeholder=t.placeholder,r}return t}function nr(n,t){return pe(function(r){var e=r[0];return null==e?e:(r.push(t),n.apply(w,r))})}function tr(n,t){return function(r,e,u){
if(u&&$r(r,e,u)&&(e=w),e=br(e,u,3),1==e.length){u=r=Wo(r)?r:Br(r);for(var o=e,i=-1,f=u.length,a=t,c=a;++i<f;){var l=u[i],s=+o(l);n(s,a)&&(a=s,c=l)}if(u=c,!r.length||u!==t)return u}return st(r,e,n,t)}}function rr(n,r){return function(e,u,o){return u=br(u,o,3),Wo(e)?(u=t(e,u,r),-1<u?e[u]:w):ht(e,u,n)}}function er(n){return function(r,e,u){return r&&r.length?(e=br(e,u,3),t(r,e,n)):-1}}function ur(n){return function(t,r,e){return r=br(r,e,3),ht(t,r,n,true)}}function or(n){return function(){for(var t,r=arguments.length,e=n?r:-1,u=0,o=De(r);n?e--:++e<r;){
var i=o[u++]=arguments[e];if(typeof i!="function")throw new Xe(T);!t&&Pn.prototype.thru&&"wrapper"==Ar(i)&&(t=new Pn([],true))}for(e=t?-1:r;++e<r;){var i=o[e],u=Ar(i),f="wrapper"==u?Ku(i):w;t=f&&Fr(f[0])&&f[1]==(E|k|I|C)&&!f[4].length&&1==f[9]?t[Ar(f[0])].apply(t,f[3]):1==i.length&&Fr(i)?t[u]():t.thru(i)}return function(){var n=arguments,e=n[0];if(t&&1==n.length&&Wo(e)&&e.length>=F)return t.plant(e).value();for(var u=0,n=r?o[u].apply(this,n):e;++u<r;)n=o[u].call(this,n);return n}}}function ir(n,t){
return function(r,e,u){return typeof e=="function"&&u===w&&Wo(r)?n(r,e):t(r,Dt(e,u,3))}}function fr(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Dt(r,e,3)),n(t,r,Ee)}}function ar(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Dt(r,e,3)),n(t,r)}}function cr(n){return function(t,r,e){var u={};return r=br(r,e,3),gt(t,function(t,e,o){o=r(t,e,o),e=n?o:e,t=n?t:o,u[e]=t}),u}}function lr(n){return function(t,r,e){return t=u(t),(n?t:"")+_r(t,r,e)+(n?"":t)}}function sr(n){
var t=pe(function(r,e){var u=v(e,t.placeholder);return dr(r,n,w,e,u)});return t}function pr(n,t){return function(r,e,u,o){var i=3>arguments.length;return typeof e=="function"&&o===w&&Wo(r)?n(r,e,u,i):Ct(r,br(e,o,4),u,i,t)}}function hr(n,t,r,e,u,o,i,f,a,c){function l(){for(var m=arguments.length,x=m,j=De(m);x--;)j[x]=arguments[x];if(e&&(j=qt(j,e,u)),o&&(j=Kt(j,o,i)),_||y){var x=l.placeholder,k=v(j,x),m=m-k.length;if(m<c){var O=f?qn(f):w,m=ju(c-m,0),E=_?k:w,k=_?w:k,C=_?j:w,j=_?w:j;return t|=_?I:R,t&=~(_?R:I),
g||(t&=~(b|A)),j=[n,t,r,C,E,j,k,O,a,m],O=hr.apply(w,j),Fr(n)&&Zu(O,j),O.placeholder=x,O}}if(x=p?r:this,O=h?x[n]:n,f)for(m=j.length,E=ku(f.length,m),k=qn(j);E--;)C=f[E],j[E]=Ur(C,m)?k[C]:w;return s&&a<j.length&&(j.length=a),this&&this!==Yn&&this instanceof l&&(O=d||Ht(n)),O.apply(x,j)}var s=t&E,p=t&b,h=t&A,_=t&k,g=t&j,y=t&O,d=h?w:Ht(n);return l}function _r(n,t,r){return n=n.length,t=+t,n<t&&bu(t)?(t-=n,r=null==r?" ":r+"",$e(r,du(t/r.length)).slice(0,t)):""}function vr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=De(c+f);++a<c;)l[a]=e[a];
for(;f--;)l[a++]=arguments[++t];return(this&&this!==Yn&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&b,i=Ht(n);return u}function gr(n){var t=Ve[n];return function(n,r){return(r=r===w?0:+r||0)?(r=su(10,r),t(n*r)/r):t(n)}}function yr(n){return function(t,r,e,u){var o=br(e);return null==e&&o===it?zt(t,r,n):Bt(t,r,o(e,u,1),n)}}function dr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Xe(T);var c=e?e.length:0;if(c||(t&=~(I|R),e=u=w),c-=u?u.length:0,t&R){var l=e,s=u;e=u=w}var p=a?w:Ku(n);
return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==E&&e==k||t==E&&e==C&&r[7].length<=p[8]||t==(E|C)&&e==k,(f<E||u)&&(t&b&&(r[2]=p[2],f|=e&b?0:j),(e=p[3])&&(u=r[3],r[3]=u?qt(u,e,p[4]):qn(e),r[4]=u?v(r[3],P):qn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?Kt(u,e,p[6]):qn(e),r[6]=u?v(r[5],P):qn(p[6])),(e=p[7])&&(r[7]=qn(e)),t&E&&(r[8]=null==r[8]?p[8]:ku(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:ju(f-c,0)||0,n=t==b?Jt(r[0],r[2]):t!=I&&t!=(b|I)||r[4].length?hr.apply(w,r):vr.apply(w,r),
(p?qu:Zu)(n,r)}function mr(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length;if(a!=c&&(!u||c<=a))return false;for(;++f<a;){var l=n[f],c=t[f],s=e?e(u?c:l,u?l:c,f):w;if(s!==w){if(s)continue;return false}if(u){if(!nt(t,function(n){return l===n||r(l,n,e,u,o,i)}))return false}else if(l!==c&&!r(l,c,e,u,o,i))return false}return true}function wr(n,t,r){switch(r){case D:case M:return+n==+t;case q:return n.name==t.name&&n.message==t.message;case V:return n!=+n?t!=+t:n==+t;case Y:case G:return n==t+""}return false}function xr(n,t,r,e,u,o,i){
var f=Ko(n),a=f.length,c=Ko(t).length;if(a!=c&&!u)return false;for(c=a;c--;){var l=f[c];if(!(u?l in t:eu.call(t,l)))return false}for(var s=u;++c<a;){var l=f[c],p=n[l],h=t[l],_=e?e(u?h:p,u?p:h,l):w;if(_===w?!r(p,h,e,u,o,i):!_)return false;s||(s="constructor"==l)}return s||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false}function br(n,t,r){var e=Nn.callback||Le,e=e===Le?it:e;return r?e(n,t,r):e}function Ar(n){
for(var t=n.name+"",r=Fu[t],e=r?r.length:0;e--;){var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}function jr(n,t,e){var u=Nn.indexOf||Yr,u=u===Yr?r:u;return n?u(n,t,e):u}function kr(n){n=Ce(n);for(var t=n.length;t--;){var r,e=n[t];r=n[t][1],r=r===r&&!de(r),e[2]=r}return n}function Or(n,t){var r=null==n?w:n[t];return me(r)?r:w}function Ir(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&eu.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Rr(n){return n=n.constructor,
typeof n=="function"&&n instanceof n||(n=Ye),new n}function Er(n,t,r){var e=n.constructor;switch(t){case J:return Mt(n);case D:case M:return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:return e instanceof e&&(e=Lu[t]),t=n.buffer,new e(r?Mt(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Y:var u=new e(n.source,kn.exec(n));u.lastIndex=n.lastIndex}return u}function Cr(n,t,r){return null==n||Wr(t,n)||(t=Mr(t),n=1==t.length?n:mt(n,St(t,0,-1)),t=Gr(t)),
t=null==n?n:n[t],null==t?w:t.apply(n,r)}function Sr(n){return null!=n&&Lr(Vu(n))}function Ur(n,t){return n=typeof n=="number"||Rn.test(n)?+n:-1,t=null==t?$u:t,-1<n&&0==n%1&&n<t}function $r(n,t,r){if(!de(r))return false;var e=typeof t;return("number"==e?Sr(r)&&Ur(t,r.length):"string"==e&&t in r)?(t=r[t],n===n?n===t:t!==t):false}function Wr(n,t){var r=typeof n;return"string"==r&&dn.test(n)||"number"==r?true:Wo(n)?false:!yn.test(n)||null!=t&&n in Dr(t)}function Fr(n){var t=Ar(n),r=Nn[t];return typeof r=="function"&&t in zn.prototype?n===r?true:(t=Ku(r),
!!t&&n===t[0]):false}function Lr(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=$u}function Nr(n,t){return n===w?t:Fo(n,t,Nr)}function Tr(n,t){n=Dr(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function Pr(n,t){var r={};return vt(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function zr(n){for(var t=Ee(n),r=t.length,e=r&&n.length,u=!!e&&Lr(e)&&(Wo(n)||_e(n)||Ae(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&Ur(f,e)||eu.call(n,f))&&i.push(f)}return i}function Br(n){return null==n?[]:Sr(n)?Nn.support.unindexedChars&&Ae(n)?n.split(""):de(n)?n:Ye(n):Se(n);
}function Dr(n){if(Nn.support.unindexedChars&&Ae(n)){for(var t=-1,r=n.length,e=Ye(n);++t<r;)e[t]=n.charAt(t);return e}return de(n)?n:Ye(n)}function Mr(n){if(Wo(n))return n;var t=[];return u(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(An,"$1"):r||n)}),t}function qr(n){return n instanceof zn?n.clone():new Pn(n.__wrapped__,n.__chain__,qn(n.__actions__))}function Kr(n,t,r){return n&&n.length?((r?$r(n,t,r):null==t)&&(t=1),St(n,0>t?0:t)):[]}function Vr(n,t,r){var e=n?n.length:0;return e?((r?$r(n,t,r):null==t)&&(t=1),
t=e-(+t||0),St(n,0,0>t?0:t)):[]}function Zr(n){return n?n[0]:w}function Yr(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?ju(u+e,0):e;else if(e)return e=zt(n,t),e<u&&(t===t?t===n[e]:n[e]!==n[e])?e:-1;return r(n,t,e||0)}function Gr(n){var t=n?n.length:0;return t?n[t-1]:w}function Jr(n){return Kr(n,1)}function Xr(n,t,e,u){if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=$r(n,t,u)?w:t,t=false);var o=br();if((null!=e||o!==it)&&(e=o(e,u,3)),t&&jr()===r){t=e;var i;e=-1,
u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=Lt(n,e);return n}function Hr(n){if(!n||!n.length)return[];var t=-1,r=0;n=Zn(n,function(n){return Sr(n)?(r=ju(n.length,r),true):void 0});for(var e=De(r);++t<r;)e[t]=Xn(n,Ot(t));return e}function Qr(n,t,r){return n&&n.length?(n=Hr(n),null==t?n:(t=Dt(t,r,4),Xn(n,function(n){return Qn(n,t,w,true)}))):[]}function ne(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Wo(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1]);
}return u}function te(n){return n=Nn(n),n.__chain__=true,n}function re(n,t,r){return t.call(r,n)}function ee(n,t,r){var e=Wo(n)?Vn:lt;return r&&$r(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=br(t,r,3)),e(n,t)}function ue(n,t,r){var e=Wo(n)?Zn:pt;return t=br(t,r,3),e(n,t)}function oe(n,t,r,e){var u=n?Vu(n):0;return Lr(u)||(n=Se(n),u=n.length),r=typeof r!="number"||e&&$r(t,r,e)?0:0>r?ju(u+r,0):r||0,typeof n=="string"||!Wo(n)&&Ae(n)?r<=u&&-1<n.indexOf(t,r):!!u&&-1<jr(n,t,r)}function ie(n,t,r){var e=Wo(n)?Xn:bt;
return t=br(t,r,3),e(n,t)}function fe(n,t,r){if(r?$r(n,t,r):null==t){n=Br(n);var e=n.length;return 0<e?n[Et(0,e-1)]:w}r=-1,n=Oe(n);var e=n.length,u=e-1;for(t=ku(0>t?0:+t||0,e);++r<t;){var e=Et(r,u),o=n[e];n[e]=n[r],n[r]=o}return n.length=t,n}function ae(n,t,r){var e=Wo(n)?nt:Ut;return r&&$r(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=br(t,r,3)),e(n,t)}function ce(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Xe(T);var e=n;n=t,t=e}return function(){return 0<--n&&(r=t.apply(this,arguments)),
1>=n&&(t=w),r}}function le(n,t,r){function e(t,r){r&&cu(r),a=p=h=w,t&&(_=wo(),c=n.apply(s,f),p||a||(f=s=w))}function u(){var n=t-(wo()-l);0>=n||n>t?e(h,a):p=_u(u,n)}function o(){e(g,p)}function i(){if(f=arguments,l=wo(),s=this,h=g&&(p||!y),false===v)var r=y&&!p;else{a||y||(_=l);var e=v-(l-_),i=0>=e||e>v;i?(a&&(a=cu(a)),_=l,c=n.apply(s,f)):a||(a=_u(o,e))}return i&&p?p=cu(p):p||t===v||(p=_u(u,t)),r&&(i=true,c=n.apply(s,f)),!i||p||a||(f=s=w),c}var f,a,c,l,s,p,h,_=0,v=false,g=true;if(typeof n!="function")throw new Xe(T);
if(t=0>t?0:+t||0,true===r)var y=true,g=false;else de(r)&&(y=!!r.leading,v="maxWait"in r&&ju(+r.maxWait||0,t),g="trailing"in r?!!r.trailing:g);return i.cancel=function(){p&&cu(p),a&&cu(a),_=0,a=p=h=w},i}function se(n,t){if(typeof n!="function"||t&&typeof t!="function")throw new Xe(T);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],o=r.cache;return o.has(u)?o.get(u):(e=n.apply(this,e),r.cache=o.set(u,e),e)};return r.cache=new se.Cache,r}function pe(n,t){if(typeof n!="function")throw new Xe(T);return t=ju(t===w?n.length-1:+t||0,0),
function(){for(var r=arguments,e=-1,u=ju(r.length-t,0),o=De(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);case 1:return n.call(this,r[0],o);case 2:return n.call(this,r[0],r[1],o)}for(u=De(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function he(n,t){return n>t}function _e(n){return h(n)&&Sr(n)&&eu.call(n,"callee")&&!pu.call(n,"callee")}function ve(n,t,r,e){return e=(r=typeof r=="function"?Dt(r,e,3):w)?r(n,t):w,e===w?wt(n,t,r):!!e}function ge(n){return h(n)&&typeof n.message=="string"&&ou.call(n)==q;
}function ye(n){return de(n)&&ou.call(n)==K}function de(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function me(n){return null==n?false:ye(n)?fu.test(ru.call(n)):h(n)&&(Gn(n)?fu:In).test(n)}function we(n){return typeof n=="number"||h(n)&&ou.call(n)==V}function xe(n){var t;if(!h(n)||ou.call(n)!=Z||Gn(n)||_e(n)||!(eu.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return Nn.support.ownLast?(vt(n,function(n,t,e){return r=eu.call(e,t),false}),false!==r):(vt(n,function(n,t){
r=t}),r===w||eu.call(n,r))}function be(n){return de(n)&&ou.call(n)==Y}function Ae(n){return typeof n=="string"||h(n)&&ou.call(n)==G}function je(n){return h(n)&&Lr(n.length)&&!!Fn[ou.call(n)]}function ke(n,t){return n<t}function Oe(n){var t=n?Vu(n):0;return Lr(t)?t?Nn.support.unindexedChars&&Ae(n)?n.split(""):qn(n):[]:Se(n)}function Ie(n){return ot(n,Ee(n))}function Re(n){return dt(n,Ee(n))}function Ee(n){if(null==n)return[];de(n)||(n=Ye(n));for(var t=n.length,r=Nn.support,t=t&&Lr(t)&&(Wo(n)||_e(n)||Ae(n))&&t||0,e=n.constructor,u=-1,e=ye(e)&&e.prototype||nu,o=e===n,i=De(t),f=0<t,a=r.enumErrorProps&&(n===Qe||n instanceof qe),c=r.enumPrototypes&&ye(n);++u<t;)i[u]=u+"";
for(var l in n)c&&"prototype"==l||a&&("message"==l||"name"==l)||f&&Ur(l,t)||"constructor"==l&&(o||!eu.call(n,l))||i.push(l);if(r.nonEnumShadows&&n!==nu)for(t=n===tu?G:n===Qe?q:ou.call(n),r=Nu[t]||Nu[Z],t==Z&&(e=nu),t=Wn.length;t--;)l=Wn[t],u=r[l],o&&u||(u?!eu.call(n,l):n[l]===e[l])||i.push(l);return i}function Ce(n){n=Dr(n);for(var t=-1,r=Ko(n),e=r.length,u=De(e);++t<e;){var o=r[t];u[t]=[o,n[o]]}return u}function Se(n){return Nt(n,Ko(n))}function Ue(n){return(n=u(n))&&n.replace(En,a).replace(bn,"");
}function $e(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!bu(t))return r;do t%2&&(r+=n),t=wu(t/2),n+=n;while(t);return r}function We(n,t,r){var e=n;return(n=u(n))?(r?$r(e,t,r):null==t)?n.slice(g(n),y(n)+1):(t+="",n.slice(o(n,t),i(n,t)+1)):n}function Fe(n,t,r){return r&&$r(n,t,r)&&(t=w),n=u(n),n.match(t||Un)||[]}function Le(n,t,r){return r&&$r(n,t,r)&&(t=w),h(n)?Te(n):it(n,t)}function Ne(n){return n}function Te(n){return At(ft(n,true))}function Pe(n,t,r){if(null==r){var e=de(t),u=e?Ko(t):w;((u=u&&u.length?dt(t,u):w)?u.length:e)||(u=false,
r=t,t=n,n=this)}u||(u=dt(t,Ko(t)));var o=true,e=-1,i=ye(n),f=u.length;false===r?o=false:de(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=qn(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return t.apply(n,Hn([this.value()],arguments))}}(a))}return n}function ze(){}function Be(n){return Wr(n)?Ot(n):It(n)}_=_?Jn.defaults(Yn.Object(),_,Jn.pick(Yn,$n)):Yn;
var De=_.Array,Me=_.Date,qe=_.Error,Ke=_.Function,Ve=_.Math,Ze=_.Number,Ye=_.Object,Ge=_.RegExp,Je=_.String,Xe=_.TypeError,He=De.prototype,Qe=qe.prototype,nu=Ye.prototype,tu=Je.prototype,ru=Ke.prototype.toString,eu=nu.hasOwnProperty,uu=0,ou=nu.toString,iu=Yn._,fu=Ge("^"+ru.call(eu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),au=_.ArrayBuffer,cu=_.clearTimeout,lu=_.parseFloat,su=Ve.pow,pu=nu.propertyIsEnumerable,hu=Or(_,"Set"),_u=_.setTimeout,vu=He.splice,gu=_.Uint8Array,yu=Or(_,"WeakMap"),du=Ve.ceil,mu=Or(Ye,"create"),wu=Ve.floor,xu=Or(De,"isArray"),bu=_.isFinite,Au=Or(Ye,"keys"),ju=Ve.max,ku=Ve.min,Ou=Or(Me,"now"),Iu=_.parseInt,Ru=Ve.random,Eu=Ze.NEGATIVE_INFINITY,Cu=Ze.POSITIVE_INFINITY,Su=4294967294,Uu=2147483647,$u=9007199254740991,Wu=yu&&new yu,Fu={},Lu={};
Lu[X]=_.Float32Array,Lu[H]=_.Float64Array,Lu[Q]=_.Int8Array,Lu[nn]=_.Int16Array,Lu[tn]=_.Int32Array,Lu[rn]=gu,Lu[en]=_.Uint8ClampedArray,Lu[un]=_.Uint16Array,Lu[on]=_.Uint32Array;var Nu={};Nu[B]=Nu[M]=Nu[V]={constructor:true,toLocaleString:true,toString:true,valueOf:true},Nu[D]=Nu[G]={constructor:true,toString:true,valueOf:true},Nu[q]=Nu[K]=Nu[Y]={constructor:true,toString:true},Nu[Z]={constructor:true},Kn(Wn,function(n){for(var t in Nu)if(eu.call(Nu,t)){var r=Nu[t];r[n]=eu.call(r,n)}});var Tu=Nn.support={};!function(n){
var t=function(){this.x=n},r={0:n,length:n},e=[];t.prototype={valueOf:n,y:n};for(var u in new t)e.push(u);Tu.enumErrorProps=pu.call(Qe,"message")||pu.call(Qe,"name"),Tu.enumPrototypes=pu.call(t,"prototype"),Tu.nonEnumShadows=!/valueOf/.test(e),Tu.ownLast="x"!=e[0],Tu.spliceObjects=(vu.call(r,0,1),!r[0]),Tu.unindexedChars="xx"!="x"[0]+Ye("x")[0]}(1,0),Nn.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:Nn}};var Pu=function(){function n(){}return function(t){if(de(t)){n.prototype=t;
var r=new n;n.prototype=w}return r||{}}}(),zu=Yt(gt),Bu=Yt(yt,true),Du=Gt(),Mu=Gt(true),qu=Wu?function(n,t){return Wu.set(n,t),n}:Ne,Ku=Wu?function(n){return Wu.get(n)}:ze,Vu=Ot("length"),Zu=function(){var n=0,t=0;return function(r,e){var u=wo(),o=W-(u-t);if(t=u,0<o){if(++n>=$)return r}else n=0;return qu(r,e)}}(),Yu=pe(function(n,t){return h(n)&&Sr(n)?ct(n,_t(t,false,true)):[]}),Gu=er(),Ju=er(true),Xu=pe(function(n){for(var t=n.length,e=t,u=De(l),o=jr(),i=o===r,f=[];e--;){var a=n[e]=Sr(a=n[e])?a:[];u[e]=i&&120<=a.length&&mu&&hu?new Dn(e&&a):null;
}var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(a=i[c],0>(s?Mn(s,a):o(f,a,0))){for(e=t;--e;){var p=u[e];if(0>(p?Mn(p,a):o(n[e],a,0)))continue n}s&&s.push(a),f.push(a)}return f}),Hu=pe(function(t,r){r=_t(r);var e=ut(t,r);return Rt(t,r.sort(n)),e}),Qu=yr(),no=yr(true),to=pe(function(n){return Lt(_t(n,false,true))}),ro=pe(function(n,t){return Sr(n)?ct(n,t):[]}),eo=pe(Hr),uo=pe(function(n){var t=n.length,r=2<t?n[t-2]:w,e=1<t?n[t-1]:w;return 2<t&&typeof r=="function"?t-=2:(r=1<t&&typeof e=="function"?(--t,
e):w,e=w),n.length=t,Qr(n,r,e)}),oo=pe(function(n){return n=_t(n),this.thru(function(t){t=Wo(t)?t:[Dr(t)];for(var r=n,e=-1,u=t.length,o=-1,i=r.length,f=De(u+i);++e<u;)f[e]=t[e];for(;++o<i;)f[e++]=r[o];return f})}),io=pe(function(n,t){return Sr(n)&&(n=Br(n)),ut(n,_t(t))}),fo=Vt(function(n,t,r){eu.call(n,r)?++n[r]:n[r]=1}),ao=rr(zu),co=rr(Bu,true),lo=ir(Kn,zu),so=ir(function(n,t){for(var r=n.length;r--&&false!==t(n[r],r,n););return n},Bu),po=Vt(function(n,t,r){eu.call(n,r)?n[r].push(t):n[r]=[t]}),ho=Vt(function(n,t,r){
n[r]=t}),_o=pe(function(n,t,r){var e=-1,u=typeof t=="function",o=Wr(t),i=Sr(n)?De(n.length):[];return zu(n,function(n){var f=u?t:o&&null!=n?n[t]:w;i[++e]=f?f.apply(n,r):Cr(n,t,r)}),i}),vo=Vt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),go=pr(Qn,zu),yo=pr(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},Bu),mo=pe(function(n,t){if(null==n)return[];var r=t[2];return r&&$r(t[0],t[1],r)&&(t.length=1),Wt(n,_t(t),[])}),wo=Ou||function(){return(new Me).getTime();
},xo=pe(function(n,t,r){var e=b;if(r.length)var u=v(r,xo.placeholder),e=e|I;return dr(n,e,t,r,u)}),bo=pe(function(n,t){t=t.length?_t(t):Re(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=dr(n[u],b,n)}return n}),Ao=pe(function(n,t,r){var e=b|A;if(r.length)var u=v(r,Ao.placeholder),e=e|I;return dr(t,e,n,r,u)}),jo=Qt(k),ko=Qt(O),Oo=pe(function(n,t){return at(n,1,t)}),Io=pe(function(n,t,r){return at(n,t,r)}),Ro=or(),Eo=or(true),Co=pe(function(n,t){if(t=_t(t),typeof n!="function"||!Vn(t,e))throw new Xe(T);
var r=t.length;return pe(function(e){for(var u=ku(e.length,r);u--;)e[u]=t[u](e[u]);return n.apply(this,e)})}),So=sr(I),Uo=sr(R),$o=pe(function(n,t){return dr(n,C,w,w,w,_t(t))}),Wo=xu||function(n){return h(n)&&Lr(n.length)&&ou.call(n)==B},Fo=Zt(kt),Lo=Zt(function(n,t,r){return r?rt(n,t,r):et(n,t)}),No=nr(Lo,function(n,t){return n===w?t:n}),To=nr(Fo,Nr),Po=ur(gt),zo=ur(yt),Bo=fr(Du),Do=fr(Mu),Mo=ar(gt),qo=ar(yt),Ko=Au?function(n){var t=null==n?w:n.constructor;return typeof t=="function"&&t.prototype===n||(typeof n=="function"?Nn.support.enumPrototypes:Sr(n))?zr(n):de(n)?Au(n):[];
}:zr,Vo=cr(true),Zo=cr(),Yo=pe(function(n,t){if(null==n)return{};if("function"!=typeof t[0])return t=Xn(_t(t),Je),Tr(n,ct(Ee(n),t));var r=Dt(t[0],t[1],3);return Pr(n,function(n,t,e){return!r(n,t,e)})}),Go=pe(function(n,t){return null==n?{}:"function"==typeof t[0]?Pr(n,Dt(t[0],t[1],3)):Tr(n,_t(t))}),Jo=Xt(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t)}),Xo=Xt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Ho=lr(),Qo=lr(true),ni=Xt(function(n,t,r){return n+(r?"_":"")+t.toLowerCase();
}),ti=Xt(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),ri=pe(function(n,t){try{return n.apply(w,t)}catch(r){return ge(r)?r:new qe(r)}}),ei=pe(function(n,t){return function(r){return Cr(r,n,t)}}),ui=pe(function(n,t){return function(r){return Cr(n,r,t)}}),oi=gr("ceil"),ii=gr("floor"),fi=tr(he,Eu),ai=tr(ke,Cu),ci=gr("round");return Nn.prototype=Tn.prototype,Pn.prototype=Pu(Tn.prototype),Pn.prototype.constructor=Pn,zn.prototype=Pu(Tn.prototype),zn.prototype.constructor=zn,
Bn.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Bn.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n]},Bn.prototype.has=function(n){return"__proto__"!=n&&eu.call(this.__data__,n)},Bn.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Dn.prototype.push=function(n){var t=this.data;typeof n=="string"||de(n)?t.set.add(n):t.hash[n]=true},se.Cache=Bn,Nn.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Xe(T);
var r=n;n=t,t=r}return n=bu(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},Nn.ary=function(n,t,r){return r&&$r(n,t,r)&&(t=w),t=n&&null==t?n.length:ju(+t||0,0),dr(n,E,w,w,w,w,t)},Nn.assign=Lo,Nn.at=io,Nn.before=ce,Nn.bind=xo,Nn.bindAll=bo,Nn.bindKey=Ao,Nn.callback=Le,Nn.chain=te,Nn.chunk=function(n,t,r){t=(r?$r(n,t,r):null==t)?1:ju(wu(t)||1,1),r=0;for(var e=n?n.length:0,u=-1,o=De(du(e/t));r<e;)o[++u]=St(n,r,r+=t);return o},Nn.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){
var o=n[t];o&&(u[++e]=o)}return u},Nn.constant=function(n){return function(){return n}},Nn.countBy=fo,Nn.create=function(n,t,r){var e=Pu(n);return r&&$r(n,t,r)&&(t=w),t?et(e,t):e},Nn.curry=jo,Nn.curryRight=ko,Nn.debounce=le,Nn.defaults=No,Nn.defaultsDeep=To,Nn.defer=Oo,Nn.delay=Io,Nn.difference=Yu,Nn.drop=Kr,Nn.dropRight=Vr,Nn.dropRightWhile=function(n,t,r){return n&&n.length?Tt(n,br(t,r,3),true,true):[]},Nn.dropWhile=function(n,t,r){return n&&n.length?Tt(n,br(t,r,3),true):[]},Nn.fill=function(n,t,r,e){
var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&$r(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===w||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;return n},Nn.filter=ue,Nn.flatten=function(n,t,r){var e=n?n.length:0;return r&&$r(n,t,r)&&(t=false),e?_t(n,t):[]},Nn.flattenDeep=function(n){return n&&n.length?_t(n,true):[]},Nn.flow=Ro,Nn.flowRight=Eo,Nn.forEach=lo,Nn.forEachRight=so,Nn.forIn=Bo,Nn.forInRight=Do,Nn.forOwn=Mo,Nn.forOwnRight=qo,Nn.functions=Re,
Nn.groupBy=po,Nn.indexBy=ho,Nn.initial=function(n){return Vr(n,1)},Nn.intersection=Xu,Nn.invert=function(n,t,r){r&&$r(n,t,r)&&(t=w),r=-1;for(var e=Ko(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?eu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},Nn.invoke=_o,Nn.keys=Ko,Nn.keysIn=Ee,Nn.map=ie,Nn.mapKeys=Vo,Nn.mapValues=Zo,Nn.matches=Te,Nn.matchesProperty=function(n,t){return jt(n,ft(t,true))},Nn.memoize=se,Nn.merge=Fo,Nn.method=ei,Nn.methodOf=ui,Nn.mixin=Pe,Nn.modArgs=Co,Nn.negate=function(n){if(typeof n!="function")throw new Xe(T);
return function(){return!n.apply(this,arguments)}},Nn.omit=Yo,Nn.once=function(n){return ce(2,n)},Nn.pairs=Ce,Nn.partial=So,Nn.partialRight=Uo,Nn.partition=vo,Nn.pick=Go,Nn.pluck=function(n,t){return ie(n,Be(t))},Nn.property=Be,Nn.propertyOf=function(n){return function(t){return mt(n,Mr(t),t+"")}},Nn.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=jr(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)vu.call(t,o,1);return t},Nn.pullAt=Hu,Nn.range=function(n,t,r){
r&&$r(n,t,r)&&(t=r=w),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=ju(du((t-n)/(r||1)),0);for(var u=De(t);++e<t;)u[e]=n,n+=r;return u},Nn.rearg=$o,Nn.reject=function(n,t,r){var e=Wo(n)?Zn:pt;return t=br(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},Nn.remove=function(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(t=br(t,r,3);++u<i;)r=n[u],t(r,u,n)&&(e.push(r),o.push(u));return Rt(n,o),e},Nn.rest=Jr,Nn.restParam=pe,Nn.set=function(n,t,r){if(null==n)return n;
var e=t+"";t=null!=n[e]||Wr(t,n)?[e]:Mr(t);for(var e=-1,u=t.length,o=u-1,i=n;null!=i&&++e<u;){var f=t[e];de(i)&&(e==o?i[f]=r:null==i[f]&&(i[f]=Ur(t[e+1])?[]:{})),i=i[f]}return n},Nn.shuffle=function(n){return fe(n,Cu)},Nn.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&$r(n,t,r)&&(t=0,r=e),St(n,t,r)):[]},Nn.sortBy=function(n,t,r){if(null==n)return[];r&&$r(n,t,r)&&(t=w);var e=-1;return t=br(t,r,3),n=bt(n,function(n,r,u){return{a:t(n,r,u),b:++e,c:n}}),$t(n,f)},Nn.sortByAll=mo,
Nn.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&$r(t,r,e)&&(r=w),Wo(t)||(t=null==t?[]:[t]),Wo(r)||(r=null==r?[]:[r]),Wt(n,t,r))},Nn.spread=function(n){if(typeof n!="function")throw new Xe(T);return function(t){return n.apply(this,t)}},Nn.take=function(n,t,r){return n&&n.length?((r?$r(n,t,r):null==t)&&(t=1),St(n,0,0>t?0:t)):[]},Nn.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?$r(n,t,r):null==t)&&(t=1),t=e-(+t||0),St(n,0>t?0:t)):[]},Nn.takeRightWhile=function(n,t,r){return n&&n.length?Tt(n,br(t,r,3),false,true):[];
},Nn.takeWhile=function(n,t,r){return n&&n.length?Tt(n,br(t,r,3)):[]},Nn.tap=function(n,t,r){return t.call(r,n),n},Nn.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Xe(T);return false===r?e=false:de(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),le(n,t,{leading:e,maxWait:+t,trailing:u})},Nn.thru=re,Nn.times=function(n,t,r){if(n=wu(n),1>n||!bu(n))return[];var e=-1,u=De(ku(n,4294967295));for(t=Dt(t,r,1);++e<n;)4294967295>e?u[e]=t(e):t(e);return u},Nn.toArray=Oe,
Nn.toPlainObject=Ie,Nn.transform=function(n,t,r,e){var u=Wo(n)||je(n);return t=br(t,e,4),null==r&&(u||de(n)?(e=n.constructor,r=u?Wo(n)?new e:[]:Pu(ye(e)?e.prototype:w)):r={}),(u?Kn:gt)(n,function(n,e,u){return t(r,n,e,u)}),r},Nn.union=to,Nn.uniq=Xr,Nn.unzip=Hr,Nn.unzipWith=Qr,Nn.values=Se,Nn.valuesIn=function(n){return Nt(n,Ee(n))},Nn.where=function(n,t){return ue(n,At(t))},Nn.without=ro,Nn.wrap=function(n,t){return t=null==t?Ne:t,dr(t,I,w,[n],[])},Nn.xor=function(){for(var n=-1,t=arguments.length;++n<t;){
var r=arguments[n];if(Sr(r))var e=e?Hn(ct(e,r),ct(r,e)):r}return e?Lt(e):[]},Nn.zip=eo,Nn.zipObject=ne,Nn.zipWith=uo,Nn.backflow=Eo,Nn.collect=ie,Nn.compose=Eo,Nn.each=lo,Nn.eachRight=so,Nn.extend=Lo,Nn.iteratee=Le,Nn.methods=Re,Nn.object=ne,Nn.select=ue,Nn.tail=Jr,Nn.unique=Xr,Pe(Nn,Nn),Nn.add=function(n,t){return(+n||0)+(+t||0)},Nn.attempt=ri,Nn.camelCase=Jo,Nn.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)},Nn.ceil=oi,Nn.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&$r(n,t,r)?t=false:typeof t=="function"&&(e=r,
r=t,t=false),typeof r=="function"?ft(n,t,Dt(r,e,3)):ft(n,t)},Nn.cloneDeep=function(n,t,r){return typeof t=="function"?ft(n,true,Dt(t,r,3)):ft(n,true)},Nn.deburr=Ue,Nn.endsWith=function(n,t,r){n=u(n),t+="";var e=n.length;return r=r===w?e:ku(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},Nn.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,c):n},Nn.escapeRegExp=function(n){return(n=u(n))&&xn.test(n)?n.replace(wn,l):n||"(?:)"},Nn.every=ee,Nn.find=ao,Nn.findIndex=Gu,Nn.findKey=Po,Nn.findLast=co,
Nn.findLastIndex=Ju,Nn.findLastKey=zo,Nn.findWhere=function(n,t){return ao(n,At(t))},Nn.first=Zr,Nn.floor=ii,Nn.get=function(n,t,r){return n=null==n?w:mt(n,Mr(t),t+""),n===w?r:n},Nn.gt=he,Nn.gte=function(n,t){return n>=t},Nn.has=function(n,t){if(null==n)return false;var r=eu.call(n,t);if(!r&&!Wr(t)){if(t=Mr(t),n=1==t.length?n:mt(n,St(t,0,-1)),null==n)return false;t=Gr(t),r=eu.call(n,t)}return r||Lr(n.length)&&Ur(t,n.length)&&(Wo(n)||_e(n)||Ae(n))},Nn.identity=Ne,Nn.includes=oe,Nn.indexOf=Yr,Nn.inRange=function(n,t,r){
return t=+t||0,r===w?(r=t,t=0):r=+r||0,n>=ku(t,r)&&n<ju(t,r)},Nn.isArguments=_e,Nn.isArray=Wo,Nn.isBoolean=function(n){return true===n||false===n||h(n)&&ou.call(n)==D},Nn.isDate=function(n){return h(n)&&ou.call(n)==M},Nn.isElement=function(n){return!!n&&1===n.nodeType&&h(n)&&!xe(n)},Nn.isEmpty=function(n){return null==n?true:Sr(n)&&(Wo(n)||Ae(n)||_e(n)||h(n)&&ye(n.splice))?!n.length:!Ko(n).length},Nn.isEqual=ve,Nn.isError=ge,Nn.isFinite=function(n){return typeof n=="number"&&bu(n)},Nn.isFunction=ye,Nn.isMatch=function(n,t,r,e){
return r=typeof r=="function"?Dt(r,e,3):w,xt(n,kr(t),r)},Nn.isNaN=function(n){return we(n)&&n!=+n},Nn.isNative=me,Nn.isNull=function(n){return null===n},Nn.isNumber=we,Nn.isObject=de,Nn.isPlainObject=xe,Nn.isRegExp=be,Nn.isString=Ae,Nn.isTypedArray=je,Nn.isUndefined=function(n){return n===w},Nn.kebabCase=Xo,Nn.last=Gr,Nn.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?ju(e+r,0):ku(r||0,e-1))+1;else if(r)return u=zt(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;
if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},Nn.lt=ke,Nn.lte=function(n,t){return n<=t},Nn.max=fi,Nn.min=ai,Nn.noConflict=function(){return Yn._=iu,this},Nn.noop=ze,Nn.now=wo,Nn.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&bu(t)?(e=(t-e)/2,t=wu(e),e=du(e),r=_r("",e,r),r.slice(0,t)+n+r):n},Nn.padLeft=Ho,Nn.padRight=Qo,Nn.parseInt=function(n,t,r){return(r?$r(n,t,r):null==t)?t=0:t&&(t=+t),n=We(n),Iu(n,t||(On.test(n)?16:10))},Nn.random=function(n,t,r){r&&$r(n,t,r)&&(t=r=w);
var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=Ru(),ku(n+r*(t-n+lu("1e-"+((r+"").length-1))),t)):Et(n,t)},Nn.reduce=go,Nn.reduceRight=yo,Nn.repeat=$e,Nn.result=function(n,t,r){var e=null==n?w:Dr(n)[t];return e===w&&(null==n||Wr(t,n)||(t=Mr(t),n=1==t.length?n:mt(n,St(t,0,-1)),e=null==n?w:Dr(n)[Gr(t)]),e=e===w?r:e),ye(e)?e.call(n):e},Nn.round=ci,Nn.runInContext=m,Nn.size=function(n){
var t=n?Vu(n):0;return Lr(t)?t:Ko(n).length},Nn.snakeCase=ni,Nn.some=ae,Nn.sortedIndex=Qu,Nn.sortedLastIndex=no,Nn.startCase=ti,Nn.startsWith=function(n,t,r){return n=u(n),r=null==r?0:ku(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},Nn.sum=function(n,t,r){if(r&&$r(n,t,r)&&(t=w),t=br(t,r,3),1==t.length){n=Wo(n)?n:Br(n),r=n.length;for(var e=0;r--;)e+=+t(n[r])||0;n=e}else n=Ft(n,t);return n},Nn.template=function(n,t,r){var e=Nn.templateSettings;r&&$r(n,t,r)&&(t=r=w),n=u(n),t=rt(et({},r||t),e,tt),r=rt(et({},t.imports),e.imports,tt);
var o,i,f=Ko(r),a=Nt(r,f),c=0;r=t.interpolate||Cn;var l="__p+='";r=Ge((t.escape||Cn).source+"|"+r.source+"|"+(r===gn?jn:Cn).source+"|"+(t.evaluate||Cn).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Sn,s),r&&(o=true,l+="'+__e("+r+")+'"),f&&(i=true,l+="';"+f+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(fn,""):l).replace(an,"$1").replace(cn,"$1;"),
l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",t=ri(function(){return Ke(f,p+"return "+l).apply(w,a)}),t.source=l,ge(t))throw t;return t},Nn.trim=We,Nn.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?$r(e,t,r):null==t)?g(n):o(n,t+"")):n},Nn.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?$r(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,i(n,t+"")+1):n;
},Nn.trunc=function(n,t,r){r&&$r(n,t,r)&&(t=w);var e=S;if(r=U,null!=t)if(de(t)){var o="separator"in t?t.separator:o,e="length"in t?+t.length||0:e;r="omission"in t?u(t.omission):r}else e=+t||0;if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;if(t=n.slice(0,e),null==o)return t+r;if(be(o)){if(n.slice(e).search(o)){var i,f=n.slice(0,e);for(o.global||(o=Ge(o.source,(kn.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),
-1<o&&(t=t.slice(0,o)));return t+r},Nn.unescape=function(n){return(n=u(n))&&pn.test(n)?n.replace(ln,d):n},Nn.uniqueId=function(n){var t=++uu;return u(n)+t},Nn.words=Fe,Nn.all=ee,Nn.any=ae,Nn.contains=oe,Nn.eq=ve,Nn.detect=ao,Nn.foldl=go,Nn.foldr=yo,Nn.head=Zr,Nn.include=oe,Nn.inject=go,Pe(Nn,function(){var n={};return gt(Nn,function(t,r){Nn.prototype[r]||(n[r]=t)}),n}(),false),Nn.sample=fe,Nn.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return fe(t,n)}):fe(this.value());
},Nn.VERSION=x,Kn("bind bindKey curry curryRight partial partialRight".split(" "),function(n){Nn[n].placeholder=Nn}),Kn(["drop","take"],function(n,t){zn.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new zn(this);r=null==r?1:ju(wu(r)||0,0);var u=this.clone();return e?u.__takeCount__=ku(u.__takeCount__,r):u.__views__.push({size:r,type:n+(0>u.__dir__?"Right":"")}),u},zn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Kn(["filter","map","takeWhile"],function(n,t){
var r=t+1,e=r!=N;zn.prototype[n]=function(n,t){var u=this.clone();return u.__iteratees__.push({iteratee:br(n,t,1),type:r}),u.__filtered__=u.__filtered__||e,u}}),Kn(["first","last"],function(n,t){var r="take"+(t?"Right":"");zn.prototype[n]=function(){return this[r](1).value()[0]}}),Kn(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");zn.prototype[n]=function(){return this.__filtered__?new zn(this):this[r](1)}}),Kn(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?At:Be;zn.prototype[n]=function(n){
return this[r](e(n))}}),zn.prototype.compact=function(){return this.filter(Ne)},zn.prototype.reject=function(n,t){return n=br(n,t,1),this.filter(function(t){return!n(t)})},zn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return r.__filtered__&&(0<n||0>t)?new zn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r)},zn.prototype.takeRightWhile=function(n,t){return this.reverse().takeWhile(n,t).reverse()},zn.prototype.toArray=function(){return this.take(Cu);
},gt(zn.prototype,function(n,t){var r=/^(?:filter|map|reject)|While$/.test(t),e=/^(?:first|last)$/.test(t),u=Nn[e?"take"+("last"==t?"Right":""):t];u&&(Nn.prototype[t]=function(){var t=e?[1]:arguments,o=this.__chain__,i=this.__wrapped__,f=!!this.__actions__.length,a=i instanceof zn,c=t[0],l=a||Wo(i);l&&r&&typeof c=="function"&&1!=c.length&&(a=l=false);var s=function(n){return e&&o?u(n,1)[0]:u.apply(w,Hn([n],t))},c={func:re,args:[s],thisArg:w},f=a&&!f;return e&&!o?f?(i=i.clone(),i.__actions__.push(c),
n.call(i)):u.call(w,this.value())[0]:!e&&l?(i=f?i:new zn(this),i=n.apply(i,t),i.__actions__.push(c),new Pn(i,o)):this.thru(s)})}),Kn("join pop push replace shift sort splice split unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?tu:He)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=!Tu.spliceObjects&&/^(?:pop|shift|splice)$/.test(n),u=/^(?:join|pop|replace|shift)$/.test(n),o=e?function(){var n=t.apply(this,arguments);return 0===this.length&&delete this[0],n}:t;Nn.prototype[n]=function(){
var n=arguments;return u&&!this.__chain__?o.apply(this.value(),n):this[r](function(t){return o.apply(t,n)})}}),gt(zn.prototype,function(n,t){var r=Nn[t];if(r){var e=r.name+"";(Fu[e]||(Fu[e]=[])).push({name:t,func:r})}}),Fu[hr(w,A).name]=[{name:"wrapper",func:w}],zn.prototype.clone=function(){var n=new zn(this.__wrapped__);return n.__actions__=qn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=qn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=qn(this.__views__),
n},zn.prototype.reverse=function(){if(this.__filtered__){var n=new zn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},zn.prototype.value=function(){var n,t=this.__wrapped__.value(),r=this.__dir__,e=Wo(t),u=0>r,o=e?t.length:0;n=0;for(var i=o,f=this.__views__,a=-1,c=f.length;++a<c;){var l=f[a],s=l.size;switch(l.type){case"drop":n+=s;break;case"dropRight":i-=s;break;case"take":i=ku(i,n+s);break;case"takeRight":n=ju(n,i-s)}}if(n={start:n,end:i},i=n.start,f=n.end,n=f-i,
u=u?f:i-1,i=this.__iteratees__,f=i.length,a=0,c=ku(n,this.__takeCount__),!e||o<F||o==n&&c==n)return Pt(t,this.__actions__);e=[];n:for(;n--&&a<c;){for(u+=r,o=-1,l=t[u];++o<f;){var p=i[o],s=p.type,p=p.iteratee(l);if(s==N)l=p;else if(!p){if(s==L)continue n;break n}}e[a++]=l}return e},Nn.prototype.chain=function(){return te(this)},Nn.prototype.commit=function(){return new Pn(this.value(),this.__chain__)},Nn.prototype.concat=oo,Nn.prototype.plant=function(n){for(var t,r=this;r instanceof Tn;){var e=qr(r);
t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},Nn.prototype.reverse=function(){var n=this.__wrapped__,t=function(n){return n.reverse()};return n instanceof zn?(this.__actions__.length&&(n=new zn(this)),n=n.reverse(),n.__actions__.push({func:re,args:[t],thisArg:w}),new Pn(n,this.__chain__)):this.thru(t)},Nn.prototype.toString=function(){return this.value()+""},Nn.prototype.run=Nn.prototype.toJSON=Nn.prototype.valueOf=Nn.prototype.value=function(){return Pt(this.__wrapped__,this.__actions__);
},Nn.prototype.collect=Nn.prototype.map,Nn.prototype.head=Nn.prototype.first,Nn.prototype.select=Nn.prototype.filter,Nn.prototype.tail=Nn.prototype.rest,Nn}var w,x="3.10.1",b=1,A=2,j=4,k=8,O=16,I=32,R=64,E=128,C=256,S=30,U="...",$=150,W=16,F=200,L=1,N=2,T="Expected a function",P="__lodash_placeholder__",z="[object Arguments]",B="[object Array]",D="[object Boolean]",M="[object Date]",q="[object Error]",K="[object Function]",V="[object Number]",Z="[object Object]",Y="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",fn=/\b__p\+='';/g,an=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,xn=RegExp(wn.source),bn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kn=/\w*$/,On=/^0[xX]/,In=/^\[object .+?Constructor\]$/,Rn=/^\d+$/,En=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Cn=/($^)/,Sn=/['\n\r\u2028\u2029\\]/g,Un=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),$n="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),Wn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Fn={};
Fn[X]=Fn[H]=Fn[Q]=Fn[nn]=Fn[tn]=Fn[rn]=Fn[en]=Fn[un]=Fn[on]=true,Fn[z]=Fn[B]=Fn[J]=Fn[D]=Fn[M]=Fn[q]=Fn[K]=Fn["[object Map]"]=Fn[V]=Fn[Z]=Fn[Y]=Fn["[object Set]"]=Fn[G]=Fn["[object WeakMap]"]=false;var Ln={};Ln[z]=Ln[B]=Ln[J]=Ln[D]=Ln[M]=Ln[X]=Ln[H]=Ln[Q]=Ln[nn]=Ln[tn]=Ln[V]=Ln[Z]=Ln[Y]=Ln[G]=Ln[rn]=Ln[en]=Ln[un]=Ln[on]=true,Ln[q]=Ln[K]=Ln["[object Map]"]=Ln["[object Set]"]=Ln["[object WeakMap]"]=false;var Nn={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a",
"\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y",
"\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Pn={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},zn={"function":true,object:true},Bn={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"},Dn={"\\":"\\",
"'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mn=zn[typeof exports]&&exports&&!exports.nodeType&&exports,qn=zn[typeof module]&&module&&!module.nodeType&&module,Kn=zn[typeof self]&&self&&self.Object&&self,Vn=zn[typeof window]&&window&&window.Object&&window,Zn=qn&&qn.exports===Mn&&Mn,Yn=Mn&&qn&&typeof global=="object"&&global&&global.Object&&global||Vn!==(this&&this.window)&&Vn||Kn||this,Gn=function(){try{Object({toString:0}+"")}catch(n){return function(){return false}}return function(n){
return typeof n.toString!="function"&&typeof(n+"")=="string"}}(),Jn=m();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Yn._=Jn, define(function(){return Jn})):Mn&&qn?Zn?(qn.exports=Jn)._=Jn:Mn._=Jn:Yn._=Jn}).call(this);
/*! SeaJS 2.0.0 | seajs.org/LICENSE.md */
(function(u,r){function x(a){return function(c){return Object.prototype.toString.call(c)==="[object "+a+"]"}}function R(a){a=a.replace(ka,"/");for(a=a.replace(la,"$1/");a.match(S);)a=a.replace(S,"/");return a}function T(a){a=R(a);ma.test(a)?a=a.slice(0,-1):na.test(a)||(a+=".js");return a.replace(":80/","/")}function U(a,c){return oa.test(a)?a:pa.test(a)?(c||v).match(H)[0]+a:qa.test(a)?(v.match(ra)||["/"])[0]+a.substring(1):j.base+a}function I(a,c){if(!a)return"";var b=a,d=j.alias,b=a=d&&J(d[b])?d[b]:
b,d=j.paths,f;if(d&&(f=b.match(sa))&&J(d[f[1]]))b=d[f[1]]+f[2];f=b;var K=j.vars;K&&-1<f.indexOf("{")&&(f=f.replace(ta,function(a,b){return J(K[b])?K[b]:a}));a=U(f,c);f=a=T(a);var b=j.map,e=f;if(b)for(d=0;d<b.length&&!(e=b[d],e=y(e)?e(f)||f:f.replace(e[0],e[1]),e!==f);d++);return e}function V(a,c){var b=a.sheet,d;if(W)b&&(d=!0);else if(b)try{b.cssRules&&(d=!0)}catch(f){"NS_ERROR_DOM_SECURITY_ERR"===f.name&&(d=!0)}setTimeout(function(){d?c():V(a,c)},20)}function ua(){if(z)return z;if(A&&"interactive"===
A.readyState)return A;for(var a=w.getElementsByTagName("script"),c=a.length-1;0<=c;c--){var b=a[c];if("interactive"===b.readyState)return A=b}}function B(a){this.uri=a;this.dependencies=[];this.exports=null;this.status=0}function s(a,c){if(C(a)){for(var b=[],d=0;d<a.length;d++)b[d]=s(a[d],c);return b}b={id:a,refUri:c};n("resolve",b);return b.uri||I(b.id,c)}function D(a,c){C(a)||(a=[a]);X(a,function(){for(var b=[],d=0;d<a.length;d++)b[d]=Y(l[a[d]]);c&&c.apply(u,b)})}function X(a,c){var b=Z(a);if(0===
b.length)c();else{n("load",b);for(var d=b.length,f=d,e=0;e<d;e++)(function(a){function b(c){c||(c=d);var f=Z(e.dependencies);0===f.length?c():$(e)?(f=p,f.push(f[0]),aa("Circular dependencies: "+f.join(" -> ")),p.length=0,c(!0)):(ba[a]=f,X(f,c))}function d(a){!a&&e.status<L&&(e.status=L);0===--f&&c()}var e=l[a];e.dependencies.length?b(function(b){function c(){d(b)}e.status<E?ca(a,c):c()}):e.status<E?ca(a,b):d()})(b[e])}}function ca(a,c){function b(){delete M[f];N[f]=!0;F&&(da(a,F),F=r);var b,c=G[f];
for(delete G[f];b=c.shift();)b()}l[a].status=va;var d={uri:a};n("fetch",d);var f=d.requestUri||a;if(N[f])c();else if(M[f])G[f].push(c);else{M[f]=!0;G[f]=[c];var e=j.charset;n("request",d={uri:a,requestUri:f,callback:b,charset:e});if(!d.requested){var d=d.requestUri,h=ea.test(d),g=q.createElement(h?"link":"script");if(e&&(e=y(e)?e(d):e))g.charset=e;var k=g;h&&(W||!("onload"in k))?setTimeout(function(){V(k,b)},1):k.onload=k.onerror=k.onreadystatechange=function(){wa.test(k.readyState)&&(k.onload=k.onerror=
k.onreadystatechange=null,!h&&!j.debug&&w.removeChild(k),k=r,b())};h?(g.rel="stylesheet",g.href=d):(g.async=!0,g.src=d);z=g;fa?w.insertBefore(g,fa):w.appendChild(g);z=r}}}function xa(a,c,b){1===arguments.length&&(b=a,a=r);if(!C(c)&&y(b)){var d=[];b.toString().replace(ya,"").replace(za,function(a,b,c){c&&d.push(c)});c=d}var f={id:a,uri:s(a),deps:c,factory:b};if(!f.uri&&q.attachEvent){var e=ua();e?f.uri=e.src:aa("Failed to derive: "+b)}n("define",f);f.uri?da(f.uri,f):F=f}function da(a,c){var b=l[a]||
(l[a]=new B(a));b.status<E&&(b.id=c.id||a,b.dependencies=s(c.deps||[],a),b.factory=c.factory,b.factory!==r&&(b.status=E))}function Aa(a){function c(b){return s(b,a.uri)}function b(a){return Y(l[c(a)])}if(!a)return null;if(a.status>=ga)return a.exports;a.status=ga;b.resolve=c;b.async=function(a,d){D(c(a),d);return b};var d=a.factory,d=y(d)?d(b,a.exports={},a):d;a.exports=d===r?a.exports:d;a.status=Ba;return a.exports}function Z(a){for(var c=[],b=0;b<a.length;b++){var d=a[b];d&&(l[d]||(l[d]=new B(d))).status<
L&&c.push(d)}return c}function Y(a){var c=Aa(a);null===c&&(!a||!ea.test(a.uri))&&n("error",a);return c}function $(a){var c=ba[a.uri]||[];if(0===c.length)return!1;p.push(a.uri);a:{for(a=0;a<c.length;a++)for(var b=0;b<p.length;b++)if(p[b]===c[a]){a=!0;break a}a=!1}if(a){a=p[0];for(b=c.length-1;0<=b;b--)if(c[b]===a){c.splice(b,1);break}return!0}for(a=0;a<c.length;a++)if($(l[c[a]]))return!0;p.pop();return!1}function ha(a){var c=j.preload,b=c.length;b?D(s(c),function(){c.splice(0,b);ha(a)}):a()}function O(a){for(var c in a){var b=
a[c];if(b&&"plugins"===c){c="preload";for(var d=[],f=void 0;f=b.shift();)d.push(ia+"plugin-"+f);b=d}if((d=j[c])&&Ca(d))for(var g in b)d[g]=b[g];else C(d)?b=d.concat(b):"base"===c&&(b=T(U(b+"/"))),j[c]=b}n("config",a);return e}var m=u.seajs;if(!m||!m.version){var e=u.seajs={version:"2.0.0"},Ca=x("Object"),J=x("String"),C=Array.isArray||x("Array"),y=x("Function"),aa=e.log=function(a,c){u.console&&(c||j.debug)&&console[c||(c="log")]&&console[c](a)},t=e.events={};e.on=function(a,c){if(!c)return e;(t[a]||
(t[a]=[])).push(c);return e};e.off=function(a,c){if(!a&&!c)return e.events=t={},e;var b=t[a];if(b)if(c)for(var d=b.length-1;0<=d;d--)b[d]===c&&b.splice(d,1);else delete t[a];return e};var n=e.emit=function(a,c){var b=t[a],d;if(b)for(b=b.slice();d=b.shift();)d(c);return e},H=/[^?#]*\//,ka=/\/\.\//g,la=/([^:\/])\/\/+/g,S=/\/[^/]+\/\.\.\//g,na=/\?|\.(?:css|js)$|\/$/,ma=/#$/,sa=/^([^/:]+)(\/.+)$/,ta=/{([^{]+)}/g,oa=/:\//,pa=/^\./,qa=/^\//,ra=/^.*?\/\/.*?\//,q=document,h=location,v=h.href.match(H)[0],
g=q.getElementsByTagName("script"),g=q.getElementById("seajsnode")||g[g.length-1],ia=(g.hasAttribute?g.src:g.getAttribute("src",4)).match(H)[0]||v;e.cwd=function(a){return a?v=R(a+"/"):v};var w=q.getElementsByTagName("head")[0]||q.documentElement,fa=w.getElementsByTagName("base")[0],ea=/\.css(?:\?|$)/i,wa=/^(?:loaded|complete|undefined)$/,z,A,W=536>1*navigator.userAgent.replace(/.*AppleWebKit\/(\d+)\..*/,"$1"),za=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,
ya=/\\\\/g,l=e.cache={},F,M={},N={},G={},ba={},va=1,E=2,L=3,ga=4,Ba=5;B.prototype.destroy=function(){delete l[this.uri];delete N[this.uri]};var p=[];e.use=function(a,c){ha(function(){D(s(a),c)});return e};B.load=D;e.resolve=I;u.define=xa;e.require=function(a){return(l[I(a)]||{}).exports};var P=ia,ja=P.match(/^(.+?\/)(?:seajs\/)+(?:\d[^/]+\/)?$/);ja&&(P=ja[1]);var j=O.data={base:P,charset:"utf-8",preload:[]};e.config=O;var Q,h=h.search.replace(/(seajs-\w+)(&|$)/g,"$1=1$2"),h=h+(" "+q.cookie);h.replace(/seajs-(\w+)=1/g,
function(a,c){(Q||(Q=[])).push(c)});O({plugins:Q});h=g.getAttribute("data-config");g=g.getAttribute("data-main");h&&j.preload.push(h);g&&e.use(g);if(m&&m.args){g=["define","config","use"];m=m.args;for(h=0;h<m.length;h+=2)e[g[m[h]]].apply(e,m[h+1])}}})(this);
(function(){ 
	var aPage=$("[data-init]");
	if(!aPage.get(0)) return;
	var getVersion=function(v){
		var src = $("script[src*=vendor]").attr("src"),
			version = "v="+v;
		if(!!src && src.indexOf("?")>-1) version = src.substring(src.lastIndexOf("?")+1);
		return version;
	},
	arr=[],
	version = getVersion("20160430");		
	aPage.each(function() {
		arr.push($(this).attr("data-init"));
	});

    seajs.config({
    	alias:{"cart": "cart.js"},
        map:[
            [/^(.*\/project\/.*\.(?:css|js))(?:.*)$/i,"$1?"+version]
        ]
    });
    seajs.use(arr);
})();
/**
 * 
 * @authors Saturday (zhuning@51talk.com)
 * @date    2015-04-07 17:26:36
 * @version 1.0.0
 */
define("cookie",[],function(require,exports,module){
    exports.setCookie = function (c_name, value, expiredays) {
        var exdate=new Date()
        exdate.setDate(exdate.getDate()+expiredays)
        document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
    }

    exports.getCookie = function (c_name) {
        if (document.cookie.length>0) {
          c_start=document.cookie.indexOf(c_name + "=")
            if (c_start!=-1) { 
                c_start=c_start + c_name.length+1 
                c_end=document.cookie.indexOf(";",c_start);
                if (c_end==-1) c_end=document.cookie.length;
                return unescape(document.cookie.substring(c_start,c_end))
            } 
        }
        return "";
    }
    exports.clearCookie = function (name) {  
        document.cookie=name+"="+""+";expires=-1"
    }
});

define('drag', [], function(require, exports, module) {
	var drag = {
		draged: null,
		start: function(ev) {
			var ev = ev || window.event,
				target = ev.target ? ev.target : ev.srcElement;
			this.draged = target;
			$(target).css({'opactiy':'0.5'});
			var isSelect = $(target).parent('li').attr('data-select'),
				hasScore = $(target).parent('li').attr('data-score');;
			if(isSelect || hasScore){
				$(target).parent('li').removeAttr('data-select data-score');
			}
			ev.dataTransfer.setData('color', $(target).data('color'));
		},
		enter: function(e) {
			var e = e || window.event,
				target = e.target ? e.target : e.srcElement;
			$(target).addClass('current');
		},
		drop: function(e) {
			var e = e || window.event,
				target = e.target ? e.target : e.srcElement,
				targetNodeName = target.nodeName.toLowerCase(),	//目标元素节点名称
				targetParentClass = target.parentNode.parentNode.className,	//目标元素祖父节点className
				targetParentNodeName = target.parentNode.parentNode.nodeName.toLowerCase(),	//目标元素祖父节点名称
				dragedColor = e.dataTransfer.getData('color'),	//获取start阶段保存的颜色
				targetColor = $(target).attr('data-color');
				
			if(targetNodeName == 'li' && (targetParentClass == 'answer-wrap' || targetParentClass == 'noselect' || targetParentClass == 'drag' || targetParentClass == 'option-wrap')){
				if(dragedColor == targetColor) {
					$(target).attr({'data-score':5, 'data-select':'true'});
					console.log(true);
				}else{
					$(target).attr({'data-select':'true'});
					console.log(false);
				}


				target.appendChild(this.draged);
				$(target).addClass('current');
			}
			//
			var dragedParentNode = this.draged.parentNode;	//保存上次拖拽元素的父节点
			var targetParentNode = target.parentNode.parentNode;	//目标元素祖父节点
			if(targetParentNodeName == 'li') {
				var targetColor = $(targetParentNode).attr('data-color'),	//目标元素祖父节点的颜色
					lastColor = $(target.parentNode).attr('data-color'),	//需要交换目标元素父节点颜色
					initColor = $(this.draged.parentNode).attr('data-color');		//拖拽元素节点颜色
				if (dragedColor == targetColor) {
					$(targetParentNode).attr({'data-score':5, 'data-select':'true'});
					if( initColor == lastColor){
						$(dragedParentNode).attr({'data-score':5, 'data-select':'true'});
					}
				} else {
					$(targetParentNode).removeAttr('data-score');
					$(dragedParentNode).removeAttr('data-score');
				}
				targetParentNode.removeChild(target.parentNode)
				targetParentNode.appendChild(this.draged);
				dragedParentNode.appendChild(target.parentNode);
			}
		}
	}
	return drag;
})
/**
 * 
 * @authors Saturday (13811774679@163.com)
 * @date    2014-09-19 10:46:34
 * @version 1.0.0
 */
define("formCheck",[],function(require,exports,module){
	//表单验证常用的正则表达式
	var defaultJson={
		"email":{//邮箱
			"reg":/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/i,
			"error":"邮箱格式不正确",
			"empty":"请填写邮箱"
		},
		"mobile":{//手机号
			"reg":/^1[0-9]{10}$/,
			"error":"请填写正确的手机号码",
			"empty":"手机号码不能为空"
		},
		"user_name":{
			"reg":/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/i,
			"error":"邮箱格式不正确",
			"empty":"请填写邮箱"
		},
		"nick_name":{
			"reg":/^[A-Za-z\s]{2,20}$/i,
			"error":"请输入正确的英文名字",
			"empty":"英文名字不能为空"
		},
		"age":{
			"reg":/^(\d{1,2}|100)$/,
			"error":"年龄格式不正确",
			"empty":"年龄不能为空"
		},
		"address":{
			"reg":/[^\s]{1,}/,
			"error":"地址不能为空",
			"empty":"地址不能为空"
		},
		"zip_code":{
			"reg":/^[0-9]{6}$/,
			"error":"邮编格式错误",
			"empty":"邮编不能为空"
		},
		"password":{
			"reg":/^[\w\+\!\@\#\$\%\^\&\*\(\)]{6,20}$/,
			"error":"密码格式错误",
			"empty":"密码不能为空"
		},
		"recommen_mobile":{
			"reg":/^([a-z0-9]{6,20})$/,
			"error":"请填写正确的推荐手机号/推荐码",
			"empty":"推荐手机号/推荐码不能为空"
		},
		"qq":{
			"reg":/^[1-9]{1}[0-9]{4,}$/i,
			"error":"qq格式不正确",
			"empty":"qq不能为空",
			"choice":"QQ和Skype不能同时为空"
		}
	};
	$.fn.extend({
		formCheck:function(options){
			options=options || {};
			var defaults={
				"focus"		 :false,
				"alertType"	 :"alert",
				"enterSubmit":true,
				"json"		 :defaultJson
			};
			
			var settings=$.extend(true,defaults,options);
			var type=settings.type;
			var alertType=settings.alertType;
			var enterSubmit=settings.enterSubmit;
			var json=settings.json;
			return this.each(function(index,ele){
				var oForm=$(ele);
				var oBtn=oForm.find(".jsSubmit");
				oBtn.click(function(){
					var aInput=oForm.find("[name].jsCheck");
					if(oForm.attr("submited")) return;
					var bOk=true;
					var errorMsg=null;
					var oNow=null;
					aInput.each(function(index,ele){
						var oInput=$(ele);
						var name=oInput.attr("name");
						var oBtn=oForm.find(".jsSubmit");
						var oInput=$(ele);
						var inputType=oInput.attr("type");
						if(inputType=="radio" || inputType=="checkbox"){
							var val=$.trim($("[name="+name+"]"+":checked").val());
						}else{
							var val=$.trim(oInput.val());
						}
						var regJson=json[name];
						var reg=regJson.reg;
						var error=regJson.error;
						var empty=regJson.empty;
						var prompt=regJson.prompt;
						var same=regJson.same;
						var choice=regJson.choice;
						//当前字段是否可以为空 empty 允许为空
						if(val=="" || val==oInput.attr("placeholder")){
							if(oInput.hasClass("jsEmpty")){
								return bOk=true;
							}else{
								if(oInput.hasClass("jsChoice")){
									bOk=false;
									errorMsg=choice;
									oNow=oInput;
									$(".jsChoice").each(function(){
										if($.trim(this.value)){
											bOk=true;
											return false;
										}
									});
									return bOk;
								}else{
									errorMsg=empty;
									oNow=oInput;
									return bOk=false;
								}
							}
						}else{
							if(!reg.test(val)){
								errorMsg=error;
								oNow=oInput;
								return bOk=false;
							}
						}
						if(oInput.hasClass("jsSame")){
							if(oInput.val()!=aInput.eq(index-1).val()){
								errorMsg=same;
								oNow=oInput;
								return bOk=false;
							}
						}
						if(oInput.hasClass("jsAjax")){
							$.ajax({
							   type: "POST",
							   dataType:"json",
							   url: oInput.attr("data-url"),
							   async:false,
							   data: oInput.serializeArray(),
							   success: function(res){
							   		if(!res.status){
							   			errorMsg=res.msg;
							   			oNow=oInput;
							   			bOk=false;
							   		}													   	
								}	   
							}); 
							return bOk;
						}
					});
					if(bOk){
						//收起错误信息
						hideAlert(alertType,aInput);
						_submit(oForm,settings.cb,alertType);
					}else{
						_alert(alertType,oNow,errorMsg);
					}
					
				});
				//增加回车提交功能
				if(enterSubmit){
					oForm.keydown(function(event){
					    if(event.keyCode ==13){
					   	 	setTimeout(function(){
					   	 		oBtn.click();
					   	 	},30);
					  	}
					});
				}
				//失去焦点时添加文本提示
				if(settings.focus){
					var aInput=oForm.find(".jsCheck");
					aInput.each(function(index,ele){
						var oInput=$(ele);
						var name=oInput.attr("name");
						var regJson=json[name];
						var reg=regJson.reg;
						var error=regJson.error;
						var empty=regJson.empty;
						var used=regJson.used;
						var prompt=regJson.prompt;

						oInput.focusin(function(){
							hideAlert(alertType,oInput);
						});
						oInput.focusout(function(){
							var val=oInput.val();
							if(val==""){
								//oInput.val("");
							}else{
								if(!(reg.test(val))){
									_alert(alertType,oInput,error);
								}else{
									//是否需要ajax及时校验
									if(oInput.hasClass("jsAjax")){
										$.ajax({
										   type: "POST",
										   dataType:"json",
										   url: oInput.attr("data-url"),
										   data: oInput.serializeArray(),
										   success: function(res){
										   		if(!res.status){
										   			_alert(alertType,oInput,res.msg);
										   		}													   	
											}	   
										}); 
									}
									
								}
								
							}
							
						});
					});
				}
				
			});
		}
	});

	function _alert(alertType,oInput,error){
		switch(alertType){
			case "bottom":
				oInput.closest('li').addClass('u-error').find('.u-err').html(error);
				break;
			case "left":
				oInput.next().html(error).addClass("error").show();
				break;
			case "alert":
				alert(error);
				break;
			case "$alert":
				$.alert(error);
				break;
			default:
				alert(error);
				break;
		}
		
	}
	function hideAlert(alertType,oInput){
		oInput.each(function() {
			switch(alertType){
				case "bottom":
					$(this).closest('li').removeClass('u-error');
					break;
				case "left":
					oInput.next().hide();
					break;
			}
		});
		
	}
	function _submit(oForm,cb,alertType){
		if(cb){
			$.ajax({
                type: oForm.attr("method"),
                dataType: "json",
                url: oForm.attr("action"),
                data: oForm.serializeArray(),
                success: function(res){
                	cb(res);
                }
            });
		}else{
    		oForm.submit();
		}
		
	}
});

define('calendar', [], function(require, exports, module) {
    if(jQuery&&!jQuery.calendar){
        var _$ = $;
        $ = jQuery;
        $.calendar = {
            a:new Array('今日','明日','后日','本月','下月','年','月','日','初十','二十','三十','农历','清明','节','今天','一','二','三','四','五','六')
            //0  今日
            //1  明日
            //2  后日
            //3  本月
            //4  下月
            //5  年
            //6  月
            //7  日
            //8  初十
            //9  二十
            //10 三十
            //11 农历
            //12 清明
            //13 节
            //14 今天
            //15 一
            //16 二
            //17 三
            //18 四
            //19 五
            //20 六
            //国历节日 *表示节假日
            ,sFtv : new Array(
                "0101*元旦",
                "0214 情人节",
                "0308 妇女节",
                "0312 植树节",
                "0315 消费者权益日",
                "0321 世界森林日、世界儿歌日",
                "0322 世界水日",
                "0323 世界气象日",
                "0324 世界防治结核病日",
                
                "0401 愚人节",
                "0407 世界卫生日",
                "0422 世界地球日",
                
                "0501*劳动节",
                "0504 青年节",
                "0505 碘缺乏病防治日",
                "0508 世界红十字日",
                "0512 国际护士节",
                "0515 国际家庭日",
                "0517 世界电信日",
                "0518 国际博物馆日",
                "0520 全国学生营养日",
                "0523 国际牛奶日",
                "0531 世界无烟日",
                
                "0601 儿童节",
                "0605 世界环境日",
                "0606 全国爱眼日",
                "0616 防治荒漠化和干旱日",
                "0623 国际奥林匹克日",
                "0625 全国土地日",
                "0626 国际反毒品日",
                
                "0701 建党节 香港回归纪念 国际建筑日",
                "0707 中国人民抗日战争纪念日",
                "0711 世界人口日",
            
                "0801 建军节",
                "0808 父亲节",
                
                "0908 国际扫盲日",
                "0909 毛泽东逝世纪念",
                "0910 教师节",
                "0916 国际臭氧层保护日",
                "0920 国际爱牙日",
                "0927 世界旅游日",
                "0928 孔子诞辰",
                
                "1001*国庆节 国际音乐日",
                "1004 世界动物日",
                "1006 老人节",
                "1008 全国高血压日 世界视觉日",
                "1009 世界邮政日",
                "1015 国际盲人节",
                "1016 世界粮食日",
                "1017 世界消除贫困日",
                "1024 联合国日",
                
                "1108 中国记者日",
                "1109 消防宣传日",
                "1112 孙中山诞辰纪念",
                "1114 世界糖尿病日",
                "1117 国际大学生节",
        
                "1201 世界艾滋病日",
                "1203 世界残疾人日",
                "1209 世界足球日",
                "1220 澳门回归纪念",
                "1225 圣诞节",
                "1226 毛泽东诞辰纪念",
                "1229 国际生物多样性日"
                )
        
            //农历节日 *表示节假日
            ,lFtv: new Array(
                "0101*春节",
                "0115 元宵节",
                "0505 端午节",
                "0506 立夏节",
                "0606 天贶节",
                "0707 七夕情人节",
                "0715 中元节(鬼节)",
                "0815 中秋节",
                "0909 重阳节",
                "1001 祭祖节",
                "1208 腊八节",
                "1223 小年",
                "0100*除夕"
                )
        
            //按周计算 月周日
            ,wFtv: new Array(
                "0520 国际母亲节",
                "0530 全国助残日",
                "0630 国际父亲节",
                "0932 国际和平日",
                "0940 国际聋人节",
                "1013 国际减轻自然灾害日",
                "1011 国际住房日"
                )
            ,SolarTerm:function(DateGL){
                var DifferenceInYear=31556926;
                var BeginTime=new Date(1901/1/1);
                BeginTime.setTime(947120460000);
                for(;DateGL.getFullYear()<BeginTime.getFullYear();){
                    BeginTime.setTime(BeginTime.getTime()-DifferenceInYear*1000);
                }
                for(;DateGL.getFullYear()>BeginTime.getFullYear();){
                    BeginTime.setTime(BeginTime.getTime()+DifferenceInYear*1000);
                }
                for(var M=0;DateGL.getMonth()>BeginTime.getMonth();M++){
                    BeginTime.setTime(BeginTime.getTime()+$.calendar.DifferenceInMonth[M]*1000);
                }
                if(DateGL.getDate()>BeginTime.getDate()){
                    BeginTime.setTime(BeginTime.getTime()+$.calendar.DifferenceInMonth[M]*1000);
                    M++;
                }
                if(DateGL.getDate()>BeginTime.getDate()){
                    BeginTime.setTime(BeginTime.getTime()+$.calendar.DifferenceInMonth[M]*1000);
                    M==23?M=0:M++;
                }
                var JQ;
                if(DateGL.getDate()==BeginTime.getDate()){
                    JQ=$.calendar.a[0]+"<span>"+$.calendar.SolarTermStr[M] + "</span>";//0  今日
                }else if(DateGL.getDate()==BeginTime.getDate()-1){
                    JQ=$.calendar.a[1]+"<span>"+$.calendar.SolarTermStr[M] + "</span>";//1  明日
                }else if(DateGL.getDate()==BeginTime.getDate()-2){
                    JQ=$.calendar.a[2]+"<span>"+$.calendar.SolarTermStr[M] + "</span>";//2  后日
                }else{
                    JQ=" ";
                    if(DateGL.getMonth()==BeginTime.getMonth()){
                        JQ+=$.calendar.a[3];//3  本月
                    }else{
                        JQ+=$.calendar.a[4];//4  下月
                    }
                    JQ+=BeginTime.getDate()+$.calendar.a[7]+"<span>"+$.calendar.SolarTermStr[M]+"</span>";//7  日
                }
                return JQ;
            }
            ,lunarInfo:new Array(
                0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
                0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
                0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
                0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
                0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
                0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,
                0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
                0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,
                0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
                0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,
                0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
                0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
                0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
                0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
                0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0)
            ,nStr1:new Array('日','一','二','三','四','五','六','七','八','九','十')
            ,nStr2:new Array('初','十','廿','卅','　')
            ,nStr3:new Array("零","正","二","三","四","五","六","七","八","九","十","冬","腊")
            ,SolarTermStr:new Array(
                "小寒","大寒","立春","雨水","惊蛰","春分",
                "清明","谷雨","立夏","小满","芒种","夏至",
                "小暑","大暑","立秋","处暑","白露","秋分",
                "寒露","霜降","立冬","小雪","大雪","冬至")
            ,DifferenceInMonth:new Array(
                1272060,1275495,1281180,1289445,1299225,1310355,
                1321560,1333035,1342770,1350855,1356420,1359045,
                1358580,1355055,1348695,1340040,1329630,1318455,
                1306935,1297380,1286865,1277730,1274550,1271556)
            ,Lunar:function(objDate) {
               var ret = {};
               var i, leap=0, temp=0;
               var baseDate = new Date(1900,0,31);
               var offset   = Math.floor((objDate.getTime() + 2206425600000)/86400000);
               
               ret.dayCyl = offset + 40;
               ret.monCyl = 14;
            
               for(i=1900; i<2050 && offset>0; i++) {
                  temp = $.calendar.lYearDays(i);
                  offset -= temp;
                  ret.monCyl += 12;
               }
               
               if(offset<0) {
                  offset += temp;
                  i--;
                  ret.monCyl -= 12;
               }
            
               ret.year = i;
               ret.yearCyl = i-1864;
            
               leap = $.calendar.leapMonth(i);
               ret.isLeap = false;
            
               for(i=1; i<13 && offset>0; i++) {
                  if(leap>0 && i==(leap+1) && ret.isLeap==false)
                     { --i; ret.isLeap = true; temp = $.calendar.leapDays(ret.year); }
                  else
                     { temp = $.calendar.monthDays(ret.year, i); }
            
                  if(ret.isLeap==true && i==(leap+1)) ret.isLeap = false;
            
                  offset -= temp;
                  if(ret.isLeap == false) ret.monCyl ++;
               }
            
               if(offset==0 && leap>0 && i==leap+1)
                  if(ret.isLeap)
                     { ret.isLeap = false; }
                  else
                     { ret.isLeap = true; --i; --ret.monCyl;}
            
               if(offset<0){ offset += temp; --i; --ret.monCyl; }
            
               ret.month = i;
               ret.day = offset + 1;
               ret.dayText=$.calendar.cDay(ret.day);
               ret.monthText = $.calendar.nStr3[ret.month]+$.calendar.a[6];//6  月
               return ret;
            }
            ,lYearDays:function(y) {
               var i, sum = 348;
               for(i=0x8000; i>0x8; i>>=1) sum += ($.calendar.lunarInfo[y-1900] & i)? 1: 0;
               return(sum+$.calendar.leapDays(y));
            }
            ,leapDays:function(y) {
               if($.calendar.leapMonth(y))  return(($.calendar.lunarInfo[y-1900] & 0x10000)? 30: 29);
               else return(0);
            }
            ,leapMonth:function(y) {
               return($.calendar.lunarInfo[y-1900] & 0xf);
            }
            ,monthDays:function(y,m) {
               return( ($.calendar.lunarInfo[y-1900] & (0x10000>>m))? 30: 29 );
            }
            ,cDay:function(d){
                var s;
                switch (d) {
                    case 10:
                        s = $.calendar.a[8]; //8  初十
                        break;
                    case 20:
                        s = $.calendar.a[9]; //9  二十
                        break;
                    case 30:
                        s = $.calendar.a[10];//10 三十
                        break;
                    default :
                        s = $.calendar.nStr2[Math.floor(d/10)];
                        s += $.calendar.nStr1[d%10];
                }
                return(s);
            }
            ,today:new Date()
            ,detail:function(DateGL){
                if(typeof DateGL == "string"){
                    DateGL = DateGL.toDate();
                };
                var ret = {},cndate = $.calendar.Lunar(DateGL);
                ret.value = DateGL.pattern("yyyy-MM-dd");
                DateGL.getFullYear()==$.calendar.today.getFullYear() && DateGL.getMonth()==$.calendar.today.getMonth() && DateGL.getDate()==$.calendar.today.getDate() && (ret.today = true);
                ret.cnMonth = {number:cndate.month,text:cndate.monthText};
                ret.cnDay = {number:cndate.day,text:cndate.dayText};
                ret.solarTerm = $.calendar.SolarTerm(DateGL);
                for(i in $.calendar.sFtv){
                    if(typeof $.calendar.sFtv[i] != 'string')continue;
                    if($.calendar.sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/))
                        if(Number(RegExp.$1)==(DateGL.getMonth()+1)) {
                            if(Number(RegExp.$2)==DateGL.getDate()){
                                ret.holiday = RegExp.$4;
                                if(RegExp.$3=='*'){
                                    ret.imp = true;
                                }
                            }
                        }
                }
                for(i in $.calendar.lFtv){
                    if(typeof $.calendar.lFtv[i] != 'string')continue;  
                    if($.calendar.lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/))
                        if(Number(RegExp.$1)==ret.cnMonth.number) {
                            if(Number(RegExp.$2)==ret.cnDay.number){
                                if(!!ret.holiday){
                                   ret.holiday += " "+RegExp.$4;
                                }else{
                                    ret.holiday = RegExp.$4;
                                }
                                ret.cn = true;
                                if(RegExp.$3=='*'){
                                    ret.imp = true;
                                }
                            }
                        }
                }
                for(i in $.calendar.wFtv){
                    if(typeof $.calendar.wFtv[i] != 'string')continue;
                    if($.calendar.wFtv[i].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/))
                        if(Number(RegExp.$1)==(DateGL.getMonth()+1)) {
                            if(Number(RegExp.$3)==DateGL.getDay()){
                                if(Number(RegExp.$2)==Math.floor((DateGL.getDate()+6)/7)){
                                    if(!!ret.holiday){
                                       ret.holiday += " "+RegExp.$5;
                                    }else{
                                        ret.holiday = RegExp.$5;
                                    }
                                    if(RegExp.$4=='*'){
                                        ret.imp = true;
                                    }
                                }
                            }
                        }
                }
                var tmp = $.calendar.a[11];//11 农历
                tmp += ret.cnMonth.text;
                tmp += ret.cnDay.text;
                (ret.solarTerm == $.calendar.a[0]+"<span>"+$.calendar.a[12]+"</span>") && (ret.holiday = $.calendar.a[12]+$.calendar.a[13]) && (ret.cn = true);//0  今日 12 清明 13 节
                !!ret.holiday || (tmp+= "&nbsp;&nbsp;"+ret.solarTerm);
                !!ret.holiday && (tmp+="&nbsp;&nbsp;"+$.calendar.a[0]+"<span>"+ret.holiday+"</span>");//0  今日
                ret.text = tmp;
                return ret;
            }
            ,init:function(el,_x){
                var d_x = {count:2,debug:!1,showHoliday:!0,yearRange:false,monthRange:false,ignoreCanVisit:false,tip:true,float:false,anim:!$.calendar.IE,format:'yyyy-MM-dd'};
                var x = $.extend(d_x,_x);
                if(x.count>1)x.ignoreCanVisit = true;
                if(x.yearRange)x.ignoreCanVisit = true;
                if(x.monthRange)x.ignoreCanVisit = true;
                var m=null,n=null,w=null,_w=null,id=null;
                function A(u){
                    var t,_s = [],_u; 
                    u.setDate(1);
                    _u = u.cl();//new
                    t = m.data("sd");t.setFullYear(_u.getFullYear());t.setMonth(_u.getMonth());
                    for(var i = 0;i<x.count;i++){
                        t = _u.pattern('yyyyMM');
                        t = m.find("#c"+id+t);
                        if(!t.length){
                            t = H(_u);
                            m.find(".content").append(t);
                        };
                        _u.setMonth(_u.getMonth()+1);
                        _s.push(t);
                    }
                    m.find(".monthbox").each(function(i,j){
                        j = $(j);
                        var t1 = j.data("date");
                        var t2 = 12*(u.getFullYear()-t1.getFullYear())+(u.getMonth()-t1.getMonth());
                        j.css({left:-(t2*221)}).data("pos",-(t2*221));
                        if(x.debug && window.console){
                            console.log('position==>'+j.attr('id')+":"+(-t2*221));
                        }
                    });
                    S(u);
                    for(var i=0;i<_s.length;i++){
                        X(_s[i]);
                    }
                    N(u);
                }
                function K(){
                    if(!(new Date()).pattern)return false;
                    if(!''.toDate)return false;
                    var z;
                    $.calendar.counter++;
                    id = $.calendar.counter;
                    m = L();
                    z = new Date();
                    z.setDate(1);
                    !!x.defaultMonth && z.setMonth(+x.defaultMonth-1);
                    !!x.defaultYear && z.setFullYear(+x.defaultYear);
                    m.data("sd",z);
                    T();
                    n.focus(B);
                    $(window).resize(Z);
                    $(document).mousedown(Q);
                    !x.canread && n.attr("readonly","readonly").css({cursor:"pointer"});
                    var st = !!n.val()?n.val().toDate(x.format):new Date();
                    n.data("text",$.calendar.detail(st).text);
                    z = H(st);
                    m.find(".content").empty().append(z);
                    m.find('iframe').height(m.height());
                    m.find(".next,.prev").click(function(){
                        var a,b,c = m.data("sd"),d = $(this).hasClass("next")?(221*x.count):-221,e,k;
                        k = G(m.data("sd"));
                        if(x.debug && window.console)console.log('show:'+m.data('sd').pattern('yyyy-MM-dd')+',status:'+k);
                        if(!x.ignoreCanVisit && (((k & 1)&&d<0) || ((k & 4)&&d>0)))
                            return false;
                        k = c.nm(0),//new
                        k.setMonth(c.getMonth()+(d>0?x.count:-1)),
                        a = m.find("#c"+id+c.pattern("yyyyMM")),
                        b = m.find("#c"+id+k.pattern("yyyyMM"));
                        c.setMonth(c.getMonth()+(d>0?1:-1));
                        if(b.length == 0){
                            c = H(k);
                            c.data("pos",d);
                            e = a.data("pos");  
                            !e && (e = 0);
                            c.css({left:e+d});
                            m.find(".content").append(c);
                            b = c;
                        };
                        X(b);
                        m.find(".monthbox").each(function(i,j){
                            var pos = $(j).data("pos");
                            !pos && (pos = 0);
                            pos -= (d>0?221:-221);
                            $(j).data("pos",pos);
                            if(x.anim){
                                if(!!i)
                                    $(j).stop().animate({left:pos},500);
                                else
                                    $(j).stop().animate({left:pos},500,function(){
                                        N(m.data("sd"));
                                        S(m.data("sd"));
                                    });
                            }else{
                                $(j).css({left:pos});
                                N(m.data("sd"));
                                S(m.data("sd"));
                            }
                        });   
                        return false;
                    });
                }
                function I(){
                    var _this = $(this);
                    if(x.tip){
                        if(x.float){
                            var a = _this.data("text");
                            w.find('.cn').html(a.split("&")[0]);
                            w.find('.imp').html(a.split(";")[2].replace(/^\s*/,'').replace(/\s/gi,'<br/>'));
                            w.show().position({
                                of: _this,
                                my: "left top",
                                at: "left bottom",
                                offset:$.calendar.IE6?"-36 1":"-36 8",
                                collision:"none none"
                            });
                        }else{
                            w.html(_this.data("text"));
                            if(w.height()!=_w.height()){
                                if(x.anim)
                                    _w.stop().animate({top:"-="+(w.height()-_w.height())+"px",height:w.height()},500);
                                else
                                    _w.css({top:+_w.css('top').replace(/px/gi,'')-w.height()+_w.height(),height:w.height()});
                            }
                        }
                        _this.hasClass("dis") && _w.addClass("dis");
                    }
                    if(_this.hasClass("dis") || _this.hasClass("cur")){
                        n.data("f",true);
                        return false;
                    }
                    if(x.anim)
                        _this.stop().animate({color:"#FFF",backgroundColor:"#5DA9E2",borderColor:"#666"},1000);
                    else
                        _this.css({color:"#FFF",backgroundColor:"#5DA9E2",borderColor:"#666"});
                }
                function J(){
                    var _this = $(this);
                    if(x.tip){
                        if(x.float){
                            w.hide();
                        }else{
                            w.html(n.data("text"));
                            if(w.height()!=_w.height() && _w.is(":visible")){
                                if(x.anim)
                                    _w.stop().animate({top:"-="+(w.height()-_w.height())+"px",height:w.height()},500);
                                else
                                    _w.css({top:+_w.css('top').replace(/px/gi,'')-w.height()+_w.height(),height:w.height()});
                            }
                        }
                        _w.removeClass("dis");
                    }
                    if(_this.hasClass("dis") || _this.hasClass("cur")){
                        n.data("f",false);
                        return false;
                    }
                    var t = _this.data("colors").split(",");
                    if(x.anim)
                        _this.stop().animate({color:t[0],backgroundColor:t[1],borderColor:t[2]},1000);
                    else
                        _this.css({color:t[0],backgroundColor:t[1],borderColor:t[2]});
                }
                function H(a){
                      var d = a.nm(0),b,c,e,f=$("<ol>").addClass("monthbox"),g,_g,l,el,_a = a.nm(0);
                      c = d.getDay();
                      !c && (c = 7);
                      c--;
                      f.data("date",_a);
                      f.attr("id","c"+id+a.pattern("yyyyMM"));
                      if(x.debug){
                        f.append($("<li>")
                        .css({position:'relative',width:0})
                        .append($('<div>').addClass('debug').html(a.getFullYear()+$.calendar.a[5]+(a.getMonth()+1)+$.calendar.a[6])));//5  年 6  月
                      }
                      for(e=0;e<c;e++){
                          f.append($("<li>").addClass("daybtn"));
                      }
                      b = a.getMonth();
                      while(d.getMonth() == b){
                          g = d.getDate();
                          l = $.calendar.detail(d);
                          _g = !1;
                          if(x.showHoliday){
                              if(l.holiday){
                                  if(/^([\u4E00-\u9FA5]{2})[\u4E00-\u9FA5]?(\s|$|\()/.test(l.holiday)){
                                      _g = RegExp.$1;
                                  }
                              }else if(l.today){
                                  _g = $.calendar.a[14];//14 今天
                              }
                          }
                          f.append($("<li>").addClass("daybtn").append(el = $("<a>").data("text",l.text).data("date",(g<10?"0":"")+g).html(_g?_g:g).hover(I,J).mousedown(function(){
                              var a = $(this),b = a.parents(".monthbox"),c;
                              if(a.hasClass("dis")){
                                  return true;
                              }
                              m.find(".cur").removeClass("cur");
                              a.addClass("cur");
                              c = (b.data("date").pattern("yyyy-MM-")+a.data("date")).toDate();
                              c = c.pattern(x.format);
                              n.val(c);
                              if(x.change && typeof x.change == "function"){
                                  x.change(n,c);
                              }
                              return true;
                          })));
                          // !!l.holiday && !l.cn && !l.imp && el.addClass("holiday");
                          // !!l.holiday && !!l.cn && !l.imp && el.addClass("cnholiday");
                          !!l.imp && el.addClass("import");
                          !!l.today && el.addClass("today");
                          d.setDate(g+1);
                      }
                      return f;
                }
                function L(){
                    if(x.float){
                        w = $('#cnfloat');
                        w.length || (w = $("<div>").attr('id','cnfloat')
                        .append($('<div>').addClass('cn'))
                        .append($('<div>').addClass('imp')));
                        $.calendar.IE6 || (w.append($('<div>').addClass('arrow'))
                        .append($('<div>').addClass('sarrow')));
                        w.appendTo($('body'));
                        _w = w;
                    }else{
                        w = $("#cndate div");
                        w.length || (w = $("<div>").appendTo($("<div id='cndate'>").appendTo($("body"))));
                        _w = $("#cndate");
                    }
                    var a = $("<div>").addClass("nav").addClass("not_close").append(
                        $("<a>").addClass("prev"));
                    for(var i=0;i<x.count;i++){
                        a.append($("<span>").addClass("title").css({left:80+i*221}));
                        if((x.yearRange||x.monthRange)&&i==0){
                            var l1 = $("<label>"),l2 = $("<label>");
                            if(x.yearRange){
                                l1.addClass("year").click(function(){
                                    var a = $(this),b,c,d;
                                    b = a.data("showmenu");
                                    P(a,false);
                                    if(b){
                                        if(!x.yts.is(':visible')){
                                            x.yts.height(0).show();
                                            x.ybs.height(0).show();
                                        }
                                        x.yts.stop();
                                        x.yts.position({
                                            of: $(this),
                                            my: "left bottom",
                                            at: "left top",
                                            offset:"-1 0",
                                            collision:"none none"
                                        });
                                        c = +x.yts.css('top').replace(/px/gi,''),d = x.yts.height();
                                        x.ybs.stop();
                                        x.ybs.position({
                                            of: $(this),
                                            my: "left top",
                                            at: "left bottom",
                                            offset:"-1 0",
                                            collision:"none none"
                                        });
                                        if(x.anim){
                                            x.yts.animate({height:x.th},{step:function(now,fx){
                                                $(fx.elem).css("top",c-now+d);
                                            }});
                                            x.ybs.animate({height:x.bh});
                                        }else{
                                            x.yts.css({height:x.th,top:c-x.th+d});
                                            x.ybs.css({height:x.bh});
                                        }
                                    }
                                });
                            }
                            if(x.monthRange){
                                l2.addClass("month").click(function(){
                                    var a = $(this),b;
                                    b = a.data("showmenu");
                                    P(a,true);
                                    if(b){
                                        if(!x.mbs.is(':visible')){
                                            x.mbs.height(0).show();
                                        }
                                        x.mbs.stop();
                                        x.mbs.position({
                                            of: $(this),
                                            my: "left top",
                                            at: "left bottom",
                                            offset:"-1 0",
                                            collision:"none none"
                                        });
                                        if(x.anim){
                                            x.mbs.animate({height:x.mbh});
                                        }else{
                                            x.mbs.css({height:x.mbh});
                                        }
                                    }
                                });
                            }
                            a.find(".title").css({left:70}).append(l1)
                            .append($("<span>").html($.calendar.a[5]))//5  年
                            .append(l2)
                            .append($("<span>").html($.calendar.a[6]));//6  月
                        }
                    }
                    a.append($("<a>").addClass("next"));
                    return $("<div>")
                    .addClass("calendar").css("display","none")
                    .append(a)
                    .append($("<div>").addClass("week"))
                    .append($("<div>").addClass("content"))
                    .append($.calendar.IE6?$('<iframe>')
                    .attr('frameborder','0').attr('marginheight','0'):'')
                    .appendTo($("body"));
                }
                function M(){
                    n.unbind("focus",B);
                    $(document).unbind('mousedown',Q);
                    $(window).unbind('resize',Z);
                    if(m.detach){
                        m.detach();
                    }else if(m.remove){
                        m.remove();
                    }
                    m = undefined;
                }
                function G(a){
                    var r = 0,_a;
                    if(!!a){
                        _a = a.cl();
                    }else{
                        _a = new Date();
                    }
                    var b = _a.pattern("yyyy-MM"),c = "";
                    if(x.minDate){
                        if(x.minDate.val){
                            c = x.minDate.val().replace(/-\d\d$/g,"");
                        }else if(x.minDate.pattern){
                            c = x.minDate.pattern("yyyy-MM");
                        }else if(typeof x.minDate == 'string' && /(\d{4}-\d{2})-\d{2}/.test(x.minDate)){
                            c = RegExp.$1;
                        }
                        c || (c = "0000-00");
                        if(b.localeCompare(c)==0){
                            r += 1;
                        }else if(b.localeCompare(c)<0){
                            r += 2;
                        }
                    }
                    if(x.maxDate){
                        _a.setDate(1);
                        _a.setMonth(_a.getMonth()+x.count-1);
                        b = _a.pattern("yyyy-MM");
                        if(x.maxDate.val){
                            c = x.maxDate.val().replace(/-\d\d$/g,"");
                        }else if(x.maxDate.pattern){
                            c = x.maxDate.pattern("yyyy-MM");
                        }else if(typeof x.maxDate == 'string' && /(\d{4}-\d{2})-\d{2}/.test(x.maxDate)){
                            c = RegExp.$1;
                        }
                        c || (c = "9999-99");
                        if(b.localeCompare(c)==0){
                            r += 4;
                        }else if(b.localeCompare(c)>0){
                            r += 8;
                        }
                    }
                    _a = null;
                    return r;
        
                }
                function N(a){
                    m.find(".prev,.next").show();
                    if(x.ignoreCanVisit){return;}
                    var h = G(a);
                    if(h & 1 || h & 2){
                        m.find(".prev").hide();
                    }
                    if(h & 4 || h & 8){
                        m.find(".next").hide();
                    }
                }
                function X(a){
                    var c="",d="",e,f,g,p=0,q=0,r,s={dis:"#DCDCDC",cur:"#fff",nor:"#222"};
                    if(x.minDate || x.maxDate){
                        if(x.minDate){
                            if(x.minDate.val){
                                c = x.minDate.val().toDate(x.format).pattern('yyyy-MM-dd').replace(/-\d\d$/g,"");
                                p = parseInt(x.minDate.val().replace(/^\d{4}-\d{2}-/g,""),10);
                                c || (c = "0000-00",p=0);
                            }else if(x.minDate.pattern){
                                c = x.minDate.pattern("yyyy-MM");
                                p = x.minDate.getDate();
                            }else{
                                var tp = x.minDate.toDate(x.format).pattern('yyyy-MM-dd');
                                c = tp.replace(/-\d\d$/g,"");
                                p = +tp.replace(/^\d{4}-\d{2}-/g,'');
                            }
                        }
                        if(x.maxDate){
                            if(x.maxDate.val){
                                d = x.maxDate.val().toDate(x.format).pattern('yyyy-MM-dd').replace(/-\d\d$/g,"");
                                q = parseInt(x.maxDate.val().replace(/^\d{4}-\d{2}-/g,""),10);
                                d || (d = "9999-99",q=32);
                            }else if(x.maxDate.pattern){
                                d = x.maxDate.pattern("yyyy-MM");
                                q = x.maxDate.getDate();
                            }else{
                                var tp = x.maxDate.toDate(x.format).pattern('yyyy-MM-dd');
                                d = tp.replace(/-\d\d$/g,"");
                                q = +tp.replace(/^\d{4}-\d{2}-/g,'');
                            }
                        }
                    }
                    e = a.data("date").pattern("yyyy-MM");
                    f = a.find(".daybtn a");
                    
                    f.each(function(i,j){
                        j = $(j);
                        j.removeClass("dis");
                        if(j.hasClass("cnholiday")){
                            j.css({color:"#26A10B",background:"#CEF6D8",borderColor:"#58FAAC"})
                            .data("colors","#26A10B,#CEF6D8,#58FAAC");
                        }else if(j.hasClass("holiday")){
                            j.css({color:"#0168EA",background:"#EFF9FB",borderColor:"#E8F5F9"})
                            .data("colors","#0168EA,#EFF9FB,#E8F5F9");
                        }else if(j.hasClass("import")){
                            j.css({color:"#FE001A",background:"#FFEFDB",borderColor:"#FFFACD"})
                            .data("colors","#FE001A,#FFEFDB,#FFFACD");
                        }else{
                            j.css({color:"#222",background:"#FFF",borderColor:"#FFF"})
                            .data("colors","#222,#FFF,#FFF");
                        }
                        if(j.hasClass("today")){
                            j.css({borderColor:"#67A1E2"}).data("colors",j.data("colors").replace(/,#[a-fA-F0-9]+$/g,",#67A1E2"));
                        }
                    });
                    r = n.val();
                    if(r){
                        r = r.toDate(x.format).pattern('yyyy-MM-dd');
                        if(r.indexOf(e)==0){
                            var j = $(f[parseInt(r.split("-")[2],10)-1]);
                            if(!j.hasClass("cur")){
                                m.find(".cur").removeClass("cur");
                                j.addClass("cur");
                            }
                            if(j.hasClass("today")){
                                j.css({color:"#FFF",background:"#FDAB00",borderColor:"#67A1E2"})
                                .data("colors","#FFF,#FDAB00,#000");
                            }else{
                                j.css({color:"#FFF",background:"#FDAB00",borderColor:"#FFF"})
                                .data("colors","#FFF,#FDAB00,#FFF");
                            }
                        }
                    }
                    if(c && c.localeCompare(e)==0){
                        f.each(function(i,j){
                            g = $(j).data('date');
                            if(!g)return;
                            if(p > parseInt(g,10)){
                                $(j).addClass("dis");
                                $(j).css({color:s.dis});
                            }
                        });
                    }
                    if(d && d.localeCompare(e)==0){
                        f.each(function(i,j){
                            g = $(j).data('date');
                            if(!g)return;
                            if(q < parseInt(g,10)){
                                $(j).addClass("dis");
                                $(j).css({color:s.dis});
                            }
                        });
                    }
                    if(c && c.localeCompare(e)>0){
                        f.addClass("dis");
                        f.css({color:s.dis});
                    }
                    if(d && d.localeCompare(e)<0){
                        f.addClass("dis");
                        f.css({color:s.dis});
                    }
                }
                function S(u){
                    var a = u.nm(0);
                    m.find(".title").each(function(i,j){
                        if((x.yearRange||x.monthRange)&&i==0){
                            j = $(j).find("label");
                            $(j[0]).html(a.getFullYear());
                            $(j[1]).html((a.getMonth()<9?"0":"")+(a.getMonth()+1));
                        }else{
                            $(j).html(a.pattern("yyyy"+$.calendar.a[5]+"MM"+$.calendar.a[6]));//5  年 6  月
                        }
                        a.setMonth(a.getMonth()+1);
                    });
                    a = null;
                }
                function T(){
                    var c = m.find(".content"),d = m.find(".nav"),e = c.width();
                    c.width(e*x.count);
                    m.find('iframe').width(e*x.count);
                    d.width(d.width()+e*(x.count-1));
                    var _w_ = m.find(".week");
                    x.count >= 2 && _w_.width(_w_.width()+_w_.outerWidth(!0)*(x.count-1));
                    for(var i = 0;i < x.count; i++){
                        _w_.append($("<ol>")
                            .append($("<li>").append($("<span>").addClass("i1").html($.calendar.a[15])))//15 一 16 二 17 三 18 四 19 五 20 六 7  日
                            .append($("<li>").append($("<span>").addClass("i2").html($.calendar.a[16])))
                            .append($("<li>").append($("<span>").addClass("i3").html($.calendar.a[17])))
                            .append($("<li>").append($("<span>").addClass("i4").html($.calendar.a[18])))
                            .append($("<li>").append($("<span>").addClass("i5").html($.calendar.a[19])))
                            .append($("<li>").append($("<span>").addClass("i6").html($.calendar.a[20])))
                            .append($("<li>").append($("<span>").addClass("i0").html($.calendar.a[7])))
                        );
                    }
                    m.width(e*x.count);
                    
                }
                function O(u){
                    for(var i = 0;i<u.length;i++){
                        var j = $(u[i]);
                        if(x.anim){
                            if(j.hasClass('top')){
                                j.stop();
                                var h = j.height(),t = +j.css('top').replace(/px/gi,'');
                                j.stop().animate({height:0},{step:function(now,fx){
                                    $(fx.elem).css("top",t+h-now);
                                },complete: function() {
                                  $(this).hide();
                                }});
                            }else{
                                j.stop().animate({height:0},"normal","linear",function(){$(this).hide()});
                            }
                        }else{
                            j.hide();
                        }
                    }
                    return !!u.length;
                }
                function P(a,b){
                    var u,v = +a.html(),s = 4;
                    if(!b){
                        if(!x.yts){
                            u = x.yts = $("<ul>").addClass("select").addClass("top").addClass("not_close");
                            u.width(a.outerWidth(true));
                            for(var i=0;i<s;i++){
                                u.append($("<li>").html(v-s+i).hover(R,R).addClass(i==s-1?'last':'').mousedown(U));
                            }
                            u.appendTo($("body"));
                            x.th=u.height();
                            u.height(0).hide();
                            
                            u = x.ybs = $("<ul>").addClass("select").addClass("bottom").addClass("not_close");
                            u.width(a.outerWidth(true));
                            for(var i=0;i<s;i++){
                                u.append($("<li>").html(v+1+i).hover(R,R).addClass(i==0?'first':'').mousedown(U));
                            }
                            u.appendTo($("body"));
                            x.bh=u.height();
                            u.height(0).hide();
                        }else{
                            var tm = x.yts.find('li');
                            for(var i=0;i<tm.length;i++){
                                $(tm[i]).html(v-tm.length+i);
                            }
                            tm = x.ybs.find('li');
                            for(var i=0;i<tm.length;i++){
                                $(tm[i]).html(v+1+i);
                            }
                        }
                    }else{
                        if(!x.mbs){
                            u = x.mbs = $("<ul>").addClass("select").addClass("bottom").addClass("not_close");
                            u.width(a.outerWidth(true));
                            for(var i=1;i<13;i++){
                                if(v == i)
                                    continue;
                                u.append($("<li>").html(i).hover(R,R).addClass(i==0?'first':'').mousedown(V));
                            }
                            u.appendTo($("body"));
                            x.mbh=u.height();
                            u.height(0).hide();
                        }else{
                        }
                    }
                }
                function Q(e){
                    var t = $(e.target);
                    if(!!t.parents(".not_close").length || t.hasClass("not_close")){
                        O($('.select:visible'));
                        var a = t.data("showmenu");
                        m.find(".year,.month").data("showmenu",false);
                        if(t.hasClass('year') || t.hasClass('month')){
                            t.data("showmenu",!a);
                        }
                        return false;
                    }
                    n.blur();
                    if(x.tip && !x.float){
                        _w.hide();
                    }
                    $(".select").hide();
                    m.find(".year,.month").data("showmenu",false);
                    m.hide();
                }
                function R(){
                    var a = $(this),b = a.parents('ul'),c = a.index();
                    a.toggleClass("hover");
                    if(b.hasClass('top') && c == 0){
                        if(a.hasClass('hover')){
                            a.css("border-top-color","#EFF9FB");
                        }else{
                            a.css("border-top-color","#fff");
                        }
                    }
                    if(b.hasClass('bottom') && c == b.find('li').length-1){
                        if(a.hasClass('hover')){
                            a.css("border-bottom-color","#EFF9FB");
                        }else{
                            a.css("border-bottom-color","#fff");
                        }
                    }
                }
                function U(){
                    var a = $(this),b = +a.html(),c = m.data("sd"),d = c.getMonth();
                    c.setDate(1),c.setFullYear(b);c.setMonth(d);
                    A(c);
                }
                function V(){
                    var a = $(this),b = +a.html(),c = m.data("sd");
                    c.setDate(1);
                    c.setMonth(b-1);
                    A(c);
                }
                function B(){
                    var s = n.val(),u;
                    if(!!s){
                        u = s.toDate(x.format);
                    }else{
                        u = m.data('sd');
                        !u && (u = new Date());
                        if(!x.ignoreCanVisit){
                            if(x.maxDate){
                                var c;
                                if(x.maxDate.val){
                                    c = x.maxDate.val().toDate();
                                }else if(x.maxDate.toDate){
                                    c = x.maxDate.toDate();
                                }else{
                                    c = x.maxDate;
                                }
                                if(c && c.getFullYear){
                                    if(c.getFullYear()<u.getFullYear()){
                                        u.setFullYear(c.getFullYear());
                                    }
                                    if(c.getMonth()<u.getMonth()){
                                        u.setMonth(c.getMonth());
                                    }
                                    if(c.getDate()<u.getDate()){
                                        u.setDate(c.getDate());
                                    }
                                }
                            }
                            if(x.minDate){
                                var c;
                                if(x.minDate.val){
                                    c = x.minDate.val().toDate();
                                }else if(x.minDate.toDate){
                                    c = x.minDate.toDate();
                                }else{
                                    c = x.minDate;
                                }
                                if(c && c.getFullYear){
                                    if(c.getFullYear()>u.getFullYear()){
                                        u.setFullYear(c.getFullYear());
                                    }
                                    if(c.getMonth()>u.getMonth()){
                                        u.setMonth(c.getMonth());
                                    }
                                    if(c.getDate()>u.getDate()){
                                        u.setDate(c.getDate());
                                    }
                                }
                            }
                        }
                    }
                    A(u);
                    $(".selectBox,.select_warp,.calendar").hide();
                    m.show();m.position({
                        of: n,
                        my: "left top",
                        at: "left bottom",
                        offset:"0 4",
                        collision:"none none"
                    });
                    if(x.tip){
                        if(x.float){
                        }else{
                            w.html($.calendar.detail(u).text);
                            _w.show().position({
                                of: n,
                                my: "left bottom",
                                at: "left top",
                                offset:"0 -4",
                                collision:"none none"
                            });
                        }
                    }
                }
                function Z(){
                    if(m.is(':visible')){
                        m.position({
                            of: n,
                            my: "left top",
                            at: "left bottom",
                            offset:"0 4",
                            collision:"none none"
                        });
                        if(x.tip && !x.float){
                            _w.position({
                                of: n,
                                my: "left bottom",
                                at: "left top",
                                offset:"0 -4",
                                collision:"none none"
                            });
                        }
                        if(x.yearRange && x.yts && x.yts.is(':visible')){
                            var _t = m.find('.year');
                            x.yts.position({
                                of: _t,
                                my: "left bottom",
                                at: "left top",
                                offset:"-1 0",
                                collision:"none none"
                            });
                            x.ybs.position({
                                of: _t,
                                my: "left top",
                                at: "left bottom",
                                offset:"-1 0",
                                collision:"none none"
                            });
                        }
                        if(x.monthRange && x.mbs && x.mbs.is(':visible')){
                            var _t = m.find('.month');
                            x.mbs.position({
                                of: _t,
                                my: "left top",
                                at: "left bottom",
                                offset:"-1 0",
                                collision:"none none"
                            });
                        }
                    }
                }
                n = $(el);
                if(n.data('release')){
                    n.data('release')();
                }
                n.data('release',M);
                K();
            }
            ,counter:0
            ,IE6:window.ActiveXObject&&!window.XMLHttpRequest
            ,IE:!!document.all
        };
        $.fn.calendar = function(options){
            return this.each(function(){
                (new $.calendar.init(this, options));
            });
        };
        $ = _$;
    }
})
define('calendarData', [], function(require, exports, module) {
    Date.prototype.pattern=function(fmt) {     
        var o = {        
        "M+" : this.getMonth()+1, //月份        
        "d+" : this.getDate(), //日        
        "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时        
        "H+" : this.getHours(), //小时        
        "m+" : this.getMinutes(), //分        
        "s+" : this.getSeconds(), //秒        
        "q+" : Math.floor((this.getMonth()+3)/3), //季度       
        "S" : this.getMilliseconds() //毫秒        
        };        
        var week = {        
        "1" : "一",//"/u65e5",        
        "2" : "二",//"/u4e00",        
        "3" : "三",//"/u4e8c",        
        "4" : "四",//"/u4e09",        
        "5" : "五",//"/u56db",        
        "6" : "六",//"/u4e94",        
        "0" : "日"//"/u516d"    
        };        
        if(/(y+)/.test(fmt)){        
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));        
        }        
        if(/(E+)/.test(fmt)){        
            fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? /*"/u661f/u671f"*/"星期" : /*"/u5468"*/"周") : "")+week[this.getDay()+""]);        
        }        
        for(var k in o){        
            if(new RegExp("("+ k +")").test(fmt)){        
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));        
            }        
        }        
        return fmt;        
    }

    String.prototype.toDate = function(fmt){
        var a = new Date(),b = [1,2,3],c,d = [0,0,0];
        if(fmt){
            /(y+)/.test(fmt);b[0] = fmt.indexOf('y');d[0] = RegExp.$1.length;
            /(M+)/.test(fmt);b[1] = fmt.indexOf('M');d[1] = RegExp.$1.length;
            /(d+)/.test(fmt);b[2] = fmt.indexOf('d');d[2] = RegExp.$1.length;
            if(b[0]<b[1]&&b[1]<b[2])b=[1,2,3];
            else if(b[0]<b[2]&&b[2]<b[1])b=[1,3,2];
            else if(b[2]<b[0]&&b[0]<b[1])b=[2,3,1];
            else if(b[2]<b[1]&&b[1]<b[0])b=[3,2,1];
            else if(b[1]<b[0]&&b[0]<b[2])b=[2,1,3];
            else b=[3,1,2];
            fmt = fmt.replace(/d+/,'(\\d{'+d[2]+'})').replace(/y+/,'(\\d{'+d[0]+'})').replace(/M+/,'(\\d{'+d[1]+'})');
            c = new RegExp("^"+fmt+"$");
        }else{
            c = new RegExp("^(\\d{4})-(\\d{2})-(\\d{2})$");
        }
        if(!c.test(this))
            return new Date();
        a.setDate(+eval('RegExp.$'+b[2]));
        a.setMonth(+eval('RegExp.$'+b[1])-1);
        a.setFullYear(+eval('RegExp.$'+b[0]));
        return a;
    }

    Date.prototype.nm = function(d){
        var r = new Date(); 
        r.setDate(1);
        r.setFullYear(this.getFullYear());
        r.setMonth(this.getMonth()+(+d));
        return r;
    }

    Date.prototype.cl = function(){
        var r = new Date(); 
        r.setDate(this.getDate());
        r.setMonth(this.getMonth());
        r.setFullYear(this.getFullYear());
        return r;
    }
})
/*! jPlayer 2.9.2 for jQuery ~ (c) 2009-2014 Happyworm Ltd ~ MIT License */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):b("object"==typeof exports?require("jquery"):a.jQuery?a.jQuery:a.Zepto)}(this,function(a,b){a.fn.jPlayer=function(c){var d="jPlayer",e="string"==typeof c,f=Array.prototype.slice.call(arguments,1),g=this;return c=!e&&f.length?a.extend.apply(null,[!0,c].concat(f)):c,e&&"_"===c.charAt(0)?g:(this.each(e?function(){var e=a(this).data(d),h=e&&a.isFunction(e[c])?e[c].apply(e,f):e;return h!==e&&h!==b?(g=h,!1):void 0}:function(){var b=a(this).data(d);b?b.option(c||{}):a(this).data(d,new a.jPlayer(c,this))}),g)},a.jPlayer=function(b,c){if(arguments.length){this.element=a(c),this.options=a.extend(!0,{},this.options,b);var d=this;this.element.bind("remove.jPlayer",function(){d.destroy()}),this._init()}},"function"!=typeof a.fn.stop&&(a.fn.stop=function(){}),a.jPlayer.emulateMethods="load play pause",a.jPlayer.emulateStatus="src readyState networkState currentTime duration paused ended playbackRate",a.jPlayer.emulateOptions="muted volume",a.jPlayer.reservedEvent="ready flashreset resize repeat error warning",a.jPlayer.event={},a.each(["ready","setmedia","flashreset","resize","repeat","click","error","warning","loadstart","progress","suspend","abort","emptied","stalled","play","pause","loadedmetadata","loadeddata","waiting","playing","canplay","canplaythrough","seeking","seeked","timeupdate","ended","ratechange","durationchange","volumechange"],function(){a.jPlayer.event[this]="jPlayer_"+this}),a.jPlayer.htmlEvent=["loadstart","abort","emptied","stalled","loadedmetadata","canplay","canplaythrough"],a.jPlayer.pause=function(){a.jPlayer.prototype.destroyRemoved(),a.each(a.jPlayer.prototype.instances,function(a,b){b.data("jPlayer").status.srcSet&&b.jPlayer("pause")})},a.jPlayer.timeFormat={showHour:!1,showMin:!0,showSec:!0,padHour:!1,padMin:!0,padSec:!0,sepHour:":",sepMin:":",sepSec:""};var c=function(){this.init()};c.prototype={init:function(){this.options={timeFormat:a.jPlayer.timeFormat}},time:function(a){a=a&&"number"==typeof a?a:0;var b=new Date(1e3*a),c=b.getUTCHours(),d=this.options.timeFormat.showHour?b.getUTCMinutes():b.getUTCMinutes()+60*c,e=this.options.timeFormat.showMin?b.getUTCSeconds():b.getUTCSeconds()+60*d,f=this.options.timeFormat.padHour&&10>c?"0"+c:c,g=this.options.timeFormat.padMin&&10>d?"0"+d:d,h=this.options.timeFormat.padSec&&10>e?"0"+e:e,i="";return i+=this.options.timeFormat.showHour?f+this.options.timeFormat.sepHour:"",i+=this.options.timeFormat.showMin?g+this.options.timeFormat.sepMin:"",i+=this.options.timeFormat.showSec?h+this.options.timeFormat.sepSec:""}};var d=new c;a.jPlayer.convertTime=function(a){return d.time(a)},a.jPlayer.uaBrowser=function(a){var b=a.toLowerCase(),c=/(webkit)[ \/]([\w.]+)/,d=/(opera)(?:.*version)?[ \/]([\w.]+)/,e=/(msie) ([\w.]+)/,f=/(mozilla)(?:.*? rv:([\w.]+))?/,g=c.exec(b)||d.exec(b)||e.exec(b)||b.indexOf("compatible")<0&&f.exec(b)||[];return{browser:g[1]||"",version:g[2]||"0"}},a.jPlayer.uaPlatform=function(a){var b=a.toLowerCase(),c=/(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/,d=/(ipad|playbook)/,e=/(android)/,f=/(mobile)/,g=c.exec(b)||[],h=d.exec(b)||!f.exec(b)&&e.exec(b)||[];return g[1]&&(g[1]=g[1].replace(/\s/g,"_")),{platform:g[1]||"",tablet:h[1]||""}},a.jPlayer.browser={},a.jPlayer.platform={};var e=a.jPlayer.uaBrowser(navigator.userAgent);e.browser&&(a.jPlayer.browser[e.browser]=!0,a.jPlayer.browser.version=e.version);var f=a.jPlayer.uaPlatform(navigator.userAgent);f.platform&&(a.jPlayer.platform[f.platform]=!0,a.jPlayer.platform.mobile=!f.tablet,a.jPlayer.platform.tablet=!!f.tablet),a.jPlayer.getDocMode=function(){var b;return a.jPlayer.browser.msie&&(document.documentMode?b=document.documentMode:(b=5,document.compatMode&&"CSS1Compat"===document.compatMode&&(b=7))),b},a.jPlayer.browser.documentMode=a.jPlayer.getDocMode(),a.jPlayer.nativeFeatures={init:function(){var a,b,c,d=document,e=d.createElement("video"),f={w3c:["fullscreenEnabled","fullscreenElement","requestFullscreen","exitFullscreen","fullscreenchange","fullscreenerror"],moz:["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror"],webkit:["","webkitCurrentFullScreenElement","webkitRequestFullScreen","webkitCancelFullScreen","webkitfullscreenchange",""],webkitVideo:["webkitSupportsFullscreen","webkitDisplayingFullscreen","webkitEnterFullscreen","webkitExitFullscreen","",""],ms:["","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError"]},g=["w3c","moz","webkit","webkitVideo","ms"];for(this.fullscreen=a={support:{w3c:!!d[f.w3c[0]],moz:!!d[f.moz[0]],webkit:"function"==typeof d[f.webkit[3]],webkitVideo:"function"==typeof e[f.webkitVideo[2]],ms:"function"==typeof e[f.ms[2]]},used:{}},b=0,c=g.length;c>b;b++){var h=g[b];if(a.support[h]){a.spec=h,a.used[h]=!0;break}}if(a.spec){var i=f[a.spec];a.api={fullscreenEnabled:!0,fullscreenElement:function(a){return a=a?a:d,a[i[1]]},requestFullscreen:function(a){return a[i[2]]()},exitFullscreen:function(a){return a=a?a:d,a[i[3]]()}},a.event={fullscreenchange:i[4],fullscreenerror:i[5]}}else a.api={fullscreenEnabled:!1,fullscreenElement:function(){return null},requestFullscreen:function(){},exitFullscreen:function(){}},a.event={}}},a.jPlayer.nativeFeatures.init(),a.jPlayer.focus=null,a.jPlayer.keyIgnoreElementNames="A INPUT TEXTAREA SELECT BUTTON";var g=function(b){var c,d=a.jPlayer.focus;d&&(a.each(a.jPlayer.keyIgnoreElementNames.split(/\s+/g),function(a,d){return b.target.nodeName.toUpperCase()===d.toUpperCase()?(c=!0,!1):void 0}),c||a.each(d.options.keyBindings,function(c,e){return e&&a.isFunction(e.fn)&&("number"==typeof e.key&&b.which===e.key||"string"==typeof e.key&&b.key===e.key)?(b.preventDefault(),e.fn(d),!1):void 0}))};a.jPlayer.keys=function(b){var c="keydown.jPlayer";a(document.documentElement).unbind(c),b&&a(document.documentElement).bind(c,g)},a.jPlayer.keys(!0),a.jPlayer.prototype={count:0,version:{script:"2.9.2",needFlash:"2.9.0",flash:"unknown"},options:{swfPath:"js",solution:"html, flash",supplied:"mp3",auroraFormats:"wav",preload:"metadata",volume:.8,muted:!1,remainingDuration:!1,toggleDuration:!1,captureDuration:!0,playbackRate:1,defaultPlaybackRate:1,minPlaybackRate:.5,maxPlaybackRate:4,wmode:"opaque",backgroundColor:"#000000",cssSelectorAncestor:"#jp_container_1",cssSelector:{videoPlay:".jp-video-play",play:".jp-play",pause:".jp-pause",stop:".jp-stop",seekBar:".jp-seek-bar",playBar:".jp-play-bar",mute:".jp-mute",unmute:".jp-unmute",volumeBar:".jp-volume-bar",volumeBarValue:".jp-volume-bar-value",volumeMax:".jp-volume-max",playbackRateBar:".jp-playback-rate-bar",playbackRateBarValue:".jp-playback-rate-bar-value",currentTime:".jp-current-time",duration:".jp-duration",title:".jp-title",fullScreen:".jp-full-screen",restoreScreen:".jp-restore-screen",repeat:".jp-repeat",repeatOff:".jp-repeat-off",gui:".jp-gui",noSolution:".jp-no-solution"},stateClass:{playing:"jp-state-playing",seeking:"jp-state-seeking",muted:"jp-state-muted",looped:"jp-state-looped",fullScreen:"jp-state-full-screen",noVolume:"jp-state-no-volume"},useStateClassSkin:!1,autoBlur:!0,smoothPlayBar:!1,fullScreen:!1,fullWindow:!1,autohide:{restored:!1,full:!0,fadeIn:200,fadeOut:600,hold:1e3},loop:!1,repeat:function(b){b.jPlayer.options.loop?a(this).unbind(".jPlayerRepeat").bind(a.jPlayer.event.ended+".jPlayer.jPlayerRepeat",function(){a(this).jPlayer("play")}):a(this).unbind(".jPlayerRepeat")},nativeVideoControls:{},noFullWindow:{msie:/msie [0-6]\./,ipad:/ipad.*?os [0-4]\./,iphone:/iphone/,ipod:/ipod/,android_pad:/android [0-3]\.(?!.*?mobile)/,android_phone:/(?=.*android)(?!.*chrome)(?=.*mobile)/,blackberry:/blackberry/,windows_ce:/windows ce/,iemobile:/iemobile/,webos:/webos/},noVolume:{ipad:/ipad/,iphone:/iphone/,ipod:/ipod/,android_pad:/android(?!.*?mobile)/,android_phone:/android.*?mobile/,blackberry:/blackberry/,windows_ce:/windows ce/,iemobile:/iemobile/,webos:/webos/,playbook:/playbook/},timeFormat:{},keyEnabled:!1,audioFullScreen:!1,keyBindings:{play:{key:80,fn:function(a){a.status.paused?a.play():a.pause()}},fullScreen:{key:70,fn:function(a){(a.status.video||a.options.audioFullScreen)&&a._setOption("fullScreen",!a.options.fullScreen)}},muted:{key:77,fn:function(a){a._muted(!a.options.muted)}},volumeUp:{key:190,fn:function(a){a.volume(a.options.volume+.1)}},volumeDown:{key:188,fn:function(a){a.volume(a.options.volume-.1)}},loop:{key:76,fn:function(a){a._loop(!a.options.loop)}}},verticalVolume:!1,verticalPlaybackRate:!1,globalVolume:!1,idPrefix:"jp",noConflict:"jQuery",emulateHtml:!1,consoleAlerts:!0,errorAlerts:!1,warningAlerts:!1},optionsAudio:{size:{width:"0px",height:"0px",cssClass:""},sizeFull:{width:"0px",height:"0px",cssClass:""}},optionsVideo:{size:{width:"480px",height:"270px",cssClass:"jp-video-270p"},sizeFull:{width:"100%",height:"100%",cssClass:"jp-video-full"}},instances:{},status:{src:"",media:{},paused:!0,format:{},formatType:"",waitForPlay:!0,waitForLoad:!0,srcSet:!1,video:!1,seekPercent:0,currentPercentRelative:0,currentPercentAbsolute:0,currentTime:0,duration:0,remaining:0,videoWidth:0,videoHeight:0,readyState:0,networkState:0,playbackRate:1,ended:0},internal:{ready:!1},solution:{html:!0,aurora:!0,flash:!0},format:{mp3:{codec:"audio/mpeg",flashCanPlay:!0,media:"audio"},m4a:{codec:'audio/mp4; codecs="mp4a.40.2"',flashCanPlay:!0,media:"audio"},m3u8a:{codec:'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',flashCanPlay:!1,media:"audio"},m3ua:{codec:"audio/mpegurl",flashCanPlay:!1,media:"audio"},oga:{codec:'audio/ogg; codecs="vorbis, opus"',flashCanPlay:!1,media:"audio"},flac:{codec:"audio/x-flac",flashCanPlay:!1,media:"audio"},wav:{codec:'audio/wav; codecs="1"',flashCanPlay:!1,media:"audio"},webma:{codec:'audio/webm; codecs="vorbis"',flashCanPlay:!1,media:"audio"},fla:{codec:"audio/x-flv",flashCanPlay:!0,media:"audio"},rtmpa:{codec:'audio/rtmp; codecs="rtmp"',flashCanPlay:!0,media:"audio"},m4v:{codec:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',flashCanPlay:!0,media:"video"},m3u8v:{codec:'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',flashCanPlay:!1,media:"video"},m3uv:{codec:"audio/mpegurl",flashCanPlay:!1,media:"video"},ogv:{codec:'video/ogg; codecs="theora, vorbis"',flashCanPlay:!1,media:"video"},webmv:{codec:'video/webm; codecs="vorbis, vp8"',flashCanPlay:!1,media:"video"},flv:{codec:"video/x-flv",flashCanPlay:!0,media:"video"},rtmpv:{codec:'video/rtmp; codecs="rtmp"',flashCanPlay:!0,media:"video"}},_init:function(){var c=this;if(this.element.empty(),this.status=a.extend({},this.status),this.internal=a.extend({},this.internal),this.options.timeFormat=a.extend({},a.jPlayer.timeFormat,this.options.timeFormat),this.internal.cmdsIgnored=a.jPlayer.platform.ipad||a.jPlayer.platform.iphone||a.jPlayer.platform.ipod,this.internal.domNode=this.element.get(0),this.options.keyEnabled&&!a.jPlayer.focus&&(a.jPlayer.focus=this),this.androidFix={setMedia:!1,play:!1,pause:!1,time:0/0},a.jPlayer.platform.android&&(this.options.preload="auto"!==this.options.preload?"metadata":"auto"),this.formats=[],this.solutions=[],this.require={},this.htmlElement={},this.html={},this.html.audio={},this.html.video={},this.aurora={},this.aurora.formats=[],this.aurora.properties=[],this.flash={},this.css={},this.css.cs={},this.css.jq={},this.ancestorJq=[],this.options.volume=this._limitValue(this.options.volume,0,1),a.each(this.options.supplied.toLowerCase().split(","),function(b,d){var e=d.replace(/^\s+|\s+$/g,"");if(c.format[e]){var f=!1;a.each(c.formats,function(a,b){return e===b?(f=!0,!1):void 0}),f||c.formats.push(e)}}),a.each(this.options.solution.toLowerCase().split(","),function(b,d){var e=d.replace(/^\s+|\s+$/g,"");if(c.solution[e]){var f=!1;a.each(c.solutions,function(a,b){return e===b?(f=!0,!1):void 0}),f||c.solutions.push(e)}}),a.each(this.options.auroraFormats.toLowerCase().split(","),function(b,d){var e=d.replace(/^\s+|\s+$/g,"");if(c.format[e]){var f=!1;a.each(c.aurora.formats,function(a,b){return e===b?(f=!0,!1):void 0}),f||c.aurora.formats.push(e)}}),this.internal.instance="jp_"+this.count,this.instances[this.internal.instance]=this.element,this.element.attr("id")||this.element.attr("id",this.options.idPrefix+"_jplayer_"+this.count),this.internal.self=a.extend({},{id:this.element.attr("id"),jq:this.element}),this.internal.audio=a.extend({},{id:this.options.idPrefix+"_audio_"+this.count,jq:b}),this.internal.video=a.extend({},{id:this.options.idPrefix+"_video_"+this.count,jq:b}),this.internal.flash=a.extend({},{id:this.options.idPrefix+"_flash_"+this.count,jq:b,swf:this.options.swfPath+(".swf"!==this.options.swfPath.toLowerCase().slice(-4)?(this.options.swfPath&&"/"!==this.options.swfPath.slice(-1)?"/":"")+"jquery.jplayer.swf":"")}),this.internal.poster=a.extend({},{id:this.options.idPrefix+"_poster_"+this.count,jq:b}),a.each(a.jPlayer.event,function(a,d){c.options[a]!==b&&(c.element.bind(d+".jPlayer",c.options[a]),c.options[a]=b)}),this.require.audio=!1,this.require.video=!1,a.each(this.formats,function(a,b){c.require[c.format[b].media]=!0}),this.options=this.require.video?a.extend(!0,{},this.optionsVideo,this.options):a.extend(!0,{},this.optionsAudio,this.options),this._setSize(),this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls),this.status.noFullWindow=this._uaBlocklist(this.options.noFullWindow),this.status.noVolume=this._uaBlocklist(this.options.noVolume),a.jPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled&&this._fullscreenAddEventListeners(),this._restrictNativeVideoControls(),this.htmlElement.poster=document.createElement("img"),this.htmlElement.poster.id=this.internal.poster.id,this.htmlElement.poster.onload=function(){(!c.status.video||c.status.waitForPlay)&&c.internal.poster.jq.show()},this.element.append(this.htmlElement.poster),this.internal.poster.jq=a("#"+this.internal.poster.id),this.internal.poster.jq.css({width:this.status.width,height:this.status.height}),this.internal.poster.jq.hide(),this.internal.poster.jq.bind("click.jPlayer",function(){c._trigger(a.jPlayer.event.click)}),this.html.audio.available=!1,this.require.audio&&(this.htmlElement.audio=document.createElement("audio"),this.htmlElement.audio.id=this.internal.audio.id,this.html.audio.available=!!this.htmlElement.audio.canPlayType&&this._testCanPlayType(this.htmlElement.audio)),this.html.video.available=!1,this.require.video&&(this.htmlElement.video=document.createElement("video"),this.htmlElement.video.id=this.internal.video.id,this.html.video.available=!!this.htmlElement.video.canPlayType&&this._testCanPlayType(this.htmlElement.video)),this.flash.available=this._checkForFlash(10.1),this.html.canPlay={},this.aurora.canPlay={},this.flash.canPlay={},a.each(this.formats,function(b,d){c.html.canPlay[d]=c.html[c.format[d].media].available&&""!==c.htmlElement[c.format[d].media].canPlayType(c.format[d].codec),c.aurora.canPlay[d]=a.inArray(d,c.aurora.formats)>-1,c.flash.canPlay[d]=c.format[d].flashCanPlay&&c.flash.available}),this.html.desired=!1,this.aurora.desired=!1,this.flash.desired=!1,a.each(this.solutions,function(b,d){if(0===b)c[d].desired=!0;else{var e=!1,f=!1;a.each(c.formats,function(a,b){c[c.solutions[0]].canPlay[b]&&("video"===c.format[b].media?f=!0:e=!0)}),c[d].desired=c.require.audio&&!e||c.require.video&&!f}}),this.html.support={},this.aurora.support={},this.flash.support={},a.each(this.formats,function(a,b){c.html.support[b]=c.html.canPlay[b]&&c.html.desired,c.aurora.support[b]=c.aurora.canPlay[b]&&c.aurora.desired,c.flash.support[b]=c.flash.canPlay[b]&&c.flash.desired}),this.html.used=!1,this.aurora.used=!1,this.flash.used=!1,a.each(this.solutions,function(b,d){a.each(c.formats,function(a,b){return c[d].support[b]?(c[d].used=!0,!1):void 0})}),this._resetActive(),this._resetGate(),this._cssSelectorAncestor(this.options.cssSelectorAncestor),this.html.used||this.aurora.used||this.flash.used?this.css.jq.noSolution.length&&this.css.jq.noSolution.hide():(this._error({type:a.jPlayer.error.NO_SOLUTION,context:"{solution:'"+this.options.solution+"', supplied:'"+this.options.supplied+"'}",message:a.jPlayer.errorMsg.NO_SOLUTION,hint:a.jPlayer.errorHint.NO_SOLUTION}),this.css.jq.noSolution.length&&this.css.jq.noSolution.show()),this.flash.used){var d,e="jQuery="+encodeURI(this.options.noConflict)+"&id="+encodeURI(this.internal.self.id)+"&vol="+this.options.volume+"&muted="+this.options.muted;if(a.jPlayer.browser.msie&&(Number(a.jPlayer.browser.version)<9||a.jPlayer.browser.documentMode<9)){var f='<object id="'+this.internal.flash.id+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0" tabindex="-1"></object>',g=['<param name="movie" value="'+this.internal.flash.swf+'" />','<param name="FlashVars" value="'+e+'" />','<param name="allowScriptAccess" value="always" />','<param name="bgcolor" value="'+this.options.backgroundColor+'" />','<param name="wmode" value="'+this.options.wmode+'" />'];d=document.createElement(f);for(var h=0;h<g.length;h++)d.appendChild(document.createElement(g[h]))}else{var i=function(a,b,c){var d=document.createElement("param");d.setAttribute("name",b),d.setAttribute("value",c),a.appendChild(d)};d=document.createElement("object"),d.setAttribute("id",this.internal.flash.id),d.setAttribute("name",this.internal.flash.id),d.setAttribute("data",this.internal.flash.swf),d.setAttribute("type","application/x-shockwave-flash"),d.setAttribute("width","1"),d.setAttribute("height","1"),d.setAttribute("tabindex","-1"),i(d,"flashvars",e),i(d,"allowscriptaccess","always"),i(d,"bgcolor",this.options.backgroundColor),i(d,"wmode",this.options.wmode)}this.element.append(d),this.internal.flash.jq=a(d)}this.status.playbackRateEnabled=this.html.used&&!this.flash.used?this._testPlaybackRate("audio"):!1,this._updatePlaybackRate(),this.html.used&&(this.html.audio.available&&(this._addHtmlEventListeners(this.htmlElement.audio,this.html.audio),this.element.append(this.htmlElement.audio),this.internal.audio.jq=a("#"+this.internal.audio.id)),this.html.video.available&&(this._addHtmlEventListeners(this.htmlElement.video,this.html.video),this.element.append(this.htmlElement.video),this.internal.video.jq=a("#"+this.internal.video.id),this.internal.video.jq.css(this.status.nativeVideoControls?{width:this.status.width,height:this.status.height}:{width:"0px",height:"0px"}),this.internal.video.jq.bind("click.jPlayer",function(){c._trigger(a.jPlayer.event.click)}))),this.aurora.used,this.options.emulateHtml&&this._emulateHtmlBridge(),!this.html.used&&!this.aurora.used||this.flash.used||setTimeout(function(){c.internal.ready=!0,c.version.flash="n/a",c._trigger(a.jPlayer.event.repeat),c._trigger(a.jPlayer.event.ready)},100),this._updateNativeVideoControls(),this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide(),a.jPlayer.prototype.count++},destroy:function(){this.clearMedia(),this._removeUiClass(),this.css.jq.currentTime.length&&this.css.jq.currentTime.text(""),this.css.jq.duration.length&&this.css.jq.duration.text(""),a.each(this.css.jq,function(a,b){b.length&&b.unbind(".jPlayer")}),this.internal.poster.jq.unbind(".jPlayer"),this.internal.video.jq&&this.internal.video.jq.unbind(".jPlayer"),this._fullscreenRemoveEventListeners(),this===a.jPlayer.focus&&(a.jPlayer.focus=null),this.options.emulateHtml&&this._destroyHtmlBridge(),this.element.removeData("jPlayer"),this.element.unbind(".jPlayer"),this.element.empty(),delete this.instances[this.internal.instance]},destroyRemoved:function(){var b=this;a.each(this.instances,function(a,c){b.element!==c&&(c.data("jPlayer")||(c.jPlayer("destroy"),delete b.instances[a]))})},enable:function(){},disable:function(){},_testCanPlayType:function(a){try{return a.canPlayType(this.format.mp3.codec),!0}catch(b){return!1}},_testPlaybackRate:function(a){var b,c=.5;a="string"==typeof a?a:"audio",b=document.createElement(a);try{return"playbackRate"in b?(b.playbackRate=c,b.playbackRate===c):!1}catch(d){return!1}},_uaBlocklist:function(b){var c=navigator.userAgent.toLowerCase(),d=!1;return a.each(b,function(a,b){return b&&b.test(c)?(d=!0,!1):void 0}),d},_restrictNativeVideoControls:function(){this.require.audio&&this.status.nativeVideoControls&&(this.status.nativeVideoControls=!1,this.status.noFullWindow=!0)},_updateNativeVideoControls:function(){this.html.video.available&&this.html.used&&(this.htmlElement.video.controls=this.status.nativeVideoControls,this._updateAutohide(),this.status.nativeVideoControls&&this.require.video?(this.internal.poster.jq.hide(),this.internal.video.jq.css({width:this.status.width,height:this.status.height})):this.status.waitForPlay&&this.status.video&&(this.internal.poster.jq.show(),this.internal.video.jq.css({width:"0px",height:"0px"})))},_addHtmlEventListeners:function(b,c){var d=this;b.preload=this.options.preload,b.muted=this.options.muted,b.volume=this.options.volume,this.status.playbackRateEnabled&&(b.defaultPlaybackRate=this.options.defaultPlaybackRate,b.playbackRate=this.options.playbackRate),b.addEventListener("progress",function(){c.gate&&(d.internal.cmdsIgnored&&this.readyState>0&&(d.internal.cmdsIgnored=!1),d._getHtmlStatus(b),d._updateInterface(),d._trigger(a.jPlayer.event.progress))},!1),b.addEventListener("loadeddata",function(){c.gate&&(d.androidFix.setMedia=!1,d.androidFix.play&&(d.androidFix.play=!1,d.play(d.androidFix.time)),d.androidFix.pause&&(d.androidFix.pause=!1,d.pause(d.androidFix.time)),d._trigger(a.jPlayer.event.loadeddata))},!1),b.addEventListener("timeupdate",function(){c.gate&&(d._getHtmlStatus(b),d._updateInterface(),d._trigger(a.jPlayer.event.timeupdate))},!1),b.addEventListener("durationchange",function(){c.gate&&(d._getHtmlStatus(b),d._updateInterface(),d._trigger(a.jPlayer.event.durationchange))},!1),b.addEventListener("play",function(){c.gate&&(d._updateButtons(!0),d._html_checkWaitForPlay(),d._trigger(a.jPlayer.event.play))},!1),b.addEventListener("playing",function(){c.gate&&(d._updateButtons(!0),d._seeked(),d._trigger(a.jPlayer.event.playing))},!1),b.addEventListener("pause",function(){c.gate&&(d._updateButtons(!1),d._trigger(a.jPlayer.event.pause))},!1),b.addEventListener("waiting",function(){c.gate&&(d._seeking(),d._trigger(a.jPlayer.event.waiting))},!1),b.addEventListener("seeking",function(){c.gate&&(d._seeking(),d._trigger(a.jPlayer.event.seeking))},!1),b.addEventListener("seeked",function(){c.gate&&(d._seeked(),d._trigger(a.jPlayer.event.seeked))},!1),b.addEventListener("volumechange",function(){c.gate&&(d.options.volume=b.volume,d.options.muted=b.muted,d._updateMute(),d._updateVolume(),d._trigger(a.jPlayer.event.volumechange))},!1),b.addEventListener("ratechange",function(){c.gate&&(d.options.defaultPlaybackRate=b.defaultPlaybackRate,d.options.playbackRate=b.playbackRate,d._updatePlaybackRate(),d._trigger(a.jPlayer.event.ratechange))},!1),b.addEventListener("suspend",function(){c.gate&&(d._seeked(),d._trigger(a.jPlayer.event.suspend))},!1),b.addEventListener("ended",function(){c.gate&&(a.jPlayer.browser.webkit||(d.htmlElement.media.currentTime=0),d.htmlElement.media.pause(),d._updateButtons(!1),d._getHtmlStatus(b,!0),d._updateInterface(),d._trigger(a.jPlayer.event.ended))},!1),b.addEventListener("error",function(){c.gate&&(d._updateButtons(!1),d._seeked(),d.status.srcSet&&(clearTimeout(d.internal.htmlDlyCmdId),d.status.waitForLoad=!0,d.status.waitForPlay=!0,d.status.video&&!d.status.nativeVideoControls&&d.internal.video.jq.css({width:"0px",height:"0px"}),d._validString(d.status.media.poster)&&!d.status.nativeVideoControls&&d.internal.poster.jq.show(),d.css.jq.videoPlay.length&&d.css.jq.videoPlay.show(),d._error({type:a.jPlayer.error.URL,context:d.status.src,message:a.jPlayer.errorMsg.URL,hint:a.jPlayer.errorHint.URL})))},!1),a.each(a.jPlayer.htmlEvent,function(e,f){b.addEventListener(this,function(){c.gate&&d._trigger(a.jPlayer.event[f])},!1)})},_addAuroraEventListeners:function(b,c){var d=this;b.volume=100*this.options.volume,b.on("progress",function(){c.gate&&(d.internal.cmdsIgnored&&this.readyState>0&&(d.internal.cmdsIgnored=!1),d._getAuroraStatus(b),d._updateInterface(),d._trigger(a.jPlayer.event.progress),b.duration>0&&d._trigger(a.jPlayer.event.timeupdate))},!1),b.on("ready",function(){c.gate&&d._trigger(a.jPlayer.event.loadeddata)},!1),b.on("duration",function(){c.gate&&(d._getAuroraStatus(b),d._updateInterface(),d._trigger(a.jPlayer.event.durationchange))},!1),b.on("end",function(){c.gate&&(d._updateButtons(!1),d._getAuroraStatus(b,!0),d._updateInterface(),d._trigger(a.jPlayer.event.ended))},!1),b.on("error",function(){c.gate&&(d._updateButtons(!1),d._seeked(),d.status.srcSet&&(d.status.waitForLoad=!0,d.status.waitForPlay=!0,d.status.video&&!d.status.nativeVideoControls&&d.internal.video.jq.css({width:"0px",height:"0px"}),d._validString(d.status.media.poster)&&!d.status.nativeVideoControls&&d.internal.poster.jq.show(),d.css.jq.videoPlay.length&&d.css.jq.videoPlay.show(),d._error({type:a.jPlayer.error.URL,context:d.status.src,message:a.jPlayer.errorMsg.URL,hint:a.jPlayer.errorHint.URL})))},!1)},_getHtmlStatus:function(a,b){var c=0,d=0,e=0,f=0;isFinite(a.duration)&&(this.status.duration=a.duration),c=a.currentTime,d=this.status.duration>0?100*c/this.status.duration:0,"object"==typeof a.seekable&&a.seekable.length>0?(e=this.status.duration>0?100*a.seekable.end(a.seekable.length-1)/this.status.duration:100,f=this.status.duration>0?100*a.currentTime/a.seekable.end(a.seekable.length-1):0):(e=100,f=d),b&&(c=0,f=0,d=0),this.status.seekPercent=e,this.status.currentPercentRelative=f,this.status.currentPercentAbsolute=d,this.status.currentTime=c,this.status.remaining=this.status.duration-this.status.currentTime,this.status.videoWidth=a.videoWidth,this.status.videoHeight=a.videoHeight,this.status.readyState=a.readyState,this.status.networkState=a.networkState,this.status.playbackRate=a.playbackRate,this.status.ended=a.ended},_getAuroraStatus:function(a,b){var c=0,d=0,e=0,f=0;this.status.duration=a.duration/1e3,c=a.currentTime/1e3,d=this.status.duration>0?100*c/this.status.duration:0,a.buffered>0?(e=this.status.duration>0?a.buffered*this.status.duration/this.status.duration:100,f=this.status.duration>0?c/(a.buffered*this.status.duration):0):(e=100,f=d),b&&(c=0,f=0,d=0),this.status.seekPercent=e,this.status.currentPercentRelative=f,this.status.currentPercentAbsolute=d,this.status.currentTime=c,this.status.remaining=this.status.duration-this.status.currentTime,this.status.readyState=4,this.status.networkState=0,this.status.playbackRate=1,this.status.ended=!1},_resetStatus:function(){this.status=a.extend({},this.status,a.jPlayer.prototype.status)},_trigger:function(b,c,d){var e=a.Event(b);e.jPlayer={},e.jPlayer.version=a.extend({},this.version),e.jPlayer.options=a.extend(!0,{},this.options),e.jPlayer.status=a.extend(!0,{},this.status),e.jPlayer.html=a.extend(!0,{},this.html),e.jPlayer.aurora=a.extend(!0,{},this.aurora),e.jPlayer.flash=a.extend(!0,{},this.flash),c&&(e.jPlayer.error=a.extend({},c)),d&&(e.jPlayer.warning=a.extend({},d)),this.element.trigger(e)},jPlayerFlashEvent:function(b,c){if(b===a.jPlayer.event.ready)if(this.internal.ready){if(this.flash.gate){if(this.status.srcSet){var d=this.status.currentTime,e=this.status.paused;this.setMedia(this.status.media),this.volumeWorker(this.options.volume),d>0&&(e?this.pause(d):this.play(d))}this._trigger(a.jPlayer.event.flashreset)}}else this.internal.ready=!0,this.internal.flash.jq.css({width:"0px",height:"0px"}),this.version.flash=c.version,this.version.needFlash!==this.version.flash&&this._error({type:a.jPlayer.error.VERSION,context:this.version.flash,message:a.jPlayer.errorMsg.VERSION+this.version.flash,hint:a.jPlayer.errorHint.VERSION}),this._trigger(a.jPlayer.event.repeat),this._trigger(b);if(this.flash.gate)switch(b){case a.jPlayer.event.progress:this._getFlashStatus(c),this._updateInterface(),this._trigger(b);break;case a.jPlayer.event.timeupdate:this._getFlashStatus(c),this._updateInterface(),this._trigger(b);break;case a.jPlayer.event.play:this._seeked(),this._updateButtons(!0),this._trigger(b);break;case a.jPlayer.event.pause:this._updateButtons(!1),this._trigger(b);break;case a.jPlayer.event.ended:this._updateButtons(!1),this._trigger(b);break;case a.jPlayer.event.click:this._trigger(b);break;case a.jPlayer.event.error:this.status.waitForLoad=!0,this.status.waitForPlay=!0,this.status.video&&this.internal.flash.jq.css({width:"0px",height:"0px"}),this._validString(this.status.media.poster)&&this.internal.poster.jq.show(),this.css.jq.videoPlay.length&&this.status.video&&this.css.jq.videoPlay.show(),this.status.video?this._flash_setVideo(this.status.media):this._flash_setAudio(this.status.media),this._updateButtons(!1),this._error({type:a.jPlayer.error.URL,context:c.src,message:a.jPlayer.errorMsg.URL,hint:a.jPlayer.errorHint.URL});break;case a.jPlayer.event.seeking:this._seeking(),this._trigger(b);break;case a.jPlayer.event.seeked:this._seeked(),this._trigger(b);break;case a.jPlayer.event.ready:break;default:this._trigger(b)}return!1},_getFlashStatus:function(a){this.status.seekPercent=a.seekPercent,this.status.currentPercentRelative=a.currentPercentRelative,this.status.currentPercentAbsolute=a.currentPercentAbsolute,this.status.currentTime=a.currentTime,this.status.duration=a.duration,this.status.remaining=a.duration-a.currentTime,this.status.videoWidth=a.videoWidth,this.status.videoHeight=a.videoHeight,this.status.readyState=4,this.status.networkState=0,this.status.playbackRate=1,this.status.ended=!1},_updateButtons:function(a){a===b?a=!this.status.paused:this.status.paused=!a,a?this.addStateClass("playing"):this.removeStateClass("playing"),!this.status.noFullWindow&&this.options.fullWindow?this.addStateClass("fullScreen"):this.removeStateClass("fullScreen"),this.options.loop?this.addStateClass("looped"):this.removeStateClass("looped"),this.css.jq.play.length&&this.css.jq.pause.length&&(a?(this.css.jq.play.hide(),this.css.jq.pause.show()):(this.css.jq.play.show(),this.css.jq.pause.hide())),this.css.jq.restoreScreen.length&&this.css.jq.fullScreen.length&&(this.status.noFullWindow?(this.css.jq.fullScreen.hide(),this.css.jq.restoreScreen.hide()):this.options.fullWindow?(this.css.jq.fullScreen.hide(),this.css.jq.restoreScreen.show()):(this.css.jq.fullScreen.show(),this.css.jq.restoreScreen.hide())),this.css.jq.repeat.length&&this.css.jq.repeatOff.length&&(this.options.loop?(this.css.jq.repeat.hide(),this.css.jq.repeatOff.show()):(this.css.jq.repeat.show(),this.css.jq.repeatOff.hide()))},_updateInterface:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.width(this.status.seekPercent+"%"),this.css.jq.playBar.length&&(this.options.smoothPlayBar?this.css.jq.playBar.stop().animate({width:this.status.currentPercentAbsolute+"%"},250,"linear"):this.css.jq.playBar.width(this.status.currentPercentRelative+"%"));var a="";this.css.jq.currentTime.length&&(a=this._convertTime(this.status.currentTime),a!==this.css.jq.currentTime.text()&&this.css.jq.currentTime.text(this._convertTime(this.status.currentTime)));var b="",c=this.status.duration,d=this.status.remaining;this.css.jq.duration.length&&("string"==typeof this.status.media.duration?b=this.status.media.duration:("number"==typeof this.status.media.duration&&(c=this.status.media.duration,d=c-this.status.currentTime),b=this.options.remainingDuration?(d>0?"-":"")+this._convertTime(d):this._convertTime(c)),b!==this.css.jq.duration.text()&&this.css.jq.duration.text(b))},_convertTime:c.prototype.time,_seeking:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.addClass("jp-seeking-bg"),this.addStateClass("seeking")},_seeked:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.removeClass("jp-seeking-bg"),this.removeStateClass("seeking")},_resetGate:function(){this.html.audio.gate=!1,this.html.video.gate=!1,this.aurora.gate=!1,this.flash.gate=!1},_resetActive:function(){this.html.active=!1,this.aurora.active=!1,this.flash.active=!1},_escapeHtml:function(a){return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")},_qualifyURL:function(a){var b=document.createElement("div");
return b.innerHTML='<a href="'+this._escapeHtml(a)+'">x</a>',b.firstChild.href},_absoluteMediaUrls:function(b){var c=this;return a.each(b,function(a,d){d&&c.format[a]&&"data:"!==d.substr(0,5)&&(b[a]=c._qualifyURL(d))}),b},addStateClass:function(a){this.ancestorJq.length&&this.ancestorJq.addClass(this.options.stateClass[a])},removeStateClass:function(a){this.ancestorJq.length&&this.ancestorJq.removeClass(this.options.stateClass[a])},setMedia:function(b){var c=this,d=!1,e=this.status.media.poster!==b.poster;this._resetMedia(),this._resetGate(),this._resetActive(),this.androidFix.setMedia=!1,this.androidFix.play=!1,this.androidFix.pause=!1,b=this._absoluteMediaUrls(b),a.each(this.formats,function(e,f){var g="video"===c.format[f].media;return a.each(c.solutions,function(e,h){if(c[h].support[f]&&c._validString(b[f])){var i="html"===h,j="aurora"===h;return g?(i?(c.html.video.gate=!0,c._html_setVideo(b),c.html.active=!0):(c.flash.gate=!0,c._flash_setVideo(b),c.flash.active=!0),c.css.jq.videoPlay.length&&c.css.jq.videoPlay.show(),c.status.video=!0):(i?(c.html.audio.gate=!0,c._html_setAudio(b),c.html.active=!0,a.jPlayer.platform.android&&(c.androidFix.setMedia=!0)):j?(c.aurora.gate=!0,c._aurora_setAudio(b),c.aurora.active=!0):(c.flash.gate=!0,c._flash_setAudio(b),c.flash.active=!0),c.css.jq.videoPlay.length&&c.css.jq.videoPlay.hide(),c.status.video=!1),d=!0,!1}}),d?!1:void 0}),d?(this.status.nativeVideoControls&&this.html.video.gate||this._validString(b.poster)&&(e?this.htmlElement.poster.src=b.poster:this.internal.poster.jq.show()),"string"==typeof b.title&&(this.css.jq.title.length&&this.css.jq.title.html(b.title),this.htmlElement.audio&&this.htmlElement.audio.setAttribute("title",b.title),this.htmlElement.video&&this.htmlElement.video.setAttribute("title",b.title)),this.status.srcSet=!0,this.status.media=a.extend({},b),this._updateButtons(!1),this._updateInterface(),this._trigger(a.jPlayer.event.setmedia)):this._error({type:a.jPlayer.error.NO_SUPPORT,context:"{supplied:'"+this.options.supplied+"'}",message:a.jPlayer.errorMsg.NO_SUPPORT,hint:a.jPlayer.errorHint.NO_SUPPORT})},_resetMedia:function(){this._resetStatus(),this._updateButtons(!1),this._updateInterface(),this._seeked(),this.internal.poster.jq.hide(),clearTimeout(this.internal.htmlDlyCmdId),this.html.active?this._html_resetMedia():this.aurora.active?this._aurora_resetMedia():this.flash.active&&this._flash_resetMedia()},clearMedia:function(){this._resetMedia(),this.html.active?this._html_clearMedia():this.aurora.active?this._aurora_clearMedia():this.flash.active&&this._flash_clearMedia(),this._resetGate(),this._resetActive()},load:function(){this.status.srcSet?this.html.active?this._html_load():this.aurora.active?this._aurora_load():this.flash.active&&this._flash_load():this._urlNotSetError("load")},focus:function(){this.options.keyEnabled&&(a.jPlayer.focus=this)},play:function(a){var b="object"==typeof a;b&&this.options.useStateClassSkin&&!this.status.paused?this.pause(a):(a="number"==typeof a?a:0/0,this.status.srcSet?(this.focus(),this.html.active?this._html_play(a):this.aurora.active?this._aurora_play(a):this.flash.active&&this._flash_play(a)):this._urlNotSetError("play"))},videoPlay:function(){this.play()},pause:function(a){a="number"==typeof a?a:0/0,this.status.srcSet?this.html.active?this._html_pause(a):this.aurora.active?this._aurora_pause(a):this.flash.active&&this._flash_pause(a):this._urlNotSetError("pause")},tellOthers:function(b,c){var d=this,e="function"==typeof c,f=Array.prototype.slice.call(arguments);"string"==typeof b&&(e&&f.splice(1,1),a.jPlayer.prototype.destroyRemoved(),a.each(this.instances,function(){d.element!==this&&(!e||c.call(this.data("jPlayer"),d))&&this.jPlayer.apply(this,f)}))},pauseOthers:function(a){this.tellOthers("pause",function(){return this.status.srcSet},a)},stop:function(){this.status.srcSet?this.html.active?this._html_pause(0):this.aurora.active?this._aurora_pause(0):this.flash.active&&this._flash_pause(0):this._urlNotSetError("stop")},playHead:function(a){a=this._limitValue(a,0,100),this.status.srcSet?this.html.active?this._html_playHead(a):this.aurora.active?this._aurora_playHead(a):this.flash.active&&this._flash_playHead(a):this._urlNotSetError("playHead")},_muted:function(a){this.mutedWorker(a),this.options.globalVolume&&this.tellOthers("mutedWorker",function(){return this.options.globalVolume},a)},mutedWorker:function(b){this.options.muted=b,this.html.used&&this._html_setProperty("muted",b),this.aurora.used&&this._aurora_mute(b),this.flash.used&&this._flash_mute(b),this.html.video.gate||this.html.audio.gate||(this._updateMute(b),this._updateVolume(this.options.volume),this._trigger(a.jPlayer.event.volumechange))},mute:function(a){var c="object"==typeof a;c&&this.options.useStateClassSkin&&this.options.muted?this._muted(!1):(a=a===b?!0:!!a,this._muted(a))},unmute:function(a){a=a===b?!0:!!a,this._muted(!a)},_updateMute:function(a){a===b&&(a=this.options.muted),a?this.addStateClass("muted"):this.removeStateClass("muted"),this.css.jq.mute.length&&this.css.jq.unmute.length&&(this.status.noVolume?(this.css.jq.mute.hide(),this.css.jq.unmute.hide()):a?(this.css.jq.mute.hide(),this.css.jq.unmute.show()):(this.css.jq.mute.show(),this.css.jq.unmute.hide()))},volume:function(a){this.volumeWorker(a),this.options.globalVolume&&this.tellOthers("volumeWorker",function(){return this.options.globalVolume},a)},volumeWorker:function(b){b=this._limitValue(b,0,1),this.options.volume=b,this.html.used&&this._html_setProperty("volume",b),this.aurora.used&&this._aurora_volume(b),this.flash.used&&this._flash_volume(b),this.html.video.gate||this.html.audio.gate||(this._updateVolume(b),this._trigger(a.jPlayer.event.volumechange))},volumeBar:function(b){if(this.css.jq.volumeBar.length){var c=a(b.currentTarget),d=c.offset(),e=b.pageX-d.left,f=c.width(),g=c.height()-b.pageY+d.top,h=c.height();this.volume(this.options.verticalVolume?g/h:e/f)}this.options.muted&&this._muted(!1)},_updateVolume:function(a){a===b&&(a=this.options.volume),a=this.options.muted?0:a,this.status.noVolume?(this.addStateClass("noVolume"),this.css.jq.volumeBar.length&&this.css.jq.volumeBar.hide(),this.css.jq.volumeBarValue.length&&this.css.jq.volumeBarValue.hide(),this.css.jq.volumeMax.length&&this.css.jq.volumeMax.hide()):(this.removeStateClass("noVolume"),this.css.jq.volumeBar.length&&this.css.jq.volumeBar.show(),this.css.jq.volumeBarValue.length&&(this.css.jq.volumeBarValue.show(),this.css.jq.volumeBarValue[this.options.verticalVolume?"height":"width"](100*a+"%")),this.css.jq.volumeMax.length&&this.css.jq.volumeMax.show())},volumeMax:function(){this.volume(1),this.options.muted&&this._muted(!1)},_cssSelectorAncestor:function(b){var c=this;this.options.cssSelectorAncestor=b,this._removeUiClass(),this.ancestorJq=b?a(b):[],b&&1!==this.ancestorJq.length&&this._warning({type:a.jPlayer.warning.CSS_SELECTOR_COUNT,context:b,message:a.jPlayer.warningMsg.CSS_SELECTOR_COUNT+this.ancestorJq.length+" found for cssSelectorAncestor.",hint:a.jPlayer.warningHint.CSS_SELECTOR_COUNT}),this._addUiClass(),a.each(this.options.cssSelector,function(a,b){c._cssSelector(a,b)}),this._updateInterface(),this._updateButtons(),this._updateAutohide(),this._updateVolume(),this._updateMute()},_cssSelector:function(b,c){var d=this;if("string"==typeof c)if(a.jPlayer.prototype.options.cssSelector[b]){if(this.css.jq[b]&&this.css.jq[b].length&&this.css.jq[b].unbind(".jPlayer"),this.options.cssSelector[b]=c,this.css.cs[b]=this.options.cssSelectorAncestor+" "+c,this.css.jq[b]=c?a(this.css.cs[b]):[],this.css.jq[b].length&&this[b]){var e=function(c){c.preventDefault(),d[b](c),d.options.autoBlur?a(this).blur():a(this).focus()};this.css.jq[b].bind("click.jPlayer",e)}c&&1!==this.css.jq[b].length&&this._warning({type:a.jPlayer.warning.CSS_SELECTOR_COUNT,context:this.css.cs[b],message:a.jPlayer.warningMsg.CSS_SELECTOR_COUNT+this.css.jq[b].length+" found for "+b+" method.",hint:a.jPlayer.warningHint.CSS_SELECTOR_COUNT})}else this._warning({type:a.jPlayer.warning.CSS_SELECTOR_METHOD,context:b,message:a.jPlayer.warningMsg.CSS_SELECTOR_METHOD,hint:a.jPlayer.warningHint.CSS_SELECTOR_METHOD});else this._warning({type:a.jPlayer.warning.CSS_SELECTOR_STRING,context:c,message:a.jPlayer.warningMsg.CSS_SELECTOR_STRING,hint:a.jPlayer.warningHint.CSS_SELECTOR_STRING})},duration:function(a){this.options.toggleDuration&&(this.options.captureDuration&&a.stopPropagation(),this._setOption("remainingDuration",!this.options.remainingDuration))},seekBar:function(b){if(this.css.jq.seekBar.length){var c=a(b.currentTarget),d=c.offset(),e=b.pageX-d.left,f=c.width(),g=100*e/f;this.playHead(g)}},playbackRate:function(a){this._setOption("playbackRate",a)},playbackRateBar:function(b){if(this.css.jq.playbackRateBar.length){var c,d,e=a(b.currentTarget),f=e.offset(),g=b.pageX-f.left,h=e.width(),i=e.height()-b.pageY+f.top,j=e.height();c=this.options.verticalPlaybackRate?i/j:g/h,d=c*(this.options.maxPlaybackRate-this.options.minPlaybackRate)+this.options.minPlaybackRate,this.playbackRate(d)}},_updatePlaybackRate:function(){var a=this.options.playbackRate,b=(a-this.options.minPlaybackRate)/(this.options.maxPlaybackRate-this.options.minPlaybackRate);this.status.playbackRateEnabled?(this.css.jq.playbackRateBar.length&&this.css.jq.playbackRateBar.show(),this.css.jq.playbackRateBarValue.length&&(this.css.jq.playbackRateBarValue.show(),this.css.jq.playbackRateBarValue[this.options.verticalPlaybackRate?"height":"width"](100*b+"%"))):(this.css.jq.playbackRateBar.length&&this.css.jq.playbackRateBar.hide(),this.css.jq.playbackRateBarValue.length&&this.css.jq.playbackRateBarValue.hide())},repeat:function(a){var b="object"==typeof a;this._loop(b&&this.options.useStateClassSkin&&this.options.loop?!1:!0)},repeatOff:function(){this._loop(!1)},_loop:function(b){this.options.loop!==b&&(this.options.loop=b,this._updateButtons(),this._trigger(a.jPlayer.event.repeat))},option:function(c,d){var e=c;if(0===arguments.length)return a.extend(!0,{},this.options);if("string"==typeof c){var f=c.split(".");if(d===b){for(var g=a.extend(!0,{},this.options),h=0;h<f.length;h++){if(g[f[h]]===b)return this._warning({type:a.jPlayer.warning.OPTION_KEY,context:c,message:a.jPlayer.warningMsg.OPTION_KEY,hint:a.jPlayer.warningHint.OPTION_KEY}),b;g=g[f[h]]}return g}e={};for(var i=e,j=0;j<f.length;j++)j<f.length-1?(i[f[j]]={},i=i[f[j]]):i[f[j]]=d}return this._setOptions(e),this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c._setOption(a,b)}),this},_setOption:function(b,c){var d=this;switch(b){case"volume":this.volume(c);break;case"muted":this._muted(c);break;case"globalVolume":this.options[b]=c;break;case"cssSelectorAncestor":this._cssSelectorAncestor(c);break;case"cssSelector":a.each(c,function(a,b){d._cssSelector(a,b)});break;case"playbackRate":this.options[b]=c=this._limitValue(c,this.options.minPlaybackRate,this.options.maxPlaybackRate),this.html.used&&this._html_setProperty("playbackRate",c),this._updatePlaybackRate();break;case"defaultPlaybackRate":this.options[b]=c=this._limitValue(c,this.options.minPlaybackRate,this.options.maxPlaybackRate),this.html.used&&this._html_setProperty("defaultPlaybackRate",c),this._updatePlaybackRate();break;case"minPlaybackRate":this.options[b]=c=this._limitValue(c,.1,this.options.maxPlaybackRate-.1),this._updatePlaybackRate();break;case"maxPlaybackRate":this.options[b]=c=this._limitValue(c,this.options.minPlaybackRate+.1,16),this._updatePlaybackRate();break;case"fullScreen":if(this.options[b]!==c){var e=a.jPlayer.nativeFeatures.fullscreen.used.webkitVideo;(!e||e&&!this.status.waitForPlay)&&(e||(this.options[b]=c),c?this._requestFullscreen():this._exitFullscreen(),e||this._setOption("fullWindow",c))}break;case"fullWindow":this.options[b]!==c&&(this._removeUiClass(),this.options[b]=c,this._refreshSize());break;case"size":this.options.fullWindow||this.options[b].cssClass===c.cssClass||this._removeUiClass(),this.options[b]=a.extend({},this.options[b],c),this._refreshSize();break;case"sizeFull":this.options.fullWindow&&this.options[b].cssClass!==c.cssClass&&this._removeUiClass(),this.options[b]=a.extend({},this.options[b],c),this._refreshSize();break;case"autohide":this.options[b]=a.extend({},this.options[b],c),this._updateAutohide();break;case"loop":this._loop(c);break;case"remainingDuration":this.options[b]=c,this._updateInterface();break;case"toggleDuration":this.options[b]=c;break;case"nativeVideoControls":this.options[b]=a.extend({},this.options[b],c),this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls),this._restrictNativeVideoControls(),this._updateNativeVideoControls();break;case"noFullWindow":this.options[b]=a.extend({},this.options[b],c),this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls),this.status.noFullWindow=this._uaBlocklist(this.options.noFullWindow),this._restrictNativeVideoControls(),this._updateButtons();break;case"noVolume":this.options[b]=a.extend({},this.options[b],c),this.status.noVolume=this._uaBlocklist(this.options.noVolume),this._updateVolume(),this._updateMute();break;case"emulateHtml":this.options[b]!==c&&(this.options[b]=c,c?this._emulateHtmlBridge():this._destroyHtmlBridge());break;case"timeFormat":this.options[b]=a.extend({},this.options[b],c);break;case"keyEnabled":this.options[b]=c,c||this!==a.jPlayer.focus||(a.jPlayer.focus=null);break;case"keyBindings":this.options[b]=a.extend(!0,{},this.options[b],c);break;case"audioFullScreen":this.options[b]=c;break;case"autoBlur":this.options[b]=c}return this},_refreshSize:function(){this._setSize(),this._addUiClass(),this._updateSize(),this._updateButtons(),this._updateAutohide(),this._trigger(a.jPlayer.event.resize)},_setSize:function(){this.options.fullWindow?(this.status.width=this.options.sizeFull.width,this.status.height=this.options.sizeFull.height,this.status.cssClass=this.options.sizeFull.cssClass):(this.status.width=this.options.size.width,this.status.height=this.options.size.height,this.status.cssClass=this.options.size.cssClass),this.element.css({width:this.status.width,height:this.status.height})},_addUiClass:function(){this.ancestorJq.length&&this.ancestorJq.addClass(this.status.cssClass)},_removeUiClass:function(){this.ancestorJq.length&&this.ancestorJq.removeClass(this.status.cssClass)},_updateSize:function(){this.internal.poster.jq.css({width:this.status.width,height:this.status.height}),!this.status.waitForPlay&&this.html.active&&this.status.video||this.html.video.available&&this.html.used&&this.status.nativeVideoControls?this.internal.video.jq.css({width:this.status.width,height:this.status.height}):!this.status.waitForPlay&&this.flash.active&&this.status.video&&this.internal.flash.jq.css({width:this.status.width,height:this.status.height})},_updateAutohide:function(){var a=this,b="mousemove.jPlayer",c=".jPlayerAutohide",d=b+c,e=function(b){var c,d,e=!1;"undefined"!=typeof a.internal.mouse?(c=a.internal.mouse.x-b.pageX,d=a.internal.mouse.y-b.pageY,e=Math.floor(c)>0||Math.floor(d)>0):e=!0,a.internal.mouse={x:b.pageX,y:b.pageY},e&&a.css.jq.gui.fadeIn(a.options.autohide.fadeIn,function(){clearTimeout(a.internal.autohideId),a.internal.autohideId=setTimeout(function(){a.css.jq.gui.fadeOut(a.options.autohide.fadeOut)},a.options.autohide.hold)})};this.css.jq.gui.length&&(this.css.jq.gui.stop(!0,!0),clearTimeout(this.internal.autohideId),delete this.internal.mouse,this.element.unbind(c),this.css.jq.gui.unbind(c),this.status.nativeVideoControls?this.css.jq.gui.hide():this.options.fullWindow&&this.options.autohide.full||!this.options.fullWindow&&this.options.autohide.restored?(this.element.bind(d,e),this.css.jq.gui.bind(d,e),this.css.jq.gui.hide()):this.css.jq.gui.show())},fullScreen:function(a){var b="object"==typeof a;b&&this.options.useStateClassSkin&&this.options.fullScreen?this._setOption("fullScreen",!1):this._setOption("fullScreen",!0)},restoreScreen:function(){this._setOption("fullScreen",!1)},_fullscreenAddEventListeners:function(){var b=this,c=a.jPlayer.nativeFeatures.fullscreen;c.api.fullscreenEnabled&&c.event.fullscreenchange&&("function"!=typeof this.internal.fullscreenchangeHandler&&(this.internal.fullscreenchangeHandler=function(){b._fullscreenchange()}),document.addEventListener(c.event.fullscreenchange,this.internal.fullscreenchangeHandler,!1))},_fullscreenRemoveEventListeners:function(){var b=a.jPlayer.nativeFeatures.fullscreen;this.internal.fullscreenchangeHandler&&document.removeEventListener(b.event.fullscreenchange,this.internal.fullscreenchangeHandler,!1)},_fullscreenchange:function(){this.options.fullScreen&&!a.jPlayer.nativeFeatures.fullscreen.api.fullscreenElement()&&this._setOption("fullScreen",!1)},_requestFullscreen:function(){var b=this.ancestorJq.length?this.ancestorJq[0]:this.element[0],c=a.jPlayer.nativeFeatures.fullscreen;c.used.webkitVideo&&(b=this.htmlElement.video),c.api.fullscreenEnabled&&c.api.requestFullscreen(b)},_exitFullscreen:function(){var b,c=a.jPlayer.nativeFeatures.fullscreen;c.used.webkitVideo&&(b=this.htmlElement.video),c.api.fullscreenEnabled&&c.api.exitFullscreen(b)},_html_initMedia:function(b){var c=a(this.htmlElement.media).empty();a.each(b.track||[],function(a,b){var d=document.createElement("track");d.setAttribute("kind",b.kind?b.kind:""),d.setAttribute("src",b.src?b.src:""),d.setAttribute("srclang",b.srclang?b.srclang:""),d.setAttribute("label",b.label?b.label:""),b.def&&d.setAttribute("default",b.def),c.append(d)}),this.htmlElement.media.src=this.status.src,"none"!==this.options.preload&&this._html_load(),this._trigger(a.jPlayer.event.timeupdate)},_html_setFormat:function(b){var c=this;a.each(this.formats,function(a,d){return c.html.support[d]&&b[d]?(c.status.src=b[d],c.status.format[d]=!0,c.status.formatType=d,!1):void 0})},_html_setAudio:function(a){this._html_setFormat(a),this.htmlElement.media=this.htmlElement.audio,this._html_initMedia(a)},_html_setVideo:function(a){this._html_setFormat(a),this.status.nativeVideoControls&&(this.htmlElement.video.poster=this._validString(a.poster)?a.poster:""),this.htmlElement.media=this.htmlElement.video,this._html_initMedia(a)},_html_resetMedia:function(){this.htmlElement.media&&(this.htmlElement.media.id!==this.internal.video.id||this.status.nativeVideoControls||this.internal.video.jq.css({width:"0px",height:"0px"}),this.htmlElement.media.pause())},_html_clearMedia:function(){this.htmlElement.media&&(this.htmlElement.media.src="about:blank",this.htmlElement.media.load())},_html_load:function(){this.status.waitForLoad&&(this.status.waitForLoad=!1,this.htmlElement.media.load()),clearTimeout(this.internal.htmlDlyCmdId)},_html_play:function(a){var b=this,c=this.htmlElement.media;if(this.androidFix.pause=!1,this._html_load(),this.androidFix.setMedia)this.androidFix.play=!0,this.androidFix.time=a;else if(isNaN(a))c.play();else{this.internal.cmdsIgnored&&c.play();try{if(c.seekable&&!("object"==typeof c.seekable&&c.seekable.length>0))throw 1;c.currentTime=a,c.play()}catch(d){return void(this.internal.htmlDlyCmdId=setTimeout(function(){b.play(a)},250))}}this._html_checkWaitForPlay()},_html_pause:function(a){var b=this,c=this.htmlElement.media;if(this.androidFix.play=!1,a>0?this._html_load():clearTimeout(this.internal.htmlDlyCmdId),c.pause(),this.androidFix.setMedia)this.androidFix.pause=!0,this.androidFix.time=a;else if(!isNaN(a))try{if(c.seekable&&!("object"==typeof c.seekable&&c.seekable.length>0))throw 1;c.currentTime=a}catch(d){return void(this.internal.htmlDlyCmdId=setTimeout(function(){b.pause(a)},250))}a>0&&this._html_checkWaitForPlay()},_html_playHead:function(a){var b=this,c=this.htmlElement.media;this._html_load();try{if("object"==typeof c.seekable&&c.seekable.length>0)c.currentTime=a*c.seekable.end(c.seekable.length-1)/100;else{if(!(c.duration>0)||isNaN(c.duration))throw"e";c.currentTime=a*c.duration/100}}catch(d){return void(this.internal.htmlDlyCmdId=setTimeout(function(){b.playHead(a)},250))}this.status.waitForLoad||this._html_checkWaitForPlay()},_html_checkWaitForPlay:function(){this.status.waitForPlay&&(this.status.waitForPlay=!1,this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide(),this.status.video&&(this.internal.poster.jq.hide(),this.internal.video.jq.css({width:this.status.width,height:this.status.height})))},_html_setProperty:function(a,b){this.html.audio.available&&(this.htmlElement.audio[a]=b),this.html.video.available&&(this.htmlElement.video[a]=b)},_aurora_setAudio:function(b){var c=this;a.each(this.formats,function(a,d){return c.aurora.support[d]&&b[d]?(c.status.src=b[d],c.status.format[d]=!0,c.status.formatType=d,!1):void 0}),this.aurora.player=new AV.Player.fromURL(this.status.src),this._addAuroraEventListeners(this.aurora.player,this.aurora),"auto"===this.options.preload&&(this._aurora_load(),this.status.waitForLoad=!1)},_aurora_resetMedia:function(){this.aurora.player&&this.aurora.player.stop()},_aurora_clearMedia:function(){},_aurora_load:function(){this.status.waitForLoad&&(this.status.waitForLoad=!1,this.aurora.player.preload())},_aurora_play:function(b){this.status.waitForLoad||isNaN(b)||this.aurora.player.seek(b),this.aurora.player.playing||this.aurora.player.play(),this.status.waitForLoad=!1,this._aurora_checkWaitForPlay(),this._updateButtons(!0),this._trigger(a.jPlayer.event.play)},_aurora_pause:function(b){isNaN(b)||this.aurora.player.seek(1e3*b),this.aurora.player.pause(),b>0&&this._aurora_checkWaitForPlay(),this._updateButtons(!1),this._trigger(a.jPlayer.event.pause)},_aurora_playHead:function(a){this.aurora.player.duration>0&&this.aurora.player.seek(a*this.aurora.player.duration/100),this.status.waitForLoad||this._aurora_checkWaitForPlay()},_aurora_checkWaitForPlay:function(){this.status.waitForPlay&&(this.status.waitForPlay=!1)},_aurora_volume:function(a){this.aurora.player.volume=100*a},_aurora_mute:function(a){a?(this.aurora.properties.lastvolume=this.aurora.player.volume,this.aurora.player.volume=0):this.aurora.player.volume=this.aurora.properties.lastvolume,this.aurora.properties.muted=a},_flash_setAudio:function(b){var c=this;try{a.each(this.formats,function(a,d){if(c.flash.support[d]&&b[d]){switch(d){case"m4a":case"fla":c._getMovie().fl_setAudio_m4a(b[d]);break;case"mp3":c._getMovie().fl_setAudio_mp3(b[d]);break;case"rtmpa":c._getMovie().fl_setAudio_rtmp(b[d])}return c.status.src=b[d],c.status.format[d]=!0,c.status.formatType=d,!1}}),"auto"===this.options.preload&&(this._flash_load(),this.status.waitForLoad=!1)}catch(d){this._flashError(d)}},_flash_setVideo:function(b){var c=this;try{a.each(this.formats,function(a,d){if(c.flash.support[d]&&b[d]){switch(d){case"m4v":case"flv":c._getMovie().fl_setVideo_m4v(b[d]);break;case"rtmpv":c._getMovie().fl_setVideo_rtmp(b[d])}return c.status.src=b[d],c.status.format[d]=!0,c.status.formatType=d,!1}}),"auto"===this.options.preload&&(this._flash_load(),this.status.waitForLoad=!1)}catch(d){this._flashError(d)}},_flash_resetMedia:function(){this.internal.flash.jq.css({width:"0px",height:"0px"}),this._flash_pause(0/0)},_flash_clearMedia:function(){try{this._getMovie().fl_clearMedia()}catch(a){this._flashError(a)}},_flash_load:function(){try{this._getMovie().fl_load()}catch(a){this._flashError(a)}this.status.waitForLoad=!1},_flash_play:function(a){try{this._getMovie().fl_play(a)}catch(b){this._flashError(b)}this.status.waitForLoad=!1,this._flash_checkWaitForPlay()},_flash_pause:function(a){try{this._getMovie().fl_pause(a)}catch(b){this._flashError(b)}a>0&&(this.status.waitForLoad=!1,this._flash_checkWaitForPlay())},_flash_playHead:function(a){try{this._getMovie().fl_play_head(a)}catch(b){this._flashError(b)}this.status.waitForLoad||this._flash_checkWaitForPlay()},_flash_checkWaitForPlay:function(){this.status.waitForPlay&&(this.status.waitForPlay=!1,this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide(),this.status.video&&(this.internal.poster.jq.hide(),this.internal.flash.jq.css({width:this.status.width,height:this.status.height})))},_flash_volume:function(a){try{this._getMovie().fl_volume(a)}catch(b){this._flashError(b)}},_flash_mute:function(a){try{this._getMovie().fl_mute(a)}catch(b){this._flashError(b)}},_getMovie:function(){return document[this.internal.flash.id]},_getFlashPluginVersion:function(){var a,b=0;if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")){var c=a.GetVariable("$version");c&&(c=c.split(" ")[1].split(","),b=parseInt(c[0],10)+"."+parseInt(c[1],10))}}catch(d){}else navigator.plugins&&navigator.mimeTypes.length>0&&(a=navigator.plugins["Shockwave Flash"],a&&(b=navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/,"$1")));return 1*b},_checkForFlash:function(a){var b=!1;return this._getFlashPluginVersion()>=a&&(b=!0),b},_validString:function(a){return a&&"string"==typeof a},_limitValue:function(a,b,c){return b>a?b:a>c?c:a},_urlNotSetError:function(b){this._error({type:a.jPlayer.error.URL_NOT_SET,context:b,message:a.jPlayer.errorMsg.URL_NOT_SET,hint:a.jPlayer.errorHint.URL_NOT_SET})},_flashError:function(b){var c;c=this.internal.ready?"FLASH_DISABLED":"FLASH",this._error({type:a.jPlayer.error[c],context:this.internal.flash.swf,message:a.jPlayer.errorMsg[c]+b.message,hint:a.jPlayer.errorHint[c]}),this.internal.flash.jq.css({width:"1px",height:"1px"})},_error:function(b){this._trigger(a.jPlayer.event.error,b),this.options.errorAlerts&&this._alert("Error!"+(b.message?"\n"+b.message:"")+(b.hint?"\n"+b.hint:"")+"\nContext: "+b.context)},_warning:function(c){this._trigger(a.jPlayer.event.warning,b,c),this.options.warningAlerts&&this._alert("Warning!"+(c.message?"\n"+c.message:"")+(c.hint?"\n"+c.hint:"")+"\nContext: "+c.context)},_alert:function(a){var b="jPlayer "+this.version.script+" : id='"+this.internal.self.id+"' : "+a;this.options.consoleAlerts?window.console&&window.console.log&&window.console.log(b):alert(b)},_emulateHtmlBridge:function(){var b=this;a.each(a.jPlayer.emulateMethods.split(/\s+/g),function(a,c){b.internal.domNode[c]=function(a){b[c](a)}}),a.each(a.jPlayer.event,function(c,d){var e=!0;a.each(a.jPlayer.reservedEvent.split(/\s+/g),function(a,b){return b===c?(e=!1,!1):void 0}),e&&b.element.bind(d+".jPlayer.jPlayerHtml",function(){b._emulateHtmlUpdate();var a=document.createEvent("Event");a.initEvent(c,!1,!0),b.internal.domNode.dispatchEvent(a)})})},_emulateHtmlUpdate:function(){var b=this;a.each(a.jPlayer.emulateStatus.split(/\s+/g),function(a,c){b.internal.domNode[c]=b.status[c]}),a.each(a.jPlayer.emulateOptions.split(/\s+/g),function(a,c){b.internal.domNode[c]=b.options[c]})},_destroyHtmlBridge:function(){var b=this;this.element.unbind(".jPlayerHtml");var c=a.jPlayer.emulateMethods+" "+a.jPlayer.emulateStatus+" "+a.jPlayer.emulateOptions;a.each(c.split(/\s+/g),function(a,c){delete b.internal.domNode[c]})}},a.jPlayer.error={FLASH:"e_flash",FLASH_DISABLED:"e_flash_disabled",NO_SOLUTION:"e_no_solution",NO_SUPPORT:"e_no_support",URL:"e_url",URL_NOT_SET:"e_url_not_set",VERSION:"e_version"},a.jPlayer.errorMsg={FLASH:"jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",FLASH_DISABLED:"jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",NO_SOLUTION:"No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",NO_SUPPORT:"It is not possible to play any media format provided in setMedia() on this browser using your current options.",URL:"Media URL could not be loaded.",URL_NOT_SET:"Attempt to issue media playback commands, while no media url is set.",VERSION:"jPlayer "+a.jPlayer.prototype.version.script+" needs Jplayer.swf version "+a.jPlayer.prototype.version.needFlash+" but found "},a.jPlayer.errorHint={FLASH:"Check your swfPath option and that Jplayer.swf is there.",FLASH_DISABLED:"Check that you have not display:none; the jPlayer entity or any ancestor.",NO_SOLUTION:"Review the jPlayer options: support and supplied.",NO_SUPPORT:"Video or audio formats defined in the supplied option are missing.",URL:"Check media URL is valid.",URL_NOT_SET:"Use setMedia() to set the media URL.",VERSION:"Update jPlayer files."},a.jPlayer.warning={CSS_SELECTOR_COUNT:"e_css_selector_count",CSS_SELECTOR_METHOD:"e_css_selector_method",CSS_SELECTOR_STRING:"e_css_selector_string",OPTION_KEY:"e_option_key"},a.jPlayer.warningMsg={CSS_SELECTOR_COUNT:"The number of css selectors found did not equal one: ",CSS_SELECTOR_METHOD:"The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",CSS_SELECTOR_STRING:"The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",OPTION_KEY:"The option requested in jPlayer('option') is undefined."},a.jPlayer.warningHint={CSS_SELECTOR_COUNT:"Check your css selector and the ancestor.",CSS_SELECTOR_METHOD:"Check your method name.",CSS_SELECTOR_STRING:"Check your css selector is a string.",OPTION_KEY:"Check your option name."}});

define("json2",[],function(require,exports,module){
    /*
    http://www.JSON.org/json2.js
    2010-08-25

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

    if (!this.JSON) {
        this.JSON = {};
    }

    (function () {

        function f(n) {
            // Format integers to have at least two digits.
            return n < 10 ? '0' + n : n;
        }

        if (typeof Date.prototype.toJSON !== 'function') {

            Date.prototype.toJSON = function (key) {

                return isFinite(this.valueOf()) ?
                       this.getUTCFullYear()   + '-' +
                     f(this.getUTCMonth() + 1) + '-' +
                     f(this.getUTCDate())      + 'T' +
                     f(this.getUTCHours())     + ':' +
                     f(this.getUTCMinutes())   + ':' +
                     f(this.getUTCSeconds())   + 'Z' : null;
            };

            String.prototype.toJSON =
            Number.prototype.toJSON =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
        }

        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap,
            indent,
            meta = {    // table of character substitutions
                '\b': '\\b',
                '\t': '\\t',
                '\n': '\\n',
                '\f': '\\f',
                '\r': '\\r',
                '"' : '\\"',
                '\\': '\\\\'
            },
            rep;


        function quote(string) {

    // If the string contains no control characters, no quote characters, and no
    // backslash characters, then we can safely slap some quotes around it.
    // Otherwise we must also replace the offending characters with safe escape
    // sequences.

            escapable.lastIndex = 0;
            return escapable.test(string) ?
                '"' + string.replace(escapable, function (a) {
                    var c = meta[a];
                    return typeof c === 'string' ? c :
                        '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                }) + '"' :
                '"' + string + '"';
        }


        function str(key, holder) {

    // Produce a string from holder[key].

            var i,          // The loop counter.
                k,          // The member key.
                v,          // The member value.
                length,
                mind = gap,
                partial,
                value = holder[key];

    // If the value has a toJSON method, call it to obtain a replacement value.

            if (value && typeof value === 'object' &&
                    typeof value.toJSON === 'function') {
                value = value.toJSON(key);
            }

    // If we were called with a replacer function, then call the replacer to
    // obtain a replacement value.

            if (typeof rep === 'function') {
                value = rep.call(holder, key, value);
            }

    // What happens next depends on the value's type.

            switch (typeof value) {
            case 'string':
                return quote(value);

            case 'number':

    // JSON numbers must be finite. Encode non-finite numbers as null.

                return isFinite(value) ? String(value) : 'null';

            case 'boolean':
            case 'null':

    // If the value is a boolean or null, convert it to a string. Note:
    // typeof null does not produce 'null'. The case is included here in
    // the remote chance that this gets fixed someday.

                return String(value);

    // If the type is 'object', we might be dealing with an object or an array or
    // null.

            case 'object':

    // Due to a specification blunder in ECMAScript, typeof null is 'object',
    // so watch out for that case.

                if (!value) {
                    return 'null';
                }

    // Make an array to hold the partial results of stringifying this object value.

                gap += indent;
                partial = [];

    // Is the value an array?

                if (Object.prototype.toString.apply(value) === '[object Array]') {

    // The value is an array. Stringify every element. Use null as a placeholder
    // for non-JSON values.

                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || 'null';
                    }

    // Join all of the elements together, separated with commas, and wrap them in
    // brackets.

                    v = partial.length === 0 ? '[]' :
                        gap ? '[\n' + gap +
                                partial.join(',\n' + gap) + '\n' +
                                    mind + ']' :
                              '[' + partial.join(',') + ']';
                    gap = mind;
                    return v;
                }

    // If the replacer is an array, use it to select the members to be stringified.

                if (rep && typeof rep === 'object') {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        k = rep[i];
                        if (typeof k === 'string') {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }
                } else {

    // Otherwise, iterate through all of the keys in the object.

                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }
                }

    // Join all of the member texts together, separated with commas,
    // and wrap them in braces.

                v = partial.length === 0 ? '{}' :
                    gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                            mind + '}' : '{' + partial.join(',') + '}';
                gap = mind;
                return v;
            }
        }

    // If the JSON object does not yet have a stringify method, give it one.

        if (typeof JSON.stringify !== 'function') {
            JSON.stringify = function (value, replacer, space) {

    // The stringify method takes a value and an optional replacer, and an optional
    // space parameter, and returns a JSON text. The replacer can be a function
    // that can replace values, or an array of strings that will select the keys.
    // A default replacer method can be provided. Use of the space parameter can
    // produce text that is more easily readable.

                var i;
                gap = '';
                indent = '';

    // If the space parameter is a number, make an indent string containing that
    // many spaces.

                if (typeof space === 'number') {
                    for (i = 0; i < space; i += 1) {
                        indent += ' ';
                    }

    // If the space parameter is a string, it will be used as the indent string.

                } else if (typeof space === 'string') {
                    indent = space;
                }

    // If there is a replacer, it must be a function or an array.
    // Otherwise, throw an error.

                rep = replacer;
                if (replacer && typeof replacer !== 'function' &&
                        (typeof replacer !== 'object' ||
                         typeof replacer.length !== 'number')) {
                    throw new Error('JSON.stringify');
                }

    // Make a fake root object containing our value under the key of ''.
    // Return the result of stringifying the value.

                return str('', {'': value});
            };
        }


    // If the JSON object does not yet have a parse method, give it one.

        if (typeof JSON.parse !== 'function') {
            JSON.parse = function (text, reviver) {

    // The parse method takes a text and an optional reviver function, and returns
    // a JavaScript value if the text is a valid JSON text.

                var j;

                function walk(holder, key) {

    // The walk method is used to recursively walk the resulting structure so
    // that modifications can be made.

                    var k, v, value = holder[key];
                    if (value && typeof value === 'object') {
                        for (k in value) {
                            if (Object.hasOwnProperty.call(value, k)) {
                                v = walk(value, k);
                                if (v !== undefined) {
                                    value[k] = v;
                                } else {
                                    delete value[k];
                                }
                            }
                        }
                    }
                    return reviver.call(holder, key, value);
                }


    // Parsing happens in four stages. In the first stage, we replace certain
    // Unicode characters with escape sequences. JavaScript handles many characters
    // incorrectly, either silently deleting them, or treating them as line endings.

                text = String(text);
                cx.lastIndex = 0;
                if (cx.test(text)) {
                    text = text.replace(cx, function (a) {
                        return '\\u' +
                            ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                    });
                }

    // In the second stage, we run the text against regular expressions that look
    // for non-JSON patterns. We are especially concerned with '()' and 'new'
    // because they can cause invocation, and '=' because it can cause mutation.
    // But just to be safe, we want to reject all unexpected forms.

    // We split the second stage into 4 regexp operations in order to work around
    // crippling inefficiencies in IE's and Safari's regexp engines. First we
    // replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
    // replace all simple value tokens with ']' characters. Third, we delete all
    // open brackets that follow a colon or comma or that begin the text. Finally,
    // we look to see that the remaining characters are only whitespace or ']' or
    // ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

                if (/^[\],:{}\s]*$/
    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
    .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
    .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

    // In the third stage we use the eval function to compile the text into a
    // JavaScript structure. The '{' operator is subject to a syntactic ambiguity
    // in JavaScript: it can begin a block or an object literal. We wrap the text
    // in parens to eliminate the ambiguity.

                    j = eval('(' + text + ')');

    // In the optional fourth stage, we recursively walk the new structure, passing
    // each name/value pair to a reviver function for possible transformation.

                    return typeof reviver === 'function' ?
                        walk({'': j}, '') : j;
                }

    // If the text is not JSON parseable, then a SyntaxError is thrown.

                throw new SyntaxError('JSON.parse');
            };
        }
    }());

    module.exports=JSON;
});


/**
 * 
 * @authors Saturday (zhouling@51talk.com)
 * @date    2014-09-19 10:46:34
 * @version 1.0.0
 */
define("lazyload",[],function(require,exports,module){
    var oWin=$(window);
    var aImg=$("img");
    oWin.on("load scroll resize",function(){
        var scrollT=oWin.scrollTop();
        aImg.each(function(){
            if(this.src)return true;
            var oImg=$(this);
            if(scrollT+oWin.height()>=oImg.offset().top){
                this.src=this.getAttribute("_src");
                this.removeAttribute("_src");
            }
        });
        
    });
});

define("logHref",[],function(require,exports,module){
    var cookie = require('cookie');
    $(function(){
        var $div = $('<div style="display:none;"></div>');
        $('body').append($div);
      
        $('body').on('mousedown','.__dim__o',function(){
              sendImg(this);
        })

        $('body').on('mouseover','.__dim__v',function(){
              sendImg(this);
        })

        function sendImg(obj){
            var arr = [];
            arr[0] = 'b=' + $(obj).attr('setdata');
            arr[1] = 't=' + (new Date().getTime());
            arr[2] = 'pt=' + $(document).attr('title');
            arr[3] = 'l=' + $(obj).attr('href');
            arr[4] = 'uuid=' + (cookie.getCookie('uuid') || ''); //cookie uuid
            arr[5] = 'visit=' + (cookie.getCookie('visitid') || '');//visitid
            arr[6]='s=' + 1;
            arr[7] = 'tt=' + rnd5();
            var oImg = new Image();
            oImg.src = 'http://behavior.51talk.com/talk.gif?'+ arr.join('&');
            $div.html(oImg);
        }

        // 5为随机数
        function rnd5(){
            var str = '';
            for(var i=0;i<5;i++){
                str += parseInt(Math.random()*10);
            }
            return str;
        }
    })
})

/**
 *
 * @authors Saturday (zhouling@51talk.com)
 * @date    2014-11-13 18:53:30
 * @version 1.0.0
 */
define("placeholder",[],function(require,exports,module){
    if("placeholder" in document.createElement("input")) return;
    var defaultColor="#ccc";
    $(":input").each(function(){
        var oInput=$(this);
        var placeholder=oInput.attr("placeholder");
        if(!placeholder) return true;
        if(this.type.toLowerCase()=="textarea"){
            var oSpan=$('<textarea>');
        }else{
            var oSpan=$('<input>');
        }
        oSpan.addClass(oInput.attr("class")).val(placeholder).css("color",defaultColor);
        oInput.after(oSpan);
        oSpan.focus(function(){
            oSpan.hide();
            oInput.show().focus();
        });
        oInput.blur(function(){
            if(this.value==""){
                oInput.hide();
                oSpan.show();
            }
        });
        if(this.value==""){
            oSpan.show();
            oInput.hide();
        }else{
            oSpan.hide();
        }
    });
});


/**
 * 
 * @authors Saturday (13811774679@163.com)
 * @date    2014-09-19 10:46:34
 * @version 1.0.0
 */
define("silder",[],function(require,exports,module){
	$.fn.extend({
		silder:function(options){
			options=options || {};
			var defaults={
				"axis"		:"x",
				//bounceBoth bounceOut bounceIn backBoth backOut backIn elasticBoth elasticOut elasticIn easeBothStrong easeOutStrong easeInStrong easeBoth easeOut easeIn
				"type"		:"elasticOut",
				"speed"		:3000,
				"autoPlay"	:true,
                "pointClass":"silder-crt"
			};
			var settings=$.extend(defaults,options);
			return this.each(function(index,ele){
				var oSilder=$(ele);
				var oUl=oSilder.find("[data-silder='ul']");
				var aLi=oUl.children();
				var count=aLi.length;
                var oPoints=oSilder.find("[data-silder='points']");
				if(count<2){
					return true;
				}
				var liWidth=aLi.eq(0).outerWidth();
				var liHeight=aLi.eq(0).outerHeight();
				

				var iNow=0;
				var timer=null;
				var speed=settings.speed;
				var axis=settings.axis;
				var pointClass=settings.pointClass;
				//给ul固定足够的宽度，否则li会折行
				if(axis=="x"){
					oUl[0].innerHTML+=oUl[0].innerHTML;
					oUl.width(liWidth*count*2).children().css("float","left");
				}
				if(axis=="y"){
					oUl[0].innerHTML+=oUl[0].innerHTML;
					oUl.height(liHeight*count*2).children().css("float","none");
				}
				if(axis=="opacity"){
					aLi.css({
						"position":"absolute"
					}).filter(":gt(0)").hide();
				}
				
				var preBtn=oSilder.find("[data-silder='prev']");
				var nextBtn=oSilder.find("[data-silder='next']");

				preBtn.click(function(){
					if(oUl.is(":animated") || oUl.find(":animated").length) return;
					pre();
				});
				nextBtn.click(function(){
					if(oUl.is(":animated") || oUl.find(":animated").length) return;
					next();
				});
				oUl.add(nextBtn).add(preBtn).add(oPoints).hover(function(){
					clearInterval(timer);
				},function(){
					begin();
				});
                //窗口失去焦点停止运动
                $(window).on("blur",function(){
                    clearInterval(timer);
                });
                $(window).on("focus",function(){
                    begin();
                });
				if(settings.autoPlay) begin();
                addPoints();
				function _tick(){
					switch(axis){
						case "x":
							if(iNow<0){
								iNow=count-1;
								oUl.css("left",-count*liWidth);
							}
							oUl.stop().animate(
								{
									"left":-iNow*liWidth
								},
								{
								    easing:settings.type, 
								    duration: 500, 
								    complete: function(){
										if(iNow==count){
											iNow=0;
											oUl.css("left",0);
										}
		                                changePoint();
									} 
								}
							);
							break;
						case "y":
							if(iNow<0){
								iNow=count-1;
								oUl.css("top",-count*liHeight);
							}
							oUl.stop().animate(
								{
									"top":-iNow*liHeight
								},
								{
								    easing:settings.type, 
								    duration: 500, 
								    complete: function(){
										if(iNow==count){
											iNow=0;
											oUl.css("top",0);
										}
		                                changePoint();
									} 
								}
							);
							break;
						case "opacity":
							if(iNow<0){
								iNow=count-1;
							}
							if(iNow==count){
								iNow=0;
							}
							aLi.eq(iNow).fadeIn().siblings().fadeOut();
							changePoint();
							break;
					}
				}
				function pre(){
					iNow--;
					_tick();
				}
				function next(){
					iNow++;
					_tick();
				}
				function begin(){
					clearInterval(timer);
					timer=setInterval(function(){
						next();
					},speed);
				}
                function addPoints(){
                	if(oPoints.length==0)return;
                    var sLi="";
                    for(var i=0;i<count;i++){
                        sLi+="<li></li>";
                    }
                    oPoints.append(sLi);
                    oPoints.find("li").on("click",function(){
                        iNow=$(this).index();
                        changePoint();
                        _tick();
                    }).eq(0).addClass(pointClass);
                }
                function changePoint(){
                	if(oPoints.length==0)return;
                    oPoints.find("li").removeClass(pointClass).eq(iNow).addClass(pointClass);
                }
			});
		}
	});
});

(function(g){var n,l,G="",e="4.1.0",y=Math.PI,i=y/2,m="ontouchstart" in window,s=(m)?{down:"touchstart",move:"touchmove",up:"touchend",over:"touchstart",out:"touchend"}:{down:"mousedown",move:"mousemove",up:"mouseup",over:"mouseover",out:"mouseout"},z={backward:[],forward:["br"],all:["br"]},j=["single","double"],r=["ltr","rtl"],d={acceleration:true,display:"double",duration:600,page:1,gradients:true,turnCorners:"bl,br",when:null},a={cornerSize:400},C=6,D={init:function(I){n="WebKitCSSMatrix" in window||"MozPerspective" in document.body.style;l=F();G=x();var J,L=this,N=0,M=this.data(),K=this.children();I=g.extend({width:this.width(),height:this.height(),direction:this.attr("dir")||this.css("direction")||"ltr"},d,I);M.opts=I;M.pageObjs={};M.pages={};M.pageWrap={};M.pageZoom={};M.pagePlace={};M.pageMv=[];M.zoom=1;M.totalPages=I.pages||0;M.eventHandlers={touchStart:g.proxy(D._touchStart,this),touchMove:g.proxy(D._touchMove,this),touchEnd:g.proxy(D._touchEnd,this),start:g.proxy(D._eventStart,this)};if(I.when){for(J in I.when){if(c(J,I.when)){this.bind(J,I.when[J])}}}this.css({position:"relative",width:I.width,height:I.height});this.turn("display",I.display);if(I.direction!==""){this.turn("direction",I.direction)}if(n&&!m&&I.acceleration){this.transform(o(0,0,true))}for(J=0;J<K.length;J++){if(g(K[J]).attr("ignore")!="1"){this.turn("addPage",K[J],++N)}}g(this).bind(s.down,M.eventHandlers.touchStart).bind("end",D._eventEnd).bind("pressed",D._eventPressed).bind("released",D._eventReleased).bind("flip",D._flip);g(this).parent().bind("start",M.eventHandlers.start);g(document).bind(s.move,M.eventHandlers.touchMove).bind(s.up,M.eventHandlers.touchEnd);this.turn("page",I.page);M.done=true;return this},addPage:function(I,O){var L,K,J=false,N=this.data(),M=N.totalPages+1;if(N.destroying){return false}if((L=/\bp([0-9]+)\b/.exec(g(I).attr("class")))){O=parseInt(L[1],10)}if(O){if(O==M){J=true}else{if(O>M){throw E('Page "'+O+'" cannot be inserted')}}}else{O=M;J=true}if(O>=1&&O<=M){if(N.display=="double"){K=(O%2)?" odd":" even"}else{K=""}if(N.done){this.turn("stop")}if(O in N.pageObjs){D._movePages.call(this,O,1)}if(J){N.totalPages=M}N.pageObjs[O]=g(I).css({"float":"left"}).addClass("page p"+O+K);if(!k()&&N.pageObjs[O].hasClass("hard")){N.pageObjs[O].removeClass("hard")}D._addPage.call(this,O);D._removeFromDOM.call(this)}return this},_addPage:function(K){var J=this.data(),I=J.pageObjs[K];if(I){if(D._necessPage.call(this,K)){if(!J.pageWrap[K]){J.pageWrap[K]=g("<div/>",{"class":"page-wrapper",page:K,css:{position:"absolute",overflow:"hidden"}});this.append(J.pageWrap[K]);if(!J.pagePlace[K]){J.pagePlace[K]=K;J.pageObjs[K].appendTo(J.pageWrap[K])}var L=D._pageSize.call(this,K,true);I.css({width:L.width,height:L.height});J.pageWrap[K].css(L)}if(J.pagePlace[K]==K){D._makeFlip.call(this,K)}}else{J.pagePlace[K]=0;if(J.pageObjs[K]){J.pageObjs[K].remove()}}}},hasPage:function(I){return c(I,this.data().pageObjs)},center:function(L){var K=this.data(),J=g(this).turn("size"),M=0;if(!K.noCenter){if(K.display=="double"){var I=this.turn("view",L||K.tpage||K.page);if(K.direction=="ltr"){if(!I[0]){M-=J.width/4}else{if(!I[1]){M+=J.width/4}}}else{if(!I[0]){M+=J.width/4}else{if(!I[1]){M-=J.width/4}}}}g(this).css({marginLeft:M})}return this},destroy:function(){var L,I=this,K=this.data(),J=["end","first","flip","last","pressed","released","start","turning","turned","zooming","missing"];if(u("destroying",this)=="prevented"){return}K.destroying=true;g.each(J,function(N,M){I.unbind(M)});this.parent().unbind("start",K.eventHandlers.start);g(document).unbind(s.move,K.eventHandlers.touchMove).unbind(s.up,K.eventHandlers.touchEnd);while(K.totalPages!==0){this.turn("removePage",K.totalPages)}if(K.fparent){K.fparent.remove()}if(K.shadow){K.shadow.remove()}this.removeData();K=null;return this},is:function(){return typeof(this.data().pages)=="object"},zoom:function(L){var N=this.data();if(typeof(L)=="number"){if(L<0.001||L>100){throw E(L+" is not a value for zoom")}if(u("zooming",this,[L,N.zoom])=="prevented"){return this}var K=this.turn("size"),P=this.turn("view"),O=1/N.zoom,M=Math.round(K.width*O*L),I=Math.round(K.height*O*L);N.zoom=L;g(this).turn("stop").turn("size",M,I);if(N.opts.autoCenter){this.turn("center")}D._updateShadow.call(this);for(var J=0;J<P.length;J++){if(P[J]&&N.pageZoom[P[J]]!=N.zoom){this.trigger("zoomed",[P[J],P,N.pageZoom[P[J]],N.zoom]);N.pageZoom[P[J]]=N.zoom}}return this}else{return N.zoom}},_pageSize:function(N,I){var M=this.data(),O={};if(M.display=="single"){O.width=this.width();O.height=this.height();if(I){O.top=0;O.left=0;O.right="auto"}}else{var J=this.width()/2,K=this.height();if(M.pageObjs[N].hasClass("own-size")){O.width=M.pageObjs[N].width();O.height=M.pageObjs[N].height()}else{O.width=J;O.height=K}if(I){var L=N%2;O.top=(K-O.height)/2;if(M.direction=="ltr"){O[(L)?"right":"left"]=J-O.width;O[(L)?"left":"right"]="auto"}else{O[(L)?"left":"right"]=J-O.width;O[(L)?"right":"left"]="auto"}}}return O},_makeFlip:function(K){var J=this.data();if(!J.pages[K]&&J.pagePlace[K]==K){var L=J.display=="single",I=K%2;J.pages[K]=J.pageObjs[K].css(D._pageSize.call(this,K)).flip({page:K,next:(I||L)?K+1:K-1,turn:this}).flip("disable",J.disabled);D._setPageLoc.call(this,K);J.pageZoom[K]=J.zoom}return J.pages[K]},_makeRange:function(){var K,I,J=this.data();if(J.totalPages<1){return}I=this.turn("range");for(K=I[0];K<=I[1];K++){D._addPage.call(this,K)}},range:function(M){var I,N,K,J,L=this.data();M=M||L.tpage||L.page||1;J=D._view.call(this,M);if(M<1||M>L.totalPages){throw E('"'+M+'" is not a valid page')}J[1]=J[1]||J[0];if(J[0]>=1&&J[1]<=L.totalPages){I=Math.floor((C-2)/2);if(L.totalPages-J[1]>J[0]){N=Math.min(J[0]-1,I);K=2*I-N}else{K=Math.min(L.totalPages-J[1],I);N=2*I-K}}else{N=C-1;K=C-1}return[Math.max(1,J[0]-N),Math.min(L.totalPages,J[1]+K)]},_necessPage:function(J){if(J===0){return true}var I=this.turn("range");return this.data().pageObjs[J].hasClass("fixed")||(J>=I[0]&&J<=I[1])},_removeFromDOM:function(){var J,I=this.data();for(J in I.pageWrap){if(c(J,I.pageWrap)&&!D._necessPage.call(this,J)){D._removePageFromDOM.call(this,J)}}},_removePageFromDOM:function(K){var J=this.data();if(J.pages[K]){var I=J.pages[K].data();A._moveFoldingPage.call(J.pages[K],false);if(I.f&&I.f.fwrapper){I.f.fwrapper.remove()}J.pages[K].removeData();J.pages[K].remove();delete J.pages[K]}if(J.pageObjs[K]){J.pageObjs[K].remove()}if(J.pageWrap[K]){J.pageWrap[K].remove();delete J.pageWrap[K]}D._removeMv.call(this,K);delete J.pagePlace[K];delete J.pageZoom[K]},removePage:function(J){var I=this.data();if(J=="*"){while(I.totalPages!==0){this.turn("removePage",I.totalPages)}}else{if(J<1||J>I.totalPages){throw E("The page "+J+" doesn't exist")}if(I.pageObjs[J]){this.turn("stop");D._removePageFromDOM.call(this,J);delete I.pageObjs[J]}D._movePages.call(this,J,-1);I.totalPages=I.totalPages-1;if(I.page>I.totalPages){I.page=null;D._fitPage.call(this,I.totalPages)}else{D._makeRange.call(this);this.turn("update")}}return this},_movePages:function(O,N){var L,J=this,K=this.data(),M=K.display=="single",I=function(S){var Q=S+N,R=Q%2,P=(R)?" odd ":" even ";if(K.pageObjs[S]){K.pageObjs[Q]=K.pageObjs[S].removeClass("p"+S+" odd even").addClass("p"+Q+P)}if(K.pagePlace[S]&&K.pageWrap[S]){K.pagePlace[Q]=Q;if(K.pageObjs[Q].hasClass("fixed")){K.pageWrap[Q]=K.pageWrap[S].attr("page",Q)}else{K.pageWrap[Q]=K.pageWrap[S].css(D._pageSize.call(J,Q,true)).attr("page",Q)}if(K.pages[S]){K.pages[Q]=K.pages[S].flip("options",{page:Q,next:(M||R)?Q+1:Q-1})}if(N){delete K.pages[S];delete K.pagePlace[S];delete K.pageZoom[S];delete K.pageObjs[S];delete K.pageWrap[S]}}};if(N>0){for(L=K.totalPages;L>=O;L--){I(L)}}else{for(L=O;L<=K.totalPages;L++){I(L)}}},display:function(K){var J=this.data(),L=J.display;if(K===undefined){return L}else{if(g.inArray(K,j)==-1){throw E('"'+K+'" is not a value for display')}switch(K){case"single":if(!J.pageObjs[0]){this.turn("stop").css({overflow:"hidden"});J.pageObjs[0]=g("<div />",{"class":"page p-temporal"}).css({width:this.width(),height:this.height()}).appendTo(this)}this.addClass("shadow");break;case"double":if(J.pageObjs[0]){this.turn("stop").css({overflow:""});J.pageObjs[0].remove();delete J.pageObjs[0]}this.removeClass("shadow");break}J.display=K;if(L){var I=this.turn("size");D._movePages.call(this,1,0);this.turn("size",I.width,I.height).turn("update")}return this}},direction:function(I){var J=this.data();if(I===undefined){return J.direction}else{I=I.toLowerCase();if(g.inArray(I,r)==-1){throw E('"'+I+'" is not a value for direction')}if(I=="rtl"){g(this).attr("dir","ltr").css({direction:"ltr"})}J.direction=I;if(J.done){this.turn("size",g(this).width(),g(this).height())}return this}},animating:function(){return this.data().pageMv.length>0},corner:function(){var I,K,J=this.data();for(K in J.pages){if(c(K,J.pages)){if((I=J.pages[K].flip("corner"))){return I}}}return false},data:function(){return this.data()},disable:function(J){var L,K=this.data(),I=this.turn("view");K.disabled=J===undefined||J===true;for(L in K.pages){if(c(L,K.pages)){K.pages[L].flip("disable",(K.disabled)?true:g.inArray(parseInt(L,10),I)==-1)}}return this},disabled:function(I){if(I===undefined){return this.data().disabled===true}else{return this.turn("disable",I)}},size:function(K,I){if(K===undefined||I===undefined){return{width:this.width(),height:this.height()}}else{this.turn("stop");var M,N,L=this.data(),J=(L.display=="double")?K/2:K;this.css({width:K,height:I});if(L.pageObjs[0]){L.pageObjs[0].css({width:J,height:I})}for(M in L.pageWrap){if(!c(M,L.pageWrap)){continue}N=D._pageSize.call(this,M,true);L.pageObjs[M].css({width:N.width,height:N.height});L.pageWrap[M].css(N);if(L.pages[M]){L.pages[M].css({width:N.width,height:N.height})}}this.turn("resize");return this}},resize:function(){var J,I=this.data();if(I.pages[0]){I.pageWrap[0].css({left:-this.width()});I.pages[0].flip("resize",true)}for(J=1;J<=I.totalPages;J++){if(I.pages[J]){I.pages[J].flip("resize",true)}}D._updateShadow.call(this);if(I.opts.autoCenter){this.turn("center")}},_removeMv:function(K){var I,J=this.data();for(I=0;I<J.pageMv.length;I++){if(J.pageMv[I]==K){J.pageMv.splice(I,1);return true}}return false},_addMv:function(J){var I=this.data();D._removeMv.call(this,J);I.pageMv.push(J)},_view:function(J){var I=this.data();J=J||I.page;if(I.display=="double"){return(J%2)?[J-1,J]:[J,J+1]}else{return[J]}},view:function(K){var J=this.data(),I=D._view.call(this,K);if(J.display=="double"){return[(I[0]>0)?I[0]:0,(I[1]<=J.totalPages)?I[1]:0]}else{return[(I[0]>0&&I[0]<=J.totalPages)?I[0]:0]}},stop:function(N,I){if(this.turn("animating")){var J,K,M,L=this.data();if(L.tpage){L.page=L.tpage;delete L.tpage}for(J=0;J<L.pageMv.length;J++){if(!L.pageMv[J]||L.pageMv[J]===N){continue}M=L.pages[L.pageMv[J]];K=M.data().f.opts;M.flip("hideFoldedPage",I);if(!I){A._moveFoldingPage.call(M,false)}if(K.force){K.next=(K.page%2===0)?K.page-1:K.page+1;delete K.force}}}this.turn("update");return this},pages:function(I){var K=this.data();if(I){if(I<K.totalPages){for(var J=K.totalPages;J>I;J--){this.turn("removePage",J)}}K.totalPages=I;D._fitPage.call(this,K.page);return this}else{return K.totalPages}},_missing:function(L){var K=this.data();if(K.totalPages<1){return}var M,I=this.turn("range",L),J=[];for(M=I[0];M<=I[1];M++){if(!K.pageObjs[M]){J.push(M)}}if(J.length>0){this.trigger("missing",[J])}},_fitPage:function(K){var J=this.data(),L=this.turn("view",K);D._missing.call(this,K);if(!J.pageObjs[K]){return}J.page=K;this.turn("stop");for(var I=0;I<L.length;I++){if(L[I]&&J.pageZoom[L[I]]!=J.zoom){this.trigger("zoomed",[L[I],L,J.pageZoom[L[I]],J.zoom]);J.pageZoom[L[I]]=J.zoom}}D._removeFromDOM.call(this);D._makeRange.call(this);D._updateShadow.call(this);this.trigger("turned",[K,L]);this.turn("update");if(J.opts.autoCenter){this.turn("center")}},_turnPage:function(R){var Q,N,M=this.data(),K=M.pagePlace[R],S=this.turn("view"),J=this.turn("view",R);if(M.page!=R){var P=M.page;if(u("turning",this,[R,J])=="prevented"){if(P==M.page&&g.inArray(K,M.pageMv)!=-1){M.pages[K].flip("hideFoldedPage",true)}return}if(g.inArray(1,J)!=-1){this.trigger("first")}if(g.inArray(M.totalPages,J)!=-1){this.trigger("last")}}if(M.display=="single"){Q=S[0];N=J[0]}else{if(S[1]&&R>S[1]){Q=S[1];N=J[0]}else{if(S[0]&&R<S[0]){Q=S[0];N=J[1]}}}var O=M.opts.turnCorners.split(","),L=M.pages[Q].data().f,I=L.opts,T=L.point;D._missing.call(this,R);if(!M.pageObjs[R]){return}this.turn("stop");M.page=R;D._makeRange.call(this);M.tpage=N;if(I.next!=N){I.next=N;I.force=true}this.turn("update");L.point=T;if(L.effect=="hard"){if(M.direction=="ltr"){M.pages[Q].flip("turnPage",(R>Q)?"r":"l")}else{M.pages[Q].flip("turnPage",(R>Q)?"l":"r")}}else{if(M.direction=="ltr"){M.pages[Q].flip("turnPage",O[(R>Q)?1:0])}else{M.pages[Q].flip("turnPage",O[(R>Q)?0:1])}}},page:function(J){var I=this.data();if(J===undefined){return I.page}else{if(!I.disabled&&!I.destroying){J=parseInt(J,10);if(J>0&&J<=I.totalPages){if(J!=I.page){if(!I.done||g.inArray(J,this.turn("view"))!=-1){D._fitPage.call(this,J)}else{D._turnPage.call(this,J)}}return this}else{throw E("The page "+J+" does not exist")}}}},next:function(){return this.turn("page",Math.min(this.data().totalPages,D._view.call(this,this.data().page).pop()+1))},previous:function(){return this.turn("page",Math.max(1,D._view.call(this,this.data().page).shift()-1))},peel:function(K,J){var M=this.data(),I=this.turn("view");J=(J===undefined)?true:J===true;if(K===false){this.turn("stop",null,J)}else{if(M.display=="single"){M.pages[M.page].flip("peel",K,J)}else{var L;if(M.direction=="ltr"){L=(K.indexOf("l")!=-1)?I[0]:I[1]}else{L=(K.indexOf("l")!=-1)?I[1]:I[0]}if(M.pages[L]){M.pages[L].flip("peel",K,J)}}}return this},_addMotionPage:function(){var K=g(this).data().f.opts,J=K.turn,I=J.data();D._addMv.call(J,K.page)},_eventStart:function(M,J,I){var L=J.turn.data(),K=L.pageZoom[J.page];if(M.isDefaultPrevented()){D._updateShadow.call(J.turn);return}if(K&&K!=L.zoom){J.turn.trigger("zoomed",[J.page,J.turn.turn("view",J.page),K,L.zoom]);L.pageZoom[J.page]=L.zoom}if(L.display=="single"&&I){if((I.charAt(1)=="l"&&L.direction=="ltr")||(I.charAt(1)=="r"&&L.direction=="rtl")){J.next=(J.next<J.page)?J.next:J.page-1;J.force=true}else{J.next=(J.next>J.page)?J.next:J.page+1}}D._addMotionPage.call(M.target);D._updateShadow.call(J.turn)},_eventEnd:function(O,M,L){var K=g(O.target),N=K.data().f,J=M.turn,I=J.data();if(L){var P=I.tpage||I.page;if(P==M.next||P==M.page){delete I.tpage;D._fitPage.call(J,P||M.next,true)}}else{D._removeMv.call(J,M.page);D._updateShadow.call(J);J.turn("update")}},_eventPressed:function(N){var M,L=g(N.target).data().f,K=L.opts.turn,J=K.data(),I=J.pages;J.mouseAction=true;K.turn("update");return L.time=new Date().getTime()},_eventReleased:function(O,I){var N,M=g(O.target),L=M.data().f,K=L.opts.turn,J=K.data();if(J.display=="single"){N=(I.corner=="br"||I.corner=="tr")?I.x<M.width()/2:I.x>M.width()/2}else{N=I.x<0||I.x>M.width()}if((new Date()).getTime()-L.time<200||N){O.preventDefault();D._turnPage.call(K,L.opts.next)}J.mouseAction=false},_flip:function(J){J.stopPropagation();var I=g(J.target).data().f.opts;I.turn.trigger("turn",[I.next]);if(I.turn.data().opts.autoCenter){I.turn.turn("center",I.next)}},_touchStart:function(){var J=this.data();for(var I in J.pages){if(c(I,J.pages)&&A._eventStart.apply(J.pages[I],arguments)===false){return false}}},_touchMove:function(){var J=this.data();for(var I in J.pages){if(c(I,J.pages)){A._eventMove.apply(J.pages[I],arguments)}}},_touchEnd:function(){var J=this.data();for(var I in J.pages){if(c(I,J.pages)){A._eventEnd.apply(J.pages[I],arguments)}}},calculateZ:function(U){var L,O,S,J,T,N=this,K=this.data(),R=this.turn("view"),M=R[0]||R[1],Q=U.length-1,I={pageZ:{},partZ:{},pageV:{}},P=function(W){var V=N.turn("view",W);if(V[0]){I.pageV[V[0]]=true}if(V[1]){I.pageV[V[1]]=true}};for(L=0;L<=Q;L++){O=U[L];S=K.pages[O].data().f.opts.next;J=K.pagePlace[O];P(O);P(S);T=(K.pagePlace[S]==S)?S:O;I.pageZ[T]=K.totalPages-Math.abs(M-T);I.partZ[J]=K.totalPages*2-Q+L}return I},update:function(){var O,M=this.data();if(this.turn("animating")&&M.pageMv[0]!==0){var I,J,L,P=this.turn("calculateZ",M.pageMv),R=this.turn("corner"),Q=this.turn("view"),K=this.turn("view",M.tpage);for(O in M.pageWrap){if(!c(O,M.pageWrap)){continue}L=M.pageObjs[O].hasClass("fixed");M.pageWrap[O].css({display:(P.pageV[O]||L)?"":"none",zIndex:(M.pageObjs[O].hasClass("hard")?P.partZ[O]:P.pageZ[O])||(L?-1:0)});if((I=M.pages[O])){I.flip("z",P.partZ[O]||null);if(P.pageV[O]){I.flip("resize")}if(M.tpage){I.flip("hover",false).flip("disable",g.inArray(parseInt(O,10),M.pageMv)==-1&&O!=K[0]&&O!=K[1])}else{I.flip("hover",R===false).flip("disable",O!=Q[0]&&O!=Q[1])}}}}else{for(O in M.pageWrap){if(!c(O,M.pageWrap)){continue}var N=D._setPageLoc.call(this,O);if(M.pages[O]){M.pages[O].flip("disable",M.disabled||N!=1).flip("hover",true).flip("z",null)}}}return this},_updateShadow:function(){var K,J,P,O=this.data(),N=this.width(),I=this.height(),L=(O.display=="single")?N:N/2;K=this.turn("view");if(!O.shadow){O.shadow=g("<div />",{"class":"shadow",css:t(0,0,0).css}).appendTo(this)}for(var M=0;M<O.pageMv.length;M++){if(!K[0]||!K[1]){break}K=this.turn("view",O.pages[O.pageMv[M]].data().f.opts.next);J=this.turn("view",O.pageMv[M]);K[0]=K[0]&&J[0];K[1]=K[1]&&J[1]}if(!K[0]){P=(O.direction=="ltr")?1:2}else{if(!K[1]){P=(O.direction=="ltr")?2:1}else{P=3}}switch(P){case 1:O.shadow.css({width:L,height:I,top:0,left:L});break;case 2:O.shadow.css({width:L,height:I,top:0,left:0});break;case 3:O.shadow.css({width:N,height:I,top:0,left:0});break}},_setPageLoc:function(K){var J=this.data(),I=this.turn("view"),L=0;if(K==I[0]||K==I[1]){L=1}else{if((J.display=="single"&&K==I[0]+1)||(J.display=="double"&&K==I[0]-2||K==I[1]+2)){L=2}}if(!this.turn("animating")){switch(L){case 1:J.pageWrap[K].css({zIndex:J.totalPages,display:""});break;case 2:J.pageWrap[K].css({zIndex:J.totalPages-1,display:""});break;case 0:J.pageWrap[K].css({zIndex:0,display:(J.pageObjs[K].hasClass("fixed"))?"":"none"});break}}return L},options:function(J){if(J===undefined){return this.data().opts}else{var K=this.data();g.extend(K.opts,J);if(J.pages){this.turn("pages",J.pages)}if(J.page){this.turn("page",J.page)}if(J.display){this.turn("display",J.display)}if(J.direction){this.turn("direction",J.direction)}if(J.width&&J.height){this.turn("size",J.width,J.height)}if(J.when){for(var I in J.when){if(c(I,J.when)){this.unbind(I).bind(I,J.when[I])}}}return this}},version:function(){return e}},A={init:function(I){this.data({f:{disabled:false,hover:false,effect:(this.hasClass("hard"))?"hard":"sheet"}});this.flip("options",I);A._addPageWrapper.call(this);return this},setData:function(J){var I=this.data();I.f=g.extend(I.f,J);return this},options:function(I){var J=this.data().f;if(I){A.setData.call(this,{opts:g.extend({},J.opts||a,I)});return this}else{return J.opts}},z:function(J){var I=this.data().f;I.opts["z-index"]=J;if(I.fwrapper){I.fwrapper.css({zIndex:J||parseInt(I.parent.css("z-index"),10)||0})}return this},_cAllowed:function(){var L=this.data().f,K=L.opts.page,I=L.opts.turn.data(),J=K%2;if(L.effect=="hard"){return(I.direction=="ltr")?[(J)?"r":"l"]:[(J)?"l":"r"]}else{if(I.display=="single"){if(K==1){return(I.direction=="ltr")?z.forward:z.backward}else{if(K==I.totalPages){return(I.direction=="ltr")?z.backward:z.forward}else{return z.all}}}else{return(I.direction=="ltr")?z[(J)?"forward":"backward"]:z[(J)?"backward":"forward"]}}},_cornerActivated:function(O){var M=this.data().f,L=this.width(),K=this.height(),J={x:O.x,y:O.y,corner:""},N=M.opts.cornerSize;if(J.x<=0||J.y<=0||J.x>=L||J.y>=K){return false}var I=A._cAllowed.call(this);switch(M.effect){case"hard":if(J.x>L-N){J.corner="r"}else{if(J.x<N){J.corner="l"}else{return false}}break;case"sheet":if(J.y<N){J.corner+="t"}else{if(J.y>=K-N){J.corner+="b"}else{return false}}if(J.x<=N){J.corner+="l"}else{if(J.x>=L-N){J.corner+="r"}else{return false}}break}return(!J.corner||g.inArray(J.corner,I)==-1)?false:J},_isIArea:function(I){var J=this.data().f.parent.offset();I=(m&&I.originalEvent)?I.originalEvent.touches[0]:I;return A._cornerActivated.call(this,{x:I.pageX-J.left,y:I.pageY-J.top})},_c:function(J,I){I=I||0;switch(J){case"tl":return h(I,I);case"tr":return h(this.width()-I,I);case"bl":return h(I,this.height()-I);case"br":return h(this.width()-I,this.height()-I);case"l":return h(I,0);case"r":return h(this.width()-I,0)}},_c2:function(I){switch(I){case"tl":return h(this.width()*2,0);case"tr":return h(-this.width(),0);case"bl":return h(this.width()*2,this.height());case"br":return h(-this.width(),this.height());case"l":return h(this.width()*2,0);case"r":return h(-this.width(),0)}},_foldingPage:function(){var J=this.data().f;if(!J){return}var I=J.opts;if(I.turn){J=I.turn.data();if(J.display=="single"){return(I.next>1||I.page>1)?J.pageObjs[0]:null}else{return J.pageObjs[I.next]}}},_backGradient:function(){var J=this.data().f,I=J.opts.turn.data(),K=I.opts.gradients&&(I.display=="single"||(J.opts.page!=2&&J.opts.page!=I.totalPages-1));if(K&&!J.bshadow){J.bshadow=g("<div/>",t(0,0,1)).css({position:"",width:this.width(),height:this.height()}).appendTo(J.parent)}return K},type:function(){return this.data().f.effect},resize:function(L){var N=this.data().f,K=N.opts.turn.data(),M=this.width(),I=this.height();switch(N.effect){case"hard":if(L){N.wrapper.css({width:M,height:I});N.fpage.css({width:M,height:I});if(K.opts.gradients){N.ashadow.css({width:M,height:I});N.bshadow.css({width:M,height:I})}}break;case"sheet":if(L){var J=Math.round(Math.sqrt(Math.pow(M,2)+Math.pow(I,2)));N.wrapper.css({width:J,height:J});N.fwrapper.css({width:J,height:J}).children(":first-child").css({width:M,height:I});N.fpage.css({width:M,height:I});if(K.opts.gradients){N.ashadow.css({width:M,height:I})}if(A._backGradient.call(this)){N.bshadow.css({width:M,height:I})}}if(N.parent.is(":visible")){var O=w(N.parent[0]);N.fwrapper.css({top:O.top,left:O.left});O=w(N.opts.turn[0]);N.fparent.css({top:-O.top,left:-O.left})}this.flip("z",N.opts["z-index"]);break}},_addPageWrapper:function(){var L,K=this.data().f,O=K.opts.turn.data(),M=this.parent();K.parent=M;if(!K.wrapper){switch(K.effect){case"hard":var P={};P[G+"transform-style"]="preserve-3d";P[G+"backface-visibility"]="hidden";K.wrapper=g("<div/>",t(0,0,2)).css(P).appendTo(M).prepend(this);K.fpage=g("<div/>",t(0,0,1)).css(P).appendTo(M);if(O.opts.gradients){K.ashadow=g("<div/>",t(0,0,0)).hide().appendTo(M);K.bshadow=g("<div/>",t(0,0,0))}break;case"sheet":var J=this.width(),N=this.height(),Q=Math.round(Math.sqrt(Math.pow(J,2)+Math.pow(N,2)));K.fparent=K.opts.turn.data().fparent;if(!K.fparent){var I=g("<div/>",{css:{"pointer-events":"none"}}).hide();I.data().flips=0;I.css(t(0,0,"auto","visible").css).appendTo(K.opts.turn);K.opts.turn.data().fparent=I;K.fparent=I}this.css({position:"absolute",top:0,left:0,bottom:"auto",right:"auto"});K.wrapper=g("<div/>",t(0,0,this.css("z-index"))).appendTo(M).prepend(this);K.fwrapper=g("<div/>",t(M.offset().top,M.offset().left)).hide().appendTo(K.fparent);K.fpage=g("<div/>",t(0,0,0,"visible")).css({cursor:"default"}).appendTo(K.fwrapper);if(O.opts.gradients){K.ashadow=g("<div/>",t(0,0,1)).appendTo(K.fpage)}A.setData.call(this,K);break}}A.resize.call(this,true)},_fold:function(ac){var ar=this.data().f,ap=ar.opts.turn.data(),ak=A._c.call(this,ac.corner),I=this.width(),J=this.height();switch(ar.effect){case"hard":if(ac.corner=="l"){ac.x=Math.min(Math.max(ac.x,0),I*2)}else{ac.x=Math.max(Math.min(ac.x,I),-I)}var X,ad,am,aj,ab,S=ap.totalPages,V=ar.opts["z-index"]||S,ag={overflow:"visible"},aq=(ak.x)?(ak.x-ac.x)/I:ac.x/I,W=aq*90,L=W<90;switch(ac.corner){case"l":aj="0% 50%";ab="100% 50%";if(L){X=0;ad=ar.opts.next-1>0;am=1}else{X="100%";ad=ar.opts.page+1<S;am=0}break;case"r":aj="100% 50%";ab="0% 50%";W=-W;I=-I;if(L){X=0;ad=ar.opts.next+1<S;am=0}else{X="-100%";ad=ar.opts.page!=1;am=1}break}ag[G+"perspective-origin"]=ab;ar.wrapper.transform("rotateY("+W+"deg)translate3d(0px, 0px, "+(this.attr("depth")||0)+"px)",ab);ar.fpage.transform("translateX("+I+"px) rotateY("+(180+W)+"deg)",aj);ar.parent.css(ag);if(L){aq=-aq+1;ar.wrapper.css({zIndex:V+1});ar.fpage.css({zIndex:V})}else{aq=aq-1;ar.wrapper.css({zIndex:V});ar.fpage.css({zIndex:V+1})}if(ap.opts.gradients){if(ad){ar.ashadow.css({display:"",left:X,backgroundColor:"rgba(0,0,0,"+(0.5*aq)+")"}).transform("rotateY(0deg)")}else{ar.ashadow.hide()}ar.bshadow.css({opacity:-aq+1});if(L){if(ar.bshadow.parent()[0]!=ar.wrapper[0]){ar.bshadow.appendTo(ar.wrapper)}}else{if(ar.bshadow.parent()[0]!=ar.fpage[0]){ar.bshadow.appendTo(ar.fpage)}}b(ar.bshadow,h(am*100,0),h((-am+1)*100,0),[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]],2)}break;case"sheet":var af=this,au=0,al=0,ae,Q,N,M,av,Z,aa,ah,P=h(0,0),T=h(0,0),at=h(0,0),an=A._foldingPage.call(this),ai=Math.tan(al),U=ap.opts.acceleration,ao=ar.wrapper.height(),O=ac.corner.substr(0,1)=="t",K=ac.corner.substr(1,1)=="l",R=function(){var aG=h(0,0);var aH=h(0,0);aG.x=(ak.x)?ak.x-ac.x:ac.x;if(!l){aG.y=0}else{aG.y=(ak.y)?ak.y-ac.y:ac.y}aH.x=(K)?I-aG.x/2:ac.x+aG.x/2;aH.y=aG.y/2;var aA=i-Math.atan2(aG.y,aG.x),ay=aA-Math.atan2(aH.y,aH.x),ax=Math.max(0,Math.sin(ay)*Math.sqrt(Math.pow(aH.x,2)+Math.pow(aH.y,2)));au=q(aA);at=h(ax*Math.sin(aA),ax*Math.cos(aA));if(aA>i){at.x=at.x+Math.abs(at.y*aG.y/aG.x);at.y=0;if(Math.round(at.x*Math.tan(y-aA))<J){ac.y=Math.sqrt(Math.pow(J,2)+2*aH.x*aG.x);if(O){ac.y=J-ac.y}return R()}}if(aA>i){var aE=y-aA,aF=ao-J/Math.sin(aE);P=h(Math.round(aF*Math.cos(aE)),Math.round(aF*Math.sin(aE)));if(K){P.x=-P.x}if(O){P.y=-P.y}}Q=Math.round(at.y/Math.tan(aA)+at.x);var aD=I-Q,aB=aD*Math.cos(aA*2),az=aD*Math.sin(aA*2);T=h(Math.round((K?aD-aB:Q+aB)),Math.round((O)?az:J-az));if(ap.opts.gradients){Z=aD*Math.sin(aA);var aw=A._c2.call(af,ac.corner),aC=Math.sqrt(Math.pow(aw.x-ac.x,2)+Math.pow(aw.y-ac.y,2))/I;ah=Math.sin(i*((aC>1)?2-aC:aC));aa=Math.min(aC,1);av=Z>100?(Z-100)/Z:0;N=h(Z*Math.sin(aA)/I*100,Z*Math.cos(aA)/J*100);if(A._backGradient.call(af)){M=h(Z*1.2*Math.sin(aA)/I*100,Z*1.2*Math.cos(aA)/J*100);if(!K){M.x=100-M.x}if(!O){M.y=100-M.y}}}at.x=Math.round(at.x);at.y=Math.round(at.y);return true},Y=function(aC,aB,aE,aD){var aA=["0","auto"],aG=(I-ao)*aE[0]/100,az=(J-ao)*aE[1]/100,ay={left:aA[aB[0]],top:aA[aB[1]],right:aA[aB[2]],bottom:aA[aB[3]]},ax={},aw=(aD!=90&&aD!=-90)?(K?-1:1):0,aF=aE[0]+"% "+aE[1]+"%";af.css(ay).transform(B(aD)+o(aC.x+aw,aC.y,U),aF);ar.fpage.css(ay).transform(B(aD)+o(aC.x+T.x-P.x-I*aE[0]/100,aC.y+T.y-P.y-J*aE[1]/100,U)+B((180/aD-2)*aD),aF);ar.wrapper.transform(o(-aC.x+aG-aw,-aC.y+az,U)+B(-aD),aF);ar.fwrapper.transform(o(-aC.x+P.x+aG,-aC.y+P.y+az,U)+B(-aD),aF);if(ap.opts.gradients){if(aE[0]){N.x=100-N.x}if(aE[1]){N.y=(100-N.y)}ax["box-shadow"]="0 0 20px rgba(0,0,0,"+(0.5*ah)+")";an.css(ax);b(ar.ashadow,h(K?100:0,O?0:100),h(N.x,N.y),[[av,"rgba(0,0,0,0)"],[((1-av)*0.8)+av,"rgba(0,0,0,"+(0.2*aa)+")"],[1,"rgba(255,255,255,"+(0.2*aa)+")"]],3,al);if(A._backGradient.call(af)){b(ar.bshadow,h(K?0:100,O?0:100),h(M.x,M.y),[[0.6,"rgba(0,0,0,0)"],[0.8,"rgba(0,0,0,"+(0.3*aa)+")"],[1,"rgba(0,0,0,0)"]],3)}}};switch(ac.corner){case"l":break;case"r":break;case"tl":ac.x=Math.max(ac.x,1);R();Y(at,[1,0,0,1],[100,0],au);break;case"tr":ac.x=Math.min(ac.x,I-1);R();Y(h(-at.x,at.y),[0,0,0,1],[0,0],-au);break;case"bl":ac.x=Math.max(ac.x,1);R();Y(h(at.x,-at.y),[1,1,0,0],[100,100],-au);break;case"br":ac.x=Math.min(ac.x,I-1);R();Y(h(-at.x,-at.y),[0,1,1,0],[0,100],au);break}break}ar.point=ac},_moveFoldingPage:function(K){var P=this.data().f;if(!P){return}var O=P.opts.turn,N=O.data(),J=N.pagePlace;if(K){var I=P.opts.next;if(J[I]!=P.opts.page){if(P.folding){A._moveFoldingPage.call(this,false)}var M=A._foldingPage.call(this);M.appendTo(P.fpage);J[I]=P.opts.page;P.folding=I}O.turn("update")}else{if(P.folding){if(N.pages[P.folding]){var L=N.pages[P.folding].data().f;N.pageObjs[P.folding].appendTo(L.wrapper)}else{if(N.pageWrap[P.folding]){N.pageObjs[P.folding].appendTo(N.pageWrap[P.folding])}}if(P.folding in J){J[P.folding]=P.folding}delete P.folding}}},_showFoldedPage:function(M,I){var Q=A._foldingPage.call(this),P=this.data(),K=P.f,J=K.visible;if(Q){if(!J||!K.point||K.point.corner!=M.corner){var O=(K.status=="hover"||K.status=="peel"||K.opts.turn.data().mouseAction)?M.corner:null;J=false;if(u("start",this,[K.opts,O])=="prevented"){return false}}if(I){var L=this,N=(K.point&&K.point.corner==M.corner)?K.point:A._c.call(this,M.corner,1);this.animatef({from:[N.x,N.y],to:[M.x,M.y],duration:500,frame:function(R){M.x=Math.round(R[0]);M.y=Math.round(R[1]);A._fold.call(L,M)}})}else{A._fold.call(this,M);if(P.effect&&!P.effect.turning){this.animatef(false)}}if(!J){switch(K.effect){case"hard":K.visible=true;A._moveFoldingPage.call(this,true);K.fpage.show();if(K.opts.shadows){K.bshadow.show()}break;case"sheet":K.visible=true;K.fparent.show().data().flips++;A._moveFoldingPage.call(this,true);K.fwrapper.show();if(K.bshadow){K.bshadow.show()}break}}return true}return false},hide:function(){var K=this.data().f,J=K.opts.turn.data(),I=A._foldingPage.call(this);switch(K.effect){case"hard":if(J.opts.gradients){K.bshadowLoc=0;K.bshadow.remove();K.ashadow.hide()}K.wrapper.transform("");K.fpage.hide();break;case"sheet":if((--K.fparent.data().flips)===0){K.fparent.hide()}this.css({left:0,top:0,right:"auto",bottom:"auto"}).transform("");K.wrapper.transform("");K.fwrapper.hide();if(K.bshadow){K.bshadow.hide()}I.transform("");break}K.visible=false;return this},hideFoldedPage:function(I){var J=this.data().f;if(!J.point){return}var L=this,R=J.point,K=function(){J.point=null;J.status="";L.flip("hide");L.trigger("end",[J.opts,false])};if(I){var N=A._c.call(this,R.corner),M=(R.corner.substr(0,1)=="t"),Q=(M)?Math.min(0,R.y-N.y)/2:Math.max(0,R.y-N.y)/2,P=h(R.x,R.y+Q),O=h(N.x,N.y-Q);this.animatef({from:0,to:1,frame:function(S){var T=p(R,P,O,N,S);R.x=T.x;R.y=T.y;A._fold.call(L,R)},complete:K,duration:800,hiding:true})}else{this.animatef(false);K()}},turnPage:function(L){var K=this,M=this.data().f,I=M.opts.turn.data();L={corner:(M.corner)?M.corner.corner:L||A._cAllowed.call(this)[0]};var N=M.point||A._c.call(this,L.corner,(M.opts.turn)?I.opts.elevation:0),J=A._c2.call(this,L.corner);this.trigger("flip").animatef({from:0,to:1,frame:function(O){var P=p(N,N,J,J,O);L.x=P.x;L.y=P.y;A._showFoldedPage.call(K,L)},complete:function(){K.trigger("end",[M.opts,true])},duration:I.opts.duration,turning:true});M.corner=null},moving:function(){return"effect" in this.data()},isTurning:function(){return this.flip("moving")&&this.data().effect.turning},corner:function(){return this.data().f.corner},_eventStart:function(K){var J=this.data().f,I=J.opts.turn;if(!J.corner&&!J.disabled&&!this.flip("isTurning")&&J.opts.page==I.data().pagePlace[J.opts.page]){J.corner=A._isIArea.call(this,K);if(J.corner&&A._foldingPage.call(this)){this.trigger("pressed",[J.point]);A._showFoldedPage.call(this,J.corner);return false}else{J.corner=null}}},_eventMove:function(L){var K=this.data().f;if(!K.disabled){L=(m)?L.originalEvent.touches:[L];if(K.corner){var M=K.parent.offset();K.corner.x=L[0].pageX-M.left;K.corner.y=L[0].pageY-M.top;A._showFoldedPage.call(this,K.corner)}else{if(K.hover&&!this.data().effect&&this.is(":visible")){var I=A._isIArea.call(this,L[0]);if(I){if((K.effect=="sheet"&&I.corner.length==2)||K.effect=="hard"){K.status="hover";var J=A._c.call(this,I.corner,K.opts.cornerSize/2);I.x=J.x;I.y=J.y;A._showFoldedPage.call(this,I,true)}}else{if(K.status=="hover"){K.status="";A.hideFoldedPage.call(this,true)}}}}}},_eventEnd:function(){var J=this.data().f,I=J.corner;if(!J.disabled&&I){if(u("released",this,[J.point||I])!="prevented"){A.hideFoldedPage.call(this,true)}}J.corner=null},disable:function(I){A.setData.call(this,{disabled:I});return this},hover:function(I){A.setData.call(this,{hover:I});return this},peel:function(K,J){var L=this.data().f;if(K){if(g.inArray(K,z.all)==-1){throw E("Corner "+K+" is not permitted")}if(g.inArray(K,A._cAllowed.call(this))!=-1){var I=A._c.call(this,K,L.opts.cornerSize/2);L.status="peel";A._showFoldedPage.call(this,{corner:K,x:I.x,y:I.y},J)}}else{L.status="";A.hideFoldedPage.call(this,J)}return this}};function v(K,I,J){if(!J[0]||typeof(J[0])=="object"){return I.init.apply(K,J)}else{if(I[J[0]]){return I[J[0]].apply(K,Array.prototype.slice.call(J,1))}else{throw E(J[0]+" is not a method or property")}}}function t(K,J,L,I){return{css:{position:"absolute",top:K,left:J,overflow:I||"hidden",zIndex:L||"auto"}}}function p(O,N,M,L,K){var J=1-K,I=J*J*J,P=K*K*K;return h(Math.round(I*O.x+3*K*J*J*N.x+3*K*K*J*M.x+P*L.x),Math.round(I*O.y+3*K*J*J*N.y+3*K*K*J*M.y+P*L.y))}function H(I){return I/180*y}function q(I){return I/y*180}function h(I,J){return{x:I,y:J}}function F(){var J;if((J=/AppleWebkit\/([0-9\.]+)/i.exec(navigator.userAgent))){var I=parseFloat(J[1]);return(I>534.3)}else{return true}}function o(I,K,J){return(n&&J)?" translate3d("+I+"px,"+K+"px, 0px) ":" translate("+I+"px, "+K+"px) "}function B(I){return" rotate("+I+"deg) "}function c(J,I){return Object.prototype.hasOwnProperty.call(I,J)}function x(){var J=["Moz","Webkit","Khtml","O","ms"],I=J.length,K="";while(I--){if((J[I]+"Transform") in document.body.style){K="-"+J[I].toLowerCase()+"-"}}return K}function f(){var I,J=document.createElement("fakeelement"),K={transition:"transitionend",OTransition:"oTransitionEnd",MSTransition:"transitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(I in K){if(J.style[I]!==undefined){return K[I]}}}function b(U,K,J,P,V){var Y,S=[];if(G=="-webkit-"){for(Y=0;Y<V;Y++){S.push("color-stop("+P[Y][0]+", "+P[Y][1]+")")}U.css({"background-image":"-webkit-gradient(linear, "+K.x+"% "+K.y+"%,"+J.x+"% "+J.y+"%, "+S.join(",")+" )"})}else{K={x:K.x/100*U.width(),y:K.y/100*U.height()};J={x:J.x/100*U.width(),y:J.y/100*U.height()};var T=J.x-K.x,R=J.y-K.y,Z=Math.atan2(R,T),L=Z-Math.PI/2,X=Math.abs(U.width()*Math.sin(L))+Math.abs(U.height()*Math.cos(L)),I=Math.sqrt(R*R+T*T),N=h((J.x<K.x)?U.width():0,(J.y<K.y)?U.height():0),O=Math.tan(Z),M=-1/O,Q=(M*N.x-N.y-O*K.x+K.y)/(M-O),aa={x:Q,y:M*Q-M*N.x+N.y},W=(Math.sqrt(Math.pow(aa.x-K.x,2)+Math.pow(aa.y-K.y,2)));for(Y=0;Y<V;Y++){S.push(" "+P[Y][1]+" "+((W+I*P[Y][0])*100/X)+"%")}U.css({"background-image":G+"linear-gradient("+(-Z)+"rad,"+S.join(",")+")"})}}function u(I,K,J){var L=g.Event(I);K.trigger(L,J);if(L.isDefaultPrevented()){return"prevented"}else{if(L.isPropagationStopped()){return"stopped"}else{return""}}}function E(I){function J(K){this.name="TurnJsError";this.message=K}J.prototype=new Error();J.prototype.constructor=J;return new J(I)}function w(I){var J={top:0,left:0};do{J.left+=I.offsetLeft;J.top+=I.offsetTop}while((I=I.offsetParent));return J}function k(){return(navigator.userAgent.indexOf("MSIE 9.0")==-1)}window.requestAnim=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(I){window.setTimeout(I,1000/60)}})();g.extend(g.fn,{flip:function(){return v(g(this[0]),A,arguments)},turn:function(){return v(g(this[0]),D,arguments)},transform:function(J,I){var K={};if(I){K[G+"transform-origin"]=I}K[G+"transform"]=J;return this.css(K)},animatef:function(P){var L=this.data();if(L.effect){L.effect.stop()}if(P){if(!P.to.length){P.to=[P.to]}if(!P.from.length){P.from=[P.from]}var O=[],N=P.to.length,Q=true,M=this,J=(new Date()).getTime(),I=function(){if(!L.effect||!Q){return}var R=[],T=Math.min(P.duration,(new Date()).getTime()-J);for(var S=0;S<N;S++){R.push(L.effect.easing(1,T,P.from[S],O[S],P.duration))}P.frame((N==1)?R[0]:R);if(T==P.duration){delete L.effect;M.data(L);if(P.complete){P.complete()}}else{window.requestAnim(I)}};for(var K=0;K<N;K++){O.push(P.to[K]-P.from[K])}L.effect=g.extend({stop:function(){Q=false},easing:function(S,T,R,V,U){return V*Math.sqrt(1-(T=T/U-1)*T)+R}},P);this.data(L);I()}else{delete L.effect}}});g.isTouch=m;g.mouseEvents=s;g.cssPrefix=x;g.cssTransitionEnd=f;g.findPos=w})(jQuery);
define('validator', [], function(require, exports, module) {
	var Validator = function(name) {
		this.cache = [];
		this.name = name;
	};
	Validator.prototype = {
		addFun: function(dom, rules) {
			var _self = this;
			for(var i = 0, rule; rule = rules[i++];) {
				(function(rule) {
					var strategyAry = rule.strategy.split(':');
					var errorMsg = rule.errorMsg;
					_self.cache.push(function() {
						var strategy = strategyAry.shift();
						strategyAry.unshift(dom.value || dom.val());
						strategyAry.push(errorMsg);
						return _self.name[strategy].apply(dom, strategyAry);
					})
				})(rule)
			}
		},
		start: function() {
			for(var i = 0, validatorFun; validatorFun = this.cache[i++];) {
				var errorMsg = validatorFun();
				if(errorMsg) {
					return errorMsg;
				}
			}
		}
	}
	return Validator;
})