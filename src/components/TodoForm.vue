<template>
    <div>
      <h3>Create Todo</h3>
      <input v-model="title" placeholder="Title" />
      <label><input type="checkbox" v-model="completed" /> Completed</label>
      <button @click="submit">Create</button>
      <button @click="$emit('close')">Cancel</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const emit = defineEmits(['create', 'close']);
  const title = ref('');
  const completed = ref(false);
  
  function submit() {
    emit('create', {
      id: Date.now(),
      title: title.value,
      completed: completed.value
    });
    emit('close');
  }
  </script>
  