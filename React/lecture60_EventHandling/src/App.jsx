import { useState } from "react";
import Counter from "./components/Counter"
import Navbar from "./components/Navbar"
import Todo from "./components/Todo";


function App() {
  const [value,setValue]=useState(0)
  function printCountValue(value){
    // console.log("hii")
    setValue(val)
  }
  

  return (
    <div>
      {/* <Navbar count ={value}/>
      <Counter printCountValue ={printCountValue}/> */}
    {/* <Counter/> */}
    <Todo/>

    
    </div>
  
  )
}
export default App