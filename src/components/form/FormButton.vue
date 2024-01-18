<template>
  <button v-bind:on-click="callback">{{ displayValue }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormButton',
  props: {
    callback: Function,
    displayValue: String,
  },
});
</script>

<style lang="scss" scoped>
button {
  display: block;
  margin: 15px auto 15px auto;
  width: 150px;
  padding: 7px;
  border-radius: 10px;
  border: 0 solid transparent;
  font-size: 1em;
  background-color: #0059ff;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: #3e82ff;
  }
}
</style>
