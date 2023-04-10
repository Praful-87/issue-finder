import {
  Box,
  Button,
  Center,
  Collapse,
  Select,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  FormControl,
  FormLabel,
  Input,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { getData } from "../utils/getData";
import { updater } from "../utils/updater";
import { Link } from "react-router-dom";

const Admin = () => {
  const [data, setData] = useState([]);
  const newPerson = useRef(null);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  async function fetChData() {
    let res = await getData();
    setData(res);
  }
  function handelSubmit(id) {
    try {
      // updater(payload, id);
      // fetChData();
      console.log(id);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    fetChData();
  }, []);
  return (
    <Box>
      <Tabs size="md" isFitted variant="enclosed" mt={4}>
        <TabList mb="1em">
          <Tab _selected={{ color: "white", bg: "blue.400" }}>
            Unallocated Task
          </Tab>
          <Tab _selected={{ color: "white", bg: "blue.400" }}>
            Allocated Task
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TableContainer>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Customer Username</Th>
                    <Th>Product Type</Th>
                    <Th>Issue Type</Th>
                    <Th>Date Of Submission</Th>
                    <Th> </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.length > 0 &&
                    data
                      .filter((el) => !el.allocated_to)
                      .map((el) => {
                        return (
                          <Tr my="5px" key={el._id}>
                            <Td>{el.username}</Td>
                            <Td>{el.product_type}</Td>
                            <Td overflowY={"scroll"}>
                              {el.issues.map((el, i) => {
                                return (
                                  <Text my='5px' textTransform={"capitalize"} key={i}>
                                    {el}
                                  </Text>
                                );
                              })}
                            </Td>
                            <Td>{el.date}</Td>
                            <Td>
                              <Center>
                                <Link to={`/more/${el._id}`}>
                                  <Button size="sm" colorScheme="blue">
                                    More Deatils
                                  </Button>
                                </Link>
                              </Center>
                            </Td>
                          </Tr>
                        );
                      })}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel>
            <TableContainer>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Employye Username</Th>
                    <Th>Product Type</Th>
                    <Th>Issue Type</Th>
                    <Th>Date Of Submission</Th>
                    <Th>Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.length > 0 &&
                    data
                      .filter((el) => el.allocated_to)
                      .map((el) => {
                        return (
                          <Tr key={el._id}>
                            <Td>{el.allocated_to}</Td>
                            <Td>{el.product_type}</Td>
                            <Td overflowY={"scroll"} >
                              {el.issues.map((el, i) => {
                                return (
                                  <Text my='5px' textTransform={"capitalize"} key={i}>
                                    {el}
                                  </Text>
                                );
                              })}
                            </Td>
                            <Td>{el.date}</Td>
                            <Td>{el.status}</Td>
                          </Tr>
                        );
                      })}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Admin;
