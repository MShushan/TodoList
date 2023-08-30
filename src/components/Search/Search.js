import './search.css'
import Button from "../Button/Button";
const Search = () => {
    return (
     <div>
       <input className = 'searchInput' type='text' placeholder='type text for search'/>
       <Button text = "Search" color = "black"/>
       </div>
    )
    
  }
   export default Search;