import { useState , useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Navbar from './components/navbar'
import addiocns from './assets/add.svg'
import editIcons from './assets/edit.svg'
import deleteIcons from './assets/delete.svg'

function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [showfinised, setshowfinised] = useState(false)


useEffect(() => {
  let todostring = localStorage.getItem("todos");
  if (todostring && todostring !== "undefined") {
    try {
      let todos = JSON.parse(todostring);
      settodos(todos);
    } catch (e) {
      console.error("Invalid JSON in localStorage:", e);
      settodos([]); // reset if corrupted
    }
  }
}, []);

const savetoLS = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos || []));
};
  


  const handleAdd = () => {
    if (todo === "") {
      alert("Cannot add empty task");
      return;
    }
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    settodo("")
    savetoLS([...todos, { id: uuidv4(), todo, isCompleted: false }])
  }

  const Togglefinish = () => {
    setshowfinised(!showfinised);
  }
  const handleChange = (e) => {
    settodo(e.target.value)
  }

  const handleEdit = (e,id) => {
      const t = todos.find(i => i.id === id);
      if (t) {
        settodo(t.todo);  
        const newTodos = todos.filter(item => item.id !== id);
        settodos(newTodos);
        savetoLS(newTodos);
      }
  }

  const handleDelete = (e,id) => {
      const newTodos = todos.filter(item => {
      return item.id !== id;
    });
    settodos(newTodos);
    savetoLS(newTodos);
  }

const deletetodos = () => {
  alert("Are you sure you want to delete all tasks?");
  settodos([]);
  savetoLS([]);
}

  const handleCheckbox = (e) => {
    const id = e.target.id;
    const newTodos = todos.map(item => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    settodos(newTodos);
    savetoLS(newTodos);
  }


  return (
    <>
      <Navbar deletetodos={deletetodos} />
      <div className="container mx-auto my-4 p-4 font-sans min-h-[85vh] overflow-y-auto">
        <div className="space-y-5">


          <div className="total flex justify-between items-center text-white p-4 border-1 md:w-2/5 h-[180px] mx-auto rounded-3xl px-10 border-gray-400 bg-gray ">
            <div className=''>
              <h1 className='text-2xl font-bold font-sans text-gray-300 bg-gray'>Todo Done</h1>
              <h3 className='text-lg font-mono text-gray-300 bg-gray'>keep it up</h3>
            </div>
            <div className="count bg-[#e64a26] text-3xl rounded-full  w-24 h-24 flex items-center justify-center text-black font-bold">
              {todos.filter(item => item.isCompleted).length}/{todos.length}
            </div>
          </div>


          <div className="newtask flex justify-between items-center text-white md:w-[35%] mx-auto py-4 ">
            <input type="text" onChange={handleChange} value={todo} placeholder='write your next task' className='text-gray-400 bg-gray bg-[#1d1d1d92] rounded-3xl w-[80%] p-3 px-8 text-[16px]' />
            <button onClick={handleAdd} className="count bg-[#e64a26] text-3xl rounded-full p-2 md:w-10 h-10 flex items-center justify-center cursor-pointer">
              <img src={addiocns} alt="+" />
            </button>
          </div>


          <div className="tasks space-y-5">

            <span className="task flex justify-start items-center text-gray-400 md:w-2/5 mx-auto gap-4 " ><input type="checkbox" checked={showfinised} onChange={Togglefinish} />Show All Finished & Unfinised Tasks </span>

            {todos.length === 0 && <h1 className='text-center text-gray-400'>No tasks added yet</h1>}

            {todos.map(item => {

              return (showfinised || !item.isCompleted) && <div key={item.id} className="task flex justify-between items-center text-white p-4 border-1 md:w-2/5 h-[30%] mx-auto rounded-xl px-10 border-gray-400 bg-[#1d1d1d92]">
                <div className='flex gap-3 justify-start items-center min-w-[80%]'>


                  <div onClick={handleCheckbox} className={`border-1 border-[#e64a26] cursor-pointer h-6 min-w-6 rounded-full ${item.isCompleted ? "bg-[#27bd27]" : "bg-none"}`} value={todo.isCompleted} id={item.id}></div>


                  <div className={item.isCompleted ? "line-through text-lg " : "font-bold text-lg"}>{item.todo}</div>
                </div>
                <div className='flex gap-3 justify-center items-center min-w-[20%]'>
                  <button onClick={(e) => { handleEdit(e, item.id) }} className='cursor-pointer' ><img src={editIcons} alt="edit" /></button>
                  <button onClick={(e) => { handleDelete(e, item.id) }} className='cursor-pointer' ><img src={deleteIcons} alt="delete" /></button>
                </div>

              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
