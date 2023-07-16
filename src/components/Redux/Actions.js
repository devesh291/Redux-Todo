
let nextTodoId = 0;

export const addTodo = (title, description, date) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    title,
    description,
    date
});
export const updateTodo = (id, title, description, date) => ({
    type: 'UPDATE_TODO',
    id,
    title,
    description,
    date
});
export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
});
export const deleteCompletedTodo = () => ({
    type: 'DELETE_COMPLETED_TODO'
});
export const resetTodo = () => ({
    type: 'RESET_TODO'
});

export const todoListFilter = filter => ({
    type: 'SET_TODOLIST_FILTER',
    filter
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const setTodoListFilter = filter => ({
    type: 'SET_TODOLIST_FILTER',
    filter
});

export const todoListFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};