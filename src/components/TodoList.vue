<template>
  <ul>
    <!-- <todo-list v-for="todo in todos" :key="todo.id" :id="todo.id" :todo-name="todo.todoName"
          :todo-details="todo.todoDetails" :is-completed="todo.isCompleted" @todo-complete="toggleCompleted"></todo-list> -->
    <todo-item 
      v-for="todo in todos" :key="todo.id" :id="todo.id" :todo-name="todo.todoName"
            :todo-details="todo.todoDetails" :is-completed="todo.isCompleted" @toggle-complete="toggleCompleted"></todo-item>
  </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import swal from "sweetalert";

export default {
  components: {
    TodoItem,
  },
  inject: ["todos"],
  // props: {
  //   id: {
  //     type: String,
  //     required: true,
  //   },
  //   todoName: {
  //     type: String,
  //     required: true,
  //   },
  //   todoDetails: {
  //     type: String,
  //     required: false,
  //   },
  //   isCompleted: {
  //     type: Boolean,
  //     required: false,
  //     default: false,
  //   },
  // },

  // data() {
  //   return {
  //     todoDetailsVisible: false,
  //   };
  // },

  // methods: {
  //   toggleTodoDetails() {
  //     this.todoDetailsVisible = !this.todoDetailsVisible;
  //   },
  //   toggleCompleted() {
  //     this.$emit("todo-complete", this.id);
  //   },
  // },
  methods: {
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
  }
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
