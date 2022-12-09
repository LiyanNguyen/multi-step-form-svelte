(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))n(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const o of u.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerpolicy&&(u.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?u.credentials="include":c.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(c){if(c.ep)return;c.ep=!0;const u=t(c);fetch(c.href,u)}})();function M(){}function Je(l){return l()}function xe(){return Object.create(null)}function pe(l){l.forEach(Je)}function Qe(l){return typeof l=="function"}function ve(l,e){return l!=l?e==e:l!==e||l&&typeof l=="object"||typeof l=="function"}let Se;function de(l,e){return Se||(Se=document.createElement("a")),Se.href=e,l===Se.href}function Ue(l){return Object.keys(l).length===0}function Ve(l,...e){if(l==null)return M;const t=l.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function ee(l,e,t){l.$$.on_destroy.push(Ve(e,t))}function ie(l,e,t){return l.set(t),e}function s(l,e){l.appendChild(e)}function b(l,e,t){l.insertBefore(e,t||null)}function v(l){l.parentNode&&l.parentNode.removeChild(l)}function r(l){return document.createElement(l)}function W(l){return document.createTextNode(l)}function _(){return W(" ")}function re(l,e,t,n){return l.addEventListener(e,t,n),()=>l.removeEventListener(e,t,n)}function i(l,e,t){t==null?l.removeAttribute(e):l.getAttribute(e)!==t&&l.setAttribute(e,t)}function Xe(l){return Array.from(l.childNodes)}function Le(l,e){e=""+e,l.wholeText!==e&&(l.data=e)}function C(l,e,t){l.classList[t?"add":"remove"](e)}let Ye;function we(l){Ye=l}const Ce=[],Ke=[],qe=[],Fe=[],Ze=Promise.resolve();let Ee=!1;function et(){Ee||(Ee=!0,Ze.then(Re))}function Me(l){qe.push(l)}const Pe=new Set;let Oe=0;function Re(){const l=Ye;do{for(;Oe<Ce.length;){const e=Ce[Oe];Oe++,we(e),tt(e.$$)}for(we(null),Ce.length=0,Oe=0;Ke.length;)Ke.pop()();for(let e=0;e<qe.length;e+=1){const t=qe[e];Pe.has(t)||(Pe.add(t),t())}qe.length=0}while(Ce.length);for(;Fe.length;)Fe.pop()();Ee=!1,Pe.clear(),we(l)}function tt(l){if(l.fragment!==null){l.update(),pe(l.before_update);const e=l.dirty;l.dirty=[-1],l.fragment&&l.fragment.p(l.ctx,e),l.after_update.forEach(Me)}}const Ie=new Set;let ae;function lt(){ae={r:0,c:[],p:ae}}function nt(){ae.r||pe(ae.c),ae=ae.p}function oe(l,e){l&&l.i&&(Ie.delete(l),l.i(e))}function _e(l,e,t,n){if(l&&l.o){if(Ie.has(l))return;Ie.add(l),ae.c.push(()=>{Ie.delete(l),n&&(t&&l.d(1),n())}),l.o(e)}else n&&n()}function Ae(l){l&&l.c()}function ye(l,e,t,n){const{fragment:c,after_update:u}=l.$$;c&&c.m(e,t),n||Me(()=>{const o=l.$$.on_mount.map(Je).filter(Qe);l.$$.on_destroy?l.$$.on_destroy.push(...o):pe(o),l.$$.on_mount=[]}),u.forEach(Me)}function he(l,e){const t=l.$$;t.fragment!==null&&(pe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function st(l,e){l.$$.dirty[0]===-1&&(Ce.push(l),et(),l.$$.dirty.fill(0)),l.$$.dirty[e/31|0]|=1<<e%31}function ge(l,e,t,n,c,u,o,f=[-1]){const d=Ye;we(l);const a=l.$$={fragment:null,ctx:[],props:u,update:M,not_equal:c,bound:xe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:xe(),dirty:f,skip_bound:!1,root:e.target||d.$$.root};o&&o(a.root);let h=!1;if(a.ctx=t?t(l,e.props||{},(j,P,...$)=>{const A=$.length?$[0]:P;return a.ctx&&c(a.ctx[j],a.ctx[j]=A)&&(!a.skip_bound&&a.bound[j]&&a.bound[j](A),h&&st(l,j)),P}):[],a.update(),h=!0,pe(a.before_update),a.fragment=n?n(a.ctx):!1,e.target){if(e.hydrate){const j=Xe(e.target);a.fragment&&a.fragment.l(j),j.forEach(v)}else a.fragment&&a.fragment.c();e.intro&&oe(l.$$.fragment),ye(l,e.target,e.anchor,e.customElement),Re()}we(d)}class $e{$destroy(){he(this,1),this.$destroy=M}$on(e,t){if(!Qe(t))return M;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const c=n.indexOf(t);c!==-1&&n.splice(c,1)}}$set(e){this.$$set&&!Ue(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ct(l){let e,t,n,c,u,o,f,d,a,h,j,P,$;return{c(){e=r("h3"),e.textContent="Personal Info",t=_(),n=r("p"),n.textContent="Please provide your name, email address, and phone number.",c=_(),u=r("form"),o=r("div"),o.innerHTML=`<label for="nameInput" class="svelte-1zw6t0">Name</label> 
		<input type="text" id="nameInput" placeholder="e.g. Stephen King" class="svelte-1zw6t0"/>`,f=_(),d=r("div"),d.innerHTML=`<label for="emailInput" class="svelte-1zw6t0">Email Address</label> 
		<input type="email" id="emailInput" placeholder="e.g. stephenking@lorem.com" class="svelte-1zw6t0"/>`,a=_(),h=r("div"),j=r("label"),j.textContent="Phone Number",P=_(),$=r("input"),i(e,"class","svelte-1zw6t0"),i(n,"class","svelte-1zw6t0"),i(o,"class","svelte-1zw6t0"),i(d,"class","svelte-1zw6t0"),i(j,"for","phoneInput"),i(j,"class","svelte-1zw6t0"),i($,"type","number"),i($,"id","phoneInput"),i($,"placeholder","e.g. +1 234 567 890"),i($,"class","svelte-1zw6t0"),C($,"error",it),i(h,"class","svelte-1zw6t0"),i(u,"class","svelte-1zw6t0")},m(A,k){b(A,e,k),b(A,t,k),b(A,n,k),b(A,c,k),b(A,u,k),s(u,o),s(u,f),s(u,d),s(u,a),s(u,h),s(h,j),s(h,P),s(h,$)},p:M,i:M,o:M,d(A){A&&v(e),A&&v(t),A&&v(n),A&&v(c),A&&v(u)}}}let it=!1;class rt extends $e{constructor(e){super(),ge(this,e,null,ct,ve,{})}}const ot="/assets/icon-arcade.e118291f.svg",ut="/assets/icon-advanced.66ce2237.svg",ft="/assets/icon-pro.8d9f4718.svg",be=[];function at(l,e){return{subscribe:me(l,e).subscribe}}function me(l,e=M){let t;const n=new Set;function c(f){if(ve(l,f)&&(l=f,t)){const d=!be.length;for(const a of n)a[1](),be.push(a,l);if(d){for(let a=0;a<be.length;a+=2)be[a][0](be[a+1]);be.length=0}}}function u(f){c(f(l))}function o(f,d=M){const a=[f,d];return n.add(a),n.size===1&&(t=e(c)||M),f(l),()=>{n.delete(a),n.size===0&&(t(),t=null)}}return{set:c,update:u,subscribe:o}}let ke=me(1),je=me("arcade");at(0);let ze=me(!0),Be=me(!1),He=me(!1),Ne=me(!1);function dt(l){let e,t,n;return{c(){e=r("p"),e.textContent="$90/yr",t=_(),n=r("span"),n.textContent="2 months free",i(e,"class","svelte-yteli9"),i(n,"class","svelte-yteli9")},m(c,u){b(c,e,u),b(c,t,u),b(c,n,u)},d(c){c&&v(e),c&&v(t),c&&v(n)}}}function _t(l){let e;return{c(){e=r("p"),e.textContent="$9/mo",i(e,"class","svelte-yteli9")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function pt(l){let e,t,n;return{c(){e=r("p"),e.textContent="$120/yr",t=_(),n=r("span"),n.textContent="2 months free",i(e,"class","svelte-yteli9"),i(n,"class","svelte-yteli9")},m(c,u){b(c,e,u),b(c,t,u),b(c,n,u)},d(c){c&&v(e),c&&v(t),c&&v(n)}}}function vt(l){let e;return{c(){e=r("p"),e.textContent="$12/mo",i(e,"class","svelte-yteli9")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function mt(l){let e,t,n;return{c(){e=r("p"),e.textContent="$150/yr",t=_(),n=r("span"),n.textContent="2 months free",i(e,"class","svelte-yteli9"),i(n,"class","svelte-yteli9")},m(c,u){b(c,e,u),b(c,t,u),b(c,n,u)},d(c){c&&v(e),c&&v(t),c&&v(n)}}}function bt(l){let e;return{c(){e=r("p"),e.textContent="$15/mo",i(e,"class","svelte-yteli9")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function kt(l){let e,t,n,c,u,o,f,d,a,h,j,P,$,A,k,K,F,ne,B,H,se,U,O,E,S,z,G,N,T,te,L,J,V,Y,x,R,q,Q,I;function m(w,y){return w[1]?_t:dt}let p=m(l),g=p(l);function D(w,y){return w[1]?vt:pt}let ue=D(l),X=ue(l);function ce(w,y){return w[1]?bt:mt}let fe=ce(l),Z=fe(l);return{c(){e=r("article"),t=r("h3"),t.textContent="Select your plan",n=_(),c=r("p"),c.textContent="You have the option of monthly or yearly billing.",u=_(),o=r("div"),f=r("button"),d=r("img"),h=_(),j=r("div"),P=r("strong"),P.textContent="Arcade",$=_(),g.c(),A=_(),k=r("button"),K=r("img"),ne=_(),B=r("div"),H=r("strong"),H.textContent="Advanced",se=_(),X.c(),U=_(),O=r("button"),E=r("img"),z=_(),G=r("div"),N=r("strong"),N.textContent="Pro",T=_(),Z.c(),te=_(),L=r("div"),J=r("p"),J.textContent="Monthly",V=_(),Y=r("button"),x=r("div"),R=_(),q=r("p"),q.textContent="Yearly",i(t,"class","svelte-yteli9"),i(c,"class","description svelte-yteli9"),de(d.src,a=ot)||i(d,"src",a),i(d,"alt",""),i(P,"class","svelte-yteli9"),i(j,"class","svelte-yteli9"),i(f,"class","boxOption svelte-yteli9"),C(f,"selected",l[0]==="arcade"),de(K.src,F=ut)||i(K,"src",F),i(K,"alt",""),i(H,"class","svelte-yteli9"),i(B,"class","svelte-yteli9"),i(k,"class","boxOption svelte-yteli9"),C(k,"selected",l[0]==="advanced"),de(E.src,S=ft)||i(E,"src",S),i(E,"alt",""),i(N,"class","svelte-yteli9"),i(G,"class","svelte-yteli9"),i(O,"class","boxOption svelte-yteli9"),C(O,"selected",l[0]==="pro"),i(o,"class","optionContainer svelte-yteli9"),i(J,"class","svelte-yteli9"),C(J,"selected",l[1]),i(x,"class","circle svelte-yteli9"),C(x,"right",!l[1]),i(Y,"class","swtich svelte-yteli9"),i(q,"class","svelte-yteli9"),C(q,"selected",!l[1]),i(L,"class","switchContainer svelte-yteli9")},m(w,y){b(w,e,y),s(e,t),s(e,n),s(e,c),s(e,u),s(e,o),s(o,f),s(f,d),s(f,h),s(f,j),s(j,P),s(j,$),g.m(j,null),s(o,A),s(o,k),s(k,K),s(k,ne),s(k,B),s(B,H),s(B,se),X.m(B,null),s(o,U),s(o,O),s(O,E),s(O,z),s(O,G),s(G,N),s(G,T),Z.m(G,null),s(e,te),s(e,L),s(L,J),s(L,V),s(L,Y),s(Y,x),s(L,R),s(L,q),Q||(I=[re(f,"click",l[2]),re(k,"click",l[3]),re(O,"click",l[4]),re(Y,"click",l[5])],Q=!0)},p(w,[y]){p!==(p=m(w))&&(g.d(1),g=p(w),g&&(g.c(),g.m(j,null))),y&1&&C(f,"selected",w[0]==="arcade"),ue!==(ue=D(w))&&(X.d(1),X=ue(w),X&&(X.c(),X.m(B,null))),y&1&&C(k,"selected",w[0]==="advanced"),fe!==(fe=ce(w))&&(Z.d(1),Z=fe(w),Z&&(Z.c(),Z.m(G,null))),y&1&&C(O,"selected",w[0]==="pro"),y&2&&C(J,"selected",w[1]),y&2&&C(x,"right",!w[1]),y&2&&C(q,"selected",!w[1])},i:M,o:M,d(w){w&&v(e),g.d(),X.d(),Z.d(),Q=!1,pe(I)}}}function yt(l,e,t){let n,c;return ee(l,je,a=>t(0,n=a)),ee(l,ze,a=>t(1,c=a)),[n,c,()=>{ie(je,n="arcade",n)},()=>{ie(je,n="advanced",n)},()=>{ie(je,n="pro",n)},()=>{ie(ze,c=!c,c)}]}class ht extends $e{constructor(e){super(),ge(this,e,yt,kt,ve,{})}}const Te="/assets/icon-checkmark.20a2d5c8.svg";function gt(l){let e;return{c(){e=r("p"),e.textContent="+$10/yr",i(e,"class","price svelte-ci3q2t")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function $t(l){let e;return{c(){e=r("p"),e.textContent="+$1/mo",i(e,"class","price svelte-ci3q2t")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function Ct(l){let e;return{c(){e=r("p"),e.textContent="+$20/yr",i(e,"class","price svelte-ci3q2t")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function jt(l){let e;return{c(){e=r("p"),e.textContent="+$2/mo",i(e,"class","price svelte-ci3q2t")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function wt(l){let e;return{c(){e=r("p"),e.textContent="+$20/yr",i(e,"class","price svelte-ci3q2t")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function At(l){let e;return{c(){e=r("p"),e.textContent="+$2/mo",i(e,"class","price svelte-ci3q2t")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function St(l){let e,t,n,c,u,o,f,d,a,h,j,P,$,A,k,K,F,ne,B,H,se,U,O,E,S,z,G,N,T,te,L;function J(p,g){return p[1]?$t:gt}let V=J(l),Y=V(l);function x(p,g){return p[1]?jt:Ct}let R=x(l),q=R(l);function Q(p,g){return p[1]?At:wt}let I=Q(l),m=I(l);return{c(){e=r("article"),t=r("h3"),t.textContent="Pick add-ons",n=_(),c=r("p"),c.textContent="Add-ons help enhance your gaming experience.",u=_(),o=r("div"),f=r("button"),d=r("div"),a=r("img"),j=_(),P=r("div"),P.innerHTML=`<strong class="svelte-ci3q2t">Online service</strong> 
				<p class="svelte-ci3q2t">Access to multiplayer games</p>`,$=_(),Y.c(),A=_(),k=r("button"),K=r("div"),F=r("img"),B=_(),H=r("div"),H.innerHTML=`<strong class="svelte-ci3q2t">Larger storage</strong> 
				<p class="svelte-ci3q2t">Extra 1TB of cloud save</p>`,se=_(),q.c(),U=_(),O=r("button"),E=r("div"),S=r("img"),G=_(),N=r("div"),N.innerHTML=`<strong class="svelte-ci3q2t">Customizable profile</strong> 
				<p class="svelte-ci3q2t">Custom theme on your profile</p>`,T=_(),m.c(),i(t,"class","svelte-ci3q2t"),i(c,"class","description svelte-ci3q2t"),de(a.src,h=Te)||i(a,"src",h),i(a,"alt",""),i(d,"class","checkBox svelte-ci3q2t"),C(d,"selected",l[0]),i(P,"class","info svelte-ci3q2t"),i(f,"class","addOnOption svelte-ci3q2t"),C(f,"selected",l[0]),de(F.src,ne=Te)||i(F,"src",ne),i(F,"alt",""),i(K,"class","checkBox svelte-ci3q2t"),C(K,"selected",l[2]),i(H,"class","info svelte-ci3q2t"),i(k,"class","addOnOption svelte-ci3q2t"),C(k,"selected",l[2]),de(S.src,z=Te)||i(S,"src",z),i(S,"alt",""),i(E,"class","checkBox svelte-ci3q2t"),C(E,"selected",l[3]),i(N,"class","info svelte-ci3q2t"),i(O,"class","addOnOption svelte-ci3q2t"),C(O,"selected",l[3]),i(o,"class","addOnContainer svelte-ci3q2t")},m(p,g){b(p,e,g),s(e,t),s(e,n),s(e,c),s(e,u),s(e,o),s(o,f),s(f,d),s(d,a),s(f,j),s(f,P),s(f,$),Y.m(f,null),s(o,A),s(o,k),s(k,K),s(K,F),s(k,B),s(k,H),s(k,se),q.m(k,null),s(o,U),s(o,O),s(O,E),s(E,S),s(O,G),s(O,N),s(O,T),m.m(O,null),te||(L=[re(f,"click",l[4]),re(k,"click",l[5]),re(O,"click",l[6])],te=!0)},p(p,[g]){g&1&&C(d,"selected",p[0]),V!==(V=J(p))&&(Y.d(1),Y=V(p),Y&&(Y.c(),Y.m(f,null))),g&1&&C(f,"selected",p[0]),g&4&&C(K,"selected",p[2]),R!==(R=x(p))&&(q.d(1),q=R(p),q&&(q.c(),q.m(k,null))),g&4&&C(k,"selected",p[2]),g&8&&C(E,"selected",p[3]),I!==(I=Q(p))&&(m.d(1),m=I(p),m&&(m.c(),m.m(O,null))),g&8&&C(O,"selected",p[3])},i:M,o:M,d(p){p&&v(e),Y.d(),q.d(),m.d(),te=!1,pe(L)}}}function Ot(l,e,t){let n,c,u,o;return ee(l,Be,h=>t(0,n=h)),ee(l,ze,h=>t(1,c=h)),ee(l,He,h=>t(2,u=h)),ee(l,Ne,h=>t(3,o=h)),[n,c,u,o,()=>{ie(Be,n=!n,n)},()=>{ie(He,u=!u,u)},()=>{ie(Ne,o=!o,o)}]}class qt extends $e{constructor(e){super(),ge(this,e,Ot,St,ve,{})}}function It(l){let e;return{c(){e=W("(Yearly)")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function zt(l){let e;return{c(){e=W("(Monthly)")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function Lt(l){let e;return{c(){e=W("yr")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function Pt(l){let e;return{c(){e=W("mo")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function De(l){let e,t,n;function c(f,d){return f[2]?Et:Tt}let u=c(l),o=u(l);return{c(){e=r("div"),t=r("p"),t.textContent="Online Service",n=_(),o.c(),i(t,"class","svelte-1vjctvy"),i(e,"class","chosenAddOns svelte-1vjctvy")},m(f,d){b(f,e,d),s(e,t),s(e,n),o.m(e,null)},p(f,d){u!==(u=c(f))&&(o.d(1),o=u(f),o&&(o.c(),o.m(e,null)))},d(f){f&&v(e),o.d()}}}function Tt(l){let e;return{c(){e=r("p"),e.textContent="+$10/yr",i(e,"class","svelte-1vjctvy")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function Et(l){let e;return{c(){e=r("p"),e.textContent="+$1/mo",i(e,"class","svelte-1vjctvy")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function We(l){let e,t,n;function c(f,d){return f[2]?Bt:Mt}let u=c(l),o=u(l);return{c(){e=r("div"),t=r("p"),t.textContent="Larger Storage",n=_(),o.c(),i(t,"class","svelte-1vjctvy"),i(e,"class","chosenAddOns svelte-1vjctvy")},m(f,d){b(f,e,d),s(e,t),s(e,n),o.m(e,null)},p(f,d){u!==(u=c(f))&&(o.d(1),o=u(f),o&&(o.c(),o.m(e,null)))},d(f){f&&v(e),o.d()}}}function Mt(l){let e;return{c(){e=r("p"),e.textContent="+$20/yr",i(e,"class","svelte-1vjctvy")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function Bt(l){let e;return{c(){e=r("p"),e.textContent="+$2/mo",i(e,"class","svelte-1vjctvy")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function Ge(l){let e,t,n;function c(f,d){return f[2]?Nt:Ht}let u=c(l),o=u(l);return{c(){e=r("div"),t=r("p"),t.textContent="Customizable Profile",n=_(),o.c(),i(t,"class","svelte-1vjctvy"),i(e,"class","chosenAddOns svelte-1vjctvy")},m(f,d){b(f,e,d),s(e,t),s(e,n),o.m(e,null)},p(f,d){u!==(u=c(f))&&(o.d(1),o=u(f),o&&(o.c(),o.m(e,null)))},d(f){f&&v(e),o.d()}}}function Ht(l){let e;return{c(){e=r("p"),e.textContent="+$20/yr",i(e,"class","svelte-1vjctvy")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function Nt(l){let e;return{c(){e=r("p"),e.textContent="+$2/mo",i(e,"class","svelte-1vjctvy")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function Yt(l){let e;return{c(){e=W("(per year)")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function xt(l){let e;return{c(){e=W("(per month)")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function Kt(l){let e;return{c(){e=W("yr")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function Ft(l){let e;return{c(){e=W("mo")},m(t,n){b(t,e,n)},d(t){t&&v(e)}}}function Dt(l){let e,t,n,c,u,o,f,d,a,h,j,P,$,A,k,K,F,ne,B,H,se,U,O,E,S,z,G,N,T,te,L,J,V,Y;function x(y,le){return y[2]?zt:It}let R=x(l),q=R(l);function Q(y,le){return y[2]?Pt:Lt}let I=Q(l),m=I(l),p=l[5]&&De(l),g=l[4]&&We(l),D=l[3]&&Ge(l);function ue(y,le){return y[2]?xt:Yt}let X=ue(l),ce=X(l);function fe(y,le){return y[2]?Ft:Kt}let Z=fe(l),w=Z(l);return{c(){e=r("article"),t=r("h3"),t.textContent="Finishing up",n=_(),c=r("p"),c.textContent="Double-check everything looks OK before confirming.",u=_(),o=r("div"),f=r("div"),d=r("div"),a=r("p"),h=W(l[6]),j=_(),q.c(),P=_(),$=r("button"),$.textContent="Change",A=_(),k=r("strong"),K=W("$"),F=W(l[0]),ne=W("/"),m.c(),B=_(),H=r("div"),se=_(),p&&p.c(),U=_(),g&&g.c(),O=_(),D&&D.c(),E=_(),S=r("div"),z=r("p"),G=W("Total "),ce.c(),N=_(),T=r("p"),te=W("$"),L=W(l[1]),J=W("/"),w.c(),i(t,"class","svelte-1vjctvy"),i(c,"class","description svelte-1vjctvy"),i(a,"class","svelte-1vjctvy"),i($,"class","svelte-1vjctvy"),i(k,"class","svelte-1vjctvy"),i(f,"class","chosenPlan svelte-1vjctvy"),i(H,"class","line svelte-1vjctvy"),i(o,"class","subscription svelte-1vjctvy"),i(z,"class","svelte-1vjctvy"),i(T,"class","totalPrice svelte-1vjctvy"),i(S,"class","totalContainer svelte-1vjctvy")},m(y,le){b(y,e,le),s(e,t),s(e,n),s(e,c),s(e,u),s(e,o),s(o,f),s(f,d),s(d,a),s(a,h),s(a,j),q.m(a,null),s(d,P),s(d,$),s(f,A),s(f,k),s(k,K),s(k,F),s(k,ne),m.m(k,null),s(o,B),s(o,H),s(o,se),p&&p.m(o,null),s(o,U),g&&g.m(o,null),s(o,O),D&&D.m(o,null),s(e,E),s(e,S),s(S,z),s(z,G),ce.m(z,null),s(S,N),s(S,T),s(T,te),s(T,L),s(T,J),w.m(T,null),V||(Y=re($,"click",l[8]),V=!0)},p(y,[le]){le&64&&Le(h,y[6]),R!==(R=x(y))&&(q.d(1),q=R(y),q&&(q.c(),q.m(a,null))),le&1&&Le(F,y[0]),I!==(I=Q(y))&&(m.d(1),m=I(y),m&&(m.c(),m.m(k,null))),y[5]?p?p.p(y,le):(p=De(y),p.c(),p.m(o,U)):p&&(p.d(1),p=null),y[4]?g?g.p(y,le):(g=We(y),g.c(),g.m(o,O)):g&&(g.d(1),g=null),y[3]?D?D.p(y,le):(D=Ge(y),D.c(),D.m(o,null)):D&&(D.d(1),D=null),X!==(X=ue(y))&&(ce.d(1),ce=X(y),ce&&(ce.c(),ce.m(z,null))),le&2&&Le(L,y[1]),Z!==(Z=fe(y))&&(w.d(1),w=Z(y),w&&(w.c(),w.m(T,null)))},i:M,o:M,d(y){y&&v(e),q.d(),m.d(),p&&p.d(),g&&g.d(),D&&D.d(),ce.d(),w.d(),V=!1,Y()}}}function Wt(l,e,t){let n,c,u,o,f,d;ee(l,ze,$=>t(2,n=$)),ee(l,Ne,$=>t(3,c=$)),ee(l,He,$=>t(4,u=$)),ee(l,Be,$=>t(5,o=$)),ee(l,je,$=>t(6,f=$)),ee(l,ke,$=>t(7,d=$));let a=0,h=0,j=0;return f==="arcade"?a=9:f==="advanced"?a=12:f==="pro"&&(a=15),o&&(h+=1),u&&(h+=2),c&&(h+=2),n||(a=a*10,h=h*10),j=a+h,[a,j,n,c,u,o,f,d,()=>{ie(ke,d=2,d)}]}class Gt extends $e{constructor(e){super(),ge(this,e,Wt,Dt,ve,{})}}const Jt="/assets/icon-thank-you.56c10800.svg";function Qt(l){let e,t,n,c,u,o,f;return{c(){e=r("article"),t=r("img"),c=_(),u=r("h3"),u.textContent="Thank you!",o=_(),f=r("p"),f.textContent="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.",de(t.src,n=Jt)||i(t,"src",n),i(t,"alt",""),i(t,"class","svelte-wiu6wt"),i(u,"class","svelte-wiu6wt"),i(f,"class","svelte-wiu6wt"),i(e,"class","svelte-wiu6wt")},m(d,a){b(d,e,a),s(e,t),s(e,c),s(e,u),s(e,o),s(e,f)},p:M,i:M,o:M,d(d){d&&v(e)}}}class Rt extends $e{constructor(e){super(),ge(this,e,null,Qt,ve,{})}}function Ut(l){let e,t;return e=new Rt({}),{c(){Ae(e.$$.fragment)},m(n,c){ye(e,n,c),t=!0},i(n){t||(oe(e.$$.fragment,n),t=!0)},o(n){_e(e.$$.fragment,n),t=!1},d(n){he(e,n)}}}function Vt(l){let e,t;return e=new Gt({}),{c(){Ae(e.$$.fragment)},m(n,c){ye(e,n,c),t=!0},i(n){t||(oe(e.$$.fragment,n),t=!0)},o(n){_e(e.$$.fragment,n),t=!1},d(n){he(e,n)}}}function Xt(l){let e,t;return e=new qt({}),{c(){Ae(e.$$.fragment)},m(n,c){ye(e,n,c),t=!0},i(n){t||(oe(e.$$.fragment,n),t=!0)},o(n){_e(e.$$.fragment,n),t=!1},d(n){he(e,n)}}}function Zt(l){let e,t;return e=new ht({}),{c(){Ae(e.$$.fragment)},m(n,c){ye(e,n,c),t=!0},i(n){t||(oe(e.$$.fragment,n),t=!0)},o(n){_e(e.$$.fragment,n),t=!1},d(n){he(e,n)}}}function el(l){let e,t;return e=new rt({}),{c(){Ae(e.$$.fragment)},m(n,c){ye(e,n,c),t=!0},i(n){t||(oe(e.$$.fragment,n),t=!0)},o(n){_e(e.$$.fragment,n),t=!1},d(n){he(e,n)}}}function tl(l){let e,t,n;return{c(){e=r("button"),e.textContent="confirm",i(e,"class","nextButton confirm svelte-1ju653k")},m(c,u){b(c,e,u),t||(n=re(e,"click",l[3]),t=!0)},p:M,d(c){c&&v(e),t=!1,n()}}}function ll(l){let e,t,n;return{c(){e=r("button"),e.textContent="next step",i(e,"class","nextButton svelte-1ju653k")},m(c,u){b(c,e,u),t||(n=re(e,"click",l[2]),t=!0)},p:M,d(c){c&&v(e),t=!1,n()}}}function nl(l){let e,t,n,c,u,o,f,d,a,h,j,P,$,A,k,K,F,ne,B,H,se,U,O,E,S,z,G,N,T,te,L,J,V;const Y=[el,Zt,Xt,Vt,Ut],x=[];function R(m,p){return m[0]===1?0:m[0]===2?1:m[0]===3?2:m[0]===4?3:m[0]===5?4:-1}~(S=R(l))&&(z=x[S]=Y[S](l));function q(m,p){if(m[0]<4)return ll;if(m[0]===4)return tl}let Q=q(l),I=Q&&Q(l);return{c(){e=r("main"),t=r("aside"),n=r("div"),c=r("div"),u=r("button"),u.textContent="1",o=_(),f=r("div"),f.innerHTML=`<p class="svelte-1ju653k">step 1</p> 
					<b class="svelte-1ju653k">your info</b>`,d=_(),a=r("div"),h=r("button"),h.textContent="2",j=_(),P=r("div"),P.innerHTML=`<p class="svelte-1ju653k">step 2</p> 
					<b class="svelte-1ju653k">select plan</b>`,$=_(),A=r("div"),k=r("button"),k.textContent="3",K=_(),F=r("div"),F.innerHTML=`<p class="svelte-1ju653k">step 3</p> 
					<b class="svelte-1ju653k">add-ons</b>`,ne=_(),B=r("div"),H=r("button"),H.textContent="4",se=_(),U=r("div"),U.innerHTML=`<p class="svelte-1ju653k">step 4</p> 
					<b class="svelte-1ju653k">summary</b>`,O=_(),E=r("div"),z&&z.c(),G=_(),N=r("footer"),T=r("button"),T.textContent="go back",te=_(),I&&I.c(),i(u,"class","stepButton svelte-1ju653k"),C(u,"selected",l[0]===1),i(f,"class","stepText svelte-1ju653k"),i(c,"class","stepContainer svelte-1ju653k"),i(h,"class","stepButton svelte-1ju653k"),C(h,"selected",l[0]===2),i(P,"class","stepText svelte-1ju653k"),i(a,"class","stepContainer svelte-1ju653k"),i(k,"class","stepButton svelte-1ju653k"),C(k,"selected",l[0]===3),i(F,"class","stepText svelte-1ju653k"),i(A,"class","stepContainer svelte-1ju653k"),i(H,"class","stepButton svelte-1ju653k"),C(H,"selected",l[0]>=4),i(U,"class","stepText svelte-1ju653k"),i(B,"class","stepContainer svelte-1ju653k"),i(n,"class","overAllStep svelte-1ju653k"),i(t,"class","svelte-1ju653k"),i(E,"class","formContainer svelte-1ju653k"),i(T,"class","previousButton svelte-1ju653k"),C(T,"show",l[0]>1&&l[0]<4),i(N,"class","svelte-1ju653k"),i(e,"class","svelte-1ju653k")},m(m,p){b(m,e,p),s(e,t),s(t,n),s(n,c),s(c,u),s(c,o),s(c,f),s(n,d),s(n,a),s(a,h),s(a,j),s(a,P),s(n,$),s(n,A),s(A,k),s(A,K),s(A,F),s(n,ne),s(n,B),s(B,H),s(B,se),s(B,U),s(e,O),s(e,E),~S&&x[S].m(E,null),s(e,G),s(e,N),s(N,T),s(N,te),I&&I.m(N,null),L=!0,J||(V=re(T,"click",l[1]),J=!0)},p(m,[p]){(!L||p&1)&&C(u,"selected",m[0]===1),(!L||p&1)&&C(h,"selected",m[0]===2),(!L||p&1)&&C(k,"selected",m[0]===3),(!L||p&1)&&C(H,"selected",m[0]>=4);let g=S;S=R(m),S!==g&&(z&&(lt(),_e(x[g],1,1,()=>{x[g]=null}),nt()),~S?(z=x[S],z||(z=x[S]=Y[S](m),z.c()),oe(z,1),z.m(E,null)):z=null),(!L||p&1)&&C(T,"show",m[0]>1&&m[0]<4),Q===(Q=q(m))&&I?I.p(m,p):(I&&I.d(1),I=Q&&Q(m),I&&(I.c(),I.m(N,null)))},i(m){L||(oe(z),L=!0)},o(m){_e(z),L=!1},d(m){m&&v(e),~S&&x[S].d(),I&&I.d(),J=!1,V()}}}function sl(l,e,t){let n;return ee(l,ke,f=>t(0,n=f)),[n,()=>{ie(ke,n--,n)},()=>{n<4&&ie(ke,n++,n)},()=>{ie(ke,n++,n)}]}class cl extends $e{constructor(e){super(),ge(this,e,sl,nl,ve,{})}}new cl({target:document.getElementById("app")});
