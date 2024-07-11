import React from "react";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LinkDiv = styled.div`
  width: 4em;
  display: flex;
  justify-content: space-between;
`;
const Link = styled.a`
  color: white;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <LinkDiv>
        <Link href="https://github.com/seokiis">
          <FaGithubSquare />
        </Link>
        <Link href="https://www.instagram.com/seokiis/">
          <FaInstagram />
        </Link>
        <Link href="mailto:your-email-address">
          <AiFillMail />
        </Link>
      </LinkDiv>
      <p style={{ color: "white" }}>
        Copyright © {new Date().getFullYear()}
        Contact me via the link above.
      </p>
    </FooterDiv>
  );
};

export default Footer;
