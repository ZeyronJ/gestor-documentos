import axios from "axios";

export const loginRequests = async (datos) =>
  await axios.post("http://localhost:4000/login", datos);
