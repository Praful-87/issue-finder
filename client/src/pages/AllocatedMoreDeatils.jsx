import {
  Box,
  Button,
  Container,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../utils/url";
import UserForm from "../components/UserForm";
import { updater } from "../utils/updater";

const MoreDetails = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  const Status = useRef(null);
  const navigate = useNavigate();
  async function getById() {
    try {
      let res = await axios.get(`${url}/issue/${id}`);
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handelChangeStatus() {
    if (Status.current.value) {
      let payload = {
        status: Status.current.value,
      };
      try {
        updater(payload, id);
        navigate("/mytask");
      } catch (error) {
        console.log(error.message);
      }
    }
  }
  // console.log(data);

  useEffect(() => {
    getById();
  }, []);
  return (
    <Container>
      {data && <UserForm data={data} />}
      <FormLabel fontWeight={"bold"} mt="20px">
        Status
      </FormLabel>
      <Input defaultValue={data.status} />
      <FormLabel mt="20px" fontWeight={"bold"}>
        Descripiton
      </FormLabel>
      <Box>{data.description}</Box>
      <Select ref={Status} mt="20px" placeholder="Change Status">
        <option value="On Hold">On Hold</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </Select>

      <Button onClick={handelChangeStatus} colorScheme="blue" mt="10px">
        Submit
      </Button>
    </Container>
  );
};

export default MoreDetails;
