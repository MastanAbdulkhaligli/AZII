import React from "react";
// import styled from "styledComponents";
import styled from "styled-components";
import "../components/navbar.module.css";

// Images
import homePic from "../images/home-background.png";
import Icon from "../images/Icon.png";

const BacgroundImage = styled.div`
  background-image: url(${homePic});
  width: 100%;
  height: 728px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  min-height: 380px;
`;

const Container = styled.div`
  position: absolute;
  width: auto;
`;

const Nav = styled.div`
  background: rgba(40, 103, 171, 0.8);
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Will contain only logo and name
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Name = styled.h1``;

// Will contain menu items
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

// Will contain
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Logo = styled.h2``;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: white;
`;

const Item = styled.li``;

const Navbar = () => {
  return (
    <BacgroundImage>
      <Container>
        <Nav>
          <Left>
            <Menu>AZII IT Academy</Menu>
          </Left>

          <Center></Center>

          <Right></Right>
        </Nav>
      </Container>
    </BacgroundImage>
  );
};

export default Navbar;
