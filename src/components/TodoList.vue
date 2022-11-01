<template>
  <li>
    <h2>{{ todoName }} {{ isCompleted ? "(Done)" : "" }}</h2>
    <button @click="toggleTodoDetails">
      {{ todoDetailsVisible ? "Hide" : "Show" }} Todo Details
    </button>
    <button @click="toggleCompleted">Completed</button>
    <p v-if="todoDetailsVisible">
      {{ todoDetails }}
    </p>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    todoName: {
      type: String,
      required: true,
    },
    todoDetails: {
      type: String,
      required: false,
    },
    isCompleted: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      todoDetailsVisible: false,
    };
  },

  methods: {
    toggleTodoDetails() {
      this.todoDetailsVisible = !this.todoDetailsVisible;
    },
    toggleCompleted() {
      this.$emit("todo-complete", this.id);
    },
  },
};
</script>

<style></style>
