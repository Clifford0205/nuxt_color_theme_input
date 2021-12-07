<template>
  <div class="col-md-6 col-12">
    <div class="card-container">
      <div class="avatar list-item">
        <img :src="card.avatar" alt="怪獸頭貼" />
      </div>
      <p class="name list-item">名字:{{ card.name }}</p>
      <p class="city list-item">居住地:{{ card.city }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },

  methods: {},
};
</script>
