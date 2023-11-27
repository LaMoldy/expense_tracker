<template>
    <button @click="buttonClickHandler" value={value}>
        {{  text }}
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import router from '../router';

function buttonClickHandler(event: Event) {
  const buttonValue = (event.target as HTMLButtonElement).value;

  if (buttonValue === 'add') {
    router.push('/add/transactions');
  } else if (buttonValue === 'view') {
    router.push('/view/transactions');
  } else if (buttonValue === 'settings') {
    router.push('/settings');
  } else {
    window.close();
  }
}

export default defineComponent({
  name: 'MenuButton',
  props: {
    text: String,
    value: String,
  },
  methods: {
    buttonClickHandler,
  },
});
</script>

<style lang="scss">
button {
  width: 250px;
  padding: 10px;
  font-size: 1em;

  &:hover {
    cursor: pointer;
  }
}
</style>
