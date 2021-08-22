import Head from "next/head";
import React from "react";
import styled from "styled-components";
import SideMenu from "../components/SideMenu";
import WorldNavigator from "../components/WorldNavigator";
import UserWidget from "../components/UserWidget";

type LayoutVariants = "REALM" | "WORLD";

export default function Layout({
  children,
  variant,
}: {
  children?: any;
  variant?: LayoutVariants;
}) {
  return (
    <>
      <Head>
        <title>Realmforge</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SideMenu />
      <UserWidget />
      {variant == "REALM" && <WorldNavigator />}
      <MainWrapper>{children}</MainWrapper>
      <footer></footer>
    </>
  );
}

const MainWrapper = styled.main`
  position: relative;
  padding: 80px 30px 0 80px;
`;
