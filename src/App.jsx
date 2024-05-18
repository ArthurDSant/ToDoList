
import { useState } from 'react'
import './css/background.css'
import './css/index.css'
import './css/app.css'
import './css/FilterSearch.css'
import './css/Todo.css'
import './css/TodoForm.css'

import Search from './components/Search.jsx'
import Todo from './components/Todo.jsx'
import Filter from './components/Filter.jsx'
import TodoForm from './components/TodoForm.jsx'


function App() {
  const [todos, setTodos] = useState ([ // useState permite a re-renderização opu seja, melhor para manipular valores / Colocar os dados (set) e consultar a variavel escolhida (todos)
    {
      id: 1,
      text: "Create 'X' functionality in the system",
      category: 'Work',
      isCompleted: false,
    } ,
    {
      id: 2,
      text: "Apply responsiveness to project 'y'",
      category: 'Personal',
      isCompleted: false,
    } ,
    // {
    //   id: 3,
    //   text: 'Estudar a sintaxe do React-Js',
    //   category: 'Estudos',
    //   isCompleted: false,
    // } ,
  ]);
  
  const [search, setSearch] = useState('')

  const [filter, setFilter] = useState('All')
  // const [sort, setSort] = useState('Asc')

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };
  
  const removeTodo = (id) => {
    const newTodo = [...todos];
    const filteredTodos = newTodo.filter((todo) =>
      todo.id !== id ? todo : null
      );
    setTodos(filteredTodos);
  };

  const completedTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
  };

  return ( ////////////////////////////////////////////////////////////////////
    <div className="background">
      <div className="app">

        <h1>TO DO LIST</h1>

        <div className="filter-search">
          <div className="todo-filter">
            { <Filter filter={filter} setFilter={setFilter} /* setSort={setSort} */ /> }
          </div>
          <div className="todo-search">
            <Search search={search} setSearch={setSearch} />
          </div>
        </div>

        <div className="todo-list">
          {todos
            .filter((todo) =>  
              filter == 'All' 
              ? true : filter == 'Completed' 
              ? todo.isCompleted 
              : !todo.isCompleted
            )
            .filter((todo) => 
              todo.text.toLowerCase().includes(search.toLowerCase())
            )
            // .sort((a, b) => // Ordem crescente e dec
            //   sort === 'Asc' 
            //     ? a.text.localeCompare(b.text) 
            //     : b.text.localeCompare(a.text) 
            // )
            .map((todo) => (
              <Todo 
                key={todo.id} todo={todo} 
                removeTodo={removeTodo} 
                completedTodo={completedTodo} 
              />
            ))}
        </div>
          
        <div className="todo-form">
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
};

export default App

// terminei o grosso às 4:40am 25/04/24 Pq o doente do meu 
// vizinho não calava a boca e eu não consegui dormir, alegria 
// pela conquista e odio pelo sequelado do meu vizinho.















// <div className="todo">
//   <div className="content">
//     <p>{todo.text}</p> {/* Isso serve para acessar a propriedade 'text:' que os 'todos' possuem */}
//     <p className='category'>[{todo.category}]</p> {/* Isso serve para acessar a propriedade 'category:' que os 'todos' possuem */}
//   </div> {/* Impremir textos desta maneira '{?,?}' se chama interpolação*/}
//   <div className="buttons">
//     <button>Completar</button>
//     <button>X</button>
//   </div>
// </div> 

{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}