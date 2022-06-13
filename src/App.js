import { useContext, useState } from "react";
import "./App.css";
import { TodoProvider } from "./todoContext";
import Todos from "./todos";
import { todoContext } from "./todoContext";

function App() {
  let { setTodo } = useContext(todoContext);

  const [text, setText] = useState("");

  const addTodo = () => {
    if (text === "") return;

    setTodo((current) => [...current, text]);
    setText("");
  };

  return (
    <div className="App">
      <div className="container">
        <h2>To-do List</h2>
        <div className="todoinput-container">
          <input
            type="text"
            placeholder="Add todos"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <div className="btn" onClick={addTodo}>
            Add
          </div>
        </div>

        <Todos />
      </div>
    </div>
  );
}

export default App;
