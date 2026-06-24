<template>
    <div class="h-screen bg-white">
        <div class="h-screen z-[999] bg-white fixed w-[5%] left-0 flex justify-center pt-40 gap-14 items-center flex-col border-r border-black/25">
            <span class="flex items-center gap-2 mb-32 text-black -rotate-90 intro_text w-max"><span class="inline-block bg-blue-500 rounded-full size-2"> </span> Felix Rivera <span class="text-gray-600">For Congress</span></span>
            <button type="button" @click="scrollToSection" aria-label="Scroll to contribute section or back to top" class="p-3 transition-all duration-200 bg-blue-500 rounded-full cursor-pointer intro_text hover:bg-dark-v2 size-10 xl:size-12">
                <Arrow :class="`${passed == true ? '-rotate-90' : 'rotate-90'} transition-all duration-300 cursor-pointer size-full`" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Arrow from './Arrow.vue';
import { lenis } from '@/smooth-scroll.js';

const passed = ref(false);

const scrollToSection = () => {
    const targetSection = document.getElementById("contribute");
    if (passed.value == false) {
        const paddingTop = 100; // Set your desired padding top
        const targetPosition = targetSection.offsetTop - paddingTop;
        lenis.scrollTo(targetPosition);
    }else {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
};



const handleScroll = () => {
    const targetSection = document.getElementById("contribute");

    const sectionTop = targetSection.offsetTop;
    const sectionBottom = sectionTop + targetSection.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
        // console.log("in");
        
    } else if (scrollPosition >= sectionBottom) {
        passed.value = true;
    } else {
        passed.value = false;
    }
};




onMounted(() => {
    setTimeout(() => {
        window.addEventListener("scroll", handleScroll);
    }, 500);
})

</script>
