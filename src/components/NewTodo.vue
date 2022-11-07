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
  display: grid;
  place-items: center;
}

label {
  font-weight: bold;
  font-size: large;
}

input {
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid #8b8a8b;
  border-radius: 4px;
  margin: 1rem;
  max-width: 10rem;
}

button {
    text-decoration: none;
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    /* color: white; */
    color: white;
    background-color: #1a037e;
    padding: 0.5rem 1.5rem;
    display: inline-block;
    border-radius: 8px;
    margin: 1rem;
}

button:hover,
button:active,
button.active {
    color: #f1a80a;
    border-color: #f1a80a;
    background-color: #1a037e;
}
</style>
