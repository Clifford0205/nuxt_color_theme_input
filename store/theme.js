export const state = () => ({
  isDark: false,
});

export const actions = {
  toggleTheme({ commit, state }) {
    commit('TOGGLE_THEME', !state.isDark);
  },
  setTheme({ commit }, booleanValue) {
    commit('TOGGLE_THEME', booleanValue);
  },
};

export const mutations = {
  TOGGLE_THEME(state, isDark) {
    state.isDark = isDark;
    // 放到html上及localStorage
    if (state.isDark) {
      document.documentElement.setAttribute('data-mode', 'dark');
      this.$storage.setStorage('isDark', true);
    } else {
      console.log('setLight');
      document.documentElement.setAttribute('data-mode', 'light');
      this.$storage.setStorage('isDark', false);
    }
    // // 可toggle或指定dark或light
    // if (mode === 'toggle') {
    //   state.isDark = !state.isDark;
    // } else {
    //   state.isDark = mode === 'dark';
    // }
    // // 放到html上及localStorage
    // if (state.isDark) {
    //   document.documentElement.setAttribute('data-mode', 'dark');
    //   localStorage.setItem('mode', 'dark');
    // } else {
    //   document.documentElement.setAttribute('data-mode', 'light');
    //   localStorage.setItem('mode', 'light');
    // }
  },
};
