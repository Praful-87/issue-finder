import { Box } from "@chakra-ui/react";
import React from "react";

const Detatil = ({ value }) => {
  return (
    <Box p={1} rounded={'md'} border={"1px dotted gray"}>
      {value}
    </Box>
  );
};

export default Detatil;
