import { Card, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks";

const TodoCounter = () => {
  const countDones = useAppSelector((state) =>
    state.todo.todos.filter((todo) => todo.completed === true)
  );
  const countAll = useAppSelector(state => state.todo);

  return (
    <Card sx={{ backgroundColor: "#1f1f1f", borderRadius: 4 }}>
      <div className="flex justify-evenly p-12">
        <div>
          <Typography variant="h3">Todo Done</Typography>
          <Typography variant="h4">keep it up</Typography>
        </div>
        <div className="bg-custom-orange rounded-full w-24 h-24 flex justify-center self-center">
          <Typography variant="h4" className="pt-6">
            {countDones.length + "/" + (countAll.todos.length || 0)}
          </Typography>
        </div>
      </div>
    </Card>
  );
};

export default TodoCounter;
