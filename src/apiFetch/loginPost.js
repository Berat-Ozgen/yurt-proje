import { baseApiUrl } from './createAxios';

export const apiLoginPost = loginData => {
  return baseApiUrl().post('/api/auth/login', loginData);
};