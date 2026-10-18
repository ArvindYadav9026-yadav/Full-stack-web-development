import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios";
function Timer(){

  useEffect(()=>{
  //  const id= setInterval(()=>{
  //     console.log("timer")
  //   },2000)

    return ()=>{
      console.log("clean up")
      console.log(id);
    }

  },[])
  return (
    <div>
      <h2>Timer Component</h2>
    </div>
  )
}

 function App() {
  const [productCount,setProductCount] =useState(0);
  const[product,setProduct]=useState([]);
  const[name,setName]=useState("");
  const [showTimer,setshowTimer]=useState("")
   const [isLoading,setIsLoading]=useState(true)


  
//  console.log("!st")


 useEffect(()=>{
  //  fetch("https://dummyjson.com/products?limit=0")
  // .then((res)=>res.json())
  // .then((data)=>{
  //   console.log(data);
  //   // setProductCount(data.total);
  //   setProduct(data.products)
  // });

  async function getproduct() {
  //  let response=await   fetch("https://dummyjson.com/products?limit=0")
  // let data=await response.json();
  let {data} = await axios.get("https://dummyjson.com/products?limit=0")
  // console.log(data)
  //  console.log(data);
    setProductCount(data.total);
    setProduct(data.products)
    setIsLoading(false)

    
  }
 
getproduct();

  // console.log("2nd")

  return function(){
    console.log("cleanup function");
  }

 },[name]);

//  console.log("3rd")

// if(isLoading){
//   return <div class="loader"></div>
// }
  return (
    <div>
     {showTimer && <Timer/>} 
      <button onClick={()=>setshowTimer((prev)=> !prev)}>Toggle Timer Component</button>
      <br />
      Product-{productCount}
      <input type="text" onInput={(e) =>setName(e.target.value)}/>
      {/* <div class="loader"></div> */}
      {/* <p>{name }</p> */}
      <ul>
       {isLoading ? (
        <div className="loader"></div>
       ):(
        product.map((p)=> <li key={p.id}>{p.title}</li>)
       )}
        
          
        
      
      </ul>
    </div>
  );
}
export default App