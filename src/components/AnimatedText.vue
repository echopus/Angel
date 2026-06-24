<template>
    <div class="px-4 md:px-12">
        <h3 class="mb-8 text-5xl md:text-6xl text-[#424242]">My fellow Americans,</h3>
        <p class="text-2xl text-black reveal-type mb-14" data-bg-color="#cccccc" data-fg-color="#0A0A0A">
            Florida deserves a strong, principled voice in Washington — one that puts our families, our freedoms, and our future first. That is why I am running for Congress.
            <span class="block py-4"></span>
            My name is Felix Rivera. Like many of you, I am not a career politician. I am a businessman who has spent years building, hiring, and solving real problems. I know what it takes to meet a payroll, honor a commitment, and deliver results. Washington does not need more talk. It needs people who understand how to get things done.
            <span class="block py-4"></span>
            When leaders with business experience step up, we see what real leadership looks like: lower taxes, less bureaucracy, and policies that let hardworking Americans keep more of what they earn. I am running for Congress to be the voice of everyday Floridians — people who want their freedoms respected, their communities protected, and their government held accountable.
            <span class="block py-4"></span>
            This campaign is about keeping Florida free and making sure Washington works for us, not the other way around. For too long, career politicians have forgotten who they serve. They spend, regulate, and lecture — while families struggle with higher costs and communities worry about safety and security. It is time for a reset, and that reset starts with leaders who live by the same values they ask you to live by.
            <span class="block py-4"></span>
            <span class="block mt-5">If elected, I will fight to:</span>
            <span class="block mb-2">• Strengthen Our Economy — Cut taxes, reduce red tape, and support small businesses so Florida families can thrive.</span>
            <span class="block mb-2">• Secure Our Borders — Enforce the law, protect our communities, and put American workers first.</span>
            <span class="block mb-2">• Defend Our Freedoms — Stand firm on the Constitution and oppose any effort to erode the liberties that define us.</span>
            <span class="block mb-7">• Honor Our Veterans — Fight for the care, benefits, and respect our servicemen and women have earned.</span>
            <span class="block py-4"></span>
            Florida, this is our moment to push back against the insiders and stand up for the America we believe in. I invite you to join this movement — to volunteer, to donate, and to help send a clear message that District 9 wants leadership rooted in faith, hard work, and love of country.
            <span class="block py-4"></span>
            For Florida, for freedom, and for the future — let's make it happen together.
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
