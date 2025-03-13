import { ERROR, LOADING, SUCCESS } from "./actiontype";
import axios from 'axios'

export const loading = () => {
  return {
    type: LOADING,
  };
};

export const success = (todo) => {
  return {
    type: SUCCESS,
    payload: todo,
  };
};

export const error = (error) => {
  return {
    type: ERROR,
    payload: error,
  };
};

// thunkaction

export const fetching = () => {
 return async (dispatch) => {
    try {
      dispatch(loading());
      let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      dispatch(success(res.data));
    } catch (error) {
      dispatch(error(error.message));
    }
  };
};
