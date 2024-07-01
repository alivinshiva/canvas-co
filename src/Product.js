import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
// import CatPoster from "./Images/cat.jpg";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item/ product to data Layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        {/* Title is comming from props that we created in home.js / no hard coding */}
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          {/*Price is comming from props that we created in home.js / no hard coding */}
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {/* rating of product using array */}
          {Array(rating)
            .fill()
            .map((_i, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="1st product" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
