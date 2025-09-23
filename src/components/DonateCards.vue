<template>
    <div class="grid grid-cols-1 gap-4 p-4 donate_section md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-6" >
        <a href='https://secure.winred.com/angel-rivera-for-congress/donate-today' :id="i" v-for="(item, i) in items"  @mouseenter="enter(i)" @mouseleave="out(i)" :class="`animated-card relative w-full p-4 ${item.text == 'other' ? 'bg-white text-dark-v2' : ''} overflow-hidden transition-colors duration-150 border rounded-lg ${item.text == 'other' ? 'border-none' : item.hover} border-white/20`">
                <div class="flex items-center w-full mb-6">
                    <arrow :class="`${item.text == 'other' ? 'text-blue-500' : ''} absolute left-[-30%] left size-[1.25rem]`" />
                    <span class="relative left-[25%] w-max text-xl">Donation</span>
                    <arrow :class="`${item.text == 'other' ? 'text-blue-500' : ''} relative right-[-25%] right ml-2 size-[1.25rem]`" />
                </div>
                
                <span class="flex items-center justify-center w-full text-4xl ">{{ item.text }}</span>
        </a>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import arrow from "@/components/Arrow.vue";

const items = ref([
    {
        text: "$5",
        hover: "hover:border-green-500/70"
    },
    {
        text: "$25",
        hover: "hover:border-blue-500/60"
    },
    {
        text: "$50",
        hover: "hover:border-amber-500/70"
    },
    {
        text: "$100",
        hover: "hover:border-violet-500/70"
    },
    {
        text: "other",
        hover: "hover:border-red-500/70"
    },
])

const enter = (id) => {
    const arrowContainer = document.getElementById(id);
    const rArrow = arrowContainer.querySelector(".right");
    const lArrow = arrowContainer.querySelector(".left");
    const text = arrowContainer.querySelector("span");

    gsap.to(rArrow, {
        right: "-100%",
        duration: .25,
    })
    gsap.to(lArrow, {
        left: "30%",
        duration: .175,
        delay: .175,
    })
    gsap.to(text, {
        left: "45%",
        duration: .25,
        delay: .1,
    })
}

const out = (id) => {
    const arrowContainer = document.getElementById(id);
    const rArrow = arrowContainer.querySelector(".right");
    const lArrow = arrowContainer.querySelector(".left");
    const text = arrowContainer.querySelector("span");


    gsap.to(rArrow, {
        right: "-25%",
        delay: .2,
        duration: .25,
    })
    gsap.to(text, {
        left: "25%",
        duration: .25,
        delay: .2,
    })
    gsap.to(lArrow, {
        left: "-30%",
        duration: .25,
    })
}


const animateCards = () => {
  gsap.to(":is(.animated-card-title, .animated-card)" , {
    scrollTrigger: {
        trigger: ".donate_cards",
        start: 'top 60%',
        end: 'top -5%',
    },
      opacity: 1,
      top: 0,
      stagger: 0.08,
      duration: 0.65,
  })
}

onMounted(() => {
    setTimeout(() => {
        animateCards();
        
    }, 1500);
})

</script>
