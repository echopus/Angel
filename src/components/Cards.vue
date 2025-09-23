<template>
    <div class="cards_section">
        <div class="flex flex-col gap-8 md:flex-row">
            <span class="text-4xl md:w-1/2 md:text-5xl text-dark-v2 title">Leadership . <span class="text-gray">Experience .</span><br> Values.</span>
            <p class="text-xl md:w-1/2 text-dark-v2 title">Proven leadership, extensive experience, and unwavering values. Committed to integrity, justice, and positive change.</p>
        </div>

        <!-- cards  -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-14  mt-24 border-b-[1.5px] border-black/15">
            <div class="relative h-[500px]  shadow-2xl overflow-clip  card_img rounded-2xl">
                <img loading="lazy" class="object-cover mb-6 rounded-2xl h-[125%]  w-full" src="../assets/images/cards_1.jpg" alt="">
                <div class="absolute flex flex-col gap-2 xl:flex-row md:gap-4 bottom-4 left-6">
                    <span class="px-5 py-1 bg-white w-max rounded-md text-[#636363]">Events</span>
                    <span class="px-5 py-1 text-sm bg-white rounded-md text-dark-v2 md:text-base">Press Confrence Coming Soon</span>
                </div>
            </div>
            <div class="relative shadow-2xl h-[500px] overflow-clip card_img   rounded-2xl">
                <img loading="lazy" class="object-cover rounded-2xl h-[125%]  w-full" src="../assets/images/cards_2.jpg" alt="">
                <div class="absolute flex flex-col gap-2 xl:flex-row md:gap-4 bottom-4 left-6">
                    <span class="px-5 py-1 bg-white w-max rounded-md text-[#636363]">Events</span>
                    <span class="px-5 py-1 text-sm bg-white rounded-md text-dark-v2 md:text-base">Campaign: Fundraising Dinner April 2024</span>
                </div>
            </div>
        </div>
        
        <!-- cards  -->
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 mt-14 pb-14">
            <div class="relative shadow-2xl h-[500px] overflow-clip card_img rounded-2xl">
                <img loading="lazy" class="object-cover mb-6 rounded-2xl h-[125%]  w-full" src="../assets/images/cards_3.jpg" alt="">
                <div class="absolute flex flex-col gap-2 xl:flex-row md:gap-4 bottom-4 left-6">
                    <span class="px-5 py-1 bg-white w-max rounded-md text-[#636363]">Freedom</span>
                    <span class="px-5 py-1 text-sm bg-white rounded-md text-dark-v2 md:text-base">Register To Vote </span>
                </div>
            </div>
            <div class="relative shadow-2xl h-[500px] overflow-clip card_img rounded-2xl">
                <img loading="lazy" class="object-cover rounded-2xl h-[125%]  w-full" src="../assets/images/cards_4.jpg" alt="">
                <div class="absolute flex flex-col gap-2 xl:flex-row md:gap-4 bottom-4 left-6">
                    <span class="px-5 py-1 bg-white w-max rounded-md text-[#636363]">Events</span>
                    <span class="px-5 py-1 text-sm bg-white rounded-md text-dark-v2 md:text-base">Primary August 20, 2024</span>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";


const parallaxImgs = () => {
    gsap.utils.toArray('.card_img').forEach(container => {
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


const animateTitles = () => {
  gsap.to(".title" , {
    scrollTrigger: {
        trigger: ".cards_container",
        start: 'top 60%',
        end: 'top -5%',
    },
      opacity: 1,
      top: 0,
      stagger: 0.15,
      duration: 0.45,
  })
}

onMounted(() => {
    setTimeout(() => {
        animateTitles();
        parallaxImgs()
    }, 1750);
})
</script>
