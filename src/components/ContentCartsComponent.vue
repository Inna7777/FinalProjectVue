<template>
  <div class="content_carts center">
    <div v-for="element in blockElements" :key="element.id" class="content_carts_cart">
      <div class="content_carts_cart_img">
        <img :src="element.imgaddress" alt="img" />
      </div>
      <div class="content_carts_cart_block">
        <div class="content_carts_cart_text">
          <h4 class="content_carts_cart_text_h">{{ element.textH }}</h4>
          <p class="content_carts_cart_text_p">{{ element.textP }}</p>
        </div>
        <button class="content_carts_button">{{ element.buttonSign }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentCartsComponent",

  data() {
    return {
      blockElements: [
        {
          id: 1,
          imgaddress: "/img/imgcarts/image_cart1.jpg",
          textH: "Modern Kitchan",
          textP: "Decor / Artchitecture",
          buttonSign: ">",
        },
        {
          id: 2,
          imgaddress: "/img/imgcarts/image_cart2.jpg",
          textH: "Modern Kitchan",
          textP: "Decor / Artchitecture",
          buttonSign: ">",
        },
        {
          id: 3,
          imgaddress: "/img/imgcarts/image_cart3.jpg",
          textH: "Modern Kitchan",
          textP: "Decor / Artchitecture",
          buttonSign: ">",
        },
        {
          id: 4,
          imgaddress: "/img/imgcarts/image_cart4.jpg",
          textH: "Modern Kitchan",
          textP: "Decor / Artchitecture",
          buttonSign: ">",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.content_carts {
  margin-top: 93px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 56px;
}
.content_carts_cart_img {
  width: 525px;
  height: 525px;
}
.content_carts_cart_img img{
 width: 525px;
}
.content_carts_button {
  width: 70px;
  height: 70px;
  background-color: #f4f0ec;
  border: none;
  border-radius: 50%;
  color: #292f36;
  font-size: 22px;
}
.content_carts_cart_block {
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.content_carts_cart_text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5px;
}
.content_carts_cart_text_h {
  font-size: 25px;
  font-weight: 400;
  line-height: 31.25px;
}
.content_carts_cart_text_p {
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
}
.content_carts_cart_block:hover{
  background-color: #f4f0ec;
}
.content_carts_cart_block:hover button{
  background-color: white;
  color: #000;
}

</style>
