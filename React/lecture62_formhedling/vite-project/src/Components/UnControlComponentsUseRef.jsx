import { useEffect } from "react";
import { useRef } from "react";

function UnControlledComponentUseRef() {
  const nameRef = useRef(null);

  function signup(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
    // console.log();
   let nameTag1 = nameRef.current
   let nameTag2 = document.querySelector("#name2")
   console.log(nameTag1.value , nameTag2.value);
   console.log(nameTag1 ===  nameTag2);
  }

  console.log("re rendered");

  return (
    <div>
      <h1>Form in React (Uncontrolled Component - useRef)</h1>
      <form action="" onSubmit={signup}>
        <label  htmlFor="name2">
          Name :{" "}
        </label>
        <input ref={nameRef} type="text" name="name" id="name2" />
        <br />
        <label htmlFor="name">Email : </label>
        <input type="text" name="email" id="email" />
        <br />
        <label htmlFor="password">Password : </label>
        <input type="text" name="password" id="password" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UnControlledComponentUseRef;