<template>
    <div class="w-full h-max">
        <div class="marquee h-max">
      <span>
        Felix Rivera For Congress Felix Rivera For
        Congress Felix Rivera For Congress Felix Rivera
        For Congress
      </span>
    </div>
    </div>
</template>
<style scoped>
.marquee {
  width: 100%;
  height: max-content;
  padding-top: 2em;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
}
.marquee span {
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #0A0A0A;
  font-size: 10em;
  line-height: 1;
  text-transform: uppercase;
  display: inline-block;
  padding-left: -10%;
  animation: marquee-animation 80s linear infinite;
}
@media (min-width: 767px) {
  .marquee span {
    font-size: 24em;
  }
}

@keyframes marquee-animation {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}

section {
  width: 100%;
  overflow: hidden;
}

section img {
  width: 10%;
  object-fit: cover;
}

.img-1 {
  position: absolute;
  bottom: 10%;
  left: 10%;
  transform: translate(-50%, -50%);
}

.img-2 {
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translate(-50%, -50%);
}

img {
  width: 60px;
}
</style>