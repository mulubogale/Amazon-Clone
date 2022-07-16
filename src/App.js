import React from "react";
import "./App.css";
import Header from"./Header";
import Home from "./Home";
import Checkout from"./Checkout"
import { useEffect } from "react";
import { useStateValue } from "./Stateprovider";
import{auth}from"./firebase"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from"./Login"
import Orders from "./Orders";
import Payment from "./Payment";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const promise = loadStripe(
  'pk_test_51LIxqKKzf4Iq4mH0jWSl3VLHnl19VuOaearHEjddyKcDYPHu7oUuBij79wTGhwLGU8FLN93ONpikPvU5MznV3Bjp00BAMfCLG8'
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
      <Routes>
      <Route path="/Orders" element={<Orders />}/>  
      <Route path="/payment" element= {<Elements stripe={promise}><Payment /> </Elements>}>
       </Route>
      <Route path="/Login"element={<Login/>}/>
        <Route path="/Checkout"element={<Checkout/>}/>
        <Route path ="/" element={<Home/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
