import{V as p}from"./1JpoQThl.js";import{d as m,N as d,O as h,P as g,M as a,D as i,af as f,F as _,E as v,J as n,U as u,G as w,K as y}from"./3w4k60lH.js";const k={key:0,class:"absolute inset-0 flex items-center justify-center"},B=["viewBox","width"],$=["id","r","cx"],C={class:"sr-only"},F=["aria-hidden"],s=8,o=8,z=m({__name:"VShowResultsButton",props:{isFetching:{type:Boolean,default:!1}},emits:["click"],setup(V){const l=d(()=>s/2),r=d(()=>s*3+o*2);return(e,c)=>(a(),h(p,{variant:"filled-pink-8",size:"large",class:"label-bold relative ms-auto",onClick:c[0]||(c[0]=t=>e.$emit("click"))},{default:g(()=>[e.isFetching?(a(),i("span",k,[(a(),i("svg",{viewBox:`0 0 ${r.value} ${s}`,width:r.value,height:s,xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",fill:"currentColor",class:"loading motion-reduce:animate-pulse",style:f({"--spacing":`${o}px`,"--diameter":`${s}px`})},[(a(),i(_,null,v(3,t=>n("circle",{id:`dot-${t}`,key:t,r:l.value,cx:(t-1)*(o+s)+l.value,cy:"4"},null,8,$)),64))],12,B)),n("span",C,u(e.$t("header.loading")),1)])):w("",!0),n("span",{class:y({"opacity-0":e.isFetching}),"aria-hidden":e.isFetching},u(e.$t("header.seeResults")),11,F)]),_:1}))}});export{z as _};
