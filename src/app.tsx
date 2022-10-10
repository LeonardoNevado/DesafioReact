import TodoTask from "./Components/TodoTask/TodoTask";
import React, { useState, ChangeEvent } from "react";
import { ITask } from "./Components/TodoTask/interfaces";
import "./Styles/styles.css";

export default function App() {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    }
  };
  
  const addTask = (): void => {
    const newTask = { taskName: task };
    setTodoList([...todoList, newTask]);
    setTask("");
  };

  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Todos</h1>

        <input
          type="text"
          autoComplete="off"
          placeholder="What needs to be done?"
          name="task"
          className="input"
          value={task}
          onChange={handleChange}
        />

        <button className="btn" onClick={addTask}>+</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} deleteTask={deleteTask}/>;
        })}
      </div>
    </div>
  );
}
