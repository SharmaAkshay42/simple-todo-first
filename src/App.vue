<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import swal from "sweetalert";

export default {
  data() {
    return {
      todos: [
        {id: "One", todoName: "Learn Vue", todoDetails: "Learn Vue by making a project", isCompleted: false },
      ],
      completedTodos: [],
    };
  },
  provide() {
    return {
      todos: this.todos,
      newTodo: this.addTodo,
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
      this.completedTodos = this.todos.find((todo) => todo.id === id);
      this.todos = this.todos.find((todo) => todo.id !== id);
      swal({
        title: "Congratulations!",
        text: "Task Completed",
        icon: "success",
      });
    },
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
