import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [id, setId] = useState('');
  const [content, setContent] = useState('');

  const onClick = () => {
    addTodo({ id, content });
    setId('');
    setContent('');
  };

  return (
    <div>
      <div>
        <label>id</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        </div>
      <div>
        <label>content</label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button onClick={onClick}>
        add todo
      </button>
    </div>
  )
};
export default AddTodo
