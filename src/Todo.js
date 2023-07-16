import React from "react";
import { connect } from "react-redux";

import { todoListFilters, deleteTodo } from "./components/Redux/Actions";
import { useNavigate } from "react-router-dom";
import EditTodo from "./EditTodo";
import todoStyle from "./styles/todo.module.css";
const getTodoList = (todos, filter) => {
  switch (filter) {
    case todoListFilters.SHOW_ALL:
      return todos;

    default:
      throw new Error("Unknown filter" + filter);
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getTodoList(state.todos, state.todoListFilter),
    authenticatedUser: state.authenticatedUser,
  };
};

const TodoList = ({ dispatch, todos, authenticatedUser }) => {
  const history = useNavigate();
  const addtodo = () => {
    history("/addtodo");
  };
  const handleDeleteTodo = (id) => dispatch(deleteTodo(id));
  return (
    <div>
      <button className="btn btn-success" onClick={addtodo}>
        Add todos
      </button>
      <h1>{authenticatedUser}</h1>
      {todos.map((todo) => (
        <div className={todoStyle.container}>
          <div className="pt-2">
            <div>TASK {todo.id + 1}</div>
            <div className="d-flex gap-2">
              <span>Title : </span>
              <span>{todo.title}</span>
            </div>
            <div className="d-flex gap-2">
              <span>Description</span>
              <span>{todo.description}</span>
            </div>
            <div className="d-flex gap-2">
              <span>Date</span>
              <span>{todo.date}</span>
            </div>
          </div>
          <div className={todoStyle.container__button}>
            <EditTodo
              todoId={todo.id}
              todoTitle={todo.title}
              todoDate={todo.date}
              todoDescription={todo.description}
            />
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(TodoList);
