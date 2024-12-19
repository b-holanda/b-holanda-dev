<script setup>
import { Menu } from 'lucide-vue-next'
</script>
<template>
  <nav class="relative flex w-full items-center bg-ternary z-50 pt-4 lg:hidden">
    <label for="toggler" class="mr-4">
      <Menu size="35" />
    </label>
    <h1 class="text-4xl font-bold peer-checked/toggler:bg-secondary">Bruno</h1>
  </nav>
</template>
<style lang="scss" scoped></style>
