import './styles.css'
import { ITask } from "./interfaces";

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
  }

function TodoTask() {
	
	return (
		<div className="task">
			<div>
                <p>Estudar</p>
            </div>

            <div className="line2" >
            <span className="btn-card">X</span>
            </div>
		</div>
	);
}

export default TodoTask;