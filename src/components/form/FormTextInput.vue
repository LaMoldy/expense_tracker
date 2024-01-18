<template>
  <label v-bind:for="name">
    {{ display }}:<br />
    <input type='text' v-bind:id="name" v-bind:name="name" v-bind:placeholder="placeholder" />
  </label>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormTextInput',
  props: {
    name: String,
    display: String,
    placeholder: String,
  },
});
</script>

<style lang='scss' scoped>
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

label {
  font-size: 1.35em;
}

input[type=text] {
  margin-top: 10px;
  width: 100%;
  padding: 5px;
  font-size: 1em;
}
</style>
