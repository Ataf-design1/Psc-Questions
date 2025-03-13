import { ERROR, LOADING, SUCCESS } from "./actiontype";

const initialstate = {
  loading: false,
  todos: [],
  error: null,
};
export const reducer = (state=initialstate, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case SUCCESS:
      return { ...state, todos: [...state.todos, action.payload] };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
      default :
      return state
  }
};


