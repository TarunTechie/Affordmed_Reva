import axios from "axios";
import { client } from "./client";
export const api = axios.create({
    baseURL: "http://20.244.56.144/test",
})

async function getToken()
{
    try {
        const response = await axios.post('http://20.244.56.144/test/auth', client)
        const token=response.data.access_token
        localStorage.setItem("accesstoken",token)
        return token
    } catch (error) {
        console.error(error)
        return null
    }
}

api.interceptors.request.use(
    async (config) => {
      let token = localStorage.getItem("accessToken"); 
      if (!token) {
        token = await getToken();
      } 
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
)
  
api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response && error.response.status === 401) {
        console.warn("Token expired. Fetching new token...");
        const newToken = await getToken();
        if (newToken) {
          error.config.headers.Authorization = `Bearer ${newToken}`;
          return api.request(error.config);
        }
      }
      return Promise.reject(error);
    }
  )