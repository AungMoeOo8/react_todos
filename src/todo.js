import React from "react";
import remove from "./remove.svg";

function Todo({ todo, setTodo, todoIndex }) {
  return (
    <div className="todo">
      <p>{todo}</p>
      <div
        className="remove-icon btn"
        onClick={() =>
          setTodo((current) =>
            current.filter((item, index) => index !== todoIndex)
          )
        }
      >
        <img src={remove} />
      </div>
    </div>
  );
}

export default Todo;
