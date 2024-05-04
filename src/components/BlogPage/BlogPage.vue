<template>
  <div>
    <HeaderComponent/>
    <BlogBunner/>
    <BlogPost/>
    <BlogCart/>
    <FooterComponent/>
    
  </div>
</template>

<script>
import HeaderComponent from '../HeaderComponent.vue'
import BlogBunner from '../BlogPage/BlogBunner.vue'
import BlogPost from '../BlogPage/BlogPost.vue'
import FooterComponent from '../FooterComponnent.vue'
import BlogCart from '../BlogPage/BlogCart.vue'
export default {
  name: 'BlogPage',

   components: {
    HeaderComponent,
    BlogBunner,
    BlogPost,
    BlogCart,
    FooterComponent
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