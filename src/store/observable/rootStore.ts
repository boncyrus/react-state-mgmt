import { RootState } from './../rootState';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { todoEpic } from './todo/epics';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import TodoSlice from './todo/todo';

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(todoEpic);

const reducer = combineReducers<RootState>({
    todo: TodoSlice
})

export function initStore() {
    const store = configureStore<RootState>({
        reducer,
        middleware: [epicMiddleware]
    });

    epicMiddleware.run(rootEpic);

    return store;
}


