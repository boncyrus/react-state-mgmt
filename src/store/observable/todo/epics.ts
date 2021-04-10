import { switchMap, map, filter } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { createAction, Action } from '@reduxjs/toolkit';
import { Observable } from 'rxjs';
import { getTodosCompleted, } from '../todo/todo'
import { Todo } from '../../../models/Todo';

export const todoEpic = (actions$: Observable<Action>) => {
    return actions$.pipe(
        filter(createAction('todo/getTodos').match),
        switchMap(() => {
            return ajax
                .getJSON<Todo[]>(`https://jsonplaceholder.typicode.com/todos`)
                .pipe(map((response) => getTodosCompleted(response)))
        })
    );
};
