function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        height: "100%",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "120px",
          height: "120px",
          objectFit: "contain",
        }}
      />

      <h3
        style={{
          fontSize: "18px",
          minHeight: "60px",
        }}
      >
        {product.title}
      </h3>

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
