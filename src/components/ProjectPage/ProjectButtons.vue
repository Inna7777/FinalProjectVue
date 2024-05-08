<template>
  <div>
    <div class="buttons_block center">
      <div  v-for="item in buttons" :key="item.id">
        <button class="button" @click='filterCarts(item.id)' >{{ item.nameButton }}</button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectButtons",

  data() {
    return {
      buttons: [
        { id: "bathroom" , nameButton: "Bathroom" },
        { id: 'bedRoom', nameButton: "Bed Room" },
        { id: "kitchan", nameButton: "Kitchan" },
        { id: 'livingArea', nameButton: "Living Area" },
      ],
      selectedTag:'',
    };
  },

  mounted() {},

  methods: {
    filterCarts(id){
        this.$emit('selectedTag', id);//Передаем в родительский компонент значение id-кнопки
    }
  },
};
</script>

<style scoped>
.buttons_block {
  display: flex;
  justify-content: center;
  margin-top: 200px;
  gap: 10px;
}
.button {
  width: 219px;
height: 75px;
padding: 26px 66px 26px 66px;

border: none;
border-radius: 18px ;
opacity: 0px;
size: 18px;
 
}

.button:hover{
    background-color: #CDA274;
    color: white;    
}
</style>
