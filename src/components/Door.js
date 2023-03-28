import Door from "../assets/images/door.png";
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
`;

export default function DoorImage({ visible }) {
  if (!visible) return null;
  return (
    <Div>
      <img src={Door} width="300px" alt="1" height="300px" />
    </Div>
  );
}
