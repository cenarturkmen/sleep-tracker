import React, { type ReactNode } from "react";
import Header from "../Header/Header";
import { Container } from "@mui/material";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div>
      <Container maxWidth="sm">
        {/* <Header /> */}
        {children}
      </Container>
    </div>
  );
};

export default Layout;
