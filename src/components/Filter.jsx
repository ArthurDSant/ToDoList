import React from 'react'
import { BsFilter } from "react-icons/bs";

const Filter = ({setFilter}) => {
  return (
    <div className='filter'>
        <BsFilter />
        <select value={Filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">Filters</option>
          <option value="All">All</option>
          <option value="Completed">Compline</option>
          <option value="inComplete">Incomplete</option>
        </select>
            {/* 
            <div>
                <p>Ordem alfabética</p>
                <button onClick={() => setSort('Asc')}>Asc</button>
                <button onClick={() => setSort('Des')}>Des</button>
            </div> 
            */}
    </div>
  )
}

export default Filter
