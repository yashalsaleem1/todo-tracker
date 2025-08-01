import React, { useEffect, useState } from "react";
import Header from "./layout/header";
import TaskForm from "./components/form";
import FilterTabs from "./components/tabs";
import TaskList from "./components/list";
import EmptyState from "./components/stats";
import { addTaskAPI, listTasks, deleteTask } from "./api/axios";
import "./App.scss";

function App() {
	const [input, setInput] = useState("");
	const [priority, setPriority] = useState("high_priority");
	const [filter, setFilter] = useState("All");
	const [tasks, setTasks] = useState([]);

	const addTask = async () => {
		if (!input.trim()) return;

		const newTask = {
			title: input,
			priority: priority,
		};
		console.log("Sending task:", newTask);

		try {
			const response = await addTaskAPI(newTask);
			fetchTasks();
			// setTasks([...tasks, response.data]);
			setInput("");
			setPriority("high_priority");
		} catch (error) {
			console.error("Failed to add task:", error);
		}
	};

	const DeleteTask = async (id) => {
		try {
		  await deleteTask(id);
		  fetchTasks(); // Refresh task list
		} catch (error) {
		  console.error("Failed to delete task:", error);
		}
	  };
	  
	const fetchTasks = async () => {
		try {
			const taskData = await listTasks();
			setTasks(taskData);
			console.log(taskData);
		} catch (error) {
			console.error("Failed to fetch tasks:", error);
		}
	};

	const toggleStatus = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id
					? {
							...task,
							status: task.status === "Pending" ? "Completed" : "Pending",
					  }
					: task
			)
		);
	};

	const filteredTasks =
		filter === "All" ? tasks : tasks.filter((task) => task.status === filter);

	const completedCount = tasks.filter(
		(task) => task.status === "Completed"
	).length;

	useEffect(() => {
		fetchTasks();
	  }, []);
	  

	return (
		<div className="app-container">
			<Header />
			<TaskForm {...{ input, setInput, priority, setPriority, addTask }} />
			<div className="task-controls">
				<div className="tabs-left">
					<FilterTabs currentFilter={filter} setFilter={setFilter} />
				</div>
				<div className="task-stats">
					<span>{tasks.length} tasks</span>
					<span>{completedCount} completed</span>
				</div>
			</div>

			{filteredTasks.length > 0 ? (
				<TaskList tasks={filteredTasks} toggleStatus={toggleStatus}  deleteTask={DeleteTask}/>
			) : (
				<EmptyState />
			)}
		</div>
	);
}

export default App;
