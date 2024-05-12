<template>
  <div id="app">
    <HeaderComponent />
    <router-view />
    <FooterComponnent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponnent from "./components/FooterComponnent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponnent,
  },
  created() {
    this.$router.push({ name: "mainpage" });
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
