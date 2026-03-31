import axios from 'axios';

const api = axios.create({
  baseURL: "https://genre-diesel-dig-yields.trycloudflare.com",
});

export default api;
