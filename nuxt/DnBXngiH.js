const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BgPdhWi5.js","./B9eRQ21P.js","./entry.BI-WPgVV.css","./CxIBUx0g.js","./Ctccelsq.js","./BT0YHPnS.js","./CJ3kDXi7.js","./B5msjmZV.js","./BaiVM3wm.js","./CMCp-Pdo.js","./BlU-pBPK.js","./BeviS9MN.js"])))=>i.map(i=>d[i]);
import{G as et,s as li,H as hi,o as ui,I as we,d as Wi,J as Ki,K as Yi,k as Gi,L as Xi,M as Ut,r as Qi,N as to,h as eo}from"./B9eRQ21P.js";var zt=window,Ce=zt.ShadowRoot&&(zt.ShadyCSS===void 0||zt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Le=Symbol(),Fe=new WeakMap,di=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Le)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Ce&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Fe.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Fe.set(e,t))}return t}toString(){return this.cssText}},io=t=>new di(typeof t=="string"?t:t+"",void 0,Le),oo=(t,...e)=>{let i=t.length===1?t[0]:e.reduce((o,n,r)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[r+1],t[0]);return new di(i,t,Le)},no=(t,e)=>{Ce?t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):e.forEach(i=>{let o=document.createElement("style"),n=zt.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=i.cssText,t.appendChild(o)})},Ve=Ce?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(let o of e.cssRules)i+=o.cssText;return io(i)})(t):t,Qt,Ft=window,Be=Ft.trustedTypes,ro=Be?Be.emptyScript:"",He=Ft.reactiveElementPolyfillSupport,ue={toAttribute(t,e){switch(e){case Boolean:t=t?ro:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},ci=(t,e)=>e!==t&&(e==e||t==t),te={attribute:!0,type:String,converter:ue,reflect:!1,hasChanged:ci},de="finalized",vt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let o=this._$Ep(i,e);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=te){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){let n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||te}static finalize(){if(this.hasOwnProperty(de))return!1;this[de]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let o of i)e.unshift(Ve(o))}else t!==void 0&&e.push(Ve(t));return e}static _$Ep(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return no(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=te){var o;let n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){let r=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:ue).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;let o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){let r=o.getPropertyOptions(n),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:ue;this._$El=n,this[n]=a.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ci)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};vt[de]=!0,vt.elementProperties=new Map,vt.elementStyles=[],vt.shadowRootOptions={mode:"open"},He?.({ReactiveElement:vt}),((Qt=Ft.reactiveElementVersions)!==null&&Qt!==void 0?Qt:Ft.reactiveElementVersions=[]).push("1.6.3");var ee,Vt=window,gt=Vt.trustedTypes,qe=gt?gt.createPolicy("lit-html",{createHTML:t=>t}):void 0,ce="$lit$",rt=`lit$${(Math.random()+"").slice(9)}$`,pi="?"+rt,so=`<${pi}>`,ut=document,xt=()=>ut.createComment(""),Et=t=>t===null||typeof t!="object"&&typeof t!="function",fi=Array.isArray,ao=t=>fi(t)||typeof t?.[Symbol.iterator]=="function",ie=`[ 	
\f\r]`,St=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Re=/-->/g,Ze=/>/g,at=RegExp(`>|${ie}(?:([^\\s"'>=/]+)(${ie}*=${ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Je=/'/g,We=/"/g,vi=/^(?:script|style|textarea|title)$/i,lo=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),b=lo(1),bt=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),Ke=new WeakMap,lt=ut.createTreeWalker(ut,129,null,!1);function mi(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return qe!==void 0?qe.createHTML(e):e}var ho=(t,e)=>{let i=t.length-1,o=[],n,r=e===2?"<svg>":"",a=St;for(let l=0;l<i;l++){let s=t[l],h,d,u=-1,c=0;for(;c<s.length&&(a.lastIndex=c,d=a.exec(s),d!==null);)c=a.lastIndex,a===St?d[1]==="!--"?a=Re:d[1]!==void 0?a=Ze:d[2]!==void 0?(vi.test(d[2])&&(n=RegExp("</"+d[2],"g")),a=at):d[3]!==void 0&&(a=at):a===at?d[0]===">"?(a=n??St,u=-1):d[1]===void 0?u=-2:(u=a.lastIndex-d[2].length,h=d[1],a=d[3]===void 0?at:d[3]==='"'?We:Je):a===We||a===Je?a=at:a===Re||a===Ze?a=St:(a=at,n=void 0);let p=a===at&&t[l+1].startsWith("/>")?" ":"";r+=a===St?s+so:u>=0?(o.push(h),s.slice(0,u)+ce+s.slice(u)+rt+p):s+rt+(u===-2?(o.push(void 0),l):p)}return[mi(t,r+(t[i]||"<?>")+(e===2?"</svg>":"")),o]},pe=class _i{constructor({strings:e,_$litType$:i},o){let n;this.parts=[];let r=0,a=0,l=e.length-1,s=this.parts,[h,d]=ho(e,i);if(this.el=_i.createElement(h,o),lt.currentNode=this.el.content,i===2){let u=this.el.content,c=u.firstChild;c.remove(),u.append(...c.childNodes)}for(;(n=lt.nextNode())!==null&&s.length<l;){if(n.nodeType===1){if(n.hasAttributes()){let u=[];for(let c of n.getAttributeNames())if(c.endsWith(ce)||c.startsWith(rt)){let p=d[a++];if(u.push(c),p!==void 0){let _=n.getAttribute(p.toLowerCase()+ce).split(rt),f=/([.?@])?(.*)/.exec(p);s.push({type:1,index:r,name:f[2],strings:_,ctor:f[1]==="."?co:f[1]==="?"?fo:f[1]==="@"?vo:Rt})}else s.push({type:6,index:r})}for(let c of u)n.removeAttribute(c)}if(vi.test(n.tagName)){let u=n.textContent.split(rt),c=u.length-1;if(c>0){n.textContent=gt?gt.emptyScript:"";for(let p=0;p<c;p++)n.append(u[p],xt()),lt.nextNode(),s.push({type:2,index:++r});n.append(u[c],xt())}}}else if(n.nodeType===8)if(n.data===pi)s.push({type:2,index:r});else{let u=-1;for(;(u=n.data.indexOf(rt,u+1))!==-1;)s.push({type:7,index:r}),u+=rt.length-1}r++}}static createElement(e,i){let o=ut.createElement("template");return o.innerHTML=e,o}};function wt(t,e,i=t,o){var n,r,a,l;if(e===bt)return e;let s=o!==void 0?(n=i._$Co)===null||n===void 0?void 0:n[o]:i._$Cl,h=Et(e)?void 0:e._$litDirective$;return s?.constructor!==h&&((r=s?._$AO)===null||r===void 0||r.call(s,!1),h===void 0?s=void 0:(s=new h(t),s._$AT(t,i,o)),o!==void 0?((a=(l=i)._$Co)!==null&&a!==void 0?a:l._$Co=[])[o]=s:i._$Cl=s),s!==void 0&&(e=wt(t,s._$AS(t,e.values),s,o)),e}var uo=class{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var i;let{el:{content:o},parts:n}=this._$AD,r=((i=e?.creationScope)!==null&&i!==void 0?i:ut).importNode(o,!0);lt.currentNode=r;let a=lt.nextNode(),l=0,s=0,h=n[0];for(;h!==void 0;){if(l===h.index){let d;h.type===2?d=new Se(a,a.nextSibling,this,e):h.type===1?d=new h.ctor(a,h.name,h.strings,this,e):h.type===6&&(d=new mo(a,this,e)),this._$AV.push(d),h=n[++s]}l!==h?.index&&(a=lt.nextNode(),l++)}return lt.currentNode=ut,r}v(e){let i=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,i),i+=o.strings.length-2):o._$AI(e[i])),i++}},Se=class yi{constructor(e,i,o,n){var r;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=o,this.options=n,this._$Cp=(r=n?.isConnected)===null||r===void 0||r}get _$AU(){var e,i;return(i=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&i!==void 0?i:this._$Cp}get parentNode(){let e=this._$AA.parentNode,i=this._$AM;return i!==void 0&&e?.nodeType===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=wt(this,e,i),Et(e)?e===U||e==null||e===""?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==bt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ao(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==U&&Et(this._$AH)?this._$AA.nextSibling.data=e:this.$(ut.createTextNode(e)),this._$AH=e}g(e){var i;let{values:o,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=pe.createElement(mi(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===r)this._$AH.v(o);else{let a=new uo(r,this),l=a.u(this.options);a.v(o),this.$(l),this._$AH=a}}_$AC(e){let i=Ke.get(e.strings);return i===void 0&&Ke.set(e.strings,i=new pe(e)),i}T(e){fi(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,o,n=0;for(let r of e)n===i.length?i.push(o=new yi(this.k(xt()),this.k(xt()),this,this.options)):o=i[n],o._$AI(r),n++;n<i.length&&(this._$AR(o&&o._$AB.nextSibling,n),i.length=n)}_$AR(e=this._$AA.nextSibling,i){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,i);e&&e!==this._$AB;){let n=e.nextSibling;e.remove(),e=n}}setConnected(e){var i;this._$AM===void 0&&(this._$Cp=e,(i=this._$AP)===null||i===void 0||i.call(this,e))}},Rt=class{constructor(t,e,i,o,n){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){let n=this.strings,r=!1;if(n===void 0)t=wt(this,t,e,0),r=!Et(t)||t!==this._$AH&&t!==bt,r&&(this._$AH=t);else{let a=t,l,s;for(t=n[0],l=0;l<n.length-1;l++)s=wt(this,a[i+l],e,l),s===bt&&(s=this._$AH[l]),r||(r=!Et(s)||s!==this._$AH[l]),s===U?t=U:t!==U&&(t+=(s??"")+n[l+1]),this._$AH[l]=s}r&&!o&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},co=class extends Rt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}},po=gt?gt.emptyScript:"",fo=class extends Rt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==U?this.element.setAttribute(this.name,po):this.element.removeAttribute(this.name)}},vo=class extends Rt{constructor(e,i,o,n,r){super(e,i,o,n,r),this.type=5}_$AI(e,i=this){var o;if((e=(o=wt(this,e,i,0))!==null&&o!==void 0?o:U)===bt)return;let n=this._$AH,r=e===U&&n!==U||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==U&&(n===U||r);r&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i,o;typeof this._$AH=="function"?this._$AH.call((o=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}},mo=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){wt(this,t)}},Ye=Vt.litHtmlPolyfillSupport;Ye?.(pe,Se),((ee=Vt.litHtmlVersions)!==null&&ee!==void 0?ee:Vt.litHtmlVersions=[]).push("2.8.0");var _o=(t,e,i)=>{var o,n;let r=(o=i?.renderBefore)!==null&&o!==void 0?o:e,a=r._$litPart$;if(a===void 0){let l=(n=i?.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=a=new Se(e.insertBefore(xt(),l),l,void 0,i??{})}return a._$AI(t),a},oe,ne,$t=class extends vt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,i;let o=super.createRenderRoot();return(e=(i=this.renderOptions).renderBefore)!==null&&e!==void 0||(i.renderBefore=o.firstChild),o}update(e){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_o(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return bt}};$t.finalized=!0,$t._$litElement$=!0,(oe=globalThis.litElementHydrateSupport)===null||oe===void 0||oe.call(globalThis,{LitElement:$t});var Ge=globalThis.litElementPolyfillSupport;Ge?.({LitElement:$t});((ne=globalThis.litElementVersions)!==null&&ne!==void 0?ne:globalThis.litElementVersions=[]).push("3.3.3");var yo=oo`
  @font-face {
    font-family: 'Karla';
    font-weight: regular;
    src: url('./fonts/Karla-regular.woff') format('woff');
  }

  :host {
    --lottie-player-toolbar-height: 35px;
    --lottie-player-toolbar-background-color: transparent;
    --lottie-player-toolbar-hover-background-color: #f3f6f8;
    --lottie-player-toolbar-icon-color: #20272c;
    --lottie-player-toolbar-icon-hover-color: #f3f6f8;
    --lottie-player-toolbar-icon-active-color: #00ddb3;
    --lottie-player-seeker-track-color: #00ddb3;
    --lottie-player-seeker-accent-color: #00c1a2;
    --lottie-player-seeker-thumb-color: #00c1a2;
    --lottie-player-options-separator: #d9e0e6;

    display: block;
    width: 100%;
    height: 100%;

    font-family: 'Karla', sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host * {
    box-sizing: border-box;
  }

  .active {
    color: var(--lottie-player-toolbar-icon-active-color) !important;
  }

  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .animation {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .animation.controls {
    height: calc(100% - var(--lottie-player-toolbar-height));
  }

  .toolbar {
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: var(--lottie-player-toolbar-background-color);
    margin: 0 8px;
    height: var(--lottie-player-toolbar-height);
  }

  .btn-spacing-left {
    margin-right: 4px;
    margin-left: 8px;
  }

  .btn-spacing-center {
    margin-right: 4px;
    margin-left: 4px;
  }

  .btn-spacing-right {
    margin-right: 8px;
    margin-left: 4px;
  }

  .toolbar button {
    color: #20272c;
    cursor: pointer;
    fill: var(--lottie-player-toolbar-icon-color);
    display: flex;
    background: none;
    border: 0px;
    border-radius: 4px;
    padding: 4px;
    outline: none;
    width: 24px;
    height: 24px;
    align-items: center;
  }

  .toolbar button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
    border-style: solid;
    border-radius: 2px;
  }

  .toolbar button.active {
    fill: var(--lottie-player-toolbar-icon-active-color);
  }

  .toolbar button.active:hover {
    fill: var(--lottie-player-toolbar-icon-hover-color);
    border-radius: 4px;
  }

  .toolbar button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .toolbar button svg {
    width: 16px;
    height: 16px;
  }

  .toolbar button.disabled svg {
    display: none;
  }

  .popover {
    position: absolute;
    bottom: 40px;
    left: calc(100% - 239px);
    width: 224px;
    min-height: 84px;
    max-height: 300px;
    background-color: #ffffff;
    box-shadow: 0px 8px 48px 0px rgba(243, 246, 248, 0.15), 0px 8px 16px 0px rgba(61, 72, 83, 0.16),
      0px 0px 1px 0px rgba(61, 72, 83, 0.36);
    border-radius: 8px;
    padding: 8px;
    z-index: 100;
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .popover:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover::-webkit-scrollbar {
    width: 0px;
  }

  .popover-button {
    background: none;
    border: none;
    font-family: inherit;
    width: 100%;
    flex-direction: row;
    cursor: pointer;
    height: 32px;
    color: #20272c;
    justify-content: space-between;
    display: flex;
    padding: 4px 8px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 4px;
  }

  .popover-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }

  .popover-button-text {
    display: flex;
    color: #20272c;
    flex-direction: column;
    align-self: stretch;
    justify-content: center;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.28px;
  }

  .reset-btn {
    font-size: 12px;
    cursor: pointer;
    font-family: inherit;
    background: none;
    border: none;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #63727e;
    padding: 0;
    width: 31px;
    height: 18px;
  }
  .reset-btn:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }
  .reset-btn:hover {
    color: #20272c;
  }

  .option-title-button {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 32px;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    cursor: pointer;
    color: var(--lottie-player-toolbar-icon-color);
    border: none;
    background: none;
    padding: 4px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }
  .option-title-button.themes {
    width: auto;
    padding: 0;
  }
  .option-title-button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-themes-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
  }
  .option-title-themes-row:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-title-text {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }

  .option-title-separator {
    margin: 8px -8px;
    border-bottom: 1px solid var(--lottie-player-options-separator);
  }

  .option-title-chevron {
    display: flex;
    padding: 4px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .option-row {
    display: flex;
    flex-direction: column;
  }
  .option-row > ul {
    padding: 0;
    margin: 0;
  }

  .option-button {
    width: 100%;
    background: none;
    border: none;
    font-family: inherit;
    display: flex;
    padding: 4px 8px;
    color: #20272c;
    overflow: hidden;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    cursor: pointer;
    height: 32px;
    font-family: inherit;
    font-size: 14px;
    border-radius: 4px;
  }
  .option-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }
  .option-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-tick {
    display: flex;
    width: 24px;
    height: 24px;
    align-items: flex-start;
    gap: 8px;
  }

  .seeker {
    height: 4px;
    width: 95%;
    outline: none;
    -webkit-appearance: none;
    -moz-apperance: none;
    border-radius: 9999px;
    cursor: pointer;
    background-image: linear-gradient(
      to right,
      rgb(0, 221, 179) calc(var(--seeker) * 1%),
      rgb(217, 224, 230) calc(var(--seeker) * 1%)
    );
  }
  .seeker.to-left {
    background-image: linear-gradient(
      to right,
      rgb(217, 224, 230) calc(var(--seeker) * 1%),
      rgb(0, 221, 179) calc(var(--seeker) * 1%)
    );
  }
  .seeker::-webkit-slider-runnable-track:focus-visible {
    color: #f07167;
    accent-color: #00ddb3;
  }

  .seeker::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
  }
  .seeker::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
  }
  .seeker:focus-visible::-webkit-slider-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }
  .seeker::-webkit-slider-thumb:hover {
    background: #019d91;
  }
  .seeker::-moz-range-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
    border-color: transparent;
  }
  .seeker:focus-visible::-moz-range-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }

  .error {
    display: flex;
    justify-content: center;
    margin: auto;
    height: 100%;
    align-items: center;
  }
