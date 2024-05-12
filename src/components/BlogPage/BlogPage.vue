<template>
  <div>
    <BlogBunner :banner="banner" />
    <BlogPost />
    <BlogCart :blogItems="carts" />
  </div>
</template>

<script>
import BlogBunner from "../BlogPage/BlogBunner.vue";
import BlogPost from "../BlogPage/BlogPost.vue";

import BlogCart from "../BlogPage/BlogCart.vue";
export default {
  name: "BlogPage",

  components: {
    BlogBunner,
    BlogPost,
    BlogCart,
  },

  data() {
    return {
      banner: [
        {
          id: 1,
          imgUrl: "/img/imgblogpage/buner_blog.jpg",
          title: "Articles & News",
          hrev1: "Home/",
          hrev2: "Blog",
        },
      ],
      carts: [],
    };
  },

  mounted() {},

  methods: {
    fetchData() {
      return [
        {
          image: "/img/imgblogpage/blog_Image1.jpg",
          categoria: "Kitchan Design",
          titul: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          image: "/img/imgblogpage/blog_Image2.jpg",
          categoria: "Kitchan Design",
          titul: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          image: "/img/imgblogpage/blog_Image3.jpg",
          categoria: "Kitchan Design",
          titul: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          image: "/img/imgblogpage/blog_Image4.jpg",
          categoria: "Kitchan Design",
          titul: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          image: "/img/imgblogpage/blog_Image5.jpg",
          categoria: "Kitchan Design",
          titul: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          image: "/img/imgblogpage/blog_Image6.jpg",
          categoria: "Kitchan Design",
          titul: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
      ];
    },
  },
  created() {
    this.carts = this.fetchData();
  },
};
</script>

<style scoped></style>
