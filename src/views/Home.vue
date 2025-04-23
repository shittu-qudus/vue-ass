<template>
    <section>
        <div style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 1rem;">
  <input v-model="search" placeholder="Search todos..." />
  <select v-model="filter">
    <option value="">All</option>
    <option value="true">Completed</option>
    <option value="false">Not Completed</option>
  </select>
  <button @click="showForm = true">Add Todo</button>
</div>

  
      <TodoForm v-if="showForm" @close="showForm = false" @create="addTodo" />
      
      <ul>
        <li v-for="todo in paginatedTodos" :key="todo.id">
          <router-link :to="`/todos/${todo.id}`">{{ todo.title }}</router-link>
          <button @click="edit(todo)">Edit</button>
          <button @click="remove(todo.id)">Delete</button>
        </li>
      </ul>
  
      <Pagination :total="filteredTodos.length" :per-page="10" v-model:page="page" />
    </section>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { fetchTodos, saveTodo, deleteTodo, updateTodo } from '../../utils/todoService';
  import TodoForm from '../components/TodoForm.vue';
  import Pagination from '../components/Pagination.vue';
  
  const todos = ref([]);
  const search = ref('');
  const filter = ref('');
  const page = ref(1);
  const showForm = ref(false);
  
  onMounted(async () => {
    todos.value = await fetchTodos();
  });
  
  const filteredTodos = computed(() => {
    return todos.value.filter(todo => {
      const matchesSearch = todo.title.toLowerCase().includes(search.value.toLowerCase());
      const matchesFilter = filter.value === '' || String(todo.completed) === filter.value;
      return matchesSearch && matchesFilter;
    });
  });
  
  const paginatedTodos = computed(() => {
    const start = (page.value - 1) * 10;
    return filteredTodos.value.slice(start, start + 10);
  });
  
  function addTodo(todo) {
    saveTodo(todo);
    todos.value.unshift(todo);
  }
  
  function remove(id) {
    deleteTodo(id);
    todos.value = todos.value.filter(t => t.id !== id);
  }
  
  function edit(todo) {
    const title = prompt('Edit title:', todo.title);
    if (title) {
      todo.title = title;
      updateTodo(todo);
    }
  }
  </script>
  