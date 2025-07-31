import React from 'react';
import './style.scss';

const TaskList = ({ tasks, toggleStatus }) => (
  <ul className="task-list">
    {tasks.map((task) => (
      <li key={task.id} className={`task-item ${task.status.toLowerCase()}`}>
        <span>{task.text}</span>
        <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
        <button onClick={() => toggleStatus(task.id)}>
          {task.status === "Pending" ? "Mark Completed" : "Undo"}
        </button>
      </li>
    ))}
  </ul>
);

export default TaskList;
