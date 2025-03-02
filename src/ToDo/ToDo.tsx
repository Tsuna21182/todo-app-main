import { useState } from "react";

function ToDo({ darkMode }: { darkMode: boolean }) {
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

  return (
    <div className="flex flex-col justify-center items-center absolute top-22 sm:left-20 md:left-50 lg:left-[30rem]">
      <div className="w-80 flex items-center">
        <button
          className="absolute left-11 bg-VeryLightGray border border-DarkGrayishBlue h-5 w-5 rounded-full cursor-pointer"
          onClick={handleAddTask}
          aria-label="Add task"
        ></button>
        <input
          type="text"
          className={`w-full p-3 pl-10 rounded-lg outline-0 ${
            darkMode
              ? "bg-VeryDarkGrayishBlue text-white"
              : "bg-VeryLightGray text-DarkGrayishBlue"
          }`}
          placeholder="Create a new todo..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>

      <div className="mt-5 w-96">
        {tasks.length > 0 ? (
          <ul className="space-y-1 flex flex-col items-center">
            {tasks.map((t, index) => (
              <li
                key={index}
                className={`flex justify-between items-center py-3 px-8 w-80 rounded-lg ${
                  darkMode
                    ? "bg-VeryDarkGrayishBlue text-white"
                    : "bg-VeryLightGray text-DarkGrayishBlue"
                }`}
              >
                <button className="border-2 border-VeryLightGrayishBlue h-6 w-6 rounded-full"></button>
                <p>{t}</p>

                <button
                  onClick={() => handleRemoveTask(index)}
                  aria-label="Remove task"
                  className="cursor-pointer"
                >
                  <img
                    src="/images/icon-cross.svg"
                    alt="Remove task"
                    className={`${darkMode ? "invert" : ""}`}
                  />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center font-bold text-VeryDarkBlue">
            No tienes tareas, agrega una nueva tarea
          </p>
        )}
      </div>
    </div>
  );
}

export default ToDo;
