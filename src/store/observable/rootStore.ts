import { RootState } from './../rootState';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { todoEpic } from './todo/epics';
import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from './todo/todo';

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(todoEpic);

export function initStore() {
    const store = configureStore<RootState>({
        reducer: {
            todo: TodoReducer
        },
        middleware: [epicMiddleware]
    });

    epicMiddleware.run(rootEpic);

    return store;
}


