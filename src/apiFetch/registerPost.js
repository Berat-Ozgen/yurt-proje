import { baseApiUrl } from './createAxios';

export const apiRegisterPost = registerData => {
  return baseApiUrl().post('/api/auth/register', registerData);
};
