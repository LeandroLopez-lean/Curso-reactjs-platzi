import React from 'react';
import './search.css'

function TodoSearch({
  searchValue, setSearchValue,
}) {
  return(
      <input 
        placeholder="Que tarea buscas" 
        className='TodoSearch'
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    );
  }

  export {TodoSearch};