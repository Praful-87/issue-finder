import {
  Button,
  Container,
  FormLabel,Select
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../utils/url";
import UserForm from "../components/UserForm";
import { updater } from "../utils/updater";
import Detatil from "../components/Detatil";

const MoreDetails = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  const Assign = useRef(null);
  const navigate = useNavigate();
  async function getById() {
    try {
      let res = await axios.get(`${url}/issue/${id}`);
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handelAssign() {
    if (Assign.current.value) {
      let payload = {
        allocated_to: Assign.current.value,
        status: "Open",
      };
      try {
        updater(payload, id);
        navigate("/admin");
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
      <FormLabel mt="20px" fontWeight={"bold"}>
        Descripiton
      </FormLabel>
      <Detatil value={data.description} />
      <Select ref={Assign} mt="20px" placeholder="Assign Task">
        <option value="employee2">Employee2</option>
      </Select>
      <Button onClick={handelAssign} colorScheme="blue" mt="10px">
        Submit
      </Button>
    </Container>
  );
};

export default MoreDetails;
