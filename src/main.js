import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TheCard from "./components/TheCard.vue"
import NewTodo from "./components/NewTodo.vue";
import TodoList from "./components/TodoList.vue";
import TheNavigation from "./components/TheNavigation.vue";
import NotFound from "./components/NotFound.vue";
import CompletedList from "./components/CompletedList.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/simple-todo-first/new" },
        { path: "/simple-todo-first/todos", component: TodoList },
        { path: "/simple-todo-first/completed", component: CompletedList },
        { path: "/simple-todo-first/new", component: NewTodo },
        { path: "/simple-todo-first/:notFound(.*)", component: NotFound },
    ],
    linkActiveClass: "active",
});

const app = createApp(App);
app.config.unwrapInjectedRef = true;
// use Router on app
app.use(router);

// unlock this custom component & tag
app.component("the-navigation", TheNavigation);
app.component("the-card", TheCard);
app.component("todo-list", TodoList);
app.component("new-todo", NewTodo);

app.mount("#app");
