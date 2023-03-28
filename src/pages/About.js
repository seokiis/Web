import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import useHover from "../hooks/useHover";
import Dog from "../assets/images/do.JPG";
import Travel from "../assets/images/tr.JPG";
import Food from "../assets/images/fo.jpg";
import Museum from "../assets/images/mu.JPG";
import { useState, useEffect, useMemo } from "react";
import DoorImage from "../components/Door";
import Footer from "../components/Footer";

const Section3 = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: black;
  scroll-snap-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 85%;
  object-fit: cover;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  width: 20%;
  height: 45%;
  &:hover {
    ${Image} {
      border: 2px solid lightyellow;
    }
    transform: scale(1.5);
    z-index: 1;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
`;

const Section = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: black;
  scroll-snap-align: center;
`;
const Section2 = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: black;
  scroll-snap-align: center;
`;

const SectionDiv = styled.div`
  margin-top: 8em;
  margin-left: 4em;
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  bottom: 0;
  //Section의 가로 길이 반
  left: 50%;
  //자신의 가로 길이의 반만큼 왼쪽으로 이동하여 가운데 정렬
  transform: translateX(-50%);
`;

const Name = styled.div`
  margin-left: 1em;
  font-family: "Mont";
  font-weight: 900;
  font-size: 8rem;
  color: white;
`;

const Overview = styled.div`
  width: 20%;
  position: relative;
  top: 0.4rem;
  font-family: "rajd_light";
  font-size: 1.5em;
  color: white;
`;
const Main1 = styled.div`
  margin-bottom: 2em;
  transition: all 0.5s;
`;
const Main2 = styled.div`
  transition: all 0.5s;
`;

const Introduce = styled.div`
  margin-left: 1em;
  line-height: 2em;
  font-family: "Chosunilbo_myungjo";
  font-size: 1.7em;
`;

const Underline = styled.strong`
  position: relative;
  border-bottom: 1px solid #505050;
  display: inline-block;
  line-height: 1.4;
  color: ${(props) => props.color}; //props 활용
  transition: border-bottom 0.5s;
  &:hover {
    border-bottom: 1px solid white;
  }
`;

const Change = styled.span`
  color: ${(props) => props.color}; //props 활용
`;
const ImageDiv = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const Detail = styled.div`
  margin-top: 10px;
  font-family: "rajd_light";
  color: white;
`;

const InfoDiv = styled.div`
  color: white;
  font-family: "rajd_light";
  font-size: 2em;
`;

function About() {
  const [ref, hover] = useHover();
  const [ref1, hover2] = useHover();
  const [door, setDoor] = useState(false);

  const txt1 = useMemo(() => {
    return "SEOKIIS";
  }, []);

  const txt2 = useMemo(() => {
    return "PORTFOLIO";
  }, []);

  const [firstText, setFirstText] = useState("");
  const [firstCount, setCount] = useState(0);

  const [secondText, setSecondText] = useState("");
  const [secondCount, setSecondCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFirstText(firstText + txt1[firstCount]);
      setCount(firstCount + 1);
    }, 200);
    if (firstCount === txt1.length) {
      clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다.
    }
    return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다.
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondText(secondText + txt2[secondCount]);
      setSecondCount(secondCount + 1);
    }, 200);
    if (secondCount === txt2.length) {
      clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다.
      setDoor(true);
    }
    return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다.
  });

  return (
    <Wrapper>
      <Section>
        <Navbar></Navbar>
        <Container>
          <DoorImage visible={door}>
            {/* {door ? (
              <img src={Door} width="300px" alt="1" height="300px" />
            ) : (
              <div></div>
            )} */}
          </DoorImage>
          <Name>
            {firstText}
            <br />
            {secondText}
          </Name>
        </Container>
      </Section>
      <Section2>
        <SectionDiv>
          <Overview>Overview</Overview>
          <Introduce>
            <Main1>
              <Underline ref={ref} color={hover2 ? "grey" : "white"}>
                세상의 아름다운 것들
              </Underline>
              <Change color={hover || hover2 ? "grey" : "white"}>
                을 보고 제가 배운 기술들으로 구현하는 과정이 재밌습니다.
                <br></br>
                다양한 영감들을 받으려 노력하고, 항상 새로운 시도를 두려워하지
                않는<br></br>
                프론트엔드 개발자가 되겠습니다.
              </Change>
            </Main1>
            <Main2>
              <Change color={hover || hover2 ? "grey" : "white"}>
                "조금씩 성장해야 할 시기에 조금 성장했다고 자만하지 말 것,
                조급해하지 말 것,
                <br></br>
                차근차근 하나씩 확실하게 성장해나갈 것" 제가 좋아하는 말입니다.
                <br></br> 항상 겸손한 자세로 꾸준히 확실하게 성장해나가며{" "}
                <Underline ref={ref1} color={hover ? "grey" : "white"}>
                  같이의 가치
                </Underline>
                를 소중히 하는
                <br></br> 소통하는 프론트엔드 개발자가 되겠습니다.
              </Change>
            </Main2>
          </Introduce>
        </SectionDiv>
      </Section2>
      <Section3>
        <InfoDiv>What I Like</InfoDiv>
        <ImageDiv>
          <Card>
            <Image src={Dog}></Image>
            <Detail>Dog</Detail>
          </Card>
          <Card>
            <Image src={Travel}></Image>
            <Detail>Travel</Detail>
          </Card>
          <Card>
            <Image src={Museum}></Image>
            <Detail>Exhibition</Detail>
          </Card>
          <Card>
            <Image src={Food}></Image>
            <Detail>Cook</Detail>
          </Card>
        </ImageDiv>
        <Footer></Footer>
      </Section3>
    </Wrapper>
  );
}

export default About;
