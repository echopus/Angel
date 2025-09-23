<template>
    <div class="px-4 md:px-12">
        <h3 class="mb-8 text-5xl md:text-6xl text-[#424242]">My fellow Americans,</h3>
        <p class="text-2xl text-black reveal-type mb-14" data-bg-color="#cccccc" data-fg-color="#0A0A0A">
            District 1 has had a strong conservative voice in Washington. Representative Matt Gaetz championed the principles that we Floridians stand for: freedom, security, and prosperity. He didn’t back down, and neither will I. I’m here to build on the solid foundation he set and to keep Florida a shining example of what true leadership looks like.
            <span class="block py-4"></span>
            My name is Angel Rivera. Like you, I’m not a career politician; I’m a businessman. I’ve built my success through hard work, faith in the American Dream, and a love for this country that runs deep. When we put businessmen like Donald Trump in office, we saw real results. It was proof that the skills to lead come from understanding what it takes to build, to persevere, and to fight for success. I’m running for Congress not to change who I am, but to be the voice of everyday Floridians who want our freedoms respected and our state protected from overreach.
            <span class="block py-4"></span>
            This campaign is about keeping Florida free and ensuring Congress remains under strong Republican control. The mandate is clear: we must return power to the people and stop electing career politicians who have lost touch with reality. Washington needs a reset, and that reset comes from people like us—those who understand what it takes to create jobs, build communities, and stand firm in the values that make this nation great.       
            <span class="block py-4"></span>
            <span class="block mt-5">If elected, I will fight to:</span>
            <span class="block mb-2">• Strengthen Our Economy: By reducing regulations and lowering taxes, we can help small businesses thrive and create opportunities for families across our state.</span>
            <span class="block mb-2">• Protect Our Borders: A safe America starts with secure borders. I will work tirelessly to ensure our laws are enforced and our communities are safe.</span>
            <span class="block mb-2">• Defend Our Freedoms: Our constitutional rights are non-negotiable. I will oppose any effort to undermine the liberties that define us as Americans.</span>
            <span class="block mb-7">• Honor Our Veterans: Our veterans deserve unwavering support. I will advocate for them and ensure they receive the respect and benefits they’ve earned.</span>
            <span class="block py-4"></span>
            Florida, this is our moment to push back against Washington insiders who have lost sight of who they serve. I invite you to join me in taking a stand for our state and our nation. Together, we can ensure that the legacy of District 1 continues as a beacon of strength, freedom, and opportunity for generations to come.
            <span class="block py-4"></span>
            For Florida, for freedom, and for the future—let’s make this happen.
            <span class="block py-2"></span>
            <span class="block py-2"></span>

        </p>
        <div class="signature">
            <span class="text-2xl text-dark-v2">Sincerely,</span>
            <Signature class="h-[190px] py-6 w-[250px] sm:w-[300px] md:w-[350px]" />
            <span class="text-2xl text-dark-v2">Angel Rivera</span>
            <span class="text-2xl text-dark-v2">Candidate for U.S. Congress, District 1</span>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import SplitType from 'split-type';
import Signature from './Signature.vue';

const animate = () => {
    const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char,i) => {

    const bg = char.dataset.bgColor
    const fg = char.dataset.fgColor

    const text = new SplitType(char, { types: 'chars'})

    gsap.fromTo(text.chars, 
        {
            color: bg,
        },
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
                toggleActions: 'play play reverse reverse'
            }
    })
})
}
onMounted(() => {
    setTimeout(() => {
    animate()
}, 1000);
})

</script>
