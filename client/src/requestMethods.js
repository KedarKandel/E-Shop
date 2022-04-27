import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjE4NTk3NDkyNDIwMjdiNjcxMWYzMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTA2OTg1OCwiZXhwIjoxNjUxMjQyNjU4fQ.4ianfzaXzhcWzAOoIjUJGKS8GRUkxQ03D9HGl_8vT2Q";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${token}` },
});
