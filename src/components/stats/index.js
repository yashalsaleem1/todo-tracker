import React from "react";
import img from "../../assets/todo.png";
import "./style.scss";

const EmptyState = () => (
	<div className="empty-state">
		<img src={img} alt="Empty" />
		<h3>No tasks yet</h3>
		<p>Add your first task to get started!</p>
	</div>
);

export default EmptyState;
