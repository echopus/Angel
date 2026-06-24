<template>
    <div class="px-4 md:px-12">
        <h3 class="mb-8 text-5xl md:text-6xl text-[#424242]">My fellow Americans,</h3>
        <p class="text-2xl text-black reveal-type mb-14" data-bg-color="#cccccc" data-fg-color="#0A0A0A">
            I'm Felix Rivera — a businessman running for Congress to fight for everyday Floridians, not Washington insiders.
            <span class="block py-4"></span>
            Florida needs leaders who understand jobs, growth, and accountability. I'll work to cut taxes, secure our borders, defend our freedoms, and stand up for veterans.
            <span class="block py-4"></span>
            Join me. Let's keep Florida free and put America first.
            <span class="block py-2"></span>
            <span class="block py-2"></span>

        </p>
        <div class="signature">
            <span class="text-2xl text-dark-v2">Sincerely,</span>
            <Signature class="h-[190px] py-6 w-[250px] sm:w-[300px] md:w-[350px]" />
            <span class="text-2xl text-dark-v2">Felix Rivera</span>
            <span class="text-2xl text-dark-v2">Candidate for U.S. Congress, District 9</span>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import SplitType from 'split-type';
import Signature from './Signature.vue';

const animate = () => {
    const splitTypes = document.querySelectorAll('.reveal-type')
    requestAnimationFrame(() => {
        splitTypes.forEach((char) => {
            const bg = char.dataset.bgColor
            const fg = char.dataset.fgColor
            const text = new SplitType(char, { types: 'chars' })

            gsap.fromTo(
                text.chars,
                { color: bg },
                {
                    color: fg,
                    duration: 1.5,
                    stagger: 0.075,
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 60%',
                        end: 'top -110%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse',
                    },
                },
            )
        })
    })
}

onMounted(async () => {
    if (document.fonts?.ready) {
        await document.fonts.ready.catch(() => {})
    }
    setTimeout(() => {
        animate()
    }, 1000)
})

</script>
