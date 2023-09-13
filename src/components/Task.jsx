import { useState } from "react";
import { ClipboardText } from "@phosphor-icons/react";

import { Tasks } from "./Tasks";

import styles from "./Task.module.css";

export function Task(props) {
  function handleTaskClick(taskId) {
    const newTasks = props.tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    props.setTasks(newTasks);
  }

  function deleteTask(taskToDelete) {
    const tasksWithoutDeletedOne = props.tasks.filter((task) => {
      return task !== taskToDelete;
    });

    props.setTasks(tasksWithoutDeletedOne);
  }

  const completedTasks = props.tasks.filter((task) => {
    return task.completed != false;
  }).length;
  const isTasksEmpty = props.tasks.length === 0;

  return (
    <>
      <div className={styles.tasksText}>
        <div className={styles.text}>
          <p>
            Tarefas Criadas{" "}
            <span className={styles.counter}>{props.tasks.length}</span>
          </p>
          <p>
            Concluídas <span className={styles.counter}>{completedTasks}</span>
          </p>
        </div>
      </div>
      <div className={styles.tasks}>
        {isTasksEmpty ? (
          <>
            <div className={styles.indexedTasks}>
              <ClipboardText size={64} />
            </div>
            <p className={styles.dontHaveIndexedTasks}>
              Você ainda não tem tarefas cadastradas
            </p>
            <p className={styles.organizeYourItens}>
              Crie tarefas e organize seus itens a fazer
            </p>
          </>
        ) : (
          props.tasks.map((task) => {
            return (
              <Tasks
                key={task.id}
                task={task}
                content={task}
                handleTaskClick={handleTaskClick}
                deleteTask={deleteTask}
              />
            );
          })
        )}
      </div>
    </>
  );
}
