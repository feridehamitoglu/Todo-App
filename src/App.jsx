import { useState } from "react";

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");


  const addTodo = () => {
    if(input.trim()){
      setTodos([...todos, {id: Date.now(),
        text:input, complated:false}])
        setInput("")
    }
  }

  return (
    <div className="min-h-screen flex items-center 
    justify-center bg-linear-to-r from-blue-600
    to-emerald-400">

      <div className="bg-white shadow-lg rounded-3xl 
      p-16">
        <h1 className="text-3xl font-bold text-center
         text-gray-900 mb-6">React ToDo List</h1>

        <div className="mb-4 flex w-full max-w-md mx-auto">
  <input 
    value={input}
    onChange={(e) => setInput(e.target.value)}
    type="text"
    placeholder="Add a new todo"
    className="grow px-4 py-2 border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent shadow-sm placeholder-gray-500  transition duration-200"
  />
  <button 
    onClick={addTodo}
    className="flex items-center bg-linear-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-r-lg hover:from-blue-600 hover:to-indigo-600 shadow-md transition duration-300"
  >
    <span className="mr-1"></span> Add
  </button>
</div>


        <ul className="space-y-2"></ul>
        {
          todos.map((todo) => (
            <li 
            key={todo.id}
            className="flex items-center p-3
            rounded-lg bg-slate-100 border
            border-gray-200"
            >
              <input type="checkbox"
              checked={todo.complated}
              onChange={() => setTodos(
                todos.map((t) => (
                  t.id === todo.id ? {...t,
                    complated: !t.complated} : t
                ))
              )}
              className="mr-2 h-5 w-5 text-blue-600"
              />
              <span
              className={`grow ${todo.complated ? "line-through text-gray-500" : 
              "text-gray-800"}`}>
              {todo.text}</span>

              <button
              onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
              className="ml-2 border-none p-2 rounded-lg bg-red-500 text-white
              hover:bg-red-600"
              >Delete</button>


              

            </li>
          ))
        }

      </div>
    </div>
  )
}

export default App
