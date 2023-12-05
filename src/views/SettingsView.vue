<template>
  <div class="flex-col flex-center input-container" id="settings-container">
    <div class="flex-col flex-center" id="settings-content-container">
      <h1 class="header">Settings</h1>
      <ThemeToggle />
      <FileInputButton option="Import Data" name="import" v-bind:on-click="importData" />
      <FileInputButton option="Export Data" name="export" />
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
import FileInputButton from '@/components/FileInputButton.vue';

function importData() {
  return 0;
}

function exportData() {
  return 0;
}

export default defineComponent({
  name: 'SettingsView',
  components: {
    MenuButton,
    ThemeToggle,
    WarningButton,
    FileInputButton,
  },
  methods: {
    importData,
    exportData,
  },
});
</script>

<style lang="scss" scoped>
#settings-container {
  gap: 50px;
}

#settings-content-container {
  gap: 15px;
}
</style>
