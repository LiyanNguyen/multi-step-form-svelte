(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function N(){}function se(e){return e()}function te(){return Object.create(null)}function O(e){e.forEach(se)}function re(e){return typeof e=="function"}function oe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function pe(e){return Object.keys(e).length===0}function r(e,t){e.appendChild(t)}function I(e,t,n){e.insertBefore(t,n||null)}function L(e){e.parentNode&&e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function me(e){return document.createTextNode(e)}function m(){return me(" ")}function A(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function c(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function he(e){return Array.from(e.childNodes)}function b(e,t,n){e.classList[n?"add":"remove"](t)}let R;function M(e){R=e}const B=[],ne=[],q=[],le=[],_e=Promise.resolve();let J=!1;function ve(){J||(J=!0,_e.then(ce))}function Q(e){q.push(e)}const G=new Set;let K=0;function ce(){const e=R;do{for(;K<B.length;){const t=B[K];K++,M(t),ge(t.$$)}for(M(null),B.length=0,K=0;ne.length;)ne.pop()();for(let t=0;t<q.length;t+=1){const n=q[t];G.has(n)||(G.add(n),n())}q.length=0}while(B.length);for(;le.length;)le.pop()();J=!1,G.clear(),M(e)}function ge(e){if(e.fragment!==null){e.update(),O(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Q)}}const F=new Set;let be;function ie(e,t){e&&e.i&&(F.delete(e),e.i(t))}function ye(e,t,n,l){if(e&&e.o){if(F.has(e))return;F.add(e),be.c.push(()=>{F.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function $e(e){e&&e.c()}function ue(e,t,n,l){const{fragment:s,after_update:o}=e.$$;s&&s.m(t,n),l||Q(()=>{const f=e.$$.on_mount.map(se).filter(re);e.$$.on_destroy?e.$$.on_destroy.push(...f):O(f),e.$$.on_mount=[]}),o.forEach(Q)}function ae(e,t){const n=e.$$;n.fragment!==null&&(O(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ze(e,t){e.$$.dirty[0]===-1&&(B.push(e),ve(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function fe(e,t,n,l,s,o,f,y=[-1]){const h=R;M(e);const i=e.$$={fragment:null,ctx:[],props:o,update:N,not_equal:s,bound:te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:te(),dirty:y,skip_bound:!1,root:t.target||h.$$.root};f&&f(i.root);let d=!1;if(i.ctx=n?n(e,t.props||{},(p,$,..._)=>{const a=_.length?_[0]:$;return i.ctx&&s(i.ctx[p],i.ctx[p]=a)&&(!i.skip_bound&&i.bound[p]&&i.bound[p](a),d&&ze(e,p)),$}):[],i.update(),d=!0,O(i.before_update),i.fragment=l?l(i.ctx):!1,t.target){if(t.hydrate){const p=he(t.target);i.fragment&&i.fragment.l(p),p.forEach(L)}else i.fragment&&i.fragment.c();t.intro&&ie(e.$$.fragment),ue(e,t.target,t.anchor,t.customElement),ce()}M(h)}class de{$destroy(){ae(this,1),this.$destroy=N}$on(t,n){if(!re(n))return N;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(t){this.$$set&&!pe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ke(e){let t,n,l,s,o,f,y,h,i,d,p,$,_;return{c(){t=u("h3"),t.textContent="Personal Info",n=m(),l=u("p"),l.textContent="Please provide your name, email address, and phone number.",s=m(),o=u("form"),f=u("div"),f.innerHTML=`<label for="nameInput" class="svelte-c7ehr3">Name</label> 
		<input type="text" id="nameInput" placeholder="e.g. Stephen King" class="svelte-c7ehr3"/>`,y=m(),h=u("div"),h.innerHTML=`<label for="emailInput" class="svelte-c7ehr3">Email Address</label> 
		<input type="email" id="emailInput" placeholder="e.g. stephenking@lorem.com" class="svelte-c7ehr3"/>`,i=m(),d=u("div"),p=u("label"),p.textContent="Phone Number",$=m(),_=u("input"),c(t,"class","svelte-c7ehr3"),c(l,"class","svelte-c7ehr3"),c(f,"class","svelte-c7ehr3"),c(h,"class","svelte-c7ehr3"),c(p,"for","phoneInput"),c(p,"class","svelte-c7ehr3"),c(_,"type","number"),c(_,"id","phoneInput"),c(_,"placeholder","e.g. +1 234 567 890"),c(_,"class","svelte-c7ehr3"),b(_,"error",xe),c(d,"class","svelte-c7ehr3"),c(o,"class","svelte-c7ehr3")},m(a,v){I(a,t,v),I(a,n,v),I(a,l,v),I(a,s,v),I(a,o,v),r(o,f),r(o,y),r(o,h),r(o,i),r(o,d),r(d,p),r(d,$),r(d,_)},p:N,i:N,o:N,d(a){a&&L(t),a&&L(n),a&&L(l),a&&L(s),a&&L(o)}}}let xe=!1;class Ce extends de{constructor(t){super(),fe(this,t,null,ke,oe,{})}}function Le(e){let t,n,l,s,o,f,y,h,i,d,p,$,_,a,v,U,H,V,w,k,W,P,X,j,E,Y,T,x,Z,S,z,D,ee;return E=new Ce({}),{c(){t=u("main"),n=u("aside"),l=u("div"),s=u("div"),o=u("button"),o.textContent="1",f=m(),y=u("div"),y.innerHTML=`<p class="svelte-zl8pm0">step 1</p> 
          <b class="svelte-zl8pm0">your info</b>`,h=m(),i=u("div"),d=u("button"),d.textContent="2",p=m(),$=u("div"),$.innerHTML=`<p class="svelte-zl8pm0">step 2</p> 
          <b class="svelte-zl8pm0">select plan</b>`,_=m(),a=u("div"),v=u("button"),v.textContent="3",U=m(),H=u("div"),H.innerHTML=`<p class="svelte-zl8pm0">step 3</p> 
          <b class="svelte-zl8pm0">add-ons</b>`,V=m(),w=u("div"),k=u("button"),k.textContent="4",W=m(),P=u("div"),P.innerHTML=`<p class="svelte-zl8pm0">step 4</p> 
          <b class="svelte-zl8pm0">summary</b>`,X=m(),j=u("div"),$e(E.$$.fragment),Y=m(),T=u("footer"),x=u("button"),x.textContent="go back",Z=m(),S=u("button"),S.textContent="next step",c(o,"class","stepButton svelte-zl8pm0"),b(o,"selected",e[0]===1),c(y,"class","stepText svelte-zl8pm0"),c(s,"class","stepContainer svelte-zl8pm0"),c(d,"class","stepButton svelte-zl8pm0"),b(d,"selected",e[0]===2),c($,"class","stepText svelte-zl8pm0"),c(i,"class","stepContainer svelte-zl8pm0"),c(v,"class","stepButton svelte-zl8pm0"),b(v,"selected",e[0]===3),c(H,"class","stepText svelte-zl8pm0"),c(a,"class","stepContainer svelte-zl8pm0"),c(k,"class","stepButton svelte-zl8pm0"),b(k,"selected",e[0]===4),c(P,"class","stepText svelte-zl8pm0"),c(w,"class","stepContainer svelte-zl8pm0"),c(l,"class","overAllStep svelte-zl8pm0"),c(n,"class","svelte-zl8pm0"),c(j,"class","formContainer svelte-zl8pm0"),c(x,"class","previousButton svelte-zl8pm0"),b(x,"show",e[0]>1),c(S,"class","nextButton svelte-zl8pm0"),c(T,"class","svelte-zl8pm0"),c(t,"class","svelte-zl8pm0")},m(g,C){I(g,t,C),r(t,n),r(n,l),r(l,s),r(s,o),r(s,f),r(s,y),r(l,h),r(l,i),r(i,d),r(i,p),r(i,$),r(l,_),r(l,a),r(a,v),r(a,U),r(a,H),r(l,V),r(l,w),r(w,k),r(w,W),r(w,P),r(t,X),r(t,j),ue(E,j,null),r(t,Y),r(t,T),r(T,x),r(T,Z),r(T,S),z=!0,D||(ee=[A(o,"click",e[1]),A(d,"click",e[2]),A(v,"click",e[3]),A(k,"click",e[4]),A(x,"click",e[5]),A(S,"click",e[6])],D=!0)},p(g,[C]){(!z||C&1)&&b(o,"selected",g[0]===1),(!z||C&1)&&b(d,"selected",g[0]===2),(!z||C&1)&&b(v,"selected",g[0]===3),(!z||C&1)&&b(k,"selected",g[0]===4),(!z||C&1)&&b(x,"show",g[0]>1)},i(g){z||(ie(E.$$.fragment,g),z=!0)},o(g){ye(E.$$.fragment,g),z=!1},d(g){g&&L(t),ae(E),D=!1,O(ee)}}}function we(e,t,n){let l=1;return[l,()=>{n(0,l=1)},()=>{n(0,l=2)},()=>{n(0,l=3)},()=>{n(0,l=4)},()=>{n(0,l--,l)},()=>{n(0,l++,l)}]}class Ee extends de{constructor(t){super(),fe(this,t,we,Le,oe,{})}}new Ee({target:document.getElementById("app")});
