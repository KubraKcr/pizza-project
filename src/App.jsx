import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/HomePage/homeP.css";
import Success from "./components/Success/Success.jsx";
import "./components/Success/success.css";
import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import OrderForm from "./components/OrderForm/OrderForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [toppings, setToppings] = useState([]);
  const [calculatedTotal, setCalculatedTotal] = useState(0);
  const [crust, setCrust] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/siparis"
            element={
              <OrderForm
                name={name}
                setName={setName}
                size={size}
                setSize={setSize}
                toppings={toppings}
                setToppings={setToppings}
                calculatedTotal={calculatedTotal}
                setCalculatedTotal={setCalculatedTotal}
                crust={crust}
                setCrust={setCrust}
              />
            }
          />
          <Route
            path="/siparis-onay"
            element={
              <Success
                name={name}
                size={size}
                toppings={toppings}
                calculatedTotal={calculatedTotal}
                crust={crust}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
}

export default App;
