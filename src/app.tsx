import TodoTask from "./components/TodoTask/TodoTask";
import React, { useState } from "react";

import "./styles/styles.css";

interface ITask {
  id: number;
  nameTask: string;
}

export default function App() {
  const [task, setTask] = useState("");

  const [todoList, setTodoList] = useState<ITask[]>([]);

  function addTask() {
    const idRandom = (num: number) => Math.floor(Math.random() * num);

    console.log(idRandom(10));

    const newTask = { id: idRandom(999), nameTask: task };

    setTodoList([...todoList, newTask]);
  }

  return (
    <div className="App">
      <header>
        <h1>Todos</h1>

        <input
          type="text"
          autoComplete="off"
          placeholder="What needs to be done?"
          name="task"
          className="input"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />

      </header>

      <div className="line"></div>

      <TodoTask />

      {todoList.map((task) => (
        <div>
          {task.nameTask}
          {task.id}
        </div>
      ))}

      <ul className="list"></ul>
    </div>
  );
}
