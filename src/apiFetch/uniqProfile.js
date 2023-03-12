import { baseApiUrl } from './createAxios';

export const apiUniqProfile = usersId => {
  return baseApiUrl().get(`/api/users/get-users/${usersId}`);
};
