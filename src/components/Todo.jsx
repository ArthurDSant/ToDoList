import React from 'react'

const Todo = ({ todo, removeTodo, completedTodo }) => {
  return (
    <div>
        <div className="todo" 
          style={{textDecoration: todo.isCompleted ? 'line-through' : '', backgroundColor: todo.isCompleted ? '#8a8a8a' : ''}}>
            <div className="content">
                <p className='text'>{todo.text}</p> {/* Isso serve para acessar a propriedade 'text:' que os 'todos' possuem */}
                <p className='category'>{todo.category}</p> {/* Isso serve para acessar a propriedade 'category:' que os 'todos' possuem */}
            </div> {/* Impremir textos desta maneira '{?,?}' se chama interpolação*/}

            <div className='buttons-todo'>
                <button className='completed button-todo' onClick={() => completedTodo(todo.id)} > 
                  To complete
                </button>
                <button className='remove button-todo' onClick={() => removeTodo(todo.id)} > 
                  X 
                </button>
            </div>
        </div>
    </div>
  )
}

export default Todo
