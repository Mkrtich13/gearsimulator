<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <h1 class="text-white font-bold text-2xl">{{ title }}</h1>
</template>
