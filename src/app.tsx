import "./styles/styles.css";
import React, { useState, ChangeEvent } from "react";
import TodoTask from "./Components/TodoTask/TodoTask";
import { ITask } from "./Components/TodoTask/interfaces";

export default function App() {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [taskCount, setTaskCount] = useState(0)

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "taskAdd") {
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
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Lista de Tarefas</h1>

        <input
          type="text"
          autoComplete="off" 
          placeholder="Nova Tarefa . . ."
          name="taskAdd"
          className="input"
          value={task}
          onChange={handleChange}

        />

        <button className="btn" onClick={addTask}>
          +
        </button>
      </div>
      <span className="todo-cont">Tarefas: {taskCount}</span>
      <footer>
      <ul>
        <li>
      <a href="#/Todas">Todas</a>
        </li>
        <li>
      <a href="#/Ativas">Ativas</a>
        </li>
        <li> 
      <a href="#/Concluídas">Concluídas</a>
        </li>

      </ul>
      </footer>
      <hr />
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
}
