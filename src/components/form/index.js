import React from 'react';
import './style.scss';

const TaskForm = ({ input, setInput, priority, setPriority, addTask }) => (
  <div className="task-form">
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="What needs to be done?"
    />
    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
      <option value="high_priority">High Priority</option>
      <option value="medium_priority">Medium Priority</option>
      <option value="low_priority">Low Priority</option>
    </select>
    <button onClick={addTask}>Add Task</button>
  </div>
);

export default TaskForm;
