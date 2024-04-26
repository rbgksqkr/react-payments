import{u as r,j as t}from"./styled-components.browser.esm-D-tNovVo.js";import{r as n}from"./index-CsdIBAqE.js";import{a as c}from"./card-CBUKYh21.js";const l=r.div`
  position: relative;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: #ffffff;
  align-self: center;
  border: 1px solid ${e=>e.$show?"black":"#acacac"};
  cursor: pointer;
`,p=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,d=r.span`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  color: ${e=>e.$value?"black":"#acacac"};
`,u=r.ul`
  position: absolute;
  list-style: none;
  top: 45px;
  left: 0;
  width: 100%;
  overflow: hidden;

  border-radius: 8px;
  background-color: white;
  color: black;
  border: 1px solid #acacac;
`,m=r.li`
  font-size: 14px;
  padding: 12px;
  color: #4f4f4f;
  transition: background-color 0.1s ease-in;
  &:hover {
    background-color: rgba(200, 200, 200, 0.4);
  }
`,x=e=>n.createElement("svg",{width:10,height:6,viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M8.63986 4.81993L4.81993 1L1 4.81993",stroke:"#acacac",strokeWidth:1.32867,strokeLinecap:"round",strokeLinejoin:"round"})),h=e=>n.createElement("svg",{width:10,height:6,viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M1.04016 0.729874L4.86009 4.5498L8.68002 0.729874",stroke:"black",strokeWidth:1.32867,strokeLinecap:"round",strokeLinejoin:"round"})),g=({value:e,handleChange:a})=>{const[s,i]=n.useState(!1);return t.jsxs(l,{$show:s,onClick:()=>i(o=>!o),children:[t.jsxs(p,{children:[t.jsx(d,{$value:e,children:e||"선택해주세요"}),s?t.jsx(h,{}):t.jsx(x,{})]}),s&&t.jsx(u,{$show:s,children:c.map(o=>t.jsx(m,{"data-value":o.value,onClick:a,children:o.label},o.value))})]})};g.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{value:{required:!0,tsType:{name:"string"},description:""},handleChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLLIElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};export{g as D};
