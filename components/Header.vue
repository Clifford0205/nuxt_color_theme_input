<template>
  <header class="the-header">
    <div class="header-content">
      <ToggleThemeBtn />
    </div>
  </header>
</template>

<script>
import ToggleThemeBtn from '@/components/ToggleThemeBtn';

export default {
  name: 'Header',
  components: {
    ToggleThemeBtn,
  },
  data() {
    return {};
  },
};
</script>
