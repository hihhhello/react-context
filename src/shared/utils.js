/**
 * Allows to mock async action.
 */
export const mockedFetch = async (timeout) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
