import { useState } from "react";
import type { Task } from "./todo_app";

export const TaskDisplay: React.FC<{
  task: {
    id: number;
    text: string;
    done: boolean;
  };
  onChange: (task: Task) => void;
  onDelete: (taskId: number) => void;
}> = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <label className="label-container">
        <input type="checkbox" />
        <input
          className="input"
          value={task.text}
          type="text"
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button
          className="task-list__button"
          onClick={() => setIsEditing(!isEditing)}
        >
          Save
        </button>
        <button className="task-list__button" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </label>
    );
  } else {
    return (
      <label className="label-container">
        <input type="checkbox" />
        <p className="task-list__text">{task.text} </p>
        <button
          className="task-list__button"
          onClick={() => setIsEditing(!isEditing)}
        >
          Edit
        </button>
        <button className="task-list__button" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </label>
    );
  }
};
