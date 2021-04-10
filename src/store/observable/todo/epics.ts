import { switchMap, map, filter } from 'rxjs/operators';
import { Action } from '@reduxjs/toolkit';
import { from, Observable } from 'rxjs';
import { getTodos, getTodosCompleted, } from '../todo/todo'
import { Todo } from '../../../models/Todo';

export const todoEpic = (actions$: Observable<Action>) => {
    return actions$.pipe(
        filter(action => getTodos.match(action)),
        switchMap(() => {
            const getTodos = () => {
                const request = fetch(`https://jsonplaceholder.typicode.com/todos`)
                    .then(response => response.json())
                return from<Promise<Todo[]>>(request)
            }

            return getTodos().pipe(map(data => getTodosCompleted(data)));
        })
    );
};
