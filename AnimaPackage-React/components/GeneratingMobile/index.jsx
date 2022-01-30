import React from "react";
import styled from "styled-components";
import { RationaleNormalWhite48px } from "../../styledMixins";
import "./GeneratingMobile.css";

function GeneratingMobile(props) {
  const { loadingBar, generatingParkingL, spanText1, spanText2, carRearWhite1 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="generatingmobile screen">
        <OverlapGroup>
          <Rectangle3></Rectangle3>
          <LoadingBar src={loadingBar} />
          <GeneratingParkingL>{generatingParkingL}</GeneratingParkingL>
          <Address>
            <span className="rationale-normal-white-48px">{spanText1}</span>
            <Span1>{spanText2}</Span1>
          </Address>
          <CarRearWhite1 src={carRearWhite1} />
        </OverlapGroup>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 391px;
  height: 844px;
  position: relative;
  margin-left: -1px;
`;

const Rectangle3 = styled.div`
  position: absolute;
  width: 390px;
  height: 844px;
  top: 0;
  left: 0;
  background-color: var(--lima);
`;

const LoadingBar = styled.img`
  position: absolute;
  width: 311px;
  height: 141px;
  top: 438px;
  left: 40px;
  object-fit: cover;
`;

const GeneratingParkingL = styled.div`
  position: absolute;
  width: 389px;
  top: 290px;
  left: 1px;
  font-family: var(--font-family-rationale);
  font-weight: 400;
  color: var(--black);
  font-size: var(--font-size-xs);
  text-align: center;
  letter-spacing: 0;
`;

const Address = styled.div`
  ${RationaleNormalWhite48px}
  position: absolute;
  width: 390px;
  top: 11px;
  left: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const Span1 = styled.span`
  ${RationaleNormalWhite48px}
  text-decoration: underline;
`;

const CarRearWhite1 = styled.img`
  position: absolute;
  width: 162px;
  height: 81px;
  top: 748px;
  left: 229px;
  object-fit: cover;
`;

export default GeneratingMobile;
