<template>
  <div>
    <div class="content center">
       <div class="content_heading">
        <h3 class="content_headin_titule">{{title}}</h3>
        <p class="content_heading_text">{{message}}</p>
       </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentComponent',
  props:{
    title: String,
    message: String
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
.content {
  margin-top: 96px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.content_heading {
  width: 737px;
  text-align: center;
}
.content_headin_titule {
  font-size: 50px;
  font-weight: 400;
  line-height: 62.5px;
  letter-spacing: 0.02em;
}
.content_heading_text {
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
}

</style>