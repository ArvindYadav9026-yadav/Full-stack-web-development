
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Product } from "./components/Product";
import Products from "./components/Products";

const products = [
  {
    title: "Nike ka jutta",
    price: 1099
  },
  {
    title: "Puma ka jutta",
    price: 8788
  },
  {
    title: "Goldstar",
    price: 999
  }
];

const user ={
    name:"nishant",
    isLoggedIn:true,
};

function App() {
  return (
    <div>
      <Navbar user={user} />
      <Product/>

      <Products products={products} />

      <h1>Hii</h1>
      <Footer/>
    </div>
  );
}

export default App;