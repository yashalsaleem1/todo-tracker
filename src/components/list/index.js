import React from 'react';
import './style.scss';

const TaskList = ({ tasks, toggleStatus, deleteTask }) => (
  <ul className="task-list">
    {tasks.map((task) => (
      <li key={task.id} className={`task-item ${task.status.toLowerCase()}`}>
        <span>{task.title}</span>
        <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>

        <button onClick={() => toggleStatus(task.id)}>
          {task.status === "Pending" ? "Mark Completed" : "Undo"}
        </button>

        <button className="delete-btn" onClick={() => deleteTask(task.id)}>
          🗑 Delete
        </button>
      </li>
    ))}
  </ul>
);

export default TaskList;
