<script setup>
import Appbar from '../components/Appbar.vue';
import Avatar from '../components/Avatar.vue';
import Sidebar from '../components/Sidebar.vue';
import avatarImage from '../assets/avatar.png';

</script>

<template>
  <div class="relative">
    <input id="toggler" type="checkbox" class="peer/toggler hidden">
    <Appbar />
    <Sidebar />
    <main>
      <section id="home" class="flex h-screen justify-center items-center flex-col">
        <div class="w-full flex justify-center">
          <Avatar :url="avatarImage" />
        </div>
        <h2 class="text-4xl font-bold mt-4">Bruno Holanda</h2>
        <div class="flex">
          <h3 class="mr-1">I'm a</h3><span>Software Engenner</span>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>

</style>
