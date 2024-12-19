<script setup>
import { GraduationCap, Home, Layers, MessageSquare, Newspaper, UserRoundCheck } from 'lucide-vue-next';
import { ref } from 'vue';

const items = ref([
    {
        link: '#home',
        title: 'Home',
        icon: Home,
    },
    {
        link: '#about',
        title: 'About',
        icon: UserRoundCheck,
    },
    {
        link: '#experience',
        title: 'Experience',
        icon: GraduationCap,
    },
    {
        link: '#projects',
        title: 'Projects',
        icon: Layers,
    },
    {
        link: '#pappers',
        title: 'Pappers',
        icon: Newspaper,
    },
    {
        link: '#contact',
        title: 'Contact',
        icon: MessageSquare,
    },
])
</script>
<template>
    <nav class="mt-[-500px] w-full peer-checked/toggler:mt-0 transition-all duration-300 ease-linear md:w-64 md:h-screen md:fixed md:mt-0 md:border-r-[.5px] border-solid border-[#6b6b6b] ">
        <h1 class=" hidden text-4xl font-bold md:block mt-10">Bruno</h1>
        <ul class="flex flex-col w-full mt-36 mb-12 pb-4 border-b-4 border-solid border-text-secondary md:border-b-0">
            <li v-for="(item, index) in items" :key="index" class="mt-8 flex items-center">
                <a :href="item.link" class="flex items-center hover:text-secondary transition-all duration-300 ease-linear">
                    <component :is="item.icon" class="mr-4 text-secondary" size="20" />
                    <span class="font-bold text-md">{{ item.title }}</span>
                </a>
            </li>
        </ul>
    </nav>
</template>
<style lang="sass" scoped>

</style>
