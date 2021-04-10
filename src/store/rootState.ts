import * as todo from './observable/todo/reducer';

export interface RootState {
    todo: todo.State;
}
