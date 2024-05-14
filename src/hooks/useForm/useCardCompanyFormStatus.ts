import { useRef } from 'react';
import { isValidCardCompanyForm } from '../../validator/validateForm';
import { UseSelectReturnType } from '../../types/hooks';
import { CardType } from '../../types/card';

const useCardCompanyFormStatus = (cardCompanyInfo: UseSelectReturnType<CardType>) => {
  const isValid = isValidCardCompanyForm(cardCompanyInfo);
  const hasOpened = useRef(false);

  if (isValid && !hasOpened.current) {
    hasOpened.current = true;
  }

  return { isValid, hasOpened: hasOpened.current };
};

export default useCardCompanyFormStatus;
