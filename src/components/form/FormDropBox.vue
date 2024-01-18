<template>
  <label v-bind:for="name">
    {{ display }}
    <select v-bind:name="name" v-bind:id="name">
      <option value="Credit">Credit</option>
      <option value="Debit">Debit</option>
    </select>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormDropBox',
  props: {
    name: String,
    display: String,
  },
});
</script>

<style lang="scss" scoped>
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

label {
  font-size: 1.35em;
}

select {
  margin-top: 10px;
  padding: 5px;
  width: 100%;
  font-size: 0.8em;
}

</style>
