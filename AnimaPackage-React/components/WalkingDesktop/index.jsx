import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as mdc from "material-components-web";
import styled from "styled-components";
import {
  Border2pxBlack,
  RationaleNormalBlack36px,
  RationaleNormalWhite48px,
  RationaleNormalBlack64px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./WalkingDesktop.css";

function WalkingDesktop(props) {
  const { spanText1, spanText2, carRearWhite1, howFarAreYouWillingToWalk, minutes } = props;

  useEffect(() => {
    mdc.autoInit();
    new mdc.slider.MDCSlider(document.querySelectorAll(".slider-continuous-disabled-primary .mdc-slider")[0]);
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="walkingdesktop screen">
        <OverlapGroup>
          <Address>
            <span className="rationale-normal-white-48px">{spanText1}</span>
            <Span14>{spanText2}</Span14>
          </Address>
          <CarRearWhite1 src={carRearWhite1} />
        </OverlapGroup>
        <HowFarAreYouWillingToWalk>{howFarAreYouWillingToWalk}</HowFarAreYouWillingToWalk>
        <div className="slider-continuous-disabled-primary">
          <div className="mdc-slider " data-id="anima-widget">
            <input
              className="mdc-slider__input"
              type="range"
              min="0"
              max="100"
              value="50"
              name="volume"
              aria-label="Continuous slider demo"
            />
            <div className="mdc-slider__track">
              <div className="mdc-slider__track--inactive"></div>
              <div className="mdc-slider__track--active">
                <div className="mdc-slider__track--active_fill"></div>
              </div>
            </div>
            <div className="mdc-slider__thumb">
              <div className="mdc-slider__thumb-knob"></div>
            </div>
          </div>
        </div>
        <Link to="/generatingdesktop">
          <MinButtonButton>
            <Minutes>{minutes}</Minutes>
          </MinButtonButton>
        </Link>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 1280px;
  height: 116px;
  position: relative;
  background-color: var(--lima);
`;

const Address = styled.div`
  ${RationaleNormalWhite48px}
  position: absolute;
  width: 1171px;
  top: 34px;
  left: 32px;
  letter-spacing: 0;
`;

const Span14 = styled.span`
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

const HowFarAreYouWillingToWalk = styled.div`
  ${RationaleNormalBlack64px}
  width: 768px;
  min-height: 67px;
  margin-top: 141px;
  margin-right: 12px;
  text-align: center;
  letter-spacing: 0;
`;

const MinButtonButton = styled.div`
  ${Border2pxBlack}
  height: 69px;
  margin-top: 44px;
  margin-left: 14px;
  display: flex;
  padding: 8px 0;
  align-items: flex-start;
  min-width: 192px;
  background-color: var(--mercury);
  border-radius: 6px;
  cursor: pointer;
`;

const Minutes = styled.div`
  ${ValignTextMiddle}
  ${RationaleNormalBlack36px}
            width: 192px;
  height: 49px;
  margin-left: -2px;
  text-align: center;
  letter-spacing: 1.44px;
`;

export default WalkingDesktop;
