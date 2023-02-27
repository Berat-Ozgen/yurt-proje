import axios from 'axios';

export const baseApiName = async () => {
  return axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos/1',
  });
};
