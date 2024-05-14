import { useRef } from 'react';
import { isValidPasswordForm } from '../../validator/validateForm';
import { UseCardPasswordReturnType } from '../../types/hooks';

const useCardPasswordFormStatus = (cardPasswordInfo: UseCardPasswordReturnType) => {
  const isValid = isValidPasswordForm(cardPasswordInfo);
  const hasOpened = useRef(false);

  if (isValid && !hasOpened.current) {
    hasOpened.current = true;
  }

  return { isValid, hasOpened: hasOpened.current };
};

export default useCardPasswordFormStatus;
