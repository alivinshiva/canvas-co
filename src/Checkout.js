import React from "react";
import "./Checkout.css";
// import AdHeader from "./Images/adHeader.png";
import AdHeader2 from "./Images/adHeader2.png";
// import AdHeader3 from "./Images/adHeader3.png";
// import AdHeader5 from "./Images/adHeader5.png";
// import Checkout from "./Checkout";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user}, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={AdHeader2} alt="Ad Header" />

        <div>
          <h3>Hello, {!user ? "Guest" : user?.email }{""}</h3>
          <h2 className="checkout__title">
            Your shopping Basket
            {/* this is dynamic cart item  */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
        {/* <h2>Subtotal will go here</h2> */}
      </div>
    </div>
  );
}

export default Checkout;
