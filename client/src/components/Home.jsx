import { GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <SimpleGrid columns={[1,2,3,4]} spacing="auto">
      <GridItem
        bg="red"
        color={"white"}
        fontSize={"20px"}
        display={"flex"}
        h="100px"
        alignItems={"center"}
        justifyContent={"center"}
        
      >
        {" "}
        Item1
      </GridItem>
      <GridItem
        h="100px"
        bg="red"
        color={"white"}
        fontSize={"20px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        Item2
      </GridItem>
      <GridItem
        h="100px"
        bg="red"
        color={"white"}
        fontSize={"20px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        Item3
      </GridItem>
      <GridItem
        h="100px"
        bg="red"
        color={"white"}
        fontSize={"20px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        Item4
      </GridItem>
      <GridItem
        h="100px"
        bg="red"
        color={"white"}
        fontSize={"20px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        Item5
      </GridItem>
      <GridItem
        h="100px"
        bg="red"
        color={"white"}
        fontSize={"20px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        Item6
      </GridItem>
      <GridItem
        h="100px"
        bg="red"
        color={"white"}
        fontSize={"20px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        Item7
      </GridItem>
    </SimpleGrid>
  );
};

export default Home;
