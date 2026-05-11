<template>
    <div>
        <div class="lg:flex lg:gap-4 lg:pr-4">
        <Sider class="hidden lg:block w-[5%]" />
        <div  class="w-full lg:w-[95%] mt-[80px]">
    <div class="relative container pt-12 pb-8 mt-3 z-[1] mb-6 overflow-hidden lg:rounded-3xl bg-dark-v2">
      <!-- @mousemove="moveBlob" @mouseleave="outBlob"  -->
      <span class="blur"></span>
      <!-- <span id="blob"></span> -->
      
      <div class="flex flex-col gap-14 min-[1200px]:flex-row">
            <div class="min-[1200px]:w-[60%]">
            <h3 class="text-[2.25rem] md:text-[3rem] min-[1200px]:text-[4rem] mb-12 leading-none title_p">
                The official Campaign <br> website for <span class="text-gray">Angel Rivera</span> <span>Candidate For Congress</span>
            </h3>
            <p class="flex items-start gap-1 mb-2 text-3xl title_p"><span>FLORIDA FIRST POLICY</span></p>
            <p class="flex items-start gap-1 py-2 title_p"><Dot/><span>Economy & Jobs: Focus on lowering taxes, reducing regulation, and promoting policies to create more jobs, particularly in industries like tourism and construction.</span></p>
            <p class="flex items-start gap-1 title_p"><Dot/><span> Border Security & Immigration: Emphasizing the need for strong borders and stricter immigration policies, which he connects to national security and protecting American jobs.</span></p>
            <p class="flex items-start gap-1 pt-2 title_p"><Dot/><span>Law & Order: Promoting policies aimed at reducing crime, supporting law enforcement, and ensuring public safety, especially in urban and growing suburban areas.</span></p>
            <p class="flex items-start gap-1 pt-2 title_p"><Dot/><span>America First: Advocating for trade policies that prioritize American industries and workers, reducing reliance on foreign imports to strengthen the national economy.</span></p>
            <p class="flex items-start gap-1 pt-2 title_p"><Dot/><span>Hurricane Recovery & Infrastructure: Pushing for faster federal response to hurricanes and investing in resilient infrastructure to protect homes and businesses from future disasters.</span></p>
          </div>
          <div class="min-[1200px]:w-[40%]  h-[450px] md:h-[650px] min-[1200px]:h-[450px] vid relative z-[1] rounded-xl">
            <img loading="lazy" class="object-cover rounded-xl size-full" src="../assets/images/main_2.webp" alt="">
          </div>
      </div>
      
      <div class="flex flex-col justify-between gap-10 mb-6 lg:flex-row mt-14 lg:mt-20">
        <p class="md:w-[50%] title_p">Your contribution can make a significant impact on our campaign's success. Join us today by making a donation and be a part of shaping a brighter future for our community.</p>
        <div class="md:w-[40%]">
          <h3 class="text-3xl md:text-5xl">ALL FOR FLORIDA ALL FOR FREEDOM</h3>
        </div>
      </div>
      
    </div>
    
    <!-- paragraph  -->
    <div class="py-8 pb-12 lg:pb-24 lg:py-16">
      <AnimatedText />
    </div>
    
    <!-- donate  -->
    <div class="px-8 py-12 mb-12 donate_cards lg:rounded-3xl bg-dark-v2" id="contribute">
      <div class="flex flex-col justify-between gap-4 md:flex-row">
        <h3 class="text-4xl md:w-1/2 text-gray animated-card">CONTRIBUTE <Dot class="relative top-[-1.4rem] left-1 inline" /></h3>
        <p class="text-xl md:w-1/2 animated-card">Let's send Washington a message <br> that Florida will remain a Free State!</p>
      </div>
      <div class="mt-16 ">
          <DonateCards  />
      </div>
    </div>
    
    <div class="px-4 py-4 md:px-8 lg:py-16 lg:px-10 cards_container">
      <Cards />
    </div>
    
    <div class="hidden px-8 py-12 mb-12 bg-dark-v2 rounded-3xl lg:block">
      <Tweets />
    </div>
    
    <div class="px-4 py-12 mb-24 rounded-3xl bg-slate-300">
        <Pads />
    </div>
    
    <div class="px-8 mb-12 py-14 lg:rounded-3xl bg-dark-v2">
      <About />
    </div>
    
    <div class="container grid w-full place-content-center py-14 md:py-16 lg:py-20">
        <div class=" border-[1.5px] border-dark-v2 text-dark-v2 p-6">
          <h3 class="text-center">PAID FOR BY ANGEL RIVERA FOR CONGRESS</h3>
        </div>
    </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Sider from "@/components/Sider.vue";
import Dot from "@/components/Dot.vue" 
import AnimatedText from '@/components/AnimatedText.vue';
import DonateCards from "@/components/DonateCards.vue";
import Cards from "@/components/Cards.vue";
import About from '@/components/About.vue';
import Pads from "@/components/Pads.vue";
import Tweets from '@/components/Tweets.vue';


const animatedText = () => {
  gsap.to(".title_p" , {
      opacity: 1,
      paddingLeft: 0,
      stagger: 0.2,
      duration: 1,
      transition: .5,
      ease: "power4.inOut",
  })
  gsap.to(".vid", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    duration: 1.2,
    transition: .65,
    ease: "power3.inOut",
  })
}

onMounted(() => {
    animatedText();
})
</script>

<style scoped>
.vid::after {
  content: "";
  position: absolute;
  border-radius: 0.75rem;
  inset: 0;
  background: linear-gradient(110deg,rgba(0, 0, 0, .95) , rgba(0, 0, 0, .3) , rgba(0, 0, 0, .15));
  z-index: 10;
}
.vid {
  transform-origin: top top;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  transition-timing-function: cubic-bezier(0.11, 0, 0.5, 0);
} 
.title_p {
  opacity: 0;
  padding-left: 3em;
}


@keyframes rotate {
  from {
    rotate: 0deg;
  }
  
  50% {
    scale: 1 1.5;
  }
  
  to {
    rotate: 360deg;
  }
}

/* .blur {
  position: absolute;
  inset: 0;
  z-index: -1;
  backdrop-filter: blur(8vmax);
} */



/* footer   */
.marquee {
  width: 100%;
  height: max-content;
  padding-top: 2em;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
}
.marquee span {
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #0A0A0A;
  font-size: 10em;
  line-height: 1;
  text-transform: uppercase;
  display: inline-block;
  padding-left: -10%;
  animation: marquee-animation 80s linear infinite;
}
@media (min-width: 767px) {
  .marquee span {
    font-size: 24em;
  }
}

@keyframes marquee-animation {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}

</style>