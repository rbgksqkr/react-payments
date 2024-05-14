import { useRef } from 'react';
import { isValidExpiryDateForm } from '../../validator/validateForm';
import { UseExpiryDateReturnType } from '../../types/hooks';

const useExpiryDateFormStatus = (expiryDateInfo: {
  month: UseExpiryDateReturnType;
  year: UseExpiryDateReturnType;
}) => {
  const isValid = isValidExpiryDateForm(expiryDateInfo);
  const hasOpened = useRef(false);

  if (isValid && !hasOpened.current) {
    hasOpened.current = true;
  }

  return { isValid, hasOpened: hasOpened.current };
};

export default useExpiryDateFormStatus;
