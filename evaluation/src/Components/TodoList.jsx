import { useState } from "react";
import styles from "./Todo.module.css";

function TodoList({ id, title, status, handleDelete, handleToggle }) {
  const [line, setLine] = useState(false);
  const handleLine = () => {
    setLine(!line);
  };
  return (
    <>
      <div className={styles.environment}>
        <div className={styles.elements}>
          <h2
            onClick={handleLine}
            className={line ? styles.line : styles.normal}
          >
            {title}
          </h2>
          <p>{status ? "Done" : "Pending"}</p>
          <button onClick={() => handleToggle(id)}>{status ? "Mark Not Complete" : "Mark Complete"}</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default TodoList;
