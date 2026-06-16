function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
      }}
    >
      <img src={product.image} alt={product.title} width="120" height="120" />

      <h3>{product.title}</h3>

      <p>
        <strong>Price:</strong> ${product.price}
      </p>

      <p>
        <strong>Category:</strong> {product.category}
      </p>
    </div>
  );
}

export default ProductCard;
