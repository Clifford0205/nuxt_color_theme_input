<template>
  <div>
    <client-only>
      <div class="switcher-wrap">
        <input id="checkbox" type="checkbox" class="switcher" v-model="theme" />
        <label for="checkbox" class="switch-label">
          <span class="switch-icon">🌙</span>
          <span class="switch-icon">☀️</span>
        </label>
      </div>
    </client-only>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ToggleThemeBtn',

  mounted() {
    // const initUserTheme = this.getMediaPreference();
    // this.setTheme(initUserTheme);
  },

  data() {
    return {
      userTheme: 'light-theme',
    };
  },

  computed: {
    ...mapGetters('theme', ['getIsDark']),

    theme: {
      get() {
        return this.getIsDark;
      },
      set(val) {
        // console.log(val);
        this.toggleTheme();
      },
    },
  },

  methods: {
    ...mapActions('theme', ['toggleTheme']),

    setTheme(theme) {
      localStorage.setItem('user-theme', theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
