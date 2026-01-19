import { useState } from "react";
import Form from "./components/Form";

import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const addTask = () => {
    if (!task.trim()) {
      setError("Please Enter a task value");
    } else {
      // add task
      setTasks([
        {
          id: Date.now(),
          value: task,
          completed: false,
        },
        ...tasks,
      ]);
      setTask("");
      setError("");
    }
  };

   const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div>
      <Header name={"Task Manager App"} />
      <div className="p-10 space-y-10">
        <div>
          <div className="w-full max-w-md mx-auto p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
            <div className="flex gap-3">
              <input
                value={task}
                onChange={(e) => {
                  setTask(e.target.value);
                }}
                type="text"
                placeholder="Type your task..."
                className="flex-1 px-4 py-3 rounded-xl bg-white/20 text-black placeholder-black/60 outline-none border border-black/30 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/50 transition"
              />

              <button
                onClick={addTask}
                className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 active:scale-95 text-white font-medium shadow-md transition"
              >
                Add
              </button>
            </div>
            {error && <div className="text-red-600">Error: {error}</div>}
          </div>
        </div>
        <TaskList tasks={tasks} toggleTask={toggleTask} />
      </div>
    </div>
  );
}

export default App;
