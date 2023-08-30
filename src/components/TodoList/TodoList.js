
import TodoListItem from './TodoListItem'


const TodoList = () => {

  const items = [
    { text: "Learn Js", important: true, id: 1 },
    { text: "Drink Coffee", important: false, id: 2 },
    { text: "Learn React", important: true, id: 3} ,
    { text: "Learn TypeScript", important: false, id: 4 },
    { text: "Learn Node", important: true, id: 5 }
  ]
    return (
     

     
      
        <ul>
           {
            items.map(({text, important, id}) => {
             return(<TodoListItem text = {text} important={important} key={id}/>) 

            })
           }
        </ul>
    
    
      
    );
    
  }
   export default TodoList;