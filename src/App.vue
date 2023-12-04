<template>
  <router-view/>
</template>

<script lang="ts">
export default {
  name: 'App',
  beforeMount() {
    const app: HTMLElement | null = document.getElementById('app');
    if (app) {
      app.classList.add('light');
    }
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-center {
  align-items: center;
  justify-content: center;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.header {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2em;
  line-height: 25px;
  margin-bottom: 25px;
}

.input-container {
  position: relative;
  top: 25%;
  gap: 10px;
}

.light {
  background-color: #fff;

  .header {
    color: #313131;
  }
}

.dark {
  background-color: #313131;
  color: white;

  .header {
    color: #ffffff;
  }
}

#app {
  width: 100vw;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
