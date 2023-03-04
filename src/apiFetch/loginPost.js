import { baseApiUrl } from './createAxios';

export const apiLoginPost = loginPost => {
  return baseApiUrl().post('/api/auth/login', loginPost);
};
