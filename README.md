# ✅ Vue Todo App

A simple and stylish Vue.js Todo web application using the [Todo API](https://jsonplaceholder.typicode.com/todos).  
It supports listing todos, pagination, filtering, nested routes, error boundaries, 404 pages, and optional CRUD with LocalStorage persistence.

---

## ✨ Features

- ✅ Fetch todos from API
- ✅ Pagination with customizable page size
- ✅ Search and filter todos
- ✅ View details of a single todo using nested routing
- ✅ Error boundary with testable error page
- ✅ Custom 404 Not Found page
- ✅ Clean UI with semantic HTML & ARIA accessibility
- ✅ Smooth fade-in animations
- ✅ Responsive and centered layout
- ✅ Optional CRUD functionality using LocalStorage

---

## 📦 Technologies

- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- HTML5 / CSS3

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/vue-todo-app.git

# 2. Navigate to the project
cd vue-todo-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
src/
├── assets/
│   └── styles.css          # Global styles and animations
├── components/             # Reusable Vue components
│   ├── TodoItem.vue
│   ├── TodoForm.vue
│   └── Pagination.vue
├── views/                  # Page-level components
│   ├── Home.vue
│   ├── TodoDetails.vue
│   ├── NotFound.vue
│   └── ErrorBoundary.vue
├── router/
│   └── index.js            # Vue Router config with nested routes
├── utils/
│   └── todoService.js      # API and LocalStorage logic
├── App.vue
└── main.js
