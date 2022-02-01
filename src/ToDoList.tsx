import React, { useState } from "react";

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" placeholder="Wirte a toDo" />
        <button>Add ToDo</button>
      </form>
    </div>
  );
}

export default ToDoList;