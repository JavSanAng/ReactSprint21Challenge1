import React, { useState } from "react";

function AddTaskForm({ addTask }) {
    const [task, setTask] = useState('');

    const createTask = (event) => {
        event.preventDefault();
        if (task.length === 0) {
            console.error('Campo vacío');
        } else {
            addTask(task);
            setTask('');
        }
    };

    return (
        <div>
            <form onSubmit={createTask}>
                <label>
                    <input
                        type="text"
                        name="inputTask"
                        value={task}
                        onChange={event => setTask(event.target.value)}
                        placeholder="Add a new task.."
                    />
                </label>
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}

export default AddTaskForm;
