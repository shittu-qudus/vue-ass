const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export async function fetchTodos() {
  const localData = JSON.parse(localStorage.getItem('todos')) || [];
  const response = await fetch(API_URL);
  const apiData = await response.json();
  return [...localData, ...apiData.slice(0, 100)];
}

export function saveTodo(todo) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

export function deleteTodo(id) {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos = todos.filter(todo => todo.id !== id);
  localStorage.setItem('todos', JSON.stringify(todos));
}

export function updateTodo(updated) {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos = todos.map(todo => todo.id === updated.id ? updated : todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}
