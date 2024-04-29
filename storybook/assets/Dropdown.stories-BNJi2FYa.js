import{j as m}from"./styled-components.browser.esm-D-tNovVo.js";import{D as n}from"./Dropdown-DmrP6Hv2.js";import{r as p}from"./index-CsdIBAqE.js";import"./card-CBUKYh21.js";const w={title:"Dropdown",component:n},e={render:o=>{const[s,u]=p.useState(""),c=l=>{const d=l.currentTarget.getAttribute("data-value")||"";u(d)};return m.jsx(n,{...o,value:s,handleSelect:c})}};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    const handleSelect = (event: React.MouseEvent<HTMLLIElement>) => {
      const newValue = event.currentTarget.getAttribute('data-value') || '';
      setValue(newValue);
    };
    return <Dropdown {...args} value={value} handleSelect={handleSelect} />;
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const x=["드랍다운"];export{x as __namedExportsOrder,w as default,e as 드랍다운};
