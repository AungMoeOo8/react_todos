import { useContext } from "react";
import Todo from "./todo";
import { todoContext } from "./todoContext";

function Todos() {
  let { todo, setTodo } = useContext(todoContext);
  return (
    <div className="todos-list">
      {todo.map((item, index) => (
        <Todo key={index} todo={item} setTodo={setTodo} todoIndex={index} />
      ))}
    </div>
  );
}

export default Todos;
