import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { PlusCircle } from "@phosphor-icons/react";

import styles from "./AddTask.module.css";

export function AddTasks({ handleTaskAddition, tasks }) {
  const [inputData, setInputData] = useState("");

  function handleTextAreaChange(e) {
    setInputData(e.target.value);
  }

  function handleFocusTextArea() {
    setInputData("");
  }

  function handleAddTaskClick(e) {
    e.preventDefault();
    handleTaskAddition(inputData);
    setInputData("");
  }

  return (
    <>
      <form className={styles.newTask}>
        <textarea
          name="newtask"
          className={styles.addNewTask}
          placeholder="Adicione uma nova tarefa"
          onFocus={handleFocusTextArea}
          onChange={handleTextAreaChange}
          value={inputData}
        />

        <button
          type="submit"
          onClick={handleAddTaskClick}
          disabled={inputData == ""}
        >
          <span>Criar</span>
          <PlusCircle size={16} />
        </button>
      </form>
    </>
  );
}
