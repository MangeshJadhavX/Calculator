import { useState } from 'react';
import './App.css';
import { Button } from './Components/Buttons/Button';
import { Getinput } from './Components/GetInput/Getinput';

function App() {
 
  const [calVal,setCalVal] = useState('')
  
  let getBtnValue = (buttonText)=>{
    console.log(buttonText);
    if (buttonText == 'C') {
      setCalVal("");
    } 
    else if (buttonText === "=") {
      let result = eval(calVal);
      setCalVal(result);
    }
    else{
      const setNewVal = calVal + buttonText;
      setCalVal(setNewVal);
    }
  }
   
  return (
    <div className="App">
      <div className='Container'>
     <Getinput displayValue = {calVal}/>
     <Button onClickVal ={getBtnValue}/>
      </div>

    </div>
  );
}

export default App;
