import React, { useEffect, useState } from "react";

//interfaces
type props = {
  children: React.ReactNode;
};

//Componets
import { Header } from "../Header";
import { Container } from "./styles";
import { SideBar } from "../Sidebar";

function Layout({ children }: props) {
  return (
    <Container>
      <SideBar />
      <Header />
      <section>{children}</section>
    </Container>
  );
}

export { Layout };
