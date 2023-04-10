import { Flex, HStack, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      align={"center"}
      pos={"sticky"}
      top={"0px"}
      bg="blue.400"
      color={"white"}
      left="0px"
      h="60px"
      px="20px"
      zIndex={300}
    >
      <Heading>Logo</Heading>
      <Spacer />
      <HStack spacing={4} size={"md"}>
        <Link to="/">Login</Link>
        <Link to="/request">New Request</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/mytask">My Task</Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
