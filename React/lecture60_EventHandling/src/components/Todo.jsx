import React, { useState } from 'react'

const Todo = () => {
    // let value="";
    let[value,Setvalue] = useState("")

    let [todos,setTodos]=useState("todo1","todo2","todos3")

    // let todos=["todo1","todo2","todos3"]//
    function printValue(e){
        setValue(e.target.value)

    }
    function addTodo(e){
        e.preventDefault();
        // todos.push(value);//

        if(!value.trim()){
            return;
        }
        setTodos((prev)=>
             [...prev,value])
            Setvalue("")

   

            
        

    }


  return (
    <div>
       <h1>Todo </h1> 
       <form onSubmit={addTodo}>
        <input Value={value} type="text" onChange={(e)=>setvalue(e.target.value)} />
        <button>Add Todo</button>
       </form>

       <ul>{
        todos.map((todo) => <li>{todo}</li>)

       }
       
       </ul>
        </div>
  )
}

export default Todo
