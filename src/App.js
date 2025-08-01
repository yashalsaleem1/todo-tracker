import React, { useState } from "react";
import Header from "./layout/header";
import TaskForm from "./components/form";
import FilterTabs from "./components/tabs";
import TaskList from "./components/list";
import EmptyState from "./components/stats";
import { addTaskAPI } from "./api/axios";
import "./App.scss";

function App() {
	const [input, setInput] = useState("");
	const [priority, setPriority] = useState("High");
	const [filter, setFilter] = useState("All");
	const [tasks, setTasks] = useState([]);

	const addTask = async () => {
		if (!input.trim()) return;

		const newTask = {
			title: input,
			priority: priority,
			status: "Pending",
		};
		console.log("Sending task:", newTask);

		try {
			const response = await addTaskAPI(newTask);
			setTasks([...tasks, response.data]);
			setInput("");
			setPriority("High");
		} catch (error) {
			console.error("Failed to add task:", error);
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
				<TaskList tasks={filteredTasks} toggleStatus={toggleStatus} />
			) : (
				<EmptyState />
			)}
		</div>
	);
}

export default App;
