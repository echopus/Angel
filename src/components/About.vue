<template>
    <div class="flex flex-col h-full gap-10 lg:flex-row parent about_section">
        <div class="img-container h-full overflow-hidden lg:w-[50%] rounded-xl">
            <img loading="lazy" class="object-cover w-full h-full lg:h-[550px] cliped founder-img rounded-xl" src="../assets/images/main_1.webp" alt="">
        </div>
        <div class="pt-10 lg:w-1/2">
            <h3 class="mb-2 text-6xl text-white animated-text">I'M ALL IN</h3>
            <h3 class="text-3xl text-gray animated-text">Republican Candidate District 9</h3>
            <div class="mt-12">
                <p class="text-xl text-white animated-text">
                    As a businessman, I understand the power of economic growth and job creation. I’ve witnessed firsthand how the right policies can foster an environment where businesses can flourish and thrive,
                </p>
                <p class="mt-6 text-xl text-white mb-14 animated-text">
                    providing opportunities for individuals to support their families and contribute to the growth of our state. I am committed to bringing these values to Washington, advocating for policies that encourage entrepreneurship and economic vitality.
                </p>
                <RouterLink to="/contact">
                  <MainButton class="w-max animated-text" :text="'Join the fight'" :colors="{main: 'text-blue-500', sec: 'bg-[#eee]'}" :link="'https://x.com/Angelluisr'" />
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import MainButton from './MainButton.vue';

const parallaxImgs = () => {
    gsap.utils.toArray('.img-container').forEach(container => {
    const img = container.querySelector('img');
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: true,
        pin: false,
      }
    });
  
    tl.fromTo(img, {
      yPercent: -25,
      ease: 'none'
    }, {
      yPercent: 25,
      ease: 'none'
    });
  });
}


const animateText = () => {
  gsap.to(".animated-text" , {
      scrollTrigger: {
        trigger: ".parent",
        start: 'top 40%',
        end: 'top -5%',
      },
      opacity: 1,
      paddingLeft: 0,
      stagger: .2,
      duration: 1.05,
      transition: .5,
      ease: "power4.inOut",
  })
}

const cliped = () => {
  gsap.to(".cliped" , {
      scrollTrigger: {
        trigger: ".parent",
        start: 'top 60%',
        end: 'top -5%',
      },
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      duration: 1.3,
      transition: .65,
      ease: "power3.inOut",
  })
}

onMounted(() => {
    setTimeout(() => {
      parallaxImgs();
      animateText();
      cliped();
    }, 2000);
})
</script>
