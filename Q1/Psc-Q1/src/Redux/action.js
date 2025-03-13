import { ADDTODO, DELETETODO, TOGGLETODO } from "./actiontype";

export const addtodo = (name, email) => {
  return {
    type: ADDTODO,
    payload: {
      name,
      email,
    },
  };
};

export const deletetodo = (id) => {
  return {
    type: DELETETODO,
    payload: id,
  };
};


export const toggle = (id)=>{
    return{
        type:TOGGLETODO,
        payload: id
    }
}