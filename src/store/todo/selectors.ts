import { RootState } from './../rootState';

export const selectTodos = (state: RootState) => state.todo.todos;
