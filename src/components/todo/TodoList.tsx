import React, { FunctionComponent, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store/rootState';
import { selectTodos } from '../../store/observable/todo/selectors';
import './TodoList.css';
import { getTodos } from '../../store/observable/todo/todo';

const mapStateToProps = (state: RootState) => ({
    todos: selectTodos(state)
});

const mapDispatchToProps = {
    getTodos
};

const connector = connect(mapStateToProps, mapDispatchToProps);
interface AppProps extends ConnectedProps<typeof connector> { }

const TodoList: FunctionComponent<AppProps> = ({ getTodos, todos }) => {
    useEffect(
        () => {
            getTodos()
        },
        [getTodos]
    );

    return (
        <React.Fragment>
            <div className='todo-list-container'>
                {todos &&
                    todos.map((todoItem) => (
                        <div className='card' key={todoItem.id}>
                            {todoItem.title}
                        </div>
                    ))}
            </div>
        </React.Fragment>
    );
};

export default connector(TodoList);
