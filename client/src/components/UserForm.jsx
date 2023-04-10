import React from "react";
import {
  Box,
  Button,
  Container,
  FormLabel,
  Input,
  Link,
  Select,
  Text,
} from "@chakra-ui/react";
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
          <Box rounded={"md"} border="1px dotted gray" py="3" mt="20px">
            {data.issues.map((el, i) => {
              return (
                <Text textTransform={"capitalize"} my="5px" key={i}>
                  &#9658; {el}
                </Text>
              );
            })}
          </Box>
          <FormLabel fontWeight={"bold"} mt="20px">
            Date of Submission
          </FormLabel>
          <Detatil value={data.date} />
          <FormLabel fontWeight={"bold"} mt="20px">
            Document Provided
          </FormLabel>
          {/* <Detatil value={data.date} /> */}
          <Link color={'blue'} to={data.document}>
            <a href={data.document} target="_blank">
              Open Document
            </a>
          </Link>
        </Box>
      )}
    </>
  );
};

export default UserForm;
