import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";
import "./Product.css";

const products = [
  {
    id: 1,
    name: "Classic White Shirt",
    img: s1,
    Price: "$24.00",
  },
  {
    id: 2,
    name: "Casual Denim Jacket",
    img: s2,
    Price: "$21.00",
  },
  {
    id: 3,
    name: "Summer Floral Dress",
    img: s3,
    Price: "$30.50",
  },
  {
    id: 4,
    name: "Street Style Hoodie",
    img: s4,
    Price: "$39.00",
  },
  {
    id: 5,
    name: "Slim Fit Trousers",
    img: s5,
    Price: "$27.00",
  },
  {
    id: 6,
    name: "Leather Handbag",
    img: s6,
    Price: "$45.00",
  },
];

function Product({ onAddToCart }) {
  return (
    <section className="product-section">
      <h2>Product List</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              className="product-card-img"
              src={product.img}
              alt={product.name}
            />
            <div className="product-card-body">
              <p className="product-name">{product.name}</p>
              <div className="product-price">
                {product.oldPrice ? (
                  <>
                    <span className="price-old">{product.oldPrice}</span>
                    <span className="price-new">{product.newPrice}</span>
                  </>
                ) : (
                  <span className="price-only">{product.Price}</span>
                )}
              </div>
              <button className="product-btn" onClick={onAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Product;