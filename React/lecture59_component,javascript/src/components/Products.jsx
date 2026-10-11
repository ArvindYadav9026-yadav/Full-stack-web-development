
import { Product } from "./Product";

function Products({ products }) {
  return (
    <div style={{backgroundColor:"white", color:"black"}}>
      {products.map(({ title, price }, i) => (
        <Product
          key={i}
          title={title}
          price={price}
        />
      ))}
    </div>
  );
}

export default Products;