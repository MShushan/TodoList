import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import Search from './components/Search'
import TodoList from './components/TodoList'
import Input from './components/Input';



  const App = () =>{
    
  
  return(
    <div>
     <Header/>
     <Search/>
     <TodoList/>
     <Input/>
     
    
    </div>
  )
 }

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<App/>)
