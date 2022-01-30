import React from "react";
import styled from "styled-components";
import { RationaleNormalWhite48px, RationaleNormalBlack64px } from "../../styledMixins";
import "./GeneratingDesktop.css";

function GeneratingDesktop(props) {
  const { spanText1, spanText2, carRearWhite1, generatingParkingL, unknown1 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="generatingdesktop screen">
        <OverlapGroup>
          <Address>
            <span className="rationale-normal-white-48px">{spanText1}</span>
            <Span11>{spanText2}</Span11>
          </Address>
          <CarRearWhite1 src={carRearWhite1} />
        </OverlapGroup>
        <GeneratingParkingL>{generatingParkingL}</GeneratingParkingL>
        <Unknown1 src={unknown1} />
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 1280px;
  height: 116px;
  position: relative;
  background-color: var(--lima);
  box-shadow: 0px 4px 4px #00000040;
`;

const Address = styled.div`
  ${RationaleNormalWhite48px}
  position: absolute;
  width: 1171px;
  top: 34px;
  left: 32px;
  letter-spacing: 0;
`;

const Span11 = styled.span`
  ${RationaleNormalWhite48px}
  text-decoration: underline;
`;

const CarRearWhite1 = styled.img`
  position: absolute;
  width: 175px;
  height: 81px;
  top: 18px;
  left: 1105px;
  object-fit: cover;
`;

const GeneratingParkingL = styled.div`
  ${RationaleNormalBlack64px}
  width: 820px;
  min-height: 149px;
  margin-top: 95px;
  margin-left: 38px;
  text-align: center;
  letter-spacing: 0;
`;

const Unknown1 = styled.img`
  width: 311px;
  height: 141px;
  margin-top: 61px;
  margin-right: 1px;
  object-fit: cover;
`;

export default GeneratingDesktop;
