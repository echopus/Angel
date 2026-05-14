
<template>
    <div class=" h-[80px] w-full fixed top-0 left-0 right-0 z-[1000] bg-white border-b border-black/25">
        <nav class="flex items-center justify-between w-full h-full px-14">
        <RouterLink to="/" class="h-full w-max intro_text" aria-label="Angel Rivera for Congress home">
            <img fetchpriority="high" loading="eager" width="99" height="99" class="object-contain size-full" src="../assets/images/logo-nav.webp" alt="Angel Rivera for Congress">
        </RouterLink>
        <div class="flex items-center h-full gap-6">
            <MainButton class="hidden md:block intro_text" :text="'Donate'" :colors="{main: 'text-white', sec: 'bg-dark-v2'}" :link="'https://secure.winred.com/angel-rivera-for-congress/donate-today'" />
            <a href="https://x.com/Angelluisr" rel="noopener noreferrer" target="_blank" aria-label="Angel Rivera on X (opens in a new tab)" class="h-full border-l-[1.05px] grid place-content-center pl-14 border-black/25 text-dark-v2 hover:text-blue-500 transition-colors duration-200">
                <XLogo size-class="size-9" class="transition-colors duration-200" />
            </a>
        </div>
    </nav>
    </div>
</template>

<script setup>
import {onMounted} from "vue";
import MainButton from "./MainButton.vue";
import XLogo from "./XLogo.vue";




const intro = () => {
  gsap.to(".intro_text" , {
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      transition: .4,
  })
}

onMounted(() => {
    setTimeout(() => {
        intro();
    }, 350);
})



</script>
