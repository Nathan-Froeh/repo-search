const axios = require("axios");

const baseUrl = "https://api.github.com"

export function search(params) {
  return axios.get(`${baseUrl}/search/repositories`, {params: params});
}
