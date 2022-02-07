import { useState } from "react";

function TodoInput({ onTaskCreate }) {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    if(task){
      onTaskCreate(task);
      setTask("")
    }
    else{
      alert("Enter value")
    }
    
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={handleAdd}>Aadd</button>
    </>
  );
}

export default TodoInput;
