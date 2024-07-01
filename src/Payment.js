import React, { useEffect, useState } from "react";
import "./payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "./axios";
function Payment() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate the special stripe secret which allow us to charge a user
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // stripe wants the total in currency subunits. 1₹ = 100 p
        url: "/payments/create?total=${getBasketTotal(basket) *100}",
        // url: `/payments/create`,
        // data: getBasketTotal(basket) * 100,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log("the magic is>>>", clientSecret);

  const handleSubmit = (e) => {};
  // stripe stuff is here...
  // event.preventDefault();
  setProcessing(true);
  const payload = stripe
    .confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    })
    .then(({ paymentIntent }) => {
      //paymentIntent = payment confirmtion.
      setSucceeded(true);
      setError(null);
      setProcessing(false);
      navigate("../orders", { replace: true });
    });

const handleChange = (e) => {
  // listen the changes in the CardElement
  // display any error as the user types their details
  setDisabled(e.empty);
  setError(e.error ? e.error.message : "");

return (
  <div className="payment">
    <div className="payment__container">
      <h1>
        Checkout(<Link to="/Checkout">{basket?.length} Items</Link>)
      </h1>
      {/* Delivery address */}
      <div className="payment__section">
        <div className="payment__title">
          <h3>Delivery Address</h3>
        </div>
        <div className="payment__address">
          <p>{user?.email}</p>
          <p>911 localhost lane</p>
          <p>Vice City, Miami</p>
        </div>
      </div>

      {/* prodct review */}
      <div className="payment__section">
        <div className="payment__title">
          <h3>Review items and delivery</h3>
        </div>
        <div className="payment__item">
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      {/* Payment method */}
      <div className="payment__section">
        <div className="payment__title">
          <h3>Payment methods </h3>
        </div>
        <div className="payment__details">
          {/* UPI magic will go here  */}
          <from onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className="payment__priceCotainer">
              <CurrencyFormat
                renderText={(value) => <h3>Order Total: {value}</h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
              />
              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p> Processing</p> : "Buy Now"}</span>
              </button>
            </div>
            {/* Error */}
            {error && <div>{error}</div>}
          </from>
        </div>
      </div>
    </div>
  </div>
);
};
}

export default Payment;
