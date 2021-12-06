import storage from './utils/storage';

export default ({ store }) => {
  // 查看localStorage是否存有白天/黑夜模式的值
  if (process.client) {
    const currentMode = storage.getStorage('isDark')
      ? storage.getStorage('isDark')
      : null;

    if (currentMode) {
      store.dispatch('theme/setTheme', true);
    } else {
      store.dispatch('theme/setTheme', false);
      console.log('b');
    }

    // if (currentMode) {
    //   document.documentElement.setAttribute('data-mode', currentMode);

    //   if (currentMode === 'dark') {
    //     store.commit('colorChange/TOGGLE_IS_DARK', 'dark');
    //   } else {
    //     store.commit('colorChange/TOGGLE_IS_DARK', 'light');
    //   }
    // } else {
    //   store.commit('colorChange/TOGGLE_IS_DARK', 'light');
    // }
  }
};
