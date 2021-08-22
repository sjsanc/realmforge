import React from "react";
import styled from "styled-components";
import FeatherIcon from "feather-icons-react";

const buttons = ["logo", "home", "game", "world", "settings", "players"];

export default function SideMenu() {
  return (
    <Wrapper>
      <div className="logo"></div>
      <FeatherIcon icon="home" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: black;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  width: 50px;

  svg {
    color: white;
  }

  .logo {
    height: 25px;
    width: 25px;
    background: white;
    border-radius: 50%;
    margin: 15px auto;
  }

  h2 {
    color: white;
    font-family: sans-serif;
    text-align: center;
  }
`;
