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

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

const Image = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Name = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

function Learned() {
  return (
    <Container>
      <div>
        <Title>Portfolio</Title>
        <Item>
          <Image
            src="https://via.placeholder.com/300x200.png?text=Project+1"
            alt="Project 1"
          />
          <Name>Project 1</Name>
          <Description>Not updated..</Description>
        </Item>
        <Item>
          <Image
            src="https://via.placeholder.com/300x200.png?text=Project+2"
            alt="Project 2"
          />
          <Name>Project 2</Name>
          <Description>Not updated..</Description>
        </Item>
        <Item>
          <Image
            src="https://via.placeholder.com/300x200.png?text=Project+3"
            alt="Project 3"
          />
          <Name>Project 3</Name>
          <Description>Not updated..</Description>
        </Item>
      </div>
    </Container>
  );
}

export default Learned;
