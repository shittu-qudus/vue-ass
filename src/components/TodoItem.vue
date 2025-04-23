<template>
  <div class="todo-item fade-in">
    <div class="todo-text">{{ todo.title }}</div>
    <div class="todo-actions">
      <button @click="editTodo(todo)">Edit</button>
      <button @click="deleteTodo(todo.id)">Delete</button>
    </div>
  </div>
</template>
