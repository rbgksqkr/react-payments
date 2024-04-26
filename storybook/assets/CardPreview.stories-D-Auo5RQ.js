import{C as a}from"./CardPreview-B_QCbqRg.js";import"./styled-components.browser.esm-D-tNovVo.js";import"./index-CsdIBAqE.js";import"./card-CBUKYh21.js";const i={title:"CardPreview",component:a,argTypes:{cardNumbers:{description:"• Visa: 4로 시작하는 16자리 숫자 <br /> • MasterCard: 51~55로 시작하는 16자리 숫자",options:{default:{first:"1234",second:"1234",third:"1234",fourth:"1234"},"visa card (4로 시작)":{first:"4444",second:"4444",third:"4444",fourth:"4444"},"master card (51~55로 시작)":{first:"5555",second:"5555",third:"5555",fourth:"5555"}},control:{type:"select"}},expiryDate:{options:{"2024년 4월":{month:"04",year:"24"},"2025년 11월":{month:"11",year:"25"},"2040년 12월":{month:"12",year:"40"}},control:{type:"select"}},cvc:{control:{type:"text",maxLength:4}}}},r={args:{cardNumbers:{first:"1234",second:"1234",third:"1234",fourth:"1234"},expiryDate:{month:"MM",year:"YY"},cardholderName:"John Doe",isCardFront:!0,cardType:"",cvc:"123"}};var e,t,o;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    cardNumbers: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234'
    },
    expiryDate: {
      month: 'MM',
      year: 'YY'
    },
    cardholderName: 'John Doe',
    isCardFront: true,
    cardType: '',
    cvc: '123'
  }
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const m=["Default"];export{r as Default,m as __namedExportsOrder,i as default};
