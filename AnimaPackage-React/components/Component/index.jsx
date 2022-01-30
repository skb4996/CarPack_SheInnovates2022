import React from "react";
import styled from "styled-components";


function Component(props) {
  const { inputType, inputPlaceholder } = props;

  return (
    <DestinationInput>
      <EnterDestination name="enterdestination" placeholder={inputPlaceholder} type={inputType} required />
    </DestinationInput>
  );
}

const DestinationInput = styled.div`
  position: absolute;
  height: 52px;
  top: 490px;
  left: 37px;
  display: flex;
  padding: 0 17px;
  align-items: center;
  min-width: 343px;
  background-color: var(--white);
  border: 1px solid #c4c4c4;
`;

const EnterDestination = styled.input`
  width: 127px;
  height: 18px;
  background-color: transparent;
  font-family: var(--font-family-roboto);
  font-weight: 400;
  color: #00000080;
  font-size: var(--font-size-xxs);
  letter-spacing: 0;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #0000004c;
  }
`;

export default Component;
