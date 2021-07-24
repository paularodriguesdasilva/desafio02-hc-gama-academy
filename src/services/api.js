import axios from "axios";

const api = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/paularodriguesdasilva/desafio02-hc-gama-academy-fakeapi",
});

export default api;
