import axios from "axios";
const { url } = require("./url");

async function updater(payload, id) {
  try {
    let res = await axios.patch(`${url}/issue/${id}`, payload);
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
}

export { updater };
