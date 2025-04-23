import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import TodoDetails from '../views/TodoDetails.vue';
import NotFound from '../views/NotFound.vue';
import ErrorBoundary from '../views/ErrorBoundary.vue';

const routes = [
  { path: '/', component: Home },
  {
    path: '/todos/:id',
    component: TodoDetails
  },
  {
    path: '/test-error',
    component: ErrorBoundary
  },
  { path: '/:catchAll(.*)', component: NotFound }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
