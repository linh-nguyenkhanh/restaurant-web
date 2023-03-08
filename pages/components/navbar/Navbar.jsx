import React from "react";
import {
  Container,
  ButtonContainer,
  Text,
  Texts,
  Left,
  Center,
  Right,
  List,
  Lists,
} from "./NavbarStyle";
import Image from "next/image";
import { AddIcCall } from "@material-ui/icons";
const Navbar = () => {
  return (
    <Container>
      <Left>
        <ButtonContainer>
          <AddIcCall style={{ color: "red" }} />
        </ButtonContainer>
        <Texts>
          {" "}
          <Text>ORDER NOW!</Text>
          <Text>+358 41704 3444</Text>
        </Texts>{" "}
      </Left>
      <Center>
        <Lists>
          <List>Homepage</List>
          <List>Products</List>
          <List>Menu</List>
          <Image
            src="/images/pizza-logo.avif"
            width={40}
            height={40}
            alt="logo"
            style={{ borderRadius: "50%" }}
          />
          <List>Events</List>
          <List>Blog</List>
          <List>Contact</List>
        </Lists>
      </Center>
      <Right></Right>
    </Container>
  );
};

export default Navbar;
