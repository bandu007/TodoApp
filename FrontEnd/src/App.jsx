import { useEffect, useState } from 'react'
import { TodoProvider } from './context'
import './App.css'
import { TodoForm, TodoItem } from './components'

const URL = 'https://todoapp-pzsh.onrender.com/Todolist'

function App() {

  const [todos,setTodos] = useState([])

  const addTodo = (todo)=>{
    const newTodo = {id:Date.now(),...todo}
    setTodos((prev)=>[newTodo,...prev])
    


    fetch(URL,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        ID:newTodo.id,
        Task:newTodo.todo,
        Completed:newTodo.completed
      })
    })
    .then((response)=>{
          if(!response.ok){
            alert("The task could not be created" )
          }
          return response.json()
        })
        .then((data)=>{alert(data.message);
          
        })
        
        .catch((error)=>{alert(error)})

  }

  const updateTodo = (id,Todo)=>{
    
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? Todo :prevTodo)))
    fetch(URL+`/${Todo.id}`,{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        ID:Todo.id,
        Task:Todo.todo,
        Completed:Todo.completed
      })
    })
    .then((response)=>{
          if(!response.ok){
            alert("The update operation was not successful" )
          }
          return response.json()
        })
        .then((data)=>{alert(data.message);
          
        })
        
        .catch((error)=>{alert(error)})

  }

  const deleteTodo =(id)=>{
    setTodos((prev)=>prev.filter((each)=>each.id !== id))

    fetch(URL+`/${id}`,
      { method:"DELETE",
        headers:{"Content-Type":"application/json"}})
        .then((response)=>{
          if(!response.ok){
            alert("The delete operation was not successful" )
          }
          return response.json()
        })
        .then((data)=>{alert(data.message);
          
        })
        
        .catch((error)=>{alert(error)})
  }

  const toggleComplete = (id)=>{
    setTodos((prev)=>prev.map((prevTodo)=> prevTodo.id === id ?
    {...prevTodo, completed: !prevTodo.completed}
    :prevTodo))

    fetch(URL+`/${id}`,
      { method:"PATCH",
        headers:{"Content-Type":"application/json"}})
        .then((response)=>{
          if(!response.ok){
            alert("The completed operation was not successful" )
          }
          return response.json()
        })
        .then((data)=>{alert(data.message);
          
        })
        
        .catch((error)=>{alert(error)})
  }

  

  // useEffect(()=>{
  //   localStorage.setItem("todos",JSON.stringify(todos))
  // },[todos])

  useEffect(()=>{
    fetch(URL,{
      method:"GET",
      headers:{"Content-Type":"Application/JSON"}
    }).then((response)=>{ 
      
      alert("Connect to backend successful response:"+response.status)
      return response.json()})
    .then((data)=>{
      
      const datum = data.map((task)=>({
          id:task.ID,
          todo:task.Task,
          completed:task.Completed,
      }))
      
      setTodos(datum)
      
      console.log("Data:",data)})
    .catch((error)=>{
      console.log("Error:",error)
    })
  },[])
  
  return (
   <TodoProvider value = {{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
   <div className='bg-[#172842] min-h-screen py-8'>
                 <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
                  <h1 className='text-2xl font-bold text-center mb-8 mt-2'>Manage Your Todos</h1>
                  <div className='mb-4'>
                   {/* Todo form goes here */}
                   <TodoForm/>

                  </div>
                  <div className='flex flex-wrap gap-y-3'>
                   {/* Loop and Add TodoItem here */}
                   {
                    todos.map((todo)=>(
                      <div key={todo.id} className='w-full'>
                        <TodoItem todo = {todo}/>
                      </div>
                    ))
                   }

                  </div>
                 </div>

   </div>
   </TodoProvider>
  )
}

export default App
