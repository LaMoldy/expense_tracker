<template>
  <label for="theme" class="text-left">
    Dark Mode
    <input id="theme" type="checkbox" v-on:change="handleToggle" v-model="themeValue" />
  </label>
</template>

<script lang="ts">
import { useStore, Store } from 'vuex';
import { defineComponent, ref, Ref } from 'vue';
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

    const darkModeString: string | null = localStorage.getItem('darkMode');

    let themeValue: Ref<boolean> = ref(false);
    if (darkModeString) {
      themeValue = ref(darkModeString === 'dark');
      console.log(themeValue);
    }

    return { themeValue };
  },
  methods: {
    handleToggle,
  },
});
</script>

<style scoped lang="scss">

</style>
