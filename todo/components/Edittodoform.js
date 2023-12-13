import React, { useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handelSubmit = (e) => {
        // prevent default action
        e.preventDefault();

        // to edit it
        editTodo(value, task.id);

    }
    return (
        <form onSubmit={handelSubmit} className='TodoForm' >
            <input type="text" className='todo-input' value={value} placeholder="Update Task" onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className='todo-btn'>Update task</button>
        </form>
    )
}
