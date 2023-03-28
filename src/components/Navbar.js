import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../assets/fonts/Font.css";

const Nav = styled.nav`
  display: flex;
  align-items: flex-start;
  background-color: none;
  padding: 2rem;
  color: #fff;
  width: 100%;
  height: 20%;
`;

const Line = styled.span`
  background-color: white;
  position: absolute;
  left: 0;
  top: 0;
  width: 0%;
  height: 1px;
  transition: width 0.3s;
`;

const Logo = styled.div`
  font-size: 2rem;
  position: relative;
  left: 1em;
  font-family: "Rajd_light";
  width: 20%;
  height: 100%;
  border-top: 1px solid grey;

  &.active {
    color: white;
    ${Line} {
      width: 100%;
    }
  }
  &:hover {
    color: whitesmoke;
    ${Line} {
      width: 100%;
    }
  }
`;

const Menu = styled.div`
  margin-left: 10rem;
  width: 60%;
  justify-content: space-between;
  display: flex;
  list-style: none;
`;

const MenuItem = styled(NavLink)`
  border-top: 1px solid grey;
  position: relative;
  width: 25%;
  height: 90%;
  color: grey;
  text-decoration: none;
  font-family: "Rajd_light";

  &.active {
    color: white;
    ${Line} {
      width: 100%;
    }
  }
  &:hover {
    color: whitesmoke;
    ${Line} {
      width: 100%;
    }
  }
  &:last-child {
    margin-right: 0;
  }
`;
const Category = styled.div`
  font-size: 1.2em;
`;
const Detail = styled.div`
  font-size: 0.9em;
`;

const Circle = styled.div`
  margin-left: 3em;
`;

const Contact = styled.div`
  display: flex;
  color: grey;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 4em;
  height: 4em;
  border: 1px solid grey;
  border-radius: 50%;
  font-family: "Rajd_light";
  transition: box-shadow 0.3s;

  &:hover {
    color: white;
    box-shadow: 0 0 0 0.1rem white inset;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo>
        <Line></Line>
        Front-end<br></br> Developer
      </Logo>
      <Menu>
        <MenuItem>
          <Line></Line>
          <Category>About</Category>
          <Detail>
            It's about me and my skill.<br></br>
            Click here if you want to know.<br></br>
            01
          </Detail>
        </MenuItem>
        <MenuItem to="/project">
          <Line></Line>
          <Category>Project</Category>
          <Detail>
            It's project i made.<br></br>I made various projects.<br></br>
            02
          </Detail>
        </MenuItem>
        <MenuItem to="/learned">
          <Line></Line>
          <Category>Learned</Category>
          <Detail>
            This page summarizes what I have learend so far. <br></br>
            03
          </Detail>
        </MenuItem>
      </Menu>
      <Circle>
        <Contact>contact</Contact>
      </Circle>
    </Nav>
  );
}

export default Navbar;
