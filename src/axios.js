import axios from "axios";
const instance = axios.create({
  baseURL: "https://127.0.0.1:5001/canvas-n-co/us-central1/api", // the API url (cloud function)
});

export default instance;
