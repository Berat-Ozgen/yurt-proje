import axios from 'axios';

export const baseApiUrl = () => {
  return axios.create({
    baseURL: 'http://localhost:8000',
  });
};
