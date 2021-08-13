import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </h1>
  );
}

export default ProductFeed;
