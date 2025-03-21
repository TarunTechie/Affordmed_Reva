const axios = require("axios");
const AUTH_CREDENTIALS=require('./client')
const AUTH_URL = "http://20.244.56.144/test/auth";
const API_BASE_URL = "http://20.244.56.144/test";

let authToken = null;

async function fetchAuthToken() {
  try {
    const response = await axios.post(AUTH_URL, AUTH_CREDENTIALS, {
      headers: { "Content-Type": "application/json" },
    });
    authToken = response.data.access_token;
    console.log("token fetched successfully.");
  } catch (error) {
    console.error("Error fetching auth token:", error.response?.data || error.message);
    throw new Error("Failed");
  }
}

// Axios instance with dynamic authorization header
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(async (config) => {
  if (!authToken) await fetchAuthToken();
  config.headers.Authorization = `Bearer ${authToken}`;
  return config;
});

module.exports = api;
