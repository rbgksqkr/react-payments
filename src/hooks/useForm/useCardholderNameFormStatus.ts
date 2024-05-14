import { useRef } from 'react';
import { isValidCardholderNameForm } from '../../validator/validateForm';
import { UseCardholderNameReturnType } from '../../types/hooks';

const useCardholderNameFormStatus = (cardholderNameInfo: UseCardholderNameReturnType) => {
  const isValid = isValidCardholderNameForm(cardholderNameInfo);
  const hasOpened = useRef(false);

  if (isValid && !hasOpened.current) {
    hasOpened.current = true;
  }

  return { isValid, hasOpened: hasOpened.current };
};

export default useCardholderNameFormStatus;
