import{d as h,ap as k,aq as f,c as m,e as g,f as o,n as l,E as e,aj as n,g as v,h as r,ak as b,bB as y,a3 as $,ai as C,w as i,a$ as w,bC as x,bD as N,aX as A}from"./BeUWS2vo.js";const U={class:"relative"},B=h({inheritAttrs:!1,__name:"Aside",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(c){const p={wrapper:"hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] py-8 lg:px-4 lg:-mx-4",top:{wrapper:"sticky -top-8 -mt-8 pointer-events-none z-[1]",header:"h-8 bg-background -mx-4 px-4",body:"bg-background relative pointer-events-auto flex -mx-4 px-4",footer:"h-8 bg-gradient-to-b from-background -mx-4 px-4"}},t=c,{ui:s,attrs:d}=k("aside",f(t,"ui"),p,f(t,"class"),!0);return(a,_)=>{const u=y;return m(),g("aside",b({class:e(s).wrapper},e(d)),[o("div",U,[a.$slots.top?(m(),g("div",{key:0,class:l(e(s).top.wrapper)},[o("div",{class:l(e(s).top.header)},null,2),o("div",{class:l(e(s).top.body)},[n(a.$slots,"top")],2),o("div",{class:l(e(s).top.footer)},null,2)],2)):v("",!0),n(a.$slots,"links",{},()=>[r(u,{links:c.links},null,8,["links"])]),n(a.$slots,"default"),n(a.$slots,"bottom")])],16)}}}),V=h({__name:"docs",setup(c){const p=$("navigation");return(t,s)=>{const d=N,a=B,_=A,u=w;return m(),C(u,null,{default:i(()=>[r(_,null,{left:i(()=>[r(a,null,{default:i(()=>[r(d,{links:("mapContentNavigation"in t?t.mapContentNavigation:e(x))(e(p))},null,8,["links"])]),_:1})]),default:i(()=>[n(t.$slots,"default")]),_:3})]),_:3})}}});export{V as default};
