<template>
  <div>
    <div class="blog center">
        <div class="blog_cart" v-for="item in blogItems" :key="item.id" v-show="selectedTag === '' || selectedTag === item.categoriy">
            <!-- //selectedTag--пропс из родительского класса ProjectPage-->
           <div class="blog_cart_img">
              <img :src='item.image' alt="img" />
            </div>
            <div class="blog_cart_titul">
            <div >
              <h3>{{item.title}}</h3>
              <p class="blog_cart_data">{{item.chapter}}/{{item.section}}</p>
            </div>
            <div class="blog_cart_buttonblock">
              
              <button class="blog_cart_btn">></button>
            </div>
            </div>
          </div>
           
  </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCarts',
  //пропс из родительского класса для отображения определенных картинок. Категорию передает клик по кнопке из компонента ProjectButtons
  props:{ 
    selectedTag: String
    
  },

  data() {
    return {
        blogItems:[
            {id:1,image:'img/imgprojectpage/project_cart1.jpg' ,title:'Minimal Bedroom', categoriy:'bedRoom', chapter:'Decor', section:'Architecture'},
            {id:2,image:'img/imgprojectpage/project_cart2.jpg' ,title:'Minimal Bedroom', categoriy:'kitchan', chapter:'Decor', section:'Architecture'},
            {id:3,image:'img/imgprojectpage/project_cart3.jpg' ,title:'Minimal Bedroom', categoriy:'kitchan', chapter:'Decor', section:'Architecture'},
            {id:4,image:'img/imgprojectpage/project_cart4.jpg' ,title:'Minimal Bedroom', categoriy:'bedRoom', chapter:'Decor', section:'Architecture'},
             {id:4,image:'img/imgprojectpage/project_cart5.jpg' ,title:'Minimal Bedroom', categoriy:'bathroom', chapter:'Decor', section:'Architecture'},
            {id:4,image:'img/imgprojectpage/project_cart6.jpg' ,title:'Minimal Bedroom', categoriy:'kitchan', chapter:'Decor', section:'Architecture'},
            {id:4,image:'img/imgprojectpage/project_cart7.jpg' ,title:'Minimal Bedroom', categoriy:'livingArea', chapter:'Decor', section:'Architecture'},
            {id:4,image:'img/imgprojectpage/project_cart8.jpg' ,title:'Minimal Bedroom', categoriy:'livingArea', chapter:'Decor', section:'Architecture'},
        ]
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>
.blog {
  margin-top: 52px;
 margin-left: 300px;
 margin-right: 300px;
  display: flex;
  flex-wrap: wrap;
 
}
.blog_cart{
    width: 300px;
}
.blog_cart img{
    width: 300px;
}
.blog_cart_titul{
    display: flex;
    justify-content: space-between;

}



.blog_cart_btn {
  width: 50px;
  height: 50px;
  background-color: #F4F0EC;
  border: none;
  border-radius: 50%;
  color: #292F36;
  font-size: 22px;
}
.blog_cart:hover {
  background-color: #f4f0ec;
}
.blog_cart:hover .blog_cart_btn {
  background-color: white;
}

</style>