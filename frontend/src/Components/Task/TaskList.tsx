import Task from "./Task";
import { useAppSelector } from "../../hooks";

const TaskList = () => {
  const tasks = useAppSelector((state) => state.todo);

  return (
    <div>
      {tasks.todos.map((task) => (
        <Task key={task.id} text={task.name} id={task.id} completed={task.completed} />
      ))}
    </div>
  );
};

export default TaskList;
