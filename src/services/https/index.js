import axios from 'axios'

const https = axios.create({
    baseURL:  "https://reqres.in/api"
  });

  export default https