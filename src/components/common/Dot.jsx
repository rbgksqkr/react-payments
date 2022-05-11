import React from "react";
import styled from "styled-components";

export const Dot = () => {
  return (
    <DotContainerStyle>
      <DotStyle />
    </DotContainerStyle>
  );
};

const DotContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 45px;
`;

const DotStyle = styled.div`
  border-radius: 50%;
  background-color: #04c09e;
  width: 4px;
  height: 4px;
`;
