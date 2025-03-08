import { useState } from "react";

function TodoHook() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleRemoveTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const getTotalTasks = () => tasks.length;

  return {
    task,
    tasks,
    setTask,
    setTasks,
    handleAddTask,
    handleRemoveTask,
    getTotalTasks,
  };
}

export default TodoHook;
