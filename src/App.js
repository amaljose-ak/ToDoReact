import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [toDo, setToDo] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const options = { weekday: "long" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
    setCurrentDate(formattedDate);
  }, []);

  const handleCheck = (id, checked) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, status: checked } : todo
      )
    );
    console.log("Checkbox value:", checked);
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2 id="date">Whoop, it's {currentDate} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
          className="inputBox"
        />
        <i
          onClick={() =>
            setTodos([
              ...todos,
              { id: Date.now(), text: toDo, status: false }
            ])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {todos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input
                onChange={(e) => handleCheck(obj.id, e.target.checked)}
                value={obj.status}
                type="checkbox"
                name=""
                id=""
              />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i
                className="fas fa-times"
                onClick={() => handleDelete(obj.id)}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
