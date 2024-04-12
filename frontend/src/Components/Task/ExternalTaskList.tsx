import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchTodos } from "../../features/externalSlice";
import { Typography } from "@mui/material";

const ExternalTaskList = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.externalTodos.todos);
  const status = useAppSelector((state) => state.externalTodos.status);
  const error = useAppSelector((state) => state.externalTodos.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  } else if (status === "succeeded") {
    return (
      <>
        <Typography variant="h4" className="pt-6">
          External Task List 
        </Typography>
        <ul>
          {todos.slice(0, 20).map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </>
    );
  } else if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return null;
};

export default ExternalTaskList;
