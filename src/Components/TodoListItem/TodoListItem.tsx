import React from 'react'
import './TodoListItem.css'

const TodoListItem: React.FC<{id: string, text: string, deleteItem: (id: string) => void}> = (props) => {
    return (
        <li className="item" onClick={()=>props.deleteItem(props.id)} key={props.id}>{props.text}</li>
    )
}

export default TodoListItem