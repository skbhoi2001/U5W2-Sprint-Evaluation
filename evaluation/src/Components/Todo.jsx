import { useState } from "react";
import TodoInput from "./TodoInput";
import { v4 as uuid } from "uuid";
import TodoList from "./TodoList";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [showComplete, setShowComplete] = useState(false);

  const handleTaskCreate = (title) => {
    const payload = {
      id: uuid(),
      title: title,
      status: false
    };
    setTodo([...todo, payload]);
  };

  const handleToggle = (id) => {
    const updatedTodos = todo.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodo(updatedTodos);
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };
  return (
    <>
      <div>
        <TodoInput onTaskCreate={handleTaskCreate} />
        <div>
          {todo
            .filter((item) => !item.status)
            .map((item) => {
              return (
                <TodoList
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  status={item.status}
                  handleDelete={handleDelete}
                  handleToggle={handleToggle}
                />
              );
            })}

          {showComplete ? (
            <>
              <div>
                <button onClick={() => setShowComplete(!showComplete)}>
                  hide show complete
                </button>
              </div>
              {todo
                .filter((item) => item.status)
                .map((item) => {
                  return (
                    <TodoList
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      status={item.status}
                      handleDelete={handleDelete}
                      handleToggle={handleToggle}
                    />
                  );
                })}
            </>
          ) : (
            <>
              <div>
                <button onClick={() => setShowComplete(!showComplete)}>
                  show complete
                </button>
                
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Todo;
