
<template>
    <main>
      <NavBar />
      <router-view></router-view>
      <Footer />
    </main>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>
