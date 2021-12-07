export const infoRepository = request => ({
  fetchFakeInfo() {
    return request({
      method: 'get',
      url: `/f63f2654-c574-424c-aa63-38d01e011ad4`,
    });
  },
});

export default infoRepository;
