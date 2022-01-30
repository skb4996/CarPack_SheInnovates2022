import React from "react";
import styled from "styled-components";
import "./IMac1.css";

function IMac1(props) {
  const { overlapGroup, carparktitle, logo, destinationInput } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktophomepage screen">
        <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
          <OverlapGroup1>
            <CarParkTitle src={carparktitle} />
            <Logo src={logo} />
          </OverlapGroup1>
          <DestinationInput src={destinationInput} />
        </OverlapGroup>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 1280px;
  margin-top: -12px;
  display: flex;
  flex-direction: column;
  padding: 104px 430px;
  align-items: flex-start;
  min-height: 592px;
  background-size: 100% 100%;
`;

const OverlapGroup1 = styled.div`
  width: 302px;
  height: 258px;
  position: relative;
  align-self: center;
`;

const CarParkTitle = styled.img`
  position: absolute;
  width: 254px;
  height: 67px;
  top: 191px;
  left: 23px;
`;

const Logo = styled.img`
  position: absolute;
  width: 302px;
  height: 198px;
  top: 0;
  left: 0;
  transition: all 0.2s ease;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const DestinationInput = styled.img`
  width: 418px;
  height: 62px;
  margin-top: 40px;
`;

export default IMac1;
