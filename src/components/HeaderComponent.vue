<template>
  <div class="center">
    <div class="headerLine">
      <div class="headerLine_logo">
        <img :src= 'path' alt="img" />
        <p class="headerLine_logoText">Interno</p>
      </div>
      <div class="headerLine_bredCrambs">
        <a
          v-for="crumb in crumbs"
          :key="crumb.id"
          class="crumbs"
          :href="crumb.hrefCramb"
          >{{ crumb.nameCrumb }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",

  data() {
    return {
      crumbs: [
        { id: 0, nameCrumb: "Home /", hrefCramb: "#" },
        { id: 1, nameCrumb: "Project /", hrefCramb: "#" },
        { id: 2, nameCrumb: "Blog", hrefCramb: "#" },
      ],
      path:'../img/imgheader/header_Logo.svg'
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.center {
  padding-right: calc(50% - 600px);
  padding-left: calc(50% - 600px);
}

.headerLine {
  padding-top: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.headerLine_logo {
  display: flex;
  flex-direction: row;
}
.headerLine_logoText {
  font-size: 40px;
  font-weight: 400;
  line-height: 50px;
  padding-left: 10px;
  color: #292F36;
}
.headerLine_bredCrambs {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
}
.headerLine .crumbs {
  text-decoration: none;
  color: #292F36;
  font-family: Jost;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  text-align: center;
}

</style>
