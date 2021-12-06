import storage from './utils/storage';

export default (context, inject) => {
  inject('storage', storage);
};
