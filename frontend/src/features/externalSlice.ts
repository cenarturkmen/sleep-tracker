import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ExternalTodoState {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface ExternalState {
  todos: ExternalTodoState[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
}

const initialState: ExternalState = {
  todos: [],
  status: "idle",
  error: undefined,
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

// Define your slice
const externalTodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchTodos.fulfilled,
        (state, action: PayloadAction<ExternalTodoState[]>) => {
          state.status = "succeeded";
          state.todos = action.payload;
        }
      )
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default externalTodoSlice.reducer;
