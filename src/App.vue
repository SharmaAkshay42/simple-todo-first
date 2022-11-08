<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import { computed } from "vue";
import swal from "sweetalert";
import TheNavigation from "./components/TheNavigation.vue";
export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      todo: {
        id: '',
        todoName: '',
        todoDetails: '',
        isCompleted: false,
      },
      todos: [],
      completedTodos: [],
    };
  },
  methods: {
    addTodo(todoName, todoDetails = "") {
      const newTodo = {
        id: new Date().toISOString(),
        todoName: todoName,
        todoDetails: todoDetails,
        isCompleted: false,
      };
      this.todos.push(newTodo);
      this.todo.todoName = "";
      this.todo.todoDetails = "";
      swal({
        title: "Todo Added",
        text: "",
        icon: "info",
      });
    },
    toggleCompleted(id) {
      // Find the todo that has been completed
      const doneTodos = this.todos.find((todo) => todo.id === id);

      // set its isCompleted property to true
      doneTodos.isCompleted = true;

      // Push that todo to our completedTodos list 
      this.completedTodos.push(doneTodos);
      swal({
        title: "Congratulations!",
        text: "Task Completed",
        icon: "success",
      });
    },
  },
  provide() {
    return {
      todo: this.todo,
      // Provide/inject items are not reactive by default. Encapsulate them in computed() to make them reactive.
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