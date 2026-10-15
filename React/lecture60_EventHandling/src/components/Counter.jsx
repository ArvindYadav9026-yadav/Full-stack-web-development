import React from 'react'
import { useState } from 'react';

function Counter({printCountValue}) {
    // let count = 0;
//    const result = useState(0)
// //    console.log(result)
// const value= result[0];
// const setValue =result[1];


let  [value,setValue]=useState(0)
 let count = 0;


    function increment(){
        // count++;
        // setValue(value+1)
        // setValue(value+1)
        // setValue(value+1)
        // setValue(++value)
        // setValue(++value)
        // setValue(++value)
        // setValue(value++)

        setValue((prev)=>prev+1);
        // setValue((prev)=>prev+1)
        // setValue((prev)=>prev+1)

        
    }
    function decrement(){
        // count--;
        setValue(value--)
    }
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={increment}>+ </button>
      <p>{value}</p>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter
