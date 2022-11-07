<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
// import { computed } from "vue";
import { computed } from "@vue/reactivity";
import swal from "sweetalert";
import TheNavigation from "./components/TheNavigation.vue";
export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      // todos: [{ id: "one", todoName: "Learn Vue", todoDetails: "Make a project", isCompleted: false }],
      todos: [],
      completedTodos: [],
    };
  },
  methods: {
    addTodo(todoName, todoDetails = "") {
      if (!this.todos) {
        this.todos = [];
      }
      const newTodo = {
        id: new Date().toISOString(),
        todoName: todoName,
        todoDetails: todoDetails,
        isCompleted: false,
      };
      this.todos.push(newTodo);
      this.todos.todoName = "";
      this.todos.todoDetails = "";
      swal({
        title: "Todo Added",
        text: "",
        icon: "info",
      });
    },
    toggleCompleted(id) {
      const doneTodos = this.todos.find((todo) => todo.id === id);
      doneTodos.isCompleted = true;
      this.completedTodos.push(doneTodos);
      this.todos = this.todos.find((todo) => todo.id !== id);
      swal({
        title: "Congratulations!",
        text: "Task Completed",
        icon: "success",
      });
    },
  },
  provide() {
    return {
      todo: Object,
      // todos: this.todos,
      completedTodos: computed(() => this.completedTodos),
      todos: computed(() => this.todos),
      newTodo: this.addTodo,
      completeTodo: this.toggleCompleted,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
</style>