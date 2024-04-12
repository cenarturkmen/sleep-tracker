import { TextField, Box, Button } from "@mui/material";
import { useAppDispatch } from "../../hooks";
import { useState } from "react";
import { addTodo } from "../../features/todoSlice";

const Input = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  return (
    <Box
      sx={{
        width: 552,
        maxWidth: "100%",
        marginTop: 2,
      }}
    >
      <TextField
        sx={{
          width: 450,
        }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="filled-basic"
        label="Add a new todo"
        placeholder="Add a new todo"
        variant="standard"
      />
      <Button
        sx={{
          marginTop: 1,
          marginLeft: 4,
          borderRadius: 12,
        }}
        size="large"
        variant="contained"
        onClick={() => {
          if (!value) return;
          dispatch(
            addTodo({
              id: Math.random().toString(36).substr(2, 9),
              name: value,
              completed: false,
            })
          );
          setValue("");
        }}
      >
        +
      </Button>
    </Box>
  );
};

export default Input;
