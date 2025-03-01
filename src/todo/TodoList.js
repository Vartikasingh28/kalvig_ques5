export const TodoList = ({ tasks, onDeleteTask }) => {
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id} className="task-item">
                    <span>{task.name}</span>
                    <button className="delete-btn" onClick={() => onDeleteTask(task.id)}>❌</button>
                </li>
            ))}
        </ul>
    );
};
