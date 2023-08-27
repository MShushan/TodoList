import UserListItem from './UserListItem'


const UserList = () => {

    const users = [
        { name: 'John', age: 25, status: true },
        { name: 'Bob', age: 30, status: false },
        { name: 'Tom', age: 20, status: true },
        { name: 'Sam', age: 28, status: false },
        { name: 'Ann', age: 24, status: true },
      ]
      
    return (
      <ul>
        {
           users.map(({ name, age, status}) => {
             return (<UserListItem name = {name} age = {age} status = {status}/>)
           } )
        }

      </ul>
      
    );
    
  }
   export default UserList;