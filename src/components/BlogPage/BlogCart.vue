<template>
  <div>     
      <h1 class="post_title center">Articles & News</h1>
      <div class="blog center">
        <div class="blog_cart" v-for="item in blogItems" :key="item.id">
          <div class="blog_cart_child">
            <div class="blog_cart_img">
              <img :src='item.image' alt="img" />
            </div>
            <button class="blog_cart_button">{{ item.categoria}}</button>
            <div class="blog_cart_child_titul">
              <h3>{{item.titul}}</h3>
            </div>
            <div class="blog_cart_buttonblock">
              <p class="blog_cart_data">{{item.date}}</p>
              <button class="blog_cart_btn">></button>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'BlogCart',
  props:{
    blogItems:{
      type: Array,
      default() { 
        return []
      }
    }

  },

  data() {
    return {
     
    }

      
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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.blog_cart {
  width: 382px;
  border: solid 0.5px rgb(214, 213, 219);
  border-radius: 30px;
}
.blog_cart_child {
  position: relative;
  margin: 21px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.blog_cart_button {
  position: absolute;
  width: 129px;
  height: 41px;
  background-color: white;
  border: none;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  margin-right: 170px;
  margin-top: 30px;
}
.blog_cart_child_titul {
  padding-top: 21px;
}
.blog_cart_child_titul h3 {
  height: 75px;
  font-size: 25px;
  font-weight: 400;
  line-height: 31.25px;
  padding-right: 60px;
}
.blog_cart_buttonblock {
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
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