import axios from "axios";

import process from "process";

export const api = axios.create({
  baseURL: "https://api.github.com/users/",
  headers: { authorization: "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" },
});
