import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  RationaleNormalBlack48px,
  Border2pxBlack,
  RationaleNormalWhite48px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./PaidMobile.css";

function PaidMobile(props) {
  const { place, yes, spanText1, spanText2, payprompt, logo } = props;

  return (
    <div className="container-center-horizontal">
      <div className="paidmobile screen">
        <OverlapGroup>
          <Background></Background>
          <Link to="/walkingmobile">
            <NoButtonButton>
              <Place>{place}</Place>
            </NoButtonButton>
          </Link>
          <Link to="/walkingmobile">
            <YesButtonButton>
              <Place>{yes}</Place>
            </YesButtonButton>
          </Link>
          <Address>
            <span className="rationale-normal-white-48px">{spanText1}</span>
            <Span17>{spanText2}</Span17>
          </Address>
          <PayPrompt>{payprompt}</PayPrompt>
          <Logo src={logo} />
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

const Background = styled.div`
  position: absolute;
  width: 390px;
  height: 844px;
  top: 0;
  left: 0;
  background-color: var(--lima);
`;

const NoButtonButton = styled.div`
  ${Border2pxBlack}
  position: absolute;
  height: 69px;
  top: 569px;
  left: 95px;
  display: flex;
  padding: 15px 43px;
  align-items: flex-start;
  min-width: 192px;
  background-color: var(--white);
  border-radius: 6px;
  cursor: pointer;
`;

const Place = styled.div`
  ${ValignTextMiddle}
  ${RationaleNormalBlack48px}
            width: 103px;
  height: 35px;
  text-align: center;
  letter-spacing: 1.92px;
`;

const YesButtonButton = styled.div`
  ${Border2pxBlack}
  position: absolute;
  height: 69px;
  top: 471px;
  left: 95px;
  display: flex;
  padding: 15px 43px;
  align-items: flex-start;
  min-width: 192px;
  background-color: var(--white);
  border-radius: 6px;
  cursor: pointer;
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

const Span17 = styled.span`
  ${RationaleNormalWhite48px}
  text-decoration: underline;
`;

const PayPrompt = styled.div`
  ${RationaleNormalBlack48px}
  position: absolute;
  width: 390px;
  top: 327px;
  left: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const Logo = styled.img`
  position: absolute;
  width: 162px;
  height: 81px;
  top: 748px;
  left: 229px;
  object-fit: cover;
`;

export default PaidMobile;
