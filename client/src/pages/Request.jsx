import React, { useRef, useState } from "react";
import {
  Container,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
  Stack,
  Checkbox,
  Textarea,
  Select,
  useToast,
} from "@chakra-ui/react";
import { issueTypeData } from "../data/data";
import axios from "axios";
import { url } from "../utils/url";

const Request = () => {
  const toast = useToast();

  const { Mobile, TV, Refrigerator, Washing } = issueTypeData;

  const [productType, setProductType] = useState("");

  const [username] = useState(localStorage.getItem("customer") || "");

  const [issueArray, setIssueArray] = useState([]);

  const [issues, setIssues] = useState([]);

  const [document, setDocument] = useState("");

  const [loading, setLoading] = useState(false);

  const Desc = useRef(null);

  //   console.log(issues);

  async function handelSubmit() {
    if (productType && issues.length > 0 && Desc.current.value) {
      let formData = new FormData();

      formData.append("product_type", productType);
      formData.append("username", username);
      formData.append("issues", issues);
      formData.append("document", document);
      formData.append("description", Desc.current.value);

      // console.log(formData);
      // let payload = {
      //   product_type: productType,
      //   issues: issues,
      //   description: Desc.current.value,
      //   username,
      // };
      try {
        setLoading(true);
        await axios.post(`${url}/issue`, formData);
        toast({
          title: "Submitted",
          description:
            "Your request has been submitted and a customer care executive  will be in touch with you soon",
          position: "top",
          status: "success",
          duration: 10000,
          isClosable: true,
        });
        setLoading(false);
      } catch (error) {
        toast({
          title: "Not Submitted",
          description: "File size should less than 2mb or Somthing went wrong",
          position: "top",
          status: "error",
          duration: 10000,
          isClosable: true,
        });
        setLoading(false);
      }
    } else {
      toast({
        title: "Unsufficient Details",
        description: "All Feilds are mandatory",
        position: "top",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  function handelIssueSelected(e) {
    let value = e.target.value;
    let newIssues = [...issues];
    if (issues.includes(value)) {
      newIssues.splice(issues.indexOf(value), 1);
    } else {
      newIssues.push(value);
    }
    setIssues(newIssues);
  }

  function handelIssueArray(e) {
    setIssues([]);
    let option = e.target.value;
    setProductType(option);
    switch (option) {
      case "Mobile Phone":
        setIssueArray(Mobile);
        //   console.log(Mobile);
        break;
      case "TV":
        setIssueArray(TV);
        //   console.log(TV);
        break;
      case "Refrigerator":
        setIssueArray(Refrigerator);
        //   console.log(Refrigerator);
        break;
      case "Washing Machine":
        setIssueArray(Washing);
        //   console.log(Washing);
        break;
      default:
        setIssueArray([]);
    }
  }

  return (
    <Box
      w="100%"
      h="100vh"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      overflow={"hidden"}
    >
      <Container gap="25px" display={"flex"} flexDir={"column"}>
        <Heading size="md">New Request 💖</Heading>

        <Select
          cursor={"pointer"}
          variant="filled"
          onChange={handelIssueArray}
          placeholder="Select product type"
        >
          <option value="Mobile Phone">Mobile Phone</option>
          <option value="TV">TV</option>
          <option value="Refrigerator">Refrigerator</option>
          <option value="Washing Machine">Washing Machine</option>
        </Select>
        <Stack spacing={"15px"} h="100px" overflow={"auto"}>
          <Heading size={"md"}>Issue Type</Heading>
          {issueArray.length > 0 &&
            issueArray.map((el, i) => {
              return (
                <Checkbox
                  defaultChecked={issues.includes(el)}
                  onChange={handelIssueSelected}
                  key={i}
                  value={el}
                >
                  {el}
                </Checkbox>
              );
            })}
        </Stack>
        <Textarea ref={Desc} placeholder="Issue Description" />
        <FormLabel
          bg="blue.600"
          px="20px"
          py="9px"
          width={"fit-content"}
          color={"white"}
          fontSize={"sm"}
          rounded={"5px"}
          cursor={"pointer"}
        >
          Upload Document
          <Input
            onChange={(e) => setDocument(e.target.files[0])}
            type="file"
            display={"none"}
          />
        </FormLabel>
        <Button
          isLoading={loading}
          onClick={handelSubmit}
          color={"white"}
          colorScheme="blue"
          fontSize={"sm"}
        >
          Submit
        </Button>
      </Container>
    </Box>
  );
};

export default Request;
