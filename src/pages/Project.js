import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 120px);
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

const Description = styled.p`
  margin-top: 2rem;
  font-size: 1.5rem;
`;

function Project() {
  return (
    <Container>
      <div>
        <Title>About Me</Title>
        <Description>Not updated..</Description>
      </div>
    </Container>
  );
}

export default Project;
