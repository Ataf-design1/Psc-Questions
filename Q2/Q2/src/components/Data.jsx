import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetching } from "../Redux/actions";

const Data = () => {
  const dispatch = useDispatch();
  const { loading, todos, error } = useSelector((state) => state);

  console.log(loading, todos, error);

  useEffect(() => {
    dispatch(fetching());
  }, [dispatch]); 

  return (
    <div>
      
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {todos.map((ele) => (
          <li key={ele.id}>
            <p>{ele.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
