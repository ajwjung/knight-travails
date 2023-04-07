(()=>{"use strict";var t={890:(t,n,e)=>{e.d(n,{Z:()=>i});var r=e(81),o=e.n(r),a=e(645),s=e.n(a)()(o());s.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Vollkorn&display=swap);"]),s.push([t.id,":root {\n    --dark-brown: rgb(63, 38, 14);\n    --light-brown: rgb(116, 65, 18);\n    --cream: rgb(235, 184, 137);\n    --ivory: rgb(240, 225, 211);\n    --padding: 1rem;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Vollkorn', serif;\n    font-size: 1.1rem;\n    color: var(--dark-brown);\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    background: var(--ivory);\n}\n\n.container {\n    margin: 0 auto;\n    height: 100vh;\n    width: 70vw;\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    grid-template-rows: 1fr 5fr;\n}\n\nh1 {\n    grid-row: 1;\n    grid-column: 1 / span 2;\n    font-size: 3rem;\n    text-align: center;\n    padding-top: 8vh;\n}\n\n.board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.board-container {\n    grid-column: 1;\n    grid-row: 2;\n}\n\n.board {\n    border: 5px double var(--light-brown);\n    height: 610px;\n    width: 610px;\n}\n\n.row {\n    display: flex;\n    flex-direction: row-reverse;\n}\n\n.square {\n    width: 75px;\n    height: 75px;\n    outline: 1px solid white;\n}\n\n.dark {\n    background: var(--light-brown);\n}\n\n.light {\n    background: var(--cream);\n}\n\n.start-selected {\n    background: rgb(221, 79, 79);\n}\n\n.end-selected {\n    background: rgb(90, 161, 219);\n}\n\n.intermediate-square {\n    background: rgb(132, 112, 187)\n}\n\n.content-container {\n    grid-column: 2;\n    grid-row: 2;\n    padding-top: 10vh;\n}\n\n.content {\n    height: min-content;\n    width: clamp(100px, 45%);\n    background: rgb(245, 205, 167);\n    border: 5px double var(--light-brown);\n    padding: var(--padding);\n}\n\n.content > * {\n    margin: var(--padding);\n}\n\nul {\n    list-style-type: none;\n    padding: var(--padding);\n}\n\n.btn-container {\n    display: flex;\n    gap: var(--padding);\n}\n\n#get-path,\n#restart {\n    padding: 5px;\n    background: var(--light-brown);\n    border-radius: 2px;\n    border: 2px solid var(--dark-brown);\n    color: var(--ivory);\n}\n\n#get-path:hover,\n#restart:hover {\n    background: rgb(196, 120, 49);\n}\n\n.path-container {\n    display: flex;\n    flex-direction: column;\n}",""]);const i=s},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);r&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var a={},s=[],i=0;i<t.length;i++){var c=t[i],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=e(u),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(g);else{var h=o(g,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var s=0;s<a.length;s++){var i=e(a[s]);n[i].references--}for(var c=r(t,o),d=0;d<a.length;d++){var l=e(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return t[r](a,a.exports,e),a.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{const t=(()=>{const t=()=>{const t=[];for(let n=1;n<9;n+=1)for(let e=1;e<9;e+=1)t.push([e,n]);return t},n=(t,n)=>{for(const e of t)return e[0]===n[0]&&e[1]===n[1]};return{boardCoordinates:t,formatPath:t=>[`=> You made it in ${t.length-1} moves! Here's your path:`,t.map((t=>`\t[${t}]\n`)).join(" ->")],highlightPathSquares:n=>{n.forEach(((n,e)=>{setTimeout((()=>{const e=`square${(n=>{const e=t();for(let t=0;t<64;t+=1)if(e[t][0]===n[0]&&e[t][1]===n[1])return t})(n)}`;console.log(e),document.getElementById(e).classList.add("intermediate-square")}),1e3*e)}))},getShortestPath:(e,r)=>{console.log(e,r);const o=[{square:e,path:[e]}],a=[];for(;o.length>0;){const{square:e,path:s}=o.shift();if(e[0]===r[0]&&e[1]===r[1])return s;t().map((t=>({adjList:[[t[0]-1,t[1]-2],[t[0]+1,t[1]-2],[t[0]-2,t[1]-1],[t[0]+2,t[1]-1],[t[0]-2,t[1]+1],[t[0]+2,t[1]+1],[t[0]-1,t[1]+2],[t[0]+1,t[1]+2]].filter((t=>t[0]>0&&t[0]<9&&t[1]>0&&t[1]<9)),coordinates:t}))).find((t=>t.coordinates[0]===e[0]&&t.coordinates[1]===e[1])).adjList.forEach((t=>{if(!n(a,t)){a.push(t);const n=s.concat([t]);o.push({square:t,path:n})}}))}}}})(),n=(()=>{const n=document.querySelector(".message-box"),e=document.getElementById("start-position"),r=document.getElementById("end-position");let o,a,s=!1,i=!1;const c=t=>{switch(t){case 1:case 4:n.textContent="Click on a square to select the knight's ending position or click on the same starting square to reset the starting position.";break;case 2:default:n.textContent="Click on a square to select the knight's starting position.";break;case 3:n.textContent="Click the button to find the shortest path or click on the same ending square to reset the ending position."}};return{choosePositionsHandler:n=>{if(s||i||!n.target.classList.contains("square"))if(s&&!i&&o===n.target.id.substr(6)&&n.target.classList.contains("square"))s=!1,o="",n.target.classList.toggle("start-selected"),e.textContent="",c(2);else if(s&&!i&&n.target.classList.contains("square")){a=n.target.id.substr(6),i=!0;const e=t.boardCoordinates()[a];r.textContent=`[${e}]`,c(3),n.target.classList.toggle("end-selected")}else s&&i&&a===n.target.id.substr(6)&&n.target.classList.contains("square")&&(i=!1,a="",n.target.classList.toggle("end-selected"),r.textContent="",c(4));else{o=n.target.id.substr(6),s=!0;const r=t.boardCoordinates()[o];e.textContent=`[${r}]`,c(1),n.target.classList.toggle("start-selected")}},updatePathBox:()=>{const n=document.querySelector(".path-text"),e=document.querySelector(".path"),r=document.getElementById("start-position").textContent,o=document.getElementById("end-position").textContent,a=t.getShortestPath(JSON.parse(r),JSON.parse(o));t.highlightPathSquares(a);const[s,i]=t.formatPath(a);n.textContent=s,e.textContent=i}}})(),r=(()=>{const t=document.querySelector(".board"),n=(t,n,e)=>{t%2==0&&n%2!=0||t%2!=0&&n%2==0?e.classList.add("dark"):e.classList.add("light")};return{createBoard:()=>{let e=63;for(let r=1;r<9;r+=1){const o=document.createElement("div");o.classList.add("row"),t.appendChild(o);for(let t=1;t<9;t+=1){const a=document.createElement("div");a.classList.add("square"),a.setAttribute("id",`square${e}`),n(r,t,a),o.appendChild(a),e-=1}}}}})();var o=e(379),a=e.n(o),s=e(795),i=e.n(s),c=e(569),d=e.n(c),l=e(565),u=e.n(l),p=e(216),g=e.n(p),h=e(589),f=e.n(h),m=e(890),v={};v.styleTagTransform=f(),v.setAttributes=u(),v.insert=d().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=g(),a()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals,(()=>{const t=document.querySelector("button");r.createBoard(),document.body.addEventListener("click",(t=>{n.choosePositionsHandler(t)})),t.addEventListener("click",(()=>{n.updatePathBox()}))})()})()})();