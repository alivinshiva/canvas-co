import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

export default function CheckoutProduct({ id, image, price, title, rating }) {
   // Deleting the item from the basket
   const [{basket}, dispatch]= useStateValue();
  const removeFromBasket = () => {
     dispatch({
      type: 'REMOVE_FROM_BASKET',
      id:id,
     })
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}
