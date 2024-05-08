<template>
  <div>
    <HeaderComponent/>
    <DetailSlider/>
    <FooterComponnent/>
  </div>
</template>

<script>
import HeaderComponent from '../HeaderComponent.vue';
import FooterComponnent  from '../FooterComponnent.vue'
import DetailSlider  from '../ProjectDetails/DetailSlider.vue'

export default {
  name: 'DetailsPage',
  components:{
      HeaderComponent,
      DetailSlider,
      FooterComponnent   
  },

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>

</style>