<template>
  <div>
    <div class="bunner center">
      <img class="bunner_img" src="/img/imgheader/Bunner_Photo.jpg" alt="img" />

      <div class="bunner_info">
        <h3 class="bunner_info_tituleContent">Let Your Home Be Unique</h3>
        <p class="bunner_info_text">
          There are many variations of the passages of lorem Ipsum fromavailable,
          majority.
        </p>
        <button class="bunner_button">
          Get Started <img src="/img/imgheader/button_Vector.svg" alt="img" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BunnerComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.bunner {
  display: block;
  overflow: hidden;
  position: relative;
  border-radius: 30px;
  margin-top: 57px;
}
.bunner_img { 
    width: 100%;
  height: auto;
  display: block;
  top: 0;
  left: 0;
  border-radius: 30px;
}
.bunner_info {
  width: 434px;
  position: absolute;
  top: 30%;
  padding-left: 3%;
  color: #292F36;
}
.bunner_info_tituleContent {
  font-weight: 400;
  font-size: 65px;
  line-height: 81px;
  text-align: left;
}
.bunner_info_text {
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
}
.bunner_button {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 21px;
  width: 220px;
  height: 75px;
  padding: 26px 49px 26px 48px;
  gap: 10px;
  border-radius: 18px 18px;
  background-color: #292F36;
  font-size: 18px;
  color: aliceblue;
  border: none;
}

</style>
