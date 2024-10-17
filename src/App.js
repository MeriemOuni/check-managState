import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import TaskForm from "./Components/TaskForm";

import TaskList from "./Components/TaskList";

function App() {
	const [tasks, setTasks] = useState([]);

	// Load tasks from localStorage on initial render
	useEffect(() => {
		const storedTasks = JSON.parse(localStorage.getItem("tasks"));
		if (storedTasks) {
			setTasks(storedTasks);
		}
	}, []);

	// Save tasks to localStorage whenever tasks change
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	const addTask = (task) => {
		setTasks([...tasks, task]);
	};

	const editTask = (updatedTask) => {
		setTasks(
			tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
		);
	};

	const deleteTask = (id) => {
		if (window.confirm("Are you sure you want to delete this task?")) {
			setTasks(tasks.filter((task) => task.id !== id));
		}
	};

	const toggleCompletion = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};
	return (
		<div className='App'>
			<TaskForm addTask={addTask} />
			<TaskList
				tasks={tasks}
				editTask={editTask}
				deleteTask={deleteTask}
				toggleCompletion={toggleCompletion}
			/>
		</div>
	);
}

export default App;
