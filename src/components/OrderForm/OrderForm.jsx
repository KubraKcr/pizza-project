import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./orderForm.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Success from "../Success/Success";
import "../Success/success.css";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";

function OrderForm({
  name,
  setName,
  size,
  setSize,
  toppings,
  setToppings,
  calculatedTotal,
  setCalculatedTotal,
  crust,
  setCrust,
}) {
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(0);

  const navigate = useNavigate();

  const unitPrice = 85.5;
  const toppingPrice = 5;
  const totalToppings = toppings.length;

  useEffect(() => {
    const total = (unitPrice + toppingPrice * totalToppings) * quantity;
    setCalculatedTotal(total);
  }, [unitPrice, toppingPrice, totalToppings, quantity]);

  const isFormValid = name.trim().length >= 3 && size && crust;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      toast.error("Lütfen tüm zorunlu alanları doldurun!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    const order = {
      isim: name,
      boyut: size,
      hamur: crust,
      malzemeler: toppings,
      adet: quantity,
      ozel: note,
      toplamTutar: calculatedTotal.toFixed(2),
    };

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        order
      );
      navigate("/siparis-onay", { state: response.data });
    } catch (error) {
      console.error("❌ Sipariş gönderimi başarısız:", error);
    }
  };

  return (
    <>
      <header className="page-header">
        <img
          src="/images/iteration-1-images/logo.svg"
          alt="Teknolojik Yemekler Logo"
        />
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </head>
      </header>

      <div className="top-image-pizza">
        <img
          src="/images/iteration-2-images/pictures/form-banner.png"
          alt="Form Banner"
        />
      </div>
      <div></div>
      <ul className="breadcrumb">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Anasayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Seçenekler
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/siparis"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Sipariş Oluştur
          </NavLink>
        </li>
      </ul>

      <form onSubmit={handleSubmit} className="order-form">
        <h2>Position Absolute Acı Pizza</h2>

        <div className="rating">
          <span className="price">85.50₺</span>
          <div className="rating-info">
            <span className="rate">4.9</span>
            <span className="review">(200)</span>
          </div>
        </div>

        <p className="pizza-description">
          Frontend Dev olarak hâlâ <code>position:absolute</code> kullanıyorsan
          bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
          çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
          odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
          <br /> genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı
          hamurdan oluşan İtalyan <br />
          kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen{" "}
          <em>pizzetta</em> denir.
        </p>

        <div className="options">
          <div className="options-row1">
            <strong>
              Boyut Seç <span className="required">*</span>
            </strong>
            <div className="options-row1-bottom">
              <label className={`size-button ${size === "S" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="size"
                  value="S"
                  onChange={(e) => setSize(e.target.value)}
                />
                S
              </label>
              <label className={`size-button ${size === "M" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="size"
                  value="M"
                  onChange={(e) => setSize(e.target.value)}
                />{" "}
                M
              </label>
              <label className={`size-button ${size === "L" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="size"
                  value="L"
                  onChange={(e) => setSize(e.target.value)}
                />{" "}
                L
              </label>
            </div>{" "}
          </div>

          <div className="options-row2">
            <label>
              <strong>
                Hamur Seç <span className="required">*</span>
              </strong>
            </label>
            <select
              className="options"
              value={crust}
              onChange={(e) => setCrust(e.target.value)}
              required
            >
              <option value="">&mdash;Hamur Kalınlığı Seçin&mdash;</option>
              <option value="Süpper İnce">İnce Kenar</option>
              <option value="normal">Normal</option>
              <option value="kalın">Kalın Kenar</option>
            </select>
          </div>
        </div>

        <fieldset className="toppings">
          <legend>Ek Malzemeler</legend>
          <p className="toppings-info">
            En Fazla 10 malzeme seçebilirsiniz. 5₺
          </p>

          <div className="toppings-grid">
            {[
              "Pepperoni",
              "Domates",
              "Biber",
              "Sosis",
              "Mısır",
              "Sucuk",
              "Kanada Jambonu",
              "Mozarella Peyniri",
              "Ananas",
              "Tavuk Izgara",
              "Jalepeno",
              "Kabak",
              "Soğan",
              "Sarımsak",
            ].map((item) => (
              <label
                key={item}
                className={`topping-option ${
                  toppings.includes(item) ? "active" : ""
                }`}
              >
                <input
                  type="checkbox"
                  value={item}
                  checked={toppings.includes(item)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      if (toppings.length < 10) {
                        setToppings([...toppings, item]);
                      } else {
                        toast.error("En fazla 10 malzeme seçebilirsiniz.");
                      }
                    } else {
                      setToppings(toppings.filter((t) => t !== item));
                    }
                  }}
                />
                {item}
              </label>
            ))}
          </div>
        </fieldset>

        <label>
          İsim:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            minLength={3}
          />
        </label>

        <label>
          Sipariş Notu
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            className="note-area"
          />
        </label>

        <hr className="horizontal-divider" />

        <div className="bottom-row">
          <div className="quantity-control">
            <button
              type="button"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              –
            </button>
            <span>{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>

          <div className="order-summary">
            <div className="summary-line-container">
              <h4>Sipariş Toplamı</h4>

              <div className="summary-line">
                <span>Seçimler</span>
                <span>
                  {(toppingPrice * totalToppings * quantity).toFixed(2)}₺
                </span>
              </div>
              <div className="summary-line bold red">
                <span>Toplam</span>
                <span>{calculatedTotal.toFixed(2)}₺</span>
              </div>
            </div>
            <button
              type="submit"
              onClick={(e) => {
                if (!isFormValid) {
                  e.preventDefault();
                  toast.error("Lütfen tüm zorunlu alanları doldurun!");
                }
              }}
              className="order-btn"
            >
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default OrderForm;
