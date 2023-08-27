const UserListItem = ({name, age,  status}) => {

    const style = {
      color: status ? "red" : "black"
    }
      return (
        <div>
       <li style = {style}>{name}{age}{status}</li>
      
        </div>
       
      );
      
    }
     export default UserListItem;