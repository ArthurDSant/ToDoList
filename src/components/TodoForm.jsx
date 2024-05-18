import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState ('');
  const [category, setCategory] = useState ('');

  const handleSubmit = (e) => {
    e.preventDefault();
      if (!value || !category) return; // Caso não tenha (não = !) 'value' ou 'category' retorne a função
      addTodo(value, category);
      setValue(''); // Para retirar o conteúdo dos inputs/campos
      setCategory(''); // Para retirar o conteúdo dos inputs/campos
  }

  return (
    <div className="form">
      <h2>Create task:</h2>
        <form onSubmit={handleSubmit} >
            <input 
              type="text" 
              placeholder='Enter title'
              value={value}
              onChange={(e) => setValue(e.target.value)} />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)} >
                <option value="Categorias"> Categories </option>
                <option value="Pessoal">    Personal   </option>
                <option value="Trabalho">   Work       </option>
                <option value="Contas">     Bank bills </option>
                <option value="Estudos">    Studies    </option>
            </select>

            <button 
              type='submit' 
              className='add'>
                Create task
            </button>
        </form>                   
    </div>
  )
}

export default TodoForm

