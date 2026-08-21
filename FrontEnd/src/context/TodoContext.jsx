import { createContext , useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
          id:1,
          todo:"Will complete XYZ by EOD",
          completed:false,  
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,Todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider 