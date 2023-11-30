<template>
  <div class="flex-col flex-center input-container" id="settings-container">
    <div class="flex-col flex-center" id="settings-content-container">
      <h1 class="header">Settings</h1>
      <ThemeToggle />
      <WarningButton text="Clear Data" />
    </div>
    <MenuButton text="Back" buttonValue="backSettings" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ThemeToggle from '@/components/ThemeToggle.vue';
import MenuButton from '@/components/MenuButton.vue';
import WarningButton from '@/components/WarningButton.vue';

export default defineComponent({
  name: 'SettingsView',
  components: { MenuButton, ThemeToggle, WarningButton },
});
</script>

<style lang="scss" scoped>
#settings-container {
  gap: 200px;
}

#settings-content-container {
  gap: 15px;
}
</style>
