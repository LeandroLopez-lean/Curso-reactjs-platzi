import {TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodeItem';
import React from 'react';
import './App.css';

const defaultTodos = [
  { text: "cortar cebolla", completed: true },
  { text: "tomar curso react", completed: false },
  { text: "llorar con la llorona", completed: false },
  { text: "hacer lo que quiera", completed: false },
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter  />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
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
