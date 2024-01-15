<template>
  <div class="flex-row" id="theme-container">
    <p>Dark Mode</p>
    <input id="switch" type="checkbox" v-on:change="handleToggle" v-model="themeValue" />
    <!-- eslint-disable-next-line -->
    <label for="switch"></label>
  </div>
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
#theme-container {
  justify-content: space-between;
  align-content: space-between;
  width: 250px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1em;
}

p {
  font-weight: bold;
}

input[type=checkbox] {
  height: 0;
  width: 0;
    visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 60px;
  height: 30px;
  background: grey;
  display: block;
  border-radius: 100px;
  position: relative;
}

label:after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 90px;
  transition: 0.3s;
}

input:checked + label {
  background: #0059ff;
}

input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

label:active:after {
  width: 60px;
}
</style>
