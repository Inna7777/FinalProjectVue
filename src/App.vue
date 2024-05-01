<template>
  <div id="app">
    <MainPage/>
    </div>
</template>

<script>
import MainPage from './components/MainPage.vue'

export default {
  name: "App",
  components: {
    MainPage
  },
};
</script>

<style>
#app {
  font-family: "DM Serif Display", "Jost", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-style: normal;
  margin: 0;
  padding: 0;
}

.center {
  padding-right: calc(50% - 600px);
  padding-left: calc(50% - 600px);
}
</style>
