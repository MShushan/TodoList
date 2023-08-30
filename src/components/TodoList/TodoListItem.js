import './todo-list-item.css'
import { FaTrash, FaInfo, FaCheck } from "react-icons/fa6";

const TodoListItem = ( { text, important } ) => {

  const style = {
    color: important ? "red": "black"
  }
    return (
      <div>
       <li className='list-item'style = {style}>{text}
       <span className='item-btns'>
        <button className='item-btn-done'> <FaCheck/></button>
        <button className='item-btn-important'><FaInfo/></button>
        <button className='item-btn-remove'><FaTrash/></button>
       
        
        
       </span>
       </li>
      </div>
     
    );
  }
   export default TodoListItem;