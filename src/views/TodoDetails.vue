<template>
    <article v-if="todo">
      <h2>{{ todo.title }}</h2>
      <p>Status: <strong>{{ todo.completed ? 'Done' : 'Pending' }}</strong></p>
      <router-link to="/">← Back</router-link>
    </article>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { fetchTodos } from '../../utils/todoService';
  
  const route = useRoute();
  const todo = ref(null);
  
  onMounted(async () => {
    const allTodos = await fetchTodos();
    todo.value = allTodos.find(t => t.id === +route.params.id);
  });
  </script>
  