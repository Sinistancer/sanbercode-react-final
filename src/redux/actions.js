export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_TODO_ITEM_STATE = 'SET_TODO_ITEM_STATE';

export function addTodo(title, description) {
  return { type: ADD_TODO, title, description };
}

export function removeTodo(id) {
  return { type: REMOVE_TODO, id };
}

export function setTodoItemState(id, isCompleted) {
  return { type: SET_TODO_ITEM_STATE, id, isCompleted };
}

