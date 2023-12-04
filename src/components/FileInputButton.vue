<template>
  <div id="input-container">
    <p class="text-center">{{ option }}</p>
    <label for="import">
      <input name="import" id="import" type="file" />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormButton',
  props: {
    option: String,
  },
});
</script>

<style lang="scss">
#input-container {
  width: 250px;
  padding: 10px;
  border-radius: 10px;
  border: 0 solid transparent;
  font-size: 1em;
  background-color: #0059ff;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: #3e82ff;
  }
}

label {
  display: none;
}

p {
  font-size: 1em;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
