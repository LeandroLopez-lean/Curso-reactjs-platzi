import React from 'react';
import {TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodeItem';

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "tomar curso react", completed: false },
  { text: "llorar con la llorona", completed: true },
  { text: "hacer lo que quiera", completed: false },
  { text: "useState", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue);
    }
  );

  console.log("El usuarios busca " + searchValue);
  return (
    <React.Fragment>

      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}



export default App;
