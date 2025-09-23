import './assets/main.css'
import { createApp } from 'vue'
import router from './router'; 
import App from './App.vue'
const app = createApp(App)
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

app.use(router); 
app.use(Toast, {
  position: "top-right",
  timeout: 2500,
});

app.mount('#app')



gsap.registerPlugin(ScrollTrigger);
// smooth scroll  
const lenis = new Lenis({
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// smooth scroll for gsap scrolltrigger 
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0);







// im in 