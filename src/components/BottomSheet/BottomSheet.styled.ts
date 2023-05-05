import styled from 'styled-components';
import { COLOR } from '../../constants/card';

export const BottomSheetBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  width: 100%;
  height: 100%;

  @media (min-width: 992px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

export const BackdropBox = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${COLOR.BLACK};
  opacity: 0.6;
`;

export const ContentSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  height: 40%;

  border-radius: 8px;

  background-color: ${COLOR.WHITE};

  @media (min-width: 992px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }
`;
