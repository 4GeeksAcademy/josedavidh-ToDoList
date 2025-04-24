import React, { useState } from "react";

//create your first component
const Home = () => {

	const [task, setTask] = useState("");
	const [taskList, setTaskList] = useState([]);

	const handleData = (event) => {
		setTask(event.target.value);
	}

	const addTask = (event) => {
		if (event.key == "Enter") {
			event.preventDefault();
			setTaskList([...taskList, task])
			setTask("");
		}
	}

	const deleteTask = (indexToDelete) => {
		const newList = taskList.filter((_, index) => index !== indexToDelete);
		setTaskList(newList);
	};



	return (
		<div className="container">
			<div className="row d-flex justify-content-center">
				<div className="col-12 col-md-7 border border-danger">
					<h1 className="Title_size d-flex justify-content-center">To Do's</h1>

					<form className="border p-3">
						<input
							type="text"
							placeholder="Ingresa la tarea"
							className="form-control mt-2"
							name="taskName"
							value={task}
							onKeyDown={addTask}
							onChange={handleData}
						/>
					</form>

					<ul className="list-group mt-3">
						{taskList.length === 0 ? (
							<li className="list-group-item text-muted">
								No hay tareas, añadir tareas
							</li>
						) : (
							taskList.map((item, index) => (
								<li
									key={index}
									className="list-group-item d-flex justify-content-between align-items-center task-item"
								>
									<span>{item}</span>
									<span
										className="delete-icon"
										onClick={() => deleteTask(index)}
									>
										❌
									</span>
								</li>
							))
						)}
					</ul>

				</div>
			</div>
		</div>
	);
};

export default Home;