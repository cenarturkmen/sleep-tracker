// create a slice for todoapp
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TodoState {
  id: string;
  name: string;
  completed: boolean;
}

// Define the initial state using that type
const initialState: { todos: TodoState[] } = {
  todos: [
    {
      id: "1",
      name: "Todo 1",
      completed: true,
    },
    {
      id: "2",
      name: "Todo 2",
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoState>) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[index].completed = !state.todos[index].completed;
    },
    changeTodo: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].name = action.payload.name;
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos.splice(index, 1);
    },
  },
});

export const { addTodo, toggleTodo, changeTodo, removeTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
