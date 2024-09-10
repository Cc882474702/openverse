import{a as w,m as F,f as V}from"./D-k7DCjt.js";import{I as s}from"./Bqqd15Vm.js";import{_ as i}from"./CUkBDyjL.js";import{h as a}from"./3w4k60lH.js";import"./CiFXGpc2.js";import"./BFSUimDm.js";import"./qyDmD4fY.js";import"./CFMQYC2y.js";import"./Dt-H8hG_.js";import"./CTON8dBl.js";import"./CP4nIMOC.js";import"./Cpj98o6Y.js";import"./Ci7G4jyV.js";import"./Xs_VBmP5.js";import"./lQMUZJX_.js";import"./ByTiJpPE.js";import"./CVtkxrq9.js";import"./D0ww02ZN.js";import"./CyecUNdH.js";import"./BSEdKPgk.js";import"./1JpoQThl.js";import"./BOX21o1p.js";import"./CsQIKZHD.js";import"./BheX1Zp4.js";import"./BohTCMpu.js";import"./Dm22SxXZ.js";import"./DlAUqK2U.js";import"./B7kYnUa5.js";const Z={title:"Components/VHeader/VFilterButton",component:i,argTypes:{pressed:{type:"boolean"},appliedFilters:{type:"number"},disabled:{type:"boolean"},onToggle:{action:"toggle"}}},g=p=>({components:{VFilterButton:i},setup(){const o=w();o.setSearchType(s);function y(T){o.clearFilters();const h=[...F[s]];let e=0,m=1;for(let n=0;n<T;n++){let l=h[m];o.toggleFilter({filterType:l,codeIdx:e}),e+=1,V[l].length===e&&(m+=1,e=0)}}return y(p.appliedFilters),()=>a("div",{class:"flex"},[a("div",{id:"wrapper",class:"px-4 h-16 bg-surface flex align-center justify-center"},[a(i,p)])])}}),t={render:g.bind({}),name:"Default",parameters:{viewport:{defaultViewport:"lg"}}},r={render:g.bind({}),name:"With text label",parameters:{viewport:{defaultViewport:"xl"}}};var d,c,f;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: "Default",
  parameters: {
    viewport: {
      defaultViewport: "lg"
    }
  }
}`,...(f=(c=t.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var u,x,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: "With text label",
  parameters: {
    viewport: {
      defaultViewport: "xl"
    }
  }
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const $=["Default","WithTextLabel"];export{t as Default,r as WithTextLabel,$ as __namedExportsOrder,Z as default};
