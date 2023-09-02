import { Component} from 'react'
import './header.css'


class Header extends Component{
    
  render(){
    const { done, important } = this.props
    return(
      <div className='header'>
      <h1 >Todo list </h1>
        <span className='mark-up'>
          <span className='header-done'>Done:{done}</span>
          <span className='header-done'>Important:{important}</span>
         
        </span>
      
      </div>
      )
    }
}
export default Header;




















/*const Header = () => {
    return (
      <div className='header'>
        <h1 >Todo list </h1>
          <span className='mark-up'>
            <p>Done:12  Important:34</p>
          
          </span>
        
         
        
      </div>
    )

  
  }
   export default Header;*/