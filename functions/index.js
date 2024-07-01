const { onRequest } = require("firebase-functions/v2/https");
const functions = require("firebase-functions");
const logger = require("firebase-functions/logger");

const express = require("express");
const cors = require("cors");
const { config } = require("firebase-functions/v1");

const stripe = require("stripe")(
  "sk_test_51OPACDSHpmMARvzo1aqrMqIf22TFEb1UKfypT1kaB7y240cjLLenQ04OkJAMivzX9sChXjRvCIthKKHra1iL8JHk00j4aVNJ8a"
);

//API

// App config
const app = express();

// 👇️ configure CORS
app.use(cors());

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

const PORT = 3456;

app.listen(PORT, function () {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
});
// const app = express();

// ADD THIS
// var cors = require('cors');
// app.use(cors());

// Middlewares
// app.use(cors({ origin: 'http://localhost:3001', optionsSuccessStatus: 200, credentials: true }));
// app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello! world"));
res.header( "Access-Control-Allow-Origin" );

// app.get('/alivin',(request, response)=>response.status(200).send ('Hello! alivin'))
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment got >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // sub units of the currency
    currency: "inr",
  });
  console.log(paymentIntent); 
  // ok - created.
  response.status(201).send({
    clientSectet: paymentIntent.client_sectet,
  });
});




// Listen command
exports.api = functions.https.onRequest(app);
// endpoint.
// http://127.0.0.1:5001/canvas-n-co/us-central1/api
