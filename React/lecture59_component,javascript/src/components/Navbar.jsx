// console.log(5)

function Navbar({user}){
//   console.log(4);
  return (
    <ul>
      <li>Home</li>
      <li>shop</li>
      <li>About</li>
      <li>{user.isLoggedIn? user.name :"Login"}</li>
    </ul>
  );
}
export default Navbar;