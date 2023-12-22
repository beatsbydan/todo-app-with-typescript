import React, {ReactNode, useState} from 'react'
import Context from './Context'
import Todo from '../Models/Todo'

const ContextProvider:React.FC<{children: ReactNode}> = (props) => {
    type todoContextType = {
        todos: Todo[],
        addTodo: (text: string) => void,
        removeTodo: (id: string) => void
    }
    const [todos, setTodos] = useState<Todo[]>([])
    const addNewTodo = (text: string) => {
        const newTodo = new Todo(text)
        setTodos(prev => prev.concat(newTodo))
    }
    const removeTodo = (id: string) => {
        const newItems = todos.filter(todo => todo.id !== id)
        setTodos([...newItems])
    }

    const value: todoContextType= {
        todos: todos,
        addTodo: addNewTodo,
        removeTodo: removeTodo
    }
    return (
        <Context.Provider value={value}>{props.children}</Context.Provider>
    )
}

export default ContextProvider