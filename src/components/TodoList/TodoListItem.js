import Button from "../Button/Button";

const TodoListItem = ( { text, important}) => {

  const style = {
    color: important ? "red": "black"
  }
    return (
      <div>
       <li style = {style}>{text}</li>
      <Button text = "Delete" color = "black"/>
      <Button text = "important" color = "black"/>
      <Button text = "Add" color = "black"/>

       
       
      </div>
     
    );
    
  }
   export default TodoListItem;