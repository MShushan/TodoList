import TodoListItem from './TodoListItem'


const TodoList = () => {

  const items = [
    {text: "Learn Js", important:true},
    {text: "Drink Coffee", important:false},
    {text: "Learn React", important:true},
    {text: "Learn TypeScript", important:false},
    {text: "Learn Node", important:false},
  ]
    return (
      <ul>
        {
           items.map(({ text, important}) => {
             return (<TodoListItem text = {text} important = {important}/>)
           } )
        }

      </ul>
      
    );
    
  }
   export default TodoList;