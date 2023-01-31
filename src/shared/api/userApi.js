import { mockedFetch } from '../utils';

const USERNAME_KEY = 'username';

export const setUsername = async (username) => {
  await mockedFetch(1500);

  return localStorage.setItem(USERNAME_KEY, username);
};

export const getUsername = async () => {
  await mockedFetch(1500);

  return localStorage.getItem(USERNAME_KEY);
};
