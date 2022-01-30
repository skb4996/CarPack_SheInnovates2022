import React from "react";
import { Link } from "react-router-dom";
import Component1 from "../Component1";
import styled from "styled-components";
import {
  RationaleNormalWhite48px,
  RationaleNormalBlack48px,
  ValignTextMiddle,
  Border2pxBlack,
} from "../../styledMixins";
import "./AdaDesktop.css";

function AdaDesktop(props) {
  const { carRearWhite2, spanText1, spanText2, place, component1Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="adadesktop screen">
        <OverlapGroup>
          <Header></Header>
          <CarRearWhite2 src={carRearWhite2} />
          <DestinationLink>
            <span className="rationale-normal-white-48px">{spanText1}</span>
            <Span12>{spanText2}</Span12>
          </DestinationLink>
          <Component1 adaprompt={component1Props.adaprompt} yes={component1Props.yes} />
          <Link to="/paiddesktop">
            <NoButton>
              <Place>{place}</Place>
            </NoButton>
          </Link>
        </OverlapGroup>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 1761px;
  height: 844px;
  position: relative;
`;

const Header = styled.div`
  position: absolute;
  width: 1280px;
  height: 116px;
  top: 0;
  left: 0;
  background-color: var(--lima);
  box-shadow: 0px 4px 4px #00000040;
`;

const CarRearWhite2 = styled.img`
  position: absolute;
  width: 175px;
  height: 81px;
  top: 18px;
  left: 1105px;
  object-fit: cover;
`;

const DestinationLink = styled.div`
  ${RationaleNormalWhite48px}
  position: absolute;
  width: 1171px;
  top: 34px;
  left: 32px;
  letter-spacing: 0;
`;

const Span12 = styled.span`
  ${RationaleNormalWhite48px}
  text-decoration: underline;
`;

const NoButton = styled.div`
  ${Border2pxBlack}
  position: absolute;
  height: 69px;
  top: 374px;
  left: 741px;
  display: flex;
  padding: 15px 43px;
  align-items: flex-start;
  min-width: 192px;
  background-color: var(--mercury);
  border-radius: 6px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #74b72e;
  }
`;

const Place = styled.div`
  ${ValignTextMiddle}
  ${RationaleNormalBlack48px}
            width: 103px;
  height: 35px;
  text-align: center;
  letter-spacing: 1.92px;
`;

export default AdaDesktop;
