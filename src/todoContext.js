import { createContext, useState } from "react";

const todoContext = createContext();

function TodoProvider({ children }) {
  const [todo, setTodo] = useState(['Learn React.js']);
  return (
    <todoContext.Provider value={{ todo, setTodo }}>
      {children}
    </todoContext.Provider>
  );
}

export { todoContext, TodoProvider };
