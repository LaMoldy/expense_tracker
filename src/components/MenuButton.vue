<template>
  <button v-on:click="buttonClickHandler" :value="buttonValue">
    {{  text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import router from '../router';

function buttonClickHandler(event: Event) {
  const clickedButtonValue = (event.target as HTMLButtonElement).value;

  if (clickedButtonValue === 'add') {
    router.push('/add/transactions');
  } else if (clickedButtonValue === 'view') {
    router.push('/view/transactions');
  } else if (clickedButtonValue === 'settings') {
    router.push('/settings');
  } else if (clickedButtonValue === 'backSettings') {
    router.push('/');
  } else {
    window.close();
  }
}

export default defineComponent({
  name: 'MenuButton',
  props: {
    text: String,
    buttonValue: String,
  },
  methods: {
    buttonClickHandler,
  },
});
</script>

<style lang="scss" scoped>
button {
  width: 250px;
  padding: 10px;
  margin-bottom: 5px;
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
