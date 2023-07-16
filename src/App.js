import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/todo" element={<Todo />} />
          <Route exact path="/addtodo" element={<AddTodo />} />
          <Route exact path="/edittodo/:id" element={<EditTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
