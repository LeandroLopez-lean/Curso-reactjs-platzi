import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon 
        completed={props.completed}

      />
      {/* <span 
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      > 
        v
      </span>*/}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon />
      {/* <span className="Icon Icon-delete" onClick={props.onDelete}>
         
      </span>*/}
    </li>
  );
}

export { TodoItem };