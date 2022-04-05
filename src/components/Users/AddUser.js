import React,{useState} from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal';

//learning useeffect today

const AddUser  = (props) => {

  const [enteredUsername,setUsername] = useState('');
  const [enteredAge,setAge] = useState('');
  const [error,setError] = useState()

  const addUserHandler = (e) =>{
      e.preventDefault();
      if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
        setError({
          title : 'Invalid Username or Age',
          message : 'Please enter a valid name and age (non-empty values)'
        })
        // console.log('username or age is not valid')
        return;
      }

      if(+enteredAge < 1){
        // console.log('age is not valid')
        setError({
          title : 'Invalid Age',
          message : 'Please enter a valid age (> 0)'
        })
        return;
      }

      // console.log(enteredUsername,enteredAge)
      const newUser = {
        id : Math.random(),
        name : enteredUsername,
        age : enteredAge
      }

      props.newUser(newUser)
      setUsername('');
      setAge('');
  }

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  }
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  }

  const errorModalHandler = () => {
    setError(null);
  }
  return (
      <div>
      {error && <ErrorModal onConfirm={errorModalHandler} title={error.title} message={error.message}/>} 
      <Card className={classes.input}>
        
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' value={enteredUsername} onChange={usernameChangeHandler}/>        
            <label htmlFor="age">Age (in numbers)</label>
            <input type="number" id='age' value={enteredAge} onChange={ageChangeHandler}/>  
            <Button type="submit">Add User</Button>      
        </form>
    </Card>
    </div>
  )
}

export default AddUser