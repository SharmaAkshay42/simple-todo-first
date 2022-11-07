<template>
  <h2 v-if="todos.length === 0">No todos. Create one <router-link to="/new">here</router-link></h2>
  <ul>
    <todo-item v-for="todo in todos"
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
  // watch: {
  //   activeTodos() {
  //     this.todos;
  //   }
  // }
  // computed: {
  //   activeTodos() {
  //     // console.log(this.todos);
  //     return this.todos.filter((todo) => !todo.isComplete);
  //     // this.todos = this.todos.filter((todo) => ! todo.isCom)
  //   },
  // }
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