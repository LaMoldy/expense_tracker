import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  interface State {
    darkMode: boolean
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
