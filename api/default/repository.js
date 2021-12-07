import createInterceptors from './interceptors';
import { infoRepository } from '@/api';
const url = 'https://mocki.io';

const createRepository = ({ app, $axios, redirect }, version) => {
  const backendApi = $axios.create();

  backendApi.setBaseURL(`${url}/${version}`);
  backendApi.defaults.timeout = 30000;

  const interceptors = createInterceptors({ app, backendApi, redirect });

  backendApi.onRequest(interceptors.onRequest);
  backendApi.onResponse(interceptors.onResponse);
  backendApi.onError(interceptors.onError);

  return {
    info: infoRepository(backendApi),
  };
};

export default createRepository;
