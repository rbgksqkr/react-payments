import { useRef } from 'react';
import { isValidCardNumberForm } from '../../validator/validateForm';
import { UseCardNumberReturnType } from '../../types/hooks';

const useCardNumberFormStatus = (cardNumberInfo: UseCardNumberReturnType) => {
  const isValid = isValidCardNumberForm(cardNumberInfo);
  const hasOpened = useRef(false);

  if (isValid && !hasOpened.current) {
    hasOpened.current = true;
  }

  return { isValid, hasOpened: hasOpened.current };
};

export default useCardNumberFormStatus;
