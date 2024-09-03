import{bt as W,bu as q,bv as b,bw as B,ar as O,bx as D,by as I,u as E,v as S,D as p,d as L,r as j,bh as k,o as C,V as F,bz as T,bi as G,bA as V,c as J,ai as Q,E as M,bc as X}from"./BeUWS2vo.js";async function Y(e,t){return await Z(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function Z(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const n={width:i.width,height:i.height,ratio:i.width/i.height};t(n)},i.onerror=n=>r(n),i.src=e})}function N(e){return t=>t?e[t]||t:e.missingValue}function K({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(s,o)=>`${s}=${o}`),t&&typeof t!="function"&&(t=N(t));const n=i||{};return Object.keys(n).forEach(s=>{typeof n[s]!="function"&&(n[s]=N(n[s]))}),(s={})=>Object.entries(s).filter(([d,c])=>typeof c<"u").map(([d,c])=>{const l=n[d];return typeof l=="function"&&(c=l(s[d])),d=typeof t=="function"?t(d):d,e(d,c)}).join(r)}function g(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function ee(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const i=Number.parseInt(r.replace("x",""));i&&t.add(i)}return Array.from(t)}function te(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function ie(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function re(e){const t={options:e},r=(n,s={})=>R(t,n,s),i=(n,s={},o={})=>r(n,{...o,modifiers:O(s,o.modifiers||{})}).url;for(const n in e.presets)i[n]=(s,o,d)=>i(s,o,{...e.presets[n],...d});return i.options=e,i.getImage=r,i.getMeta=(n,s)=>ne(t,n,s),i.getSizes=(n,s)=>ae(t,n,s),t.$img=i,i}async function ne(e,t,r){const i=R(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await Y(e,i.url)}function R(e,t,r){var l,h;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:i,defaults:n}=se(e,r.provider||e.options.provider),s=oe(e,r.preset);if(t=W(t)?t:q(t),!i.supportsAlias)for(const m in e.options.alias)t.startsWith(m)&&(t=b(e.options.alias[m],t.substr(m.length)));if(i.validateDomains&&W(t)){const m=B(t).host;if(!e.options.domains.find(w=>w===m))return{url:t}}const o=O(r,s,n);o.modifiers={...o.modifiers};const d=o.modifiers.format;(l=o.modifiers)!=null&&l.width&&(o.modifiers.width=g(o.modifiers.width)),(h=o.modifiers)!=null&&h.height&&(o.modifiers.height=g(o.modifiers.height));const c=i.getImage(t,o,e);return c.format=c.format||d||"",c}function se(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function oe(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function ae(e,t,r){var f,_,z,x,$;const i=g((f=r.modifiers)==null?void 0:f.width),n=g((_=r.modifiers)==null?void 0:_.height),s=ie(r.sizes),o=(z=r.densities)!=null&&z.trim()?ee(r.densities.trim()):e.options.densities;te(o);const d=i&&n?n/i:0,c=[],l=[];if(Object.keys(s).length>=1){for(const u in s){const v=P(u,String(s[u]),n,d,e);if(v!==void 0){c.push({size:v.size,screenMaxWidth:v.screenMaxWidth,media:`(max-width: ${v.screenMaxWidth}px)`});for(const y of o)l.push({width:v._cWidth*y,src:A(e,t,r,v,y)})}}de(c)}else for(const u of o){const v=Object.keys(s)[0];let y=P(v,String(s[v]),n,d,e);y===void 0&&(y={size:"",screenMaxWidth:0,_cWidth:(x=r.modifiers)==null?void 0:x.width,_cHeight:($=r.modifiers)==null?void 0:$.height}),l.push({width:u,src:A(e,t,r,y,u)})}ce(l);const h=l[l.length-1],m=c.length?c.map(u=>`${u.media?u.media+" ":""}${u.size}`).join(", "):void 0,w=m?"w":"x",a=l.map(u=>`${u.src} ${u.width}${w}`).join(", ");return{sizes:m,srcset:a,src:h==null?void 0:h.src}}function P(e,t,r,i,n){const s=n.options.screens&&n.options.screens[e]||Number.parseInt(e),o=t.endsWith("vw");if(!o&&/^\d+$/.test(t)&&(t=t+"px"),!o&&!t.endsWith("px"))return;let d=Number.parseInt(t);if(!s||!d)return;o&&(d=Math.round(d/100*s));const c=i?Math.round(d*i):r;return{size:t,screenMaxWidth:s,_cWidth:d,_cHeight:c}}function A(e,t,r,i,n){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*n:void 0,height:i._cHeight?i._cHeight*n:void 0},r)}function de(e){var r;e.sort((i,n)=>i.screenMaxWidth-n.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const n=e[i];n.media===t&&e.splice(i,1),t=n.media}for(let i=0;i<e.length;i++)e[i].media=((r=e[i+1])==null?void 0:r.media)||""}function ce(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const le=K({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>I(e)+"_"+I(t)}),ue=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const n=le(t)||"_";return r||(r=b(i.options.nuxt.baseURL,"/_ipx")),{url:b(r,n,D(e))}},fe=!0,ge=!0,he=Object.freeze(Object.defineProperty({__proto__:null,getImage:ue,supportsAlias:ge,validateDomains:fe},Symbol.toStringTag,{value:"Module"})),H={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};H.providers={ipxStatic:{provider:he,defaults:{}}};const U=()=>{const e=S(),t=E();return t.$img||t._img||(t._img=re({...H,nuxt:{baseURL:e.app.baseURL}}))};function me(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const ve={src:{type:String,default:void 0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:[Boolean,Object],default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},pe=e=>{const t=p(()=>({provider:e.provider,preset:e.preset})),r=p(()=>({width:g(e.width),height:g(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=U(),n=p(()=>({...e.modifiers,width:g(e.width),height:g(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:n}},ye={...ve,placeholder:{type:[Boolean,String,Number,Array],default:void 0},placeholderClass:{type:String,default:void 0}},we=L({name:"NuxtImg",props:ye,emits:["load","error"],setup:(e,t)=>{const r=U(),i=pe(e),n=j(!1),s=j(),o=p(()=>r.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:g(e.width),height:g(e.height)}})),d=p(()=>{const a={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||n.value)&&(a.sizes=o.value.sizes,a.srcset=o.value.srcset),a}),c=p(()=>{let a=e.placeholder;if(a===""&&(a=!0),!a||n.value)return!1;if(typeof a=="string")return a;const f=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return r(e.src,{...i.modifiers.value,width:f[0],height:f[1],quality:f[2]||50,blur:f[3]||3},i.options.value)}),l=p(()=>e.sizes?o.value.src:r(e.src,i.modifiers.value,i.options.value)),h=p(()=>c.value?c.value:l.value);if(e.preload){const a=Object.values(o.value).every(f=>f);k({link:[{rel:"preload",as:"image",nonce:e.nonce,...a?{href:o.value.src,imagesizes:o.value.sizes,imagesrcset:o.value.srcset}:{href:h.value},...typeof e.preload!="boolean"&&e.preload.fetchPriority?{fetchpriority:e.preload.fetchPriority}:{}}]})}const w=E().isHydrating;return C(()=>{if(c.value){const a=new Image;a.src=l.value,e.sizes&&(a.sizes=o.value.sizes||"",a.srcset=o.value.srcset),a.onload=f=>{n.value=!0,t.emit("load",f)},me("nuxt-image");return}s.value&&(s.value.complete&&w&&(s.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),s.value.onload=a=>{t.emit("load",a)},s.value.onerror=a=>{t.emit("error",a)})}),()=>F("img",{ref:s,...d.value,...t.attrs,class:e.placeholder&&!n.value?[e.placeholderClass]:void 0,src:h.value})}}),Se=L({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=S().public.mdc.useNuxtImage?we:"img",r=e,i=p(()=>{var n;if((n=r.src)!=null&&n.startsWith("/")&&!r.src.startsWith("//")){const s=T(G(S().app.baseURL));if(s!=="/"&&!r.src.startsWith(s))return V(s,r.src)}return r.src});return(n,s)=>(J(),Q(X(M(t)),{src:M(i),alt:e.alt,width:e.width,height:e.height},null,8,["src","alt","width","height"]))}});export{Se as default};
