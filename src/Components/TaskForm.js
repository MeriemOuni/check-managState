import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
	const [taskName, setTaskName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!taskName) {
			alert("Please fill in both fields.");
			return;
		}
		const newTask = {
			id: Date.now(),
			name: taskName,
			completed: false,
		};
		addTask(newTask);
		setTaskName("");
	};
	return (
		<div>
			<form onSubmit={handleSubmit} className='task-form'>
				<input
					type='text'
					placeholder='Task Name'
					value={taskName}
					onChange={(e) => setTaskName(e.target.value)}
					required
				/>

				<button type='submit'>Add Task</button>
			</form>
		</div>
	);
};

export default TaskForm;
