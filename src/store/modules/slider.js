export default {
    actions:{},
    mutations:{
        nextSlide(state, current) {
            state.current = (current + 1) % state.slides.length
          },
          prevSlide(state, current) {
            state.current = (current - 1 + state.slides.length) % state.slides.length;
          }
    },
    state:{
        slides: [
       { image: './img/imgdetails/ghildren1.jpg' },
       { image: './img/imgdetails/ghildren2.jpg' },
       { image: './img/imgdetails/kichen2.jpg' },
       { image: './img/imgdetails/ghildren2.jpg' },
       
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