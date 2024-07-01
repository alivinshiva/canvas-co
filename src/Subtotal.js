import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import {Navigate, useNavigate} from "react-router-dom"

function   Subtotal() {
  const Navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='subtotal' >
      <CurrencyFormat
      renderText={(value) => ( 
        <>
        <p>
            Subtotal ({basket?.length} Items): <strong>{value}</strong>
        </p>
        <small className='subtotal__gift' >
            <input className='gift__checkbox' type='checkbox'/> 
            This order contain a gift
        </small>
        </> 
      )}
      decimalScale={2}
      value={getBasketTotal(basket) }
      displayType={"text"}
      thousandSeparator={true}
      prefix={"₹"}
      />
      <button onClick={e => Navigate('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default   Subtotal 