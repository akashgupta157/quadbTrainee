function Task({ task, onDelete, onToggle }) {
    return (
      <div className={`task ${task.completed ? 'completed' : ''}`}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.text}</span>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    );
  }
  
  export default Task;