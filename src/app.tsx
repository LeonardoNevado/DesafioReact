import TodoTask from "./Components/TodoTask/TodoTask";
import React, { useState, ChangeEvent } from "react";
import { ITask } from "./Components/TodoTask/interfaces";
import "./Styles/styles.css";

export default function App() {
  
  const [task, setTask] = useState<string>("")
  const [todoList, setTodoList] = useState<ITask[]>([])
  
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
  if(event.target.name === "task")  {
    setTask(event.target.value)
    console.log(todoList)
  }
};

  const addTask = (): void => {
    const newTask = { taskName: task }
    setTodoList([...todoList, newTask])
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
          onChange={handleChange}
        />

        <button onClick={addTask}>
          +
        </button>
      </header>
      <div className="todoList">

      </div>

    </div>
  );
}
