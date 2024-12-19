<script setup>
const props = defineProps({
  bg: String,
})
</script>
<template>
  <div :class="bg" class="rounded-2xl p-8 w-full">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped></style>
