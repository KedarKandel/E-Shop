import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjE4NTk3NDkyNDIwMjdiNjcxMWYzMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTE1MzQ4OCwiZXhwIjoxNjUxMzI2Mjg4fQ.VvVm4dpzOMV4U5SUErQ2Zz7NWbuBsAHinjdJ97zBkTQ";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${token}` },
});
