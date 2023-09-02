import { Component } from 'react';
import './todo-list.css'
import TodoListItem from './TodoListItem'


class TodoList extends Component {
    
    render(){
        const { items } = this.props;
        return(
            <ul className='todoList'>
           {
            items.map(({text, important, id}) => {
             return(<TodoListItem text = {text} important={important} key={id}/>) 

            })
           }
        </ul>
        )
    }
}
export default TodoList;

/*const TodoList = ( {items}) => {

 
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
   export default TodoList;*/