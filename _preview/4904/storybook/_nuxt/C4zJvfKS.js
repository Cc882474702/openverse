import{u as S}from"./r1cQ15Ln.js";import{V as z,_ as C}from"./fuZ_HMJj.js";import{d as _,B as I}from"./Bqqd15Vm.js";import{a as N,i as P}from"./D-k7DCjt.js";import{V as F}from"./BohTCMpu.js";import{V as w}from"./BOEComaU.js";import{d as B,N as o,M as r,O as c,P as k,L as A,J as E,U as v,X as D,G as b,R as G,D as l,E as T,K as V,F as g,I as K}from"./3w4k60lH.js";const J=B({__name:"VSearchTypeItem",props:{item:{},isFirst:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},icon:{},useLinks:{type:Boolean,default:!0}},emits:["click"],setup(u){const s=u,p=N(),{getSearchTypeProps:m}=S({component:"VSearchTypeItem"}),t=o(()=>m(s.item).label),n=o(()=>_[s.item]===I),d=o(()=>{if(!(!s.useLinks||!P(s.item)))return p.getSearchPath({type:s.item})}),f=o(()=>s.useLinks?"VLink":void 0);return(a,e)=>(r(),c(z,G({selected:a.selected,"is-first":a.isFirst,as:f.value,class:"label-regular"},{href:d.value},{onClick:e[0]||(e[0]=L=>a.$emit("click",a.item))}),{default:k(()=>[A(F,{name:a.icon,class:"h-6 w-6"},null,8,["name"]),E("span",null,v(t.value),1),n.value?(r(),c(w,{key:0,class:"ms-auto"},{default:k(()=>[D(v(a.$t("searchType.statusBeta")),1)]),_:1})):b("",!0)]),_:1},16,["selected","is-first","as"]))}}),Q=B({__name:"VSearchTypes",props:{size:{default:"small"},useLinks:{type:Boolean,default:!0}},emits:["select"],setup(u,{emit:s}){const p=u,m=s,t=S({component:"VSearchTypes"}),n=o(()=>p.size==="medium"),d=e=>e===t.activeType.value,f=o(()=>{const e=[{heading:"heading",items:t.types}];return t.additionalTypes.value.length&&e.push({heading:"additional",items:[...t.additionalTypes.value]}),e}),a=e=>{t.setActiveType(e),m("select",e)};return(e,L)=>(r(),c(C,{direction:"vertical",size:e.size,bordered:n.value,type:"radiogroup"},{default:k(()=>[(r(!0),l(g,null,T(f.value,(y,h)=>(r(),l("div",{key:y.heading,class:V(["flex flex-col",{"border-t border-default bg-surface":h>0&&!n.value,"w-66 gap-1 py-2":e.size==="small"}])},[h!==0?(r(),l("h4",{key:0,class:V([n.value?"ps-0":"ps-6","category pb-4 pt-6"])},v(e.$t(`searchType.${y.heading}`)),3)):b("",!0),(r(!0),l(g,null,T(y.items,(i,$)=>(r(),c(J,{key:i,item:i,"is-first":h===0&&$===0,icon:K(t).icons[i],"use-links":e.useLinks,selected:d(i),onClick:M=>a(i)},null,8,["item","is-first","icon","use-links","selected","onClick"]))),128))],2))),128))]),_:1},8,["size","bordered"]))}});export{Q as _};
