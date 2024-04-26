import{u as s,j as a}from"./styled-components.browser.esm-D-tNovVo.js";import{r as t}from"./index-CsdIBAqE.js";const p=s.input`
  width: ${r=>r.width};
  padding: 10px 7px;

  border: 1.2px solid ${r=>r.$isError?"#ff3d3d":"#acacac"};
  border-radius: 5px;
  font-size: 15px;

  &::placeholder {
    color: #acacac;
  }

  &:focus {
    outline: none;
  }
`,d=t.forwardRef(({isError:r=!1,...o},e)=>a.jsx(p,{$isError:r,ref:e,...o}));d.__docgenInfo={description:"",methods:[],displayName:"Input",props:{isError:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{d as I};
