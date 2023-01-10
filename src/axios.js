import axios from "axios";
const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/mye-4f48a/us-central1/api",
});
export default instance;
// http://127.0.0.1:5001/cloned-e/us-central1/api
