import {TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodeItem';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter  />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}



export default App;
