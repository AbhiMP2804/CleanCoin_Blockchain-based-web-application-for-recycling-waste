const functions = require("firebase-functions");

exports.createStripeCheckout = functions.https.onCall(async(data , context)=>{
const stripe = require('stripe')(functions.config().stripe.secret);
const { product_name, unit_amount} = data;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: product_name
          },
          unit_amount: unit_amount * 100 // $5.00 must be 500
        },
      },
    ],
    mode: 'payment',
    success_url: 'https://localhost:3000/home' + // todo enter your success url
                 'session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://localhost:3000/contacts',//todo enter your cancel URL
  });
  return session.id;
});
