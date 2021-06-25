const axios = require('axios');

const baseUrl = 'https://api.github.com'

export function search(params) {
  return axios.get(`${baseUrl}/search/repositories`, {params: params})
    .then(res => {
      return res
    })
  .catch (error => {throw Error(error)})
}
