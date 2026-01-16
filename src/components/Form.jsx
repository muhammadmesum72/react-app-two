const Form = () => {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Type your task..."
          className="flex-1 px-4 py-3 rounded-xl bg-white/20 text-black placeholder-black/60 outline-none border border-black/30 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/50 transition"
        />

        <button className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 active:scale-95 text-white font-medium shadow-md transition">
          Add
        </button>
      </div>
    </div>
  )
}

export default Form
