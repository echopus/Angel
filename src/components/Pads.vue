<template>
    <div class="flex w-full gap-4 lg:h-screen pads">
        <div class="flex flex-col gap-10 md:gap-16 size-full lg:hidden">
        <div class="h-full  w-full flex flex-col  shadow-2xl bg-[#f5f5f5]  pad rounded-3xl">
            <div class="w-[100%] h-[350px] pad_img  img-holder rounded-tr-3xl rounded-tl-3xl overflow-hidden">
                <img loading="lazy" class="object-cover cursor-pointer w-full h-[150%]" src="../assets/images/pic_1.jpg" alt="">
            </div>
            <div class="relative flex flex-col h-full px-4 pt-8 pb-8 content ">
                <div class="absolute grid border-[14px] border-[#f5f5f5] p-4 bg-blue-500 rounded-full -top-12 left-4  size-24 place-content-center ">
                    <Quote /> 
                </div>
                <h3 class="mt-6 mb-8 text-4xl text-dark-v2">Economy</h3>
                <details class="flex flex-col">
                    <summary class="text-dark-v2">Economic Growth</summary>
                    <p class="py-2 pb-4 md:px-12 text-gray">Central Florida’s residents deserve affordable living costs and a thriving economy. I will advocate for policies that promote responsible fiscal management, reduce unnecessary regulations, and encourage small business growth. By fostering a business-friendly environment, we can attract new industries, create jobs, and ensure that hardworking families can enjoy a higher quality of life without undue financial burdens.</p>
                </details>
                <details class="flex flex-col">
                    <summary class="text-dark-v2">Job Creation</summary>
                    <p class="py-2 pb-4 md:px-12 text-gray">In an ever-evolving economy, it’s essential to prepare our district for the jobs of the future. I will support initiatives that encourage the development of high-tech industries and innovation hubs. By investing in workforce training programs and STEM education, we can equip our residents with the skills they need to succeed in emerging fields, ensuring long-term job security and prosperity.</p>
                </details>
            </div>
        </div>
        <div class="h-full  w-full flex flex-col  shadow-2xl bg-[#f5f5f5]  pad rounded-3xl">
            <div class="w-[100%] h-[350px] pad_img  img-holder rounded-tr-3xl rounded-tl-3xl overflow-hidden">
                <img loading="lazy" class="object-cover cursor-pointer w-full h-[150%]" src="../assets/images/pic_2.jpg" alt="">
            </div>
            <div class="relative flex flex-col h-full px-4 pt-8 pb-8 content ">
                <div class="absolute grid border-[14px] border-[#f5f5f5] p-4 bg-blue-500 rounded-full -top-12 left-4  size-24 place-content-center ">
                    <Quote /> 
                </div>
                <h3 class="mt-6 mb-8 text-4xl text-dark-v2">Public Safety</h3>
                <details class="flex flex-col">
                    <summary class="text-dark-v2">Law Enforcement</summary>
                    <p class="py-2 pb-4 md:px-12 text-gray">Our communities must be safe places to live, work, and raise families. I am committed to supporting law enforcement agencies, ensuring they have the resources needed to effectively combat crime and maintain public safety. By fostering collaboration between law enforcement and the community, we can build trust, improve communication, and create a secure environment for everyone.</p>
                </details>
                <details class="flex flex-col">
                    <summary class="text-dark-v2">Veterans Affairs</summary>
                    <p class="py-2 pb-4 md:px-12 text-gray">Honoring our veterans is a top priority. I will work tirelessly to ensure that our veterans receive the support they deserve, including timely access to quality healthcare, educational opportunities, and employment assistance. I will advocate for streamlined processes and increased funding for veterans’ services to guarantee that those who have served our country are well taken care of.</p>
                </details>
            </div>
        </div>
        <div class="h-full  w-full flex flex-col  shadow-2xl bg-[#f5f5f5]  pad rounded-3xl">
            <div class="w-[100%] h-[350px] pad_img  img-holder rounded-tr-3xl rounded-tl-3xl overflow-hidden">
                <img loading="lazy" class="object-cover cursor-pointer w-full h-[150%]" src="../assets/images/pic_3.jpg" alt="">
            </div>
            <div class="relative flex flex-col h-full px-4 pt-8 pb-8 content ">
                <div class="absolute grid border-[14px] border-[#f5f5f5] p-4 bg-blue-500 rounded-full -top-12 left-4  size-24 place-content-center ">
                    <Quote /> 
                </div>
                <h3 class="mt-6 mb-8 text-4xl text-dark-v2">Education Reform</h3>
                <details class="flex flex-col">
                    <summary class="text-dark-v2">School Choice</summary>
                    <p class="py-2 pb-4 md:px-12 text-gray">Our children’s education is paramount to their future success and our nation’s prosperity. I will push for educational reform that empowers parents with choices, supports effective teachers, and prioritizes students’ needs. By promoting school choice, reducing bureaucratic obstacles, and investing in innovative teaching methods, we can create a strong foundation for our students’ success.</p>
                </details>
                <details class="flex flex-col">
                    <summary class="text-dark-v2">Health Care</summary>
                    <p class="py-2 pb-4 md:px-12 text-gray">Access to quality healthcare is a fundamental right. I will work towards practical solutions that improve healthcare affordability without sacrificing quality. By fostering competition among healthcare providers, increasing transparency in pricing, and exploring options for telehealth services, we can ensure that all residents have access to the care they need without breaking the bank.</p>
                </details>
            </div>
        </div>
        </div>
        
        <div @click="open('pad-1')" id="pad-1" class="h-full hidden lg:flex  w-[15%] shadow-2xl bg-[#f5f5f5]  pad rounded-3xl">
            <div class="w-[100%]  h-full img-holder pad_img  rounded-3xl overflow-hidden">
                <img loading="lazy" class="object-cover w-full cursor-pointer h-[125%]" src="../assets/images/pic_1.jpg" alt="">
            </div>
            <div class="w-[65%] h-full content hidden flex-col relative content pt-14 pb-8 px-4 pl-14">
                <div class="absolute grid border-[14px] border-[#f5f5f5] p-4 bg-blue-500 rounded-full -left-12 size-24 place-content-center ">
                    <Quote /> 
                </div>
                <h3 class="mt-6 mb-8 text-4xl text-dark-v2">Economy</h3>
                <details class="flex flex-col">
                    <summary class="text-dark-v2">Economic Growth</summary>
                    <p class="py-2 pb-4 text-gray">Central Florida’s residents deserve affordable living costs and a thriving economy. I will advocate for policies that promote responsible fiscal management, reduce unnecessary regulations, and encourage small business growth. By fostering a business-friendly environment, we can attract new industries, create jobs, and ensure that hardworking families can enjoy a higher quality of life without undue financial burdens.</p>
                </details>
                <details class="flex flex-col">
                    <summary class="text-dark-v2">Job Creation</summary>
                    <p class="py-2 pb-4 text-gray">In an ever-evolving economy, it’s essential to prepare our district for the jobs of the future. I will support initiatives that encourage the development of high-tech industries and innovation hubs. By investing in workforce training programs and STEM education, we can equip our residents with the skills they need to succeed in emerging fields, ensuring long-term job security and prosperity.</p>
                </details>
            </div>
        </div>
        
        <div @click="open('pad-2')" id="pad-2" class="h-full  hidden lg:flex w-[70%] shadow-2xl bg-[#f5f5f5]  pad rounded-3xl">
            <div class="w-[40%] h-full img-holder  rounded-3xl pad_img overflow-hidden rounded-tr-none rounded-br-none">
                <img loading="lazy" class="object-cover w-full cursor-pointer h-[125%]" src="../assets/images/pic_2.jpg" alt="">
            </div>
            <div  class="w-[65%] relative h-full content flex flex-col pt-14 pb-4 px-4 pl-14">
                <div class="absolute grid border-[14px] border-[#f5f5f5] p-4 bg-blue-500 rounded-full -left-12 size-24 place-content-center ">
                    <Quote /> 
                </div>
                <h3 class="mt-6 mb-8 text-4xl text-dark-v2">Public Safety</h3>
                <details class="flex flex-col">
                    <summary class="text-dark-v2">Law Enforcement</summary>
                    <p class="py-2 pb-4 text-gray">Our communities must be safe places to live, work, and raise families. I am committed to supporting law enforcement agencies, ensuring they have the resources needed to effectively combat crime and maintain public safety. By fostering collaboration between law enforcement and the community, we can build trust, improve communication, and create a secure environment for everyone.</p>
                </details>
                <details class="flex flex-col">
                    <summary class="text-dark-v2">Veterans Affairs</summary>
                    <p class="py-2 pb-4 text-gray">Honoring our veterans is a top priority. I will work tirelessly to ensure that our veterans receive the support they deserve, including timely access to quality healthcare, educational opportunities, and employment assistance. I will advocate for streamlined processes and increased funding for veterans’ services to guarantee that those who have served our country are well taken care of.</p>
                </details>
            </div>
        </div>
        
        <div @click="open('pad-3')" id="pad-3" class="h-full  hidden lg:flex w-[15%] shadow-2xl bg-[#f5f5f5]  pad rounded-3xl">
            <div class="w-[100%] h-full img-holder rounded-3xl overflow-hidden pad_img">
                <img loading="lazy" class="object-cover w-full cursor-pointer h-[125%]" src="../assets/images/pic_3.jpg" alt="">
            </div>
            <div class="w-[65%] h-full content hidden flex-col relative content pt-14 pb-4 px-4 pl-14">
                <div class="absolute grid border-[14px] border-[#f5f5f5] p-4 bg-blue-500 rounded-full -left-12 size-24 place-content-center ">
                    <Quote /> 
                </div>
                <h3 class="mt-6 mb-8 text-4xl text-dark-v2">Education Reform</h3>
                <details class="flex flex-col">
                    <summary class="text-dark-v2">School Choice</summary>
                    <p class="py-2 pb-4 text-gray">Our children’s education is paramount to their future success and our nation’s prosperity. I will push for educational reform that empowers parents with choices, supports effective teachers, and prioritizes students’ needs. By promoting school choice, reducing bureaucratic obstacles, and investing in innovative teaching methods, we can create a strong foundation for our students’ success.</p>
                </details>
                <details class="flex flex-col">
                    <summary class="text-dark-v2">Health Care</summary>
                    <p class="py-2 pb-4 text-gray">Access to quality healthcare is a fundamental right. I will work towards practical solutions that improve healthcare affordability without sacrificing quality. By fostering competition among healthcare providers, increasing transparency in pricing, and exploring options for telehealth services, we can ensure that all residents have access to the care they need without breaking the bank.</p>
                </details>
            </div>
        </div>  
        
    </div>
