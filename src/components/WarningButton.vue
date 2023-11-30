<template>
  <button v-on:click="buttonClickHandler">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

function buttonClickHandler(event: Event) {
  console.log('clicked');
}

export default defineComponent({
  name: 'WarningButton',
  props: {
    text: String,
  },
  methods: {
    buttonClickHandler,
  },
});
</script>

<style scoped lang="scss">
button {
  width: 250px;
  padding: 10px;
  border-radius: 10px;
  border: 0 solid transparent;
  font-size: 1em;
  background-color: red;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: #fc8383;
  }
}
</style>
