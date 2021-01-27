import * as todoActions from './actions';
import { Todo } from './todo';

export interface State {
    todos: Todo[];
    loading: boolean;
}

const initialState: State = {
    todos: [],
    loading: false
};

export const todoReducer = (state: State = initialState, action: todoActions.TodoActionTypes): State => {
    switch (action.type) {
        case todoActions.GET_TODOS: {
            return {
                ...state,
                loading: true
            };
        }

        case todoActions.GET_TODOS_COMPLETED: {
            return {
                ...state,
                loading: false,
                todos: [...action.payload]
            };
        }

        default:
            return {
                ...state
            };
    }
};
