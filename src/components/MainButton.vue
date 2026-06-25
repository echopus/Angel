<template>
    <div class="">
        <a :href="link" ref="arrowContainer" @mouseenter="enter" @mouseleave="out" :class="`relative  overflow-hidden flex items-center px-5 py-[.6rem] arrow  rounded-[.4rem] ${colors.sec}`">
            <arrow :class="`absolute left-[-20%] left size-[1.25rem] ${colors.main}`" />
            <span :class="`relative left-[0%] w-max ${colors.text ?? 'text-white mix-blend-difference'}`">{{ text }}</span>
            <arrow :class="`relative left-0 right ml-2 size-[1.25rem] ${colors.main}`" />
        </a>
    </div>
</template>

<script setup scoped>
import {ref} from "vue";
import arrow from "@/components/Arrow.vue";

const props = defineProps({
    text: {
        type: String
    },
    colors: {
        type: Object
    },
    link: {
        stype: String
    }
})

const text = props.text;
const colors = props.colors;
const link = props.link;
const arrowContainer = ref(null)

const enter = () => {
    const rArrow = arrowContainer.value.querySelector(".right");
    const lArrow = arrowContainer.value.querySelector(".left");
    const text = arrowContainer.value.querySelector("span");

    gsap.to(rArrow, {
        left: "55%",
        duration: .15,
    })
    gsap.to(lArrow, {
        left: "10%",
        duration: .1,
        delay: .175,
    })
    gsap.to(text, {
        left: "20%",
        duration: .15,
        delay: .1,
    })
}

const out = () => {
    const rArrow = arrowContainer.value.querySelector(".right");
    const lArrow = arrowContainer.value.querySelector(".left");
    const text = arrowContainer.value.querySelector("span");


    gsap.to(rArrow, {
        left: "0%",
        delay: .2,
        duration: .15,
    })
    gsap.to(text, {
        left: "0%",
        duration: .15,
        delay: .2,
    })
    gsap.to(lArrow, {
        left: "-20%",
        duration: .15,
    })
}

</script>
