!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["classnames","noop","object-assign","prop-types","react"],t):"object"==typeof exports?exports.ReactRotateDisc=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):e.ReactRotateDisc=t(e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react)}(this,function(e,t,r,n,o){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o);t.default=a.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,f,c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(5);var l=r(10),p=n(l),d=r(9),h=n(d),m=r(6),v=n(m),b=r(7),y=(n(b),r(8)),g=(n(y),f=u=function(e){function t(){var e,r,n,o;a(this,t);for(var s=arguments.length,u=Array(s),f=0;f<s;f++)u[f]=arguments[f];return r=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.state={paused:!1},n._onClick=function(e){var t=n.paused?"play":"pause";n.action(t),n.sync()},o=r,i(n,o)}return s(t,e),c(t,[{key:"componentDidMount",value:function(){this.sync()}},{key:"action",value:function(e){var t=this.refs.audio;t[e]()}},{key:"sync",value:function(){this.setState({paused:this.paused})}},{key:"render",value:function(){var e=this.props,t=e.icon,r=e.audio,n=e.className,a=(o(e,["icon","audio","className"]),this.state.paused);return p.default.createElement("button",{onClick:this._onClick,className:(0,v.default)("react-rotate-audio",n),"data-rotation":!a},p.default.createElement("audio",{ref:"audio",className:"react-rotate-audio-audio",src:r},"Your browser not support audio."),p.default.createElement("img",{className:"react-rotate-audio-icon",src:t}))}},{key:"paused",get:function(){var e=this.refs.audio;return!!e&&e.paused}}]),t}(l.Component),u.propTypes={className:h.default.string,icon:h.default.string,audio:h.default.string},u.defaultProps={},f);t.default=g},function(e,t,r){t=e.exports=r(3)(),t.push([e.id,"@-webkit-keyframes rotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:translateX(1turn);transform:translateX(1turn)}}@keyframes rotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:translateX(1turn);transform:translateX(1turn)}}.react-rotate-audio{outline:none;background:none;border:none;font-size:10px;display:inline-block;-webkit-transform:rotate(1turn)}.react-rotate-audio[data-rotation=true]{-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation:rotation 3s linear infinite;animation:rotation 3s linear infinite}.react-rotate-audio-icon{vertical-align:top;width:3.6em;height:3.6em}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=d[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(f(n.parts[a],t))}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(f(n.parts[a],t));d[n.id]={id:n.id,refs:1,parts:i}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],a=o[0],i=o[1],s=o[2],u=o[3],f={css:i,media:s,sourceMap:u};r[a]?r[a].parts.push(f):t.push(r[a]={id:a,parts:[f]})}return t}function a(e,t){var r=v(),n=g[g.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function f(e,t){var r,n,o;if(t.singleton){var a=y++;r=b||(b=s(t)),n=c.bind(null,r,a,!1),o=c.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=u(t),n=p.bind(null,r),o=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(t),n=l.bind(null,r),o=function(){i(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function c(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function l(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function p(e,t){var r=t.css,n=t.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),v=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,y=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var a=[],i=0;i<r.length;i++){var s=r[i],u=d[s.id];u.refs--,a.push(u)}if(e){var f=o(e);n(f,t)}for(var i=0;i<a.length;i++){var u=a[i];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete d[u.id]}}}};var x=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){var n=r(2);"string"==typeof n&&(n=[[e.id,n,""]]);r(4)(n,{});n.locals&&(e.exports=n.locals)},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o}])});
//# sourceMappingURL=react-rotate-audio.js.map