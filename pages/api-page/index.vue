<template>
  <section class="main-content">
    <div class="api-page container">
      <div class="card-list row">
        <Card v-for="(card, index) in dataList" :key="index" :card="card" />
      </div>

      <div class="link-area">
        頁面連結:<nuxt-link :to="{ name: 'index' }"> 首頁 </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PagesApiPage',
  data() {
    return {
      dataList: [],
    };
  },
  head() {
    return {
      title: '山葵組設計專案資料頁',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '山葵組設計專案資料頁',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: '山葵組設計專案資料頁',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '山葵組設計專案資料頁',
        },
      ],
    };
  },
  created() {
    this.fetchFakeInfo();
  },
  methods: {
    fetchFakeInfo() {
      this.$api.info.fetchFakeInfo().then(res => {
        this.dataList = res;
      });
    },
  },
};
</script>
