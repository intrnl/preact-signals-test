var $,p,fe,Q,F,le,Te,B={},de=[],Le=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function x(t,e){for(var n in e)t[n]=e[n];return t}function pe(t){var e=t.parentNode;e&&e.removeChild(t)}function J(t,e,n){var r,i,o,l={};for(o in e)o=="key"?r=e[o]:o=="ref"?i=e[o]:l[o]=e[o];if(arguments.length>2&&(l.children=arguments.length>3?$.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)l[o]===void 0&&(l[o]=t.defaultProps[o]);return j(t,l,r,i,null)}function j(t,e,n,r,i){var o={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++fe};return i==null&&p.vnode!=null&&p.vnode(o),o}function E(t){return t.children}function k(t,e){this.props=t,this.context=e}function D(t,e){if(e==null)return t.__?D(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?D(t):null}function he(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return he(t)}}function se(t){(!t.__d&&(t.__d=!0)&&F.push(t)&&!O.__r++||le!==p.debounceRendering)&&((le=p.debounceRendering)||setTimeout)(O)}function O(){for(var t;O.__r=F.length;)t=F.sort(function(e,n){return e.__v.__b-n.__v.__b}),F=[],t.some(function(e){var n,r,i,o,l,u;e.__d&&(l=(o=(n=e).__v).__e,(u=n.__P)&&(r=[],(i=x({},o)).__v=o.__v+1,Y(u,o,i,n.__n,u.ownerSVGElement!==void 0,o.__h!=null?[l]:null,r,l??D(o),o.__h),ge(r,o),o.__e!=l&&he(o)))})}function ve(t,e,n,r,i,o,l,u,d,h){var _,v,c,s,f,A,y,m=r&&r.__k||de,b=m.length;for(n.__k=[],_=0;_<e.length;_++)if((s=n.__k[_]=(s=e[_])==null||typeof s=="boolean"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?j(null,s,null,null,s):Array.isArray(s)?j(E,{children:s},null,null,null):s.__b>0?j(s.type,s.props,s.key,null,s.__v):s)!=null){if(s.__=n,s.__b=n.__b+1,(c=m[_])===null||c&&s.key==c.key&&s.type===c.type)m[_]=void 0;else for(v=0;v<b;v++){if((c=m[v])&&s.key==c.key&&s.type===c.type){m[v]=void 0;break}c=null}Y(t,s,c=c||B,i,o,l,u,d,h),f=s.__e,(v=s.ref)&&c.ref!=v&&(y||(y=[]),c.ref&&y.push(c.ref,null,s),y.push(v,s.__c||f,s)),f!=null?(A==null&&(A=f),typeof s.type=="function"&&s.__k===c.__k?s.__d=d=ye(s,d,t):d=me(t,s,c,m,f,d),typeof n.type=="function"&&(n.__d=d)):d&&c.__e==d&&d.parentNode!=t&&(d=D(c))}for(n.__e=A,_=b;_--;)m[_]!=null&&(typeof n.type=="function"&&m[_].__e!=null&&m[_].__e==n.__d&&(n.__d=D(r,_+1)),ke(m[_],m[_]));if(y)for(_=0;_<y.length;_++)be(y[_],y[++_],y[++_])}function ye(t,e,n){for(var r,i=t.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=t,e=typeof r.type=="function"?ye(r,e,n):me(n,r,r,i,r.__e,e));return e}function X(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){X(n,e)}):e.push(t)),e}function me(t,e,n,r,i,o){var l,u,d;if(e.__d!==void 0)l=e.__d,e.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==t)t.appendChild(i),l=null;else{for(u=o,d=0;(u=u.nextSibling)&&d<r.length;d+=2)if(u==i)break e;t.insertBefore(i,o),l=o}return l!==void 0?l:i.nextSibling}function ze(t,e,n,r,i){var o;for(o in n)o==="children"||o==="key"||o in e||q(t,o,null,n[o],r);for(o in e)i&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===e[o]||q(t,o,e[o],n[o],r)}function ue(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||Le.test(e)?n:n+"px"}function q(t,e,n,r,i){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||ue(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||ue(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?r||t.addEventListener(e,o?ce:ae,o):t.removeEventListener(e,o?ce:ae,o);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function ae(t){this.l[t.type+!1](p.event?p.event(t):t)}function ce(t){this.l[t.type+!0](p.event?p.event(t):t)}function Y(t,e,n,r,i,o,l,u,d){var h,_,v,c,s,f,A,y,m,b,W,ie,z,g=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=e.__e=n.__e,e.__h=null,o=[u]),(h=p.__b)&&h(e);try{e:if(typeof g=="function"){if(y=e.props,m=(h=g.contextType)&&r[h.__c],b=h?m?m.props.value:h.__:r,n.__c?A=(_=e.__c=n.__c).__=_.__E:("prototype"in g&&g.prototype.render?e.__c=_=new g(y,b):(e.__c=_=new k(y,b),_.constructor=g,_.render=je),m&&m.sub(_),_.props=y,_.state||(_.state={}),_.context=b,_.__n=r,v=_.__d=!0,_.__h=[]),_.__s==null&&(_.__s=_.state),g.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=x({},_.__s)),x(_.__s,g.getDerivedStateFromProps(y,_.__s))),c=_.props,s=_.state,v)g.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(g.getDerivedStateFromProps==null&&y!==c&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(y,b),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(y,_.__s,b)===!1||e.__v===n.__v){_.props=y,_.state=_.__s,e.__v!==n.__v&&(_.__d=!1),_.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(H){H&&(H.__=e)}),_.__h.length&&l.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(y,_.__s,b),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(c,s,f)})}if(_.context=b,_.props=y,_.__v=e,_.__P=t,W=p.__r,ie=0,"prototype"in g&&g.prototype.render)_.state=_.__s,_.__d=!1,W&&W(e),h=_.render(_.props,_.state,_.context);else do _.__d=!1,W&&W(e),h=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++ie<25);_.state=_.__s,_.getChildContext!=null&&(r=x(x({},r),_.getChildContext())),v||_.getSnapshotBeforeUpdate==null||(f=_.getSnapshotBeforeUpdate(c,s)),z=h!=null&&h.type===E&&h.key==null?h.props.children:h,ve(t,Array.isArray(z)?z:[z],e,n,r,i,o,l,u,d),_.base=e.__e,e.__h=null,_.__h.length&&l.push(_),A&&(_.__E=_.__=null),_.__e=!1}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=He(n.__e,e,n,r,i,o,l,d);(h=p.diffed)&&h(e)}catch(H){e.__v=null,(d||o!=null)&&(e.__e=u,e.__h=!!d,o[o.indexOf(u)]=null),p.__e(H,e,n)}}function ge(t,e){p.__c&&p.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){p.__e(r,n.__v)}})}function He(t,e,n,r,i,o,l,u){var d,h,_,v=n.props,c=e.props,s=e.type,f=0;if(s==="svg"&&(i=!0),o!=null){for(;f<o.length;f++)if((d=o[f])&&"setAttribute"in d==!!s&&(s?d.localName===s:d.nodeType===3)){t=d,o[f]=null;break}}if(t==null){if(s===null)return document.createTextNode(c);t=i?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,c.is&&c),o=null,u=!1}if(s===null)v===c||u&&t.data===c||(t.data=c);else{if(o=o&&$.call(t.childNodes),h=(v=n.props||B).dangerouslySetInnerHTML,_=c.dangerouslySetInnerHTML,!u){if(o!=null)for(v={},f=0;f<t.attributes.length;f++)v[t.attributes[f].name]=t.attributes[f].value;(_||h)&&(_&&(h&&_.__html==h.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||""))}if(ze(t,c,v,i,u),_)e.__k=[];else if(f=e.props.children,ve(t,Array.isArray(f)?f:[f],e,n,r,i&&s!=="foreignObject",o,l,o?o[0]:n.__k&&D(n,0),u),o!=null)for(f=o.length;f--;)o[f]!=null&&pe(o[f]);u||("value"in c&&(f=c.value)!==void 0&&(f!==t.value||s==="progress"&&!f||s==="option"&&f!==v.value)&&q(t,"value",f,v.value,!1),"checked"in c&&(f=c.checked)!==void 0&&f!==t.checked&&q(t,"checked",f,v.checked,!1))}return t}function be(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){p.__e(r,n)}}function ke(t,e,n){var r,i;if(p.unmount&&p.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||be(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){p.__e(o,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&ke(r[i],e,typeof t.type!="function");n||t.__e==null||pe(t.__e),t.__e=t.__d=void 0}function je(t,e,n){return this.constructor(t,n)}function we(t,e,n){var r,i,o;p.__&&p.__(t,e),i=(r=typeof n=="function")?null:n&&n.__k||e.__k,o=[],Y(e,t=(!r&&n||e).__k=J(E,null,[t]),i||B,B,e.ownerSVGElement!==void 0,!r&&n?[n]:i?null:e.firstChild?$.call(e.childNodes):null,o,!r&&n?n:i?i.__e:e.firstChild,r),ge(o,t)}$=de.slice,p={__e:function(t,e,n,r){for(var i,o,l;e=e.__;)if((i=e.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(t)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,r||{}),l=i.__d),l)return i.__E=i}catch(u){t=u}throw t}},fe=0,Q=function(t){return t!=null&&t.constructor===void 0},k.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof t=="function"&&(t=t(x({},n),this.props)),t&&x(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),se(this))},k.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),se(this))},k.prototype.render=E,F=[],O.__r=0,Te=0;function Be(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var Ce,C,S=null,I=new Set,xe=0,Z=!1,M=new Set,w=function(){function t(i){this._s=new Set,this._d=new Set,this._p=0,this._v=void 0,this._r=!1,this._q=!1,this._c=!1,this.t=!1,this._v=i}var e,n,r=t.prototype;return r.toString=function(){return""+this.value},r.peek=function(){return this._v},r._=function(){var i=this,o=C,l=M;return C=this,M=this._d,this._d=new Set,function(u,d){u&&i._s.forEach(Ee),M.forEach(d?function(h){return Pe(i,h)}:function(h){return Oe(i,h)}),M.clear(),M=l,C=o}},r._u=function(){},e=t,(n=[{key:"value",get:function(){return C._c&&this._d.size===0&&(Ve(this),C===Ce)||(this._s.add(C),C._d.add(this),M.delete(this),(xe>0&&this._p>0||Z&&this._d.size===0)&&Ae(this)),this._v},set:function(i){if(this._r)throw new Error("Computed signals are readonly");if(this._v!==i){this._v=i;var o=I.size===0;if(I.add(this),this._p===0&&Se(this),o&&xe===0&&(Ue(I),I.clear(),S)){var l=S;throw S=null,l}}}}])&&Be(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Se(t){t._p++==0&&t._s.forEach(Se)}function Ee(t){t._q||--t._p!=0||t._s.forEach(Ee)}function Ue(t){t.forEach(function(e){if(e._p>0&&(e._q=!0,--e._p==0)){if(e.t)throw new Error("Cycle detected");e._q=!1,e.t=!0,e._u(),e.t=!1,Ue(e._s)}})}function Oe(t,e){t._d.add(e),e._s.add(t)}function Pe(t,e){t._d.delete(e),e._s.delete(t),e._s.size===0&&e._d.forEach(function(n){return Pe(e,n)})}var qe=[];function Ae(t){if(I.delete(t),t._p=0,t._u(),S){var e=S;throw S=null,e}t._s.forEach(function(n){n._p>0&&(n._p>1&&n._p--,qe.push(n))})}function Ve(t){Z=!0;try{Ae(t)}finally{Z=!1}}function U(t){return new w(t)}function T(t){var e=new w(void 0);return e._r=!0,e._u=function(){var n=e._();try{var r=t();n(e._v===r,!0),e._v=r}catch(i){S||(S=i),n(!0,!1)}},e}(Ce=C=new w(void 0))._c=!0;var ee,Me,te,ne=new WeakSet,De=new WeakSet,Ne=new WeakSet;function N(t,e){p[t]=e.bind(null,p[t]||function(){})}var P=new WeakMap;function R(t){te&&te(!0,!0),Me=t,te=t&&t._()}function We(t){var e=U(void 0);return e._c=!0,e._u=t,e}function $e(t){var e=P.get(t);if(e)e.__.length=0;else{var n=[];(e=We(function(){for(var r=t.__e,i=t.props,o=0;o<n.length;o++){var l=n[o],u=i[l]._v;l in r?r[l]=u:u?r.setAttribute(l,u):r.removeAttribute(l)}})).__=n,P.set(t,e)}return e}function Fe(t,e,n){typeof t!="object"||t==null||(Array.isArray(t)?t.forEach(Fe):t instanceof w&&(n[e]=J(Ie,{data:t})))}function Ie(t){var e=this,n=t.data,r=e.u||=function(){for(var i=e.__v;i=i.__;)if(i.__c){Ne.add(i.__c);break}return Me._u=function(){e.base.data=r._v},T(function(){var o=n.value;return o===0?0:o===!0?"":o||""})}();return r.value}Ie.displayName="_st",N("__b",function(t,e){if(typeof e.type=="string"){var n,r=e.props;for(var i in r){var o=r[i];i==="children"?Fe(o,"children",r):o instanceof w&&(n||(n=$e(e)),n.__.push(i))}R(n)}t(e)}),N("__r",function(t,e){var n,r=e.__c;r&&(ne.delete(r),(n=P.get(r))===void 0&&(n=We(function(){ne.add(r),r.setState({})}),P.set(r,n))),ee=r,R(n),t(e)}),N("__e",function(t,e,n,r){R(),ee=void 0,t(e,n,r)}),N("diffed",function(t,e){R(),ee=void 0,t(e)}),N("unmount",function(t,e){var n=e.__c||e,r=P.get(n);if(r){P.delete(n);var i=r._d;i&&(i.forEach(function(o){return o._s.delete(r)}),i.clear())}t(e)}),N("__h",function(t,e,n,r){r<3&&De.add(e),t(e,n,r)}),k.prototype.shouldComponentUpdate=function(t,e){var n,r=P.get(this);if(!(r&&((n=r._d)==null?void 0:n.size)!==0||Ne.has(this))||ne.has(this)||De.has(this))return!0;for(var i in e)return!0;for(var o in t)if(o!=="__source"&&t[o]!==this.props[o])return!0;for(var l in this.props)if(!(l in t))return!0;return!1};var Re=0;function a(t,e,n,r,i){var o,l,u={};for(l in e)l=="ref"?o=e[l]:u[l]=e[l];var d={type:t,props:u,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Re,__source:i,__self:r};if(typeof t=="function"&&(o=t.defaultProps))for(l in o)u[l]===void 0&&(u[l]=o[l]);return p.vnode&&p.vnode(d),d}var G=class extends k{#e=0;render(){return a("div",{className:"render-count",children:["rendered ",++this.#e," time",this.#e!==1&&"s"]})}},re=class extends k{#e=U([{id:crypto.randomUUID(),text:"Learn Preact"},{id:crypto.randomUUID(),text:"Do laundry"}]);#n=e=>{if(e.key==="Enter"){let n=e.target,r=n.value;if(r.trim()==="")return;let i={id:crypto.randomUUID(),text:r};this.#e.value=[i,...this.#e.value],n.value=""}};#t(e){let n=this.#e.value,r=n.findIndex(i=>i.id===e);r!==-1&&(n=n.slice(),n.splice(r,1),this.#e.value=n)}render(){return a("div",{className:"card",children:[a("input",{placeholder:"I want to...",onKeyUp:this.#n}),a(Ke,{each:this.#e,fallback:a("div",{children:"No items"}),children:e=>a("div",{children:[a("button",{onClick:()=>this.#t(e.id),children:"x"}),a("span",{children:e.text})]},e.id)}),a(G,{})]})}},oe=class extends k{#e=U(0);#n=T(()=>this.#e*2);#t=U(!1);render(){return a(E,{children:[a("div",{className:"card",children:[a("div",{children:[a("strong",{children:"count: "}),a("button",{onClick:()=>this.#e.value--,children:"\u2013"}),a("output",{children:a(Ge,{when:this.#t,children:a("span",{children:this.#e})})}),a("button",{onClick:()=>this.#e.value++,children:"+"}),a("button",{onClick:()=>this.#e.value+=2,children:"+ \xD72"}),a("label",{children:[a("input",{type:"checkbox",onChange:e=>this.#t.value=e.target.checked}),"show value"]})]}),a("div",{children:[a("strong",{children:"double count: "}),a("output",{children:this.#n})]}),a(Qe,{children:[a(L,{when:()=>this.#e.value===0,children:a("div",{children:"Qux!"})}),a(L,{when:()=>this.#e.value%3===0,children:a("div",{children:"Foo!"})}),a(L,{when:()=>this.#e.value%5===0,children:a("div",{children:"Bar!"})}),a(L,{when:!0,children:a("div",{children:"Buzz!"})})]}),a(G,{})]}),a(re,{})]})}};we(a(oe,{}),document.getElementById("root"));function _e(t){return t instanceof w?t.value:t}function K(t,e,n){return typeof t=="function"?t(e,n):t}function Ge({when:t,fallback:e,children:n}){let r=_e(t);return K(r?n:e,r)}function Ke({each:t,children:e,fallback:n}){let r=_e(t);return r.length>0?r.map((o,l)=>K(e,o,l)):K(n)}function Qe({children:t}){let e=X(t),n=!1,r=null;for(let i of e){if(!Q(i)||i.type!==L)continue;let o=i.props.when,l=i.props.children,u=typeof o=="function"?o():_e(o);u&&!n&&(r=K(l,u),n=!0)}return r}function L({when:t,children:e}){return e}
//# sourceMappingURL=app.js.map
