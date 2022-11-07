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
        id: "",
        todoName: "",
        todoDetails: "",
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
      // console.log(newTodo);
      this.todos.todoName = "";
      this.todos.todoDetails = "";
      swal({
        title: "Todo Added",
        text: "",
        icon: "info",
      });
    },
    toggleCompleted(id) {
      console.log("Inside toggleCompleted");
      // filter returns an array - so we get arrays of todos not completed.
      // And assign it to our todos array
      // this.completedTodos = this.todos.find((todo) => todo.id === id);
      this.todos = this.todos.find((todo) => todo.id !== id);
      // this.completedTodo = this.todos.find((todo) => todo.id === id);
      // this.completedTodo.isCompleted = true;
      // console.log(this.todos);
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
