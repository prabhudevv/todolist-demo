import React from 'react';

const Todos = ({ todos, deleteTodo, completeTodo }) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <i className="fa fa-trash" style={{right:"1rem"}} aria-hidden="true" onClick={() => { deleteTodo(todo.id) }}></i>
          {/* <i className="fa fa-edit" style={{right:"3rem"}} aria-hidden="true" right="2rem"></i> */}
        </div>
      )
    })
  ) : (
      <p className="center">You have no todo's left, yay!</p>
    );

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;