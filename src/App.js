
import { useState } from 'react';
import './App.css';

import { useEffect } from 'react';
function App() {
  
 const [finalData,setFinalData]=useState({Gender:"male","Mode_of_tranport":"Bus","Cricket":false,"Football":false,"Badminton":false})
  function changeHandler(event){
    // console.log(event.target.type)
      setFinalData({...finalData,
        [event.target.name]:event.target.type==="checkbox"?event.target.checked: event.target.value
      
      })
  }
  function submitHandler(event){
    event.preventDefault();
    console.log(finalData)
  }
  
  return (
    <div className="App">
    <form onSubmit={submitHandler}>
      <label htmlFor='firstname'>First Name</label>
     <input required type='text' id='firstname' name='First-Name' onChange={changeHandler}></input>
     <br></br>
     <label htmlFor='lastname'>Last Name</label>
     <input required type='text' id='lastname' name='Last-Name' onChange={changeHandler}></input>
    <br></br>
    <label>Gender</label>
    <input type='radio' name='Gender' id='male' onChange={changeHandler} value="male" checked={finalData.Gender==="male"} ></input>
    <label htmlFor='male'>Male</label>
    <input type='radio' name='Gender' id='female' onChange={changeHandler} value="female" checked={finalData.Gender==="female"}></input>
    <label htmlFor='female'>Female</label>

    <br></br>
    <select name='Mode_of_tranport' onChange={changeHandler} value={finalData.Mode_of_tranport} >
      <option>Car</option>
      <option>Bus</option>
      <option>Bike</option>
    </select>
    <br></br>
  <label>Hobbies:</label>
    <input type="checkbox" id='cricket' onChange={changeHandler} name='Cricket' checked={finalData.Cricket===true}></input>
    <label htmlFor='cricket'>cricket</label>

    <input type="checkbox" id='football' onChange={changeHandler} name='Football' checked={finalData.Football===true}></input>
    <label htmlFor='football'>football</label>

    <input type="checkbox" id='badminton' onChange={changeHandler} name='Badminton' checked={finalData.Badminton===true}></input>
    <label htmlFor='badminton'>badminton</label>

    <br></br>
    <br></br>
    <button>submit</button>
    </form>
    
    </div>
  );
}

export default App;
