(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function l(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=l(s);fetch(s.href,o)}})();function Q(){}function Se(t){return t()}function Le(){return Object.create(null)}function W(t){t.forEach(Se)}function ze(t){return typeof t=="function"}function be(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let fe;function _e(t,e){return fe||(fe=document.createElement("a")),fe.href=e,t===fe.href}function Oe(t){return Object.keys(t).length===0}function r(t,e){t.appendChild(e)}function $(t,e,l){t.insertBefore(e,l||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function Me(t){return document.createTextNode(t)}function f(){return Me(" ")}function j(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function c(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function Ne(t){return Array.from(t.childNodes)}function m(t,e,l){t.classList[l?"add":"remove"](e)}let ye;function se(t){ye=t}const ne=[],Ee=[],ae=[],Ie=[],Be=Promise.resolve();let ve=!1;function Pe(){ve||(ve=!0,Be.then(Ae))}function he(t){ae.push(t)}const me=new Set;let ue=0;function Ae(){const t=ye;do{for(;ue<ne.length;){const e=ne[ue];ue++,se(e),He(e.$$)}for(se(null),ne.length=0,ue=0;Ee.length;)Ee.pop()();for(let e=0;e<ae.length;e+=1){const l=ae[e];me.has(l)||(me.add(l),l())}ae.length=0}while(ne.length);for(;Ie.length;)Ie.pop()();ve=!1,me.clear(),se(t)}function He(t){if(t.fragment!==null){t.update(),W(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(he)}}const de=new Set;let V;function je(){V={r:0,c:[],p:V}}function qe(){V.r||W(V.c),V=V.p}function re(t,e){t&&t.i&&(de.delete(t),t.i(e))}function pe(t,e,l,n){if(t&&t.o){if(de.has(t))return;de.add(t),V.c.push(()=>{de.delete(t),n&&(l&&t.d(1),n())}),t.o(e)}else n&&n()}function Te(t){t&&t.c()}function ge(t,e,l,n){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,l),n||he(()=>{const a=t.$$.on_mount.map(Se).filter(ze);t.$$.on_destroy?t.$$.on_destroy.push(...a):W(a),t.$$.on_mount=[]}),o.forEach(he)}function ke(t,e){const l=t.$$;l.fragment!==null&&(W(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Ke(t,e){t.$$.dirty[0]===-1&&(ne.push(t),Pe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $e(t,e,l,n,s,o,a,h=[-1]){const b=ye;se(t);const u=t.$$={fragment:null,ctx:[],props:o,update:Q,not_equal:s,bound:Le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(b?b.$$.context:[])),callbacks:Le(),dirty:h,skip_bound:!1,root:e.target||b.$$.root};a&&a(u.root);let y=!1;if(u.ctx=l?l(t,e.props||{},(d,E,...w)=>{const p=w.length?w[0]:E;return u.ctx&&s(u.ctx[d],u.ctx[d]=p)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](p),y&&Ke(t,d)),E}):[],u.update(),y=!0,W(u.before_update),u.fragment=n?n(u.ctx):!1,e.target){if(e.hydrate){const d=Ne(e.target);u.fragment&&u.fragment.l(d),d.forEach(k)}else u.fragment&&u.fragment.c();e.intro&&re(t.$$.fragment),ge(t,e.target,e.anchor,e.customElement),Ae()}se(b)}class Ce{$destroy(){ke(this,1),this.$destroy=Q}$on(e,l){if(!ze(l))return Q;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const s=n.indexOf(l);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!Oe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ye(t){let e,l,n,s,o,a,h,b,u,y,d,E,w;return{c(){e=i("h3"),e.textContent="Personal Info",l=f(),n=i("p"),n.textContent="Please provide your name, email address, and phone number.",s=f(),o=i("form"),a=i("div"),a.innerHTML=`<label for="nameInput" class="svelte-1zw6t0">Name</label> 
		<input type="text" id="nameInput" placeholder="e.g. Stephen King" class="svelte-1zw6t0"/>`,h=f(),b=i("div"),b.innerHTML=`<label for="emailInput" class="svelte-1zw6t0">Email Address</label> 
		<input type="email" id="emailInput" placeholder="e.g. stephenking@lorem.com" class="svelte-1zw6t0"/>`,u=f(),y=i("div"),d=i("label"),d.textContent="Phone Number",E=f(),w=i("input"),c(e,"class","svelte-1zw6t0"),c(n,"class","svelte-1zw6t0"),c(a,"class","svelte-1zw6t0"),c(b,"class","svelte-1zw6t0"),c(d,"for","phoneInput"),c(d,"class","svelte-1zw6t0"),c(w,"type","number"),c(w,"id","phoneInput"),c(w,"placeholder","e.g. +1 234 567 890"),c(w,"class","svelte-1zw6t0"),m(w,"error",Fe),c(y,"class","svelte-1zw6t0"),c(o,"class","svelte-1zw6t0")},m(p,_){$(p,e,_),$(p,l,_),$(p,n,_),$(p,s,_),$(p,o,_),r(o,a),r(o,h),r(o,b),r(o,u),r(o,y),r(y,d),r(y,E),r(y,w)},p:Q,i:Q,o:Q,d(p){p&&k(e),p&&k(l),p&&k(n),p&&k(s),p&&k(o)}}}let Fe=!1;class De extends Ce{constructor(e){super(),$e(this,e,null,Ye,be,{})}}const Ge="/assets/icon-arcade.e118291f.svg",Je="/assets/icon-advanced.66ce2237.svg",Qe="/assets/icon-pro.8d9f4718.svg";function Re(t){let e,l,n;return{c(){e=i("p"),e.textContent="$90/yr",l=f(),n=i("span"),n.textContent="2 months free",c(e,"class","svelte-yteli9"),c(n,"class","svelte-yteli9")},m(s,o){$(s,e,o),$(s,l,o),$(s,n,o)},d(s){s&&k(e),s&&k(l),s&&k(n)}}}function Ue(t){let e;return{c(){e=i("p"),e.textContent="$9/mo",c(e,"class","svelte-yteli9")},m(l,n){$(l,e,n)},d(l){l&&k(e)}}}function Ve(t){let e,l,n;return{c(){e=i("p"),e.textContent="$120/yr",l=f(),n=i("span"),n.textContent="2 months free",c(e,"class","svelte-yteli9"),c(n,"class","svelte-yteli9")},m(s,o){$(s,e,o),$(s,l,o),$(s,n,o)},d(s){s&&k(e),s&&k(l),s&&k(n)}}}function We(t){let e;return{c(){e=i("p"),e.textContent="$12/mo",c(e,"class","svelte-yteli9")},m(l,n){$(l,e,n)},d(l){l&&k(e)}}}function Xe(t){let e,l,n;return{c(){e=i("p"),e.textContent="$150/yr",l=f(),n=i("span"),n.textContent="2 months free",c(e,"class","svelte-yteli9"),c(n,"class","svelte-yteli9")},m(s,o){$(s,e,o),$(s,l,o),$(s,n,o)},d(s){s&&k(e),s&&k(l),s&&k(n)}}}function Ze(t){let e;return{c(){e=i("p"),e.textContent="$15/mo",c(e,"class","svelte-yteli9")},m(l,n){$(l,e,n)},d(l){l&&k(e)}}}function et(t){let e,l,n,s,o,a,h,b,u,y,d,E,w,p,_,K,R,ee,I,z,te,U,A,T,C,x,B,O,P,le,S,L,X,Y,F,H,q,g,M;function Z(v,N){return v[1]?Ue:Re}let ce=Z(t),D=ce(t);function we(v,N){return v[1]?We:Ve}let ie=we(t),G=ie(t);function xe(v,N){return v[1]?Ze:Xe}let oe=xe(t),J=oe(t);return{c(){e=i("article"),l=i("h3"),l.textContent="Select your plan",n=f(),s=i("p"),s.textContent="You have the option of monthly or yearly billing.",o=f(),a=i("div"),h=i("button"),b=i("img"),y=f(),d=i("div"),E=i("strong"),E.textContent="Arcade",w=f(),D.c(),p=f(),_=i("button"),K=i("img"),ee=f(),I=i("div"),z=i("strong"),z.textContent="Advanced",te=f(),G.c(),U=f(),A=i("button"),T=i("img"),x=f(),B=i("div"),O=i("strong"),O.textContent="Pro",P=f(),J.c(),le=f(),S=i("div"),L=i("p"),L.textContent="Monthly",X=f(),Y=i("button"),F=i("div"),H=f(),q=i("p"),q.textContent="Yearly",c(l,"class","svelte-yteli9"),c(s,"class","description svelte-yteli9"),_e(b.src,u=Ge)||c(b,"src",u),c(b,"alt",""),c(E,"class","svelte-yteli9"),c(d,"class","svelte-yteli9"),c(h,"class","boxOption svelte-yteli9"),m(h,"selected",t[0]==="arcade"),_e(K.src,R=Je)||c(K,"src",R),c(K,"alt",""),c(z,"class","svelte-yteli9"),c(I,"class","svelte-yteli9"),c(_,"class","boxOption svelte-yteli9"),m(_,"selected",t[0]==="advanced"),_e(T.src,C=Qe)||c(T,"src",C),c(T,"alt",""),c(O,"class","svelte-yteli9"),c(B,"class","svelte-yteli9"),c(A,"class","boxOption svelte-yteli9"),m(A,"selected",t[0]==="pro"),c(a,"class","optionContainer svelte-yteli9"),c(L,"class","svelte-yteli9"),m(L,"selected",t[1]),c(F,"class","circle svelte-yteli9"),m(F,"right",!t[1]),c(Y,"class","swtich svelte-yteli9"),c(q,"class","svelte-yteli9"),m(q,"selected",!t[1]),c(S,"class","switchContainer svelte-yteli9")},m(v,N){$(v,e,N),r(e,l),r(e,n),r(e,s),r(e,o),r(e,a),r(a,h),r(h,b),r(h,y),r(h,d),r(d,E),r(d,w),D.m(d,null),r(a,p),r(a,_),r(_,K),r(_,ee),r(_,I),r(I,z),r(I,te),G.m(I,null),r(a,U),r(a,A),r(A,T),r(A,x),r(A,B),r(B,O),r(B,P),J.m(B,null),r(e,le),r(e,S),r(S,L),r(S,X),r(S,Y),r(Y,F),r(S,H),r(S,q),g||(M=[j(h,"click",t[2]),j(_,"click",t[3]),j(A,"click",t[4]),j(Y,"click",t[5])],g=!0)},p(v,[N]){ce!==(ce=Z(v))&&(D.d(1),D=ce(v),D&&(D.c(),D.m(d,null))),N&1&&m(h,"selected",v[0]==="arcade"),ie!==(ie=we(v))&&(G.d(1),G=ie(v),G&&(G.c(),G.m(I,null))),N&1&&m(_,"selected",v[0]==="advanced"),oe!==(oe=xe(v))&&(J.d(1),J=oe(v),J&&(J.c(),J.m(B,null))),N&1&&m(A,"selected",v[0]==="pro"),N&2&&m(L,"selected",v[1]),N&2&&m(F,"right",!v[1]),N&2&&m(q,"selected",!v[1])},i:Q,o:Q,d(v){v&&k(e),D.d(),G.d(),J.d(),g=!1,W(M)}}}function tt(t,e,l){let n="arcade",s=!0;return[n,s,()=>{l(0,n="arcade")},()=>{l(0,n="advanced")},()=>{l(0,n="pro")},()=>{l(1,s=!s)}]}class lt extends Ce{constructor(e){super(),$e(this,e,tt,et,be,{})}}function nt(t){let e,l;return e=new lt({}),{c(){Te(e.$$.fragment)},m(n,s){ge(e,n,s),l=!0},i(n){l||(re(e.$$.fragment,n),l=!0)},o(n){pe(e.$$.fragment,n),l=!1},d(n){ke(e,n)}}}function st(t){let e,l;return e=new De({}),{c(){Te(e.$$.fragment)},m(n,s){ge(e,n,s),l=!0},i(n){l||(re(e.$$.fragment,n),l=!0)},o(n){pe(e.$$.fragment,n),l=!1},d(n){ke(e,n)}}}function rt(t){let e,l,n,s,o,a,h,b,u,y,d,E,w,p,_,K,R,ee,I,z,te,U,A,T,C,x,B,O,P,le,S,L,X,Y;const F=[st,nt],H=[];function q(g,M){return g[0]===1?0:g[0]===2?1:-1}return~(C=q(t))&&(x=H[C]=F[C](t)),{c(){e=i("main"),l=i("aside"),n=i("div"),s=i("div"),o=i("button"),o.textContent="1",a=f(),h=i("div"),h.innerHTML=`<p class="svelte-hbflm1">step 1</p> 
          <b class="svelte-hbflm1">your info</b>`,b=f(),u=i("div"),y=i("button"),y.textContent="2",d=f(),E=i("div"),E.innerHTML=`<p class="svelte-hbflm1">step 2</p> 
          <b class="svelte-hbflm1">select plan</b>`,w=f(),p=i("div"),_=i("button"),_.textContent="3",K=f(),R=i("div"),R.innerHTML=`<p class="svelte-hbflm1">step 3</p> 
          <b class="svelte-hbflm1">add-ons</b>`,ee=f(),I=i("div"),z=i("button"),z.textContent="4",te=f(),U=i("div"),U.innerHTML=`<p class="svelte-hbflm1">step 4</p> 
          <b class="svelte-hbflm1">summary</b>`,A=f(),T=i("div"),x&&x.c(),B=f(),O=i("footer"),P=i("button"),P.textContent="go back",le=f(),S=i("button"),S.textContent="next step",c(o,"class","stepButton svelte-hbflm1"),m(o,"selected",t[0]===1),c(h,"class","stepText svelte-hbflm1"),c(s,"class","stepContainer svelte-hbflm1"),c(y,"class","stepButton svelte-hbflm1"),m(y,"selected",t[0]===2),c(E,"class","stepText svelte-hbflm1"),c(u,"class","stepContainer svelte-hbflm1"),c(_,"class","stepButton svelte-hbflm1"),m(_,"selected",t[0]===3),c(R,"class","stepText svelte-hbflm1"),c(p,"class","stepContainer svelte-hbflm1"),c(z,"class","stepButton svelte-hbflm1"),m(z,"selected",t[0]===4),c(U,"class","stepText svelte-hbflm1"),c(I,"class","stepContainer svelte-hbflm1"),c(n,"class","overAllStep svelte-hbflm1"),c(l,"class","svelte-hbflm1"),c(T,"class","formContainer svelte-hbflm1"),c(P,"class","previousButton svelte-hbflm1"),m(P,"show",t[0]>1),c(S,"class","nextButton svelte-hbflm1"),c(O,"class","svelte-hbflm1"),c(e,"class","svelte-hbflm1")},m(g,M){$(g,e,M),r(e,l),r(l,n),r(n,s),r(s,o),r(s,a),r(s,h),r(n,b),r(n,u),r(u,y),r(u,d),r(u,E),r(n,w),r(n,p),r(p,_),r(p,K),r(p,R),r(n,ee),r(n,I),r(I,z),r(I,te),r(I,U),r(e,A),r(e,T),~C&&H[C].m(T,null),r(e,B),r(e,O),r(O,P),r(O,le),r(O,S),L=!0,X||(Y=[j(o,"click",t[1]),j(y,"click",t[2]),j(_,"click",t[3]),j(z,"click",t[4]),j(P,"click",t[5]),j(S,"click",t[6])],X=!0)},p(g,[M]){(!L||M&1)&&m(o,"selected",g[0]===1),(!L||M&1)&&m(y,"selected",g[0]===2),(!L||M&1)&&m(_,"selected",g[0]===3),(!L||M&1)&&m(z,"selected",g[0]===4);let Z=C;C=q(g),C!==Z&&(x&&(je(),pe(H[Z],1,1,()=>{H[Z]=null}),qe()),~C?(x=H[C],x||(x=H[C]=F[C](g),x.c()),re(x,1),x.m(T,null)):x=null),(!L||M&1)&&m(P,"show",g[0]>1)},i(g){L||(re(x),L=!0)},o(g){pe(x),L=!1},d(g){g&&k(e),~C&&H[C].d(),X=!1,W(Y)}}}function ct(t,e,l){let n=1;return[n,()=>{l(0,n=1)},()=>{l(0,n=2)},()=>{l(0,n=3)},()=>{l(0,n=4)},()=>{l(0,n--,n)},()=>{n<4&&l(0,n++,n)}]}class it extends Ce{constructor(e){super(),$e(this,e,ct,rt,be,{})}}new it({target:document.getElementById("app")});
