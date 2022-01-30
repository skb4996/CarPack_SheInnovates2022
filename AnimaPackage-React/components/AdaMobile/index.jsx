import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  RationaleNormalBlack48px,
  Border2pxBlack,
  ValignTextBottom,
  RationaleNormalWhite48px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./AdaMobile.css";

function AdaMobile(props) {
  const { place, yes, spanText1, spanText2, adaprompt, carRearWhite1 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="adamobile screen">
        <OverlapGroup>
          <Background></Background>
          <Link to="/paidmobile">
            <NoButton>
              <Place>{place}</Place>
            </NoButton>
          </Link>
          <Link to="/paidmobile">
            <YesButton>
              <Place>{yes}</Place>
            </YesButton>
          </Link>
          <DestinationLink>
            <span className="rationale-normal-white-48px">{spanText1}</span>
            <Span16>{spanText2}</Span16>
          </DestinationLink>
          <AdaPrompt>{adaprompt}</AdaPrompt>
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

const Background = styled.div`
  position: absolute;
  width: 390px;
  height: 844px;
  top: 0;
  left: 0;
  background-color: var(--lima);
`;

const NoButton = styled.div`
  ${Border2pxBlack}
  position: absolute;
  height: 69px;
  top: 576px;
  left: 102px;
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

const YesButton = styled.div`
  ${Border2pxBlack}
  position: absolute;
  height: 69px;
  top: 485px;
  left: 102px;
  display: flex;
  padding: 15px 43px;
  align-items: flex-start;
  min-width: 192px;
  background-color: var(--white);
  border-radius: 6px;
  cursor: pointer;
`;

const DestinationLink = styled.div`
  ${RationaleNormalWhite48px}
  position: absolute;
  width: 390px;
  top: 11px;
  left: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const Span16 = styled.span`
  ${RationaleNormalWhite48px}
  text-decoration: underline;
`;

const AdaPrompt = styled.div`
  ${ValignTextBottom}
  ${RationaleNormalBlack48px}
            position: absolute;
  width: 390px;
  height: 58px;
  top: 393px;
  left: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const CarRearWhite1 = styled.img`
  position: absolute;
  width: 175px;
  height: 81px;
  top: 752px;
  left: 215px;
  object-fit: cover;
`;

export default AdaMobile;
