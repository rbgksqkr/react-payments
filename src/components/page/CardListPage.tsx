import type { CardType } from '../../types';
import { Page } from '../../types';
import React from 'react';
import styled, { keyframes } from 'styled-components';

import PageTemplate from '../template/PageTemplate';
import Card from '../common/Card';

import { getList } from '../../utils/localStorageUtils';
import { LOCAL_STORAGE_KEY } from '../../constants';

interface Props {
  navigate: (page: Page) => void;
}

const CardListPage = ({ navigate }: Props) => {
  const onClickAdd = () => {
    navigate(Page.register);
  };

  const cardList: CardType[] = getList(LOCAL_STORAGE_KEY.cardList);

  return (
    <PageTemplate title="보유카드">
      {cardList.length === 0 && <GuideMessage>새로운 카드를 등록해주세요</GuideMessage>}
      {cardList.map((card) => (
        <React.Fragment key={card.id}>
          <Card {...card} />
          <CardName>{card.cardName}</CardName>
        </React.Fragment>
      ))}
      <CardAddButton onClick={onClickAdd}>+</CardAddButton>
    </PageTemplate>
  );
};

export default CardListPage;

const GuideMessage = styled.p`
  margin-bottom: 12px;

  font-size: 14px;
  font-weight: 700;
  color: #686868;
`;

const bounce = keyframes`
  from  { margin: -100px; }

  50% {
    margin-top: 24px;
    margin-bottom: 48px;
  }

  to {
    margin-top: 16px;
    margin-bottom: 32px;
  }
`;

const CardName = styled.p`
  margin-top: 16px;
  margin-bottom: 32px;

  text-align: center;
  font-weight: 700;
  font-size: 14px;
  color: #575757;

  animation: ${bounce} 1s;
`;

const CardAddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 214px;
  min-height: 134px;
  margin-bottom: 24px;
  border: none;
  background: #e5e5e5;
  border-radius: 5px;

  font-size: 30px;
  font-weight: 400;
  color: #575757;

  cursor: pointer;
`;
