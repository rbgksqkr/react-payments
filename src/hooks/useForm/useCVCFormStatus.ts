import { useRef } from 'react';
import { isValidCVCForm } from '../../validator/validateForm';
import { UseCVCReturnType } from '../../types/hooks';

const useCVCFormStatus = (cardCVCInfo: UseCVCReturnType) => {
  const isValid = isValidCVCForm(cardCVCInfo);
  const hasOpened = useRef(false);

  if (isValid && !hasOpened.current) {
    hasOpened.current = true;
  }

  return { isValid, hasOpened: hasOpened.current };
};

export default useCVCFormStatus;
