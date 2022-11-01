<template>
  <section>
    <header>
      <h1>My Todo List</h1>
    </header>
    <main>
      <new-todo @add-todo="addTodo"></new-todo>
      <ul>
        <!-- <todo-list v-for="todo in todos" :key="todo.id" :id="todo.id" :todo-name="todo.todoName"
          :todo-details="todo.todoDetails" :is-completed="todo.isCompleted" @todo-complete="toggleCompleted"></todo-list> -->
          <todo-list v-for="todo in todos" :key="todo.id" :id="todo.id" :todo-name="todo.todoName"
          :todo-details="todo.todoDetails" :is-completed="todo.isCompleted" @todo-complete="toggleCompleted"></todo-list>
      </ul>
    </main>
  </section>
</template>

<script>
import swal from "sweetalert";

export default {
  data() {
    return {
      todos: [
        // {
        //   id: new Date().toISOString(),
        //   todoName: "Buy instant coffee",
        //   todoDetails: "Acceptable brands: Nestle, Tim Horton's",
        //   isCompleted: false,
        // },
        // {
        //   id: new Date().toISOString(),
        //   todoName: "Make Coffee",
        //   todoDetails: "Put some sugar and milk",
        // },
      ],
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
      swal({
        title: "Todo Added",
        text: "",
        icon: "info",
      });
    },
    toggleCompleted(id) {
      console.log("Inside toggleCompleted");
      const completedTodo = this.todos.find((todo) => todo.id === id);
      completedTodo.isCompleted = !completedTodo.isCompleted;
      if (completedTodo.isCompleted) {
        swal({
          title: "Todo Completed",
          text: "You completed your task",
          icon: "success",
        });
      } else {
        swal({
          title: "Todo Incomplete",
          text: "You've to do it again",
          icon: "warning",
        });
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");

:root {
  --body-colour: #fdfdfd;
  --text-colour: black;
  --detail-colour: #db2b1b;
  --pinkish: #f11512;
  --white: white;
}

* {
  box-sizing: border-box;
}

html {
  font-family: 'Baloo 2', Arial, Helvetica, sans-serif;
  height: 100vh;
  background-color: var(--body-colour);
}

header {
  font-weight: bolder;
  background-color: var(--pinkish);
  color: white;
  font-size: x-large;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

header h1 {
  text-align: center;
}

/* main {
  display: grid;
  place-items: center;
} */

#app input {
  font: inherit;
  padding: 0.15rem;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
  color: var(--detail-colour);
  font-size: larger;
}

#app form div {
  margin: 1rem 0;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  place-items: center;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid var(--pinkish);;
  background-color: var(--pinkish);;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  margin: 0.24rem;
  border-radius: 8px;
}

#app button:hover,
#app button:active {
  background-color: white;
  border-color: var(--pinkish);
  color: var(--pinkish);
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

ul h2 {
  text-align: center;
  font-weight: bolder;
  color: var(--pinkish);
}


form {
  display: grid;
  place-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1.08rem 1.44rem;
  border-radius: 8px;
}

p {
  text-align: center;
}


</style>
