!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ContextMenuLite=t(require("react")):e.ContextMenuLite=t(e.react)}(window,(function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(t,n){t.exports=e},function(e,t,n){"use strict";var o=n(3),i=n.n(o)()((function(e){return e[1]}));i.push([e.i,".contextmenu-container{position:fixed;display:block;z-index:100}.contextmenu-wrapper{padding:3px 0 3px 0;background:#e8e8e8;background:linear-gradient(346deg, #e8e8e8 0%, #fffffb 100%);-moz-box-shadow:2px 2px 5px #666;-webkit-box-shadow:2px 2px 5px #666;box-shadow:2px 2px 5px #666}.contextmenu-wrapper *{box-sizing:border-box;position:relative}.contextmenu-wrapper ul,.contextmenu-wrapper li{list-style:none;border:0;outline:0}.contextmenu-ulist{padding:2px 0;margin:0}.contextmenu-ulist .contextmenu-item{margin:0;position:relative;width:250px;font-size:14px}.contextmenu-ulist .contextmenu-item.contextmenu-item-separate::after{content:' ';width:100%;height:2px;display:block;background-color:#0000001a;margin:2px 0}.contextmenu-ulist .contextmenu-item .contextmenu-item-extend{position:absolute;left:246px;top:-5px}.contextmenu-ulist .contextmenu-item:hover>.contextmenu-item-extend{display:initial}.contextmenu-ulist .contextmenu-item .contextmenu-item-extend-icon{width:0;height:0;border:5px dashed transparent;border-left:5px solid #666666;overflow:hidden;position:absolute;top:7px;right:5px}.contextmenu-ulist .contextmenu-item .contextmenu-item-content{width:100%;display:flex;display:-webkit-flex;display:-moz-flex;justify-content:space-between;-webkit-justify-content:space-between;-moz-justify-content:space-between;align-items:center;-webkit-align-items:center;-moz-align-items:center;align-content:center;-webkit-align-content:center;-moz-align-content:center;padding:3px 15px 3px 1px;user-select:none;-webkit-user-select:none;-moz-user-select:none;cursor:pointer}.contextmenu-ulist .contextmenu-item .contextmenu-item-content:hover{color:#fff;background-color:#319cb7}.contextmenu-ulist .contextmenu-item .contextmenu-item-content:hover .contextmenu-item-tag-selected{border-color:#f1f1f1}.contextmenu-ulist .contextmenu-item .contextmenu-item-content:hover ~ .contextmenu-item-extend-icon{border-left:5px solid #ffffff}.contextmenu-ulist .contextmenu-item .contextmenu-item-content .contextmenu-item-tag{width:25px;flex:0 0 25px;text-align:left}.contextmenu-ulist .contextmenu-item .contextmenu-item-content .contextmenu-item-tips{width:70px;flex:0 0 70px;text-align:right}.contextmenu-ulist .contextmenu-item .contextmenu-item-content .contextmenu-item-text{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:left}.contextmenu-ulist .contextmenu-item .contextmenu-item-content.contextmenu-item-content-disabled{color:#999999 !important;cursor:default !important;background-color:initial}.contextmenu-ulist .contextmenu-item .contextmenu-item-content.contextmenu-item-content-disabled:hover{color:#999999 !important;cursor:default !important;background-color:initial}.contextmenu-ulist .contextmenu-item .contextmenu-item-content .contextmenu-item-tag-selected{width:6px;height:12px;border-color:#00200b;border-style:solid;border-width:0 2px 2px 0;transform:rotate(45deg) translate3d(4px, -5px, 0)}.contextmenu-container.dark .contextmenu-wrapper{background:#000;background:linear-gradient(346deg, #000 0%, dimgray 100%);-moz-box-shadow:2px 2px 5px rgba(102,102,102,0.4);-webkit-box-shadow:2px 2px 5px rgba(102,102,102,0.4);box-shadow:2px 2px 5px rgba(102,102,102,0.4)}.contextmenu-container.dark .contextmenu-wrapper .contextmenu-item{color:white}.contextmenu-container.dark .contextmenu-wrapper .contextmenu-item.contextmenu-item-separate::after{background-color:#ffffff4d}.contextmenu-container.dark .contextmenu-wrapper .contextmenu-item .contextmenu-item-content:hover{background-color:#2196f3}.contextmenu-container.dark .contextmenu-wrapper .contextmenu-item .contextmenu-item-content.contextmenu-item-content-disabled:hover{background-color:initial}.contextmenu-container.dark .contextmenu-wrapper .contextmenu-item .contextmenu-item-tag-selected{border-color:#f1f1f1}.contextmenu-container.dark .contextmenu-wrapper .contextmenu-item .contextmenu-item-extend-icon{border-left:10px solid #ffffff;top:7px;right:0px}.contextmenu-container.dark .contextmenu-wrapper .contextmenu-item .contextmenu-item-content:hover ~ .contextmenu-item-extend-icon{border-left:10px solid #ffffff}.contextmenu-container.roundCorner .contextmenu-wrapper{border-radius:7px}\n",""]),t.a=i},function(e,t,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function a(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},o=[],i=0;i<e.length;i++){var r=e[i],u=t.base?r[0]+t.base:r[0],m=n[u]||0,l="".concat(u," ").concat(m);n[u]=m+1;var s=a(l),d={css:r[1],media:r[2],sourceMap:r[3]};-1!==s?(c[s].references++,c[s].updater(d)):c.push({identifier:l,updater:b(d,t),references:1}),o.push(l)}return o}function m(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=r(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var l,s=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=s(t,i);else{var r=document.createTextNode(i),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(r,c[t]):e.appendChild(r)}}function x(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,f=0;function b(e,t){var n,o,i;if(t.singleton){var r=f++;n=p||(p=m(t)),o=d.bind(null,n,r,!1),i=d.bind(null,n,r,!0)}else n=m(t),o=x.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=a(n[o]);c[i].references--}for(var r=u(e,t),m=0;m<n.length;m++){var l=a(n[m]);0===c[l].references&&(c[l].updater(),c.splice(l,1))}n=r}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(i[c]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);o&&i[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){"use strict";n.r(t),n.d(t,"ContextMenuLite",(function(){return s}));var o=n(0),i=n.n(o),r=n(2),c=n.n(r),a=n(1),u={insert:"head",singleton:!1};c()(a.a,u),a.a.locals;function m(e){const t=e.itemData,[n,r]=Object(o.useState)(!1),c=document.documentElement.clientWidth,a=document.documentElement.clientHeight,[u,m]=Object(o.useState)(0),[s,d]=Object(o.useState)(0),[x,p]=Object(o.useState)(!1),[f,b]=Object(o.useState)(0),[h,g]=Object(o.useState)(!1),v=Object(o.useRef)(null),w=Object(o.useRef)(null);Object(o.useEffect)(()=>{const e=v.current,t=w.current;if(e&&t){const n=e.getBoundingClientRect(),o=t.getBoundingClientRect();n.left+n.width>=c&&(d(-1*n.width),p(!0)),n.top+n.height>=a&&(b(-1*(n.height-o.height)),g(!0))}m(u+1)},[s,f,x,h,n]);const y={};return x&&(y.left=s+"px"),h&&(y.top=f+"px"),t.extend&&t.extend.length>0?i.a.createElement("li",{className:["contextmenu-item",t.separate?"contextmenu-item-separate":""].join(" "),title:t.name,ref:w,onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{r(!1)},onClick:e=>{t.disabled||(e.stopPropagation(),t.fn&&t.fn())}},i.a.createElement("div",{className:["contextmenu-item-content",t.disabled?"contextmenu-item-content-disabled":""].join(" ")},i.a.createElement("div",{className:"contextmenu-item-tag"}),i.a.createElement("div",{className:"contextmenu-item-text"},t.name),i.a.createElement("div",{className:"contextmenu-item-tips"},t.tips)),i.a.createElement("i",{className:"contextmenu-item-extend-icon"}),i.a.createElement("div",{className:"contextmenu-item-extend",ref:v,style:Object.assign({zIndex:e.option.zIndexBase++,display:n?"initial":"none"},y)},i.a.createElement(l,{data:t.extend,option:{zIndexBase:e.option.zIndexBase,hyphen:e.option.hyphen}}))):i.a.createElement("li",{className:["contextmenu-item",t.separate?"contextmenu-item-separate":""].join(" "),onClick:e=>{t.disabled||(e.stopPropagation(),t.fn&&t.fn())},title:t.name},i.a.createElement("div",{className:["contextmenu-item-content",t.disabled?"contextmenu-item-content-disabled":""].join(" ")},i.a.createElement("div",{className:"contextmenu-item-tag"},t.selected?i.a.createElement("div",{className:"contextmenu-item-tag-selected"}):null),i.a.createElement("div",{className:"contextmenu-item-text"},t.name),i.a.createElement("div",{className:"contextmenu-item-tips"},t.tips)))}function l(e={data:[],option:{zIndexBase:20201994,hyphen:":"}}){const t=e.option;return i.a.createElement("div",{className:"contextmenu-wrapper",style:{zIndex:t.zIndexBase++}},i.a.createElement("ul",{className:"contextmenu-ulist"},e.data.map((t,n)=>i.a.createElement(m,{key:n,itemData:t,option:e.option}))))}function s(e){const t=document.documentElement.clientWidth,n=document.documentElement.clientHeight,[r,c]=Object(o.useState)(0),[a,u]=Object(o.useState)(0),[m,s]=Object(o.useState)(0),d=Object(o.useRef)(null);return Object(o.useEffect)(()=>{let o=e.position.x,i=e.position.y;const a=d.current;if(a){const e=a.getBoundingClientRect();e.left+e.width>=t&&(o=t-e.width),e.top+e.height>=n&&(i=n-e.height),o<=0&&(o=0),i<=0&&(i=0)}u(o),s(i),c(r+1)},[a,m,e.position]),i.a.createElement("div",{className:["contextmenu-container",e.roundCorner?"roundCorner":"",e.dark?"dark":""].join(" "),ref:d,style:{left:a+"px",top:m+"px",display:r>1?"initial":"none"}},i.a.createElement(l,{data:e.data,option:{zIndexBase:20201995,hyphen:":"}}))}}])}));