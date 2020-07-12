import { ADD_TODO, REMOVE_TODO, SET_TODO_ITEM_STATE } from './actions';
import { combineReducers } from 'redux';

const initialState = {
  todoItems: [],
};

function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todoItems: [...state.todoItems, {
          id: state.todoItems.length + 1,
          title: action.title,
          description: action.description,
          isCompleted: false
        }],
      };

    case REMOVE_TODO:
      return {
        todoItems: Object.assign({}, state).todoItems.filter(item => item.id !== action.id),
      };

    case SET_TODO_ITEM_STATE:
      return {
        todoItems: state.todoItems.map(item =>
          item.id === action.id ? { ...item, isCompleted: action.isCompleted } : item,
        ),
      };

    default:
      return state;
  }
}

const todoApp = combineReducers({
  todo,
});

export default todoApp;