</template>

<script setup>
import {onMounted, onBeforeUnmount, ref} from "vue";
import Quote from "./Quote.vue";



const restActiveClasses = () => {
    const pads = document.querySelectorAll(".pad");
    pads.forEach((pad) => {
        const ele = pad.querySelector(".img-holder");
        const content = pad.querySelector(".content");

        ele.classList.remove("w-[40%]");
        ele.classList.remove("rounded-tr-none");
        ele.classList.remove("rounded-br-none");
        ele.classList.add("w-[100%]");
        
        pad.classList.remove("w-[70%]");
        pad.classList.add("w-[15%]");
        
        content.classList.remove("flex");
        content.classList.add("hidden");
    })
}

const open = (id) => {
    restActiveClasses()
    const pad = document.getElementById(id);
    const ele = pad.querySelector(".img-holder");
    const content = pad.querySelector(".content");

    pad.classList.remove("w-[15%]");
    pad.classList.add("w-[70%]");

    ele.classList.add("w-[40%]");
    ele.classList.add("rounded-tr-none");
    ele.classList.add("rounded-br-none");
    ele.classList.remove("w-[100%]");

    content.classList.add("flex");
    content.classList.remove("hidden");
}


const singleAccordion = () => {
    document.querySelectorAll("details").forEach((detail) => {
    detail.addEventListener("click", () => {
      document.querySelectorAll("details").forEach((otherDetail) => {
        if (otherDetail !== detail) {
          otherDetail.removeAttribute("open");
        }
      });
    });
  });
}

const handleAnimation = () => {
    document.querySelectorAll('details').forEach((detail) => {
  detail.addEventListener('toggle', (event) => {
    if (!event.target.open) {
      const summary = event.target.querySelector('summary');
      const content = summary.nextElementSibling;

      // Remove the animation class
      content.style.animation = 'none';

      // Trigger reflow to restart the animation
      content.offsetHeight;

      // Add the animation class back
      content.style.animation = '';
    }
  });
});
}


const parallaxImgs = () => {
    gsap.utils.toArray('.pad_img').forEach(container => {
    const img = container.querySelector('img');
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: true,
        pin: false,
      }
    });
  
    tl.fromTo(img, {
      yPercent: -20,
      ease: 'none'
    }, {
      yPercent: 20,
      ease: 'none'
    });
  });
}

onMounted(() => {
    setTimeout(() => {
        singleAccordion();
        handleAnimation();
        parallaxImgs();
    }, 2200);
})
</script>
