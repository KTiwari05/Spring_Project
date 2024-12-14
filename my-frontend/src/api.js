import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080", // Your Spring Boot backend URL
});

export default API;
