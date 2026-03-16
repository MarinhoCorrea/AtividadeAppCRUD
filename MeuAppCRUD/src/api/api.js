import axios from 'axios';

const api = axios.create({
  baseURL: "https://wife-aruba-innovation-cookie.trycloudflare.com/",
});

export default api;
