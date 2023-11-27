<template>
  <router-view/>
</template>

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

.header {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2em;
  margin-bottom: 25px;
  color: #ffffff;
}

#app {
  width: 100vw;
  height: 100vh;
  background-color: #21215e;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
