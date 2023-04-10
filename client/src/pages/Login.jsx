import {
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Button,
  Box,
  Heading,
  Text,
  IconButton,
  Divider,
  HStack,
  Flex,
  useToast,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import {
  ViewIcon,
  WarningIcon,
  ViewOffIcon,
  CheckIcon,
  LockIcon,
  // WarningTwoIcon,
} from "@chakra-ui/icons";

import { url } from "../utils/url";

const Login = () => {
  const toast = useToast();

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleClick = () => setShow(!show);

  const Username = useRef(null);
  
  const Password = useRef(null);
  const Type = useRef(null);
  async function handelSubmit() {
    let username = Username.current.value;
    let password = Password.current.value;
    let type = Type.current.value;
    if (username && password && type) {
      setLoading(true);
      let payload = {
        username,
        password,
        type,
      };
      try {
        let res = await axios.post(`${url}/user/login`, payload);
        toast({
          title: "Log In successfull",
          status: "success",
          description: res.data,
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setLoading(false);
        if (type === "employee" && username === "employee1") navigate("/admin");
        else if (type === "employee" && username === "employee2")
          navigate("/mytask");
        else if (type === "customer") {
          localStorage.setItem("customer", username);

          navigate("/request");
        }
      } catch (error) {
        setLoading(false);
        toast({
          title: "Log In Failed",
          status: "warning",
          description: error.response.data,
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
    } else {
      toast({
        title: "Empty fields",
        status: "warning",
        description: "Fill the form correctly",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  }
  return (
    <Box
      w="100%"
      h="100vh"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bg="blue.500"
    >
      <Box w={"350px"} overflow={"hidden"} shadow={"md"} rounded={"lg"}>
        <Flex
          w="full"
          h="200px"
          bgImage="url(https://e1.pxfuel.com/desktop-wallpaper/581/154/desktop-wallpaper-backgrounds-for-login-page-login-page.jpg)"
          bgPosition={"center"}
          bgRepeat={"no-repeat"}
          objectFit={"cover"}
          direction={"column"}
          justify={"center"}
        >
          <Box pl="30px" pos={"relative"}>
            <Heading size="xl" color={"white"}>
              Welcome
            </Heading>
            <Heading size="xl" color={"white"}>
              Back
            </Heading>
          </Box>
        </Flex>
        <Box padding={"5"} bg="white">
          <InputGroup mt="30px">
            <InputLeftElement children={<WarningIcon color="black.500" />} />
            <Input
              rounded={"none"}
              outline={"none"}
              borderBottom={"1px solid blue"}
              placeholder="Username"
              ref={Username}
            />
            <InputRightElement children={<CheckIcon color="blue.500" />} />
          </InputGroup>
          <Select ref={Type} variant={"filled"} mt="30px" placeholder="Type">
            <option value="employee">Employee</option>
            <option value="customer">Customer</option>
          </Select>
          <InputGroup mt="30px">
            <InputLeftElement children={<LockIcon color="black.500" />} />
            <Input
              ref={Password}
              rounded={"none"}
              outline={"none"}
              borderBottom={"1px solid blue"}
              type={show ? "text" : "password"}
              placeholder="Password"
            />
            <InputRightElement>
              <IconButton
                colorScheme="blue"
                icon={!show ? <ViewIcon /> : <ViewOffIcon />}
                size="sm"
                onClick={handleClick}
              ></IconButton>
            </InputRightElement>
          </InputGroup>
          <Button
            isLoading={loading}
            onClick={handelSubmit}
            fontSize={"sm"}
            colorScheme="blue"
            width={"full"}
            mt="30px"
          >
            Log in
          </Button>
          <HStack my="10px">
            <Divider />
            <Text>or</Text>
            <Divider />
          </HStack>
          <Link to="/register">
            <Button
              fontSize={"sm"}
              variant={"outline"}
              colorScheme="blue"
              width={"full"}
            >
              Sign Up
            </Button>
          </Link>
        </Box>
      </Box>{" "}
    </Box>
  );
};

export default Login;
