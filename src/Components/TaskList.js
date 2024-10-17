import React from "react";
import TaskItem from "./TaskItem";
import "./TaskItem.css";

const TaskList = ({ tasks, editTask, deleteTask, toggleCompletion }) => {
	return (
		<div>
			{tasks.map((task) => (
				<TaskItem
					key={task.id}
					task={task}
					editTask={editTask}
					deleteTask={deleteTask}
					toggleCompletion={toggleCompletion}
				/>
			))}
		</div>
	);
};

export default TaskList;
