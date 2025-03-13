import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../Redux/action";
import Todolist from "./Todolist";

const Todoinput = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const dispatch = useDispatch();

  const handeladd = () => {
    dispatch(addtodo(name, email));
    setemail("");
    setname("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setname(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="Enter Email"
        onChange={(e) => setemail(e.target.value)}
        value={email}
      />
      <button onClick={handeladd}>Add Todo</button>
      <Todolist />
    </div>
  );
};

export default Todoinput;
