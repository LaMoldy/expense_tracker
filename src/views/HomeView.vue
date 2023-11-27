<template>
  <div class="flex-col flex-center" id="menu-container">
    <h1 class="header">Main Menu</h1>
    <MenuButton text="Add Transaction" value="add" />
    <MenuButton text="View Transaction" value="view" />
    <MenuButton text="Settings" value="settings" />
    <MenuButton text="Quit" value="quit" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuButton from '../components/MenuButton.vue';

export default defineComponent({
  name: 'HomeView',
  components: { MenuButton },
});
</script>

<style lang="scss">
#menu-container {
  position: relative;
  top: 25%;
  gap: 10px;
}
</style>
