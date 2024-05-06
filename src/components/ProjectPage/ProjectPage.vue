<template>
  <div>
    <HeaderComponent />
    <BlogBunner :banner='banner'/>
    <!-- пердаем значение id кнопки через функцию updateSelectedTag -->
    <ProjectButtons @selectedTag='updateSelectedTag'/> 
    <!-- передаем полученное значение дочернему компоненту через пропсы -->
    <ProjectCarts  :selectedTag='parentSelectedTag'/>
    <FooterComponent/>
    
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import BlogBunner from '@/components/BlogPage/BlogBunner.vue'
import ProjectButtons from '@/components/ProjectPage/ProjectButtons.vue'
import ProjectCarts from '@/components/ProjectPage/ProjectCarts.vue'
import FooterComponent from '@/components/FooterComponnent.vue'
export default {
  name: 'ProjectPage',

  components:{
    HeaderComponent,
    BlogBunner,
    ProjectButtons,
    ProjectCarts,
    FooterComponent
  },

  data() {
    return {
        banner:[
           { id:1, imgUrl:'/img/imgprojectpage/Project_Banner.jpg', title:'Our Project', hrev1:'Home/', hrev2: 'Blog' } ,
            
        ],
        parentSelectedTag:''      
    };
  },
  methods: {
     updateSelectedTag(value) {
      this.parentSelectedTag = value;
    }
  },

  
};
</script>

<style scoped>

</style>