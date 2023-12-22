import Todo from "../Models/Todo"
import React from 'react'

const Context = React.createContext<{
    todos: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
}>({
    todos: [],
    addTodo: ()=>{},
    removeTodo:(id: string) => {}
})

export default Context
