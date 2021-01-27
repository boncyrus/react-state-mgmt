import { RootState } from './rootState';
import { todoReducer } from './todo/reducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { todoEpic } from './todo/epics';

const rootReducer = combineReducers<RootState>({
    todo: todoReducer
});

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(todoEpic);

export function configureStore() {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

    epicMiddleware.run(rootEpic);

    return store;
}
