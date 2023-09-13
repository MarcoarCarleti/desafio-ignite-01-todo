import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { AddTasks } from "./components/AddTask";
import { Task } from "./components/Task";

import styles from "./App.module.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      completed: false,
      idCompleted: 1,
    },
    {
      id: 2,
      title: "Tocar guitarra",
      completed: false,
      idCompleted: 2,
    },
  ]);

  function handleTaskAddition(taskTitle) {
    const newTasks = [
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        completed: false,
        idCompleted: uuidv4(),
      },
    ];
    setTasks(newTasks);
  }

  return (
    <>
      <nav className={styles.wrapper}>
        <img
          className={styles.todoLogo}
          src="src\assets\rocket.svg"
          alt="todologo"
        />
        <h1>
          <span className={styles.to}>to</span>
          <span className={styles.do}>do</span>
        </h1>
      </nav>
      <AddTasks
        handleTaskAddition={handleTaskAddition}
        tasks={tasks}
        setTasks={setTasks}
      />

      <Task tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
