import { useReducer } from "react";
import { AddTask } from "./add_task.js";
import { TaskList } from "./task_list.js";

export interface Task {
  id: number;
  text: string;
  done: boolean;
}

type AddTask = { type: "add"; text: string; id: number };
type DeleteTask = { type: "delete"; id: number };
type EditTask = { type: "edit"; task: Task };

type TaskAction = AddTask | DeleteTask | EditTask;

const initialTasks: Task[] = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

let myNextId = initialTasks.length + 1;

function taskReducer(tasks: Task[], action: TaskAction) {
  switch (action.type) {
    case "add":
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];

    case "delete":
      return tasks.filter((t) => t.id !== action.id);

    case "edit":
      return tasks.map((t: Task) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });

    default:
      throw Error(`Unknown Action: ${action.type}`);
  }
}

export function TaskApp() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  function handleAddTask(taskText: string) {
    console.log(`Adding ${myNextId}`);
    dispatch({
      type: "add",
      text: taskText,
      id: myNextId++,
    });
  }

  function handleDeleteTask(taskID: number) {
    console.log(`Deleting ${taskID}`);
    dispatch({
      type: "delete",
      id: taskID,
    });
  }

  function handleEditTask(task: Task) {
    dispatch({
      type: "edit",
      task: task,
    });
  }

  return (
    <>
      <h2>useReducer</h2>

      <h3>Prague Itinerary</h3>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
