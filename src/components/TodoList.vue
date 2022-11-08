<template>
  <h2 v-if="activeTodos.length === 0">No todos. Create one <router-link to="/simple-todo-first/new">here</router-link></h2>
  <ul>
    <todo-item v-for="todo in activeTodos"
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
  inject: ['todos'],
  computed: {
    // Display only incomplete todos
    activeTodos() {
      return this.todos.filter((todo) => !todo.isCompleted);
    },
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>