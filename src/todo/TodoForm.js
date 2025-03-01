import { useState } from "react";

const TodoForm = ({ onAddTask }) => {
    const [taskName, setTaskName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskName.trim()) return;
        onAddTask(taskName);
        setTaskName("");
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Enter task..."
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <button type="submit">➕ Add Task</button>
        </form>
    );
};

export default TodoForm;
