import React from 'react';

function Task({ id, text, completed, deleteTask, toggleTaskCompletion }) {
    return (
        <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggleTaskCompletion(id)}>{text}</span>
            <button onClick={() => deleteTask(id)}>Eliminar</button>
        </li>
    );
}

export default Task;
