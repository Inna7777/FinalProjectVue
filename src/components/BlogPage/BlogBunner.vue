<template>
  <div>
    <div class="bunnerBlog">
      <img class="bunnerBlog_img" :src='banner[0].imgUrl' alt="img" />
      <div class="bunnerBlog_info">
        <h3 class="bunnerBlog_info_tituleContent">{{banner[0].title}}</h3>
        <div class="bunnerBlog_hrefs">
          <a href="#">{{banner[0].hrev1}}</a>
          <a href="#">{{banner[0].hrev2}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BlogBunner',
   props:{
    banner:{
      type: Array,
      default() { 
        return []
      }
    }

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
.bunnerBlog {
  display: block;
  overflow: hidden;
  position: relative;
  margin-top: 57px;
  display: flex;
  justify-content: center;
  align-items: end;
}
.bunnerBlog_img {
  width: 100%;
  height: auto;
  display: block;
  top: 0;
  left: 0;
}
.bunnerBlog_info {
  width: 503px;
  height: 178px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #292F36;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
.bunnerBlog_info_tituleContent {
  font-weight: 400;
  font-size: 50px;
  line-height: 62px;
  text-align: center;
}
.bunnerBlog_hrefs a {
  font-size: 22px;
  color: #292F36;
  text-decoration: none;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
}

</style>