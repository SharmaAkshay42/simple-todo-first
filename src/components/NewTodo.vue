<template>
  <form @submit.prevent="addTodo">
    <div>
      <label>Todo</label>
      <input type="text" v-model="todoName" />
    </div>
    <div>
      <label>Details</label>
      <input type="text" v-model="todoDetails" />
    </div>
    <div><button>Add Todo</button></div>
  </form>
</template>

<script>
export default {
  emits: ["add-todo"],
  data() {
    return {
      todoName: "",
      todoDetails: "",
    };
  },
  methods: {
    addTodo() {
      this.$emit("add-todo", this.todoName, this.todoDetails);
      this.todoName = "";
      this.todoDetails = "";
    },
  },
};
</script>
