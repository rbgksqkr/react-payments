import{u as s,j as n}from"./styled-components.browser.esm-D-tNovVo.js";import{r as o}from"./index-CsdIBAqE.js";import{a as d}from"./card-CBUKYh21.js";const u=s.div`
  position: relative;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: #ffffff;
  align-self: center;
  border: 1px solid ${e=>e.$isOpen?"black":"#acacac"};
  cursor: pointer;
`,f=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,m=s.span`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  color: ${e=>e.$value?"black":"#acacac"};
`,x=s.ul`
  position: absolute;
  list-style: none;
  top: 45px;
  left: 0;
  width: 100%;
  height: ${e=>e.$isOpen?"306px":"0"};
  overflow: hidden;

  border-radius: 8px;
  background-color: white;
  color: black;
  border: 1px solid ${e=>e.$isOpen?"#acacac":"none"};

  transition: height 0.3s;
`,g=s.li`
  font-size: 14px;
  padding: 12px;
  color: #4f4f4f;
  transition: background-color 0.1s ease-in;
  &:hover {
    background-color: rgba(200, 200, 200, 0.4);
  }
`,h=e=>o.createElement("svg",{width:10,height:6,viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M8.63986 4.81993L4.81993 1L1 4.81993",stroke:"#acacac",strokeWidth:1.32867,strokeLinecap:"round",strokeLinejoin:"round"})),v=e=>o.createElement("svg",{width:10,height:6,viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M1.04016 0.729874L4.86009 4.5498L8.68002 0.729874",stroke:"black",strokeWidth:1.32867,strokeLinecap:"round",strokeLinejoin:"round"})),w=({value:e,handleSelect:l})=>{const[r,i]=o.useState(!1),a=o.useRef(null);return o.useEffect(()=>{const t=p=>{var c;r&&!((c=a.current)!=null&&c.contains(p.target))&&i(!1)};return document.addEventListener("click",t),()=>document.removeEventListener("click",t)},[r]),n.jsxs(u,{ref:a,$isOpen:r,onClick:()=>i(t=>!t),children:[n.jsxs(f,{children:[n.jsx(m,{$value:e,children:e||"선택해주세요"}),r?n.jsx(v,{}):n.jsx(h,{})]}),n.jsx(x,{$isOpen:r,children:r&&d.map(t=>n.jsx(g,{"data-value":t.value,onClick:l,children:t.label},t.value))})]})};w.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{value:{required:!0,tsType:{name:"string"},description:""},handleSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLLIElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};export{w as D};
