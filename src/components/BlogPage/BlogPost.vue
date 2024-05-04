<template>
  <div>
    <div class="post center">
      <h1 class="post_title">Latest Post</h1>
      <div class="post_block">
        <div class="post_img">
          <img src="/img/imgblogpage/blog_post.jpg" alt="img" />
        </div>
        <div class="post_content">
          <h2 class="post_content_title">
            Low Cost Latest Invented Interior Designing Ideas
          </h2>
          <p class="post_content_text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
            dignissim maximus.posuere in.Contrary to popular belief.<br />
            <br />
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classica.
          </p>
          <p class="post_content_date">26 December,2022</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',

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
.post {
  margin-top: 200px;
  margin-bottom: 150px;
}
.post_block {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 65px;
  padding: 22px;
}
.post_content {
  width: 489px;
}
.post_content_title {
  margin-bottom: 27px;
  font-size: 25px;
  font-weight: 400;
  line-height: 31.25px;
  padding-bottom: 22px;
}
.post_content_text {
  font-size: 22px;
  font-weight: 400;
  line-height: 31px;
  padding-bottom: 41px;
  gap: 41px;
}

</style>