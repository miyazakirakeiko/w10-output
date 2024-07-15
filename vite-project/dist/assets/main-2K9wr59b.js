(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var Us={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Ku=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],u=n[e++],l=n[e++],h=((s&7)<<18|(o&63)<<12|(u&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},No={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],u=s+1<n.length,l=u?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,_=o>>2,w=(o&3)<<4|l>>4;let R=(l&15)<<2|f>>6,C=f&63;h||(C=64,u||(R=64)),r.push(e[_],e[w],e[R],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Do(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ku(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||f==null||w==null)throw new Gu;const R=o<<2|l>>4;if(r.push(R),f!==64){const C=l<<4&240|f>>2;if(r.push(C),w!==64){const N=f<<6&192|w;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Gu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hu=function(n){const t=Do(n);return No.encodeByteArray(t,!0)},zn=function(n){return Hu(n).replace(/\./g,"")},Qu=function(n){try{return No.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=()=>Wu().__FIREBASE_DEFAULTS__,Yu=()=>{if(typeof process>"u"||typeof Us>"u")return;const n=Us.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ju=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Qu(n[1]);return t&&JSON.parse(t)},hi=()=>{try{return Xu()||Yu()||Ju()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Zu=n=>{var t,e;return(e=(t=hi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},tc=n=>{const t=Zu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},ko=()=>{var n;return(n=hi())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[zn(JSON.stringify(e)),zn(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ic(){var n;const t=(n=hi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sc(){return!ic()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oc(){try{return typeof indexedDB=="object"}catch{return!1}}function ac(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="FirebaseError";class Ae extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=uc,Object.setPrototypeOf(this,Ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mo.prototype.create)}}class Mo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?cc(o,r):"Error",l=`${this.serviceName}: ${u} (${s}).`;return new Ae(s,l,r)}}function cc(n,t){return n.replace(lc,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const lc=/\{\$([^}]+)}/g;function Gr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],u=t[s];if(Bs(o)&&Bs(u)){if(!Gr(o,u))return!1}else if(o!==u)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Bs(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(n){return n&&n._delegate?n._delegate:n}class en{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new ec;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(fc(t))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Jt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Jt){return this.instances.has(t)}getOptions(t=Jt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&u.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Jt){return this.component?this.component.multipleInstances?t:Jt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dc(n){return n===Jt?void 0:n}function fc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new hc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const mc={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},gc=j.INFO,_c={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},yc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=_c[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Oo{constructor(t){this.name=t,this._logLevel=gc,this._logHandler=yc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?mc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}const Ec=(n,t)=>t.some(e=>n instanceof e);let js,qs;function Tc(){return js||(js=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vc(){return qs||(qs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xo=new WeakMap,Hr=new WeakMap,Lo=new WeakMap,Fr=new WeakMap,di=new WeakMap;function Ic(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(jt(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&xo.set(e,n)}).catch(()=>{}),di.set(t,n),t}function Ac(n){if(Hr.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});Hr.set(n,t)}let Qr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Hr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Lo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return jt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function wc(n){Qr=n(Qr)}function Rc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Ur(this),t,...e);return Lo.set(r,t.sort?t.sort():[t]),jt(r)}:vc().includes(n)?function(...t){return n.apply(Ur(this),t),jt(xo.get(this))}:function(...t){return jt(n.apply(Ur(this),t))}}function Pc(n){return typeof n=="function"?Rc(n):(n instanceof IDBTransaction&&Ac(n),Ec(n,Tc())?new Proxy(n,Qr):n)}function jt(n){if(n instanceof IDBRequest)return Ic(n);if(Fr.has(n))return Fr.get(n);const t=Pc(n);return t!==n&&(Fr.set(n,t),di.set(t,n)),t}const Ur=n=>di.get(n);function Sc(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const u=indexedDB.open(n,t),l=jt(u);return r&&u.addEventListener("upgradeneeded",h=>{r(jt(u.result),h.oldVersion,h.newVersion,jt(u.transaction),h)}),e&&u.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Cc=["get","getKey","getAll","getAllKeys","count"],Vc=["put","add","delete","clear"],Br=new Map;function $s(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Br.get(t))return Br.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Vc.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Cc.includes(e)))return;const o=async function(u,...l){const h=this.transaction(u,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),s&&h.done]))[0]};return Br.set(t,o),o}wc(n=>({...n,get:(t,e,r)=>$s(t,e)||n.get(t,e,r),has:(t,e)=>!!$s(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Dc(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Dc(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Wr="@firebase/app",zs="0.10.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=new Oo("@firebase/app"),Nc="@firebase/app-compat",kc="@firebase/analytics-compat",Mc="@firebase/analytics",Oc="@firebase/app-check-compat",xc="@firebase/app-check",Lc="@firebase/auth",Fc="@firebase/auth-compat",Uc="@firebase/database",Bc="@firebase/database-compat",jc="@firebase/functions",qc="@firebase/functions-compat",$c="@firebase/installations",zc="@firebase/installations-compat",Kc="@firebase/messaging",Gc="@firebase/messaging-compat",Hc="@firebase/performance",Qc="@firebase/performance-compat",Wc="@firebase/remote-config",Xc="@firebase/remote-config-compat",Yc="@firebase/storage",Jc="@firebase/storage-compat",Zc="@firebase/firestore",tl="@firebase/vertexai-preview",el="@firebase/firestore-compat",nl="firebase",rl="10.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="[DEFAULT]",il={[Wr]:"fire-core",[Nc]:"fire-core-compat",[Mc]:"fire-analytics",[kc]:"fire-analytics-compat",[xc]:"fire-app-check",[Oc]:"fire-app-check-compat",[Lc]:"fire-auth",[Fc]:"fire-auth-compat",[Uc]:"fire-rtdb",[Bc]:"fire-rtdb-compat",[jc]:"fire-fn",[qc]:"fire-fn-compat",[$c]:"fire-iid",[zc]:"fire-iid-compat",[Kc]:"fire-fcm",[Gc]:"fire-fcm-compat",[Hc]:"fire-perf",[Qc]:"fire-perf-compat",[Wc]:"fire-rc",[Xc]:"fire-rc-compat",[Yc]:"fire-gcs",[Jc]:"fire-gcs-compat",[Zc]:"fire-fst",[el]:"fire-fst-compat",[tl]:"fire-vertex","fire-js":"fire-js",[nl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new Map,sl=new Map,Yr=new Map;function Ks(n,t){try{n.container.addComponent(t)}catch(e){ee.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Gn(n){const t=n.name;if(Yr.has(t))return ee.debug(`There were multiple attempts to register component ${t}.`),!1;Yr.set(t,n);for(const e of Kn.values())Ks(e,n);for(const e of sl.values())Ks(e,n);return!0}function ol(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qt=new Mo("app","Firebase",al);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=rl;function Fo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Xr,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw qt.create("bad-app-name",{appName:String(s)});if(e||(e=ko()),!e)throw qt.create("no-options");const o=Kn.get(s);if(o){if(Gr(e,o.options)&&Gr(r,o.config))return o;throw qt.create("duplicate-app",{appName:s})}const u=new pc(s);for(const h of Yr.values())u.addComponent(h);const l=new ul(e,r,u);return Kn.set(s,l),l}function ll(n=Xr){const t=Kn.get(n);if(!t&&n===Xr&&ko())return Fo();if(!t)throw qt.create("no-app",{appName:n});return t}function pe(n,t,e){var r;let s=(r=il[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const l=[`Unable to register library "${s}" with version "${t}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&l.push("and"),u&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ee.warn(l.join(" "));return}Gn(new en(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="firebase-heartbeat-database",dl=1,nn="firebase-heartbeat-store";let jr=null;function Uo(){return jr||(jr=Sc(hl,dl,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(nn)}catch(e){console.warn(e)}}}}).catch(n=>{throw qt.create("idb-open",{originalErrorMessage:n.message})})),jr}async function fl(n){try{const e=(await Uo()).transaction(nn),r=await e.objectStore(nn).get(Bo(n));return await e.done,r}catch(t){if(t instanceof Ae)ee.warn(t.message);else{const e=qt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ee.warn(e.message)}}}async function Gs(n,t){try{const r=(await Uo()).transaction(nn,"readwrite");await r.objectStore(nn).put(t,Bo(n)),await r.done}catch(e){if(e instanceof Ae)ee.warn(e.message);else{const r=qt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ee.warn(r.message)}}}function Bo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=1024,ml=30*24*60*60*1e3;class gl{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new yl(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Hs();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const l=new Date(u.date).valueOf();return Date.now()-l<=ml}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hs(),{heartbeatsToSend:r,unsentEntries:s}=_l(this._heartbeatsCache.heartbeats),o=zn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Hs(){return new Date().toISOString().substring(0,10)}function _l(n,t=pl){const e=[];let r=n.slice();for(const s of n){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),Qs(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Qs(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class yl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oc()?ac().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await fl(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Qs(n){return zn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(n){Gn(new en("platform-logger",t=>new bc(t),"PRIVATE")),Gn(new en("heartbeat",t=>new gl(t),"PRIVATE")),pe(Wr,zs,n),pe(Wr,zs,"esm2017"),pe("fire-js","")}El("");var Tl="firebase",vl="10.12.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pe(Tl,vl,"app");var Ws=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var te,jo;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function g(){}g.prototype=p.prototype,T.D=p.prototype,T.prototype=new g,T.prototype.constructor=T,T.C=function(y,E,I){for(var m=Array(arguments.length-2),bt=2;bt<arguments.length;bt++)m[bt-2]=arguments[bt];return p.prototype[E].apply(y,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,g){g||(g=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(E=0;16>E;++E)y[E]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=T.g[0],g=T.g[1],E=T.g[2];var I=T.g[3],m=p+(I^g&(E^I))+y[0]+3614090360&4294967295;p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[1]+3905402710&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[2]+606105819&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[3]+3250441966&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+y[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[5]+1200080426&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[6]+2821735955&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[7]+4249261313&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+y[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[9]+2336552879&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[10]+4294925233&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[11]+2304563134&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+y[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[13]+4254626195&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[14]+2792965006&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[15]+1236535329&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(E^I&(g^E))+y[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[6]+3225465664&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[11]+643717713&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[0]+3921069994&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+y[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[10]+38016083&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[15]+3634488961&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[4]+3889429448&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+y[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[14]+3275163606&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[3]+4107603335&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[8]+1163531501&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+y[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[2]+4243563512&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[7]+1735328473&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[12]+2368359562&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(g^E^I)+y[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[8]+2272392833&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[11]+1839030562&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[14]+4259657740&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+y[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[4]+1272893353&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[7]+4139469664&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[10]+3200236656&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+y[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[0]+3936430074&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[3]+3572445317&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[6]+76029189&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+y[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[12]+3873151461&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[15]+530742520&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[2]+3299628645&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(E^(g|~I))+y[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[7]+1126891415&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[14]+2878612391&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[5]+4237533241&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+y[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[3]+2399980690&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[10]+4293915773&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[1]+2240044497&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+y[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[15]+4264355552&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[6]+2734768916&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[13]+1309151649&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+y[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[11]+3174756917&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[2]+718787259&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(E+(m<<21&4294967295|m>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+I&4294967295}r.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var g=p-this.blockSize,y=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=g;)s(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<p;)if(y[E++]=T.charCodeAt(I++),E==this.blockSize){s(this,y),E=0;break}}else for(;I<p;)if(y[E++]=T[I++],E==this.blockSize){s(this,y),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var g=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=g&255,g/=256;for(this.u(T),T=Array(16),p=g=0;4>p;++p)for(var y=0;32>y;y+=8)T[g++]=this.g[p]>>>y&255;return T};function o(T,p){var g=l;return Object.prototype.hasOwnProperty.call(g,T)?g[T]:g[T]=p(T)}function u(T,p){this.h=p;for(var g=[],y=!0,E=T.length-1;0<=E;E--){var I=T[E]|0;y&&I==p||(g[E]=I,y=!1)}this.g=g}var l={};function h(T){return-128<=T&&128>T?o(T,function(p){return new u([p|0],0>p?-1:0)}):new u([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return w;if(0>T)return b(f(-T));for(var p=[],g=1,y=0;T>=g;y++)p[y]=T/g|0,g*=4294967296;return new u(p,0)}function _(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return b(_(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),y=w,E=0;E<T.length;E+=8){var I=Math.min(8,T.length-E),m=parseInt(T.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(m))):(y=y.j(g),y=y.add(f(m)))}return y}var w=h(0),R=h(1),C=h(16777216);n=u.prototype,n.m=function(){if(O(this))return-b(this).m();for(var T=0,p=1,g=0;g<this.g.length;g++){var y=this.i(g);T+=(0<=y?y:4294967296+y)*p,p*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(N(this))return"0";if(O(this))return"-"+b(this).toString(T);for(var p=f(Math.pow(T,6)),g=this,y="";;){var E=rt(g,p).g;g=z(g,E.j(p));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(T);if(g=E,N(g))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function N(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function O(T){return T.h==-1}n.l=function(T){return T=z(this,T),O(T)?-1:N(T)?0:1};function b(T){for(var p=T.g.length,g=[],y=0;y<p;y++)g[y]=~T.g[y];return new u(g,~T.h).add(R)}n.abs=function(){return O(this)?b(this):this},n.add=function(T){for(var p=Math.max(this.g.length,T.g.length),g=[],y=0,E=0;E<=p;E++){var I=y+(this.i(E)&65535)+(T.i(E)&65535),m=(I>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=m>>>16,I&=65535,m&=65535,g[E]=m<<16|I}return new u(g,g[g.length-1]&-2147483648?-1:0)};function z(T,p){return T.add(b(p))}n.j=function(T){if(N(this)||N(T))return w;if(O(this))return O(T)?b(this).j(b(T)):b(b(this).j(T));if(O(T))return b(this.j(b(T)));if(0>this.l(C)&&0>T.l(C))return f(this.m()*T.m());for(var p=this.g.length+T.g.length,g=[],y=0;y<2*p;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var I=this.i(y)>>>16,m=this.i(y)&65535,bt=T.i(E)>>>16,Ce=T.i(E)&65535;g[2*y+2*E]+=m*Ce,K(g,2*y+2*E),g[2*y+2*E+1]+=I*Ce,K(g,2*y+2*E+1),g[2*y+2*E+1]+=m*bt,K(g,2*y+2*E+1),g[2*y+2*E+2]+=I*bt,K(g,2*y+2*E+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new u(g,0)};function K(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function H(T,p){this.g=T,this.h=p}function rt(T,p){if(N(p))throw Error("division by zero");if(N(T))return new H(w,w);if(O(T))return p=rt(b(T),p),new H(b(p.g),b(p.h));if(O(p))return p=rt(T,b(p)),new H(b(p.g),p.h);if(30<T.g.length){if(O(T)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var g=R,y=p;0>=y.l(T);)g=Vt(g),y=Vt(y);var E=st(g,1),I=st(y,1);for(y=st(y,2),g=st(g,2);!N(y);){var m=I.add(y);0>=m.l(T)&&(E=E.add(g),I=m),y=st(y,1),g=st(g,1)}return p=z(T,E.j(p)),new H(E,p)}for(E=w;0<=T.l(p);){for(g=Math.max(1,Math.floor(T.m()/p.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(g),m=I.j(p);O(m)||0<m.l(T);)g-=y,I=f(g),m=I.j(p);N(I)&&(I=R),E=E.add(I),T=z(T,m)}return new H(E,T)}n.A=function(T){return rt(this,T).h},n.and=function(T){for(var p=Math.max(this.g.length,T.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)&T.i(y);return new u(g,this.h&T.h)},n.or=function(T){for(var p=Math.max(this.g.length,T.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)|T.i(y);return new u(g,this.h|T.h)},n.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)^T.i(y);return new u(g,this.h^T.h)};function Vt(T){for(var p=T.g.length+1,g=[],y=0;y<p;y++)g[y]=T.i(y)<<1|T.i(y-1)>>>31;return new u(g,T.h)}function st(T,p){var g=p>>5;p%=32;for(var y=T.g.length-g,E=[],I=0;I<y;I++)E[I]=0<p?T.i(I+g)>>>p|T.i(I+g+1)<<32-p:T.i(I+g);return new u(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,jo=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=_,te=u}).apply(typeof Ws<"u"?Ws:typeof self<"u"?self:typeof window<"u"?window:{});var Mn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qo,$o,He,zo,Un,Jr,Ko,Go,Ho;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,c){return i==Array.prototype||i==Object.prototype||(i[a]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mn=="object"&&Mn];for(var a=0;a<i.length;++a){var c=i[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,a){if(a)t:{var c=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var v=i[d];if(!(v in c))break t;c=c[v]}i=i[i.length-1],d=c[i],a=a(d),a!=d&&a!=null&&t(c,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var c=0,d=!1,v={next:function(){if(!d&&c<i.length){var A=c++;return{value:a(A,i[A]),done:!1}}return d=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},l=this||self;function h(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function _(i,a,c){return i.call.apply(i.bind,arguments)}function w(i,a,c){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,d),i.apply(a,v)}}return function(){return i.apply(a,arguments)}}function R(i,a,c){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:w,R.apply(null,arguments)}function C(i,a){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function N(i,a){function c(){}c.prototype=a.prototype,i.aa=a.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(d,v,A){for(var V=Array(arguments.length-2),G=2;G<arguments.length;G++)V[G-2]=arguments[G];return a.prototype[v].apply(d,V)}}function O(i){const a=i.length;if(0<a){const c=Array(a);for(let d=0;d<a;d++)c[d]=i[d];return c}return[]}function b(i,a){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const v=i.length||0,A=d.length||0;i.length=v+A;for(let V=0;V<A;V++)i[v+V]=d[V]}else i.push(d)}}class z{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function K(i){return/^[\s\xa0]*$/.test(i)}function H(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function rt(i){return rt[" "](i),i}rt[" "]=function(){};var Vt=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function st(i,a,c){for(const d in i)a.call(c,i[d],d,i)}function T(i,a){for(const c in i)a.call(void 0,i[c],c,i)}function p(i){const a={};for(const c in i)a[c]=i[c];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,a){let c,d;for(let v=1;v<arguments.length;v++){d=arguments[v];for(c in d)i[c]=d[c];for(let A=0;A<g.length;A++)c=g[A],Object.prototype.hasOwnProperty.call(d,c)&&(i[c]=d[c])}}function E(i){var a=1;i=i.split(":");const c=[];for(;0<a&&i.length;)c.push(i.shift()),a--;return i.length&&c.push(i.join(":")),c}function I(i){l.setTimeout(()=>{throw i},0)}function m(){var i=pr;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class bt{constructor(){this.h=this.g=null}add(a,c){const d=Ce.get();d.set(a,c),this.h?this.h.next=d:this.g=d,this.h=d}}var Ce=new z(()=>new lu,i=>i.reset());class lu{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Ve,be=!1,pr=new bt,Ui=()=>{const i=l.Promise.resolve(void 0);Ve=()=>{i.then(hu)}};var hu=()=>{for(var i;i=m();){try{i.h.call(i.g)}catch(c){I(c)}var a=Ce;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}be=!1};function xt(){this.s=this.s,this.C=this.C}xt.prototype.s=!1,xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function lt(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var du=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};l.addEventListener("test",c,a),l.removeEventListener("test",c,a)}catch{}return i}();function De(i,a){if(lt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(Vt){t:{try{rt(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else c=="mouseover"?a=i.fromElement:c=="mouseout"&&(a=i.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:fu[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&De.aa.h.call(this)}}N(De,lt);var fu={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var gn="closure_listenable_"+(1e6*Math.random()|0),pu=0;function mu(i,a,c,d,v){this.listener=i,this.proxy=null,this.src=a,this.type=c,this.capture=!!d,this.ha=v,this.key=++pu,this.da=this.fa=!1}function _n(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function yn(i){this.src=i,this.g={},this.h=0}yn.prototype.add=function(i,a,c,d,v){var A=i.toString();i=this.g[A],i||(i=this.g[A]=[],this.h++);var V=gr(i,a,d,v);return-1<V?(a=i[V],c||(a.fa=!1)):(a=new mu(a,this.src,A,!!d,v),a.fa=c,i.push(a)),a};function mr(i,a){var c=a.type;if(c in i.g){var d=i.g[c],v=Array.prototype.indexOf.call(d,a,void 0),A;(A=0<=v)&&Array.prototype.splice.call(d,v,1),A&&(_n(a),i.g[c].length==0&&(delete i.g[c],i.h--))}}function gr(i,a,c,d){for(var v=0;v<i.length;++v){var A=i[v];if(!A.da&&A.listener==a&&A.capture==!!c&&A.ha==d)return v}return-1}var _r="closure_lm_"+(1e6*Math.random()|0),yr={};function Bi(i,a,c,d,v){if(Array.isArray(a)){for(var A=0;A<a.length;A++)Bi(i,a[A],c,d,v);return null}return c=$i(c),i&&i[gn]?i.K(a,c,f(d)?!!d.capture:!!d,v):gu(i,a,c,!1,d,v)}function gu(i,a,c,d,v,A){if(!a)throw Error("Invalid event type");var V=f(v)?!!v.capture:!!v,G=Tr(i);if(G||(i[_r]=G=new yn(i)),c=G.add(a,c,d,V,A),c.proxy)return c;if(d=_u(),c.proxy=d,d.src=i,d.listener=c,i.addEventListener)du||(v=V),v===void 0&&(v=!1),i.addEventListener(a.toString(),d,v);else if(i.attachEvent)i.attachEvent(qi(a.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function _u(){function i(c){return a.call(i.src,i.listener,c)}const a=yu;return i}function ji(i,a,c,d,v){if(Array.isArray(a))for(var A=0;A<a.length;A++)ji(i,a[A],c,d,v);else d=f(d)?!!d.capture:!!d,c=$i(c),i&&i[gn]?(i=i.i,a=String(a).toString(),a in i.g&&(A=i.g[a],c=gr(A,c,d,v),-1<c&&(_n(A[c]),Array.prototype.splice.call(A,c,1),A.length==0&&(delete i.g[a],i.h--)))):i&&(i=Tr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=gr(a,c,d,v)),(c=-1<i?a[i]:null)&&Er(c))}function Er(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[gn])mr(a.i,i);else{var c=i.type,d=i.proxy;a.removeEventListener?a.removeEventListener(c,d,i.capture):a.detachEvent?a.detachEvent(qi(c),d):a.addListener&&a.removeListener&&a.removeListener(d),(c=Tr(a))?(mr(c,i),c.h==0&&(c.src=null,a[_r]=null)):_n(i)}}}function qi(i){return i in yr?yr[i]:yr[i]="on"+i}function yu(i,a){if(i.da)i=!0;else{a=new De(a,this);var c=i.listener,d=i.ha||i.src;i.fa&&Er(i),i=c.call(d,a)}return i}function Tr(i){return i=i[_r],i instanceof yn?i:null}var vr="__closure_events_fn_"+(1e9*Math.random()>>>0);function $i(i){return typeof i=="function"?i:(i[vr]||(i[vr]=function(a){return i.handleEvent(a)}),i[vr])}function ht(){xt.call(this),this.i=new yn(this),this.M=this,this.F=null}N(ht,xt),ht.prototype[gn]=!0,ht.prototype.removeEventListener=function(i,a,c,d){ji(this,i,a,c,d)};function yt(i,a){var c,d=i.F;if(d)for(c=[];d;d=d.F)c.push(d);if(i=i.M,d=a.type||a,typeof a=="string")a=new lt(a,i);else if(a instanceof lt)a.target=a.target||i;else{var v=a;a=new lt(d,i),y(a,v)}if(v=!0,c)for(var A=c.length-1;0<=A;A--){var V=a.g=c[A];v=En(V,d,!0,a)&&v}if(V=a.g=i,v=En(V,d,!0,a)&&v,v=En(V,d,!1,a)&&v,c)for(A=0;A<c.length;A++)V=a.g=c[A],v=En(V,d,!1,a)&&v}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var c=i.g[a],d=0;d<c.length;d++)_n(c[d]);delete i.g[a],i.h--}}this.F=null},ht.prototype.K=function(i,a,c,d){return this.i.add(String(i),a,!1,c,d)},ht.prototype.L=function(i,a,c,d){return this.i.add(String(i),a,!0,c,d)};function En(i,a,c,d){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,A=0;A<a.length;++A){var V=a[A];if(V&&!V.da&&V.capture==c){var G=V.listener,ot=V.ha||V.src;V.fa&&mr(i.i,V),v=G.call(ot,d)!==!1&&v}}return v&&!d.defaultPrevented}function zi(i,a,c){if(typeof i=="function")c&&(i=R(i,c));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:l.setTimeout(i,a||0)}function Ki(i){i.g=zi(()=>{i.g=null,i.i&&(i.i=!1,Ki(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class Eu extends xt{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ki(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ne(i){xt.call(this),this.h=i,this.g={}}N(Ne,xt);var Gi=[];function Hi(i){st(i.g,function(a,c){this.g.hasOwnProperty(c)&&Er(a)},i),i.g={}}Ne.prototype.N=function(){Ne.aa.N.call(this),Hi(this)},Ne.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ir=l.JSON.stringify,Tu=l.JSON.parse,vu=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function Ar(){}Ar.prototype.h=null;function Qi(i){return i.h||(i.h=i.i())}function Wi(){}var ke={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wr(){lt.call(this,"d")}N(wr,lt);function Rr(){lt.call(this,"c")}N(Rr,lt);var Qt={},Xi=null;function Tn(){return Xi=Xi||new ht}Qt.La="serverreachability";function Yi(i){lt.call(this,Qt.La,i)}N(Yi,lt);function Me(i){const a=Tn();yt(a,new Yi(a))}Qt.STAT_EVENT="statevent";function Ji(i,a){lt.call(this,Qt.STAT_EVENT,i),this.stat=a}N(Ji,lt);function Et(i){const a=Tn();yt(a,new Ji(a,i))}Qt.Ma="timingevent";function Zi(i,a){lt.call(this,Qt.Ma,i),this.size=a}N(Zi,lt);function Oe(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},a)}function xe(){this.g=!0}xe.prototype.xa=function(){this.g=!1};function Iu(i,a,c,d,v,A){i.info(function(){if(i.g)if(A)for(var V="",G=A.split("&"),ot=0;ot<G.length;ot++){var q=G[ot].split("=");if(1<q.length){var dt=q[0];q=q[1];var ft=dt.split("_");V=2<=ft.length&&ft[1]=="type"?V+(dt+"="+q+"&"):V+(dt+"=redacted&")}}else V=null;else V=A;return"XMLHTTP REQ ("+d+") [attempt "+v+"]: "+a+`
`+c+`
`+V})}function Au(i,a,c,d,v,A,V){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+v+"]: "+a+`
`+c+`
`+A+" "+V})}function ae(i,a,c,d){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+Ru(i,c)+(d?" "+d:"")})}function wu(i,a){i.info(function(){return"TIMEOUT: "+a})}xe.prototype.info=function(){};function Ru(i,a){if(!i.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var d=c[i];if(!(2>d.length)){var v=d[1];if(Array.isArray(v)&&!(1>v.length)){var A=v[0];if(A!="noop"&&A!="stop"&&A!="close")for(var V=1;V<v.length;V++)v[V]=""}}}}return Ir(c)}catch{return a}}var vn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ts={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pr;function In(){}N(In,Ar),In.prototype.g=function(){return new XMLHttpRequest},In.prototype.i=function(){return{}},Pr=new In;function Lt(i,a,c,d){this.j=i,this.i=a,this.l=c,this.R=d||1,this.U=new Ne(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new es}function es(){this.i=null,this.g="",this.h=!1}var ns={},Sr={};function Cr(i,a,c){i.L=1,i.v=Pn(Dt(a)),i.m=c,i.P=!0,rs(i,null)}function rs(i,a){i.F=Date.now(),An(i),i.A=Dt(i.v);var c=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),_s(c.i,"t",d),i.C=0,c=i.j.J,i.h=new es,i.g=Os(i.j,c?a:null,!i.m),0<i.O&&(i.M=new Eu(R(i.Y,i,i.g),i.O)),a=i.U,c=i.g,d=i.ca;var v="readystatechange";Array.isArray(v)||(v&&(Gi[0]=v.toString()),v=Gi);for(var A=0;A<v.length;A++){var V=Bi(c,v[A],d||a.handleEvent,!1,a.h||a);if(!V)break;a.g[V.key]=V}a=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),Me(),Iu(i.i,i.u,i.A,i.l,i.R,i.m)}Lt.prototype.ca=function(i){i=i.target;const a=this.M;a&&Nt(i)==3?a.j():this.Y(i)},Lt.prototype.Y=function(i){try{if(i==this.g)t:{const ft=Nt(this.g);var a=this.g.Ba();const le=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||ws(this.g)))){this.J||ft!=4||a==7||(a==8||0>=le?Me(3):Me(2)),Vr(this);var c=this.g.Z();this.X=c;e:if(is(this)){var d=ws(this.g);i="";var v=d.length,A=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wt(this),Le(this);var V="";break e}this.h.i=new l.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,i+=this.h.i.decode(d[a],{stream:!(A&&a==v-1)});d.length=0,this.h.g+=i,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=c==200,Au(this.i,this.u,this.A,this.l,this.R,ft,c),this.o){if(this.T&&!this.K){e:{if(this.g){var G,ot=this.g;if((G=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(G)){var q=G;break e}}q=null}if(c=q)ae(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,br(this,c);else{this.o=!1,this.s=3,Et(12),Wt(this),Le(this);break t}}if(this.P){c=!0;let It;for(;!this.J&&this.C<V.length;)if(It=Pu(this,V),It==Sr){ft==4&&(this.s=4,Et(14),c=!1),ae(this.i,this.l,null,"[Incomplete Response]");break}else if(It==ns){this.s=4,Et(15),ae(this.i,this.l,V,"[Invalid Chunk]"),c=!1;break}else ae(this.i,this.l,It,null),br(this,It);if(is(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||V.length!=0||this.h.h||(this.s=1,Et(16),c=!1),this.o=this.o&&c,!c)ae(this.i,this.l,V,"[Invalid Chunked Response]"),Wt(this),Le(this);else if(0<V.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),xr(dt),dt.M=!0,Et(11))}}else ae(this.i,this.l,V,null),br(this,V);ft==4&&Wt(this),this.o&&!this.J&&(ft==4?Ds(this.j,this):(this.o=!1,An(this)))}else $u(this.g),c==400&&0<V.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),Wt(this),Le(this)}}}catch{}finally{}};function is(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Pu(i,a){var c=i.C,d=a.indexOf(`
`,c);return d==-1?Sr:(c=Number(a.substring(c,d)),isNaN(c)?ns:(d+=1,d+c>a.length?Sr:(a=a.slice(d,d+c),i.C=d+c,a)))}Lt.prototype.cancel=function(){this.J=!0,Wt(this)};function An(i){i.S=Date.now()+i.I,ss(i,i.I)}function ss(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Oe(R(i.ba,i),a)}function Vr(i){i.B&&(l.clearTimeout(i.B),i.B=null)}Lt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(wu(this.i,this.A),this.L!=2&&(Me(),Et(17)),Wt(this),this.s=2,Le(this)):ss(this,this.S-i)};function Le(i){i.j.G==0||i.J||Ds(i.j,i)}function Wt(i){Vr(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,Hi(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function br(i,a){try{var c=i.j;if(c.G!=0&&(c.g==i||Dr(c.h,i))){if(!i.K&&Dr(c.h,i)&&c.G==3){try{var d=c.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var v=d;if(v[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)Dn(c),Vn(c);else break t;Or(c),Et(18)}}else c.za=v[1],0<c.za-c.T&&37500>v[2]&&c.F&&c.v==0&&!c.C&&(c.C=Oe(R(c.Za,c),6e3));if(1>=us(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Yt(c,11)}else if((i.K||c.g==i)&&Dn(c),!K(a))for(v=c.Da.g.parse(a),a=0;a<v.length;a++){let q=v[a];if(c.T=q[0],q=q[1],c.G==2)if(q[0]=="c"){c.K=q[1],c.ia=q[2];const dt=q[3];dt!=null&&(c.la=dt,c.j.info("VER="+c.la));const ft=q[4];ft!=null&&(c.Aa=ft,c.j.info("SVER="+c.Aa));const le=q[5];le!=null&&typeof le=="number"&&0<le&&(d=1.5*le,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const It=i.g;if(It){const kn=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(kn){var A=d.h;A.g||kn.indexOf("spdy")==-1&&kn.indexOf("quic")==-1&&kn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Nr(A,A.h),A.h=null))}if(d.D){const Lr=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Lr&&(d.ya=Lr,W(d.I,d.D,Lr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var V=i;if(d.qa=Ms(d,d.J?d.ia:null,d.W),V.K){cs(d.h,V);var G=V,ot=d.L;ot&&(G.I=ot),G.B&&(Vr(G),An(G)),d.g=V}else Vs(d);0<c.i.length&&bn(c)}else q[0]!="stop"&&q[0]!="close"||Yt(c,7);else c.G==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?Yt(c,7):Mr(c):q[0]!="noop"&&c.l&&c.l.ta(q),c.v=0)}}Me(4)}catch{}}var Su=class{constructor(i,a){this.g=i,this.map=a}};function os(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function as(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function us(i){return i.h?1:i.g?i.g.size:0}function Dr(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function Nr(i,a){i.g?i.g.add(a):i.h=a}function cs(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}os.prototype.cancel=function(){if(this.i=ls(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ls(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const c of i.g.values())a=a.concat(c.D);return a}return O(i.i)}function Cu(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var a=[],c=i.length,d=0;d<c;d++)a.push(i[d]);return a}a=[],c=0;for(d in i)a[c++]=i[d];return a}function Vu(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var a=[];i=i.length;for(var c=0;c<i;c++)a.push(c);return a}a=[],c=0;for(const d in i)a[c++]=d;return a}}}function hs(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var c=Vu(i),d=Cu(i),v=d.length,A=0;A<v;A++)a.call(void 0,d[A],c&&c[A],i)}var ds=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bu(i,a){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var d=i[c].indexOf("="),v=null;if(0<=d){var A=i[c].substring(0,d);v=i[c].substring(d+1)}else A=i[c];a(A,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Xt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Xt){this.h=i.h,wn(this,i.j),this.o=i.o,this.g=i.g,Rn(this,i.s),this.l=i.l;var a=i.i,c=new Be;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),fs(this,c),this.m=i.m}else i&&(a=String(i).match(ds))?(this.h=!1,wn(this,a[1]||"",!0),this.o=Fe(a[2]||""),this.g=Fe(a[3]||"",!0),Rn(this,a[4]),this.l=Fe(a[5]||"",!0),fs(this,a[6]||"",!0),this.m=Fe(a[7]||"")):(this.h=!1,this.i=new Be(null,this.h))}Xt.prototype.toString=function(){var i=[],a=this.j;a&&i.push(Ue(a,ps,!0),":");var c=this.g;return(c||a=="file")&&(i.push("//"),(a=this.o)&&i.push(Ue(a,ps,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(Ue(c,c.charAt(0)=="/"?ku:Nu,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",Ue(c,Ou)),i.join("")};function Dt(i){return new Xt(i)}function wn(i,a,c){i.j=c?Fe(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function Rn(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function fs(i,a,c){a instanceof Be?(i.i=a,xu(i.i,i.h)):(c||(a=Ue(a,Mu)),i.i=new Be(a,i.h))}function W(i,a,c){i.i.set(a,c)}function Pn(i){return W(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Fe(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ue(i,a,c){return typeof i=="string"?(i=encodeURI(i).replace(a,Du),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Du(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ps=/[#\/\?@]/g,Nu=/[#\?:]/g,ku=/[#\?]/g,Mu=/[#\?@]/g,Ou=/#/g;function Be(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function Ft(i){i.g||(i.g=new Map,i.h=0,i.i&&bu(i.i,function(a,c){i.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=Be.prototype,n.add=function(i,a){Ft(this),this.i=null,i=ue(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(a),this.h+=1,this};function ms(i,a){Ft(i),a=ue(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function gs(i,a){return Ft(i),a=ue(i,a),i.g.has(a)}n.forEach=function(i,a){Ft(this),this.g.forEach(function(c,d){c.forEach(function(v){i.call(a,v,d,this)},this)},this)},n.na=function(){Ft(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let d=0;d<a.length;d++){const v=i[d];for(let A=0;A<v.length;A++)c.push(a[d])}return c},n.V=function(i){Ft(this);let a=[];if(typeof i=="string")gs(this,i)&&(a=a.concat(this.g.get(ue(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)a=a.concat(i[c])}return a},n.set=function(i,a){return Ft(this),this.i=null,i=ue(this,i),gs(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function _s(i,a,c){ms(i,a),0<c.length&&(i.i=null,i.g.set(ue(i,a),O(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var d=a[c];const A=encodeURIComponent(String(d)),V=this.V(d);for(d=0;d<V.length;d++){var v=A;V[d]!==""&&(v+="="+encodeURIComponent(String(V[d]))),i.push(v)}}return this.i=i.join("&")};function ue(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function xu(i,a){a&&!i.j&&(Ft(i),i.i=null,i.g.forEach(function(c,d){var v=d.toLowerCase();d!=v&&(ms(this,d),_s(this,v,c))},i)),i.j=a}function Lu(i,a){const c=new xe;if(l.Image){const d=new Image;d.onload=C(Ut,c,"TestLoadImage: loaded",!0,a,d),d.onerror=C(Ut,c,"TestLoadImage: error",!1,a,d),d.onabort=C(Ut,c,"TestLoadImage: abort",!1,a,d),d.ontimeout=C(Ut,c,"TestLoadImage: timeout",!1,a,d),l.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else a(!1)}function Fu(i,a){const c=new xe,d=new AbortController,v=setTimeout(()=>{d.abort(),Ut(c,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:d.signal}).then(A=>{clearTimeout(v),A.ok?Ut(c,"TestPingServer: ok",!0,a):Ut(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),Ut(c,"TestPingServer: error",!1,a)})}function Ut(i,a,c,d,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),d(c)}catch{}}function Uu(){this.g=new vu}function Bu(i,a,c){const d=c||"";try{hs(i,function(v,A){let V=v;f(v)&&(V=Ir(v)),a.push(d+A+"="+encodeURIComponent(V))})}catch(v){throw a.push(d+"type="+encodeURIComponent("_badmap")),v}}function je(i){this.l=i.Ub||null,this.j=i.eb||!1}N(je,Ar),je.prototype.g=function(){return new Sn(this.l,this.j)},je.prototype.i=function(i){return function(){return i}}({});function Sn(i,a){ht.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Sn,ht),n=Sn.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,$e(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||l).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qe(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,$e(this)),this.g&&(this.readyState=3,$e(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ys(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function ys(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?qe(this):$e(this),this.readyState==3&&ys(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,qe(this))},n.Qa=function(i){this.g&&(this.response=i,qe(this))},n.ga=function(){this.g&&qe(this)};function qe(i){i.readyState=4,i.l=null,i.j=null,i.v=null,$e(i)}n.setRequestHeader=function(i,a){this.u.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=a.next();return i.join(`\r
`)};function $e(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Sn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Es(i){let a="";return st(i,function(c,d){a+=d,a+=":",a+=c,a+=`\r
`}),a}function kr(i,a,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=Es(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):W(i,a,c))}function J(i){ht.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(J,ht);var ju=/^https?$/i,qu=["POST","PUT"];n=J.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,a,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pr.g(),this.v=this.o?Qi(this.o):Qi(Pr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(A){Ts(this,A);return}if(i=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var v in d)c.set(v,d[v]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const A of d.keys())c.set(A,d.get(A));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(A=>A.toLowerCase()=="content-type"),v=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(qu,a,void 0))||d||v||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,V]of c)this.g.setRequestHeader(A,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{As(this),this.u=!0,this.g.send(i),this.u=!1}catch(A){Ts(this,A)}};function Ts(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,vs(i),Cn(i)}function vs(i){i.A||(i.A=!0,yt(i,"complete"),yt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,yt(this,"complete"),yt(this,"abort"),Cn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cn(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Is(this):this.bb())},n.bb=function(){Is(this)};function Is(i){if(i.h&&typeof u<"u"&&(!i.v[1]||Nt(i)!=4||i.Z()!=2)){if(i.u&&Nt(i)==4)zi(i.Ea,0,i);else if(yt(i,"readystatechange"),Nt(i)==4){i.h=!1;try{const V=i.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var d;if(d=V===0){var v=String(i.D).match(ds)[1]||null;!v&&l.self&&l.self.location&&(v=l.self.location.protocol.slice(0,-1)),d=!ju.test(v?v.toLowerCase():"")}c=d}if(c)yt(i,"complete"),yt(i,"success");else{i.m=6;try{var A=2<Nt(i)?i.g.statusText:""}catch{A=""}i.l=A+" ["+i.Z()+"]",vs(i)}}finally{Cn(i)}}}}function Cn(i,a){if(i.g){As(i);const c=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||yt(i,"ready");try{c.onreadystatechange=d}catch{}}}function As(i){i.I&&(l.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Nt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),Tu(a)}};function ws(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function $u(i){const a={};i=(i.g&&2<=Nt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(K(i[d]))continue;var c=E(i[d]);const v=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const A=a[v]||[];a[v]=A,A.push(c)}T(a,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ze(i,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||a}function Rs(i){this.Aa=0,this.i=[],this.j=new xe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ze("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ze("baseRetryDelayMs",5e3,i),this.cb=ze("retryDelaySeedMs",1e4,i),this.Wa=ze("forwardChannelMaxRetries",2,i),this.wa=ze("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new os(i&&i.concurrentRequestLimit),this.Da=new Uu,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Rs.prototype,n.la=8,n.G=1,n.connect=function(i,a,c,d){Et(0),this.W=i,this.H=a||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=Ms(this,null,this.W),bn(this)};function Mr(i){if(Ps(i),i.G==3){var a=i.U++,c=Dt(i.I);if(W(c,"SID",i.K),W(c,"RID",a),W(c,"TYPE","terminate"),Ke(i,c),a=new Lt(i,i.j,a),a.L=2,a.v=Pn(Dt(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=a.v,c=!0),c||(a.g=Os(a.j,null),a.g.ea(a.v)),a.F=Date.now(),An(a)}ks(i)}function Vn(i){i.g&&(xr(i),i.g.cancel(),i.g=null)}function Ps(i){Vn(i),i.u&&(l.clearTimeout(i.u),i.u=null),Dn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function bn(i){if(!as(i.h)&&!i.s){i.s=!0;var a=i.Ga;Ve||Ui(),be||(Ve(),be=!0),pr.add(a,i),i.B=0}}function zu(i,a){return us(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Oe(R(i.Ga,i,a),Ns(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const v=new Lt(this,this.j,i);let A=this.o;if(this.S&&(A?(A=p(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(v.H=A,A=null),this.P)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=Cs(this,v,a),c=Dt(this.I),W(c,"RID",i),W(c,"CVER",22),this.D&&W(c,"X-HTTP-Session-Id",this.D),Ke(this,c),A&&(this.O?a="headers="+encodeURIComponent(String(Es(A)))+"&"+a:this.m&&kr(c,this.m,A)),Nr(this.h,v),this.Ua&&W(c,"TYPE","init"),this.P?(W(c,"$req",a),W(c,"SID","null"),v.T=!0,Cr(v,c,null)):Cr(v,c,a),this.G=2}}else this.G==3&&(i?Ss(this,i):this.i.length==0||as(this.h)||Ss(this))};function Ss(i,a){var c;a?c=a.l:c=i.U++;const d=Dt(i.I);W(d,"SID",i.K),W(d,"RID",c),W(d,"AID",i.T),Ke(i,d),i.m&&i.o&&kr(d,i.m,i.o),c=new Lt(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),a&&(i.i=a.D.concat(i.i)),a=Cs(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Nr(i.h,c),Cr(c,d,a)}function Ke(i,a){i.H&&st(i.H,function(c,d){W(a,d,c)}),i.l&&hs({},function(c,d){W(a,d,c)})}function Cs(i,a,c){c=Math.min(i.i.length,c);var d=i.l?R(i.l.Na,i.l,i):null;t:{var v=i.i;let A=-1;for(;;){const V=["count="+c];A==-1?0<c?(A=v[0].g,V.push("ofs="+A)):A=0:V.push("ofs="+A);let G=!0;for(let ot=0;ot<c;ot++){let q=v[ot].g;const dt=v[ot].map;if(q-=A,0>q)A=Math.max(0,v[ot].g-100),G=!1;else try{Bu(dt,V,"req"+q+"_")}catch{d&&d(dt)}}if(G){d=V.join("&");break t}}}return i=i.i.splice(0,c),a.D=i,d}function Vs(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;Ve||Ui(),be||(Ve(),be=!0),pr.add(a,i),i.v=0}}function Or(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Oe(R(i.Fa,i),Ns(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,bs(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Oe(R(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Vn(this),bs(this))};function xr(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function bs(i){i.g=new Lt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Dt(i.qa);W(a,"RID","rpc"),W(a,"SID",i.K),W(a,"AID",i.T),W(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&W(a,"TO",i.ja),W(a,"TYPE","xmlhttp"),Ke(i,a),i.m&&i.o&&kr(a,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=Pn(Dt(a)),c.m=null,c.P=!0,rs(c,i)}n.Za=function(){this.C!=null&&(this.C=null,Vn(this),Or(this),Et(19))};function Dn(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function Ds(i,a){var c=null;if(i.g==a){Dn(i),xr(i),i.g=null;var d=2}else if(Dr(i.h,a))c=a.D,cs(i.h,a),d=1;else return;if(i.G!=0){if(a.o)if(d==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var v=i.B;d=Tn(),yt(d,new Zi(d,c)),bn(i)}else Vs(i);else if(v=a.s,v==3||v==0&&0<a.X||!(d==1&&zu(i,a)||d==2&&Or(i)))switch(c&&0<c.length&&(a=i.h,a.i=a.i.concat(c)),v){case 1:Yt(i,5);break;case 4:Yt(i,10);break;case 3:Yt(i,6);break;default:Yt(i,2)}}}function Ns(i,a){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*a}function Yt(i,a){if(i.j.info("Error code "+a),a==2){var c=R(i.fb,i),d=i.Xa;const v=!d;d=new Xt(d||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||wn(d,"https"),Pn(d),v?Lu(d.toString(),c):Fu(d.toString(),c)}else Et(2);i.G=0,i.l&&i.l.sa(a),ks(i),Ps(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function ks(i){if(i.G=0,i.ka=[],i.l){const a=ls(i.h);(a.length!=0||i.i.length!=0)&&(b(i.ka,a),b(i.ka,i.i),i.h.i.length=0,O(i.i),i.i.length=0),i.l.ra()}}function Ms(i,a,c){var d=c instanceof Xt?Dt(c):new Xt(c);if(d.g!="")a&&(d.g=a+"."+d.g),Rn(d,d.s);else{var v=l.location;d=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var A=new Xt(null);d&&wn(A,d),a&&(A.g=a),v&&Rn(A,v),c&&(A.l=c),d=A}return c=i.D,a=i.ya,c&&a&&W(d,c,a),W(d,"VER",i.la),Ke(i,d),d}function Os(i,a,c){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new J(new je({eb:c})):new J(i.pa),a.Ha(i.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xs(){}n=xs.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Nn(){}Nn.prototype.g=function(i,a){return new Tt(i,a)};function Tt(i,a){ht.call(this),this.g=new Rs(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!K(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!K(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new ce(this)}N(Tt,ht),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Mr(this.g)},Tt.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=Ir(i),i=c);a.i.push(new Su(a.Ya++,i)),a.G==3&&bn(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Mr(this.g),delete this.g,Tt.aa.N.call(this)};function Ls(i){wr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const c in a){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}N(Ls,wr);function Fs(){Rr.call(this),this.status=1}N(Fs,Rr);function ce(i){this.g=i}N(ce,xs),ce.prototype.ua=function(){yt(this.g,"a")},ce.prototype.ta=function(i){yt(this.g,new Ls(i))},ce.prototype.sa=function(i){yt(this.g,new Fs)},ce.prototype.ra=function(){yt(this.g,"b")},Nn.prototype.createWebChannel=Nn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,Ho=function(){return new Nn},Go=function(){return Tn()},Ko=Qt,Jr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vn.NO_ERROR=0,vn.TIMEOUT=8,vn.HTTP_ERROR=6,Un=vn,ts.COMPLETE="complete",zo=ts,Wi.EventType=ke,ke.OPEN="a",ke.CLOSE="b",ke.ERROR="c",ke.MESSAGE="d",ht.prototype.listen=ht.prototype.K,He=Wi,$o=je,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,qo=J}).apply(typeof Mn<"u"?Mn:typeof self<"u"?self:typeof window<"u"?window:{});const Xs="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let we="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=new Oo("@firebase/firestore");function Ge(){return ne.logLevel}function D(n,...t){if(ne.logLevel<=j.DEBUG){const e=t.map(fi);ne.debug(`Firestore (${we}): ${n}`,...e)}}function Mt(n,...t){if(ne.logLevel<=j.ERROR){const e=t.map(fi);ne.error(`Firestore (${we}): ${n}`,...e)}}function ge(n,...t){if(ne.logLevel<=j.WARN){const e=t.map(fi);ne.warn(`Firestore (${we}): ${n}`,...e)}}function fi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n="Unexpected state"){const t=`FIRESTORE (${we}) INTERNAL ASSERTION FAILED: `+n;throw Mt(t),new Error(t)}function Q(n,t){n||x()}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Ae{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Il{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(mt.UNAUTHENTICATED))}shutdown(){}}class Al{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class wl{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new $t,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},l=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new $t)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new Qo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Q(t===null||typeof t=="string"),new mt(t)}}class Rl{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Pl{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Rl(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cl{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Q(typeof e.token=="string"),this.R=e.token,new Sl(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Vl(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function $(n,t){return n<t?-1:n>t?1:0}function _e(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new k(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new nt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.timestamp=t}static fromTimestamp(t){return new L(t)}static min(){return new L(new nt(0,0))}static max(){return new L(new nt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,e,r){e===void 0?e=0:e>t.length&&x(),r===void 0?r=t.length-e:r>t.length-e&&x(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return rn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof rn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends rn{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new k(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const bl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends rn{construct(t,e,r){return new ut(t,e,r)}static isValidIdentifier(t){return bl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new k(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new k(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new k(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(u=!u,s++):l!=="."||u?(r+=l,s++):(o(),s++)}if(o(),u)throw new k(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(X.fromString(t))}static fromName(t){return new M(X.fromString(t).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new X(t.slice()))}}function Dl(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=L.fromTimestamp(r===1e9?new nt(e+1,0):new nt(e,r));return new Kt(s,M.empty(),t)}function Nl(n){return new Kt(n.readTime,n.key,-1)}class Kt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Kt(L.min(),M.empty(),-1)}static max(){return new Kt(L.max(),M.empty(),-1)}}function kl(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:$(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ol{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ln(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Ml)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let s=0,o=0,u=!1;t.forEach(l=>{++s,l.next(()=>{++o,u&&o===s&&e()},h=>r(h))}),u=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(s=>s?P.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,s)=>{const o=t.length,u=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(_=>{u[f]=_,++l,l===o&&r(u)},_=>s(_))}})}static doWhile(t,e){return new P((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function xl(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function hn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}pi.oe=-1;function nr(n){return n==null}function Hn(n){return n===0&&1/n==-1/0}function Ll(n){return typeof n=="number"&&Number.isInteger(n)&&!Hn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Re(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Xo(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new On(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new On(this.root,t,this.comparator,!1)}getReverseIterator(){return new On(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new On(this.root,t,this.comparator,!0)}}class On{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new at(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,r,s,o){return this}insert(t,e,r){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Js(this.data.getIterator())}getIteratorFrom(t){return new Js(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ct)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ct(this.comparator);return e.data=t,e}}class Js{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new At([])}unionWith(t){let e=new ct(ut.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new At(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return _e(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Yo("Invalid base64 string: "+o):o}}(t);return new _t(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new _t(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const Fl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gt(n){if(Q(!!n),typeof n=="string"){let t=0;const e=Fl.exec(n);if(Q(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function re(n){return typeof n=="string"?_t.fromBase64String(n):_t.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function gi(n){const t=n.mapValue.fields.__previous_value__;return mi(t)?gi(t):t}function sn(n){const t=Gt(n.mapValue.fields.__local_write_time__.timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t,e,r,s,o,u,l,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f}}class on{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new on("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof on&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ie(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?mi(n)?4:Bl(n)?9007199254740991:10:x()}function St(n,t){if(n===t)return!0;const e=ie(n);if(e!==ie(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return sn(n).isEqual(sn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=Gt(s.timestampValue),l=Gt(o.timestampValue);return u.seconds===l.seconds&&u.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return re(s.bytesValue).isEqual(re(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return tt(s.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(s.geoPointValue.longitude)===tt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return tt(s.integerValue)===tt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=tt(s.doubleValue),l=tt(o.doubleValue);return u===l?Hn(u)===Hn(l):isNaN(u)&&isNaN(l)}return!1}(n,t);case 9:return _e(n.arrayValue.values||[],t.arrayValue.values||[],St);case 10:return function(s,o){const u=s.mapValue.fields||{},l=o.mapValue.fields||{};if(Ys(u)!==Ys(l))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(l[h]===void 0||!St(u[h],l[h])))return!1;return!0}(n,t);default:return x()}}function an(n,t){return(n.values||[]).find(e=>St(e,t))!==void 0}function ye(n,t){if(n===t)return 0;const e=ie(n),r=ie(t);if(e!==r)return $(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,t.booleanValue);case 2:return function(o,u){const l=tt(o.integerValue||o.doubleValue),h=tt(u.integerValue||u.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,t);case 3:return Zs(n.timestampValue,t.timestampValue);case 4:return Zs(sn(n),sn(t));case 5:return $(n.stringValue,t.stringValue);case 6:return function(o,u){const l=re(o),h=re(u);return l.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const l=o.split("/"),h=u.split("/");for(let f=0;f<l.length&&f<h.length;f++){const _=$(l[f],h[f]);if(_!==0)return _}return $(l.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const l=$(tt(o.latitude),tt(u.latitude));return l!==0?l:$(tt(o.longitude),tt(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,u){const l=o.values||[],h=u.values||[];for(let f=0;f<l.length&&f<h.length;++f){const _=ye(l[f],h[f]);if(_)return _}return $(l.length,h.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,u){if(o===xn.mapValue&&u===xn.mapValue)return 0;if(o===xn.mapValue)return 1;if(u===xn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=u.fields||{},_=Object.keys(f);h.sort(),_.sort();for(let w=0;w<h.length&&w<_.length;++w){const R=$(h[w],_[w]);if(R!==0)return R;const C=ye(l[h[w]],f[_[w]]);if(C!==0)return C}return $(h.length,_.length)}(n.mapValue,t.mapValue);default:throw x()}}function Zs(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return $(n,t);const e=Gt(n),r=Gt(t),s=$(e.seconds,r.seconds);return s!==0?s:$(e.nanos,r.nanos)}function Ee(n){return Zr(n)}function Zr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Gt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return re(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Zr(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of r)o?o=!1:s+=",",s+=`${u}:${Zr(e.fields[u])}`;return s+"}"}(n.mapValue):x()}function ti(n){return!!n&&"integerValue"in n}function _i(n){return!!n&&"arrayValue"in n}function to(n){return!!n&&"nullValue"in n}function eo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Bn(n){return!!n&&"mapValue"in n}function Xe(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Re(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Xe(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Xe(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Bl(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Bn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Xe(e)}setAll(t){let e=ut.emptyPath(),r={},s=[];t.forEach((u,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=l.popLast()}u?r[l.lastSegment()]=Xe(u):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Bn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return St(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Bn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Re(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new vt(Xe(this.value))}}function Jo(n){const t=[];return Re(n.fields,(e,r)=>{const s=new ut([e]);if(Bn(r)){const o=Jo(r.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new At(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e,r,s,o,u,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=u,this.documentState=l}static newInvalidDocument(t){return new gt(t,0,L.min(),L.min(),L.min(),vt.empty(),0)}static newFoundDocument(t,e,r,s){return new gt(t,1,e,L.min(),r,s,0)}static newNoDocument(t,e){return new gt(t,2,e,L.min(),L.min(),vt.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,L.min(),L.min(),vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,e){this.position=t,this.inclusive=e}}function no(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],u=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(u.referenceValue),e.key):r=ye(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ro(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!St(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,e="asc"){this.field=t,this.dir=e}}function jl(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{}class et extends Zo{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new $l(t,e,r):e==="array-contains"?new Gl(t,r):e==="in"?new Hl(t,r):e==="not-in"?new Ql(t,r):e==="array-contains-any"?new Wl(t,r):new et(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new zl(t,r):new Kl(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ye(e,this.value)):e!==null&&ie(this.value)===ie(e)&&this.matchesComparison(ye(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ct extends Zo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ct(t,e)}matches(t){return ta(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ta(n){return n.op==="and"}function ea(n){return ql(n)&&ta(n)}function ql(n){for(const t of n.filters)if(t instanceof Ct)return!1;return!0}function ei(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+Ee(n.value);if(ea(n))return n.filters.map(t=>ei(t)).join(",");{const t=n.filters.map(e=>ei(e)).join(",");return`${n.op}(${t})`}}function na(n,t){return n instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&St(r.value,s.value)}(n,t):n instanceof Ct?function(r,s){return s instanceof Ct&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,u,l)=>o&&na(u,s.filters[l]),!0):!1}(n,t):void x()}function ra(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${Ee(e.value)}`}(n):n instanceof Ct?function(e){return e.op.toString()+" {"+e.getFilters().map(ra).join(" ,")+"}"}(n):"Filter"}class $l extends et{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class zl extends et{constructor(t,e){super(t,"in",e),this.keys=ia("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Kl extends et{constructor(t,e){super(t,"not-in",e),this.keys=ia("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ia(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class Gl extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return _i(e)&&an(e.arrayValue,this.value)}}class Hl extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&an(this.value.arrayValue,e)}}class Ql extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(an(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!an(this.value.arrayValue,e)}}class Wl extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!_i(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>an(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t,e=null,r=[],s=[],o=null,u=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=u,this.endAt=l,this.ue=null}}function io(n,t=null,e=[],r=[],s=null,o=null,u=null){return new Xl(n,t,e,r,s,o,u)}function yi(n){const t=F(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ei(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),nr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ee(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ee(r)).join(",")),t.ue=e}return t.ue}function Ei(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!jl(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!na(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ro(n.startAt,t.startAt)&&ro(n.endAt,t.endAt)}function ni(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,e=null,r=[],s=[],o=null,u="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=u,this.startAt=l,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Yl(n,t,e,r,s,o,u,l){return new rr(n,t,e,r,s,o,u,l)}function sa(n){return new rr(n)}function so(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Jl(n){return n.collectionGroup!==null}function Ye(n){const t=F(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let l=new ct(ut.comparator);return u.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Wn(o,r))}),e.has(ut.keyField().canonicalString())||t.ce.push(new Wn(ut.keyField(),r))}return t.ce}function Rt(n){const t=F(n);return t.le||(t.le=Zl(t,Ye(n))),t.le}function Zl(n,t){if(n.limitType==="F")return io(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Wn(s.field,o)});const e=n.endAt?new Qn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Qn(n.startAt.position,n.startAt.inclusive):null;return io(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ri(n,t,e){return new rr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ir(n,t){return Ei(Rt(n),Rt(t))&&n.limitType===t.limitType}function oa(n){return`${yi(Rt(n))}|lt:${n.limitType}`}function he(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>ra(s)).join(", ")}]`),nr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Ee(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Ee(s)).join(",")),`Target(${r})`}(Rt(n))}; limitType=${n.limitType})`}function sr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Ye(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(u,l,h){const f=no(u,l,h);return u.inclusive?f<=0:f<0}(r.startAt,Ye(r),s)||r.endAt&&!function(u,l,h){const f=no(u,l,h);return u.inclusive?f>=0:f>0}(r.endAt,Ye(r),s))}(n,t)}function th(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function aa(n){return(t,e)=>{let r=!1;for(const s of Ye(n)){const o=eh(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function eh(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,u,l){const h=u.data.field(o),f=l.data.field(o);return h!==null&&f!==null?ye(h,f):x()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Re(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Xo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=new Y(M.comparator);function Ot(){return nh}const ua=new Y(M.comparator);function Qe(...n){let t=ua;for(const e of n)t=t.insert(e.key,e);return t}function ca(n){let t=ua;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Zt(){return Je()}function la(){return Je()}function Je(){return new Pe(n=>n.toString(),(n,t)=>n.isEqual(t))}const rh=new Y(M.comparator),ih=new ct(M.comparator);function U(...n){let t=ih;for(const e of n)t=t.add(e);return t}const sh=new ct($);function oh(){return sh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hn(t)?"-0":t}}function da(n){return{integerValue:""+n}}function ah(n,t){return Ll(t)?da(t):ha(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this._=void 0}}function uh(n,t,e){return n instanceof Xn?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&mi(o)&&(o=gi(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):n instanceof un?pa(n,t):n instanceof cn?ma(n,t):function(s,o){const u=fa(s,o),l=oo(u)+oo(s.Pe);return ti(u)&&ti(s.Pe)?da(l):ha(s.serializer,l)}(n,t)}function ch(n,t,e){return n instanceof un?pa(n,t):n instanceof cn?ma(n,t):e}function fa(n,t){return n instanceof Yn?function(r){return ti(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Xn extends or{}class un extends or{constructor(t){super(),this.elements=t}}function pa(n,t){const e=ga(t);for(const r of n.elements)e.some(s=>St(s,r))||e.push(r);return{arrayValue:{values:e}}}class cn extends or{constructor(t){super(),this.elements=t}}function ma(n,t){let e=ga(t);for(const r of n.elements)e=e.filter(s=>!St(s,r));return{arrayValue:{values:e}}}class Yn extends or{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function oo(n){return tt(n.integerValue||n.doubleValue)}function ga(n){return _i(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function lh(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof un&&s instanceof un||r instanceof cn&&s instanceof cn?_e(r.elements,s.elements,St):r instanceof Yn&&s instanceof Yn?St(r.Pe,s.Pe):r instanceof Xn&&s instanceof Xn}(n.transform,t.transform)}class hh{constructor(t,e){this.version=t,this.transformResults=e}}class kt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new kt}static exists(t){return new kt(void 0,t)}static updateTime(t){return new kt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function jn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ar{}function _a(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ea(n.key,kt.none()):new dn(n.key,n.data,kt.none());{const e=n.data,r=vt.empty();let s=new ct(ut.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),s=s.add(o)}return new se(n.key,r,new At(s.toArray()),kt.none())}}function dh(n,t,e){n instanceof dn?function(s,o,u){const l=s.value.clone(),h=uo(s.fieldTransforms,o,u.transformResults);l.setAll(h),o.convertToFoundDocument(u.version,l).setHasCommittedMutations()}(n,t,e):n instanceof se?function(s,o,u){if(!jn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const l=uo(s.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(ya(s)),h.setAll(l),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function Ze(n,t,e,r){return n instanceof dn?function(o,u,l,h){if(!jn(o.precondition,u))return l;const f=o.value.clone(),_=co(o.fieldTransforms,h,u);return f.setAll(_),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof se?function(o,u,l,h){if(!jn(o.precondition,u))return l;const f=co(o.fieldTransforms,h,u),_=u.data;return _.setAll(ya(o)),_.setAll(f),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(o,u,l){return jn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):l}(n,t,e)}function fh(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=fa(r.transform,s||null);o!=null&&(e===null&&(e=vt.empty()),e.set(r.field,o))}return e||null}function ao(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&_e(r,s,(o,u)=>lh(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class dn extends ar{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class se extends ar{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ya(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function uo(n,t,e){const r=new Map;Q(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],u=o.transform,l=t.data.field(o.field);r.set(o.field,ch(u,l,e[s]))}return r}function co(n,t,e){const r=new Map;for(const s of n){const o=s.transform,u=e.data.field(s.field);r.set(s.field,uh(o,u,t))}return r}class Ea extends ar{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ph extends ar{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&dh(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Ze(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Ze(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=la();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let l=this.applyToLocalView(u,o.mutatedFields);l=e.has(s.key)?null:l;const h=_a(u,l);h!==null&&r.set(s.key,h),u.isValidDocument()||u.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&_e(this.mutations,t.mutations,(e,r)=>ao(e,r))&&_e(this.baseMutations,t.baseMutations,(e,r)=>ao(e,r))}}class Ti{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Q(t.mutations.length===r.length);let s=function(){return rh}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,r[u].version);return new Ti(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,B;function yh(n){switch(n){default:return x();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Ta(n){if(n===void 0)return Mt("GRPC error has no .code"),S.UNKNOWN;switch(n){case Z.OK:return S.OK;case Z.CANCELLED:return S.CANCELLED;case Z.UNKNOWN:return S.UNKNOWN;case Z.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Z.INTERNAL:return S.INTERNAL;case Z.UNAVAILABLE:return S.UNAVAILABLE;case Z.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Z.NOT_FOUND:return S.NOT_FOUND;case Z.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Z.ABORTED:return S.ABORTED;case Z.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Z.DATA_LOSS:return S.DATA_LOSS;default:return x()}}(B=Z||(Z={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=new te([4294967295,4294967295],0);function lo(n){const t=Eh().encode(n),e=new jo;return e.update(t),new Uint8Array(e.digest())}function ho(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new te([e,r],0),new te([s,o],0)]}class vi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new We(`Invalid padding: ${e}`);if(r<0)throw new We(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new We(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new We(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=te.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(te.fromNumber(r)));return s.compare(Th)===1&&(s=new te([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=lo(t),[r,s]=ho(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,s,o);if(!this.de(u))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new vi(o,s,e);return r.forEach(l=>u.insert(l)),u}insert(t){if(this.Ie===0)return;const e=lo(t),[r,s]=ho(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,s,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class We extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,fn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ur(L.min(),s,new Y($),Ot(),U())}}class fn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new fn(r,e,U(),U(),U())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class va{constructor(t,e){this.targetId=t,this.me=e}}class Ia{constructor(t,e,r=_t.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class fo{constructor(){this.fe=0,this.ge=mo(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=U(),e=U(),r=U();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:x()}}),new fn(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=mo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class vh{constructor(t){this.Le=t,this.Be=new Map,this.ke=Ot(),this.qe=po(),this.Qe=new Y($)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:x()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(ni(o))if(r===0){const u=new M(o.path);this.Ue(e,u,gt.newNoDocument(u,L.min()))}else Q(r===1);else{const u=this.Ye(e);if(u!==r){const l=this.Ze(t),h=l?this.Xe(l,t,u):1;if(h!==0){this.je(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let u,l;try{u=re(r).toUint8Array()}catch(h){if(h instanceof Yo)return ge("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new vi(u,s,o)}catch(h){return ge(h instanceof We?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const u=this.Le.tt(),l=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,u)=>{const l=this.Je(u);if(l){if(o.current&&ni(l.target)){const h=new M(l.target.path);this.ke.get(h)!==null||this.it(u,h)||this.Ue(u,h,gt.newNoDocument(h,t))}o.be&&(e.set(u,o.Ce()),o.ve())}});let r=U();this.qe.forEach((o,u)=>{let l=!0;u.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const s=new ur(t,e,this.Qe,this.ke,r);return this.ke=Ot(),this.qe=po(),this.Qe=new Y($),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new fo,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ct($),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new fo),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function po(){return new Y(M.comparator)}function mo(){return new Y(M.comparator)}const Ih={asc:"ASCENDING",desc:"DESCENDING"},Ah={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wh={and:"AND",or:"OR"};class Rh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ii(n,t){return n.useProto3Json||nr(t)?t:{value:t}}function Jn(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Aa(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ph(n,t){return Jn(n,t.toTimestamp())}function Pt(n){return Q(!!n),L.fromTimestamp(function(e){const r=Gt(e);return new nt(r.seconds,r.nanos)}(n))}function Ii(n,t){return si(n,t).canonicalString()}function si(n,t){const e=function(s){return new X(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function wa(n){const t=X.fromString(n);return Q(Va(t)),t}function oi(n,t){return Ii(n.databaseId,t.path)}function qr(n,t){const e=wa(t);if(e.get(1)!==n.databaseId.projectId)throw new k(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new k(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(Pa(e))}function Ra(n,t){return Ii(n.databaseId,t)}function Sh(n){const t=wa(n);return t.length===4?X.emptyPath():Pa(t)}function ai(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Pa(n){return Q(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function go(n,t,e){return{name:oi(n,t),fields:e.value.mapValue.fields}}function Ch(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:x()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(Q(_===void 0||typeof _=="string"),_t.fromBase64String(_||"")):(Q(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),_t.fromUint8Array(_||new Uint8Array))}(n,t.targetChange.resumeToken),u=t.targetChange.cause,l=u&&function(f){const _=f.code===void 0?S.UNKNOWN:Ta(f.code);return new k(_,f.message||"")}(u);e=new Ia(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=qr(n,r.document.name),o=Pt(r.document.updateTime),u=r.document.createTime?Pt(r.document.createTime):L.min(),l=new vt({mapValue:{fields:r.document.fields}}),h=gt.newFoundDocument(s,o,u,l),f=r.targetIds||[],_=r.removedTargetIds||[];e=new qn(f,_,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=qr(n,r.document),o=r.readTime?Pt(r.readTime):L.min(),u=gt.newNoDocument(s,o),l=r.removedTargetIds||[];e=new qn([],l,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=qr(n,r.document),o=r.removedTargetIds||[];e=new qn([],o,s,null)}else{if(!("filter"in t))return x();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,u=new _h(s,o),l=r.targetId;e=new va(l,u)}}return e}function Vh(n,t){let e;if(t instanceof dn)e={update:go(n,t.key,t.value)};else if(t instanceof Ea)e={delete:oi(n,t.key)};else if(t instanceof se)e={update:go(n,t.key,t.data),updateMask:Fh(t.fieldMask)};else{if(!(t instanceof ph))return x();e={verify:oi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,u){const l=u.transform;if(l instanceof Xn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof un)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof cn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Yn)return{fieldPath:u.field.canonicalString(),increment:l.Pe};throw x()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Ph(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x()}(n,t.precondition)),e}function bh(n,t){return n&&n.length>0?(Q(t!==void 0),n.map(e=>function(s,o){let u=s.updateTime?Pt(s.updateTime):Pt(o);return u.isEqual(L.min())&&(u=Pt(o)),new hh(u,s.transformResults||[])}(e,t))):[]}function Dh(n,t){return{documents:[Ra(n,t.path)]}}function Nh(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Ra(n,s);const o=function(f){if(f.length!==0)return Ca(Ct.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(_=>function(R){return{field:de(R.field),direction:Oh(R.dir)}}(_))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const l=ii(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function kh(n){let t=Sh(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Q(r===1);const _=e.from[0];_.allDescendants?s=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(w){const R=Sa(w);return R instanceof Ct&&ea(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(R=>function(N){return new Wn(fe(N.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(R))}(e.orderBy));let l=null;e.limit&&(l=function(w){let R;return R=typeof w=="object"?w.value:w,nr(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(w){const R=!!w.before,C=w.values||[];return new Qn(C,R)}(e.startAt));let f=null;return e.endAt&&(f=function(w){const R=!w.before,C=w.values||[];return new Qn(C,R)}(e.endAt)),Yl(t,s,u,o,l,"F",h,f)}function Mh(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Sa(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=fe(e.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=fe(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=fe(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=fe(e.unaryFilter.field);return et.create(u,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(e){return et.create(fe(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ct.create(e.compositeFilter.filters.map(r=>Sa(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(n):x()}function Oh(n){return Ih[n]}function xh(n){return Ah[n]}function Lh(n){return wh[n]}function de(n){return{fieldPath:n.canonicalString()}}function fe(n){return ut.fromServerFormat(n.fieldPath)}function Ca(n){return n instanceof et?function(e){if(e.op==="=="){if(eo(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NAN"}};if(to(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(eo(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NOT_NAN"}};if(to(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:de(e.field),op:xh(e.op),value:e.value}}}(n):n instanceof Ct?function(e){const r=e.getFilters().map(s=>Ca(s));return r.length===1?r[0]:{compositeFilter:{op:Lh(e.op),filters:r}}}(n):x()}function Fh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Va(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,e,r,s,o=L.min(),u=L.min(),l=_t.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Bt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t){this.ct=t}}function Bh(n){const t=kh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ri(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this._n=new qh}addToCollectionParentIndex(t,e){return this._n.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Kt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Kt.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class qh{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ct(X.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ct(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Te(0)}static Ln(){return new Te(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(){this.changes=new Pe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Ze(r.mutation,s,At.empty(),nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,U()).next(()=>r))}getLocalViewOfDocuments(t,e,r=U()){const s=Zt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let u=Qe();return o.forEach((l,h)=>{u=u.insert(l,h.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=Zt();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,U()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,l)=>{e.set(u,l)})})}computeViews(t,e,r,s){let o=Ot();const u=Je(),l=function(){return Je()}();return e.forEach((h,f)=>{const _=r.get(f.key);s.has(f.key)&&(_===void 0||_.mutation instanceof se)?o=o.insert(f.key,f):_!==void 0?(u.set(f.key,_.mutation.getFieldMask()),Ze(_.mutation,f,_.mutation.getFieldMask(),nt.now())):u.set(f.key,At.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,_)=>u.set(f,_)),e.forEach((f,_)=>{var w;return l.set(f,new zh(_,(w=u.get(f))!==null&&w!==void 0?w:null))}),l))}recalculateAndSaveOverlays(t,e){const r=Je();let s=new Y((u,l)=>u-l),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const l of u)l.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let _=r.get(h)||At.empty();_=l.applyToLocalView(f,_),r.set(h,_);const w=(s.get(l.batchId)||U()).add(h);s=s.insert(l.batchId,w)})}).next(()=>{const u=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,_=h.value,w=la();_.forEach(R=>{if(!o.has(R)){const C=_a(e.get(R),r.get(R));C!==null&&w.set(R,C),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,w))}return P.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Jl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(Zt());let l=-1,h=o;return u.next(f=>P.forEach(f,(_,w)=>(l<w.largestBatchId&&(l=w.largestBatchId),o.get(_)?P.resolve():this.remoteDocumentCache.getEntry(t,_).next(R=>{h=h.insert(_,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,U())).next(_=>({batchId:l,changes:ca(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let s=Qe();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let u=Qe();return this.indexManager.getCollectionParents(t,o).next(l=>P.forEach(l,h=>{const f=function(w,R){return new rr(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(_=>{_.forEach((w,R)=>{u=u.insert(w,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(u=>{o.forEach((h,f)=>{const _=f.getKey();u.get(_)===null&&(u=u.insert(_,gt.newInvalidDocument(_)))});let l=Qe();return u.forEach((h,f)=>{const _=o.get(h);_!==void 0&&Ze(_.mutation,f,At.empty(),nt.now()),sr(e,f)&&(l=l.insert(h,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return P.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Pt(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:Bh(s.bundledQuery),readTime:Pt(s.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(){this.overlays=new Y(M.comparator),this.hr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Zt();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=Zt(),o=e.length+1,u=new M(e.child("")),l=this.overlays.getIteratorFrom(u);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Y((f,_)=>f-_);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=Zt(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const l=Zt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,_)=>l.set(f,_)),!(l.size()>=s)););return P.resolve(l)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new gh(e,r));let o=this.hr.get(e);o===void 0&&(o=U(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.Pr=new ct(it.Ir),this.Tr=new ct(it.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new it(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new it(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new M(new X([])),r=new it(e,t),s=new it(e,t+1),o=[];return this.Tr.forEachInRange([r,s],u=>{this.Ar(u),o.push(u.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new M(new X([])),r=new it(e,t),s=new it(e,t+1);let o=U();return this.Tr.forEachInRange([r,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new it(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return M.comparator(t.key,e.key)||$(t.pr,e.pr)}static Er(t,e){return $(t.pr,e.pr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new ct(it.Ir)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new mh(o,e,r,s);this.mutationQueue.push(u);for(const l of s)this.wr=this.wr.add(new it(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return P.resolve(u)}lookupMutationBatch(t,e){return P.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new it(e,0),s=new it(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,s],u=>{const l=this.Sr(u.pr);o.push(l)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ct($);return e.forEach(s=>{const o=new it(s,0),u=new it(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,u],l=>{r=r.add(l.pr)})}),P.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const u=new it(new M(o),0);let l=new ct($);return this.wr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(h.pr)),!0)},u),P.resolve(this.Dr(l))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Q(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return P.forEach(e.mutations,s=>{const o=new it(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new it(e,0),s=this.wr.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t){this.vr=t,this.docs=function(){return new Y(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,u=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let r=Ot();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():gt.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Ot();const u=e.path,l=new M(u.child("")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:_}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||kl(Nl(_),r)<=0||(s.has(_.key)||sr(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){x()}Fr(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Xh(this)}getSize(t){return P.resolve(this.size)}}class Xh extends $h{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t){this.persistence=t,this.Mr=new Pe(e=>yi(e),Ei),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ai,this.targetCount=0,this.Lr=Te.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),P.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Te(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.qn(e),P.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Mr.forEach((u,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Mr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t,e){this.Br={},this.overlays={},this.kr=new pi(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Yh(this),this.indexManager=new jh,this.remoteDocumentCache=function(s){return new Wh(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Uh(e),this.$r=new Gh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Hh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new Qh(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const s=new Zh(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,e){return P.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class Zh extends Ol{constructor(t){super(),this.currentSequenceNumber=t}}class wi{constructor(t){this.persistence=t,this.zr=new Ai,this.jr=null}static Hr(t){return new wi(t)}get Jr(){if(this.jr)return this.jr;throw x()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),P.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Jr,r=>{const s=M.fromPath(r);return this.Yr(t,s).next(o=>{o||e.removeEntry(s,L.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return P.or([()=>P.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=U(),s=U();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ri(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return sc()?8:xl(rc())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ji(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Hi(t,e,s,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new td;return this.Ji(t,e,u).next(l=>{if(o.result=l,this.Ui)return this.Yi(t,e,u,l.size)})}).next(()=>o.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(Ge()<=j.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",he(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),P.resolve()):(Ge()<=j.DEBUG&&D("QueryEngine","Query:",he(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Ge()<=j.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",he(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Rt(e))):P.resolve())}ji(t,e){if(so(e))return P.resolve(null);let r=Rt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ri(e,null,"F"),r=Rt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const u=U(...o);return this.zi.getDocuments(t,u).next(l=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.Zi(e,l);return this.Xi(e,f,u,h.readTime)?this.ji(t,ri(e,null,"F")):this.es(t,f,e,h)}))})))}Hi(t,e,r,s){return so(e)||s.isEqual(L.min())?P.resolve(null):this.zi.getDocuments(t,r).next(o=>{const u=this.Zi(e,o);return this.Xi(e,u,r,s)?P.resolve(null):(Ge()<=j.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),he(e)),this.es(t,u,e,Dl(s,-1)).next(l=>l))})}Zi(t,e){let r=new ct(aa(t));return e.forEach((s,o)=>{sr(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,e,r){return Ge()<=j.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",he(e)),this.zi.getDocumentsMatchingQuery(t,e,Kt.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new Y($),this.rs=new Pe(o=>yi(o),Ei),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Kh(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function rd(n,t,e,r){return new nd(n,t,e,r)}async function ba(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],l=[];let h=U();for(const f of s){u.push(f.batchId);for(const _ of f.mutations)h=h.add(_.key)}for(const f of o){l.push(f.batchId);for(const _ of f.mutations)h=h.add(_.key)}return e.localDocuments.getDocuments(r,h).next(f=>({us:f,removedBatchIds:u,addedBatchIds:l}))})})}function id(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(l,h,f,_){const w=f.batch,R=w.keys();let C=P.resolve();return R.forEach(N=>{C=C.next(()=>_.getEntry(h,N)).next(O=>{const b=f.docVersions.get(N);Q(b!==null),O.version.compareTo(b)<0&&(w.applyToRemoteDocument(O,f),O.isValidDocument()&&(O.setReadTime(f.commitVersion),_.addEntry(O)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(h,w))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=U();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Da(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function sd(n,t){const e=F(n),r=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const l=[];t.targetChanges.forEach((_,w)=>{const R=s.get(w);if(!R)return;l.push(e.Qr.removeMatchingKeys(o,_.removedDocuments,w).next(()=>e.Qr.addMatchingKeys(o,_.addedDocuments,w)));let C=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?C=C.withResumeToken(_t.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):_.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(_.resumeToken,r)),s=s.insert(w,C),function(O,b,z){return O.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(R,C,_)&&l.push(e.Qr.updateTargetData(o,C))});let h=Ot(),f=U();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),l.push(od(o,u,t.documentUpdates).next(_=>{h=_.cs,f=_.ls})),!r.isEqual(L.min())){const _=e.Qr.getLastRemoteSnapshotVersion(o).next(w=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(_)}return P.waitFor(l).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.ns=s,o))}function od(n,t,e){let r=U(),s=U();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let u=Ot();return e.forEach((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(l,h.readTime),u=u.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),u=u.insert(l,h)):D("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)}),{cs:u,ls:s}})}function ad(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function ud(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Qr.getTargetData(r,t).next(o=>o?(s=o,P.resolve(s)):e.Qr.allocateTargetId(r).next(u=>(s=new Bt(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function ui(n,t,e){const r=F(n),s=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!hn(u))throw u;D("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function _o(n,t,e){const r=F(n);let s=L.min(),o=U();return r.persistence.runTransaction("Execute query","readwrite",u=>function(h,f,_){const w=F(h),R=w.rs.get(_);return R!==void 0?P.resolve(w.ns.get(R)):w.Qr.getTargetData(f,_)}(r,u,Rt(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(u,l.targetId).next(h=>{o=h})}).next(()=>r.ts.getDocumentsMatchingQuery(u,t,e?s:L.min(),e?o:U())).next(l=>(cd(r,th(t),l),{documents:l,hs:o})))}function cd(n,t,e){let r=n.ss.get(t)||L.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class yo{constructor(){this.activeTargetIds=oh()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ld{constructor(){this.no=new yo,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new yo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln=null;function $r(){return Ln===null?Ln=function(){return 268435456+Math.round(2147483648*Math.random())}():Ln++,"0x"+Ln.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class pd extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(e,r,s,o,u){const l=$r(),h=this.vo(e,r.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${l}:`,h,s);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,o,u),this.Mo(e,h,f,s).then(_=>(D("RestConnection",`Received RPC '${e}' ${l}: `,_),_),_=>{throw ge("RestConnection",`RPC '${e}' ${l} failed with error: `,_,"url: ",h,"request:",s),_})}xo(e,r,s,o,u,l){return this.Co(e,r,s,o,u)}Fo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+we}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}vo(e,r){const s=dd[e];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,s){const o=$r();return new Promise((u,l)=>{const h=new qo;h.setWithCredentials(!0),h.listenOnce(zo.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Un.NO_ERROR:const _=h.getResponseJson();D(pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),u(_);break;case Un.TIMEOUT:D(pt,`RPC '${t}' ${o} timed out`),l(new k(S.DEADLINE_EXCEEDED,"Request time out"));break;case Un.HTTP_ERROR:const w=h.getStatus();if(D(pt,`RPC '${t}' ${o} failed with status:`,w,"response text:",h.getResponseText()),w>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const C=R==null?void 0:R.error;if(C&&C.status&&C.message){const N=function(b){const z=b.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(z)>=0?z:S.UNKNOWN}(C.status);l(new k(N,C.message))}else l(new k(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new k(S.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{D(pt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);D(pt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,r,15)})}Oo(t,e,r){const s=$r(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Ho(),l=Go(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.xmlHttpFactory=new $o({})),this.Fo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const _=o.join("");D(pt,`Creating RPC '${t}' stream ${s}: ${_}`,h);const w=u.createWebChannel(_,h);let R=!1,C=!1;const N=new fd({lo:b=>{C?D(pt,`Not sending because RPC '${t}' stream ${s} is closed:`,b):(R||(D(pt,`Opening RPC '${t}' stream ${s} transport.`),w.open(),R=!0),D(pt,`RPC '${t}' stream ${s} sending:`,b),w.send(b))},ho:()=>w.close()}),O=(b,z,K)=>{b.listen(z,H=>{try{K(H)}catch(rt){setTimeout(()=>{throw rt},0)}})};return O(w,He.EventType.OPEN,()=>{C||(D(pt,`RPC '${t}' stream ${s} transport opened.`),N.mo())}),O(w,He.EventType.CLOSE,()=>{C||(C=!0,D(pt,`RPC '${t}' stream ${s} transport closed`),N.po())}),O(w,He.EventType.ERROR,b=>{C||(C=!0,ge(pt,`RPC '${t}' stream ${s} transport errored:`,b),N.po(new k(S.UNAVAILABLE,"The operation could not be completed")))}),O(w,He.EventType.MESSAGE,b=>{var z;if(!C){const K=b.data[0];Q(!!K);const H=K,rt=H.error||((z=H[0])===null||z===void 0?void 0:z.error);if(rt){D(pt,`RPC '${t}' stream ${s} received error:`,rt);const Vt=rt.status;let st=function(g){const y=Z[g];if(y!==void 0)return Ta(y)}(Vt),T=rt.message;st===void 0&&(st=S.INTERNAL,T="Unknown error status: "+Vt+" with message "+rt.message),C=!0,N.po(new k(st,T)),w.close()}else D(pt,`RPC '${t}' stream ${s} received:`,K),N.yo(K)}}),O(l,Ko.STAT_EVENT,b=>{b.stat===Jr.PROXY?D(pt,`RPC '${t}' stream ${s} detected buffering proxy`):b.stat===Jr.NOPROXY&&D(pt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.fo()},0),N}}function zr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(n){return new Rh(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,e,r=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t,e,r,s,o,u,l,h){this.oi=t,this.Go=r,this.zo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Na(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Mt(e.toString()),Mt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===e&&this.u_(r,s)},r=>{t(()=>{const s=new k(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class md extends ka{constructor(t,e,r,s,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,u),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=Ch(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?L.min():u.readTime?Pt(u.readTime):L.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=ai(this.serializer),e.addTarget=function(o,u){let l;const h=u.target;if(l=ni(h)?{documents:Dh(o,h)}:{query:Nh(o,h)._t},l.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){l.resumeToken=Aa(o,u.resumeToken);const f=ii(o,u.expectedCount);f!==null&&(l.expectedCount=f)}else if(u.snapshotVersion.compareTo(L.min())>0){l.readTime=Jn(o,u.snapshotVersion.toTimestamp());const f=ii(o,u.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=Mh(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=ai(this.serializer),e.removeTarget=t,this.i_(e)}}class gd extends ka{constructor(t,e,r,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,u),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(Q(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=bh(t.writeResults,t.commitTime),r=Pt(t.commitTime);return this.listener.A_(r,e)}return Q(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=ai(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Vh(this.serializer,r))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new k(S.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Co(t,si(e,r),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(S.UNKNOWN,o.toString())})}xo(t,e,r,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,l])=>this.connection.xo(t,si(e,r),s,u,l,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new k(S.UNKNOWN,u.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class yd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Mt(e),this.y_=!1):D("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(u=>{r.enqueueAndForget(async()=>{oe(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=F(h);f.M_.add(4),await pn(f),f.N_.set("Unknown"),f.M_.delete(4),await lr(f)}(this))})}),this.N_=new yd(r,s)}}async function lr(n){if(oe(n))for(const t of n.x_)await t(!0)}async function pn(n){for(const t of n.x_)await t(!1)}function Ma(n,t){const e=F(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),Vi(e)?Ci(e):Se(e).Xo()&&Si(e,t))}function Pi(n,t){const e=F(n),r=Se(e);e.F_.delete(t),r.Xo()&&Oa(e,t),e.F_.size===0&&(r.Xo()?r.n_():oe(e)&&e.N_.set("Unknown"))}function Si(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Se(n).P_(t)}function Oa(n,t){n.L_.xe(t),Se(n).I_(t)}function Ci(n){n.L_=new vh({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Se(n).start(),n.N_.w_()}function Vi(n){return oe(n)&&!Se(n).Zo()&&n.F_.size>0}function oe(n){return F(n).M_.size===0}function xa(n){n.L_=void 0}async function Td(n){n.N_.set("Online")}async function vd(n){n.F_.forEach((t,e)=>{Si(n,t)})}async function Id(n,t){xa(n),Vi(n)?(n.N_.D_(t),Ci(n)):n.N_.set("Unknown")}async function Ad(n,t,e){if(n.N_.set("Online"),t instanceof Ia&&t.state===2&&t.cause)try{await async function(s,o){const u=o.cause;for(const l of o.targetIds)s.F_.has(l)&&(await s.remoteSyncer.rejectListen(l,u),s.F_.delete(l),s.L_.removeTarget(l))}(n,t)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Zn(n,r)}else if(t instanceof qn?n.L_.Ke(t):t instanceof va?n.L_.He(t):n.L_.We(t),!e.isEqual(L.min()))try{const r=await Da(n.localStore);e.compareTo(r)>=0&&await function(o,u){const l=o.L_.rt(u);return l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const _=o.F_.get(f);_&&o.F_.set(f,_.withResumeToken(h.resumeToken,u))}}),l.targetMismatches.forEach((h,f)=>{const _=o.F_.get(h);if(!_)return;o.F_.set(h,_.withResumeToken(_t.EMPTY_BYTE_STRING,_.snapshotVersion)),Oa(o,h);const w=new Bt(_.target,h,f,_.sequenceNumber);Si(o,w)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await Zn(n,r)}}async function Zn(n,t,e){if(!hn(t))throw t;n.M_.add(1),await pn(n),n.N_.set("Offline"),e||(e=()=>Da(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await lr(n)})}function La(n,t){return t().catch(e=>Zn(n,e,t))}async function hr(n){const t=F(n),e=Ht(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;wd(t);)try{const s=await ad(t.localStore,r);if(s===null){t.v_.length===0&&e.n_();break}r=s.batchId,Rd(t,s)}catch(s){await Zn(t,s)}Fa(t)&&Ua(t)}function wd(n){return oe(n)&&n.v_.length<10}function Rd(n,t){n.v_.push(t);const e=Ht(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function Fa(n){return oe(n)&&!Ht(n).Zo()&&n.v_.length>0}function Ua(n){Ht(n).start()}async function Pd(n){Ht(n).V_()}async function Sd(n){const t=Ht(n);for(const e of n.v_)t.d_(e.mutations)}async function Cd(n,t,e){const r=n.v_.shift(),s=Ti.from(r,t,e);await La(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await hr(n)}async function Vd(n,t){t&&Ht(n).E_&&await async function(r,s){if(function(u){return yh(u)&&u!==S.ABORTED}(s.code)){const o=r.v_.shift();Ht(r).t_(),await La(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await hr(r)}}(n,t),Fa(n)&&Ua(n)}async function To(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=oe(e);e.M_.add(3),await pn(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await lr(e)}async function bd(n,t){const e=F(n);t?(e.M_.delete(2),await lr(e)):t||(e.M_.add(2),await pn(e),e.N_.set("Unknown"))}function Se(n){return n.B_||(n.B_=function(e,r,s){const o=F(e);return o.f_(),new md(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:Td.bind(null,n),To:vd.bind(null,n),Ao:Id.bind(null,n),h_:Ad.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),Vi(n)?Ci(n):n.N_.set("Unknown")):(await n.B_.stop(),xa(n))})),n.B_}function Ht(n){return n.k_||(n.k_=function(e,r,s){const o=F(e);return o.f_(),new gd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:Pd.bind(null,n),Ao:Vd.bind(null,n),R_:Sd.bind(null,n),A_:Cd.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await hr(n)):(await n.k_.stop(),n.v_.length>0&&(D("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const u=Date.now()+r,l=new bi(t,e,u,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Di(n,t){if(Mt("AsyncQueue",`${t}: ${n}`),hn(n))return new k(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=Qe(),this.sortedSet=new Y(this.comparator)}static emptySet(t){return new me(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof me)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new me;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.q_=new Y(M.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):x():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class ve{constructor(t,e,r,s,o,u,l,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const u=[];return e.forEach(l=>{u.push({type:0,doc:l})}),new ve(t,e,me.emptySet(e),u,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ir(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class Nd{constructor(){this.queries=new Pe(t=>oa(t),ir),this.onlineState="Unknown",this.z_=new Set}}async function kd(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.W_()&&t.G_()&&(r=2):(o=new Dd,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(s,!0);break;case 1:o.K_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const l=Di(u,`Initialization of query '${he(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&Ni(e)}async function Md(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const u=o.U_.indexOf(t);u>=0&&(o.U_.splice(u,1),o.U_.length===0?s=t.G_()?0:1:!o.W_()&&t.G_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Od(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,u=e.queries.get(o);if(u){for(const l of u.U_)l.H_(s)&&(r=!0);u.K_=s}}r&&Ni(e)}function xd(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.U_)o.onError(e);r.queries.delete(t)}function Ni(n){n.z_.forEach(t=>{t.next()})}var ci,Io;(Io=ci||(ci={})).J_="default",Io.Cache="cache";class Ld{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new ve(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=ve.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==ci.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t){this.key=t}}class ja{constructor(t){this.key=t}}class Fd{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=U(),this.mutatedKeys=U(),this.Ia=aa(t),this.Ta=new me(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new vo,s=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,u=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((_,w)=>{const R=s.get(_),C=sr(this.query,w)?w:null,N=!!R&&this.mutatedKeys.has(R.key),O=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let b=!1;R&&C?R.data.isEqual(C.data)?N!==O&&(r.track({type:3,doc:C}),b=!0):this.Ra(R,C)||(r.track({type:2,doc:C}),b=!0,(h&&this.Ia(C,h)>0||f&&this.Ia(C,f)<0)&&(l=!0)):!R&&C?(r.track({type:0,doc:C}),b=!0):R&&!C&&(r.track({type:1,doc:R}),b=!0,(h||f)&&(l=!0)),b&&(C?(u=u.add(C),o=O?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{Ta:u,Aa:r,Xi:l,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const u=t.Aa.Q_();u.sort((_,w)=>function(C,N){const O=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return O(C)-O(N)}(_.type,w.type)||this.Ia(_.doc,w.doc)),this.Va(r),s=s!=null&&s;const l=e&&!s?this.ma():[],h=this.Pa.size===0&&this.current&&!s?1:0,f=h!==this.ha;return this.ha=h,u.length!==0||f?{snapshot:new ve(this.query,t.Ta,o,u,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new vo,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=U(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new ja(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new Ba(r))}),e}pa(t){this.la=t.hs,this.Pa=U();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return ve.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Ud{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Bd{constructor(t){this.key=t,this.wa=!1}}class jd{constructor(t,e,r,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Sa={},this.ba=new Pe(l=>oa(l),ir),this.Da=new Map,this.Ca=new Set,this.va=new Y(M.comparator),this.Fa=new Map,this.Ma=new Ai,this.xa={},this.Oa=new Map,this.Na=Te.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function qd(n,t,e=!0){const r=Ha(n);let s;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.ya()):s=await qa(r,t,e,!0),s}async function $d(n,t){const e=Ha(n);await qa(e,t,!0,!1)}async function qa(n,t,e,r){const s=await ud(n.localStore,Rt(t)),o=s.targetId,u=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let l;return r&&(l=await zd(n,t,o,u==="current",s.resumeToken)),n.isPrimaryClient&&e&&Ma(n.remoteStore,s),l}async function zd(n,t,e,r,s){n.Ba=(w,R,C)=>async function(O,b,z,K){let H=b.view.da(z);H.Xi&&(H=await _o(O.localStore,b.query,!1).then(({documents:T})=>b.view.da(T,H)));const rt=K&&K.targetChanges.get(b.targetId),Vt=K&&K.targetMismatches.get(b.targetId)!=null,st=b.view.applyChanges(H,O.isPrimaryClient,rt,Vt);return wo(O,b.targetId,st.fa),st.snapshot}(n,w,R,C);const o=await _o(n.localStore,t,!0),u=new Fd(t,o.hs),l=u.da(o.documents),h=fn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=u.applyChanges(l,n.isPrimaryClient,h);wo(n,e,f.fa);const _=new Ud(t,e,u);return n.ba.set(t,_),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),f.snapshot}async function Kd(n,t,e){const r=F(n),s=r.ba.get(t),o=r.Da.get(s.targetId);if(o.length>1)return r.Da.set(s.targetId,o.filter(u=>!ir(u,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ui(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Pi(r.remoteStore,s.targetId),li(r,s.targetId)}).catch(ln)):(li(r,s.targetId),await ui(r.localStore,s.targetId,!0))}async function Gd(n,t){const e=F(n),r=e.ba.get(t),s=e.Da.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Pi(e.remoteStore,r.targetId))}async function Hd(n,t,e){const r=tf(n);try{const s=await function(u,l){const h=F(u),f=nt.now(),_=l.reduce((C,N)=>C.add(N.key),U());let w,R;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let N=Ot(),O=U();return h.os.getEntries(C,_).next(b=>{N=b,N.forEach((z,K)=>{K.isValidDocument()||(O=O.add(z))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,N)).next(b=>{w=b;const z=[];for(const K of l){const H=fh(K,w.get(K.key).overlayedDocument);H!=null&&z.push(new se(K.key,H,Jo(H.value.mapValue),kt.exists(!0)))}return h.mutationQueue.addMutationBatch(C,f,z,l)}).next(b=>{R=b;const z=b.applyToLocalDocumentSet(w,O);return h.documentOverlayCache.saveOverlays(C,b.batchId,z)})}).then(()=>({batchId:R.batchId,changes:ca(w)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(u,l,h){let f=u.xa[u.currentUser.toKey()];f||(f=new Y($)),f=f.insert(l,h),u.xa[u.currentUser.toKey()]=f}(r,s.batchId,e),await mn(r,s.changes),await hr(r.remoteStore)}catch(s){const o=Di(s,"Failed to persist write");e.reject(o)}}async function $a(n,t){const e=F(n);try{const r=await sd(e.localStore,t);t.targetChanges.forEach((s,o)=>{const u=e.Fa.get(o);u&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.wa=!0:s.modifiedDocuments.size>0?Q(u.wa):s.removedDocuments.size>0&&(Q(u.wa),u.wa=!1))}),await mn(e,r,t)}catch(r){await ln(r)}}function Ao(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ba.forEach((o,u)=>{const l=u.view.j_(t);l.snapshot&&s.push(l.snapshot)}),function(u,l){const h=F(u);h.onlineState=l;let f=!1;h.queries.forEach((_,w)=>{for(const R of w.U_)R.j_(l)&&(f=!0)}),f&&Ni(h)}(r.eventManager,t),s.length&&r.Sa.h_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Qd(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Fa.get(t),o=s&&s.key;if(o){let u=new Y(M.comparator);u=u.insert(o,gt.newNoDocument(o,L.min()));const l=U().add(o),h=new ur(L.min(),new Map,new Y($),u,l);await $a(r,h),r.va=r.va.remove(o),r.Fa.delete(t),ki(r)}else await ui(r.localStore,t,!1).then(()=>li(r,t,e)).catch(ln)}async function Wd(n,t){const e=F(n),r=t.batch.batchId;try{const s=await id(e.localStore,t);Ka(e,r,null),za(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await mn(e,s)}catch(s){await ln(s)}}async function Xd(n,t,e){const r=F(n);try{const s=await function(u,l){const h=F(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let _;return h.mutationQueue.lookupMutationBatch(f,l).next(w=>(Q(w!==null),_=w.keys(),h.mutationQueue.removeMutationBatch(f,w))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,_,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,_)).next(()=>h.localDocuments.getDocuments(f,_))})}(r.localStore,t);Ka(r,t,e),za(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await mn(r,s)}catch(s){await ln(s)}}function za(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function Ka(n,t,e){const r=F(n);let s=r.xa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.xa[r.currentUser.toKey()]=s}}function li(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||Ga(n,r)})}function Ga(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(Pi(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),ki(n))}function wo(n,t,e){for(const r of e)r instanceof Ba?(n.Ma.addReference(r.key,t),Yd(n,r)):r instanceof ja?(D("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||Ga(n,r.key)):x()}function Yd(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(D("SyncEngine","New document in limbo: "+e),n.Ca.add(r),ki(n))}function ki(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new M(X.fromString(t)),r=n.Na.next();n.Fa.set(r,new Bd(e)),n.va=n.va.insert(e,r),Ma(n.remoteStore,new Bt(Rt(sa(e.path)),r,"TargetPurposeLimboResolution",pi.oe))}}async function mn(n,t,e){const r=F(n),s=[],o=[],u=[];r.ba.isEmpty()||(r.ba.forEach((l,h)=>{u.push(r.Ba(h,t,e).then(f=>{var _;if((f||e)&&r.isPrimaryClient){const w=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(h.targetId))===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(h.targetId,w?"current":"not-current")}if(f){s.push(f);const w=Ri.Ki(h.targetId,f);o.push(w)}}))}),await Promise.all(u),r.Sa.h_(s),await async function(h,f){const _=F(h);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>P.forEach(f,R=>P.forEach(R.qi,C=>_.persistence.referenceDelegate.addReference(w,R.targetId,C)).next(()=>P.forEach(R.Qi,C=>_.persistence.referenceDelegate.removeReference(w,R.targetId,C)))))}catch(w){if(!hn(w))throw w;D("LocalStore","Failed to update sequence numbers: "+w)}for(const w of f){const R=w.targetId;if(!w.fromCache){const C=_.ns.get(R),N=C.snapshotVersion,O=C.withLastLimboFreeSnapshotVersion(N);_.ns=_.ns.insert(R,O)}}}(r.localStore,o))}async function Jd(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const r=await ba(e.localStore,t);e.currentUser=t,function(o,u){o.Oa.forEach(l=>{l.forEach(h=>{h.reject(new k(S.CANCELLED,u))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await mn(e,r.us)}}function Zd(n,t){const e=F(n),r=e.Fa.get(t);if(r&&r.wa)return U().add(r.key);{let s=U();const o=e.Da.get(t);if(!o)return s;for(const u of o){const l=e.ba.get(u);s=s.unionWith(l.view.Ea)}return s}}function Ha(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=$a.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Qd.bind(null,t),t.Sa.h_=Od.bind(null,t.eventManager),t.Sa.ka=xd.bind(null,t.eventManager),t}function tf(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Wd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Xd.bind(null,t),t}class Ro{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=cr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return rd(this.persistence,new ed,t.initialUser,this.serializer)}createPersistence(t){return new Jh(wi.Hr,this.serializer)}createSharedClientState(t){return new ld}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ef{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ao(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jd.bind(null,this.syncEngine),await bd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Nd}()}createDatastore(t){const e=cr(t.databaseInfo.databaseId),r=function(o){return new pd(o)}(t.databaseInfo);return function(o,u,l,h){return new _d(o,u,l,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,u,l){return new Ed(r,s,o,u,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Ao(this.syncEngine,e,0),function(){return Eo.D()?new Eo:new hd}())}createSyncEngine(t,e){return function(s,o,u,l,h,f,_){const w=new jd(s,o,u,l,h,f);return _&&(w.La=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=F(r);D("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await pn(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):Mt("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=Wo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{D("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(D("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Di(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Kr(n,t){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ba(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Po(n,t){n.asyncQueue.verifyOperationInProgress();const e=await of(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>To(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>To(t.remoteStore,s)),n._onlineComponents=t}function sf(n){return n.name==="FirebaseError"?n.code===S.FAILED_PRECONDITION||n.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function of(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!sf(e))throw e;ge("Error using user provided cache. Falling back to memory cache: "+e),await Kr(n,new Ro)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Kr(n,new Ro);return n._offlineComponents}async function Qa(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Po(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Po(n,new ef))),n._onlineComponents}function af(n){return Qa(n).then(t=>t.syncEngine)}async function uf(n){const t=await Qa(n),e=t.eventManager;return e.onListen=qd.bind(null,t.syncEngine),e.onUnlisten=Kd.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=$d.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Gd.bind(null,t.syncEngine),e}function cf(n,t,e={}){const r=new $t;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,l,h,f){const _=new nf({next:R=>{u.enqueueAndForget(()=>Md(o,w)),R.fromCache&&h.source==="server"?f.reject(new k(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),w=new Ld(l,_,{includeMetadataChanges:!0,ra:!0});return kd(o,w)}(await uf(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(n,t,e){if(!e)throw new k(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function lf(n,t,e,r){if(t===!0&&r===!0)throw new k(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Co(n){if(!M.isDocumentKey(n))throw new k(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Vo(n){if(M.isDocumentKey(n))throw new k(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Mi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x()}function tr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Mi(n);throw new k(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new k(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new k(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}lf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wa((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class dr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new k(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bo(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Il;switch(r.type){case"firstParty":return new Pl(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=So.get(e);r&&(D("ComponentProvider","Removing Datastore"),So.delete(e),r.terminate())}(this),Promise.resolve()}}function hf(n,t,e,r={}){var s;const o=(n=tr(n,dr))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&ge("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),r.mockUserToken){let l,h;if(typeof r.mockUserToken=="string")l=r.mockUserToken,h=mt.MOCK_USER;else{l=nc(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new k(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new mt(f)}n._authCredentials=new Al(new Qo(l,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new fr(this.firestore,t,this._query)}}class wt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wt(this.firestore,t,this._key)}}class zt extends fr{constructor(t,e,r){super(t,e,sa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wt(this.firestore,null,new M(t))}withConverter(t){return new zt(this.firestore,t,this._path)}}function Ya(n,t,...e){if(n=tn(n),Xa("collection","path",t),n instanceof dr){const r=X.fromString(t,...e);return Vo(r),new zt(n,null,r)}{if(!(n instanceof wt||n instanceof zt))throw new k(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Vo(r),new zt(n.firestore,null,r)}}function df(n,t,...e){if(n=tn(n),arguments.length===1&&(t=Wo.newId()),Xa("doc","path",t),n instanceof dr){const r=X.fromString(t,...e);return Co(r),new wt(n,null,new M(r))}{if(!(n instanceof wt||n instanceof zt))throw new k(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Co(r),new wt(n.firestore,n instanceof zt?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Na(this,"async_queue_retry"),this.hu=()=>{const e=zr();e&&D("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=zr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=zr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new $t;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!hn(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const s=function(u){let l=u.message||"";return u.stack&&(l=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),l}(r);throw Mt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=bi.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&x()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class Oi extends dr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new ff}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Za(this),this._firestoreClient.terminate()}}function pf(n,t){const e=typeof n=="object"?n:ll(),r=typeof n=="string"?n:"(default)",s=ol(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=tc("firestore");o&&hf(s,...o)}return s}function Ja(n){return n._firestoreClient||Za(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Za(n){var t,e,r;const s=n._freezeSettings(),o=function(l,h,f,_){return new Ul(l,h,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Wa(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new rf(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ie(_t.fromBase64String(t))}catch(e){throw new k(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ie(_t.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=/^__.*__$/;class gf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new se(t,this.data,this.fieldMask,e,this.fieldTransforms):new dn(t,this.data,e,this.fieldTransforms)}}function eu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class Fi{constructor(t,e,r,s,o,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Fi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.wu(t),s}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return er(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(eu(this.fu)&&mf.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class _f{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||cr(t)}Fu(t,e,r,s=!1){return new Fi({fu:t,methodName:e,vu:r,path:ut.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yf(n){const t=n._freezeSettings(),e=cr(n._databaseId);return new _f(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Ef(n,t,e,r,s,o={}){const u=n.Fu(o.merge||o.mergeFields?2:0,t,e,s);su("Data must be an object, but it was:",u,r);const l=ru(r,u);let h,f;if(o.merge)h=new At(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const _=[];for(const w of o.mergeFields){const R=Tf(t,w,e);if(!u.contains(R))throw new k(S.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);If(_,R)||_.push(R)}h=new At(_),f=u.fieldTransforms.filter(w=>h.covers(w.field))}else h=null,f=u.fieldTransforms;return new gf(new vt(l),h,f)}function nu(n,t){if(iu(n=tn(n)))return su("Unsupported field value:",t,n),ru(n,t);if(n instanceof tu)return function(r,s){if(!eu(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,s){const o=[];let u=0;for(const l of r){let h=nu(l,s.bu(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=tn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ah(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=nt.fromDate(r);return{timestampValue:Jn(s.serializer,o)}}if(r instanceof nt){const o=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jn(s.serializer,o)}}if(r instanceof Li)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ie)return{bytesValue:Aa(s.serializer,r._byteString)};if(r instanceof wt){const o=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw s.Du(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ii(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Mi(r)}`)}(n,t)}function ru(n,t){const e={};return Xo(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Re(n,(r,s)=>{const o=nu(s,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function iu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof Li||n instanceof Ie||n instanceof wt||n instanceof tu)}function su(n,t,e){if(!iu(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Mi(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function Tf(n,t,e){if((t=tn(t))instanceof xi)return t._internalPath;if(typeof t=="string")return ou(n,t);throw er("Field path arguments must be of type string or ",n,!1,void 0,e)}const vf=new RegExp("[~\\*/\\[\\]]");function ou(n,t,e){if(t.search(vf)>=0)throw er(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new xi(...t.split("."))._internalPath}catch{throw er(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function er(n,t,e,r,s){const o=r&&!r.isEmpty(),u=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${r}`),u&&(h+=` in document ${s}`),h+=")"),new k(S.INVALID_ARGUMENT,l+n+h)}function If(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Af(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(uu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Af extends au{data(){return super.data()}}function uu(n,t){return typeof t=="string"?ou(n,t):t instanceof xi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new k(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rf{convertValue(t,e="none"){switch(ie(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(re(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw x()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Re(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new Li(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=gi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(sn(t));default:return null}}convertTimestamp(t){const e=Gt(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);Q(Va(r));const s=new on(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(e)||Mt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Sf extends au{constructor(t,e,r,s,o,u){super(t,e,r,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new $n(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(uu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class $n extends Sf{data(t={}){return super.data(t)}}class Cf{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Fn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new $n(this._firestore,this._userDataWriter,r.key,r,new Fn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(l=>{const h=new $n(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Fn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new $n(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Fn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,_=-1;return l.type!==0&&(f=u.indexOf(l.doc.key),u=u.delete(l.doc.key)),l.type!==1&&(u=u.add(l.doc),_=u.indexOf(l.doc.key)),{type:Vf(l.type),doc:h,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Vf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}class bf extends Rf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ie(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new wt(this.firestore,null,e)}}function Df(n){n=tr(n,fr);const t=tr(n.firestore,Oi),e=Ja(t),r=new bf(t);return wf(n._query),cf(e,n._query).then(s=>new Cf(t,r,n,s))}function Nf(n,t){const e=tr(n.firestore,Oi),r=df(n),s=Pf(n.converter,t);return kf(e,[Ef(yf(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,kt.exists(!1))]).then(()=>r)}function kf(n,t){return function(r,s){const o=new $t;return r.asyncQueue.enqueueAndForget(async()=>Hd(await af(r),s,o)),o.promise}(Ja(n),t)}(function(t,e=!0){(function(s){we=s})(cl),Gn(new en("firestore",(r,{instanceIdentifier:s,options:o})=>{const u=r.getProvider("app").getImmediate(),l=new Oi(new wl(r.getProvider("auth-internal")),new Cl(r.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new k(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new on(f.options.projectId,_)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),pe(Xs,"4.6.4",t),pe(Xs,"4.6.4","esm2017")})();const Mf=async(n,t,e)=>{let r="";(await n(t(e,"reports"))).forEach(o=>{console.log(`${o.id} => ${o.data()}`),r+=`<tr><td>${o.data().date}</td><td>${o.data().name}</td><td>${o.data().work}</td><td>${o.data().comment}</td></tr>`}),document.getElementById("js-history").innerHTML=r},Of=async(n,t,e,r)=>{n.preventDefault();const s=new FormData(n.target);try{const o=await t(e(r,"reports"),{date:new Date,name:s.get("name"),work:s.get("work"),comment:s.get("comment")});console.log("Document written with ID: ",o.id)}catch(o){console.error("Error adding document: ",o)}};var xf={VITE_API_KEY:"AIzaSyBUUuYJWYM7yAy-QRYXQWqSO-QGeZrSRSE",VITE_AUTH_DOMAIN:"daily-report-f6ffc.firebaseapp.com",VITE_PROJECT_ID:"daily-report-f6ffc",VITE_STORAGE_BUCKET:"daily-report-f6ffc.appspot.com",VITE_MESSAGING_SENDER_ID:"185399585718",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Lf={apiKey:"AIzaSyBUUuYJWYM7yAy-QRYXQWqSO-QGeZrSRSE",authDomain:"daily-report-f6ffc.firebaseapp.com",projectId:"daily-report-f6ffc",storageBucket:"daily-report-f6ffc.appspot.com",messagingSenderId:"185399585718",appId:xf.APP_ID},Ff=Fo(Lf),cu=pf(Ff);document.getElementById("js-history")&&Mf(Df,Ya,cu);document.getElementById("js-form")&&document.getElementById("js-form").addEventListener("submit",n=>Of(n,Nf,Ya,cu));
