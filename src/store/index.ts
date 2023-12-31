import { createStore, Store } from 'vuex';
import { InjectionKey } from 'vue';

export interface State {
  darkMode: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol('Store');

export default createStore<State>({
  state: {
    darkMode: false,
  },
  getters: {
  },
  mutations: {
    toggleTheme(state: State) {
      state.darkMode = !state.darkMode;
      const darkModeString: string = state.darkMode ? 'dark' : 'light';
      localStorage.setItem('darkMode', darkModeString);
    },
    setTheme(state: State, value: boolean) {
      state.darkMode = value;
    },
  },
  actions: {
  },
  modules: {
  },
});
