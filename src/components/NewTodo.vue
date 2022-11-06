<template>
  <the-card>
    <form @submit.prevent="addTodo">
      <div>
        <label>Todo</label>
        <input type="text" v-model="todos.todoName" />
      </div>
      <div>
        <label>Details</label>
        <input type="text" v-model="todos.todoDetails" />
      </div>
      <div><button type="button" @click="newTodo(todos.todoName, todos.todoDetails)">Add Todo</button></div>
    </form>
  </the-card>
</template>

<script>
export default {
  inject: ["todos", "newTodo"],
  emits: ["new-todo"],
  // data() {
  //   return {
  //     todoName: "",
  //     todoDetails: "",
  //   };
  // },
  // methods: {
  //   newTodo() {
  //     this.$emit("add-todo", this.todoName, this.todoDetails);
  //     this.todoName = "";
  //     this.todoDetails = "";
  //   },
  // },
};
</script>
