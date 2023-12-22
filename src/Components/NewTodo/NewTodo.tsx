import React, {useRef, useContext} from 'react'
import './NewTodo.css'
import Context from '../../Context/Context'

const NewTodo: React.FC = () => {
    const {addTodo} = useContext(Context)
    
    const textInputRef = useRef<HTMLInputElement>(null)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const enteredText = textInputRef.current!.value
        if(enteredText?.trim().length === 0){
            return
        }
        addTodo(enteredText)
    }
    return (
        <form onSubmit={handleSubmit} className='form'>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={textInputRef} />
            <button type='submit'>Add Todo</button>
        </form>
    )
}

export default NewTodo