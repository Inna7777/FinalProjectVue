<template>
  <div id="detail-slider">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
       <div class="carousel-inner">
         <div v-for="(slide, index) in allSliders" :key="index" :class="{ 'carousel-item': true, 'active': index === currentSlide }">
           <img class="d-block w-100" :src="slide.image" :alt="'Slide ' + (index + 1)">
         </div>
       </div>
       <a class="carousel-control-prev" @click="prevSlide" href="#" role="button" data-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="sr-only">Previous</span>
       </a>
       <a class="carousel-control-next" @click="nextSlide" href="#" role="button" data-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="sr-only">Next</span>
       </a>
     </div>
    
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap'
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'DetailSlider',
  computed: {
    ...mapGetters(['allSliders','currentSlide'])
  },
 methods: { 
  
         ...mapMutations(['nextSlide', 'prevSlide']),
  nextSlide() {
    this.$store.commit('nextSlide', this.currentSlide);
  },
       
       prevSlide() {
         this.$store.commit('prevSlide', this.currentSlide) 
       },
     }
   };
   

</script>

<style scoped>

 .carousel-inner img  {
  width: 300px !important;
  height: auto; 
  
}
.carousel-inner{
  display: flex !important; 
  justify-content: space-around; 
  
}

.sr-only {
  color: #000;
}


</style>




