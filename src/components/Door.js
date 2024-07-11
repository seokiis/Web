import hoya from "../assets/images/hoya.png";
import React from "react";
import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const Div = styled.div`
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
  width: 30%;
`;

const SkeletonUi = styled.div`
  width: 30%;
  height: 300px;
`;

export default function DoorImage({ visible }) {
  if (!visible) return <SkeletonUi></SkeletonUi>;
  return (
    <Div>
      <img src={hoya} width="100%" alt="1" height="300px" />
    </Div>
  );
}
