import React from "react";
import { ITask } from "./interfaces";

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, deleteTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <label>
          <input className="checkbox" type="checkbox" />
        </label>
        <span className="taskText">{task.taskName}</span>
      </div>
      <button
        className="x"
        onClick={() => {
          deleteTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
