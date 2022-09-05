import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_ENDPOINT;

export const signup = async (newObject) => {
  const url = `${BASE_URL}/auth/register`;
  const response = await axios.post(url, newObject);
  return response.data;
};

export const login = async (newObject) => {
  const url = `${BASE_URL}/auth/login`;
  const response = await axios.post(url, newObject);
  return response.data;
};

export const logout = async () => {
  const url = `${BASE_URL}/auth/logout`;
  const response = await axios.get(url);
  return response.data;
};

// const config = {
//     auth: {
//       username: import.meta.env.VITE_API_USERNAME,
//       token: import.meta.env.VITE_API_TOKEN,
//     },
//     headers: {
//       'Content-Type': 'text/csv',
//       'Content-Disposition': 'attachment; filename=file',
//     },
//   };
