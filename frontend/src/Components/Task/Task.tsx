import React from "react";
import { Box, Checkbox, Typography } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../hooks";
import { changeTodo, removeTodo, toggleTodo } from "../../features/todoSlice";

interface TaskProps {
  text: string;
  id: string;
  completed: boolean;
}

const Task = ({ text, id, completed }: TaskProps): JSX.Element => {
  const disaptch = useAppDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        width: 552,
        minWidth: "100%",
        marginTop: 4,
        marginBottom: 4,
        backgroundColor: "#1f1f1f",
        flexDirection: "row",
        padding: 2,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 4,
      }}
    >
      <Checkbox checked={completed} onClick={() => disaptch(toggleTodo(id))} />
      <Typography variant="h5">{text}</Typography>
      <div className="pr-5">
        <ModeEditIcon
          fontSize="large"
          sx={{ marginRight: 2 }}
          onClick={() => disaptch(changeTodo({ id: id, name: "new" + text }))}
        />
        <DeleteIcon fontSize="large" onClick={() => disaptch(removeTodo(id))} />
      </div>
    </Box>
  );
};

export default Task;
