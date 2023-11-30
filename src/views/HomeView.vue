<template>
  <div class="flex-col flex-center input-container">
    <h1 class="header">Main Menu</h1>
    <MenuButton text="Add Transaction" buttonValue="add" />
    <MenuButton text="View Transactions" buttonValue="view" />
    <MenuButton text="Settings" buttonValue="settings" />
    <MenuButton text="Quit" buttonValue="quit" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuButton from '@/components/MenuButton.vue';

export default defineComponent({
  name: 'HomeView',
  components: { MenuButton },
});
</script>

<style lang="scss" scoped>

</style>
