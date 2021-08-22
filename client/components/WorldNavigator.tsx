import React from "react";
import styled from "styled-components";

const categories = ["races", "locations", "people"];

export default function WorldNavigator() {
  return (
    <Wrapper>
      {categories.map((cat, i) => (
        <NavIcon key={i}>{cat.charAt(0).toUpperCase()}</NavIcon>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 600px;
  height: 50px;
  background: black;
  border-radius: 8px;
  display: flex;
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const NavIcon = styled.div`
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
  font-size: 20px;
  font-family: sans-serif;
`;
