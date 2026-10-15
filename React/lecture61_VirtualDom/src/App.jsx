

import { useState } from "react";
import "./App.css";
import Key from "./Components/Key";

function Counter() {
  const [count, setCount] = useState(0);

  // function increment(){
  //   setCount((prev) => prev + 1)
  // }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
}

function App() {
  const [changeTag, setChangeTag] = useState(true);

  return (
    <div>
      {/* <h2>Hii</h2>
      <h3>Hello</h3> */}
      {/* {changeTag ? (
        <div>
          <Counter />
        </div>
      ) : (
        <section>
          <Counter />
        </section>
      )} */}
      {/* <div className={changeTag ? "active" : "inactive"}>
          <Counter />
        </div> */}

      {/* {changeTag ? <Counter /> : <Counter /> }

      <button onClick={() => setChangeTag((prev) => !prev)}>Change Tag</button> */}
      <Key/>
    </div>
  );
}

export default App;