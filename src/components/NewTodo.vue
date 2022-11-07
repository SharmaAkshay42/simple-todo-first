<template>
  <the-card>
    <form @submit.prevent="addTodo">
      <div>
        <label>Todo</label>
        <input type="text" v-model="todo.todoName" />
      </div>
      <div>
        <label>Details</label>
        <input type="text" v-model="todo.todoDetails" />
      </div>
      <div><button type="button" @click="newTodo(todo.todoName, todo.todoDetails)">Add Todo</button></div>
    </form>
  </the-card>
</template>

<script>
export default {
  inject: ["todo", "newTodo"],
  emits: ["new-todo"],
};
</script>

<style>
form {
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>
