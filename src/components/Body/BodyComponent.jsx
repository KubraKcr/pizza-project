import React from "react";
import "./bodyComponent.css";
import { useNavigate } from "react-router-dom";
import CategoryBar from "../CategoryBar/CategoryBar"

import "../ProductCard/productCard.css";
import ProductCard from "../ProductCard/ProductCard";

const menuCategories = [
  { icon: "/images/iteration-2-images/icons/1.svg", label: "Ramen" },
  { icon: "/images/iteration-2-images/icons/2.svg", label: "Pizza" },
  { icon: "/images/iteration-2-images/icons/3.svg", label: "Burger" },
  { icon: "/images/iteration-2-images/icons/4.svg", label: "French fries" },
  { icon: "/images/iteration-2-images/icons/5.svg", label: "Fast food" },
  { icon: "/images/iteration-2-images/icons/6.svg", label: "Soft drinks" },
];

const products = [
  {
    image: "images/iteration-2-images/pictures/food-1.png",
    name: "Terminal Pizza",
    rating: "4.9",
    reviews: "200",
    price: "60",
  },
  {
    image: "images/iteration-2-images/pictures/food-2.png",
    name: "Position Absolute Acı Pizza",
    rating: "4.9",
    reviews: "928",
    price: "85",
  },
  {
    image: "images/iteration-2-images/pictures/food-3.png",
    name: "useEffect Tavuklu Burger",
    rating: "4.9",
    reviews: "462",
    price: "75",
  },
];

function BodyComponent() {
  const navigate = useNavigate();
 
  return (
    
    <div className="body-all">
       <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className="body-inner">
        <div className="body-inner-ls">
          <h1>
            Özel <br />
            Lezzetus
          </h1>
          <p>Position:Absolute Acı Burger</p>
          <button id="btn-absolute" onClick={() => navigate("/siparis")}>
            SİPARİŞ VER
          </button>
        </div>

        <div className="body-inner-rs">
          <div className="body-inner-rs-top">
            <h3>
              Hackathlon <br /> Burger Menü
            </h3>
            <button id="btn-absolute" onClick={() => navigate("/siparis")}>
              SİPARİŞ VER
            </button>
          </div>

          <div className="body-inner-rs-bottom">
            <h3>
              <span className="red">Çoooook</span> hızlı <br />
              npm gibi kurye
            </h3>
            <button id="btn-absolute" onClick={() => navigate("/siparis")}>
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </div>

      <p className="packaging-menus">en çok paketlenen menüler</p>
      <p className="menu-subtitle">Acıktıran Kodlara Doyuran Lezzetler</p>
      <CategoryBar categories={menuCategories} buttonStyle={true} />

      <div className="down-cards">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            rating={product.rating}
            reviews={product.reviews}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default BodyComponent;