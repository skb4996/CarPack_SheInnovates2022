import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  RationaleNormalBlack48px,
  Border2pxBlack,
  RationaleNormalWhite48px,
  RationaleNormalBlack64px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./PaidDesktop.css";

function PaidDesktop(props) {
  const { spanText1, spanText2, carRearWhite1, payprompt, yes, place } = props;

  return (
    <div className="container-center-horizontal">
      <div className="paiddesktop screen">
        <OverlapGroup>
          <Address>
            <span className="rationale-normal-white-48px">{spanText1}</span>
            <Span13>{spanText2}</Span13>
          </Address>
          <CarRearWhite1 src={carRearWhite1} />
        </OverlapGroup>
        <PayPrompt>{payprompt}</PayPrompt>
        <ButtonButtonContainer>
          <Link to="/walkingdesktop">
            <YesButtonButton>
              <Yes>{yes}</Yes>
            </YesButtonButton>
          </Link>
          <Link to="/walkingdesktop">
            <NoButtonButton>
              <Yes>{place}</Yes>
            </NoButtonButton>
          </Link>
        </ButtonButtonContainer>
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

const Span13 = styled.span`
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

const PayPrompt = styled.div`
  ${RationaleNormalBlack64px}
  width: 768px;
  min-height: 67px;
  margin-top: 141px;
  margin-right: 12px;
  text-align: center;
  letter-spacing: 0;
`;

const ButtonButtonContainer = styled.div`
  margin-top: 50px;
  margin-right: 33px;
  display: flex;
  align-items: flex-start;
  min-width: 511px;
`;

const YesButtonButton = styled.div`
  ${Border2pxBlack}
  height: 69px;
  display: flex;
  padding: 15px 43px;
  align-items: flex-start;
  min-width: 192px;
  background-color: var(--mercury);
  border-radius: 6px;
  cursor: pointer;
`;

const Yes = styled.div`
  ${ValignTextMiddle}
  ${RationaleNormalBlack48px}
            width: 103px;
  height: 35px;
  text-align: center;
  letter-spacing: 1.92px;
`;

const NoButtonButton = styled.div`
  ${Border2pxBlack}
  height: 69px;
  margin-left: 127px;
  display: flex;
  padding: 15px 43px;
  align-items: flex-start;
  min-width: 192px;
  background-color: var(--mercury);
  border-radius: 6px;
  cursor: pointer;
`;

export default PaidDesktop;
