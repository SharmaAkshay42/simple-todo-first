<template>
    <ul>
  
      <todo-item v-for="todo in completedTodos"
         :key="todo.id" :id="todo.id" :todo-name="todo.todoName"
              :todo-details="todo.todoDetails" :is-completed="todo.isCompleted" @toggle-complete="toggleCompleted(todos.id)"></todo-item>
    </ul>
  </template>
  
  <script>
  import TodoItem from "./TodoItem.vue";
  
  export default {
    components: {
      TodoItem,
    },
    inject: ['completedTodos'],
  };
  </script>
  
  <style scoped>
  ul {
    list-style: none;
    margin: 2rem auto;
    max-width: 40rem;
    padding: 0;
  }
  </style>
  