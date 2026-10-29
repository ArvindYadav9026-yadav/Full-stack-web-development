import React, { useCallback, useMemo, useState } from 'react'
import ChildComponent from './Components/ChildComponent';

function calculateTotalSum(){
  let sum=0;
  for(let i=0; i<100000000; i++){
    sum+=i;
  }
  return sum;
}

function App() {
  const [count,setCount]=useState(0);
 const value=useMemo(()=>{
  return calculateTotalSum();
 },[])

//  function printhello(){
//   console.log("hii hello ji")
//  }

//  function printhello2(){
//   console.log("hii hello ji")
//  }

//  console.log(object)


const memoizedPrintHello =useCallback(()=>{
  console.log("hii hello ji");
 

},[])
 let obj={
  count:53,
  printhello:memoizedPrintHello,
 }
  return (
    <div>
      <p>value:{count}</p>
      <button onClick={()=>setCount((p)=>p+1)}>Click</button>
      <p>Total sum :{value}</p>
      <ChildComponent {...obj}/>
    </div>
  )
}

export default App
