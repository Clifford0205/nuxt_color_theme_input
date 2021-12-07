<template>
  <div>
    <div v-if="showType === 'text'" class="input-text">
      <input v-model="result" type="text" />
    </div>
    <div v-else-if="showType === 'radio'" class="input-radio">
      <input id="one" v-model="result" type="radio" value="One" />
      <label for="one">One</label>
      <br />
      <input id="two" v-model="result" type="radio" value="Two" />
      <label for="two">Two</label>
      <br />
    </div>
    <div v-else class="select">
      <select v-model="result">
        <option
          v-for="(option, index) in selectList"
          :key="option.val"
          :value="option.val"
          :disabled="index == 0"
        >
          {{ option.item }}
        </option>
      </select>
    </div>
    <div class="result-show">資料結果:{{ result }}</div>
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    showType: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Array],
      default: '',
    },
  },

  data() {
    return {
      selectList: [
        { val: '', item: 'Please select one' },
        { val: 'A', item: '使用者A' },
        { val: 'B', item: '使用者B' },
        { val: 'C', item: '使用者C' },
      ],
    };
  },
  computed: {
    result: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  watch: {
    showType() {
      this.$emit('input', '');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
