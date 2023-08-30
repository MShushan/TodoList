import './addItem.css'
import Button from "../Button/Button";
const AddItem = () => {
    return (
     <div>
       <input className='addItemInput' type='text' placeholder='add Todo list'/>
       <Button text = "Add" color = "black"/>
       </div>
    )
    
  }
   export default AddItem;