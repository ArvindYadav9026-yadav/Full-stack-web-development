import { useState } from "react";

function ControlledComponent() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [form, setForm] = useState({ name: "nishant", email: "nishant@gmail.com", password: "" });

  function signup(e) {
    e.preventDefault();
    console.log(form);
  }

  function handleInput(e) {
    // let value = e.target.value;
    // let name = e.target.name;

    const { value, name } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  console.log("re rendered");

  return (
    <div>
      <h1>Form in React (Controlled Component) - {form.name}</h1>
      <form action="" onSubmit={signup}>
        <label htmlFor="name">Name : </label>
        <input value={form.name} type="text" name="name" id="name" onInput={handleInput} />
        <br />
        <label htmlFor="name">Email : </label>
        <input value={form.email} type="text" name="email" id="email" onInput={handleInput} />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="text"
          name="password"
          id="password"
          onInput={handleInput}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ControlledComponent;