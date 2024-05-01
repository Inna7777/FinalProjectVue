<template>
  <div class="counter">
     <div class="counter_blocks">
        <div  v-for="item in quantityInfo" :key="item.id" :class="item.className">
          <h1 class="counter_block_h">{{item.quantity}}</h1>
          <p class="counter_block_p">{{item.description}}</p>
        </div>
     </div>   
  </div>
</template>

<script>
export default {
  name: 'CounterComponent',

  data() {
    return {
      quantityInfo:[
        {quantity: 12,
        description: 'Years Of Experiance',
        className: ' counter_block block1'      
      },
      {quantity: 85,
        description: 'Success Project',
        className: 'counter_block block2'      
      },
      {quantity: 15,
        description: 'Active Project',
        className: 'counter_block block3'      
      },
      {quantity: 95,
        description: 'Happy CUstomers',
        className: 'counter_block block4',      
      },
      
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
.counter {
  margin-top: 96px;
  background-color: #F4F0EC;
  display: flex;
  justify-content: center;
  width: 100%;
}
.counter_blocks {
  padding-top: 151px;
  padding-bottom: 151px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 76px;
}
.counter_block {
  text-align: center;
  padding-right: 54px;
  border-right: solid 2px #CDA274;
}
.counter_block_h {
  padding-bottom: 6px;
  font-size: 85px;
  font-weight: 400;
  line-height: 106.25px;
  color: #CDA274;
}
.counter_block_p {
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
}
.counter .block4 {
  border-right: none;
  padding-right: 0px;
}


</style>