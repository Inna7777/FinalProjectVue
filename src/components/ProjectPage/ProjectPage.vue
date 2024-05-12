<template>
  <div>
    <BlogBunner :banner="banner" />
    <!-- пердаем значение id кнопки через функцию updateSelectedTag -->
    <ProjectButtons @selectedTag="updateSelectedTag" />
    <!-- передаем полученное значение дочернему компоненту через пропсы -->
    <ProjectCarts :selectedTag="parentSelectedTag" />
  </div>
</template>

<script>
import BlogBunner from "@/components/BlogPage/BlogBunner.vue";
import ProjectButtons from "@/components/ProjectPage/ProjectButtons.vue";
import ProjectCarts from "@/components/ProjectPage/ProjectCarts.vue";

export default {
  name: "ProjectPage",

  components: {
    BlogBunner,
    ProjectButtons,
    ProjectCarts,
  },

  data() {
    return {
      banner: [
        {
          id: 1,
          imgUrl: "/img/imgprojectpage/Project_Banner.jpg",
          title: "Our Project",
          hrev1: "Home/",
          hrev2: "Blog",
        },
      ],
      parentSelectedTag: "",
    };
  },
  methods: {
    updateSelectedTag(value) {
      this.parentSelectedTag = value;
    },
  },
};
</script>

<style scoped></style>
