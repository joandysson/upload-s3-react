import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/api/v1/image"
});

export default api;
