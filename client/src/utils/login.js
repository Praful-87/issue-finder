import axios from "axios";
const { url } = require("./url");

function login(payload) {
  return axios.post(`${url}/user/login`, payload);
}

export { login };
