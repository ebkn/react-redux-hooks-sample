import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todo from '../components/todo';
import AddTodo from '../components/addTodo';

const getTodos = state => state.todos;
const Todos = () => {
  const todos = useSelector(getTodos);

  const dispatch = useDispatch();
  const addTodo = ({ id, content }) => dispatch({ type: 'ADD_TODO', id, content });

  return (
    <Fragment>
      <AddTodo addTodo={addTodo} />
      {todos.map(({ id, content }, index) => (
        <Todo key={index} id={id} content={content} />
      ))}
    </Fragment>
  );
};
export default Todos;
