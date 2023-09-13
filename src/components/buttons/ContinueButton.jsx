import React from "react";
import styled from "styled-components";

function ContinueButton() {
  return (
    <a href="/ques">
      <ContinueButtonStyled>Continue</ContinueButtonStyled>
    </a>
  );
}

export default ContinueButton;

const ContinueButtonStyled = styled.button`
  background-color: #1E90FF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  

  &:hover {
    background-color: #45a049;
  }
`;
