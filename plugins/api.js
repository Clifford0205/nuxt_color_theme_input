import createRepository from '@/api/default/repository';

const repository = (ctx, inject) => {
  const repositoryWithAxios = createRepository(ctx, 'v1');
  inject('api', repositoryWithAxios);
};

export default repository;
