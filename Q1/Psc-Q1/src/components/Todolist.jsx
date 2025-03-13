import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletetodo, toggle } from "../Redux/action";

const Todolist = () => {
  const todo = useSelector((state) => state);
  console.log(todo);
  const dispatch = useDispatch();
  console.log(todo);
  return (
    <>
      <ul>
        {todo.map((ele) => (
          <li key={ele.id}>
            <p>
              <b>Name: </b>
              {ele.name}
            </p>
            <p>
              <b>Email: </b>
              {ele.email}
            </p>
            <button 
            onClick={()=>dispatch(toggle(ele.id))}
              style={{
                color: ele.completed ? "green":"red",
                border: "none",
                textDecoration: ele.completed ? "none" : "line-through",
              }}
            >
              {ele.completed ? "Completed" : "Completed"}
            </button>
            <button onClick={() => dispatch(deletetodo(ele.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todolist;
