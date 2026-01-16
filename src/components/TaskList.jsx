const TaskList = ({ tasks }) => {
  return (
    <div className="w-full max-w-md mx-auto mt-6 space-y-3">
      {/* Task Item */}
      <div>Task List:</div>
      {tasks.map((task) => (
        <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
          <span className={` text-sm 
            ${task.completed ? " line-through text-black/20" : "text-black"}`}>
            {task.value}
          </span>

          <button className="text-gray-400 hover:text-red-500 transition">
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
