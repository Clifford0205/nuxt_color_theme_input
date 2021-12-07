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
  },
};
</script>
