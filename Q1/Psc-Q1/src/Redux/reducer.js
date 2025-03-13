import { ADDTODO, DELETETODO, TOGGLETODO } from "./actiontype";

const initialstate = [];
export const todoreducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADDTODO:
      return [
        ...state,
        {
          id: Date.now(),
          name: action.payload.name,
          email: action.payload.email,
          completed: false,
        },
      ];
    case DELETETODO:
      return state.filter((ele) => ele.id !== action.payload);
    case TOGGLETODO:
      return state.map((ele) =>
        ele.id === action.payload ? { ...ele, completed: !ele.completed } : ele
      );
    default:
      return state;
  }
};
