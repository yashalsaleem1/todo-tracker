import React, { useState } from 'react';
import Header from './layout/header';
import TaskForm from './components/form';
import FilterTabs from './components/tabs';
import TaskList from './components/list';
import EmptyState from './components/stats';
import './App.scss';

function App() {
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('High');
  const [filter, setFilter] = useState('All');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!input.trim()) return;
    const newTask = {
      id: Date.now(),
      text: input,
      priority,
      status: 'Pending'
    };
    setTasks([...tasks, newTask]);
    setInput('');
    setPriority('High');
  };

  const toggleStatus = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id
        ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' }
        : task
    ));
  };

  const filteredTasks =
    filter === 'All' ? tasks : tasks.filter((task) => task.status === filter);

  const completedCount = tasks.filter((task) => task.status === 'Completed').length;

  return (
    <div className="app-container">
      <Header />
      <TaskForm {...{ input, setInput, priority, setPriority, addTask }} />
      <FilterTabs currentFilter={filter} setFilter={setFilter} />
      <div className="task-stats">
        <span>{tasks.length} tasks</span>
        <span>{completedCount} completed</span>
      </div>
      {filteredTasks.length > 0 ? (
        <TaskList tasks={filteredTasks} toggleStatus={toggleStatus} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

export default App;
