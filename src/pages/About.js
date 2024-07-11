import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import useHover from "../hooks/useHover";
import ex1 from "../assets/images/ex1.JPG";
import ex2 from "../assets/images/ex2.JPG";
import ex3 from "../assets/images/ex3.jpg";
import ex4 from "../assets/images/ex4.jpg";
import co1 from "../assets/images/co1.JPG";
import co2 from "../assets/images/co2.jpg";
import co3 from "../assets/images/co3.jpg";
import co4 from "../assets/images/co4.jpg";
import travel1 from "../assets/images/travel1.JPG";
import travel2 from "../assets/images/travel2.jpg";
import travel3 from "../assets/images/travel3.JPG";
import travel4 from "../assets/images/travel4.jpg";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";

import DoorImage from "../components/Door";
import Footer from "../components/Footer";
import QrCode from "../assets/images/QrCode.svg";
import dog1 from "../assets/images/dog1.JPG";
import dog2 from "../assets/images/dog2.JPG";
import dog3 from "../assets/images/dog3.JPG";
import dog4 from "../assets/images/dog4.JPG";

function About() {
  const [pictureNumber, setPictureNumber] = useState(0);
  const [ref, hover] = useHover();
  const [ref1, hover2] = useHover();
  const [door, setDoor] = useState(false);

  const txt1 = useMemo(() => "SEOKIIS", []);
  const txt2 = useMemo(() => "WEBSITE", []);

  const [firstText, setFirstText] = useState("");
  const [firstCount, setFirstCount] = useState(0);

  const [secondText, setSecondText] = useState("");
  const [secondCount, setSecondCount] = useState(0);

  useEffect(() => {
    if (firstCount < txt1.length) {
      const interval = setInterval(() => {
        setFirstText((prev) => prev + txt1[firstCount]);
        setFirstCount((prev) => prev + 1);
      }, 200);
      return () => clearInterval(interval);
    }
  }, [firstCount, txt1]);

  useEffect(() => {
    if (firstCount === txt1.length && secondCount < txt2.length) {
      const interval = setInterval(() => {
        setSecondText((prev) => prev + txt2[secondCount]);
        setSecondCount((prev) => prev + 1);
      }, 200);
      return () => clearInterval(interval);
    } else if (secondCount === txt2.length) {
      setDoor(true);
    }
  }, [secondCount, txt2, firstCount, txt1.length]);

  return (
    <Wrapper>
      <Section>
        <Navbar />
        <Container>
          <DoorImage visible={door} />
          <NameContainer>
            <Name>{firstText}</Name>
            <Name>{secondText}</Name>
          </NameContainer>
        </Container>
      </Section>
      <Section2>
        <SectionDiv>
          <Overview>Overview</Overview>
          <Introduce>
            <Main>
              <Underline ref={ref} color={hover2 ? "grey" : "white"}>
                세상의 아름다운 것들
              </Underline>
              <Change color={hover || hover2 ? "grey" : "white"}>
                을 보고 제가 배운 기술들로 구현하고 몰입하는 과정이 즐겁습니다.
                <br />
                다양한 영감들을 받으려 노력하고, 항상 새로운 시도를 두려워하지
                않는
                <br />
                개발자가 되겠습니다.
              </Change>
            </Main>
            <Main>
              <Change color={hover || hover2 ? "grey" : "white"}>
                "조금씩 성장해야 할 시기에 조금 성장했다고 자만하지 말 것,
                조급해하지 말 것,
                <br />
                차근차근 하나씩 확실하게 성장해나갈 것" 제가 좋아하는 말입니다.
                <br />
                항상 겸손한 자세로 꾸준히 확실하게 성장해나가며{" "}
                <Underline ref={ref1} color={hover ? "grey" : "white"}>
                  같이의 가치
                </Underline>
                를 소중히 하는
                <br />
                소통하는 개발자가 되겠습니다.
              </Change>
            </Main>
            <Main>
              <Change color={hover || hover2 ? "grey" : "white"}>ISFJ</Change>
            </Main>
          </Introduce>
        </SectionDiv>
      </Section2>
      <Section3>
        <InfoDiv>What I Like</InfoDiv>
        <PictureNextPrevButtonDiv>
          <GrCaretPrevious
            onClick={() =>
              setPictureNumber(pictureNumber === 1 ? 4 : pictureNumber - 1)
            }
          />
          <Text>
            {pictureNumber === 1
              ? "Dog"
              : pictureNumber === 2
              ? "Travel"
              : pictureNumber === 3
              ? "Exibition"
              : pictureNumber === 4
              ? "Cooking"
              : "Dog"}
          </Text>
          <GrCaretNext
            onClick={() =>
              setPictureNumber(pictureNumber === 4 ? 1 : pictureNumber + 1)
            }
          />
        </PictureNextPrevButtonDiv>
        <ImageDiv>
          <Card>
            <Image
              src={
                pictureNumber === 1
                  ? dog1
                  : pictureNumber === 2
                  ? travel1
                  : pictureNumber === 3
                  ? ex3
                  : pictureNumber === 4
                  ? co1
                  : dog1
              }
            />
          </Card>
          <Card>
            <Image
              src={
                pictureNumber === 1
                  ? dog2
                  : pictureNumber === 2
                  ? travel2
                  : pictureNumber === 3
                  ? ex4
                  : pictureNumber === 4
                  ? co2
                  : dog2
              }
            />
          </Card>
          <Card>
            <Image
              src={
                pictureNumber === 1
                  ? dog3
                  : pictureNumber === 2
                  ? travel3
                  : pictureNumber === 3
                  ? ex1
                  : pictureNumber === 4
                  ? co3
                  : dog3
              }
            />
          </Card>
          <Card>
            <Image
              src={
                pictureNumber === 1
                  ? dog4
                  : pictureNumber === 2
                  ? travel4
                  : pictureNumber === 3
                  ? ex2
                  : pictureNumber === 4
                  ? co4
                  : dog4
              }
            />
          </Card>
        </ImageDiv>
        <Footer />
      </Section3>
      <Section4>
        <QRCodeLink
          href="https://seokiis.notion.site/110c6e4c88ff46cfbd9aabe1562f3344?pvs=4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={QrCode} alt="qr" style={{ width: "50%", height: "50%" }} />
        </QRCodeLink>
      </Section4>
    </Wrapper>
  );
}

const QRCodeLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Text = styled.div`
  font-family: "rajd_light";
  width: 10%;
  display: flex;
  justify-content: center;
  color: yellowgreen;
`;

const PictureNextPrevButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "rajd_light";
  font-size: 2em;
`;

const Section4 = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  scroll-snap-align: center;
`;

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
      object-fit: contain;
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
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
`;

const NameContainer = styled.div`
  text-align: center;
  width: 70%;
  /* Adjust the width as necessary */
  margin-left: 5rem;
`;

const Name = styled.div`
  font-family: "Mont";
  font-weight: 900;
  font-size: 8rem;
  color: white;
  text-align: left;
`;

const Overview = styled.div`
  width: 20%;
  position: relative;
  top: 0.4rem;
  font-family: "rajd_light";
  font-size: 1.5em;
  color: white;
`;

const Main = styled.div`
  margin-bottom: 2em;
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
  color: ${(props) => props.color};
  transition: border-bottom 0.5s;
  &:hover {
    border-bottom: 1px solid white;
  }
`;

const Change = styled.span`
  color: ${(props) => props.color};
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

export default About;
