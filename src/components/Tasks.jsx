import { useState } from "react";

import { Trash } from "@phosphor-icons/react";

import styles from "./Tasks.module.css";

export function Tasks(props) {
  function handleDeleteTask() {
    props.deleteTask(props.task);
  }

  return (
    <>
      <div className={styles.tasks}>
        <div className={styles.taskBox}>
          <div className={styles.taskContent}>
            <header>
              <div className={styles.taskDetails}>
                <input type="checkbox" id={props.task.id} />
                <label
                  onClick={() => props.handleTaskClick(props.task.id)}
                  htmlFor={props.task.id}
                  style={
                    props.task.completed
                      ? { textDecoration: "line-through" }
                      : {}
                  }
                >
                  <span>{props.task.title}</span>
                </label>
              </div>
              <button onClick={handleDeleteTask} title="Deletar Task">
                <Trash size={24} />
              </button>
            </header>
          </div>
        </div>
      </div>
    </>
  );
}
