import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  ValignTextMiddle,
  RationaleNormalBlack48px,
  RationaleNormalBlack64px,
  Border2pxBlack,
} from "../../styledMixins";


function Component1(props) {
  const { adaprompt, yes } = props;

  return (
    <Component11>
      <AdaPrompt>{adaprompt}</AdaPrompt>
      <Link to="/paiddesktop">
        <YesButton>
          <Yes>{yes}</Yes>
        </YesButton>
      </Link>
    </Component11>
  );
}

const Component11 = styled.div`
  position: absolute;
  width: 1761px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 257px 250px;
  align-items: flex-start;
  min-height: 844px;
`;

const AdaPrompt = styled.div`
  ${RationaleNormalBlack64px}
  width: 768px;
  min-height: 67px;
  text-align: center;
  letter-spacing: 0;
`;

const YesButton = styled.div`
  ${Border2pxBlack}
  height: 69px;
  margin-top: 50px;
  margin-left: 101px;
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

export default Component1;
