import React, {useContext} from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
import './Todos.css'
import Context from '../../Context/Context'

const Todos: React.FC = (props) => {
    const {todos, removeTodo} = useContext(Context)
    return (
        <ul className="todos">
            {todos.map((value, index)=>{
                return (
                    <TodoListItem key={index} deleteItem={removeTodo} id={value.id} text={value.text}/>
                )
            })}
        </ul>
    )
}

export default Todos