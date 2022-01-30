import React from "react";
import Component from "../Component";
import styled from "styled-components";
import "./MobileHomePage.css";

function MobileHomePage(props) {
  const { carparktitle, versiontext, logo, componentProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobilehomepage screen">
        <OverlapGroup>
          <Background></Background>
          <CarParkTitle>{carparktitle}</CarParkTitle>
          <Component inputType={componentProps.inputType} inputPlaceholder={componentProps.inputPlaceholder} />
          <VersionText>{versiontext}</VersionText>
          <Logo src={logo} />
        </OverlapGroup>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 417px;
  height: 844px;
  position: relative;
  margin-left: -14px;
`;

const Background = styled.div`
  position: absolute;
  width: 390px;
  height: 844px;
  top: 0;
  left: 14px;
  background-color: var(--lima);
`;

const CarParkTitle = styled.h1`
  position: absolute;
  width: 417px;
  top: 352px;
  left: 0;
  font-family: var(--font-family-rationale);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-xl);
  text-align: center;
  letter-spacing: 0;
`;

const VersionText = styled.div`
  position: absolute;
  top: 815px;
  left: 33px;
  font-family: var(--font-family-mulish);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-xxxs);
  text-align: center;
  letter-spacing: 0.6px;
  line-height: 15.4px;
  white-space: nowrap;
`;

const Logo = styled.img`
  position: absolute;
  width: 347px;
  height: 259px;
  top: 93px;
  left: 33px;
  transition: all 0.2s ease;
  object-fit: cover;
  cursor: pointer;
`;

export default MobileHomePage;
