export default {
    actions:{},
    mutations:{
        nextSlide(state, current) {
            state.current = (current + 1) % state.slides.length; // - метод nextSlide увеличивает значение current на 1 и обрабатывает случай, когда достигнут конец массива слайдов.
          },
          prevSlide(state, current) {
            state.current = (current - 1 + state.slides.length) % state.slides.length;//- prevSlide уменьшает значение current на 1 и также обрабатывает случай, когда текущий слайд является первым.

          }
    },
    state:{
        slides: [
       { image: './img/imgdetails/ghildren1.jpg',title:'Minimal Look Bedrooms',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.       In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.' },
       { image: './img/imgdetails/ghildren2.jpg',title:'MinimaL Look Chaildrooms', text:'Lorem ipsum  Proin tincidunt ligula id purus porttitor.' },
       { image: './img/imgdetails/kichen2.jpg',title:' Look Bedrooms', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in.elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.' },
       { image: './img/imgdetails/ghildren2.jpg',title:'Kitchen' },
       
     ],
     current: 0
    },
    getters:{
        allSliders(state){
            return state.slides
        },
        currentSlide(state){
            return state.current
        }
    }
}