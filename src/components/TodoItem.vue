<template v-if="isCompleted">
    <li>
        <h2>{{ todoName }}</h2>
        <button @click="toggleTodoDetails">
            {{ todoDetailsVisible ? "Hide" : "Show" }} Todo Details
        </button>
        <button @click="completeTodo(id)">Completed</button>
        <p v-if="todoDetailsVisible">
            {{ todoDetails }}
        </p>
    </li>
</template>

<script>

export default {
    inject: ['completeTodo'],
    emits: ['complete-todo'],
    data() {
        return {
            todoDetailsVisible: false,
        };
    },
    props:
    {
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
    methods: {
        toggleTodoDetails() {
            this.todoDetailsVisible = !this.todoDetailsVisible;
        },
    },
}
</script>

<style scoped>
li {
    margin: 1rem 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 12px;
    padding: 1rem;
}

li h3 {
    margin: 0.5rem 0;
    font-size: 1.25rem;
}

a {
    text-decoration: none;
    color: white;
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background-color: #11005c;
}

a:hover,
a:active {
    background-color: #220a8d;
}
</style>