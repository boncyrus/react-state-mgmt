import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../../models/Todo";

export interface State {
    todos: Todo[];
    loading: boolean;
}

const initialState: State = {
    loading: false,
    todos: []
}

const reducer = {
    getTodos: (state: State) => {
        state.loading = true
    },
    getTodosCompleted: (state: State, action: PayloadAction<Todo[]>) => {
        state.loading = false;
        state.todos = action.payload;
    }
}

export const todoSlice = createSlice<State, typeof reducer>({
    name: 'todo',
    initialState,
    reducers: reducer
});

export const { getTodos, getTodosCompleted } = todoSlice.actions;
export default todoSlice.reducer;