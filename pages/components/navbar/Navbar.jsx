import React from "react";
import { Container, CallButton, Text } from "./NavbarStyle";
import Image from "next/image";
import { AddIcCall } from "@material-ui/icons";
const Navbar = () => {
  return (
    <Container>
      <CallButton>
        <AddIcCall />
        <Text>ORDER NOW!</Text>
        <Text>+358 41704 3444</Text>
      </CallButton>
    </Container>
  );
};

export default Navbar;
