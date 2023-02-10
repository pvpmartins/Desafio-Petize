import axios from "axios";

import process from "process";

export const api = axios.create({
  baseURL: "https://api.github.com/users/",
});
