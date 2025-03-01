import { useState, useEffect } from "react";
import TodoForm from "./todo/TodoForm";
import { TodoList } from "./todo/TodoList";
import "./App.css";

const App = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (taskName) => {
        if (!taskName.trim()) return;
        setTasks([...tasks, { id: Date.now(), name: taskName }]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="app-container">
            <h1 className="title">🌟 Task Manager 🌟</h1>
            <TodoForm onAddTask={addTask} />
            <TodoList tasks={tasks} onDeleteTask={deleteTask} />
        </div>
    );
};

export default App;
