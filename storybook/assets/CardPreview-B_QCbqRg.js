import{u as r,j as e}from"./styled-components.browser.esm-D-tNovVo.js";import{b as f}from"./card-CBUKYh21.js";const d={VISA:"4",MASTER_CARD_MIN:50,MASTER_CARD_MAX:56,TEXT_LENGTH_MIN:0,TOTAL_CARD_NUMBER_LENGTH:16,CARD_NUMBER_LENGTH_MAX:4,DATE_LENGTH_MAX:2,TOTAL_DATE_LENGTH:4,PASSWORD_LENGTH_MAX:2,CVC_LENGTH_MIN:3,CVC_LENGTH_MAX:4},y=r.div`
  width: 320px;
  height: 200px;
  perspective: 1000px;
  cursor: pointer;

  & > div {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    transition: transform 2s;
  }

  & > :first-child {
    transform: ${t=>t.$isFront?"rotateY(0deg)":"rotateY(180deg)"};
  }
  & > :last-child {
    transform: ${t=>t.$isFront?"rotateY(-180deg)":"rotateY(0deg)"};
  }
`,C=r.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 200px;

  background-color: ${t=>f[t.$cardType]};
  padding: 16px 20px 20px;
  border-radius: 8px;

  color: white;
  box-shadow: 3px 3px 5px 0px #00000040;
`,R=r.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
`,T=r.div`
  background-color: #ddcd78;
  width: 50px;
  border-radius: 5px;
`,b=r.div`
  width: 50px;
  border-radius: 5px;
`,p=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,w=r.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 10px;
  letter-spacing: 2px;
`,B=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  margin-top: 20px;
  gap: 20px;
`,c=r.p`
  display: flex;
  flex-basis: 25%;
  height: 20px;
  font-size: 20px;
`,A=r.p`
  display: flex;
  flex-basis: 25%;
  font-size: 28px;
`,I=r.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 20px;
`,M=r.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`,V=r.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,j=r.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 200px;

  background-color: #d5d5d5;
  border-radius: 8px;

  color: white;
  box-shadow: 3px 3px 5px 0px #00000040;
`,E=r.div`
  flex-basis: 60%;
`,S=r.div`
  background-color: #cbba64;
  flex-basis: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 20px;
  letter-spacing: 3px;
  padding-right: 20px;
`,m=({cvc:t})=>e.jsxs(j,{children:[e.jsx(E,{}),e.jsx(S,{children:t})]});m.__docgenInfo={description:"",methods:[],displayName:"BackCardPreview",props:{cvc:{required:!0,tsType:{name:"string"},description:""}}};const v="data:image/png;base64,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",k="data:image/png;base64,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",u=({isVisa:t,isMaster:s,cardNumbers:a,expiryDate:i,cardholderName:o,cardType:n})=>e.jsxs(C,{$cardType:n,children:[e.jsxs(R,{children:[e.jsx(T,{}),e.jsxs(b,{children:[t&&e.jsx(p,{src:k}),s&&e.jsx(p,{src:v})]})]}),e.jsxs(w,{children:[e.jsxs(B,{children:[e.jsx(c,{children:a.first}),e.jsx(c,{children:a.second}),e.jsx(A,{children:"·".repeat(a.third.length)}),e.jsx(A,{children:"·".repeat(a.fourth.length)})]}),e.jsxs(I,{children:[e.jsx("span",{children:i.month}),e.jsx("span",{children:i.month&&"/"}),e.jsx("span",{children:i.year})]}),e.jsx(M,{children:e.jsx(V,{children:o})})]})]});u.__docgenInfo={description:"",methods:[],displayName:"FrontCardPreview",props:{cardNumbers:{required:!0,tsType:{name:"Record",elements:[{name:"union",raw:"'first' | 'second' | 'third' | 'fourth'",elements:[{name:"literal",value:"'first'"},{name:"literal",value:"'second'"},{name:"literal",value:"'third'"},{name:"literal",value:"'fourth'"}]},{name:"string"}],raw:"Record<CardNumberKey, string>"},description:""},expiryDate:{required:!0,tsType:{name:"ExpiryDate"},description:""},cardholderName:{required:!0,tsType:{name:"string"},description:""},cardType:{required:!0,tsType:{name:"union",raw:"keyof typeof CARD_COLOR",elements:[{name:"literal",value:"''"},{name:"literal",value:"BC카드"},{name:"literal",value:"신한카드"},{name:"literal",value:"카카오뱅크"},{name:"literal",value:"현대카드"},{name:"literal",value:"우리카드"},{name:"literal",value:"롯데카드"},{name:"literal",value:"하나카드"},{name:"literal",value:"국민카드"}]},description:""},isVisa:{required:!0,tsType:{name:"boolean"},description:""},isMaster:{required:!0,tsType:{name:"boolean"},description:""}}};const z=({cardNumbers:t,expiryDate:s,cardholderName:a,cardType:i,cvc:o,isCardFront:n,setIsCardFront:x})=>{const l=Number(t.first.slice(0,2)),h=l>d.MASTER_CARD_MIN&&l<d.MASTER_CARD_MAX,g=t.first.startsWith(d.VISA);return e.jsxs(y,{$isFront:n,onClick:()=>x(!n),children:[e.jsx(u,{isVisa:g,isMaster:h,cardNumbers:t,expiryDate:s,cardholderName:a,cardType:i}),e.jsx(m,{cvc:o})]})};z.__docgenInfo={description:"",methods:[],displayName:"CardPreview",props:{cardNumbers:{required:!0,tsType:{name:"Record",elements:[{name:"union",raw:"'first' | 'second' | 'third' | 'fourth'",elements:[{name:"literal",value:"'first'"},{name:"literal",value:"'second'"},{name:"literal",value:"'third'"},{name:"literal",value:"'fourth'"}]},{name:"string"}],raw:"Record<CardNumberKey, string>"},description:""},expiryDate:{required:!0,tsType:{name:"ExpiryDate"},description:""},cardholderName:{required:!0,tsType:{name:"string"},description:""},cardType:{required:!0,tsType:{name:"union",raw:"keyof typeof CARD_COLOR",elements:[{name:"literal",value:"''"},{name:"literal",value:"BC카드"},{name:"literal",value:"신한카드"},{name:"literal",value:"카카오뱅크"},{name:"literal",value:"현대카드"},{name:"literal",value:"우리카드"},{name:"literal",value:"롯데카드"},{name:"literal",value:"하나카드"},{name:"literal",value:"국민카드"}]},description:""},cvc:{required:!0,tsType:{name:"string"},description:""},isCardFront:{required:!0,tsType:{name:"boolean"},description:""},setIsCardFront:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<boolean>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<boolean>",elements:[{name:"boolean"}]}]},description:""}}};export{z as C,d as a};
