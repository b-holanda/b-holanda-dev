<script setup>
</script>
<template>
    <button @click="$emit('eClick')" class="w-full rounded-full text-text-primary font-bold text-md bg-primary py-3"><slot /></button>
</template>
<style scoped></style>
