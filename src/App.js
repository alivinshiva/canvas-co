// import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// stripe public key
const promise = loadStripe(
  "pk_test_51OPACDSHpmMARvzoZ7aLo0pfYEXzHqUnzmvf7KchqocklWBLbXMoVG5p4xtbwR9hDfXJnqQberevUINJeHkeUDeS008GVC2wMW"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run onece when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
        // the user is logged out
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        {/* <Home /> */}
        <Routes>
          <Route
            path="/Login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/Checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          {/* <Route path="/Checkout" element={}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
