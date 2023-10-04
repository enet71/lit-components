/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),e=new WeakMap;class n{constructor(t,i,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const s=this.t;if(i&&void 0===t){const i=void 0!==s&&1===s.length;i&&(t=e.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&e.set(s,t))}return t}toString(){return this.cssText}}const o=(t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new n(e,t,s)},r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const h=window,d=h.trustedTypes,a=d?d.emptyScript:"",u=h.reactiveElementPolyfillSupport,c={toAttribute(t,i){switch(i){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,i)=>i!==t&&(i==i||t==t),p={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:v},f="finalized";class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=p){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const n=this[t];this[i]=e,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(r(t))}else void 0!==t&&i.push(r(t));return i}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var s;const e=null!==(s=this.shadowRoot)&&void 0!==s?s:this.attachShadow(this.constructor.shadowRootOptions);return((s,e)=>{i?s.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((i=>{const e=document.createElement("style"),n=t.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,s.appendChild(e)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=p){var e;const n=this.constructor._$Ep(t,s);if(void 0!==n&&!0===s.reflect){const o=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:c).toAttribute(i,s.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,n=e._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=e.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:c;this._$El=n,this[n]=o.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;b[f]=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:b}),(null!==(l=h.reactiveElementVersions)&&void 0!==l?l:h.reactiveElementVersions=[]).push("1.6.2");const y=window,m=y.trustedTypes,w=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,S="?"+x,k=`<${S}>`,_=document,A=()=>_.createComment(""),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,j="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,U=/>/g,M=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,R=/"/g,z=/^(?:script|style|textarea|title)$/i,I=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),P=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),B=new WeakMap,D=_.createTreeWalker(_,129,null,!1);function H(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(i):i}const J=(t,i)=>{const s=t.length-1,e=[];let n,o=2===i?"<svg>":"",r=O;for(let i=0;i<s;i++){const s=t[i];let l,h,d=-1,a=0;for(;a<s.length&&(r.lastIndex=a,h=r.exec(s),null!==h);)a=r.lastIndex,r===O?"!--"===h[1]?r=T:void 0!==h[1]?r=U:void 0!==h[2]?(z.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=M):void 0!==h[3]&&(r=M):r===M?">"===h[0]?(r=null!=n?n:O,d=-1):void 0===h[1]?d=-2:(d=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?M:'"'===h[3]?R:N):r===R||r===N?r=M:r===T||r===U?r=O:(r=M,n=void 0);const u=r===M&&t[i+1].startsWith("/>")?" ":"";o+=r===O?s+k:d>=0?(e.push(l),s.slice(0,d)+$+s.slice(d)+x+u):s+x+(-2===d?(e.push(void 0),i):u)}return[H(t,o+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class K{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let n=0,o=0;const r=t.length-1,l=this.parts,[h,d]=J(t,i);if(this.el=K.createElement(h,s),D.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=D.nextNode())&&l.length<r;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith($)||i.startsWith(x)){const s=d[o++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+$).split(x),i=/([.?@])?(.*)/.exec(s);l.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?F:"?"===i[1]?Q:"@"===i[1]?X:V})}else l.push({type:6,index:n})}for(const i of t)e.removeAttribute(i)}if(z.test(e.tagName)){const t=e.textContent.split(x),i=t.length-1;if(i>0){e.textContent=m?m.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],A()),D.nextNode(),l.push({type:2,index:++n});e.append(t[i],A())}}}else if(8===e.nodeType)if(e.data===S)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=e.data.indexOf(x,t+1));)l.push({type:7,index:n}),t+=x.length-1}n++}}static createElement(t,i){const s=_.createElement("template");return s.innerHTML=t,s}}function W(t,i,s=t,e){var n,o,r,l;if(i===P)return i;let h=void 0!==e?null===(n=s._$Co)||void 0===n?void 0:n[e]:s._$Cl;const d=C(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==d&&(null===(o=null==h?void 0:h._$AO)||void 0===o||o.call(h,!1),void 0===d?h=void 0:(h=new d(t),h._$AT(t,s,e)),void 0!==e?(null!==(r=(l=s)._$Co)&&void 0!==r?r:l._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=W(t,h._$AS(t,i.values),h,e)),i}class Z{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:_).importNode(s,!0);D.currentNode=n;let o=D.nextNode(),r=0,l=0,h=e[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new q(o,o.nextSibling,this,t):1===h.type?i=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(i=new Y(o,this,t)),this._$AV.push(i),h=e[++l]}r!==(null==h?void 0:h.index)&&(o=D.nextNode(),r++)}return D.currentNode=_,n}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class q{constructor(t,i,s,e){var n;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(n=null==e?void 0:e.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=W(this,t,i),C(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==P&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>E(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(_.createTextNode(t)),this._$AH=t}g(t){var i;const{values:s,_$litType$:e}=t,n="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=K.createElement(H(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.v(s);else{const t=new Z(n,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t}}_$AC(t){let i=B.get(t.strings);return void 0===i&&B.set(t.strings,i=new K(t)),i}T(t){E(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const n of t)e===i.length?i.push(s=new q(this.k(A()),this.k(A()),this,this.options)):s=i[e],s._$AI(n),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class V{constructor(t,i,s,e,n){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const n=this.strings;let o=!1;if(void 0===n)t=W(this,t,i,0),o=!C(t)||t!==this._$AH&&t!==P,o&&(this._$AH=t);else{const e=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=W(this,e[s+r],i,r),l===P&&(l=this._$AH[r]),o||(o=!C(l)||l!==this._$AH[r]),l===L?t=L:t!==L&&(t+=(null!=l?l:"")+n[r+1]),this._$AH[r]=l}o&&!e&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class F extends V{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const G=m?m.emptyScript:"";class Q extends V{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class X extends V{constructor(t,i,s,e,n){super(t,i,s,e,n),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=W(this,t,i,0))&&void 0!==s?s:L)===P)return;const e=this._$AH,n=t===L&&e!==L||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,o=t!==L&&(e===L||n);n&&this.element.removeEventListener(this.name,this,e),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const tt=y.litHtmlPolyfillSupport;null==tt||tt(K,q),(null!==(g=y.litHtmlVersions)&&void 0!==g?g:y.litHtmlVersions=[]).push("2.7.5");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var it,st;class et extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{var e,n;const o=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new q(i.insertBefore(A(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return P}}et.finalized=!0,et._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:et});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:et}),(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.3.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=t=>i=>"function"==typeof i?((t,i)=>(customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){customElements.define(t,i)}}})(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,rt=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}},lt=(t,i,s)=>{i.constructor.createProperty(s,t)};function ht(t){return(i,s)=>void 0!==s?lt(t,i,s):rt(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var dt;const at=null!=(null===(dt=window.HTMLSlotElement)||void 0===dt?void 0:dt.prototype.assignedElements)?(t,i)=>t.assignedElements(i):(t,i)=>t.assignedNodes(i).filter((t=>t.nodeType===Node.ELEMENT_NODE));const ut=o`
      ::slotted(expansion-panel:not(:last-child)) {
        margin-bottom: 10px;
      }
    `;var ct=function(t,i,s,e){for(var n,o=arguments.length,r=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(i,s,r):n(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};let vt=class extends et{constructor(){super(),this.addPanelToggleListener()}render(){return I`<slot></slot>`}addPanelToggleListener(){this.addEventListener("expansion-panel-toggle",(t=>{this.expansionPanels.forEach((i=>{i!==t.target&&(i.open=!1)}))}))}};vt.styles=[ut],ct([function(t){const{slot:i,selector:s}=null!=t?t:{};return(({finisher:t,descriptor:i})=>(s,e)=>{var n;if(void 0===e){const e=null!==(n=s.originalKey)&&void 0!==n?n:s.key,o=null!=i?{kind:"method",placement:"prototype",key:e,descriptor:i(s.key)}:{...s,key:e};return null!=t&&(o.finisher=function(i){t(i,e)}),o}{const n=s.constructor;void 0!==i&&Object.defineProperty(s,e,i(e)),null==t||t(n,e)}})({descriptor:e=>({get(){var e;const n="slot"+(i?`[name=${i}]`:":not([name])"),o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(n),r=null!=o?at(o,t):[];return s?r.filter((t=>t.matches(s))):r},enumerable:!0,configurable:!0})})}({selector:"expansion-panel"})],vt.prototype,"expansionPanels",void 0),vt=ct([ot("my-accordion")],vt);var pt=function(t,i,s,e){for(var n,o=arguments.length,r=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(i,s,r):n(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};let ft=class extends et{constructor(){super(),this.time=this.displayTime,this.addClockInterval()}render(){return I`${this.time}`}get displayTime(){return(new Date).toLocaleTimeString()}addClockInterval(){setInterval((()=>{this.time=this.displayTime}),1e3)}};pt([function(t){return ht({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */()],ft.prototype,"time",void 0),ft=pt([ot("my-clock")],ft);const bt=o`
  :host {
    display: block;
  }

  .header {
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid #46a1ff;
    background: #d2e7fb;
    padding: 8px 15px;
    display: flex;
    align-items: center;
    border-radius: 3px;
  }

  .title {
    flex: 1;
  }

  .arrow {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }

  .arrow_up {
    border-bottom: 5px solid black;
  }

  .arrow_down {
    border-top: 5px solid black;
  }

  .body {
    padding: 15px;
    border: 1px solid #aacfff;
    background: #ffffff;
    border-radius: 3px;
    margin-top: 10px;
  }
`;var gt=function(t,i,s,e){for(var n,o=arguments.length,r=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(i,s,r):n(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};let yt=class extends et{constructor(){super(...arguments),this.open=!1,this.disabled=!1}render(){return I`${this.header}${this.body}`}toggleOpen(){this.open=!this.open,this.dispatchToggleEvent()}dispatchToggleEvent(){this.dispatchEvent(new CustomEvent("expansion-panel-toggle",{detail:{open:this.open},bubbles:!0}))}get header(){return I`
      <div @click=${this.toggleOpen} class="header">
        <div class="title">
          <slot name="header"></slot>
        </div>
        ${this.arrow}
      </div>
    `}get arrow(){return I`
      <div class="arrow ${this.open?"arrow_up":"arrow_down"}"></div>
    `}get body(){return this.open?I`
      <div class="body">
        <slot name="body"></slot>
      </div>
    `:I`${L}`}};yt.styles=[bt],gt([ht({type:Boolean})],yt.prototype,"open",void 0),gt([ht()],yt.prototype,"disabled",void 0),yt=gt([ot("expansion-panel")],yt);export{vt as Accordion,ft as Clock,yt as ExpansionPanel};
