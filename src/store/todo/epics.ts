import { Todo } from './todo';
import { ActionsObservable, ofType } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';
import * as todoActions from './actions';
import { ajax } from 'rxjs/ajax';

export const todoEpic = (actions$: ActionsObservable<todoActions.TodoActionTypes>) => {
    return actions$.pipe(
        ofType(todoActions.GET_TODOS),
        switchMap(() =>
            ajax
                .getJSON<Todo[]>(`https://jsonplaceholder.typicode.com/todos`)
                .pipe(map((response) => todoActions.getTodosCompleted(response)))
        )
    );
};
