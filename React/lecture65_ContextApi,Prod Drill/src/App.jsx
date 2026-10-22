import { use, useContext } from "react"
import { UserContext } from "./main"
// import Navbar from "./components/Navbar";
// import ChangeTheme from "./components/ChangeTheme";


function GrandChild(){
  // const value = useContext(UserContext);
  const value = use(UserContext)

  console.log(value);
  return (
    <div style={{backgroundColor : "teal" , padding : "20px"}}>
      <h1>GrandChild  - {value}</h1>
    </div>
  )
}

function Child(){
  return (
    <div style={{backgroundColor : "green" , padding : "20px"}}>
      <h1>Child</h1>
      <GrandChild/>
      {/* <Navbar/> */}
    </div>
  )
}

function Parent(){
  return (
    <div style={{backgroundColor : "brown" , padding : "20px"}}>
      <h1>Parent</h1>
      <Child />
    </div>
  )
}


function App() {

  return (
    <div >
       <Navbar />
       <ChangeTheme/>
    </div>
  )
}

export default App