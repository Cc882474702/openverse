import{_ as $}from"./H-yXjwn7.js";import{u as w,_ as T,a as x}from"./SUQ46Q_B.js";import{u as V}from"./BOCIT4X8.js";import{u as k,S as y}from"./cbNq9jmL.js";import{u as b}from"./lQMUZJX_.js";import{_ as N}from"./CsQIKZHD.js";import{_ as P}from"./BK7y4j1D.js";import{_ as M}from"./Cr9K-Ep6.js";import{u as F}from"./CyecUNdH.js";import{g as D}from"./CP4nIMOC.js";import{N as e,d as E,M as u,O as I,P as v,L as o,A,D as _,J as p,af as j,G as z,F as S,R as C,K as B}from"./3w4k60lH.js";import{V as H}from"./BohTCMpu.js";import{_ as L}from"./CjYoNcFD.js";const R="dark-mode",G="light-mode";function K(){const d=k(),l=b(),r=e(()=>l.isOn("dark_mode_ui_toggle")),s=e(()=>r.value?d.colorMode:"light"),t=e(()=>{const n=D();return n.value==="no-preference"?"light":n.value}),c=e(()=>r.value?s.value==="system"?t.value:s.value:"light"),i=e(()=>({light:G,dark:R,system:""})[s.value]);return{colorMode:s,osColorMode:t,effectiveColorMode:c,cssClass:i}}const U=E({__name:"VThemeSelect",setup(d){const l=F({useScope:"global"}),r=k(),s=Object.freeze({light:"sun",dark:"moon"}),t={light:l.t("theme.choices.light"),dark:l.t("theme.choices.dark")},c=e({get:()=>r.colorMode,set:a=>{r.setColorMode(a)}}),i=K(),n=e(()=>s[i.effectiveColorMode.value]),g=e(()=>{const a=`${l.t("theme.choices.system")} (${t[i.osColorMode.value]})`;return[{key:"light",text:t.light},{key:"dark",text:t.dark},{key:"system",text:a}]});return(a,f)=>(u(),I(L,{modelValue:c.value,"onUpdate:modelValue":f[0]||(f[0]=h=>c.value=h),"field-id":"theme",choices:g.value,"blank-text":a.$t("theme.theme"),"label-text":a.$t("theme.theme"),"show-selected":!1},{start:v(()=>[o(H,{name:n.value},null,8,["name"])]),_:1},8,["modelValue","choices","blank-text","label-text"]))}}),J={key:0,class:"logo-and-links flex flex-col gap-y-10"},W={class:"locale-and-wp flex flex-col justify-between"},X={class:"flex flex-row items-center gap-6"},me=E({__name:"VFooter",props:{mode:{},languageProps:{default:()=>({})}},setup(d){const l=d,r=k(),{all:s}=w(),t=e(()=>l.mode==="content"),c=b(),i=e(()=>c.isOn("dark_mode_ui_toggle")),n=A(null),g=y[r.breakpoint],{dimens:a}=V(n,{initialWidth:g}),f=e(()=>Object.entries(y).filter(([,m])=>a.value.width>=m).map(([m])=>`footer-${m}`)),h=e(()=>({"--link-col-height":Math.ceil(Object.keys(s).length/2)}));return(m,Z)=>{const O=$;return u(),_("footer",{ref_key:"footerEl",ref:n,class:B(["footer flex flex-col gap-10 px-6",[...f.value,t.value?"footer-content":"footer-internal"]])},[t.value?(u(),_("div",J,[o(N,{href:"/",class:"logo text-default","aria-label":"Openverse"},{default:v(()=>[o(P,{class:"text-[18px]"})]),_:1}),p("nav",null,[o(T,{class:"nav-list label-regular",style:j(h.value),"nav-link-classes":"py-2"},null,8,["style"])])])):z("",!0),p("div",W,[i.value?(u(),_(S,{key:0},[o(x,{mode:"light"}),p("div",X,[o(M,C(m.languageProps,{class:"language max-w-full border-secondary"}),null,16),o(O,null,{default:v(()=>[o(U,{class:"border-secondary"})]),_:1})])],64)):(u(),_(S,{key:1},[o(M,C(m.languageProps,{class:"language max-w-full border-secondary"}),null,16),o(x,{mode:"light"})],64))])],2)}}});export{me as _};
