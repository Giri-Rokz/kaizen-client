(()=>{var e={669:(e,t,n)=>{e.exports=n(609)},448:(e,t,n)=>{"use strict";var r=n(867),o=n(26),i=n(372),s=n(327),a=n(97),u=n(109),c=n(985),d=n(61),l=n(655),f=n(263);e.exports=function(e){return new Promise((function(t,n){var p,h=e.data,v=e.headers,m=e.responseType;function y(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}r.isFormData(h)&&delete v["Content-Type"];var g=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";v.Authorization="Basic "+btoa(b+":"+w)}var S=a(e.baseURL,e.url);function E(){if(g){var r="getAllResponseHeaders"in g?u(g.getAllResponseHeaders()):null,i={data:m&&"text"!==m&&"json"!==m?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:r,config:e,request:g};o((function(e){t(e),y()}),(function(e){n(e),y()}),i),g=null}}if(g.open(e.method.toUpperCase(),s(S,e.params,e.paramsSerializer),!0),g.timeout=e.timeout,"onloadend"in g?g.onloadend=E:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(E)},g.onabort=function(){g&&(n(d("Request aborted",e,"ECONNABORTED",g)),g=null)},g.onerror=function(){n(d("Network Error",e,null,g)),g=null},g.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded",r=e.transitional||l.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(d(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",g)),g=null},r.isStandardBrowserEnv()){var A=(e.withCredentials||c(S))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;A&&(v[e.xsrfHeaderName]=A)}"setRequestHeader"in g&&r.forEach(v,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete v[t]:g.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(g.withCredentials=!!e.withCredentials),m&&"json"!==m&&(g.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&g.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&g.upload&&g.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){g&&(n(!e||e&&e.type?new f("canceled"):e),g.abort(),g=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),h||(h=null),g.send(h)}))}},609:(e,t,n)=>{"use strict";var r=n(867),o=n(849),i=n(321),s=n(185),a=function e(t){var n=new i(t),a=o(i.prototype.request,n);return r.extend(a,i.prototype,n),r.extend(a,n),a.create=function(n){return e(s(t,n))},a}(n(655));a.Axios=i,a.Cancel=n(263),a.CancelToken=n(972),a.isCancel=n(502),a.VERSION=n(288).version,a.all=function(e){return Promise.all(e)},a.spread=n(713),a.isAxiosError=n(268),e.exports=a,e.exports.default=a},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,n)=>{"use strict";var r=n(263);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,n)=>{"use strict";var r=n(867),o=n(327),i=n(782),s=n(572),a=n(185),u=n(875),c=u.validators;function d(e){this.defaults=e,this.interceptors={request:new i,response:new i}}d.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&u.assertOptions(t,{silentJSONParsing:c.transitional(c.boolean),forcedJSONParsing:c.transitional(c.boolean),clarifyTimeoutError:c.transitional(c.boolean)},!1);var n=[],r=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(r=r&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var o,i=[];if(this.interceptors.response.forEach((function(e){i.push(e.fulfilled,e.rejected)})),!r){var d=[s,void 0];for(Array.prototype.unshift.apply(d,n),d=d.concat(i),o=Promise.resolve(e);d.length;)o=o.then(d.shift(),d.shift());return o}for(var l=e;n.length;){var f=n.shift(),p=n.shift();try{l=f(l)}catch(e){p(e);break}}try{o=s(l)}catch(e){return Promise.reject(e)}for(;i.length;)o=o.then(i.shift(),i.shift());return o},d.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){d.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){d.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=d},782:(e,t,n)=>{"use strict";var r=n(867);function o(){this.handlers=[]}o.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},97:(e,t,n)=>{"use strict";var r=n(793),o=n(303);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},61:(e,t,n)=>{"use strict";var r=n(481);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},572:(e,t,n)=>{"use strict";var r=n(867),o=n(527),i=n(502),s=n(655),a=n(263);function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a("canceled")}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return u(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},185:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){t=t||{};var n={};function o(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function i(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(e[n],t[n])}function s(e){if(!r.isUndefined(t[e]))return o(void 0,t[e])}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(void 0,t[n])}function u(n){return n in t?o(e[n],t[n]):n in e?o(void 0,e[n]):void 0}var c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||i,o=t(e);r.isUndefined(o)&&t!==u||(n[e]=o)})),n}},26:(e,t,n)=>{"use strict";var r=n(61);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},527:(e,t,n)=>{"use strict";var r=n(867),o=n(655);e.exports=function(e,t,n){var i=this||o;return r.forEach(n,(function(n){e=n.call(i,e,t)})),e}},655:(e,t,n)=>{"use strict";var r=n(867),o=n(16),i=n(481),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,c={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(u=n(448)),u),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(a(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(0,JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||c.transitional,n=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||o&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(s){if("SyntaxError"===e.name)throw i(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(s)})),e.exports=c},288:e=>{e.exports={version:"0.22.0"}},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},327:(e,t,n)=>{"use strict";var r=n(867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},268:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},985:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},16:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},109:(e,t,n)=>{"use strict";var r=n(867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},875:(e,t,n)=>{"use strict";var r=n(288).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var i={};o.transitional=function(e,t,n){function o(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,s){if(!1===e)throw new Error(o(r," has been removed"+(t?" in "+t:"")));return t&&!i[r]&&(i[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var i=r[o],s=t[i];if(s){var a=e[i],u=void 0===a||s(a,i,e);if(!0!==u)throw new TypeError("option "+i+" must be "+u)}else if(!0!==n)throw Error("Unknown option "+i)}},validators:o}},867:(e,t,n)=>{"use strict";var r=n(849),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function s(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function c(e){return"[object Function]"===o.call(e)}function d(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:u,isUndefined:s,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:d,merge:function e(){var t={};function n(n,r){u(t[r])&&u(n)?t[r]=e(t[r],n):u(n)?t[r]=e({},n):i(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)d(arguments[r],n);return t},extend:function(e,t,n){return d(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},817:(e,t,n)=>{"use strict";n.r(t)},752:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const o=n(607),i=r(n(669));n(817);class s{launchApp(){(new o.Router).handleRoute()}}t.App=s,i.default.defaults.baseURL="https://kaizenserver.herokuapp.com/",(new s).launchApp()},701:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LandingPage=void 0;const r=n(838);class o extends r.Utils{constructor(e){super(),this.userName=e}render(){this.cleanUp();const e=document.createElement("template");e.innerHTML=`<div id="landingContainer">\n            <center><h3>Welcome ${this.userName}</h3></center>\n            <center><div>What would you like to do today ?</div></center>\n            <div class="cardContainer">\n                <button class="viewIdeas">View Recent Ideas</button>\n                <button class="submitIdea">Submit an Idea</button>\n            </div>\n        </div>`,this.appendToMain(e),this.setupListeners()}setupListeners(){var e,t;null===(e=document.querySelector(".viewIdeas"))||void 0===e||e.addEventListener("click",this.goToViewIdeas.bind(this)),null===(t=document.querySelector(".submitIdea"))||void 0===t||t.addEventListener("click",this.submitIdea.bind(this))}goToViewIdeas(){new r.ViewIdeas("Agent",this.userName).render({ideas:[]})}submitIdea(){new r.SubmitIdea(this.userName).render()}}t.LandingPage=o},311:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Login=void 0;const o=n(838),i=n(593),s=r(n(669)),a=r(n(801));class u extends i.Utils{constructor(){super(...arguments),this.signUpFlow=!1}render(){var e;const t=document.createElement("template");t.innerHTML='        \n        <div id="loginPage">\n            <center>\n                <div class="title">                                        \n                    <img src="" alt="logo" class="kaizenLogo">\n                    <h3>KAIZEN</h3>\n                </div>\n            </center>\n            <div id="signInForm">\n                <form> \n                    <div class="formElement">\n                        <input type="text" tabindex="0" placeholder="Username" name="username" id="username" value="GR">\n                    </div>\n                    <div class="roleContainer formElement">\n                        <select name="role" id="role">\n                            <option value="0" selected>Select your role</option>\n                            <option value="1">Agent</option>    \n                            <option value="2">Admin</option>\n                        </select>\n                    </div>\n                    <div class="formElement">\n                        <input type="text" placeholder="Password" name="password" id="password" value="1">\n                    </div>\n                    <center><div class="error" style="display:none">Please enter valid credentials</div></center>\n                    <button type="button" id="signIn">Sign In</button>\n                    <button type="button" id="createAccount">Create New Account</button>\n                    <div class="newUser">\n                        <center>New User? <a href="javascript:void(0)" id="signUp">Sign Up</a> here</center>\n                    </div>\n                </form>\n            </div>\n        </div>',this.appendToMain(t),null===(e=document.querySelector(".kaizenLogo"))||void 0===e||e.setAttribute("src",a.default),this.setFavIcon(),this.showHideDOM([".roleContainer","#createAccount"],!1),this.setupListeners()}setFavIcon(){const e=document.createElement("link");e.setAttribute("rel","icon"),e.setAttribute("type","image/jpg"),e.setAttribute("href",a.default),document.head.append(e)}setupListeners(){var e,t,n;null===(e=document.querySelector("#signUp"))||void 0===e||e.addEventListener("click",this.signUp.bind(this)),null===(t=document.querySelector("#signIn"))||void 0===t||t.addEventListener("click",this.signIn.bind(this)),null===(n=document.querySelector("#createAccount"))||void 0===n||n.addEventListener("click",this.createAccount.bind(this))}createAccount(){var e,t,n;const r={username:null===(e=document.querySelector("#username"))||void 0===e?void 0:e.value,password:null===(t=document.querySelector("#password"))||void 0===t?void 0:t.value,role:null===(n=document.querySelector("#role"))||void 0===n?void 0:n.value};this.userName=r.username,s.default.post("/signUp",r,{headers:this.headers}).then((e=>{e&&"1"==e.data.role?new o.LandingPage(this.userName).render():new o.ViewIdeas("Admin",this.userName).render({ideas:[]})})).catch((e=>console.log(e)))}signUp(){this.signUpFlow=!0,this.showHideDOM([".roleContainer","#createAccount"],!0),this.showHideDOM(["#signIn",".newUser"],!1)}signIn(){var e,t;const n={username:null===(e=document.querySelector("#username"))||void 0===e?void 0:e.value,password:null===(t=document.querySelector("#password"))||void 0===t?void 0:t.value};s.default.post("/signIn",n,{headers:this.headers}).then((e=>{document.querySelector(".error")&&this.showHideDOM([".error"],!1),this.userName=e.data.user.username,e&&"1"==e.data.user.role?new o.LandingPage(this.userName).render():new o.ViewIdeas("Admin",this.userName).render({ideas:[]})})).catch((e=>{console.log(e),this.showHideDOM([".error"],!0)}))}}t.Login=u},411:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SubmitIdea=void 0;const o=n(593),i=r(n(669)),s=n(614);class a extends o.Utils{constructor(e){super(),this.userName=e}render(){this.cleanUp();const e=document.createElement("template");e.innerHTML='<div id="submitIdeaContainer">\n            <center><h3>Submit your idea</h3></center>\n            <div class="inputContainer">\n                <div>\n                    <center><input type="text" placeholder="Title" name="title" id="title"></center>\n                </div>\n                <div>\n                    <center><textarea placeholder="Description" name="description" id="description"></textarea>\n                </div>\n                <div class="actionDiv">\n                    <center><button class="submit">Submit</button></center>\n                    <center><button class="goback">Go Back</button></center>\n                </div>\n            </div>\n        </div>',this.appendToMain(e),this.setupListeners()}setupListeners(){var e,t;null===(e=document.querySelector(".submit"))||void 0===e||e.addEventListener("click",this.submit.bind(this)),null===(t=document.querySelector(".goback"))||void 0===t||t.addEventListener("click",(()=>this.gotoLanding(this.userName)))}validate(){const e={value:document.querySelector("#title").value,required:!0},t={value:document.querySelector("#description").value,required:!0};return this.validateData([e,t])}submit(){var e,t;if(this.validate()){document.querySelector(".error")&&this.showHideDOM([".error"],!1);const n={title:null===(e=document.querySelector("#title"))||void 0===e?void 0:e.value,description:null===(t=document.querySelector("#description"))||void 0===t?void 0:t.value,submitted_by:this.userName,ideaUUID:(0,s.v4)(),likes:0};i.default.post("/submitIdea",n,{headers:this.headers}).then((()=>{this.showModal("Hurray! Your idea has been submitted successfully!"),document.querySelector("#title").value="",document.querySelector("#description").value=""})).catch((e=>console.log(`Error in submitting idea : ${e}`)))}else this.printError()}printError(){var e;document.querySelector(".error")||null===(e=document.querySelector(".actionDiv"))||void 0===e||e.insertAdjacentHTML("beforebegin",'<div class="error"><center>Please enter all values</center></div>')}}t.SubmitIdea=a},639:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((r=r.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ViewIdeas=void 0;const i=n(593),s=o(n(669));class a extends i.Utils{constructor(e,t){super(),this.role=e,this.userName=t,this.ideasArray=[]}getIdeas(){return r(this,void 0,void 0,(function*(){return yield(yield s.default.get("/getIdeas")).data.ideas}))}render(e){var t,n,o;return r(this,void 0,void 0,(function*(){let r=document.createElement("div");const i=document.createElement("template");e.ideas.length?this.ideasArray=e.ideas:this.ideasArray=yield this.getIdeas(),this.ideasArray.forEach((e=>{let t=document.createElement("div");t.className="viewIterableContainer";let n=document.createElement("template");n.innerHTML=`<div class="ideaContainer">\n            <div class="ideaTitle">${e.title}</div>\n            <div class="ideaDescription">${e.description}</div>\n            </div>`,null==t||t.appendChild(document.importNode(n.content,!0)),"Admin"==this.role&&(i.innerHTML=`<div data-id="${e.ideaUUID}" class="actions">\n                    <div>\n                        <i class="far fa-thumbs-up fa-lg like"></i><span class="likeCount">${e.likes}</span>\n                    </div>\n                    <button type="button" class="approve">Approve</button>\n                    <button type="button" class="reject">Reject</button>\n                    <button type="button" class="shortlist">Shortlist</button>\n                </div>`),null==t||t.appendChild(document.importNode(i.content,!0)),null==r||r.append(t)}));const s=document.createElement("div");if(s.innerHTML=`<div class="welcomeHeader">\n        <center><h3>Welcome ${this.userName}</h3></center></div>`,this.cleanUp(),null===(t=document.querySelector("#mainContainer"))||void 0===t||t.appendChild(s),null===(n=document.querySelector(".welcomeHeader"))||void 0===n||n.insertAdjacentElement("afterend",r),"Admin"!=this.role){const e=document.createElement("div");e.className="viewIdeasPage",e.innerHTML='<center><button type="button" class="back">Go Back</button></center>',null===(o=document.querySelector("#mainContainer"))||void 0===o||o.insertAdjacentElement("beforeend",e)}this.setupListeners()}))}setupListeners(){var e;Array.from(document.querySelectorAll(".approve")).forEach((e=>{e.addEventListener("click",this.approveIdea.bind(this))})),Array.from(document.querySelectorAll(".reject")).forEach((e=>{e.addEventListener("click",this.rejectIdea.bind(this))})),Array.from(document.querySelectorAll(".shortlist")).forEach((e=>{e.addEventListener("click",this.shortlistIdea.bind(this))})),Array.from(document.querySelectorAll(".like")).forEach((e=>{e.addEventListener("click",this.likeIdea.bind(this))})),null===(e=document.querySelector(".back"))||void 0===e||e.addEventListener("click",(()=>this.gotoLanding(this.userName)))}editIdeasRecord(e,t,n,r){const o={ideaUUID:t.target.parentElement.parentElement.getAttribute("data-id"),userName:this.userName};r?o.likes=n:this.showModal("Your actions have been recorded"),s.default.put(e,o,{headers:this.headers}).then((e=>this.render(e.data))).catch((e=>console.log(e)))}approveIdea(e){this.editIdeasRecord("/approveIdea",e)}rejectIdea(e){this.editIdeasRecord("/rejectIdea",e)}shortlistIdea(e){this.editIdeasRecord("/shortlistIdea",e)}likeIdea(e){var t,n,r;let o=Number(null===(r=null===(n=null===(t=e.target)||void 0===t?void 0:t.parentElement)||void 0===n?void 0:n.querySelector(".likeCount"))||void 0===r?void 0:r.innerHTML);o++,e.target.parentElement.querySelector(".likeCount").innerHTML=String(o),this.editIdeasRecord("/likeIdea",e,o,!0)}}t.ViewIdeas=a},607:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Router=void 0;var r=n(838);Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return r.Router}})},275:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},687:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},742:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},838:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(311),t),o(n(873),t),o(n(593),t),o(n(701),t),o(n(411),t),o(n(639),t),o(n(687),t),o(n(275),t),o(n(742),t)},873:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Router=void 0;const r=n(838);t.Router=class{handleRoute(){"/viewIdeas"===this.getRoute()||(new r.Login).render()}getRoute(){return window.location.pathname}}},593:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Utils=void 0;const r=n(838);t.Utils=class{constructor(){this.headers={"Content-Type":"application/json"}}cleanUp(){for(var e,t,n;null===(e=document.querySelector("#mainContainer"))||void 0===e?void 0:e.firstChild;)null===(t=document.querySelector("#mainContainer"))||void 0===t||t.removeChild(null===(n=document.querySelector("#mainContainer"))||void 0===n?void 0:n.firstChild)}showHideDOM(e,t){for(let n in e)document.querySelector(e[n]).style.display=t?"block":"none"}appendToMain(e){var t;null===(t=document.querySelector("#mainContainer"))||void 0===t||t.appendChild(document.importNode(e.content,!0))}validateData(e){let t=!0;return e.forEach((e=>{e.required&&(t=t&&0!=e.value.trim().length)})),t}gotoLanding(e){new r.LandingPage(e).render()}showModal(e){var t;document.querySelector(".modal-content").innerHTML=e,null===(t=document.querySelector(".closeModal"))||void 0===t||t.addEventListener("click",(()=>{this.showHideDOM(["#modal","#overlay"],!1)})),this.showHideDOM(["#modal","#overlay"],!0)}}},614:(e,t,n)=>{"use strict";var r;n.r(t),n.d(t,{NIL:()=>L,parse:()=>m,stringify:()=>d,v1:()=>v,v3:()=>I,v4:()=>j,v5:()=>U,validate:()=>a,version:()=>N});var o=new Uint8Array(16);function i(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}const s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,a=function(e){return"string"==typeof e&&s.test(e)};for(var u=[],c=0;c<256;++c)u.push((c+256).toString(16).substr(1));const d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase();if(!a(n))throw TypeError("Stringified UUID is invalid");return n};var l,f,p=0,h=0;const v=function(e,t,n){var r=t&&n||0,o=t||new Array(16),s=(e=e||{}).node||l,a=void 0!==e.clockseq?e.clockseq:f;if(null==s||null==a){var u=e.random||(e.rng||i)();null==s&&(s=l=[1|u[0],u[1],u[2],u[3],u[4],u[5]]),null==a&&(a=f=16383&(u[6]<<8|u[7]))}var c=void 0!==e.msecs?e.msecs:Date.now(),v=void 0!==e.nsecs?e.nsecs:h+1,m=c-p+(v-h)/1e4;if(m<0&&void 0===e.clockseq&&(a=a+1&16383),(m<0||c>p)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=c,h=v,f=a;var y=(1e4*(268435455&(c+=122192928e5))+v)%4294967296;o[r++]=y>>>24&255,o[r++]=y>>>16&255,o[r++]=y>>>8&255,o[r++]=255&y;var g=c/4294967296*1e4&268435455;o[r++]=g>>>8&255,o[r++]=255&g,o[r++]=g>>>24&15|16,o[r++]=g>>>16&255,o[r++]=a>>>8|128,o[r++]=255&a;for(var b=0;b<6;++b)o[r+b]=s[b];return t||d(o)},m=function(e){if(!a(e))throw TypeError("Invalid UUID");var t,n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n};function y(e,t,n){function r(e,r,o,i){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"==typeof r&&(r=m(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var s=new Uint8Array(16+e.length);if(s.set(r),s.set(e,r.length),(s=n(s))[6]=15&s[6]|t,s[8]=63&s[8]|128,o){i=i||0;for(var a=0;a<16;++a)o[i+a]=s[a];return o}return d(s)}try{r.name=e}catch(e){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r}function g(e){return 14+(e+64>>>9<<4)+1}function b(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function w(e,t,n,r,o,i){return b((s=b(b(t,e),b(r,i)))<<(a=o)|s>>>32-a,n);var s,a}function S(e,t,n,r,o,i,s){return w(t&n|~t&r,e,t,o,i,s)}function E(e,t,n,r,o,i,s){return w(t&r|n&~r,e,t,o,i,s)}function A(e,t,n,r,o,i,s){return w(t^n^r,e,t,o,i,s)}function x(e,t,n,r,o,i,s){return w(n^(t|~r),e,t,o,i,s)}const I=y("v3",48,(function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return function(e){for(var t=[],n=32*e.length,r="0123456789abcdef",o=0;o<n;o+=8){var i=e[o>>5]>>>o%32&255,s=parseInt(r.charAt(i>>>4&15)+r.charAt(15&i),16);t.push(s)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[g(t)-1]=t;for(var n=1732584193,r=-271733879,o=-1732584194,i=271733878,s=0;s<e.length;s+=16){var a=n,u=r,c=o,d=i;n=S(n,r,o,i,e[s],7,-680876936),i=S(i,n,r,o,e[s+1],12,-389564586),o=S(o,i,n,r,e[s+2],17,606105819),r=S(r,o,i,n,e[s+3],22,-1044525330),n=S(n,r,o,i,e[s+4],7,-176418897),i=S(i,n,r,o,e[s+5],12,1200080426),o=S(o,i,n,r,e[s+6],17,-1473231341),r=S(r,o,i,n,e[s+7],22,-45705983),n=S(n,r,o,i,e[s+8],7,1770035416),i=S(i,n,r,o,e[s+9],12,-1958414417),o=S(o,i,n,r,e[s+10],17,-42063),r=S(r,o,i,n,e[s+11],22,-1990404162),n=S(n,r,o,i,e[s+12],7,1804603682),i=S(i,n,r,o,e[s+13],12,-40341101),o=S(o,i,n,r,e[s+14],17,-1502002290),n=E(n,r=S(r,o,i,n,e[s+15],22,1236535329),o,i,e[s+1],5,-165796510),i=E(i,n,r,o,e[s+6],9,-1069501632),o=E(o,i,n,r,e[s+11],14,643717713),r=E(r,o,i,n,e[s],20,-373897302),n=E(n,r,o,i,e[s+5],5,-701558691),i=E(i,n,r,o,e[s+10],9,38016083),o=E(o,i,n,r,e[s+15],14,-660478335),r=E(r,o,i,n,e[s+4],20,-405537848),n=E(n,r,o,i,e[s+9],5,568446438),i=E(i,n,r,o,e[s+14],9,-1019803690),o=E(o,i,n,r,e[s+3],14,-187363961),r=E(r,o,i,n,e[s+8],20,1163531501),n=E(n,r,o,i,e[s+13],5,-1444681467),i=E(i,n,r,o,e[s+2],9,-51403784),o=E(o,i,n,r,e[s+7],14,1735328473),n=A(n,r=E(r,o,i,n,e[s+12],20,-1926607734),o,i,e[s+5],4,-378558),i=A(i,n,r,o,e[s+8],11,-2022574463),o=A(o,i,n,r,e[s+11],16,1839030562),r=A(r,o,i,n,e[s+14],23,-35309556),n=A(n,r,o,i,e[s+1],4,-1530992060),i=A(i,n,r,o,e[s+4],11,1272893353),o=A(o,i,n,r,e[s+7],16,-155497632),r=A(r,o,i,n,e[s+10],23,-1094730640),n=A(n,r,o,i,e[s+13],4,681279174),i=A(i,n,r,o,e[s],11,-358537222),o=A(o,i,n,r,e[s+3],16,-722521979),r=A(r,o,i,n,e[s+6],23,76029189),n=A(n,r,o,i,e[s+9],4,-640364487),i=A(i,n,r,o,e[s+12],11,-421815835),o=A(o,i,n,r,e[s+15],16,530742520),n=x(n,r=A(r,o,i,n,e[s+2],23,-995338651),o,i,e[s],6,-198630844),i=x(i,n,r,o,e[s+7],10,1126891415),o=x(o,i,n,r,e[s+14],15,-1416354905),r=x(r,o,i,n,e[s+5],21,-57434055),n=x(n,r,o,i,e[s+12],6,1700485571),i=x(i,n,r,o,e[s+3],10,-1894986606),o=x(o,i,n,r,e[s+10],15,-1051523),r=x(r,o,i,n,e[s+1],21,-2054922799),n=x(n,r,o,i,e[s+8],6,1873313359),i=x(i,n,r,o,e[s+15],10,-30611744),o=x(o,i,n,r,e[s+6],15,-1560198380),r=x(r,o,i,n,e[s+13],21,1309151649),n=x(n,r,o,i,e[s+4],6,-145523070),i=x(i,n,r,o,e[s+11],10,-1120210379),o=x(o,i,n,r,e[s+2],15,718787259),r=x(r,o,i,n,e[s+9],21,-343485551),n=b(n,a),r=b(r,u),o=b(o,c),i=b(i,d)}return[n,r,o,i]}(function(e){if(0===e.length)return[];for(var t=8*e.length,n=new Uint32Array(g(t)),r=0;r<t;r+=8)n[r>>5]|=(255&e[r/8])<<r%32;return n}(e),8*e.length))})),j=function(e,t,n){var r=(e=e||{}).random||(e.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return d(r)};function C(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:case 3:return t^n^r;case 2:return t&n^t&r^n&r}}function O(e,t){return e<<t|e>>>32-t}const U=y("v5",80,(function(e){var t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var r=unescape(encodeURIComponent(e));e=[];for(var o=0;o<r.length;++o)e.push(r.charCodeAt(o))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var i=e.length/4+2,s=Math.ceil(i/16),a=new Array(s),u=0;u<s;++u){for(var c=new Uint32Array(16),d=0;d<16;++d)c[d]=e[64*u+4*d]<<24|e[64*u+4*d+1]<<16|e[64*u+4*d+2]<<8|e[64*u+4*d+3];a[u]=c}a[s-1][14]=8*(e.length-1)/Math.pow(2,32),a[s-1][14]=Math.floor(a[s-1][14]),a[s-1][15]=8*(e.length-1)&4294967295;for(var l=0;l<s;++l){for(var f=new Uint32Array(80),p=0;p<16;++p)f[p]=a[l][p];for(var h=16;h<80;++h)f[h]=O(f[h-3]^f[h-8]^f[h-14]^f[h-16],1);for(var v=n[0],m=n[1],y=n[2],g=n[3],b=n[4],w=0;w<80;++w){var S=Math.floor(w/20),E=O(v,5)+C(S,m,y,g)+b+t[S]+f[w]>>>0;b=g,g=y,y=O(m,30)>>>0,m=v,v=E}n[0]=n[0]+v>>>0,n[1]=n[1]+m>>>0,n[2]=n[2]+y>>>0,n[3]=n[3]+g>>>0,n[4]=n[4]+b>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]})),L="00000000-0000-0000-0000-000000000000",N=function(e){if(!a(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}},801:(e,t,n)=>{"use strict";e.exports=n.p+"images/d21f10fbdb9b9180858a.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n(752)})();
//# sourceMappingURL=main.js.map