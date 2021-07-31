import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './ToDoList.css';

interface IToDoList {
    name: string,
    handleDelete: (name: string) => void
}

const ToDoList = ({name, handleDelete}: IToDoList) => {

    return (
        <div>
            <div className="todo-list-container">
                <p>
                    {name}
                </p>
                <button onClick={() => handleDelete(name)}><DeleteIcon></DeleteIcon></button>
                
            </div>
        </div>
    );
};

export default ToDoList;