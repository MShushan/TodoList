import './todo-list.css'
import TodoListItem from './TodoListItem'


const TodoList = ( {items}) => {

 
    return (
     

     
      
        <ul className='todoList'>
           {
            items.map(({text, important, id}) => {
             return(<TodoListItem text = {text} important={important} key={id}/>) 

            })
           }
        </ul>
    
    
      
    );
    
  }
   export default TodoList;