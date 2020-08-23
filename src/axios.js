import axios from "axios";

/* Base URL to make requests to the database */
const instance = axios.create({
  baseURL: "https://www.googleapis.com/customsearch/v1",
});

export default instance;
