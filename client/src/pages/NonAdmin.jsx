import axios from "axios";
import {
  Button,
  Center,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { url } from "../utils/url";

const MoreDetails = () => {
  const [data, setData] = useState("");

  async function getByName() {
    try {
      let res = await axios.get(`${url}/issue/user/employee2`);
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getByName();
  }, []);
  return (
    <>
      <Heading textAlign={"center"} size="sm" my="30px">
        My Tasks 😘
      </Heading>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Customer Username</Th>
              <Th>Product Type</Th>
              <Th>Issue Type</Th>
              <Th>Date Of Submission</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.length > 0 &&
              data.map((el) => {
                return (
                  <Tr key={el._id}>
                    <Td>{el.username}</Td>
                    <Td>{el.product_type}</Td>
                    <Td>{el.issues}</Td>
                    <Td>{el.date}</Td>
                    <Td>{el.status}</Td>
                    <Td>
                      <Center>
                        <Link to={`/mytask/${el._id}`}>
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
    </>
  );
};

export default MoreDetails;
