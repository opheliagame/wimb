function k(){}const lt=t=>t;function ct(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t()}function F(){return Object.create(null)}function x(t){t.forEach(G)}function J(t){return typeof t=="function"}function Ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ot(t){return Object.keys(t).length===0}function K(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function qt(t){let e;return K(t,n=>e=n)(),e}function Tt(t,e,n){t.$$.on_destroy.push(K(e,n))}function zt(t,e,n,r){if(t){const s=Q(t,e,n,r);return t[0](s)}}function Q(t,e,n,r){return t[1]&&r?ct(n.ctx.slice(),t[1](r(e))):n.ctx}function Bt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],i=Math.max(e.dirty.length,s.length);for(let c=0;c<i;c+=1)o[c]=e.dirty[c]|s[c];return o}return e.dirty|s}return e.dirty}function Lt(t,e,n,r,s,o){if(s){const i=Q(e,n,r,o);t.p(i,s)}}function Ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Ht(t){return t==null?"":t}const U=typeof window<"u";let ut=U?()=>window.performance.now():()=>Date.now(),B=U?t=>requestAnimationFrame(t):k;const b=new Set;function V(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&B(V)}function at(t){let e;return b.size===0&&B(V),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let P=!1;function ft(){P=!0}function _t(){P=!1}function dt(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,_=(s>0&&e[n[s]].claim_order<=u?s+1:dt(1,s,a=>e[n[a]].claim_order,u))-1;r[l]=n[_]+1;const f=_+1;n[f]=l,s=Math.max(f,s)}const o=[],i=[];let c=e.length-1;for(let l=n[s]+1;l!=0;l=r[l-1]){for(o.push(e[l-1]);c>=l;c--)i.push(e[c]);c--}for(;c>=0;c--)i.push(e[c]);o.reverse(),i.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<i.length;l++){for(;u<o.length&&i[l].claim_order>=o[u].claim_order;)u++;const _=u<o.length?o[u]:null;t.insertBefore(i[l],_)}}function mt(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=Y("style");return yt(X(t),e),e.sheet}function yt(t,e){mt(t.head||t,e)}function gt(t,e){if(P){for(ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function It(t,e,n){P&&!n?gt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function bt(t){t.parentNode.removeChild(t)}function Wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function xt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function Gt(){return L(" ")}function Jt(){return L("")}function Kt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Qt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Vt(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function $t(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,r,s=!1){wt(t);const o=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const c=t[i];if(e(c)){const l=n(c);return l===void 0?t.splice(i,1):t[i]=l,s||(t.claim_info.last_index=i),c}}for(let i=t.claim_info.last_index-1;i>=0;i--){const c=t[i];if(e(c)){const l=n(c);return l===void 0?t.splice(i,1):t[i]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,c}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function tt(t,e,n,r){return Z(t,s=>s.nodeName===e,s=>{const o=[];for(let i=0;i<s.attributes.length;i++){const c=s.attributes[i];n[c.name]||o.push(c.name)}o.forEach(i=>s.removeAttribute(i))},()=>r(e))}function Xt(t,e,n){return tt(t,e,n,Y)}function Yt(t,e,n){return tt(t,e,n,xt)}function vt(t,e){return Z(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>L(e),!0)}function Zt(t){return vt(t," ")}function te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ee(t,e){t.value=e==null?"":e}function ne(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function et(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}function ie(t,e=document.body){return Array.from(e.querySelectorAll(t))}const C=new Map;let M=0;function Et(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function kt(t,e){const n={stylesheet:pt(e),rules:{}};return C.set(t,n),n}function H(t,e,n,r,s,o,i,c=0){const l=16.666/r;let u=`{
`;for(let p=0;p<=1;p+=l){const g=e+(n-e)*o(p);u+=p*100+`%{${i(g,1-g)}}
`}const _=u+`100% {${i(n,1-n)}}
}`,f=`__svelte_${Et(_)}_${c}`,a=X(t),{stylesheet:d,rules:h}=C.get(a)||kt(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${r}ms linear ${s}ms 1 both`,M+=1,f}function At(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),M-=s,M||Nt())}function Nt(){B(()=>{M||(C.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),C.clear())})}let E;function v(t){E=t}function R(){if(!E)throw new Error("Function called outside component initialization");return E}function re(t){R().$$.on_mount.push(t)}function se(t){R().$$.after_update.push(t)}function le(){const t=R();return(e,n,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=et(e,n,{cancelable:r});return s.slice().forEach(i=>{i.call(t,o)}),!o.defaultPrevented}return!0}}function ce(t,e){return R().$$.context.set(t,e),e}const w=[],I=[],S=[],W=[],nt=Promise.resolve();let z=!1;function it(){z||(z=!0,nt.then(rt))}function oe(){return it(),nt}function D(t){S.push(t)}const q=new Set;let N=0;function rt(){const t=E;do{for(;N<w.length;){const e=w[N];N++,v(e),St(e.$$)}for(v(null),w.length=0,N=0;I.length;)I.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];q.has(n)||(q.add(n),n())}S.length=0}while(w.length);for(;W.length;)W.pop()();z=!1,q.clear(),v(t)}function St(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}let $;function jt(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function T(t,e,n){t.dispatchEvent(et(`${e?"intro":"outro"}${n}`))}const j=new Set;let m;function ue(){m={r:0,c:[],p:m}}function ae(){m.r||x(m.c),m=m.p}function Ct(t,e){t&&t.i&&(j.delete(t),t.i(e))}function fe(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),m.c.push(()=>{j.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const Mt={duration:0};function _e(t,e,n,r){let s=e(t,n),o=r?0:1,i=null,c=null,l=null;function u(){l&&At(t,l)}function _(a,d){const h=a.b-o;return d*=Math.abs(h),{a:o,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:y=lt,tick:p=k,css:g}=s||Mt,O={start:ut()+d,b:a};a||(O.group=m,m.r+=1),i||c?c=O:(g&&(u(),l=H(t,o,a,h,d,y,g)),a&&p(0,1),i=_(O,h),D(()=>T(t,a,"start")),at(A=>{if(c&&A>c.start&&(i=_(c,h),c=null,T(t,i.b,"start"),g&&(u(),l=H(t,o,i.b,i.duration,0,y,s.css))),i){if(A>=i.end)p(o=i.b,1-o),T(t,i.b,"end"),c||(i.b?u():--i.group.r||x(i.group.c)),i=null;else if(A>=i.start){const st=A-i.start;o=i.a+i.d*y(st/i.duration),p(o,1-o)}}return!!(i||c)}))}return{run(a){J(s)?jt().then(()=>{s=s(),f(a)}):f(a)},end(){u(),i=c=null}}}function de(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],c=e[o];if(c){for(const l in i)l in c||(r[l]=1);for(const l in c)s[l]||(n[l]=c[l],s[l]=1);t[o]=c}else for(const l in i)s[l]=1}for(const i in r)i in n||(n[i]=void 0);return n}function he(t){return typeof t=="object"&&t!==null?t:{}}function me(t){t&&t.c()}function pe(t,e){t&&t.l(e)}function Dt(t,e,n,r){const{fragment:s,on_mount:o,on_destroy:i,after_update:c}=t.$$;s&&s.m(e,n),r||D(()=>{const l=o.map(G).filter(J);i?i.push(...l):x(l),t.$$.on_mount=[]}),c.forEach(D)}function Pt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&(w.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ye(t,e,n,r,s,o,i,c=[-1]){const l=E;v(t);const u=t.$$={fragment:null,ctx:null,props:o,update:k,not_equal:s,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:F(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};i&&i(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return u.ctx&&s(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),_&&Rt(t,f)),a}):[],u.update(),_=!0,x(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){ft();const f=$t(e.target);u.fragment&&u.fragment.l(f),f.forEach(bt)}else u.fragment&&u.fragment.c();e.intro&&Ct(t.$$.fragment),Dt(t,e.target,e.anchor,e.customElement),_t(),rt()}v(l)}class ge{$destroy(){Pt(this,1),this.$destroy=k}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{_e as $,he as A,Pt as B,ct as C,oe as D,k as E,K as F,x as G,J as H,zt as I,Lt as J,Ft as K,Bt as L,gt as M,Tt as N,Ht as O,Kt as P,le as Q,I as R,ge as S,Wt as T,qt as U,lt as V,ie as W,xt as X,Yt as Y,Vt as Z,D as _,Gt as a,ee as a0,Qt as a1,It as b,Zt as c,ae as d,Jt as e,Ct as f,ue as g,bt as h,ye as i,ce as j,se as k,Y as l,Xt as m,$t as n,re as o,Ut as p,ne as q,L as r,Ot as s,fe as t,vt as u,te as v,me as w,pe as x,Dt as y,de as z};