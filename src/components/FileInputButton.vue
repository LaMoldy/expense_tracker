<template>
  <button id="input-button" v-on:click="handleClick(name!)">
    {{ option }}
    <label v-bind:for="name">
      <input v-bind:name="name" v-bind:id="name" type="file" />
    </label>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

function clickInput(id: string) {
  const button: HTMLElement | null = document.getElementById(id);
  if (button) {
    button.click();
  }
}

function handleClick(buttonName: string) {
  console.log('here');
  if (buttonName === 'import') {
    clickInput('import');
  } else if (buttonName === 'export') {
    clickInput('export');
  }
}

export default defineComponent({
  name: 'FormButton',
  props: {
    option: String,
    name: String,
  },
  methods: {
    handleClick,
  },
});
</script>

<style lang="scss" scoped>
button {
  width: 250px;
  padding: 10px;
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

label {
  display: none;
}

p {
  font-size: 1em;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
