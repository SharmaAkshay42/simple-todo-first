import { createApp } from "vue";
import App from "./App.vue";
import NewTodo from "./components/NewTodo.vue";
import TodoList from "./components/TodoList.vue";

const app = createApp(App);

// unlock this custom component & tag
app.component("todo-list", TodoList);
app.component("new-todo", NewTodo);

app.mount("#app");
