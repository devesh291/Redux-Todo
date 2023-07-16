import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "./components/Redux/Actions";
import { useNavigate } from "react-router-dom";

const AddTodo = ({ dispatch }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const handleSetTitle = (e) => setTitle(e.target.value);
  const handleSetDescription = (e) => setDescription(e.target.value);
  const handleSetDate = (e) => setDate(e.target.value);

  const history = useNavigate();
  const addTask = (e) => {
    e.preventDefault();
    if (title && description && date) {
      dispatch(addTodo(title, description, date));
      history("/todo");
    } else {
      alert("write somthing");
    }
    setTitle("");
    setDescription("");
    setDate("");
  };

  return (
    <form onSubmit={addTask}>
      <div className="input-group mb-3 row">
        <div className="p-2">
          <input
            type="text"
            className="form-control"
            placeholder="Add Title"
            onChange={handleSetTitle}
            value={title}
          />
        </div>
        <div className="p-2">
          <input
            type="text"
            className="form-control"
            placeholder="Add Description"
            onChange={handleSetDescription}
            value={description}
          />
        </div>
        <div className="p-2">
          <input
            type="text"
            className="form-control"
            placeholder="Add Date (YYYYMMDDHHmmss)"
            onChange={handleSetDate}
            value={date}
          />
        </div>
        <button className="btn btn-success m-2" type="submit" id="button-addon2">
          Add
        </button>
      </div>
    </form>
  );
};

export default connect()(AddTodo);
