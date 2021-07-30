import React, { useState } from 'react';
import './ToDo.css';
import ToDoList from './ToDoList';


interface IToDo {
    name: string
}

const ToDo = () => {
    const [toDo, setToDo] = useState({
        name: ''
    });
    const [toDoList, setToDoList] = useState<IToDo[]>([]);

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setToDo({ ...toDo, [e.target.name]: e.target.value })
    }

    const handleAddText = () =>{
        setToDoList([...toDoList, toDo])
        
    }

    const handleDelete = (name:string) =>{
        const newToDoList = toDoList.filter(t => t.name !== name)
        setToDoList(newToDoList)
    }
    
    return (
        <div className="todo-container">
            <div className="todo-title">
                <h1>TO-DO LIST</h1>
            </div>
            <div className="todo-form">
                    <input value={toDo.name} type="text" placeholder="what you want to do" name="name" onChange={onBlur}  />
                    <button onClick={handleAddText}>ADD</button>
                
            </div>
            <div className="todo-detail">
                {
                    toDoList.map((todo) => <ToDoList name={todo.name} handleDelete={handleDelete}></ToDoList>)
                }
            </div>
        </div>
    );
};

export default ToDo;