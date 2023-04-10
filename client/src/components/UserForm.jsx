import React from "react";
import { Box, FormLabel, Link, } from "@chakra-ui/react";
import Detatil from "./Detatil";
const UserForm = ({ data }) => {
  // console.log(data);

  return (
    <>
      {data && (
        <Box>
          <FormLabel fontWeight={"bold"} mt="20px">
            Username
          </FormLabel>
          <Detatil value={data.username} />
          <FormLabel fontWeight={"bold"} mt="20px">
            Product Type
          </FormLabel>
          <Detatil value={data.product_type} />
          <FormLabel fontWeight={"bold"} mt="20px">
            Issue Type
          </FormLabel>
          <Box border='1px dotted gray' p='2' rounded={'md'}>{data.issues}</Box>
          <FormLabel fontWeight={"bold"} mt="20px">
            Date of Submission
          </FormLabel>
          <Detatil value={data.date} />
          <FormLabel fontWeight={"bold"} mt="20px">
            Document Provided
          </FormLabel>
          {/* <Detatil value={data.date} /> */}
          <Link color={"blue"} to={data.document}>
            <a rel="noreferrer" href={data.document} target="_blank">
              Open Document
            </a>
          </Link>
        </Box>
      )}
    </>
  );
};

export default UserForm;
