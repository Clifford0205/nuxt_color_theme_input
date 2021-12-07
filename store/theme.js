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
      document.documentElement.setAttribute('data-mode', 'light');
      this.$storage.setStorage('isDark', false);
    }
  },
};

export const getters = {
  getIsDark(state) {
    return state.isDark;
  },
};
