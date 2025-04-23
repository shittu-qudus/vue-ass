<template>
    <nav aria-label="Todo pagination">
      <button :disabled="page === 1" @click="$emit('update:page', page - 1)">Prev</button>
      <span>Page {{ page }} of {{ totalPages }}</span>
      <button :disabled="page === totalPages" @click="$emit('update:page', page + 1)">Next</button>
    </nav>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  // ✅ Declare props
  const props = defineProps({
    total: Number,
    perPage: Number,
    page: Number
  });
  
  const totalPages = computed(() => Math.ceil(props.total / props.perPage));
  </script>
  