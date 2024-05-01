<template>
  <div id='mainPage'>
    <HeaderComponent/>
    <BunnerComponent/>
    <ContentComponent :title='titleContent1' :message='messageContent1'/>
    <ContentCartsComponent/>
    <CounterComponent/>
    <ContentComponent :title='titleContent2' :message='messageContent2'/>
    <BlogComponent/>
    <FooterComponnent/>
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import BunnerComponent from './BunnerComponent.vue'
import ContentComponent from './ContentComponent.vue'
import ContentCartsComponent from './ContentCartsComponent.vue'
import CounterComponent from './CounterComponent.vue'
import FooterComponnent from './FooterComponnent.vue'
import BlogComponent from './BlogComponent.vue'
export default {
  name: "MainPage",
  data (){
    return{
        titleContent1:'Follow Our Projects',
        messageContent1:'It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.',
        titleContent2:'Articles & News',
        messageContent2:'It is a long established fact that a reader will be distracted by the of  content of a page when lookings at its layouts the points of using.'
    }

  },
  components: {
    HeaderComponent,
    BunnerComponent,
    ContentComponent,
    ContentCartsComponent,
    CounterComponent,
    BlogComponent,
    FooterComponnent
  },
};
</script>

<style>
#mainPage {
  font-family: "DM Serif Display", "Jost", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-style: normal;
  margin: 0;
  padding: 0;
}

.center {
  padding-right: calc(50% - 600px);
  padding-left: calc(50% - 600px);
}
</style>