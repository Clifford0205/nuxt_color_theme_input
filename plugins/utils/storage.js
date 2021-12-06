import store from 'store2';

const storage = store;

const getStorage = key => {
  return storage.get(key);
};

const setStorage = (key, value) => {
  return storage.set(key, value);
};

const removeStorage = key => {
  return storage.remove(key);
};

export default {
  getStorage,
  setStorage,
  removeStorage,
};
