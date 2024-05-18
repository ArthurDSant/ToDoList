import React from 'react'
import { BsSearch } from "react-icons/bs";

const Search = ({search, setSearch}) => {
  return (
    <div className='search'>
      <BsSearch />
      <input 
        type="text"
        placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
    </div>
  )
}

export default Search
