var T,p,fe,Q,F,le,Le,O={},de=[],ze=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function w(t,e){for(var n in e)t[n]=e[n];return t}function pe(t){var e=t.parentNode;e&&e.removeChild(t)}function J(t,e,n){var r,i,o,l={};for(o in e)o=="key"?r=e[o]:o=="ref"?i=e[o]:l[o]=e[o];if(arguments.length>2&&(l.children=arguments.length>3?T.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)l[o]===void 0&&(l[o]=t.defaultProps[o]);return I(t,l,r,i,null)}function I(t,e,n,r,i){var o={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++fe};return i==null&&p.vnode!=null&&p.vnode(o),o}function E(t){return t.children}function k(t,e){this.props=t,this.context=e}function D(t,e){if(e==null)return t.__?D(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?D(t):null}function he(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return he(t)}}function ue(t){(!t.__d&&(t.__d=!0)&&F.push(t)&&!q.__r++||le!==p.debounceRendering)&&((le=p.debounceRendering)||setTimeout)(q)}function q(){for(var t;q.__r=F.length;)t=F.sort(function(e,n){return e.__v.__b-n.__v.__b}),F=[],t.some(function(e){var n,r,i,o,l,s;e.__d&&(l=(o=(n=e).__v).__e,(s=n.__P)&&(r=[],(i=w({},o)).__v=o.__v+1,Y(s,o,i,n.__n,s.ownerSVGElement!==void 0,o.__h!=null?[l]:null,r,l??D(o),o.__h),ge(r,o),o.__e!=l&&he(o)))})}function ve(t,e,n,r,i,o,l,s,d,h){var _,v,c,u,f,A,y,m=r&&r.__k||de,b=m.length;for(n.__k=[],_=0;_<e.length;_++)if((u=n.__k[_]=(u=e[_])==null||typeof u=="boolean"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?I(null,u,null,null,u):Array.isArray(u)?I(E,{children:u},null,null,null):u.__b>0?I(u.type,u.props,u.key,null,u.__v):u)!=null){if(u.__=n,u.__b=n.__b+1,(c=m[_])===null||c&&u.key==c.key&&u.type===c.type)m[_]=void 0;else for(v=0;v<b;v++){if((c=m[v])&&u.key==c.key&&u.type===c.type){m[v]=void 0;break}c=null}Y(t,u,c=c||O,i,o,l,s,d,h),f=u.__e,(v=u.ref)&&c.ref!=v&&(y||(y=[]),c.ref&&y.push(c.ref,null,u),y.push(v,u.__c||f,u)),f!=null?(A==null&&(A=f),typeof u.type=="function"&&u.__k===c.__k?u.__d=d=ye(u,d,t):d=me(t,u,c,m,f,d),typeof n.type=="function"&&(n.__d=d)):d&&c.__e==d&&d.parentNode!=t&&(d=D(c))}for(n.__e=A,_=b;_--;)m[_]!=null&&(typeof n.type=="function"&&m[_].__e!=null&&m[_].__e==n.__d&&(n.__d=D(r,_+1)),ke(m[_],m[_]));if(y)for(_=0;_<y.length;_++)be(y[_],y[++_],y[++_])}function ye(t,e,n){for(var r,i=t.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=t,e=typeof r.type=="function"?ye(r,e,n):me(n,r,r,i,r.__e,e));return e}function X(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){X(n,e)}):e.push(t)),e}function me(t,e,n,r,i,o){var l,s,d;if(e.__d!==void 0)l=e.__d,e.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==t)t.appendChild(i),l=null;else{for(s=o,d=0;(s=s.nextSibling)&&d<r.length;d+=2)if(s==i)break e;t.insertBefore(i,o),l=o}return l!==void 0?l:i.nextSibling}function He(t,e,n,r,i){var o;for(o in n)o==="children"||o==="key"||o in e||V(t,o,null,n[o],r);for(o in e)i&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===e[o]||V(t,o,e[o],n[o],r)}function ae(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||ze.test(e)?n:n+"px"}function V(t,e,n,r,i){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||ae(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||ae(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?r||t.addEventListener(e,o?ce:se,o):t.removeEventListener(e,o?ce:se,o);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function se(t){this.l[t.type+!1](p.event?p.event(t):t)}function ce(t){this.l[t.type+!0](p.event?p.event(t):t)}function Y(t,e,n,r,i,o,l,s,d){var h,_,v,c,u,f,A,y,m,b,W,ie,j,g=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,s=e.__e=n.__e,e.__h=null,o=[s]),(h=p.__b)&&h(e);try{e:if(typeof g=="function"){if(y=e.props,m=(h=g.contextType)&&r[h.__c],b=h?m?m.props.value:h.__:r,n.__c?A=(_=e.__c=n.__c).__=_.__E:("prototype"in g&&g.prototype.render?e.__c=_=new g(y,b):(e.__c=_=new k(y,b),_.constructor=g,_.render=Be),m&&m.sub(_),_.props=y,_.state||(_.state={}),_.context=b,_.__n=r,v=_.__d=!0,_.__h=[]),_.__s==null&&(_.__s=_.state),g.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=w({},_.__s)),w(_.__s,g.getDerivedStateFromProps(y,_.__s))),c=_.props,u=_.state,v)g.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(g.getDerivedStateFromProps==null&&y!==c&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(y,b),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(y,_.__s,b)===!1||e.__v===n.__v){_.props=y,_.state=_.__s,e.__v!==n.__v&&(_.__d=!1),_.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(B){B&&(B.__=e)}),_.__h.length&&l.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(y,_.__s,b),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(c,u,f)})}if(_.context=b,_.props=y,_.__v=e,_.__P=t,W=p.__r,ie=0,"prototype"in g&&g.prototype.render)_.state=_.__s,_.__d=!1,W&&W(e),h=_.render(_.props,_.state,_.context);else do _.__d=!1,W&&W(e),h=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++ie<25);_.state=_.__s,_.getChildContext!=null&&(r=w(w({},r),_.getChildContext())),v||_.getSnapshotBeforeUpdate==null||(f=_.getSnapshotBeforeUpdate(c,u)),j=h!=null&&h.type===E&&h.key==null?h.props.children:h,ve(t,Array.isArray(j)?j:[j],e,n,r,i,o,l,s,d),_.base=e.__e,e.__h=null,_.__h.length&&l.push(_),A&&(_.__E=_.__=null),_.__e=!1}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=je(n.__e,e,n,r,i,o,l,d);(h=p.diffed)&&h(e)}catch(B){e.__v=null,(d||o!=null)&&(e.__e=s,e.__h=!!d,o[o.indexOf(s)]=null),p.__e(B,e,n)}}function ge(t,e){p.__c&&p.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){p.__e(r,n.__v)}})}function je(t,e,n,r,i,o,l,s){var d,h,_,v=n.props,c=e.props,u=e.type,f=0;if(u==="svg"&&(i=!0),o!=null){for(;f<o.length;f++)if((d=o[f])&&"setAttribute"in d==!!u&&(u?d.localName===u:d.nodeType===3)){t=d,o[f]=null;break}}if(t==null){if(u===null)return document.createTextNode(c);t=i?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,c.is&&c),o=null,s=!1}if(u===null)v===c||s&&t.data===c||(t.data=c);else{if(o=o&&T.call(t.childNodes),h=(v=n.props||O).dangerouslySetInnerHTML,_=c.dangerouslySetInnerHTML,!s){if(o!=null)for(v={},f=0;f<t.attributes.length;f++)v[t.attributes[f].name]=t.attributes[f].value;(_||h)&&(_&&(h&&_.__html==h.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||""))}if(He(t,c,v,i,s),_)e.__k=[];else if(f=e.props.children,ve(t,Array.isArray(f)?f:[f],e,n,r,i&&u!=="foreignObject",o,l,o?o[0]:n.__k&&D(n,0),s),o!=null)for(f=o.length;f--;)o[f]!=null&&pe(o[f]);s||("value"in c&&(f=c.value)!==void 0&&(f!==t.value||u==="progress"&&!f||u==="option"&&f!==v.value)&&V(t,"value",f,v.value,!1),"checked"in c&&(f=c.checked)!==void 0&&f!==t.checked&&V(t,"checked",f,v.checked,!1))}return t}function be(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){p.__e(r,n)}}function ke(t,e,n){var r,i;if(p.unmount&&p.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||be(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){p.__e(o,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&ke(r[i],e,typeof t.type!="function");n||t.__e==null||pe(t.__e),t.__e=t.__d=void 0}function Be(t,e,n){return this.constructor(t,n)}function we(t,e,n){var r,i,o;p.__&&p.__(t,e),i=(r=typeof n=="function")?null:n&&n.__k||e.__k,o=[],Y(e,t=(!r&&n||e).__k=J(E,null,[t]),i||O,O,e.ownerSVGElement!==void 0,!r&&n?[n]:i?null:e.firstChild?T.call(e.childNodes):null,o,!r&&n?n:i?i.__e:e.firstChild,r),ge(o,t)}function xe(t,e,n){var r,i,o,l=w({},t.props);for(o in e)o=="key"?r=e[o]:o=="ref"?i=e[o]:l[o]=e[o];return arguments.length>2&&(l.children=arguments.length>3?T.call(arguments,2):n),I(t.type,l,r||t.key,i||t.ref,null)}T=de.slice,p={__e:function(t,e,n,r){for(var i,o,l;e=e.__;)if((i=e.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(t)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,r||{}),l=i.__d),l)return i.__E=i}catch(s){t=s}throw t}},fe=0,Q=function(t){return t!=null&&t.constructor===void 0},k.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof t=="function"&&(t=t(w({},n),this.props)),t&&w(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),ue(this))},k.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ue(this))},k.prototype.render=E,F=[],q.__r=0,Le=0;function Oe(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var Se,C,S=null,L=new Set,Ce=0,Z=!1,M=new Set,x=function(){function t(i){this._s=new Set,this._d=new Set,this._p=0,this._v=void 0,this._r=!1,this._q=!1,this._c=!1,this.t=!1,this._v=i}var e,n,r=t.prototype;return r.toString=function(){return""+this.value},r.peek=function(){return this._v},r._=function(){var i=this,o=C,l=M;return C=this,M=this._d,this._d=new Set,function(s,d){s&&i._s.forEach(Ue),M.forEach(d?function(h){return Ae(i,h)}:function(h){return qe(i,h)}),M.clear(),M=l,C=o}},r._u=function(){},e=t,(n=[{key:"value",get:function(){return C._c&&this._d.size===0&&($e(this),C===Se)||(this._s.add(C),C._d.add(this),M.delete(this),(Ce>0&&this._p>0||Z&&this._d.size===0)&&De(this)),this._v},set:function(i){if(this._r)throw new Error("Computed signals are readonly");if(this._v!==i){this._v=i;var o=L.size===0;if(L.add(this),this._p===0&&Ee(this),o&&Ce===0&&(Pe(L),L.clear(),S)){var l=S;throw S=null,l}}}}])&&Oe(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Ee(t){t._p++==0&&t._s.forEach(Ee)}function Ue(t){t._q||--t._p!=0||t._s.forEach(Ue)}function Pe(t){t.forEach(function(e){if(e._p>0&&(e._q=!0,--e._p==0)){if(e.t)throw new Error("Cycle detected");e._q=!1,e.t=!0,e._u(),e.t=!1,Pe(e._s)}})}function qe(t,e){t._d.add(e),e._s.add(t)}function Ae(t,e){t._d.delete(e),e._s.delete(t),e._s.size===0&&e._d.forEach(function(n){return Ae(e,n)})}var Ve=[];function De(t){if(L.delete(t),t._p=0,t._u(),S){var e=S;throw S=null,e}t._s.forEach(function(n){n._p>0&&(n._p>1&&n._p--,Ve.push(n))})}function $e(t){Z=!0;try{De(t)}finally{Z=!1}}function U(t){return new x(t)}function z(t){var e=new x(void 0);return e._r=!0,e._u=function(){var n=e._();try{var r=t();n(e._v===r,!0),e._v=r}catch(i){S||(S=i),n(!0,!1)}},e}(Se=C=new x(void 0))._c=!0;var ee,Ne,te,ne=new WeakSet,Me=new WeakSet,We=new WeakSet;function N(t,e){p[t]=e.bind(null,p[t]||function(){})}var P=new WeakMap;function R(t){te&&te(!0,!0),Ne=t,te=t&&t._()}function Fe(t){var e=U(void 0);return e._c=!0,e._u=t,e}function Re(t){var e=P.get(t);if(e)e.__.length=0;else{var n=[];(e=Fe(function(){for(var r=t.__e,i=t.props,o=0;o<n.length;o++){var l=n[o],s=i[l]._v;l in r?r[l]=s:s?r.setAttribute(l,s):r.removeAttribute(l)}})).__=n,P.set(t,e)}return e}function Ie(t,e,n){typeof t!="object"||t==null||(Array.isArray(t)?t.forEach(Ie):t instanceof x&&(n[e]=J(Te,{data:t})))}function Te(t){var e=this,n=t.data,r=e.u||=function(){for(var i=e.__v;i=i.__;)if(i.__c){We.add(i.__c);break}return Ne._u=function(){e.base.data=r._v},z(function(){var o=n.value;return o===0?0:o===!0?"":o||""})}();return r.value}Te.displayName="_st",N("__b",function(t,e){if(typeof e.type=="string"){var n,r=e.props;for(var i in r){var o=r[i];i==="children"?Ie(o,"children",r):o instanceof x&&(n||(n=Re(e)),n.__.push(i))}R(n)}t(e)}),N("__r",function(t,e){var n,r=e.__c;r&&(ne.delete(r),(n=P.get(r))===void 0&&(n=Fe(function(){ne.add(r),r.setState({})}),P.set(r,n))),ee=r,R(n),t(e)}),N("__e",function(t,e,n,r){R(),ee=void 0,t(e,n,r)}),N("diffed",function(t,e){R(),ee=void 0,t(e)}),N("unmount",function(t,e){var n=e.__c||e,r=P.get(n);if(r){P.delete(n);var i=r._d;i&&(i.forEach(function(o){return o._s.delete(r)}),i.clear())}t(e)}),N("__h",function(t,e,n,r){r<3&&Me.add(e),t(e,n,r)}),k.prototype.shouldComponentUpdate=function(t,e){var n,r=P.get(this);if(!(r&&((n=r._d)==null?void 0:n.size)!==0||We.has(this))||ne.has(this)||Me.has(this))return!0;for(var i in e)return!0;for(var o in t)if(o!=="__source"&&t[o]!==this.props[o])return!0;for(var l in this.props)if(!(l in t))return!0;return!1};var Ge=0;function a(t,e,n,r,i){var o,l,s={};for(l in e)l=="ref"?o=e[l]:s[l]=e[l];var d={type:t,props:s,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ge,__source:i,__self:r};if(typeof t=="function"&&(o=t.defaultProps))for(l in o)s[l]===void 0&&(s[l]=o[l]);return p.vnode&&p.vnode(d),d}var G=class extends k{#e=0;render(){let e=this;return a("div",{className:"render-count",children:["rendered ",++e.#e," time",e.#e!==1&&"s"]})}},re=class extends k{#e=U([{id:crypto.randomUUID(),text:"Learn Preact"},{id:crypto.randomUUID(),text:"Do laundry"}]);#n=e=>{if(e.key==="Enter"){let n=this,r=e.target,i=r.value;if(i.trim()==="")return;let o={id:crypto.randomUUID(),text:i};n.#e.value=[o,...n.#e.value],r.value=""}};#t(e){let n=this,r=n.#e.value,i=r.findIndex(o=>o.id===e);i!==-1&&(r=r.slice(),r.splice(i,1),n.#e.value=r)}render(){let e=this;return a("div",{className:"card",children:[a("input",{placeholder:"I want to...",onKeyUp:e.#n}),a(Qe,{each:e.#e,fallback:a("div",{children:"No items"}),children:n=>a("div",{children:[a("button",{onClick:()=>e.#t(n.id),children:"x"}),a("span",{children:n.text})]},n.id)}),a(G,{})]})}},oe=class extends k{#e=U(0);#n=z(()=>this.#e*2);#t=U(!1);render(){let e=this;return a(E,{children:[a("div",{className:"card",children:[a("div",{children:[a("strong",{children:"count: "}),a("button",{onClick:()=>e.#e.value--,children:"\u2013"}),a("output",{children:a(Ke,{when:e.#t,children:a("span",{children:e.#e})})}),a("button",{onClick:()=>e.#e.value++,children:"+"}),a("button",{onClick:()=>e.#e.value+=2,children:"+ \xD72"}),a("label",{children:[a("input",{type:"checkbox",onChange:n=>e.#t.value=n.target.checked}),"show value"]})]}),a("div",{children:[a("strong",{children:"double count: "}),a("output",{children:e.#n})]}),a(Je,{children:[a(H,{when:()=>e.#e.value===0,children:a("div",{children:"Qux!"})}),a(H,{when:()=>e.#e.value%3===0,children:a("div",{children:"Foo!"})}),a(H,{when:()=>e.#e.value%5===0,children:a("div",{children:"Bar!"})}),a(H,{when:!0,children:a("div",{children:"Buzz!"})})]}),a(G,{})]}),a(re,{})]})}};we(a(oe,{}),document.getElementById("root"));function _e(t){return t instanceof x?t.value:t}function K(t,e,n){return typeof t=="function"?t(e,n):t}function Ke({when:t,fallback:e,children:n}){let r=_e(t);return K(r?n:e,r)}function Qe({each:t,children:e,fallback:n}){let r=_e(t);return r.length>0?r.map((o,l)=>K(e,o,l)):K(n)}function Je({children:t}){let e=X(t);for(let n of e){if(!Q(n)||n.type!==H)continue;let r=n.props.when,i=typeof r=="function"?r():_e(r);if(i)return xe(n,{_value:i})}return null}function H({when:t,children:e,_value:n}){return K(e,n)}
//# sourceMappingURL=app.js.map
