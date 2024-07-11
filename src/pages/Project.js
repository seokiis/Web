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
        <Title>만들지 않았습니다. 아래 페이지를 참고하세요.</Title>
        <Description>
          <a
            href="https://seokiis.notion.site/110c6e4c88ff46cfbd9aabe1562f3344?pvs=4
            "
            target="_blank"
            rel="noreferrer"
          >
            포트폴리오
          </a>
        </Description>
      </div>
    </Container>
  );
}

export default Project;
