import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as mdc from "material-components-web";
import styled from "styled-components";
import {
  RationaleNormalBlack48px,
  RationaleNormalBlack36px,
  RationaleNormalWhite48px,
  ValignTextMiddle,
  Border2pxBlack,
} from "../../styledMixins";
import "./WalkingMobile.css";

function WalkingMobile(props) {
  const { spanText1, spanText2, howFarAreYouWillingToWalk, minutes, carRearWhite1 } = props;

  useEffect(() => {
    mdc.autoInit();
    new mdc.slider.MDCSlider(document.querySelectorAll(".slider-continuous-disabled-primary .mdc-slider")[0]);
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="walkingmobile screen">
        <OverlapGroup>
          <Address>
            <span className="rationale-normal-white-48px">{spanText1}</span>
            <Span15>{spanText2}</Span15>
          </Address>
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
          <Link to="/generatingmobile">
            <MinButtonButton>
              <Minutes>{minutes}</Minutes>
            </MinButtonButton>
          </Link>
          <CarRearWhite1 src={carRearWhite1} />
        </OverlapGroup>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 390px;
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  align-items: center;
  min-height: 844px;
  background-color: var(--lima);
`;

const Address = styled.div`
  ${RationaleNormalWhite48px}
  width: 390px;
  min-height: 196px;
  text-align: center;
  letter-spacing: 0;
`;

const Span15 = styled.span`
  ${RationaleNormalWhite48px}
  text-decoration: underline;
`;

const HowFarAreYouWillingToWalk = styled.div`
  ${RationaleNormalBlack48px}
  width: 390px;
  min-height: 67px;
  margin-top: 44px;
  text-align: center;
  letter-spacing: 0;
`;

const MinButtonButton = styled.div`
  ${Border2pxBlack}
  height: 69px;
  margin-top: 24px;
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

const CarRearWhite1 = styled.img`
  width: 162px;
  height: 81px;
  align-self: flex-end;
  margin-top: 157px;
  object-fit: cover;
`;

export default WalkingMobile;
