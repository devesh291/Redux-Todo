import React, { useState } from "react";
import { connect } from "react-redux";
import { updateTodo } from "../src/components/Redux/Actions";
import EditStyle from "./styles/edit.module.css";
const EditTodo = ({
  dispatch,
  todoId,
  todoTitle,
  todoDate,
  todoDescription,
}) => {
  const todoListId = todoId;
  const [openModalForm, setOpenModalForm] = useState(false);
  const [title, settitle] = useState(todoTitle);
  const [date, setDate] = useState(todoDate);
  const [description, setDescription] = useState(todoDescription);
  const handleSetTitle = (e) => settitle(e.target.value);
  const handleSetDate = (e) => setDate(e.target.value);
  const handleSetDescription = (e) => setDescription(e.target.value);

  const handleEditTodoList = (e) => {
    e.preventDefault();
    dispatch(updateTodo(todoListId, title, description, date));
    setOpenModalForm(false);
  };
  const openModal = () => {
    setOpenModalForm(true);
  };
  return (
    <>
      <button className="btn btn-success" onClick={openModal}>
        Edit
      </button>
      {openModalForm ? (
        <div className={EditStyle.container}>
          <div className={EditStyle.container_box}>
            <form onSubmit={handleEditTodoList}>
              <div className="input-group mb-3 row">
                <div className="p-2">
                  <span>Title</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add Title"
                    onChange={handleSetTitle}
                    value={title}
                  />
                </div>
                <div className="p-2">
                  <span>Description</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add Description"
                    onChange={handleSetDescription}
                    value={description}
                  />
                </div>
                <div className="p-2">
                  <span>Date</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add Date (YYYYMMDDHHmmss)"
                    onChange={handleSetDate}
                    value={date}
                  />
                </div>
                <button
                  className="btn btn-success m-2"
                  type="submit"
                  id="button-addon2"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default connect()(EditTodo);
