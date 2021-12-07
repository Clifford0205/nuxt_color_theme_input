<template>
  <section class="main-content">
    <div class="home">
      <b-form-group label="選擇輸入的資料型態">
        <b-form-radio-group
          id="btn-radios-1"
          v-model="showType"
          :options="options"
          name="radios-btn-default"
          buttons
        ></b-form-radio-group>
      </b-form-group>
      <InputComponent :showType="showType" v-model="result" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'PagesIndex',
  data() {
    return {
      result: '',
      selectList: [
        { val: '', item: 'Please select one' },
        { val: 'A', item: '使用者A' },
        { val: 'B', item: '使用者B' },
        { val: 'C', item: '使用者C' },
      ],
      options: [
        { text: 'text', value: 'text' },
        { text: 'radio', value: 'radio' },
        { text: 'select', value: 'select' },
      ],
      showType: 'text',
    };
  },
  head() {
    return {
      title: '山葵組設計專案首頁',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '山葵組設計專案首頁',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: '山葵組設計專案首頁',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '山葵組設計專案首頁',
        },
      ],
    };
  },
};
</script>
