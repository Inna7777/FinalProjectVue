<template>
  <div id="detail-slider">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div
          id="cart"
          v-for="(slide, index) in allSliders"
          :key="index"
          :class="{ 'carousel-item ': true, active: index === currentSlide }"
        >
          <div class="description">
            <h1 class="title">{{ slide.title }}</h1>
            <p class="text">{{ slide.text }}</p>
          </div>
          <div class="slider_conteiner">
            <img class="d-block w-100" :src="slide.image" :alt="'Slide ' + (index + 1)" />
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        @click="prevSlide"
        href="#"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only only-prev">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        @click="nextSlide"
        href="#"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only only-next">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "DetailSlider",
  computed: {
    ...mapGetters(["allSliders", "currentSlide"]), //из гетеров передаем массив данных и номер текущего слайда
  },
  methods: {
    ...mapMutations(["nextSlide", "prevSlide"]),
    nextSlide() {
      this.$store.commit("nextSlide", this.currentSlide); //вызываем мутацию и передаем индекс текущего слайда
    },

    prevSlide() {
      this.$store.commit("prevSlide", this.currentSlide);
    },
  },
};
</script>

<style scoped>
.description {
  margin-top: 100px;
  width: 600px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: calc(50% - 300px);
}

.carousel-inner img {
  width: 600px !important;
  height: auto;
  border-radius: 50px;
}
.slider_conteiner {
  display: flex;
  justify-content: space-around;
}

.only-prev {
  color: #000;
  padding-left: 10em;
}
.only-next {
  color: #000;
  padding-right: 10em;
}
</style>
