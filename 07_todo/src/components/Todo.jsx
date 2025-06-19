import React, { useState } from 'react'
import { MdCheck, MdDeleteForever } from "react-icons/md";

const Todo = () => {
    const [inputValue, setInputValue] = useState("")
    const [task , setTask] = useState([]);


    const handleInputChange = (value) => {
        setInputValue(value)
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        if(!inputValue) return;

        if(task.includes(inputValue)){
            setInputValue("")
            return
        };

        setTask((prevTask) => [...prevTask, inputValue]);

        setInputValue("");
    }
    const handleDelete = (value) => {
        const updatedTask = task.filter((currTask) => currTask !== value)
        setTask(updatedTask)
    }
    const handleClearToDoData = () => {
        setTask([]);
    }
  return (
    <section className='todo_container'>
        <header>
            <h1>To Do List</h1>
        </header>
        <section className='form'>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input
                     type="text"  
                     className='todo-input' 
                     autoComplete='off'
                     value={inputValue}
                     onChange={(e) => handleInputChange(e.target.value)}
                     />
                </div>
                <div>
                    <button type='submit' className='todo-btn'>
                        Add Task
                    </button>
                </div>
            </form>

        </section>
        <section className='myUnOrdList'>
            <ul>
                {
                    task.map((currTask, index) => {
                        return( 
                        <li key={index} className='todo-item'>
                            <span>{currTask}</span>
                            <button className='check-btn'><MdCheck/></button>
                            <button className='delete-btn' onClick={() => handleDelete(currTask)}><MdDeleteForever/></button>

                        </li>
                        )
                    })
                }
            </ul>
        </section>
        <section>
            <button className='clear-btn' onClick={handleClearToDoData}>Clear All</button>
        </section>

    </section>
    

  )
}

export default Todo
