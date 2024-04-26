import{j as e}from"./styled-components.browser.esm-D-tNovVo.js";import{I as A}from"./InputField-CkMC-4y9.js";import{I as u}from"./Input-B7v42UpU.js";import{C as f,P as v}from"./card-CBUKYh21.js";import"./index-CsdIBAqE.js";const T={title:"InputField",component:A},r={args:{title:"결제할 카드 번호를 입력해 주세요",subtitle:"본인 명의의 카드만 결제 가능합니다.",labelText:"카드 번호",labelFor:"first-card-numbers-input",children:e.jsx(e.Fragment,{children:f.map(C=>{const F=v.includes(C)?"password":"text";return e.jsx(u,{id:`${C}-card-numbers-input`,isError:!1,value:"",onChange:()=>"",onBlur:()=>"",placeholder:"1234",maxLength:4,type:F,width:"23%"},C)})})}},a={args:{title:"카드 유효기간을 입력해 주세요",subtitle:"월/년도(MMYY)를 순서대로 입력해 주세요.",labelText:"유효기간",labelFor:"card-expiry-month-input",children:e.jsxs(e.Fragment,{children:[e.jsx(u,{id:"card-expiry-month-input",isError:!1,value:"",onChange:()=>"",onBlur:()=>"",placeholder:"MM",maxLength:2,width:"48%"}),e.jsx(u,{id:"card-expiry-year-input",isError:!1,value:"",onChange:()=>"",onBlur:()=>"",placeholder:"YY",maxLength:2,width:"48%"})]})}},n={args:{title:"카드 소유자 이름 입력을 입력해 주세요",subtitle:"본인 명의의 카드만 결제 가능합니다.",labelText:"소유자 이름",labelFor:"cardholder-name-input",children:e.jsx(u,{id:"cardholder-name-input",isError:!1,value:"",onChange:()=>"",onBlur:()=>"",placeholder:"JOHN DOE",width:"100%",maxLength:100})}},t={args:{title:"CVC 번호를 입력해 주세요",labelText:"cvc",labelFor:"cvc-input",children:e.jsx(u,{id:"cvc-input",isError:!1,value:"",onChange:()=>"",onBlur:()=>"",placeholder:"123",width:"100%",maxLength:4})}},l={args:{title:"비밀번호를 입력해 주세요",subtitle:"앞의 2자리를 입력해주세요",labelText:"비밀번호 앞 2자리",labelFor:"password-input",children:e.jsx(u,{id:"password-input",isError:!1,value:"",onChange:()=>"",onBlur:()=>"",placeholder:"••",width:"100%",maxLength:100})}};var s,o,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: '결제할 카드 번호를 입력해 주세요',
    subtitle: '본인 명의의 카드만 결제 가능합니다.',
    labelText: '카드 번호',
    labelFor: 'first-card-numbers-input',
    children: <>
        {CARD_NUMBER_INDEXES.map(key => {
        const type = PASSWORD_INPUT_KEYS.includes(key) ? 'password' : 'text';
        return <Input key={key} id={\`\${key}-card-numbers-input\`} isError={false} value="" onChange={() => ''} onBlur={() => ''} placeholder="1234" maxLength={4} type={type} width="23%" />;
      })}
      </>
  }
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,c,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: '카드 유효기간을 입력해 주세요',
    subtitle: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    labelText: '유효기간',
    labelFor: 'card-expiry-month-input',
    children: <>
        <Input id="card-expiry-month-input" isError={false} value="" onChange={() => ''} onBlur={() => ''} placeholder="MM" maxLength={2} width="48%" />
        <Input id="card-expiry-year-input" isError={false} value="" onChange={() => ''} onBlur={() => ''} placeholder="YY" maxLength={2} width="48%" />
      </>
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var h,B,m;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: '카드 소유자 이름 입력을 입력해 주세요',
    subtitle: '본인 명의의 카드만 결제 가능합니다.',
    labelText: '소유자 이름',
    labelFor: 'cardholder-name-input',
    children: <Input id="cardholder-name-input" isError={false} value="" onChange={() => ''} onBlur={() => ''} placeholder="JOHN DOE" width="100%" maxLength={100} />
  }
}`,...(m=(B=n.parameters)==null?void 0:B.docs)==null?void 0:m.source}}};var x,g,E;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'CVC 번호를 입력해 주세요',
    labelText: 'cvc',
    labelFor: 'cvc-input',
    children: <Input id="cvc-input" isError={false} value="" onChange={() => ''} onBlur={() => ''} placeholder="123" width="100%" maxLength={4} />
  }
}`,...(E=(g=t.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var b,D,_;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: '비밀번호를 입력해 주세요',
    subtitle: '앞의 2자리를 입력해주세요',
    labelText: '비밀번호 앞 2자리',
    labelFor: 'password-input',
    children: <Input id="password-input" isError={false} value="" onChange={() => ''} onBlur={() => ''} placeholder="••" width="100%" maxLength={100} />
  }
}`,...(_=(D=l.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const j=["카드번호_입력_레이아웃","유효기간_입력_레이아웃","카드소유자_입력_레이아웃","CVC_입력_레이아웃","카드_비밀번호_입력_레이아웃"];export{t as CVC_입력_레이아웃,j as __namedExportsOrder,T as default,a as 유효기간_입력_레이아웃,l as 카드_비밀번호_입력_레이아웃,r as 카드번호_입력_레이아웃,n as 카드소유자_입력_레이아웃};
