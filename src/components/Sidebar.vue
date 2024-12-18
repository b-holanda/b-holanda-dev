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
        title: 'Sobre',
        icon: UserRoundCheck,
    },
    {
        link: '#experience',
        title: 'Experiência',
        icon: GraduationCap,
    },
    {
        link: '#projects',
        title: 'Projetos',
        icon: Layers,
    },
    {
        link: '#pappers',
        title: 'Artigos',
        icon: Newspaper,
    },
    {
        link: '#contact',
        title: 'Contato',
        icon: MessageSquare,
    },
])
</script>
<template>
    <nav class="mt-[-475px] w-full peer-checked/toggler:mt-0 transition-all duration-300 ease-linear">
        <ul class="flex flex-col w-full mt-36 mb-12 pb-4 border-b-4 border-solid border-text-secondary">
            <li v-for="(item, index) in items" :key="index" class="mt-4 flex items-center">
                <a :href="item.link" class="flex items-center">
                    <component :is="item.icon" class="mr-4 text-secondary" size="20" />
                    <span class="font-bold text-lg">{{ item.title }}</span>
                </a>
            </li>
        </ul>
    </nav>
</template>
<style lang="sass" scoped>

</style>
