/*!
 * jQuery.scrollTo
 * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @projectDescription Easy element scrolling using jQuery.
 * @author Ariel Flesler
 * @version 1.4.13
 */
!function(e){"use strict";e(["jquery"],function(e){function t(t){return e.isFunction(t)||"object"==typeof t?t:{top:t,left:t}}var n=e.scrollTo=function(t,n,r){return e(window).scrollTo(t,n,r)};return n.defaults={axis:"xy",duration:parseFloat(e.fn.jquery)>=1.3?0:1,limit:!0},n.window=function(){return e(window)._scrollable()},e.fn._scrollable=function(){return this.map(function(){var t=this,n=!t.nodeName||-1!=e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"]);if(!n)return t;var r=(t.contentWindow||t).document||t.ownerDocument||t;return/webkit/i.test(navigator.userAgent)||"BackCompat"==r.compatMode?r.body:r.documentElement})},e.fn.scrollTo=function(r,o,a){return"object"==typeof o&&(a=o,o=0),"function"==typeof a&&(a={onAfter:a}),"max"==r&&(r=9e9),a=e.extend({},n.defaults,a),o=o||a.duration,a.queue=a.queue&&a.axis.length>1,a.queue&&(o/=2),a.offset=t(a.offset),a.over=t(a.over),this._scrollable().each(function(){function i(e){l.animate(d,o,a.easing,e&&function(){e.call(this,u,a)})}if(null!=r){var c,s=this,l=e(s),u=r,d={},f=l.is("html,body");switch(typeof u){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(u)){u=t(u);break}if(u=f?e(u):e(u,this),!u.length)return;case"object":(u.is||u.style)&&(c=(u=e(u)).offset())}var p=e.isFunction(a.offset)&&a.offset(s,u)||a.offset;e.each(a.axis.split(""),function(e,t){var r="x"==t?"Left":"Top",o=r.toLowerCase(),m="scroll"+r,h=s[m],v=n.max(s,t);if(c)d[m]=c[o]+(f?0:h-l.offset()[o]),a.margin&&(d[m]-=parseInt(u.css("margin"+r))||0,d[m]-=parseInt(u.css("border"+r+"Width"))||0),d[m]+=p[o]||0,a.over[o]&&(d[m]+=u["x"==t?"width":"height"]()*a.over[o]);else{var g=u[o];d[m]=g.slice&&"%"==g.slice(-1)?parseFloat(g)/100*v:g}a.limit&&/^\d+$/.test(d[m])&&(d[m]=d[m]<=0?0:Math.min(d[m],v)),!e&&a.queue&&(h!=d[m]&&i(a.onAfterFirst),delete d[m])}),i(a.onAfter)}}).end()},n.max=function(t,n){var r="x"==n?"Width":"Height",o="scroll"+r;if(!e(t).is("html,body"))return t[o]-e(t)[r.toLowerCase()]();var a="client"+r,i=t.ownerDocument.documentElement,c=t.ownerDocument.body;return Math.max(i[o],c[o])-Math.min(i[a],c[a])},n})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}),window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function o(e,t){return r(C.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&b[o]!==n)return"pfx"==t?o:!0}return!1}function s(e,t,r){for(var o in e){var i=t[e[o]];if(i!==n)return r===!1?e[o]:a(i,"function")?i.bind(r||t):i}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+T.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?c(o,t):(o=(e+" "+$.join(r+" ")+r).split(" "),s(o,t,n))}function u(){m.input=function(n){for(var r=0,o=n.length;o>r;r++)M[n[r]]=n[r]in w;return M.list&&(M.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),M}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(e){for(var r,o,a,i=0,c=e.length;c>i;i++)w.setAttribute("type",o=e[i]),r="text"!==w.type,r&&(w.value=E,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&w.style.WebkitAppearance!==n?(v.appendChild(w),a=t.defaultView,r=a.getComputedStyle&&"textfield"!==a.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,v.removeChild(w)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?w.checkValidity&&w.checkValidity()===!1:w.value!=E)),N[e[i]]=!!r;return N}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,p="2.6.2",m={},h=!0,v=t.documentElement,g="modernizr",y=t.createElement(g),b=y.style,w=t.createElement("input"),E=":)",x={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),S="Webkit Moz O ms",T=S.split(" "),$=S.toLowerCase().split(" "),k={svg:"http://www.w3.org/2000/svg"},j={},N={},M={},A=[],L=A.slice,F=function(e,n,r,o){var a,i,c,s,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:g+(r+1),l.appendChild(c);return a=["&#173;",'<style id="s',g,'">',e,"</style>"].join(""),l.id=g,(u?l:d).innerHTML+=a,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",s=v.style.overflow,v.style.overflow="hidden",v.appendChild(d)),i=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),v.style.overflow=s),!!i},z=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return F("@media "+t+" { #"+g+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},P=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var i=e in o;return i||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),i=a(o[e],"function"),a(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,i}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),R={}.hasOwnProperty;f=a(R,"undefined")||a(R.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return R.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=L.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(L.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(L.call(arguments)))};return r}),j.flexbox=function(){return l("flexWrap")},j.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},j.canvastext=function(){return!!m.canvas&&!!a(t.createElement("canvas").getContext("2d").fillText,"function")},j.webgl=function(){return!!e.WebGLRenderingContext},j.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:F(["@media (",C.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},j.geolocation=function(){return"geolocation"in navigator},j.postmessage=function(){return!!e.postMessage},j.websqldatabase=function(){return!!e.openDatabase},j.indexedDB=function(){return!!l("indexedDB",e)},j.hashchange=function(){return P("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},j.history=function(){return!!e.history&&!!history.pushState},j.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},j.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},j.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(b.backgroundColor,"rgba")},j.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),i(b.backgroundColor,"rgba")||i(b.backgroundColor,"hsla")},j.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},j.backgroundsize=function(){return l("backgroundSize")},j.borderimage=function(){return l("borderImage")},j.borderradius=function(){return l("borderRadius")},j.boxshadow=function(){return l("boxShadow")},j.textshadow=function(){return""===t.createElement("div").style.textShadow},j.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},j.cssanimations=function(){return l("animationName")},j.csscolumns=function(){return l("columnCount")},j.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+C.join(n+e)).slice(0,-e.length)),i(b.backgroundImage,"gradient")},j.cssreflections=function(){return l("boxReflect")},j.csstransforms=function(){return!!l("transform")},j.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in v.style&&F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},j.csstransitions=function(){return l("transition")},j.fontface=function(){var e;return F('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),a=o.sheet||o.styleSheet,i=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(r.split(" ")[0])}),e},j.generatedcontent=function(){var e;return F(["#",g,"{font:0/0 a}#",g,':after{content:"',E,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},j.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},j.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},j.localstorage=function(){try{return localStorage.setItem(g,g),localStorage.removeItem(g),!0}catch(e){return!1}},j.sessionstorage=function(){try{return sessionStorage.setItem(g,g),sessionStorage.removeItem(g),!0}catch(e){return!1}},j.webworkers=function(){return!!e.Worker},j.applicationcache=function(){return!!e.applicationCache},j.svg=function(){return!!t.createElementNS&&!!t.createElementNS(k.svg,"svg").createSVGRect},j.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==k.svg},j.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(x.call(t.createElementNS(k.svg,"animate")))},j.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(x.call(t.createElementNS(k.svg,"clipPath")))};for(var D in j)f(j,D)&&(d=D.toLowerCase(),m[d]=j[D](),A.push((m[d]?"":"no-")+d));return m.input||u(),m.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&m.addTest(r,e[r]);else{if(e=e.toLowerCase(),m[e]!==n)return m;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(v.className+=" "+(t?"":"no-")+e),m[e]=t}return m},r(""),y=w=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[m]];return t||(t={},h++,e[m]=h,v[h]=t),t}function a(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),a.canHaveChildren&&!f.test(e)?r.frag.appendChild(a):a}function i(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),s=c.length;s>i;i++)a.createElement(c[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function s(e){e||(e=t);var r=o(e);return g.shivCSS&&!l&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),u||c(e,r),e}var l,u,d=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",h=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,u=!0}}();var g={elements:d.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:d.shivCSS!==!1,supportsUnknownElements:u,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:s,createElement:a,createDocumentFragment:i};e.html5=g,s(t)}(this,t),m._version=p,m._prefixes=C,m._domPrefixes=$,m._cssomPrefixes=T,m.mq=z,m.hasEvent=P,m.testProp=function(e){return c([e])},m.testAllProps=l,m.testStyles=F,m.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},v.className=v.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+A.join(" "):""),m}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==v.call(e)}function o(e){return"string"==typeof e}function a(){}function i(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=g.shift();y=1,e?e.t?m(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function s(e,n,r,o,a,s,l){function u(t){if(!p&&i(d.readyState)&&(b.r=p=1,!y&&c(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&m(function(){E.removeChild(d)},50);for(var r in $[n])$[n].hasOwnProperty(r)&&$[n][r].onload()}}var l=l||f.errorTimeout,d=t.createElement(e),p=0,v=0,b={t:r,s:n,e:a,a:s,x:l};1===$[n]&&(v=1,$[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,v)},g.splice(o,0,b),"img"!=e&&(v||2===$[n]?(E.insertBefore(d,w?null:h),m(u,l)):$[n].push(d))}function l(e,t,n,r,a){return y=0,t=t||"j",o(e)?s("c"==t?C:x,e,t,this.i++,n,r,a):(g.splice(this.i++,0,e),1==g.length&&c()),this}function u(){var e=f;return e.loader={load:l,i:0},e}var d,f,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],v={}.toString,g=[],y=0,b="MozAppearance"in p.style,w=b&&!!t.createRange().compareNode,E=w?p:h.parentNode,p=e.opera&&"[object Opera]"==v.call(e.opera),p=!!t.attachEvent&&!p,x=b?"object":p?"script":"img",C=p?"script":x,S=Array.isArray||function(e){return"[object Array]"==v.call(e)},T=[],$={},k={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,r,e=e.split("!"),o=T.length,a=e.pop(),i=e.length,a={url:a,origUrl:a,prefixes:e};for(n=0;i>n;n++)r=e[n].split("="),(t=k[r.shift()])&&(a=t(a,r));for(n=0;o>n;n++)a=T[n](a);return a}function i(e,o,a,i,c){var s=t(e),l=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(o&&(o=r(o)?o:o[e]||o[i]||o[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,o,a,i,c):($[s.url]?s.noexec=!0:$[s.url]=1,a.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(r(o)||r(l))&&a.load(function(){u(),o&&o(s.origUrl,c,i),l&&l(s.origUrl,c,i),$[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),i(e,d,t,0,l);else if(Object(e)===e)for(s in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(s)&&(!n&&!--c&&(r(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:d[s]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(f[s])),i(e[s],d,t,s,l))}else!n&&p()}var c,s,l=!!e.test,u=e.load||e.both,d=e.callback||a,f=d,p=e.complete||a;n(l?e.yep:e.nope,!!u),u&&n(u)}var s,l,d=this.yepnope.loader;if(o(e))i(e,0,d,0);else if(S(e))for(s=0;s<e.length;s++)l=e[s],o(l)?i(l,0,d,0):S(l)?f(l):Object(l)===l&&c(l,d);else Object(e)===e&&c(e,d)},f.addPrefix=function(e,t){k[e]=t},f.addFilter=function(e){T.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,s,l){var u,d,p=t.createElement("script"),o=o||f.errorTimeout;p.src=e;for(d in r)p.setAttribute(d,r[d]);n=l?c:n||a,p.onreadystatechange=p.onload=function(){!u&&i(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},m(function(){u||(u=1,n(1))},o),s?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,o,i,s){var l,o=t.createElement("link"),n=s?c:n||a;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in r)o.setAttribute(l,r[l]);i||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
window.matchMedia=window.matchMedia||function(e){var t,n=e.documentElement,r=n.firstElementChild||n.firstChild,o=e.createElement("body"),a=e.createElement("div");return a.id="mq-test-1",a.style.cssText="position:absolute;top:-100em",o.style.background="none",o.appendChild(a),function(e){return a.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(o,r),t=42==a.offsetWidth,n.removeChild(o),{matches:t,media:e}}}(document),function(e){function t(){w(!0)}if(e.respond={},respond.update=function(){},respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches,!respond.mediaQueriesSupported){var n,r,o,a=e.document,i=a.documentElement,c=[],s=[],l=[],u={},d=30,f=a.getElementsByTagName("head")[0]||i,p=a.getElementsByTagName("base")[0],m=f.getElementsByTagName("link"),h=[],v=function(){for(var t,n,r,o,a=m,i=a.length,c=0;i>c;c++)t=a[c],n=t.href,r=t.media,o=t.rel&&"stylesheet"===t.rel.toLowerCase(),n&&o&&!u[n]&&(t.styleSheet&&t.styleSheet.rawCssText?(y(t.styleSheet.rawCssText,n,r),u[n]=!0):(!/^([a-zA-Z:]*\/\/)/.test(n)&&!p||n.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&h.push({href:n,media:r}));g()},g=function(){if(h.length){var e=h.shift();E(e.href,function(t){y(t,e.href,e.media),u[e.href]=!0,g()})}},y=function(e,t,n){var r,o,a,i,l,u=e.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),d=u&&u.length||0,t=t.substring(0,t.lastIndexOf("/")),f=function(e){return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")},p=!d&&n,m=0;for(t.length&&(t+="/"),p&&(d=1);d>m;m++)for(r=0,p?(o=n,s.push(f(e))):(o=u[m].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,s.push(RegExp.$2&&f(RegExp.$2))),i=o.split(","),l=i.length;l>r;r++)a=i[r],c.push({media:a.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:s.length-1,hasquery:a.indexOf("(")>-1,minw:a.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:a.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")});w()},b=function(){var e,t=a.createElement("div"),n=a.body,r=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=r=a.createElement("body"),n.style.background="none"),n.appendChild(t),i.insertBefore(n,i.firstChild),e=t.offsetWidth,r?i.removeChild(n):n.removeChild(t),e=o=parseFloat(e)},w=function(e){var t="clientWidth",u=i[t],p="CSS1Compat"===a.compatMode&&u||a.body[t]||u,h={},v=m[m.length-1],g=(new Date).getTime();if(e&&n&&d>g-n)return clearTimeout(r),void(r=setTimeout(w,d));n=g;for(var y in c){var E=c[y],x=E.minw,C=E.maxw,S=null===x,T=null===C,$="em";x&&(x=parseFloat(x)*(x.indexOf($)>-1?o||b():1)),C&&(C=parseFloat(C)*(C.indexOf($)>-1?o||b():1)),E.hasquery&&(S&&T||!(S||p>=x)||!(T||C>=p))||(h[E.media]||(h[E.media]=[]),h[E.media].push(s[E.rules]))}for(var y in l)l[y]&&l[y].parentNode===f&&f.removeChild(l[y]);for(var y in h){var k=a.createElement("style"),j=h[y].join("\n");k.type="text/css",k.media=y,f.insertBefore(k,v.nextSibling),k.styleSheet?k.styleSheet.cssText=j:k.appendChild(a.createTextNode(j)),l.push(k)}},E=function(e,t){var n=x();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!=n.readyState||200!=n.status&&304!=n.status||t(n.responseText)},4!=n.readyState&&n.send(null))},x=function(){var e=!1;try{e=new XMLHttpRequest}catch(t){e=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return e}}();v(),respond.update=v,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this),function(e){"use strict";e.picturefill=function(){for(var t=e.document.getElementsByTagName("span"),n=0,r=t.length;r>n;n++)if(null!==t[n].getAttribute("data-picture")){for(var o=t[n].getElementsByTagName("span"),a=[],i=0,c=o.length;c>i;i++){var s=o[i].getAttribute("data-media");(!s||e.matchMedia&&e.matchMedia(s).matches)&&a.push(o[i])}var l=t[n].getElementsByTagName("img")[0];if(a.length){var u=a.pop();if(l&&"NOSCRIPT"!==l.parentNode.nodeName){if(u===l.parentNode)continue}else l=e.document.createElement("img"),l.alt=t[n].getAttribute("data-alt");l.src=u.getAttribute("data-src"),u.appendChild(l),l.removeAttribute("width"),l.removeAttribute("height")}else l&&l.parentNode.removeChild(l)}},e.addEventListener?(e.addEventListener("resize",e.picturefill,!1),e.addEventListener("DOMContentLoaded",function(){e.picturefill(),e.removeEventListener("load",e.picturefill,!1)},!1),e.addEventListener("load",e.picturefill,!1)):e.attachEvent&&e.attachEvent("onload",e.picturefill)}(this),jQuery(function(){var e=!!("createElementNS"in document&&document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);e?jQuery("body").addClass("svg"):(jQuery("body").addClass("no-svg"),jQuery("img").each(function(){var e=jQuery(this),t=e.attr("src").split("."),n=t.pop();"svg"==n.toLowerCase()&&(void 0!==e.attr("data-svg-fallback")?(e.attr("src",e.attr("data-svg-fallback")),e.removeAttr("data-svg-fallback")):e.attr("src",t.join(".")+".png"))}))}),$(function(){function e(){var e=$("iframe[src*='//player.vimeo.com'], iframe[src*='//www.youtube.com'], iframe[src*='//embed.ted.com']"),n=t;e.each(function(){$(this).data("aspectRatio",this.height/this.width).removeAttr("height").removeAttr("width")}),$w.resize(function(){var t=n.width();e.each(function(){var e=$(this);e.width(t).height(t*e.data("aspectRatio"))})}).resize()}$d=$(document),$w=$(window);var t=($("#main"),$("body"));$d.on("pjax:start",function(){}),$d.on("pjax:end",function(){picturefill(),TweenLite.to($("#clone"),.8,{opacity:0,onComplete:function(){$("#clone").remove(),t.css("overflow","auto"),picturefill()}})}),$d.on("click","#see-our-videos a",function(e){e.preventDefault(),$.scrollTo("#demos",{duration:500})}),$d.on("click",".demo-thumb",function(n){n.preventDefault(),$("#player").remove(),t.append('<div id="player" style="top:'+t.scrollTop()+'px"><iframe src="//player.vimeo.com/video/'+$(this).data("vid")+'?title=0&amp;byline=0&amp;portrait=0&amp;color=e74c3c&amp;autoplay=1" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><button class="player-close">Close</button></div').addClass("player-active"),e()}),$d.on("click",".player-close",function(){$("#player").remove(),t.removeClass("player-active")})});