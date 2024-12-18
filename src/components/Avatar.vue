<script setup>  
    const props = defineProps({
        url: {
            required: true
        }
    })

</script>
<template>
    <img :src="props.url" alt="Avatar" class="rounded-full w-36">
</template>
