<template>
  <div class="flex-row" id="theme-container">
    <p>Dark Mode</p>
    <label for="theme" class="text-left switch flex-row">
      <input id="theme" type="checkbox" v-on:change="handleToggle" v-model="themeValue" />
      <span class="slider"></span>
    </label>
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

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;

  .input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}

.slider {
  position: absolute;
  border-radius: 5px;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-animation: .4s;
  transition: .4s;

  &:before {
    position: absolute;
    border-radius: 5px;
    box-shadow: 0 0 2px 2px #313131;
    content: "";
    height: 18px;
    width: 18px;
    left: -5px;
    bottom: 1px;
    background-color: #fff;
    -webkit-transition: .4s;
    transition: .4s;
  }
}

input {
  &:checked + .slider {
    background-color: #2196F3;
  }
  &:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  &:checked + .slider:before {
    transform: translateX(26px);
    -ms-transform: translateX(26px);
  }
}

</style>
