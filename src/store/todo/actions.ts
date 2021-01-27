import { Action } from 'redux';
import { Todo } from './todo';

export const GET_TODOS = '[Todo] Get';
export const GET_TODOS_COMPLETED = '[Todo] Get Completed';

interface GetTodosType extends Action<typeof GET_TODOS> {}
interface GetTodosCompletedType extends Action<typeof GET_TODOS_COMPLETED> {
    payload: Todo[];
}

export function getTodos(): TodoActionTypes {
    return {
        type: GET_TODOS
    };
}

export function getTodosCompleted(payload: Todo[]): TodoActionTypes {
    return {
        type: GET_TODOS_COMPLETED,
        payload
    };
}

export type TodoActionTypes = GetTodosType | GetTodosCompletedType;
