import React from "react";
import styled from "styled-components";
import FeatherIcon from "feather-icons-react";

export default function UserWidget() {
  return (
    <Wrapper>
      <FeatherIcon icon="user" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50px;
  background: black;
  border-radius: 8px;
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  align-items: center;
  z-index: 10;

  svg {
    color: white;
    margin: 0 10px;
  }
`;
