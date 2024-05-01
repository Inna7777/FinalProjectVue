<template>
  <div >
  <footer class="footer center">
    <div class="footer_logo footer_blog">
      <div class="headerLine_logo">
          <img src="../assets/imgheader/header_Logo.svg" alt="img" />
          <p class="headerLine_logoText">Interno</p>
        </div>
 <p class="footer_p">It is a long established fact that a reader will be distracted lookings.</p>   
    </div>
    <div class="footer_blog"> 
      <div class="footer_pages footer_blog">
          <h3 class="footer_h">Pages</h3>
          <a class="footer_p" href="#">Home</a>
          <a class="footer_p" href="#">Project</a>
          <a class="footer_p" href="#">Blog</a>     
      </div>        
             
    </div>
    <div class="footer_blog">
      <div class="footer_contact ">
        <h3 class="footer_h" >Contact</h3>
      <p class="footer_p" >55 East Birchwood Ave. Brooklyn, New York 11201</p>
      <p class="footer_p">contact@interno.com</p> 
      <p class="footer_p">(123) 456 - 7890</p>
      </div>
    </div>
   </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterComponnent',

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

.footer {
  margin-top: 96px;
  height: 406px;
  display: flex;
  justify-content: space-between;
}
.footer_blog {
  width: 33.3333333333%;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.footer_pages {
  margin-left: 100px;
}
.footer_pages a {
  text-decoration: none;
  color: #292F36;
}
.footer_contact {
  margin-left: 180px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.footer_p {
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  font-family: Jost;
}
.footer_h {
  font-size: 25px;
  font-weight: 400;
  line-height: 31.25px;
  color: black;
}

</style>