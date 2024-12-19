<script setup>
import Appbar from '../components/Appbar.vue';
import Avatar from '../components/Avatar.vue';
import Sidebar from '../components/Sidebar.vue';
import Button from '../components/Button.vue';
import avatarImage from '../assets/avatar.png';
import profileImage from '../assets/profile.png';
import { ref } from 'vue';
import { Facebook, Github, Instagram, Linkedin, Mail } from 'lucide-vue-next';

const social = ref([
  {
    icon: Instagram,
    url: 'https://www.instagram.com/brunorodriguesholanda/',
  },
  {
    icon: Facebook,
    url: 'https://www.facebook.com/profile.php?id=100003259137988/',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/bruno-r-holanda/',
  },
  {
    icon: Github,
    url: 'https://github.com/b-holanda/',
  },
  {
    icon: Mail,
    url: 'mailto:brunorodriguesholanda@gmail.com?subject=Contato via Portifolio&body=Olá gostaria de entrar em contato',
  }
])
</script>

<template>
  <div class="relative">
    <input id="toggler" type="checkbox" class="peer/toggler hidden">
    <Appbar />
    <Sidebar />
    <main class="relative md:ml-64">
      <section id="home" class="flex h-screen justify-center items-center flex-col">
        <div class="w-full flex justify-center">
          <Avatar :url="avatarImage" />
        </div>
        <h2 class="text-4xl font-bold mt-4">Bruno Holanda</h2>
        <div class="flex">
          <h3 class="mr-1">I'm a</h3><span class="animate-pulse">Software Engineer</span>
        </div>
        <ul class="flex w-full justify-center mt-8">
            <li v-for="(item, index) in social" :key="index" :class="index !== 0 ? 'ml-8' : ''">
              <a :href="item.url" target="_blank">
                <component :is="item.icon" class="hover:text-secondary transition-all duration-300 ease-linear"/>
              </a>
            </li>
          </ul>
        <div class="mt-8 flex w-full justify-center">
          <div class="flex w-36">
            <Button>Hire me</Button>
          </div>
        </div>
      </section>
      <section id="about">
        <article class="flex w-full flex-col justify-center items-center">
          <h2 class="text-4xl font-bold w-full">About Me</h2>
          <Avatar :url="profileImage" class="mt-20"/>
        </article>
      </section>
    </main>
  </div>
</template>

<style scoped>

</style>
