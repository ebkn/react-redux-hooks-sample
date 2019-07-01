import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Todo from '../components/todo';

const getTodos = state => state.todos;
const Todos = () => {
  const todos = useSelector(getTodos);
  return (
    <Fragment>
      {todos.map(({ id, content }) => (
        <Todo id={id} content={content} />
      ))}
    </Fragment>
  );
};
export default Todos;