`;var Xe={},go=function(t,e,i,o,n){var r=new Worker(Xe[e]||(Xe[e]=URL.createObjectURL(new Blob([t+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return r.onmessage=function(a){var l=a.data,s=l.$e$;if(s){var h=new Error(s[0]);h.code=s[1],h.stack=s[2],n(h,null)}else n(null,l)},r.postMessage(i,o),r},B=Uint8Array,ht=Uint16Array,gi=Int32Array,$e=new B([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ae=new B([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),bi=new B([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),wi=function(t,e){for(var i=new ht(31),o=0;o<31;++o)i[o]=e+=1<<t[o-1];for(var n=new gi(i[30]),o=1;o<30;++o)for(var r=i[o];r<i[o+1];++r)n[r]=r-i[o]<<5|o;return{b:i,r:n}},Ci=wi($e,2),ke=Ci.b,bo=Ci.r;ke[28]=258,bo[258]=28;var wo=wi(Ae,0),Li=wo.b,Bt=new ht(32768);for(C=0;C<32768;++C)tt=(C&43690)>>1|(C&21845)<<1,tt=(tt&52428)>>2|(tt&13107)<<2,tt=(tt&61680)>>4|(tt&3855)<<4,Bt[C]=((tt&65280)>>8|(tt&255)<<8)>>1;var tt,C,_t=function(t,e,i){for(var o=t.length,n=0,r=new ht(e);n<o;++n)t[n]&&++r[t[n]-1];var a=new ht(e);for(n=1;n<e;++n)a[n]=a[n-1]+r[n-1]<<1;var l;if(i){l=new ht(1<<e);var s=15-e;for(n=0;n<o;++n)if(t[n])for(var h=n<<4|t[n],d=e-t[n],u=a[t[n]-1]++<<d,c=u|(1<<d)-1;u<=c;++u)l[Bt[u]>>s]=h}else for(l=new ht(o),n=0;n<o;++n)t[n]&&(l[n]=Bt[a[t[n]-1]++]>>15-t[n]);return l},It=new B(288);for(C=0;C<144;++C)It[C]=8;var C;for(C=144;C<256;++C)It[C]=9;var C;for(C=256;C<280;++C)It[C]=7;var C;for(C=280;C<288;++C)It[C]=8;var C,Si=new B(32);for(C=0;C<32;++C)Si[C]=5;var C,$i=_t(It,9,1),Ai=_t(Si,5,1),jt=function(t){for(var e=t[0],i=1;i<t.length;++i)t[i]>e&&(e=t[i]);return e},J=function(t,e,i){var o=e/8|0;return(t[o]|t[o+1]<<8)>>(e&7)&i},Dt=function(t,e){var i=e/8|0;return(t[i]|t[i+1]<<8|t[i+2]<<16)>>(e&7)},ki=function(t){return(t+7)/8|0},Zt=function(t,e,i){return(e==null||e<0)&&(e=0),(i==null||i>t.length)&&(i=t.length),new B(t.subarray(e,i))},xi=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],V=function(t,e,i){var o=new Error(e||xi[t]);if(o.code=t,Error.captureStackTrace&&Error.captureStackTrace(o,V),!i)throw o;return o},Ei=function(t,e,i,o){var n=t.length,r=o?o.length:0;if(!n||e.f&&!e.l)return i||new B(0);var a=!i,l=a||e.i!=2,s=e.i;a&&(i=new B(n*3));var h=function(ze){var je=i.length;if(ze>je){var De=new B(Math.max(je*2,ze));De.set(i),i=De}},d=e.f||0,u=e.p||0,c=e.b||0,p=e.l,_=e.d,f=e.m,v=e.n,y=n*8;do{if(!p){d=J(t,u,1);var m=J(t,u+1,3);if(u+=3,m)if(m==1)p=$i,_=Ai,f=9,v=5;else if(m==2){var g=J(t,u,31)+257,x=J(t,u+10,15)+4,S=g+J(t,u+5,31)+1;u+=14;for(var A=new B(S),k=new B(19),$=0;$<x;++$)k[bi[$]]=J(t,u+$*3,7);u+=x*3;for(var M=jt(k),N=(1<<M)-1,I=_t(k,M,1),$=0;$<S;){var H=I[J(t,u,N)];u+=H&15;var F=H>>4;if(F<16)A[$++]=F;else{var R=0,D=0;for(F==16?(D=3+J(t,u,3),u+=2,R=A[$-1]):F==17?(D=3+J(t,u,7),u+=3):F==18&&(D=11+J(t,u,127),u+=7);D--;)A[$++]=R}}var it=A.subarray(0,g),ot=A.subarray(g);f=jt(it),v=jt(ot),p=_t(it,f,1),_=_t(ot,v,1)}else V(1);else{var F=ki(u)+4,Wt=t[F-4]|t[F-3]<<8,Kt=F+Wt;if(Kt>n){s&&V(0);break}l&&h(c+Wt),i.set(t.subarray(F,Kt),c),e.b=c+=Wt,e.p=u=Kt*8,e.f=d;continue}if(u>y){s&&V(0);break}}l&&h(c+131072);for(var Ri=(1<<f)-1,Zi=(1<<v)-1,Yt=u;;Yt=u){var R=p[Dt(t,u)&Ri],pt=R>>4;if(u+=R&15,u>y){s&&V(0);break}if(R||V(2),pt<256)i[c++]=pt;else if(pt==256){Yt=u,p=null;break}else{var Te=pt-254;if(pt>264){var $=pt-257,Lt=$e[$];Te=J(t,u,(1<<Lt)-1)+ke[$],u+=Lt}var Gt=_[Dt(t,u)&Zi],Xt=Gt>>4;Gt||V(3),u+=Gt&15;var ot=Li[Xt];if(Xt>3){var Lt=Ae[Xt];ot+=Dt(t,u)&(1<<Lt)-1,u+=Lt}if(u>y){s&&V(0);break}l&&h(c+131072);var Ue=c+Te;if(c<ot){var Ne=r-ot,Ji=Math.min(ot,Ue);for(Ne+c<0&&V(3);c<Ji;++c)i[c]=o[Ne+c]}for(;c<Ue;++c)i[c]=i[c-ot]}}e.l=p,e.p=Yt,e.b=c,e.f=d,p&&(d=1,e.m=f,e.d=_,e.n=v)}while(!d);return c!=i.length&&a?Zt(i,0,c):i.subarray(0,c)},Co=new B(0),Lo=function(t,e){var i={};for(var o in t)i[o]=t[o];for(var o in e)i[o]=e[o];return i},Qe=function(t,e,i){for(var o=t(),n=t.toString(),r=n.slice(n.indexOf("[")+1,n.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<o.length;++a){var l=o[a],s=r[a];if(typeof l=="function"){e+=";"+s+"=";var h=l.toString();if(l.prototype)if(h.indexOf("[native code]")!=-1){var d=h.indexOf(" ",8)+1;e+=h.slice(d,h.indexOf("(",d))}else{e+=h;for(var u in l.prototype)e+=";"+s+".prototype."+u+"="+l.prototype[u].toString()}else e+=h}else i[s]=l}return e},Nt=[],So=function(t){var e=[];for(var i in t)t[i].buffer&&e.push((t[i]=new t[i].constructor(t[i])).buffer);return e},$o=function(t,e,i,o){if(!Nt[i]){for(var n="",r={},a=t.length-1,l=0;l<a;++l)n=Qe(t[l],n,r);Nt[i]={c:Qe(t[a],n,r),e:r}}var s=Lo({},Nt[i].e);return go(Nt[i].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",i,s,So(s),o)},Ao=function(){return[B,ht,gi,$e,Ae,bi,ke,Li,$i,Ai,Bt,xi,_t,jt,J,Dt,ki,Zt,V,Ei,xe,Ii,Oi]},Ii=function(t){return postMessage(t,[t.buffer])},Oi=function(t){return t&&{out:t.size&&new B(t.size),dictionary:t.dictionary}},ko=function(t,e,i,o,n,r){var a=$o(i,o,n,function(l,s){a.terminate(),r(l,s)});return a.postMessage([t,e],e.consume?[t.buffer]:[]),function(){a.terminate()}},G=function(t,e){return t[e]|t[e+1]<<8},K=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},re=function(t,e){return K(t,e)+K(t,e+4)*4294967296};function xo(t,e,i){return i||(i=e,e={}),typeof i!="function"&&V(7),ko(t,e,[Ao],function(o){return Ii(xe(o.data[0],Oi(o.data[1])))},1,i)}function xe(t,e){return Ei(t,{i:2},e&&e.out,e&&e.dictionary)}var fe=typeof TextDecoder<"u"&&new TextDecoder,Eo=0;try{fe.decode(Co,{stream:!0}),Eo=1}catch{}var Io=function(t){for(var e="",i=0;;){var o=t[i++],n=(o>127)+(o>223)+(o>239);if(i+n>t.length)return{s:e,r:Zt(t,i-1)};n?n==3?(o=((o&15)<<18|(t[i++]&63)<<12|(t[i++]&63)<<6|t[i++]&63)-65536,e+=String.fromCharCode(55296|o>>10,56320|o&1023)):n&1?e+=String.fromCharCode((o&31)<<6|t[i++]&63):e+=String.fromCharCode((o&15)<<12|(t[i++]&63)<<6|t[i++]&63):e+=String.fromCharCode(o)}};function Ct(t,e){if(e){for(var i="",o=0;o<t.length;o+=16384)i+=String.fromCharCode.apply(null,t.subarray(o,o+16384));return i}else{if(fe)return fe.decode(t);var n=Io(t),r=n.s,i=n.r;return i.length&&V(8),r}}var Oo=function(t,e){return e+30+G(t,e+26)+G(t,e+28)},Mo=function(t,e,i){var o=G(t,e+28),n=Ct(t.subarray(e+46,e+46+o),!(G(t,e+8)&2048)),r=e+46+o,a=K(t,e+20),l=i&&a==4294967295?Po(t,r):[a,K(t,e+24),K(t,e+42)],s=l[0],h=l[1],d=l[2];return[G(t,e+10),s,h,n,r+G(t,e+30)+G(t,e+32),d]},Po=function(t,e){for(;G(t,e)!=1;e+=4+G(t,e+2));return[re(t,e+12),re(t,e+4),re(t,e+20)]},ti=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(t){t()};function To(t,e,i){i||(i=e,e={}),typeof i!="function"&&V(7);var o=[],n=function(){for(var v=0;v<o.length;++v)o[v]()},r={},a=function(v,y){ti(function(){i(v,y)})};ti(function(){a=i});for(var l=t.length-22;K(t,l)!=101010256;--l)if(!l||t.length-l>65558)return a(V(13,0,1),null),n;var s=G(t,l+8);if(s){var h=s,d=K(t,l+16),u=d==4294967295||h==65535;if(u){var c=K(t,l-12);u=K(t,c)==101075792,u&&(h=s=K(t,c+32),d=K(t,c+48))}for(var p=e&&e.filter,_=function(v){var y=Mo(t,d,u),m=y[0],g=y[1],x=y[2],S=y[3],A=y[4],k=y[5],$=Oo(t,k);d=A;var M=function(I,H){I?(n(),a(I,null)):(H&&(r[S]=H),--s||a(null,r))};if(!p||p({name:S,size:g,originalSize:x,compression:m}))if(!m)M(null,Zt(t,$,$+g));else if(m==8){var N=t.subarray($,$+g);if(g<32e4)try{M(null,xe(N,{out:new B(x)}))}catch(I){M(I,null)}else o.push(xo(N,{size:x},M))}else M(V(14,"unknown compression type "+m,1),null);else M(null,null)},f=0;f<h;++f)_(f)}else a(null,{});return n}function Uo(t){return(Array.isArray(t)?t:t.issues).reduce((e,i)=>{if(i.path){let o=i.path.map(({key:n})=>n).join(".");e.nested[o]=[...e.nested[o]||[],i.message]}else e.root=[...e.root||[],i.message];return e},{nested:{}})}var No=class extends Error{issues;constructor(t){super(t[0].message),this.name="ValiError",this.issues=t}};function zo(t,e){return{reason:t?.reason,validation:e.validation,origin:t?.origin||"value",message:e.message,input:e.input,abortEarly:t?.abortEarly,abortPipeEarly:t?.abortPipeEarly}}function jo(t,e){return{reason:e,origin:t?.origin,abortEarly:t?.abortEarly,abortPipeEarly:t?.abortPipeEarly}}function st(t,e,i,o){if(!e||!e.length)return{output:t};let n,r,a=t;for(let l of e){let s=l(a);if(s.issue){n=n||jo(i,o);let h=zo(n,s.issue);if(r?r.push(h):r=[h],n.abortEarly||n.abortPipeEarly)break}else a=s.output}return r?{issues:r}:{output:a}}function X(t,e){return!t||typeof t=="string"?[t,e]:[void 0,t]}function Q(t,e,i,o,n,r){return{issues:[{reason:e,validation:i,origin:t?.origin||"value",message:o,input:n,issues:r,abortEarly:t?.abortEarly,abortPipeEarly:t?.abortPipeEarly}]}}function Do(t=[]){return{schema:"any",async:!1,_parse(e,i){return st(e,t,i,"any")}}}function At(t,e,i){let[o,n]=X(e,i);return{schema:"array",array:{item:t},async:!1,_parse(r,a){if(!Array.isArray(r))return Q(a,"type","array",o||"Invalid type",r);let l,s=[];for(let h=0;h<r.length;h++){let d=r[h],u=t._parse(d,a);if(u.issues){let c={schema:"array",input:r,key:h,value:d};for(let p of u.issues)p.path?p.path.unshift(c):p.path=[c],l?.push(p);if(l||(l=u.issues),a!=null&&a.abortEarly)break}else s.push(u.output)}return l?{issues:l}:st(s,n,a,"array")}}}function se(t,e){let[i,o]=X(t,e);return{schema:"boolean",async:!1,_parse(n,r){return typeof n!="boolean"?Q(r,"type","boolean",i||"Invalid type",n):st(n,o,r,"boolean")}}}function ei(t,e){return{schema:"literal",literal:t,async:!1,_parse(i,o){return i!==t?Q(o,"type","literal","Invalid type",i):{output:i}}}}function Fo(t,e){return{schema:"native_enum",nativeEnum:t,async:!1,_parse(i,o){return Object.values(t).includes(i)?{output:i}:Q(o,"type","native_enum","Invalid type",i)}}}function Y(t,e){let[i,o]=X(t,e);return{schema:"number",async:!1,_parse(n,r){return typeof n!="number"?Q(r,"type","number",i||"Invalid type",n):st(n,o,r,"number")}}}function W(t,e,i){let[o,n]=X(e,i),r;return{schema:"object",object:t,async:!1,_parse(a,l){if(!a||typeof a!="object")return Q(l,"type","object",o||"Invalid type",a);r=r||Object.entries(t);let s,h={};for(let[d,u]of r){let c=a[d],p=u._parse(c,l);if(p.issues){let _={schema:"object",input:a,key:d,value:c};for(let f of p.issues)f.path?f.path.unshift(_):f.path=[_],s?.push(f);if(s||(s=p.issues),l!=null&&l.abortEarly)break}else h[d]=p.output}return s?{issues:s}:st(h,n,l,"object")}}}function L(t){return{schema:"optional",wrapped:t,async:!1,_parse(e,i){return e===void 0?{output:e}:t._parse(e,i)}}}function j(t,e){let[i,o]=X(t,e);return{schema:"string",async:!1,_parse(n,r){return typeof n!="string"?Q(r,"type","string",i||"Invalid type",n):st(n,o,r,"string")}}}function Vo(t,e,i,o){if(typeof e=="object"&&!Array.isArray(e)){let[a,l]=X(i,o);return[t,e,a,l]}let[n,r]=X(e,i);return[j(),t,n,r]}var Bo=["__proto__","prototype","constructor"];function Ho(t,e,i,o){let[n,r,a,l]=Vo(t,e,i,o);return{schema:"record",record:{key:n,value:r},async:!1,_parse(s,h){if(!s||typeof s!="object")return Q(h,"type","record",a||"Invalid type",s);let d,u={};for(let[c,p]of Object.entries(s))if(!Bo.includes(c)){let _,f=n._parse(c,{origin:"key",abortEarly:h?.abortEarly,abortPipeEarly:h?.abortPipeEarly});if(f.issues){_={schema:"record",input:s,key:c,value:p};for(let y of f.issues)y.path=[_],d?.push(y);if(d||(d=f.issues),h!=null&&h.abortEarly)break}let v=r._parse(p,h);if(v.issues){_=_||{schema:"record",input:s,key:c,value:p};for(let y of v.issues)y.path?y.path.unshift(_):y.path=[_],d?.push(y);if(d||(d=v.issues),h!=null&&h.abortEarly)break}!f.issues&&!v.issues&&(u[f.output]=v.output)}return d?{issues:d}:st(u,l,h,"record")}}}function qo(t,e,i){let[o,n]=X(t,e);return[void 0,o,n]}function ii(t,e,i,o){let[n,r,a]=qo(e,i);return{schema:"tuple",tuple:{items:t,rest:n},async:!1,_parse(l,s){if(!Array.isArray(l)||!n&&t.length!==l.length||n&&t.length>l.length)return Q(s,"type","tuple",r||"Invalid type",l);let h,d=[];for(let u=0;u<t.length;u++){let c=l[u],p=t[u]._parse(c,s);if(p.issues){let _={schema:"tuple",input:l,key:u,value:c};for(let f of p.issues)f.path?f.path.unshift(_):f.path=[_],h?.push(f);if(h||(h=p.issues),s!=null&&s.abortEarly)break}else d[u]=p.output}if(n)for(let u=t.length;u<l.length;u++){let c=l[u],p=n._parse(c,s);if(p.issues){let _={schema:"tuple",input:l,key:u,value:c};for(let f of p.issues)f.path?f.path.unshift(_):f.path=[_],h?.push(f);if(h||(h=p.issues),s!=null&&s.abortEarly)break}else d[u]=p.output}return h?{issues:h}:st(d,a,s,"tuple")}}}function ve(t,e){return{schema:"union",union:t,async:!1,_parse(i,o){let n,r;for(let a of t){let l=a._parse(i,o);if(l.issues)if(n)for(let s of l.issues)n.push(s);else n=l.issues;else{r=[l.output];break}}return r?{output:r[0]}:Q(o,"type","union","Invalid type",i,n)}}}function Ot(t,e,i){let[o,n]=X(e,i);return W(t.reduce((r,a)=>({...r,...a.object}),{}),o,n)}function Ro(t,e,i,o){let[n,r]=X(i,o);return W(Object.entries(t.object).reduce((a,[l,s])=>e.includes(l)?a:{...a,[l]:s},{}),n,r)}function Zo(t,e,i){let o=t._parse(e,i);return o.issues?{success:!1,error:new No(o.issues),issues:o.issues}:{success:!0,data:o.output,output:o.output}}function me(t,e){return i=>i>t?{issue:{validation:"max_value",message:e||"Invalid value",input:i}}:{output:i}}function _e(t,e){return i=>i<t?{issue:{validation:"min_value",message:e||"Invalid value",input:i}}:{output:i}}var Jo=Object.create,Ee=Object.defineProperty,Wo=Object.getOwnPropertyDescriptor,Mi=Object.getOwnPropertyNames,Ko=Object.getPrototypeOf,Yo=Object.prototype.hasOwnProperty,Go=(t,e,i)=>e in t?Ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Mt=(t,e)=>function(){return e||(0,t[Mi(t)[0]])((e={exports:{}}).exports,e),e.exports},Xo=(t,e,i,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Mi(e))!Yo.call(t,n)&&n!==i&&Ee(t,n,{get:()=>e[n],enumerable:!(o=Wo(e,n))||o.enumerable});return t},Qo=(t,e,i)=>(i=t!=null?Jo(Ko(t)):{},Xo(!t||!t.__esModule?Ee(i,"default",{value:t,enumerable:!0}):i,t)),tn=(t,e,i)=>(Go(t,e+"",i),i),en=Mt({"../../node_modules/.pnpm/@rgba-image+copy@0.1.3/node_modules/@rgba-image/copy/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.copy=void 0;var e=(i,o,n=0,r=0,a=i.width-n,l=i.height-r,s=0,h=0)=>{if(n=n|0,r=r|0,a=a|0,l=l|0,s=s|0,h=h|0,a<=0||l<=0)return;let d=new Uint32Array(i.data.buffer),u=new Uint32Array(o.data.buffer);for(let c=0;c<l;c++){let p=r+c;if(p<0||p>=i.height)continue;let _=h+c;if(!(_<0||_>=o.height))for(let f=0;f<a;f++){let v=n+f;if(v<0||v>=i.width)continue;let y=s+f;if(y<0||y>=o.width)continue;let m=p*i.width+v,g=_*o.width+y;u[g]=d[m]}}};t.copy=e}}),on=Mt({"../../node_modules/.pnpm/@rgba-image+create-image@0.1.1/node_modules/@rgba-image/create-image/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.CreateImageFactory=(e=[0,0,0,0],i=4)=>{if(i=Math.floor(i),isNaN(i)||i<1)throw TypeError("channels should be a positive non-zero number");if(!("length"in e)||e.length<i)throw TypeError(`fill should be iterable with at least ${i} members`);e=new Uint8ClampedArray(e).slice(0,i);let o=e.every(n=>n===0);return(n,r,a)=>{if(n===void 0||r===void 0)throw TypeError("Not enough arguments");if(n=Math.floor(n),r=Math.floor(r),isNaN(n)||n<1||isNaN(r)||r<1)throw TypeError("Index or size is negative or greater than the allowed amount");let l=n*r*i;if(a===void 0&&(a=new Uint8ClampedArray(l)),a instanceof Uint8ClampedArray){if(a.length!==l)throw TypeError("Index or size is negative or greater than the allowed amount");if(!o)for(let s=0;s<r;s++)for(let h=0;h<n;h++){let d=(s*n+h)*i;for(let u=0;u<i;u++)a[d+u]=e[u]}return{get width(){return n},get height(){return r},get data(){return a}}}throw TypeError("Expected data to be Uint8ClampedArray or undefined")}},t.createImage=t.CreateImageFactory()}}),nn=Mt({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/filters.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.filters=void 0;var e=14,i=(r,a)=>{if(r<=-a||r>=a||r==0)return 0;let l=r*Math.PI;return Math.sin(l)/l*Math.sin(l/a)/(l/a)},o=r=>Math.round(r*((1<<e)-1)),n=(r,a,l,s,h)=>{let d=h?2:3,u=1/l,c=Math.min(1,l),p=d/c,_=Math.floor((p+1)*2),f=new Int16Array((_+2)*a),v=0;for(let y=0;y<a;y++){let m=(y+.5)*u+s,g=Math.max(0,Math.floor(m-p)),x=Math.min(r-1,Math.ceil(m+p)),S=x-g+1,A=new Float32Array(S),k=new Int16Array(S),$=0,M=0;for(let D=g;D<=x;D++){let it=i((D+.5-m)*c,d);$+=it,A[M]=it,M++}let N=0;for(let D=0;D<A.length;D++){let it=A[D]/$;N+=it,k[D]=o(it)}k[a>>1]+=o(1-N);let I=0;for(;I<k.length&&k[I]===0;)I++;let H=k.length-1;for(;H>0&&k[H]===0;)H--;let F=g+I,R=H-I+1;f[v++]=F,f[v++]=R,f.set(k.subarray(I,H+1),v),v+=R}return f};t.filters=n}}),rn=Mt({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/convolve.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.convolve=void 0;var e=14,i=(o,n,r,a,l,s)=>{let h=0,d=0;for(let u=0;u<a;u++){let c=0;for(let p=0;p<l;p++){let _=s[c++],f=h+_*4|0,v=0,y=0,m=0,g=0;for(let x=s[c++];x>0;x--){let S=s[c++];v=v+S*o[f]|0,y=y+S*o[f+1]|0,m=m+S*o[f+2]|0,g=g+S*o[f+3]|0,f=f+4|0}n[d]=v+8192>>e,n[d+1]=y+8192>>e,n[d+2]=m+8192>>e,n[d+3]=g+8192>>e,d=d+a*4|0}d=(u+1)*4|0,h=(u+1)*r*4|0}};t.convolve=i}}),sn=Mt({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.lanczos2=t.lanczos=void 0;var e=en(),i=on(),o=nn(),n=rn(),r=(s,h,d=!1)=>{let u=h.width/s.width,c=h.height/s.height,p=o.filters(s.width,h.width,u,0,d),_=o.filters(s.height,h.height,c,0,d),f=new Uint8ClampedArray(h.width*s.height*4);n.convolve(s.data,f,s.width,s.height,h.width,p),n.convolve(f,h.data,s.height,h.width,h.height,_)},a=(s,h,d=0,u=0,c=s.width-d,p=s.height-u,_=0,f=0,v=h.width-_,y=h.height-f)=>{if(d=d|0,u=u|0,c=c|0,p=p|0,_=_|0,f=f|0,v=v|0,y=y|0,c<=0||p<=0||v<=0||y<=0)return;if(d===0&&u===0&&c===s.width&&p===s.height&&_===0&&f===0&&v===h.width&&y===h.height){r(s,h);return}let m=i.createImage(c,p),g=i.createImage(v,y);e.copy(s,m,d,u),r(m,g),e.copy(g,h,0,0,g.width,g.height,_,f)};t.lanczos=a;var l=(s,h,d=0,u=0,c=s.width-d,p=s.height-u,_=0,f=0,v=h.width-_,y=h.height-f)=>{if(d=d|0,u=u|0,c=c|0,p=p|0,_=_|0,f=f|0,v=v|0,y=y|0,c<=0||p<=0||v<=0||y<=0)return;if(d===0&&u===0&&c===s.width&&p===s.height&&_===0&&f===0&&v===h.width&&y===h.height){r(s,h,!0);return}let m=i.createImage(c,p),g=i.createImage(v,y);e.copy(s,m,d,u),r(m,g,!0),e.copy(g,h,0,0,g.width,g.height,_,f)};t.lanczos2=l}}),Pi=(t=>(t.Bounce="bounce",t.Normal="normal",t))(Pi||{}),an=Fo(Pi),Ti=W({autoplay:L(se()),defaultTheme:L(j()),direction:L(ve([ei(1),ei(-1)])),hover:L(se()),id:j(),intermission:L(Y()),loop:L(ve([se(),Y()])),playMode:L(an),speed:L(Y()),themeColor:L(j())}),ln=W({animations:At(j()),id:j()}),hn=W({activeAnimationId:L(j()),animations:At(Ti),author:L(j()),custom:L(Ho(j(),Do())),description:L(j()),generator:L(j()),keywords:L(j()),revision:L(Y()),themes:L(At(ln)),states:L(At(j())),version:L(j())}),Ui=Ro(Ti,["id"]),dt=W({state:j()}),un=dt,dn=Ot([dt,W({ms:Y()})]),cn=Ot([dt,W({count:Y()})]),pn=dt,fn=dt,vn=dt,mn=Ot([dt,W({threshold:L(At(Y([_e(0),me(1)])))})]),_n=W({onAfter:L(dn),onClick:L(un),onComplete:L(vn),onEnter:L(cn),onMouseEnter:L(pn),onMouseLeave:L(fn),onShow:L(mn)}),yn=Ot([Ui,W({playOnScroll:L(ii([Y([_e(0),me(1)]),Y([_e(0),me(1)])])),segments:L(ve([ii([Y(),Y()]),j()]))})]);Ot([_n,W({animationId:L(j()),playbackSettings:yn})]);var gn={jpeg:"image/jpeg",png:"image/png",gif:"image/gif",bmp:"image/bmp",svg:"image/svg+xml",webp:"image/webp",mpeg:"audio/mpeg",mp3:"audio/mp3"},oi={jpeg:[255,216,255],png:[137,80,78,71,13,10,26,10],gif:[71,73,70],bmp:[66,77],webp:[82,73,70,70,87,69,66,80],svg:[60,63,120],mp3:[73,68,51,3,0,0,0,0],mpeg:[73,68,51,3,0,0,0,0]},bn=t=>{let e=null,i=[];if(!t)return null;let o=t.substring(t.indexOf(",")+1);typeof window>"u"?e=Buffer.from(o,"base64").toString("binary"):e=atob(o);let n=new Uint8Array(e.length);for(let r=0;r<e.length;r+=1)n[r]=e.charCodeAt(r);i=Array.from(n.subarray(0,8));for(let r in oi){let a=oi[r];if(a&&i.every((l,s)=>l===a[s]))return gn[r]}return null},Ie=class extends Error{constructor(t,e){super(t),tn(this,"code"),this.name="[dotlottie-js]",this.code=e}};function Ni(t){let e;if(typeof window>"u")e=Buffer.from(t).toString("base64");else{let i=Array.prototype.map.call(t,o=>String.fromCharCode(o)).join("");e=window.btoa(i)}return`data:${bn(e)};base64,${e}`}function ni(t){return"w"in t&&"h"in t&&!("xt"in t)&&"p"in t}function ye(t){return!("h"in t)&&!("w"in t)&&"p"in t&&"e"in t&&"u"in t&&"id"in t}async function Pt(t,e=()=>!0){if(!(t instanceof Uint8Array))throw new Ie("DotLottie not found","INVALID_DOTLOTTIE");return await new Promise((i,o)=>{To(t,{filter:e},(n,r)=>{n&&o(n),i(r)})})}async function Oe(t,e,i){if(!(t instanceof Uint8Array))throw new Ie("DotLottie not found","INVALID_DOTLOTTIE");return(await Pt(t,o=>o.name===e&&!0))[e]}async function ge(t){let e="manifest.json",i=(await Pt(t,o=>o.name===e))[e];if(!(typeof i>"u"))return JSON.parse(Ct(i,!1))}async function wn(t){if(!(t instanceof Uint8Array))return{success:!1,error:"DotLottie not found"};let e=await ge(t);if(typeof e>"u")return{success:!1,error:"Invalid .lottie file, manifest.json is missing"};let i=Zo(hn,e);return i.success?{success:!0}:{success:!1,error:`Invalid .lottie file, manifest.json structure is invalid, ${JSON.stringify(Uo(i.error).nested,null,2)}`}}async function ri(t){let e=new Uint8Array(t),i=await wn(e);if(i.error)throw new Ie(i.error,"INVALID_DOTLOTTIE");return e}async function Cn(t,e){let i=await Pt(t,n=>{let r=n.name.replace("audio/","");return n.name.startsWith("audio/")&&(!e||e({...n,name:r}))}),o={};for(let n in i){let r=i[n];if(r instanceof Uint8Array){let a=n.replace("audio/","");o[a]=Ni(r)}}return o}async function Ln(t,e){var i;let o=new Map;for(let[r,a]of Object.entries(e))for(let l of a.assets||[])if(ye(l)){let s=l.p;o.has(s)||o.set(s,new Set),(i=o.get(s))==null||i.add(r)}let n=await Cn(t,r=>o.has(r.name));for(let[r,a]of o){let l=n[r];if(l)for(let s of a){let h=e[s];for(let d of h?.assets||[])ye(d)&&d.p===r&&(d.p=l,d.u="",d.e=1)}}}async function Sn(t,e){let i=await Pt(t,n=>{let r=n.name.replace("images/","");return n.name.startsWith("images/")&&(!e||e({...n,name:r}))}),o={};for(let n in i){let r=i[n];if(r instanceof Uint8Array){let a=n.replace("images/","");o[a]=Ni(r)}}return o}async function $n(t,e){var i;let o=new Map;for(let[r,a]of Object.entries(e))for(let l of a.assets||[])if(ni(l)){let s=l.p;o.has(s)||o.set(s,new Set),(i=o.get(s))==null||i.add(r)}let n=await Sn(t,r=>o.has(r.name));for(let[r,a]of o){let l=n[r];if(l)for(let s of a){let h=e[s];for(let d of h?.assets||[])ni(d)&&d.p===r&&(d.p=l,d.u="",d.e=1)}}}async function An(t,e,{inlineAssets:i}={},o){let n=`animations/${e}.json`,r=await Oe(t,n);if(typeof r>"u")return;let a=JSON.parse(Ct(r,!1));if(!i)return a;let l={[e]:a};return await $n(t,l),await Ln(t,l),a}async function kn(t,e,i){let o=`themes/${e}.json`,n=await Oe(t,o);if(!(typeof n>"u"))return JSON.parse(Ct(n,!1))}async function xn(t,e){let i={},o=await Pt(t,n=>(n.name.replace("states/","").replace(".json",""),n.name.startsWith("states/")&&!0));for(let n in o){let r=o[n];if(r instanceof Uint8Array){let a=n.replace("states/","").replace(".json","");i[a]=Ct(r,!1)}}return i}async function En(t,e,i){let o=`states/${e}.json`,n=await Oe(t,o);return typeof n>"u"?void 0:JSON.parse(Ct(n,!1))}Qo(sn());function w(t,e="dotLottie-common"){return new Error(`[${e}]: ${t}`)}function ft(t,e="dotLottie-common",...i){console.error(`[${e}]:`,t,...i)}function E(t,e="dotLottie-common",...i){console.warn(`[${e}]:`,t,...i)}function In(t=""){let e=t.trim(),i=e.lastIndexOf("/"),o=e.substring(i+1),n=o.indexOf(".");return n!==-1?o.substring(0,n):o}function Ht(t){return["v","ip","op","layers","fr","w","h"].every(e=>Object.prototype.hasOwnProperty.call(t,e))}function On(t){let e=t.assets;return e?e.some(i=>ye(i)):!1}function Mn(t){try{let e=JSON.parse(t);return Ht(e)}catch{return!1}}function rr(t,e){let i=Object.keys(t).find(o=>t[o]===e);if(i===void 0)throw new Error("Value not found in the object.");return i}function ae(t){return JSON.parse(JSON.stringify(t))}var Pn=class{_dotLottie;_animationsMap=new Map;_themeMap=new Map;_stateMachinesMap=new Map;_manifest;get dotLottie(){return this._dotLottie}get animationsMap(){return this._animationsMap}get themeMap(){return this._themeMap}get stateMachinesMap(){return this._stateMachinesMap}get manifest(){return this._manifest}async loadFromUrl(t){let e=await fetch(t,{method:"GET",mode:"cors"});if(!e.ok)throw new Error(`Failed to load dotLottie from ${t} with status ${e.status}`);let i=e.headers.get("content-type");if(i!=null&&i.includes("application/json")){let o=await e.json();if(!Ht(o))throw new Error(`Invalid lottie JSON at ${t}`);let n=In(t);this._animationsMap.set(n,o);let r={activeAnimationId:n,animations:[{id:n}]};this._manifest=r}else{this._dotLottie=await ri(await e.arrayBuffer());let o=await ge(this._dotLottie);if(!o)throw new Error("Manifest not found");this._manifest=o}}loadFromLottieJSON(t){if(!Ht(t))throw new Error("Invalid lottie JSON");let e="my-animation";this._animationsMap.set(e,t);let i={activeAnimationId:e,animations:[{id:e}]};this._manifest=i}async loadFromArrayBuffer(t){this._dotLottie=await ri(t);let e=await ge(this._dotLottie);if(!e)throw new Error("Manifest not found");this._manifest=e}async getAnimation(t){if(this._animationsMap.get(t))return this._animationsMap.get(t);if(!this._dotLottie)return;let e=await An(this._dotLottie,t,{inlineAssets:!0});return e&&this._animationsMap.set(t,e),e}async getTheme(t){if(this._themeMap.get(t))return this._themeMap.get(t);if(!this._dotLottie)return;let e=await kn(this._dotLottie,t);return e&&this._themeMap.set(t,e),e}async getStateMachines(){if(!this._dotLottie)return;let t=await xn(this._dotLottie);for(let e in t)if(e){let i=t[e];if(i){let o=JSON.parse(i);if(o){let n=o.descriptor.id;this._stateMachinesMap.get(n)||this._stateMachinesMap.set(n,o)}}}return Array.from(this._stateMachinesMap.values())}async getStateMachine(t){if(this._stateMachinesMap.get(t))return this._stateMachinesMap.get(t);if(!this._dotLottie)return;let e=await En(this._dotLottie,t);return e&&this._stateMachinesMap.set(e.descriptor.id,e),e}};function Jt(){throw new Error("Cycle detected")}function Me(){if(yt>1)yt--;else{for(var t,e=!1;kt!==void 0;){var i=kt;for(kt=void 0,be++;i!==void 0;){var o=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&ji(i))try{i.c()}catch(n){e||(t=n,e=!0)}i=o}}if(be=0,yt--,e)throw t}}var O=void 0,kt=void 0,yt=0,be=0,qt=0;function zi(t){if(O!==void 0){var e=t.n;if(e===void 0||e.t!==O)return e={i:0,S:t,p:O.s,n:void 0,t:O,e:void 0,x:void 0,r:e},O.s!==void 0&&(O.s.n=e),O.s=e,t.n=e,32&O.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=O.s,e.n=void 0,O.s.n=e,O.s=e),e}}function q(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}q.prototype.h=function(){return!0};q.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};q.prototype.U=function(t){if(this.t!==void 0){var e=t.e,i=t.x;e!==void 0&&(e.x=i,t.e=void 0),i!==void 0&&(i.e=e,t.x=void 0),t===this.t&&(this.t=i)}};q.prototype.subscribe=function(t){var e=this;return Nn(function(){var i=e.value,o=32&this.f;this.f&=-33;try{t(i)}finally{this.f|=o}})};q.prototype.valueOf=function(){return this.value};q.prototype.toString=function(){return this.value+""};q.prototype.toJSON=function(){return this.value};q.prototype.peek=function(){return this.v};Object.defineProperty(q.prototype,"value",{get:function(){var t=zi(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(O instanceof ct&&(function(){throw new Error("Computed cannot have side-effects")})(),t!==this.v){be>100&&Jt(),this.v=t,this.i++,qt++,yt++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Me()}}}});function Tn(t){return new q(t)}function ji(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function Di(t){for(var e=t.s;e!==void 0;e=e.n){var i=e.S.n;if(i!==void 0&&(e.r=i),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function Fi(t){for(var e=t.s,i=void 0;e!==void 0;){var o=e.p;e.i===-1?(e.S.U(e),o!==void 0&&(o.n=e.n),e.n!==void 0&&(e.n.p=o)):i=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=o}t.s=i}function ct(t){q.call(this,void 0),this.x=t,this.s=void 0,this.g=qt-1,this.f=4}(ct.prototype=new q).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===qt))return!0;if(this.g=qt,this.f|=1,this.i>0&&!ji(this))return this.f&=-2,!0;var t=O;try{Di(this),O=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return O=t,Fi(this),this.f&=-2,!0};ct.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}q.prototype.S.call(this,t)};ct.prototype.U=function(t){if(this.t!==void 0&&(q.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};ct.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};ct.prototype.peek=function(){if(this.h()||Jt(),16&this.f)throw this.v;return this.v};Object.defineProperty(ct.prototype,"value",{get:function(){1&this.f&&Jt();var t=zi(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function Vi(t){var e=t.u;if(t.u=void 0,typeof e=="function"){yt++;var i=O;O=void 0;try{e()}catch(o){throw t.f&=-2,t.f|=8,Pe(t),o}finally{O=i,Me()}}}function Pe(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,Vi(t)}function Un(t){if(O!==this)throw new Error("Out-of-order effect");Fi(this),O=t,this.f&=-2,8&this.f&&Pe(this),Me()}function Tt(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}Tt.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}};Tt.prototype.S=function(){1&this.f&&Jt(),this.f|=1,this.f&=-9,Vi(this),Di(this),yt++;var t=O;return O=this,Un.bind(this,t)};Tt.prototype.N=function(){2&this.f||(this.f|=2,this.o=kt,kt=this)};Tt.prototype.d=function(){this.f|=8,1&this.f||Pe(this)};function Nn(t){var e=new Tt(t);try{e.c()}catch(i){throw e.d(),i}return e.d.bind(e)}var zn=class{_state;_prevState;constructor(t){this._prevState=t,this._state=Tn(t)}setState(t){this._prevState=this._state.value,this._state.value=t}subscribe(t){return this._state.subscribe(e=>t(e,this._prevState))}};async function jn(t,e){let[{DotLottieStateMachineManager:i}]=await Promise.all([et(()=>import("./BgPdhWi5.js"),__vite__mapDeps([0,1,2]),import.meta.url)]);if(!t.length)throw w("No state machines available inside this .lottie!");return new i(t,e)}var Dn={dependencies:{"lottie-web":"^5.12.2"}},nt=(t=>(t.Complete="complete",t.DataFail="data_fail",t.DataReady="data_ready",t.Error="error",t.Frame="frame",t.Freeze="freeze",t.LoopComplete="loopComplete",t.Pause="pause",t.Play="play",t.Ready="ready",t.Stop="stop",t.VisibilityChange="visibilityChange",t))(nt||{}),mt=(t=>(t.Completed="completed",t.Error="error",t.Fetching="fetching",t.Frozen="frozen",t.Initial="initial",t.Loading="loading",t.Paused="paused",t.Playing="playing",t.Ready="ready",t.Stopped="stopped",t))(mt||{}),Bi=(t=>(t.Bounce="bounce",t.Normal="normal",t))(Bi||{}),Z={autoplay:!1,direction:1,hover:!1,intermission:0,loop:!1,playMode:"normal",speed:1,defaultTheme:""},Hi={activeStateId:"",autoplay:!1,currentState:"initial",frame:0,seeker:0,direction:1,hover:!1,loop:!1,playMode:"normal",speed:1,background:"transparent",intermission:0,currentAnimationId:void 0,visibilityPercentage:0},si=class{_lottie;_src;_animationConfig;_prevUserPlaybackOptions={};_userPlaybackOptions;_hover=!1;_loop=!1;_counter=0;_intermission=0;_counterInterval=null;_container=null;_name;_mode="normal";_background="transparent";_animation;_defaultTheme;_activeAnimationId;_currentAnimationId;_testId;_listeners=new Map;_currentState="initial";_stateBeforeFreeze="initial";state=new zn(Hi);_light=!1;_worker=!1;_dotLottieLoader=new Pn;_activeStateId;_inInteractiveMode=!1;_scrollTicking=!1;_scrollCallback=void 0;_onShowIntersectionObserver=void 0;_visibilityPercentage=0;_audios=[];_stateMachineManager;constructor(t,e,i){typeof t=="string"?this._src=t:this._src=ae(t),i!=null&&i.testId&&(this._testId=i.testId),this._defaultTheme=i?.defaultTheme||"",this._userPlaybackOptions=this._validatePlaybackOptions(i||{}),typeof i?.activeAnimationId=="string"&&(this._activeAnimationId=i.activeAnimationId),this._container=e||null,typeof i?.background=="string"&&this.setBackground(i.background),typeof i?.activeStateId<"u"&&(this._activeStateId=i.activeStateId);let{rendererSettings:o,...n}=i||{};this._animationConfig={loop:!1,autoplay:!1,renderer:"svg",rendererSettings:{clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0,filterSize:{width:"200%",height:"200%",x:"-50%",y:"-50%"},...o},...n},i!=null&&i.light&&(this._light=i.light),i!=null&&i.worker&&(this._worker=i.worker),this._listenToHover(),this._listenToVisibilityChange()}_listenToHover(){var t,e,i,o;let n=()=>{this._hover&&this.currentState!=="playing"&&this.play()},r=()=>{this._hover&&this.currentState==="playing"&&this.stop()};(t=this._container)==null||t.removeEventListener("mouseenter",n),(e=this._container)==null||e.removeEventListener("mouseleave",r),(i=this._container)==null||i.addEventListener("mouseleave",r),(o=this._container)==null||o.addEventListener("mouseenter",n)}_onVisibilityChange(){!this._lottie||typeof document>"u"||(document.hidden&&this.currentState==="playing"?this.freeze():this.currentState==="frozen"&&this.unfreeze())}_listenToVisibilityChange(){typeof document<"u"&&typeof document.hidden<"u"&&document.addEventListener("visibilitychange",()=>this._onVisibilityChange())}_getOption(t){var e;if(typeof this._userPlaybackOptions[t]<"u")return this._userPlaybackOptions[t];let i=(e=this._dotLottieLoader.manifest)==null?void 0:e.animations.find(o=>o.id===this._currentAnimationId);return i&&typeof i[t]<"u"?i[t]:Z[t]}_getPlaybackOptions(){let t={};for(let e in Z)typeof Z[e]<"u"&&(t[e]=this._getOption(e));return t}_setPlayerState(t){var e,i,o;let n=t(this._getPlaybackOptions());try{Ui._parse(n)}catch{E(`Invalid PlaybackOptions, ${JSON.stringify(n,null,2)}`);return}typeof n.defaultTheme<"u"&&(this._defaultTheme=n.defaultTheme),typeof n.playMode<"u"&&(this._mode=n.playMode),typeof n.intermission<"u"&&(this._intermission=n.intermission),typeof n.hover<"u"&&(this._hover=n.hover),typeof n.loop<"u"&&(this.clearCountTimer(),this._loop=n.loop,this._counter=0,(e=this._lottie)==null||e.setLoop(typeof n.loop=="number"?!0:n.loop)),typeof n.speed<"u"&&((i=this._lottie)==null||i.setSpeed(n.speed)),typeof n.autoplay<"u"&&this._lottie&&(this._lottie.autoplay=n.autoplay),typeof n.direction<"u"&&((o=this._lottie)==null||o.setDirection(n.direction))}_getOptionsFromAnimation(t){let{id:e,...i}=t;return{...Z,...i}}_updateTestData(){!this._testId||!this._lottie||(window.dotLottiePlayer||(window.dotLottiePlayer={[this._testId]:{}}),window.dotLottiePlayer[this._testId]={direction:this._lottie.playDirection,currentState:this._currentState,loop:this.loop,mode:this._mode,speed:this._lottie.playSpeed})}setContainer(t){t!==this._container&&(this._container=t,this.setBackground(this._background),this._listenToHover())}get currentState(){return this._currentState}clearCountTimer(){this._counterInterval&&clearInterval(this._counterInterval)}setCurrentState(t){this._currentState=t,this._notify(),this._updateTestData()}static isPathJSON(t){var e;return((e=t.split(".").pop())==null?void 0:e.toLowerCase())==="json"}get src(){return this._src}updateSrc(t){this._src!==t&&(typeof t=="string"?this._src=t:this._src=ae(t),this._activeAnimationId=void 0,this._currentAnimationId=void 0,this.load())}get intermission(){return this._intermission}get hover(){return this._hover}setHover(t){typeof t=="boolean"&&(this._hover=t,this._userPlaybackOptions.hover=t,this._notify())}setIntermission(t){this._intermission=t,this._userPlaybackOptions.intermission=t,this._notify()}get mode(){return this._mode}get animations(){return this._dotLottieLoader.animationsMap}get themes(){return this._dotLottieLoader.themeMap}setMode(t){typeof t=="string"&&(this._mode=t,this._userPlaybackOptions.playMode=t,this._setPlayerState(()=>({playMode:t})),this._notify(),this._updateTestData())}get container(){if(this._container)return this._container}goToAndPlay(t,e,i){if(!this._lottie||["loading"].includes(this._currentState)){E("goToAndPlay() Can't use whilst loading.");return}this._lottie.goToAndPlay(t,e,i),this.setCurrentState("playing")}goToAndStop(t,e,i){if(!this._lottie||["loading"].includes(this._currentState)){E("goToAndStop() Can't use whilst loading.");return}this._lottie.goToAndStop(t,e,i),this.setCurrentState("stopped")}seek(t){if(!this._lottie||["loading"].includes(this._currentState)){E("seek() Can't use whilst loading.");return}let e=t;typeof e=="number"&&(e=Math.round(e));let i=/^(\d+)(%?)$/u.exec(e.toString());if(!i)return;let o=i[2]==="%"?this.totalFrames*Number(i[1])/100:i[1];o!==void 0&&(this._lottie.goToAndPlay(o,!0),this.currentState==="playing"?this.play():this.currentState==="frozen"?this.freeze():this.pause())}_areNumbersInRange(t,e){return t>=0&&t<=1&&e>=0&&e<=1}_updatePosition(t,e,i){let[o,n]=t??[0,this.totalFrames-1],[r,a]=e??[0,1];if(!this._areNumbersInRange(r,a)){ft("threshold values must be between 0 and 1");return}if(this.container){let{height:l,top:s}=this.container.getBoundingClientRect(),h=window.innerHeight-s,d=window.innerHeight+l,u=h/d,c=o+Math.round((u-r)/(a-r)*(n-o));i&&i(u),this.goToAndStop(c,!0),(c>=n||u>=a)&&this._handleAnimationComplete()}this._scrollTicking=!1}_requestTick(t,e,i){this._scrollTicking||(requestAnimationFrame(()=>this._updatePosition(t,e,i)),this._scrollTicking=!0)}playOnScroll(t){this.stop(),this._scrollCallback&&this.stopPlayOnScroll(),this._scrollCallback=()=>this._requestTick(t?.segments,t?.threshold,t?.positionCallback),window.addEventListener("scroll",this._scrollCallback)}stopPlayOnScroll(){this._scrollCallback&&(window.removeEventListener("scroll",this._scrollCallback),this._scrollCallback=void 0)}stopPlayOnShow(){this._onShowIntersectionObserver&&(this._onShowIntersectionObserver.disconnect(),this._onShowIntersectionObserver=void 0)}addIntersectionObserver(t){if(!this.container)throw w("Can't play on show, player container element not available.");let e={root:null,rootMargin:"0px",threshold:t!=null&&t.threshold?t.threshold:[0,1]},i=o=>{o.forEach(n=>{var r,a;this._visibilityPercentage=n.intersectionRatio*100,n.isIntersecting?(t!=null&&t.callbackOnIntersect&&t.callbackOnIntersect(this._visibilityPercentage),(r=this._container)==null||r.dispatchEvent(new Event("visibilityChange"))):t!=null&&t.callbackOnIntersect&&(t.callbackOnIntersect(0),(a=this._container)==null||a.dispatchEvent(new Event("visibilityChange")))})};this._onShowIntersectionObserver=new IntersectionObserver(i,e),this._onShowIntersectionObserver.observe(this.container)}playOnShow(t){var e;if(this.stop(),!this.container)throw w("Can't play on show, player container element not available.");this._onShowIntersectionObserver&&this.stopPlayOnShow(),this.addIntersectionObserver({threshold:(e=t?.threshold)!=null?e:[],callbackOnIntersect:i=>{i===0?this.pause():this.play()}})}_validatePlaybackOptions(t){if(!t)return{};let e={};for(let[i,o]of Object.entries(t))switch(i){case"autoplay":typeof o=="boolean"&&(e.autoplay=o);break;case"direction":typeof o=="number"&&[1,-1].includes(o)&&(e.direction=o);break;case"loop":(typeof o=="boolean"||typeof o=="number")&&(e.loop=o);break;case"playMode":typeof o=="string"&&["normal","bounce"].includes(o)&&(e.playMode=o);break;case"speed":typeof o=="number"&&(e.speed=o);break;case"themeColor":typeof o=="string"&&(e.themeColor=o);break;case"hover":typeof o=="boolean"&&(e.hover=o);break;case"intermission":typeof o=="number"&&(e.intermission=o);break;case"defaultTheme":typeof o=="string"&&(e.defaultTheme=o);break}return this._requireValidPlaybackOptions(e),e}_requireAnimationsInTheManifest(){var t;if(!((t=this._dotLottieLoader.manifest)!=null&&t.animations.length))throw w("No animations found in manifest.")}_requireAnimationsToBeLoaded(){if(this._dotLottieLoader.animationsMap.size===0)throw w("No animations have been loaded.")}async play(t,e){var i,o;if(["initial","loading"].includes(this._currentState)){E("Player unable to play whilst loading.");return}if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),this._lottie&&!t){this._lottie.playDirection===-1&&this._lottie.currentFrame===0?this._lottie.goToAndPlay(this._lottie.totalFrames,!0):this._lottie.play(),this.setCurrentState("playing");return}if(typeof t=="number"){let n=(i=this._dotLottieLoader.manifest)==null?void 0:i.animations[t];if(!n)throw w("animation not found.");typeof e=="function"?await this.render({id:n.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(n))}):await this.render({id:n.id})}if(typeof t=="string"){let n=(o=this._dotLottieLoader.manifest)==null?void 0:o.animations.find(r=>r.id===t);if(!n)throw w("animation not found.");typeof e=="function"?await this.render({id:n.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(n))}):await this.render({id:n.id})}}playSegments(t,e){if(!this._lottie||["loading"].includes(this._currentState)){E("playSegments() Can't use whilst loading.");return}this._lottie.playSegments(t,e),this.setCurrentState("playing")}resetSegments(t){if(!this._lottie||["loading"].includes(this._currentState)){E("resetSegments() Can't use whilst loading.");return}this._lottie.resetSegments(t)}togglePlay(){this.currentState==="playing"?this.pause():this.play()}_getAnimationByIdOrIndex(t){var e,i;if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),typeof t=="number"){let o=(e=this._dotLottieLoader.manifest)==null?void 0:e.animations[t];if(!o)throw w("animation not found.");return o}if(typeof t=="string"){let o=(i=this._dotLottieLoader.manifest)==null?void 0:i.animations.find(n=>n.id===t);if(!o)throw w("animation not found.");return o}throw w("first param must be a number or string")}get activeAnimationId(){return this._getActiveAnimationId()}get currentAnimationId(){return this._currentAnimationId}get activeStateId(){return this._activeStateId}async _startInteractivity(t){if(!this._inInteractiveMode){ft("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.");return}if(this._dotLottieLoader.stateMachinesMap.size===0&&await this._dotLottieLoader.getStateMachines(),this._dotLottieLoader.stateMachinesMap.size===0)throw w("No interactivity states are available.");if(t==="undefined")throw w("stateId is not specified.");this._stateMachineManager||(this._stateMachineManager=await jn(Array.from(this._dotLottieLoader.stateMachinesMap.values()),this)),this._stateMachineManager.start(t)}enterInteractiveMode(t){var e;if(t)this._inInteractiveMode||(this._prevUserPlaybackOptions={...this._userPlaybackOptions}),this._inInteractiveMode&&((e=this._stateMachineManager)==null||e.stop()),this._activeStateId=t,this._inInteractiveMode=!0,this._startInteractivity(t);else throw w("stateId must be a non-empty string.")}exitInteractiveMode(){var t;this._inInteractiveMode&&(this._inInteractiveMode=!1,this._activeStateId="",(t=this._stateMachineManager)==null||t.stop(),this._userPlaybackOptions={},this._userPlaybackOptions={...this._prevUserPlaybackOptions},this._prevUserPlaybackOptions={},this.reset())}reset(){var t;let e=this._getActiveAnimationId(),i=(t=this._dotLottieLoader.manifest)==null?void 0:t.animations.find(o=>o.id===e);if(this._inInteractiveMode&&this.exitInteractiveMode(),!i)throw w("animation not found.");this.play(e)}previous(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw w("manifest not found.");if(this._inInteractiveMode){E("previous() is not supported in interactive mode.");return}let e=this._dotLottieLoader.manifest.animations.findIndex(o=>o.id===this._currentAnimationId);if(e===-1)throw w("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e-1+this._dotLottieLoader.manifest.animations.length)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw w("animation not found.");typeof t=="function"?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}next(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw w("manifest not found.");if(this._inInteractiveMode){E("next() is not supported in interactive mode.");return}let e=this._dotLottieLoader.manifest.animations.findIndex(o=>o.id===this._currentAnimationId);if(e===-1)throw w("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e+1)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw w("animation not found.");typeof t=="function"?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}getManifest(){return this._dotLottieLoader.manifest}resize(){if(!this._lottie||["loading"].includes(this._currentState)){E("resize() Can't use whilst loading.");return}this._lottie.resize()}stop(){if(!this._lottie||["loading"].includes(this._currentState)){E("stop() Can't use whilst loading.");return}this.clearCountTimer(),this._counter=0,this._setPlayerState(()=>({direction:this._getOption("direction")})),this._lottie.stop(),this.setCurrentState("stopped")}pause(){if(!this._lottie||["loading"].includes(this._currentState)){E("pause() Can't use whilst loading.");return}this.clearCountTimer(),this._lottie.pause(),this.setCurrentState("paused")}freeze(){if(!this._lottie||["loading"].includes(this._currentState)){E("freeze() Can't use whilst loading.");return}this.currentState!=="frozen"&&(this._stateBeforeFreeze=this.currentState),this._lottie.pause(),this.setCurrentState("frozen")}unfreeze(){if(!this._lottie||["loading"].includes(this._currentState)){E("unfreeze() Can't use whilst loading.");return}this._stateBeforeFreeze==="playing"?this.play():this.pause()}destroy(){var t,e;(t=this._container)!=null&&t.__lottie&&(this._container.__lottie.destroy(),this._container.__lottie=null),this._audios.length&&(this._audios.forEach(i=>{i.unload()}),this._audios=[]),this.clearCountTimer(),typeof document<"u"&&document.removeEventListener("visibilitychange",()=>this._onVisibilityChange()),this._counter=0,(e=this._lottie)==null||e.destroy(),this._lottie=void 0}getAnimationInstance(){return this._lottie}static getLottieWebVersion(){return`${Dn.dependencies["lottie-web"]}`}addEventListener(t,e){var i,o,n;this._listeners.has(t)||this._listeners.set(t,new Set),(i=this._listeners.get(t))==null||i.add(e);try{t==="complete"?(o=this._container)==null||o.addEventListener(t,e):(n=this._lottie)==null||n.addEventListener(t,e)}catch(r){ft(`addEventListener ${r}`)}}getState(){var t,e,i,o,n,r,a;return{autoplay:(e=(t=this._lottie)==null?void 0:t.autoplay)!=null?e:!1,currentState:this._currentState,frame:this._frame,visibilityPercentage:this._visibilityPercentage,seeker:this._seeker,direction:(o=(i=this._lottie)==null?void 0:i.playDirection)!=null?o:1,hover:this._hover,loop:this._loop||!1,playMode:this._mode,speed:(r=(n=this._lottie)==null?void 0:n.playSpeed)!=null?r:1,background:this._background,intermission:this._intermission,defaultTheme:this._defaultTheme,currentAnimationId:this._currentAnimationId,activeStateId:(a=this._activeStateId)!=null?a:""}}_notify(){this.state.setState(this.getState())}get totalFrames(){var t;return((t=this._lottie)==null?void 0:t.totalFrames)||0}get direction(){return this._lottie?this._lottie.playDirection:1}setDirection(t){this._requireValidDirection(t),this._setPlayerState(()=>({direction:t})),this._userPlaybackOptions.direction=t}get speed(){var t;return((t=this._lottie)==null?void 0:t.playSpeed)||1}setSpeed(t){this._requireValidSpeed(t),this._setPlayerState(()=>({speed:t})),this._userPlaybackOptions.speed=t}get autoplay(){var t,e;return(e=(t=this._lottie)==null?void 0:t.autoplay)!=null?e:!1}setAutoplay(t){if(this._requireValidAutoplay(t),!this._lottie||["loading"].includes(this._currentState)){E("setAutoplay() Can't use whilst loading.");return}this._setPlayerState(()=>({autoplay:t})),this._userPlaybackOptions.autoplay=t}toggleAutoplay(){if(!this._lottie||["loading"].includes(this._currentState)){E("toggleAutoplay() Can't use whilst loading.");return}this.setAutoplay(!this._lottie.autoplay)}get defaultTheme(){return this._defaultTheme}setDefaultTheme(t){this._setPlayerState(()=>({defaultTheme:t})),this._userPlaybackOptions.defaultTheme=t,this._animation&&this.render()}get loop(){return this._loop}setLoop(t){this._requireValidLoop(t),this._setPlayerState(()=>({loop:t})),this._userPlaybackOptions.loop=t}toggleLoop(){if(!this._lottie||["loading"].includes(this._currentState)){E("toggleLoop() Can't use whilst loading.");return}this.setLoop(!this._loop)}get background(){return this._background}setBackground(t){this._requireValidBackground(t),this._background=t,this._container&&(this._container.style.backgroundColor=t)}get _frame(){return this._lottie?this.currentState==="completed"?this.direction===-1?0:this._lottie.totalFrames:this._lottie.currentFrame:0}get _seeker(){return this._lottie?this._frame/this._lottie.totalFrames*100:0}async revertToManifestValues(t){var e;let i;!Array.isArray(t)||t.length===0?i=["autoplay","defaultTheme","direction","hover","intermission","loop","playMode","speed","activeAnimationId"]:i=t;let o=!1;if(i.includes("activeAnimationId")){let n=(e=this._dotLottieLoader.manifest)==null?void 0:e.activeAnimationId,r=this._getAnimationByIdOrIndex(n||0);this._activeAnimationId=n,await this._setCurrentAnimation(r.id),o=!0}i.forEach(n=>{switch(n){case"autoplay":delete this._userPlaybackOptions.autoplay,this.setAutoplay(this._getOption("autoplay"));break;case"defaultTheme":delete this._userPlaybackOptions.defaultTheme,this.setDefaultTheme(this._getOption("defaultTheme"));break;case"direction":delete this._userPlaybackOptions.direction,this.setDirection(this._getOption("direction"));break;case"hover":delete this._userPlaybackOptions.hover,this.setHover(this._getOption("hover"));break;case"intermission":delete this._userPlaybackOptions.intermission,this.setIntermission(this._getOption("intermission"));break;case"loop":delete this._userPlaybackOptions.loop,this.setLoop(this._getOption("loop"));break;case"playMode":delete this._userPlaybackOptions.playMode,this.setMode(this._getOption("playMode")),this.setDirection(this._getOption("direction"));break;case"speed":delete this._userPlaybackOptions.speed,this.setSpeed(this._getOption("speed"));break}}),o&&this.render()}removeEventListener(t,e){var i,o,n;try{t==="complete"?(i=this._container)==null||i.removeEventListener(t,e):(o=this._lottie)==null||o.removeEventListener(t,e),(n=this._listeners.get(t))==null||n.delete(e)}catch(r){ft("removeEventListener",r)}}_handleAnimationComplete(){var t;typeof this._loop=="number"&&this.stop();let e=this.direction===-1?0:this.totalFrames-1;this.goToAndStop(e,!0),this._counter=0,this.clearCountTimer(),this.setCurrentState("completed"),(t=this._container)==null||t.dispatchEvent(new Event("complete"))}addEventListeners(){var t;if(!this._lottie||["loading"].includes(this._currentState)){E("addEventListeners() Can't use whilst loading.");return}this._lottie.addEventListener("enterFrame",()=>{var e;if(!this._lottie){E("enterFrame event : Lottie is undefined.");return}Math.floor(this._lottie.currentFrame)===0&&this.direction===-1&&((e=this._container)==null||e.dispatchEvent(new Event("complete")),this.loop||this.setCurrentState("completed")),this._notify()}),this._lottie.addEventListener("loopComplete",()=>{var e;if(!this._lottie){E("loopComplete event : Lottie is undefined.");return}(e=this._container)==null||e.dispatchEvent(new Event("loopComplete")),this.intermission>0&&this.pause();let i=this._lottie.playDirection;if(typeof this._loop=="number"&&this._loop>0&&(this._counter+=this._mode==="bounce"?.5:1,this._counter>=this._loop)){this._handleAnimationComplete();return}this._mode==="bounce"&&typeof i=="number"&&(i=Number(i)*-1);let o=i===-1?this._lottie.totalFrames-1:0;this.intermission?(this.goToAndPlay(o,!0),this.pause(),this._counterInterval=window.setTimeout(()=>{this._lottie&&(this._setPlayerState(()=>({direction:i})),this.goToAndPlay(o,!0))},this._intermission)):(this._setPlayerState(()=>({direction:i})),this.goToAndPlay(i===-1?this.totalFrames-1:0,!0))}),this._lottie.addEventListener("complete",()=>{if(this._lottie&&this._loop===!1&&this._mode==="bounce"){if(this._counter+=.5,this._counter>=1){this._handleAnimationComplete();return}this._counterInterval=window.setTimeout(()=>{if(!this._lottie)return;let e=this._lottie.playDirection;this._mode==="bounce"&&typeof e=="number"&&(e=Number(e)*-1);let i=e===-1?this.totalFrames-1:0;this._setPlayerState(()=>({direction:e})),this.goToAndPlay(i,!0)},this._intermission)}else this._handleAnimationComplete()});for(let[e,i]of this._listeners)if(e==="complete")for(let o of i)(t=this._container)==null||t.addEventListener(e,o);else for(let o of i)this._lottie.addEventListener(e,o)}async _setCurrentAnimation(t){this._currentState="loading";let e=await this._dotLottieLoader.getAnimation(t);this._currentAnimationId=t,this._animation=e,this._currentState="ready"}async _getAudioFactory(){if(this._animation&&On(this._animation)){let{DotLottieAudio:t}=await et(()=>import("./CxIBUx0g.js"),__vite__mapDeps([3,4]),import.meta.url);return e=>{let i=new t({src:[e]});return this._audios.push(i),i}}return null}async render(t){var e,i,o,n,r,a,l,s,h,d,u,c,p,_,f,v,y,m;if(t!=null&&t.id)await this._setCurrentAnimation(t.id);else if(!this._animation)throw w("no animation selected");let g=(e=Z.loop)!=null?e:!1,x=(i=Z.autoplay)!=null?i:!1,S=(o=Z.playMode)!=null?o:"normal",A=(n=Z.intermission)!=null?n:0,k=(r=Z.hover)!=null?r:!1,$=(a=Z.direction)!=null?a:1,M=(l=Z.speed)!=null?l:1,N=(s=Z.defaultTheme)!=null?s:"";g=(h=t?.loop)!=null?h:this._getOption("loop"),x=(d=t?.autoplay)!=null?d:this._getOption("autoplay"),S=(u=t?.playMode)!=null?u:this._getOption("playMode"),A=(c=t?.intermission)!=null?c:this._getOption("intermission"),k=(p=t?.hover)!=null?p:this._getOption("hover"),$=(_=t?.direction)!=null?_:this._getOption("direction"),M=(f=t?.speed)!=null?f:this._getOption("speed"),N=(v=t?.defaultTheme)!=null?v:this._getOption("defaultTheme");let I={...this._animationConfig,autoplay:k?!1:x,loop:typeof g=="number"?!0:g,renderer:this._worker?"svg":(y=this._animationConfig.renderer)!=null?y:"svg"},[H,F,R]=await Promise.all([this._dotLottieLoader.getTheme(N),this._getLottiePlayerInstance(),this._getAudioFactory()]);if(H&&this._animation?(this._animation=ae(this._animation),this._animation.slots=H):this._animation=await this._dotLottieLoader.getAnimation((m=this._currentAnimationId)!=null?m:""),this._activeStateId&&!this._inInteractiveMode){this.enterInteractiveMode(this._activeStateId);return}this.destroy(),this._setPlayerState(()=>({defaultTheme:N,playMode:S,intermission:A,hover:k,loop:g})),R?this._lottie=F.loadAnimation({...I,container:this._container,animationData:this._animation,audioFactory:R}):this._lottie=F.loadAnimation({...I,container:this._container,animationData:this._animation}),typeof this._lottie.resetSegments>"u"&&(this._lottie.resetSegments=()=>{var D;(D=this._lottie)==null||D.playSegments([0,this._lottie.totalFrames],!0)}),this.addEventListeners(),this._container&&(this._container.__lottie=this._lottie),this._setPlayerState(()=>({direction:$,speed:M})),x&&!k&&(g===!1&&$===-1?this.play():this.setCurrentState("playing")),this._updateTestData()}async _getLottiePlayerInstance(){var t;let e=(t=this._animationConfig.renderer)!=null?t:"svg",i;if(this._worker)return e!=="svg"&&E("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."),i=await et(()=>import("./BT0YHPnS.js"),__vite__mapDeps([5,4]),import.meta.url),i.default;switch(e){case"svg":{this._light?i=await et(()=>import("./CJ3kDXi7.js"),__vite__mapDeps([6,4]),import.meta.url):i=await et(()=>import("./B5msjmZV.js"),__vite__mapDeps([7,4]),import.meta.url);break}case"canvas":{this._light?i=await et(()=>import("./BaiVM3wm.js"),__vite__mapDeps([8,4]),import.meta.url):i=await et(()=>import("./CMCp-Pdo.js"),__vite__mapDeps([9,4]),import.meta.url);break}case"html":{this._light?i=await et(()=>import("./BlU-pBPK.js"),__vite__mapDeps([10,4]),import.meta.url):i=await et(()=>import("./BeviS9MN.js"),__vite__mapDeps([11,4]),import.meta.url);break}default:throw new Error(`Invalid renderer: ${e}`)}return i.default}_getActiveAnimationId(){var t,e,i,o;let n=this._dotLottieLoader.manifest;return(o=(i=(t=this._activeAnimationId)!=null?t:n?.activeAnimationId)!=null?i:(e=n?.animations[0])==null?void 0:e.id)!=null?o:void 0}async load(t){if(this._currentState==="loading"){E("Loading in progress..");return}try{if(this.setCurrentState("loading"),typeof this._src=="string")if(Mn(this._src)){let i=JSON.parse(this._src);this._dotLottieLoader.loadFromLottieJSON(i)}else{let i=new URL(this._src,window.location.href);await this._dotLottieLoader.loadFromUrl(i.toString())}else if(typeof this._src=="object"&&Ht(this._src))this._dotLottieLoader.loadFromLottieJSON(this._src);else throw w("Invalid src provided");if(!this._dotLottieLoader.manifest)throw w("No manifest found");let e=this._getActiveAnimationId();if(!e)throw w("No active animation found");await this._setCurrentAnimation(e),await this.render(t)}catch(e){this.setCurrentState("error"),e instanceof Error&&ft(`Error loading animation: ${e.message}`)}}setErrorState(t){this.setCurrentState("error"),ft(t)}_requireValidDirection(t){if(t!==-1&&t!==1)throw w("Direction can only be -1 (backwards) or 1 (forwards)")}_requireValidIntermission(t){if(t<0||!Number.isInteger(t))throw w("intermission must be a positive number")}_requireValidLoop(t){if(typeof t=="number"&&(!Number.isInteger(t)||t<0))throw w("loop must be a positive number or boolean")}_requireValidSpeed(t){if(typeof t!="number")throw w("speed must be a number")}_requireValidBackground(t){if(typeof t!="string")throw w("background must be a string")}_requireValidAutoplay(t){if(typeof t!="boolean")throw w("autoplay must be a boolean")}_requireValidPlaybackOptions(t){t.direction&&this._requireValidDirection(t.direction),t.intermission&&this._requireValidIntermission(t.intermission),t.loop&&this._requireValidLoop(t.loop),t.speed&&this._requireValidSpeed(t.speed)}},Fn=Object.defineProperty,T=(t,e,i,o)=>{for(var n=void 0,r=t.length-1,a;r>=0;r--)(a=t[r])&&(n=a(e,i,n)||n);return n&&Fn(e,i,n),n},Vn=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},Bn=(t,e,i)=>{e.constructor.createProperty(i,t)};function z(t){return(e,i)=>i!==void 0?Bn(t,e,i):Vn(t,e)}function Hn(t){return z({...t,state:!0})}var qn=({finisher:t,descriptor:e})=>(i,o)=>{var n;if(o===void 0){let r=(n=i.originalKey)!==null&&n!==void 0?n:i.key,a=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(i.key)}:{...i,key:r};return t!=null&&(a.finisher=function(l){t(l,r)}),a}{let r=i.constructor;e!==void 0&&Object.defineProperty(i,o,e(o)),t?.(r,o)}};function Rn(t,e){return qn({descriptor:i=>({get(){var n,r;return(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(t))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0})})}var le;((le=window.HTMLSlotElement)===null||le===void 0?void 0:le.prototype.assignedElements)!=null;var Zn={version:"2.7.12"},ai="dotlottie-player",P=class extends $t{defaultTheme="";container;playMode=Bi.Normal;autoplay=!1;background="transparent";controls=!1;direction=1;hover=!1;loop;renderer="svg";speed=1;src;intermission=0;activeAnimationId=null;light=!1;worker=!1;activeStateId;_seeker=0;_dotLottieCommonPlayer;_io;_loop;_renderer="svg";_unsubscribeListeners;_hasMultipleAnimations=!1;_hasMultipleThemes=!1;_hasMultipleStates=!1;_popoverIsOpen=!1;_animationsTabIsOpen=!1;_statesTabIsOpen=!1;_styleTabIsOpen=!1;_themesForCurrentAnimation=[];_statesForCurrentAnimation=[];_parseLoop(t){let e=parseInt(t,10);return Number.isInteger(e)&&e>0?(this._loop=e,e):typeof t=="string"&&["true","false"].includes(t)?(this._loop=t==="true",this._loop):(E("loop must be a positive integer or a boolean"),!1)}_handleSeekChange(t){let e=t.currentTarget;try{let i=parseInt(e.value,10);if(!this._dotLottieCommonPlayer)return;let o=i/100*this._dotLottieCommonPlayer.totalFrames;this.seek(o)}catch{throw w("Error while seeking animation")}}_initListeners(){let t=this._dotLottieCommonPlayer;if(t===void 0){E("player not initialized - cannot add event listeners","dotlottie-player-component");return}this._unsubscribeListeners=t.state.subscribe((e,i)=>{this._seeker=e.seeker,this.requestUpdate(),i.currentState!==e.currentState&&this.dispatchEvent(new CustomEvent(e.currentState)),this.dispatchEvent(new CustomEvent(nt.Frame,{detail:{frame:e.frame,seeker:e.seeker}})),this.dispatchEvent(new CustomEvent(nt.VisibilityChange,{detail:{visibilityPercentage:e.visibilityPercentage}}))}),t.addEventListener("complete",()=>{this.dispatchEvent(new CustomEvent(nt.Complete))}),t.addEventListener("loopComplete",()=>{this.dispatchEvent(new CustomEvent(nt.LoopComplete))}),t.addEventListener("DOMLoaded",()=>{let e=this.getManifest();e&&e.themes&&(this._themesForCurrentAnimation=e.themes.filter(i=>i.animations.includes(this.getCurrentAnimationId()||""))),e&&e.states&&(this._hasMultipleStates=e.states.length>0,this._statesForCurrentAnimation=[],e.states.forEach(i=>{this._statesForCurrentAnimation.push(i)})),this.dispatchEvent(new CustomEvent(nt.Ready))}),t.addEventListener("data_ready",()=>{this.dispatchEvent(new CustomEvent(nt.DataReady))}),t.addEventListener("data_failed",()=>{this.dispatchEvent(new CustomEvent(nt.DataFail))}),window&&window.addEventListener("click",e=>this._clickOutListener(e))}async load(t,e,i){if(!this.shadowRoot)return;this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.destroy(),this._dotLottieCommonPlayer=new si(t,this.container,{rendererSettings:e??{scaleMode:"noScale",clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0},hover:this.hasAttribute("hover")?this.hover:void 0,renderer:this.hasAttribute("renderer")?this._renderer:void 0,loop:this.hasAttribute("loop")?this._loop:void 0,direction:this.hasAttribute("direction")?this.direction===1?1:-1:void 0,speed:this.hasAttribute("speed")?this.speed:void 0,intermission:this.hasAttribute("intermission")?Number(this.intermission):void 0,playMode:this.hasAttribute("playMode")?this.playMode:void 0,autoplay:this.hasAttribute("autoplay")?this.autoplay:void 0,activeAnimationId:this.hasAttribute("activeAnimationId")?this.activeAnimationId:void 0,defaultTheme:this.hasAttribute("defaultTheme")?this.defaultTheme:void 0,light:this.light,worker:this.worker,activeStateId:this.hasAttribute("activeStateId")?this.activeStateId:void 0}),await this._dotLottieCommonPlayer.load(i);let o=this.getManifest();this._hasMultipleAnimations=this.animationCount()>1,o&&(o.themes&&(this._themesForCurrentAnimation=o.themes.filter(n=>n.animations.includes(this.getCurrentAnimationId()||"")),this._hasMultipleThemes=o.themes.length>0),o.states&&(this._hasMultipleStates=o.states.length>0,this._statesForCurrentAnimation=[],o.states.forEach(n=>{this._statesForCurrentAnimation.push(n)}))),this._initListeners()}getCurrentAnimationId(){var t;return(t=this._dotLottieCommonPlayer)==null?void 0:t.currentAnimationId}animationCount(){var t;return this._dotLottieCommonPlayer&&((t=this._dotLottieCommonPlayer.getManifest())==null?void 0:t.animations.length)||0}animations(){if(!this._dotLottieCommonPlayer)return[];let t=this._dotLottieCommonPlayer.getManifest();return t?.animations.map(e=>e.id)||[]}currentAnimation(){return!this._dotLottieCommonPlayer||!this._dotLottieCommonPlayer.currentAnimationId?"":this._dotLottieCommonPlayer.currentAnimationId}getState(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.getState():Hi}getManifest(){var t;return(t=this._dotLottieCommonPlayer)==null?void 0:t.getManifest()}getLottie(){var t;return(t=this._dotLottieCommonPlayer)==null?void 0:t.getAnimationInstance()}getVersions(){return{lottieWebVersion:si.getLottieWebVersion(),dotLottiePlayerVersion:`${Zn.version}`}}previous(t){var e;(e=this._dotLottieCommonPlayer)==null||e.previous(t)}next(t){var e;(e=this._dotLottieCommonPlayer)==null||e.next(t)}reset(){var t;(t=this._dotLottieCommonPlayer)==null||t.reset()}play(t,e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.play(t,e)}pause(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.pause()}stop(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stop()}playOnShow(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnShow(t)}stopPlayOnShow(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnShow()}playOnScroll(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnScroll(t)}stopPlayOnScroll(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnScroll()}seek(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.seek(t)}snapshot(t=!0){if(!this.shadowRoot)return"";let e=this.shadowRoot.querySelector(".animation svg"),i=new XMLSerializer().serializeToString(e);if(t){let o=document.createElement("a");o.href=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`,o.download=`download_${this._seeker}.svg`,document.body.appendChild(o),o.click(),document.body.removeChild(o)}return i}setTheme(t){var e;(e=this._dotLottieCommonPlayer)==null||e.setDefaultTheme(t)}themes(){var t;if(!this._dotLottieCommonPlayer)return[];let e=this._dotLottieCommonPlayer.getManifest();return((t=e?.themes)==null?void 0:t.map(i=>i.id))||[]}getDefaultTheme(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.defaultTheme:""}getActiveStateMachine(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.activeStateId:""}_freeze(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.freeze()}setSpeed(t=1){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setSpeed(t)}setDirection(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setDirection(t)}setLooping(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setLoop(t)}isLooping(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.loop:!1}togglePlay(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.togglePlay()}toggleLooping(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.toggleLoop()}setPlayMode(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setMode(t)}enterInteractiveMode(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.enterInteractiveMode(t)}exitInteractiveMode(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.exitInteractiveMode()}revertToManifestValues(t){var e;(e=this._dotLottieCommonPlayer)==null||e.revertToManifestValues(t)}static get styles(){return yo}async firstUpdated(){var t;this.container=(t=this.shadowRoot)==null?void 0:t.querySelector("#animation"),"IntersectionObserver"in window&&(this._io=new IntersectionObserver(e=>{var i,o;e[0]!==void 0&&e[0].isIntersecting?((i=this._dotLottieCommonPlayer)==null?void 0:i.currentState)===mt.Frozen&&this.play():((o=this._dotLottieCommonPlayer)==null?void 0:o.currentState)===mt.Playing&&this._freeze()}),this._io.observe(this.container)),this.loop?this._parseLoop(this.loop):this.hasAttribute("loop")&&this._parseLoop("true"),this.renderer==="svg"?this._renderer="svg":this.renderer==="canvas"?this._renderer="canvas":this.renderer==="html"&&(this._renderer="html"),this.src&&await this.load(this.src)}disconnectedCallback(){var t,e;this._io&&(this._io.disconnect(),this._io=void 0),(t=this._dotLottieCommonPlayer)==null||t.destroy(),(e=this._unsubscribeListeners)==null||e.call(this),window&&window.removeEventListener("click",i=>this._clickOutListener(i))}_clickOutListener(t){!t.composedPath().some(e=>e instanceof HTMLElement?e.classList.contains("popover")||e.id==="lottie-animation-options":!1)&&this._popoverIsOpen&&(this._popoverIsOpen=!1,this.requestUpdate())}renderControls(){var t,e,i,o,n;let r=((t=this._dotLottieCommonPlayer)==null?void 0:t.currentState)===mt.Playing,a=((e=this._dotLottieCommonPlayer)==null?void 0:e.currentState)===mt.Paused;return b`
      <div id="lottie-controls" aria-label="lottie-animation-controls" class="toolbar">
        ${this._hasMultipleAnimations?b`
              <button @click=${()=>this.previous()} aria-label="Previous animation" class="btn-spacing-left">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.69214 13.5C1.69214 13.7761 1.916 14 2.19214 14C2.46828 14 2.69214 13.7761 2.69214 13.5L2.69214 2.5C2.69214 2.22386 2.46828 2 2.19214 2C1.916 2 1.69214 2.22386 1.69214 2.5V13.5ZM12.5192 13.7828C13.1859 14.174 14.0254 13.6933 14.0254 12.9204L14.0254 3.0799C14.0254 2.30692 13.1859 1.8262 12.5192 2.21747L4.13612 7.13769C3.47769 7.52414 3.47769 8.4761 4.13612 8.86255L12.5192 13.7828Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:b``}
        <button
          id="lottie-play-button"
          @click=${()=>{this.togglePlay()}}
          class=${r||a?`active ${this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}`:`${this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}`}
          aria-label="play / pause animation"
        >
          ${r?b`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.99996 2C3.26358 2 2.66663 2.59695 2.66663 3.33333V12.6667C2.66663 13.403 3.26358 14 3.99996 14H5.33329C6.06967 14 6.66663 13.403 6.66663 12.6667V3.33333C6.66663 2.59695 6.06967 2 5.33329 2H3.99996Z"
                    fill="#20272C"
                  />
                  <path
                    d="M10.6666 2C9.93025 2 9.33329 2.59695 9.33329 3.33333V12.6667C9.33329 13.403 9.93025 14 10.6666 14H12C12.7363 14 13.3333 13.403 13.3333 12.6667V3.33333C13.3333 2.59695 12.7363 2 12 2H10.6666Z"
                    fill="#20272C"
                  />
                </svg>
              `:b`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.33337 3.46787C3.33337 2.52312 4.35948 1.93558 5.17426 2.41379L12.8961 6.94592C13.7009 7.41824 13.7009 8.58176 12.8961 9.05408L5.17426 13.5862C4.35948 14.0644 3.33337 13.4769 3.33337 12.5321V3.46787Z"
                    fill="#20272C"
                  />
                </svg>
              `}
        </button>
        ${this._hasMultipleAnimations?b`
              <button @click=${()=>this.next()} aria-label="Next animation" class="btn-spacing-right">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.3336 2.5C14.3336 2.22386 14.1097 2 13.8336 2C13.5574 2 13.3336 2.22386 13.3336 2.5V13.5C13.3336 13.7761 13.5574 14 13.8336 14C14.1097 14 14.3336 13.7761 14.3336 13.5V2.5ZM3.50618 2.21722C2.83954 1.82595 2 2.30667 2 3.07965V12.9201C2 13.6931 2.83954 14.1738 3.50618 13.7825L11.8893 8.86231C12.5477 8.47586 12.5477 7.52389 11.8893 7.13745L3.50618 2.21722Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:b``}
        <input
          id="lottie-seeker-input"
          class="seeker ${((i=this._dotLottieCommonPlayer)==null?void 0:i.direction)===-1?"to-left":""}"
          type="range"
          min="0"
          step="1"
          max="100"
          .value=${this._seeker}
          @input=${l=>this._handleSeekChange(l)}
          @mousedown=${()=>{this._freeze()}}
          @mouseup=${()=>{var l;(l=this._dotLottieCommonPlayer)==null||l.unfreeze()}}
          aria-valuemin="1"
          aria-valuemax="100"
          role="slider"
          aria-valuenow=${this._seeker}
          aria-label="lottie-seek-input"
          style=${`--seeker: ${this._seeker}`}
        />
        <button
          id="lottie-loop-toggle"
          @click=${()=>this.toggleLooping()}
          class=${(o=this._dotLottieCommonPlayer)!=null&&o.loop?"active btn-spacing-left":"btn-spacing-left"}
          aria-label="loop-toggle"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8654 2.31319C11.0607 2.11793 11.3772 2.11793 11.5725 2.31319L13.4581 4.19881C13.6534 4.39407 13.6534 4.71066 13.4581 4.90592L11.5725 6.79154C11.3772 6.9868 11.0607 6.9868 10.8654 6.79154C10.6701 6.59628 10.6701 6.27969 10.8654 6.08443L11.6162 5.33362H4V6.66695C4 7.03514 3.70152 7.33362 3.33333 7.33362C2.96514 7.33362 2.66666 7.03514 2.66666 6.66695L2.66666 4.66695C2.66666 4.29876 2.96514 4.00028 3.33333 4.00028H11.8454L10.8654 3.0203C10.6701 2.82504 10.6701 2.50846 10.8654 2.31319Z"
              fill="currentColor"
            />
            <path
              d="M12.4375 11.9999C12.8057 11.9999 13.1042 11.7014 13.1042 11.3332V9.33321C13.1042 8.96502 12.8057 8.66655 12.4375 8.66655C12.0693 8.66655 11.7708 8.96502 11.7708 9.33321V10.6665H4.15462L4.90543 9.91573C5.10069 9.72047 5.10069 9.40389 4.90543 9.20862C4.71017 9.01336 4.39359 9.01336 4.19832 9.20862L2.31271 11.0942C2.11744 11.2895 2.11744 11.6061 2.31271 11.8013L4.19832 13.687C4.39359 13.8822 4.71017 13.8822 4.90543 13.687C5.10069 13.4917 5.10069 13.1751 4.90543 12.9799L3.92545 11.9999H12.4375Z"
              fill="currentColor"
            />
          </svg>
        </button>
        ${this._hasMultipleAnimations||this._hasMultipleThemes||this._hasMultipleStates?b`
              <button
                id="lottie-animation-options"
                @click=${()=>{this._popoverIsOpen=!this._popoverIsOpen,this.requestUpdate()}}
                aria-label="options"
                class="btn-spacing-right"
                style=${`background-color: ${this._popoverIsOpen?"var(--lottie-player-toolbar-icon-hover-color)":""}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.33337 11.6666C7.78109 11.6666 7.33337 12.1143 7.33337 12.6666C7.33337 13.2189 7.78109 13.6666 8.33337 13.6666C8.88566 13.6666 9.33337 13.2189 9.33337 12.6666C9.33337 12.1143 8.88566 11.6666 8.33337 11.6666Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 7.99992C7.33337 7.44763 7.78109 6.99992 8.33337 6.99992C8.88566 6.99992 9.33338 7.44763 9.33338 7.99992C9.33338 8.5522 8.88566 8.99992 8.33337 8.99992C7.78109 8.99992 7.33337 8.5522 7.33337 7.99992Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 3.33325C7.33337 2.78097 7.78109 2.33325 8.33337 2.33325C8.88566 2.33325 9.33338 2.78097 9.33338 3.33325C9.33338 3.88554 8.88566 4.33325 8.33337 4.33325C7.78109 4.33325 7.33337 3.88554 7.33337 3.33325Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:b``}
      </div>
      ${this._popoverIsOpen?b`
            <div
              id="popover"
              class="popover"
              tabindex="0"
              aria-label="lottie animations themes popover"
              style="min-height: ${this.themes().length>0?"84px":"auto"}"
            >
              ${!this._animationsTabIsOpen&&!this._styleTabIsOpen&&!this._statesTabIsOpen?b`
                    <button
                      class="popover-button"
                      tabindex="0"
                      aria-label="animations"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                      @keydown=${l=>{(l.code==="Space"||l.code==="Enter")&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate())}}
                    >
                      <div class="popover-button-text">Animations</div>
                      <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                            fill="#4C5863"
                          />
                        </svg>
                      </div>
                    </button>
                  `:b``}
              ${this._hasMultipleThemes&&!this._styleTabIsOpen&&!this._animationsTabIsOpen&&!this._statesTabIsOpen?b` <button
                    class="popover-button"
                    aria-label="Themes"
                    @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                    @keydown=${l=>{(l.code==="Space"||l.code==="Enter")&&(this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">Themes</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`:""}
              ${this._hasMultipleStates&&!this._styleTabIsOpen&&!this._animationsTabIsOpen&&!this._statesTabIsOpen?b` <button
                    class="popover-button"
                    aria-label="States"
                    @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                    @keydown=${l=>{(l.code==="Space"||l.code==="Enter")&&(this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">States</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`:""}
              ${this._animationsTabIsOpen?b`<button
                      class="option-title-button"
                      aria-label="Back to main popover menu"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                    >
                      <div class="option-title-chevron">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                            fill="#20272C"
                          />
                        </svg>
                      </div>
                      <div>Animations</div>
                    </button>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this.animations().map(l=>b`
                            <li>
                              <button
                                class="option-button"
                                aria-label=${`${l}`}
                                @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(l),this.requestUpdate()}}
                                @keydown=${s=>{(s.code==="Space"||s.code==="Enter")&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(l),this.requestUpdate())}}
                              >
                                <div class="option-tick">
                                  ${this.currentAnimation()===l?b`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:b`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${l}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div> `:b``}
              ${this._styleTabIsOpen?b`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">Themes</div>
                        ${((n=this._dotLottieCommonPlayer)==null?void 0:n.defaultTheme)===""?b``:b`
                              <button
                                class="reset-btn"
                                @click=${()=>{this.setTheme(""),this.requestUpdate()}}
                              >
                                Reset
                              </button>
                            `}
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._themesForCurrentAnimation.map(l=>b`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${l.id}"
                                @click=${()=>{this.setTheme(l.id)}}
                                @keydown=${s=>{(s.code==="Space"||s.code==="Enter")&&this.setTheme(l.id)}}
                              >
                                <div class="option-tick">
                                  ${this.getDefaultTheme()===l.id?b`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:b`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${l.id}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:b``}
              ${this._statesTabIsOpen?b`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">States</div>
                        <button
                          class="reset-btn"
                          @click=${()=>{this.exitInteractiveMode(),this.requestUpdate()}}
                        >
                          Reset
                        </button>
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._statesForCurrentAnimation.map(l=>b`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${l}"
                                @click=${()=>{this.enterInteractiveMode(l)}}
                                @keydown=${s=>{(s.code==="Space"||s.code==="Enter")&&this.enterInteractiveMode(l)}}
                              >
                                <div class="option-tick">
                                  ${this.getActiveStateMachine()===l?b`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:b`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${l}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:b``}
            </div>
          `:b``}
    `}render(){var t;let e=this.controls?"main controls":"main",i=this.controls?"animation controls":"animation";return b`
      <div id="animation-container" class=${e} lang="en" role="img" aria-label="lottie-animation-container">
        <div id="animation" class=${i} style="background:${this.background};">
          ${((t=this._dotLottieCommonPlayer)==null?void 0:t.currentState)===mt.Error?b` <div class="error">⚠️</div> `:void 0}
        </div>
        ${this.controls?this.renderControls():void 0}
      </div>
    `}};T([z({type:String})],P.prototype,"defaultTheme"),T([Rn("#animation")],P.prototype,"container"),T([z()],P.prototype,"playMode"),T([z({type:Boolean})],P.prototype,"autoplay"),T([z({type:String})],P.prototype,"background"),T([z({type:Boolean})],P.prototype,"controls"),T([z({type:Number})],P.prototype,"direction"),T([z({type:Boolean})],P.prototype,"hover"),T([z({type:String})],P.prototype,"loop"),T([z({type:String})],P.prototype,"renderer"),T([z({type:Number})],P.prototype,"speed"),T([z({type:String})],P.prototype,"src"),T([z()],P.prototype,"intermission"),T([z({type:String})],P.prototype,"activeAnimationId"),T([z({type:Boolean})],P.prototype,"light"),T([z({type:Boolean})],P.prototype,"worker"),T([z({type:String})],P.prototype,"activeStateId"),T([Hn()],P.prototype,"_seeker");customElements.get(ai)||customElements.define(ai,P);function qi(t){return!t||t===document.body?!1:getComputedStyle(t).position==="fixed"?!0:qi(t.parentElement)}function Jn(t){const e=window.scrollY,i=Math.floor(e/t),o=e%t;return i%2===0?o/t*100:100-o/t*100}function Wn(t){const e=window.innerHeight,o=document.documentElement.scrollTop+e,r=t.getBoundingClientRect().top+window.scrollY,a=r+t.offsetHeight+e,l=(o-r)/(a-r)*100;return Math.max(Math.min(l,100),0)}function he(t,e){return Math.round(t*(e/100))}function Kn(t,e){const i=li(null),o=new Map;function n(){if(l(),i.value=null,!e.value){i.value=t.value;return}const s=document.querySelectorAll(e.value);s.length>0&&s[0]instanceof HTMLElement&&(i.value=s[0]);for(const h of s)if(h instanceof HTMLElement&&h.contains(t.value)){i.value=h;break}i.value||(i.value=t.value)}function r(s,h,d=!1){i.value?.addEventListener(s,h,d),o.set(s,[h,d])}function a(s,h,d=!1){i.value?.removeEventListener(s,h,d),o.delete(s)}function l(){for(const[s,[h,d]]of o)a(s,h,d)}return hi(e,()=>{n()}),ui(()=>{n()}),we(()=>{l()}),{lottieContainerRef:i,initContainer:n,addEventListener:r,removeAllEventListener:l}}const Yn=1e3;function Gn(t,e,i,o,n,r){const{lottieContainerRef:a,initContainer:l,addEventListener:s}=Kn(t,i),h=()=>{if(!e.value)return;const m=e.value.getLottie()?.totalFrames;if(m===void 0)return;const g=m;function x(S){if(!(S instanceof MouseEvent)||!a.value)return;const A=a.value.getBoundingClientRect();let k=0;if(r.value==="vertical"?k=(S.clientY-A.top)/A.height*100:k=(S.clientX-A.left)/A.width*100,!e.value)return;const $=he(g,k);e.value.seek($)}s("mousemove",x)},d=()=>{function m(){e.value&&(e.value.setDirection(1),e.value.play())}function g(){e.value&&(e.value.setDirection(-1),e.value.play())}s("mouseenter",m),s("mouseleave",g)},u=()=>{function m(){e.value?.play()}function g(){e.value?.stop()}s("mouseenter",m),s("mouseleave",g)},c=()=>{if(!e.value)return;const m=e.value.getLottie()?.totalFrames;if(m===void 0)return;const g=m;function x(){if(!e.value)return;const A=Jn(Yn),k=he(g,A);e.value.seek(k)}document.addEventListener("scroll",x);function S(){document.removeEventListener("scroll",x)}return S},p=()=>{if(!e.value||!a.value)return;let m=!1;const g=e.value.getLottie()?.totalFrames;if(g===void 0)return;const x=g,S=new IntersectionObserver(N=>{const I=N[0];I&&(I.isIntersecting&&!m?k():!I.isIntersecting&&m&&$(),m=I.isIntersecting)},{threshold:0});S.observe(a.value);function A(){if(!e.value||!m||!a.value)return;const N=Wn(a.value),I=he(x,N);e.value.seek(I)}function k(){document.addEventListener("scroll",A)}function $(){document.removeEventListener("scroll",A)}function M(){S&&S.disconnect(),$()}return M},_=()=>{function m(){e.value&&(e.value.seek("0%"),e.value?.play())}s("click",m)},f=()=>{if(!e.value||!a.value)return;const m=new IntersectionObserver(x=>{const S=x[0];S&&S.isIntersecting&&setTimeout(()=>{if(e.value){if(!n.value){const A=()=>{g(),e.value&&e.value.removeEventListener("complete",A)};e.value.addEventListener("complete",A)}e.value?.play()}},o.value??0)},{threshold:.3});m.observe(a.value);function g(){m&&m.disconnect()}return g};let v;function y(m){m.playType&&(v&&(v(),v=void 0),l(),m.playType==="scroll"?qi(t.value)?v=c():v=p():m.playType==="hover"?m.hold?v=d():v=u():m.playType==="cursor"?v=h():m.playType==="click"?v=_():m.playType==="appear"&&(v=f()))}return we(()=>{v&&v()}),{setEvent:y}}const Xn=Wi({name:"LottieRenderer",props:{...Ki},setup(t){const e=Yi(t),i=e.getDomRef(!0),o=li(null),n=Gi(()=>Xi(t.studioDom.content?.lottie??{},t.rm)),{setEvent:r}=Gn(i,o,Ut(()=>n.value?.containerId),Ut(()=>n.value?.delay),Ut(()=>n.value?.loop),Ut(()=>n.value?.cursorDirection));async function a(){if(!i.value)return;i.value.innerHTML="";const s=n.value;if(!s||!s.src||!s.playType)return;const h=document.createElement("dotlottie-player");{h.setAttribute("src",s.src),s.playType==="autoplay"&&h.setAttribute("autoplay","true"),s.controls&&h.setAttribute("controls","true"),s.speed&&h.setAttribute("speed",String(s.speed));const u=s.playType==="hover"&&s.hold,c=!!(s.loop&&!u);h.setAttribute("loop",String(c))}i.value.appendChild(h),o.value=h;const d=()=>{r(s),h.removeEventListener("ready",d)};h.addEventListener("ready",d)}const l=Qi("a");return hi([()=>n.value?.playType,()=>n.value?.controls,()=>n.value?.loop,()=>n.value?.hold,()=>n.value?.speed,()=>n.value?.src,()=>n.value?.cursorDirection,()=>n.value?.delay,()=>n.value?.containerId,()=>t.studioDom.style?.position,()=>t.studioDom.style?.["@small"]?.position,()=>t.studioDom.style?.["@tablet"]?.position,()=>t.studioDom.style?.["@mobile"]?.position,()=>t.studioDom.style?.["@mini"]?.position],async()=>{l.value+="a",await to(),a()}),ui(()=>{a()}),we(()=>{o.value?.disconnectedCallback()}),()=>eo("div",{key:l.value,ref:i,...e.attrs.value,class:["sd"],style:e.style.value})}}),sr=Object.freeze(Object.defineProperty({__proto__:null,default:Xn},Symbol.toStringTag,{value:"Module"}));export{sr as L,ft as e,w as g,Z as q,rr as r};
