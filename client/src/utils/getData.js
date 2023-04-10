import axios from "axios";
import { url } from "./url";

async function getData() {
  try {
    let res = await axios.get(`${url}/issue`);
    return res.data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}
export { getData };
