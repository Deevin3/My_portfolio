import React, { useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handelSubmit = e => {
        e.preventDefault();

        addTodo(value);

        setValue("")
    }
    return (
        <form className='TodoForm' onSubmit={handelSubmit}>
            <input type="text" className='todo-input' value={value} placeholder="Today's task" onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}
