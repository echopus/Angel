<template>
    <div>
    <h3 class="flex flex-col items-center justify-center gap-3 mb-16 md:mb-20 text-6xl text-center">
        <a href="https://x.com/Angelluisr" rel="noopener noreferrer" target="_blank" aria-label="Felix Rivera on X — social feed (opens in a new tab)" class="inline-flex intro_text">
            <XLogo gradient size-class="size-16 md:size-20" class="transition-opacity duration-200 hover:opacity-90" />
        </a>
        <span>The Latest from Felix</span>
    </h3>
    <div class="flex gallery">
        <div v-for="(column, colIndex) in columns" :key="colIndex" class="column" :class="{ 'hidden xl:flex': colIndex === 3 }">
            <div v-for="(tweet, tweetIndex) in column" :key="`${colIndex}-${tweetIndex}`" class="w-full img-handler h-max">
                <TweetCard
                    :text="tweet.text"
                    :date="tweet.date"
                    :time="tweet.time"
                    :likes="tweet.likes"
                />
            </div>
        </div>
    </div>
    </div>
</template>


<script setup>
import { onMounted } from 'vue';
import XLogo from './XLogo.vue';
import TweetCard from './TweetCard.vue';

const tweets = [
    {
        text: "Proud to announce that I'm officially joining the race as a Republican candidate for District 9 in Florida's congressional race. Let's lead the way in showing what it means to be Floridian, American, and defenders of democracy. Let our actions inspire change, our unity energize progress, and our commitment to freedom light the path forward.",
        time: '4:06 PM',
        date: 'Sep 1, 2023',
        likes: '1.1K',
    },
    {
        text: "The House must elect a Speaker quickly, then prioritize the budget as the American people depend on them to get this done.",
        time: '9:14 AM',
        date: 'Oct 5, 2023',
        likes: '127',
    },
    {
        text: "This Labor Day, let's remember what truly drives the American Dream: hard work, determination, and opportunity. As a candidate for Congress, I'm committed to creating policies that empower individuals, support small businesses, and strengthen our economy. Together, we can ensure every Floridian has a fair shot at success.",
        time: '11:32 AM',
        date: 'Sep 4, 2023',
        likes: '284',
    },
    {
        text: "I cherish my party, but we gotta get it together! This is a wake-up call, folks. Vote in doers who put America first. House, find a speaker and get back to work. America's watching, let's deliver!",
        time: '2:48 PM',
        date: 'Oct 16, 2023',
        likes: '138',
    },
    {
        text: "Trump's policies were undeniably pro-business. As a candidate for Congress, I admire his commitment to cutting taxes, reducing red tape, and promoting economic growth. Let's build upon these successful policies to ensure a strong, vibrant business environment that benefits all Americans.",
        time: '8:05 AM',
        date: 'Sep 5, 2023',
        likes: '412',
    },
    {
        text: "As a candidate for Congress, I've been listening to concerns about potential COVID lockdowns. Let me be clear where I stand, we CANNOT allow these measures to further devastate lives and businesses of millions of people that were affected during the last lockdown. It's crucial we protect our freedoms.",
        time: '6:22 PM',
        date: 'Sep 7, 2023',
        likes: '356',
    },
    {
        text: "In light of Governor Grisham's unconstitutional ban on open and concealed carry, it's crucial now, more than ever, to safeguard our rights. This action crosses a line, and if left unchecked, it sets a dangerous precedent for other states to follow. We must protect our Second Amendment rights.",
        time: '10:17 AM',
        date: 'Sep 9, 2023',
        likes: '521',
    },
    {
        text: "Can you believe it? If there's a shutdown, Zelensky's still cashing American checks, while hardworking Americans suffer! We MUST stop electing those who won't put America FIRST! It's time to vote for true patriots who'll prioritize our great nation. 🇺🇸 #AmericaFirst #Election2024",
        time: '3:55 PM',
        date: 'Sep 22, 2023',
        likes: '892',
    },
    {
        text: "During my recent visit to a Florida elementary school, I was shocked to discover the absence of the Pledge of Allegiance. This tradition plays a crucial role in fostering unity, reminding us of our shared values of freedom and equality. It is imperative that we reinstate this and honor what makes America great.",
        time: '1:09 PM',
        date: 'Nov 2, 2023',
        likes: '267',
    },
]

const columns = [
    tweets.slice(0, 3),
    tweets.slice(3, 6),
    tweets.slice(6, 9),
    [tweets[6], tweets[7], tweets[8]],
]

const prallaxGallery = () => {
    let gallery  = document.querySelector('.gallery');
    let columns  = document.querySelectorAll('.gallery .column');

    if(document.body.getBoundingClientRect().width >= 1024){
    
    columns.forEach((col) => {
        let tline = gsap.timeline({
            scrollTrigger: {
                trigger: gallery,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        })

        tline.fromTo(columns[0], { yPercent: 0}, {yPercent: 65}, "<");
        tline.fromTo(columns[2], { yPercent: 0}, {yPercent: 60}, "<");
        tline.fromTo(columns[1], { yPercent: 0}, {yPercent: 115}, "<");
        tline.fromTo(columns[3], { yPercent: 0}, {yPercent: 105}, "<");

    })
    }
}

onMounted(() => {
    requestAnimationFrame(() => prallaxGallery())
})
</script>

<style scoped>
.gallery {
  height: 175vh;
  background-attachment: fixed;
  box-sizing: border-box;
  gap: 1.5vw;
  overflow: hidden;
}
.gallery .column {
  display: flex;
  width: 33.333%;
  height: 100%;
  flex-direction: column;
  gap: clamp(20px, 1.5vw, 28px);
  min-width: 250px;
  position: relative;
}
.gallery .column .img-handler {
  width: 100%;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}
.gallery .column:nth-child(1) {
  top: -50%;
}
.gallery .column:nth-child(2) {
  top: -65%;
}
.gallery .column:nth-child(3) {
  top: -40%;
}
.gallery .column:nth-child(4) {
  top: -55%;
}

@media (min-width: 1280px) {
  .gallery .column {
    width: 25%;
  }
  .gallery .column:nth-child(1) {
    top: -30%;
  }
  .gallery .column:nth-child(3) {
    top: -35%;
  }
}
</style>
