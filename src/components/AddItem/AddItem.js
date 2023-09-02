import { Component } from 'react';
import './addItem.css'

 class AddItem extends Component{

   render(){
    return(
      <div className='additem'>
       <input type='text' placeholder='add Todo list'/>
       <button>Add item</button>
       </div>
    )
   }
    
   
 }
 export default AddItem;














/*const AddItem = () => {
    return (
     <div className='additem'>
       <input type='text' placeholder='add Todo list'/>
       <button>Add item</button>
       </div>
    )
    
  }
   export default AddItem;*/