<template>
  <div>
    <div class="input-text" v-if="showType === 'text'">
      <input type="text" v-model="result" />
    </div>
    <div class="input-radio" v-else-if="showType === 'radio'">
      <input type="radio" id="one" value="One" v-model="result" />
      <label for="one">One</label>
      <br />
      <input type="radio" id="two" value="Two" v-model="result" />
      <label for="two">Two</label>
      <br />
    </div>
    <div class="select" v-else>
      <select v-model="result">
        <option
          v-for="(option, index) in selectList"
          :value="option.val"
          :key="option.val"
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
  watch: {
    showType() {
      this.$emit('input', '');
    },
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
