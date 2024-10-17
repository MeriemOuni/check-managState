import React, { useState } from "react";
import "./TaskItem.css";

const TaskItem = ({ task, editTask, deleteTask, toggleCompletion }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [taskName, setTaskName] = useState(task.name);

	const handleEditSubmit = (e) => {
		e.preventDefault();
		const updatedTask = {
			...task,
			name: taskName,
		};
		editTask(updatedTask);
		setIsEditing(false);
	};

	return (
		<div className='taskitem'>
			<li className={`task-item ${task.completed ? "completed" : ""}`}>
				{isEditing ? (
					<form className='form' onSubmit={handleEditSubmit}>
						<input
							type='text'
							value={taskName}
							onChange={(e) => setTaskName(e.target.value)}
						/>
						<button type='submit'>Save</button>
						<button type='button' onClick={() => setIsEditing(false)}>
							Cancel
						</button>
					</form>
				) : (
					<>
						<span onClick={() => toggleCompletion(task.id)}>{task.name}</span>
						<span>{task.description}</span>
						<button onClick={() => setIsEditing(true)}>Edit</button>
						<button onClick={() => deleteTask(task.id)}>Delete</button>
					</>
				)}
			</li>
		</div>
	);
};

export default TaskItem;
