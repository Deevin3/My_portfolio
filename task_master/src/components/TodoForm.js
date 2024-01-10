import React, {useState} from 'react'

export const  TodoForm  = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      //to prevent default action of reloading
        e.preventDefault();
        if (value) {
          // to add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder="Today's Task" />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}