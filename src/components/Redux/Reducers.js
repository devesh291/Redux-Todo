import { combineReducers } from "redux";
import { todoListFilters } from "./Actions";

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description,
          date: action.date,
          completed: false,
        },
      ];

    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              title: action.title,
              description: action.description,
              date: action.date,
              completed: false,
            }
          : todo
      );

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "DELETE_COMPLETED_TODO":
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

const todoListFilter = (state = todoListFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_TODOLIST_FILTER":
      return action.filter;
    default:
      return state;
  }
};
export default combineReducers({
  todos,
  todoListFilter,
});
