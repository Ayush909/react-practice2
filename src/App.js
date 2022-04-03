import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const usersArray = []

const App = () => {

  const [usersArr, setUsersArr] =  useState(usersArray);

  const newUserHandler = (newUser)=>{
    console.log(newUser)
    setUsersArr(prevState =>{
      return [newUser, ...prevState];
    })
  }

  return (
    <>
      <AddUser newUser={newUserHandler}/>
      <UsersList users={usersArr}/>
    </>
  );
}

export default App;
