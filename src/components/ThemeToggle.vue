<template>
  <label for="theme" class="text-left">
    Dark Mode
    <input id="theme" type="checkbox" v-on:change="handleToggle" />
  </label>
</template>

<script lang="ts">
import { useStore, Store } from 'vuex';
import { defineComponent } from 'vue';
import { key, State } from '@/store';

let store: Store<State>;

function handleToggle() {
  store.commit('toggleTheme');

  // Apply styles
  const app: HTMLElement | null = document.getElementById('app');
  if (app) {
    app.classList.remove('light', 'dark');
    const theme: string = store.state.darkMode ? 'dark' : 'light';
    app.classList.add(theme);
  }
}

export default defineComponent({
  name: 'ThemeToggle',
  setup() {
    store = useStore(key);
  },
  methods: {
    handleToggle,
  },
});
</script>

<style scoped lang="scss">

</style>