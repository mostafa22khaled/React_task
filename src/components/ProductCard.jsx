function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "16px",
        borderRadius: "10px",
        marginBottom: "10px",
      }}
    >
      <img src={product.image} alt={product.title} width="100" />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <p>{product.category}</p>
    </div>
  );
}

export default ProductCard;
