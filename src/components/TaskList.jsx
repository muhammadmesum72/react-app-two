const TaskList = ({ tasks, toggleTask }) => {


  if(tasks.length === 0) {
    return (
      <div>
        Please add a task
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto mt-6 ">
      {/* Task Item */}

      <div>Task List: ({tasks.length})</div>

      {tasks.length > 0 ? (
        <div className="space-y-3 ">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
              <span
                className={` text-sm 
            ${task.completed ? " line-through text-black/20" : "text-black"}`}
              >
                {task.value}
              </span>

              <button onClick={() => toggleTask(task.id)} className="text-gray-400 hover:text-red-500 transition">
                ✕
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>No Tasks Here</div>
      )}
    </div>
  );
};

export default TaskList;
