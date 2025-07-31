import React from "react";
import { useLocation } from "react-router-dom";
import "../Success/success.css";

function Success() {
  const location = useLocation();
  const { isim, boyut, malzemeler, toplamTutar, hamur } = location.state;

  return (
    <div className="success-page">
      <header className="page-header">
        <img src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler Logo" />
      </header>

      <h3 className="firsat-lezzet">lezzetin yolda</h3>
      <p>SİPARİŞ ALINDI</p>
      <hr className="hr-divider" />
      <h2 style={{ fontFamily: "Barlow" }}>Position Absolute Acı Pizza </h2>

      <div className="order-summary-box">
  <div className="info-row">
    <span className="label">İsim:</span>
    <span className="value"><strong>{isim}</strong></span>
  </div>
  <div className="info-row">
    <span className="label">Boyut:</span>
    <span className="value"><strong>{boyut}</strong></span>
  </div>
  <div className="info-row">
    <span className="label">Hamur:</span>
    <span className="value"><strong>{hamur}</strong></span>
  </div>
  <div className="info-row">
    <span className="label">Ek Malzemeler:</span>
    <span className="value"><strong>{malzemeler.join(", ")}</strong></span>
  </div>



        <div className="price-box">
          <h3>Sipariş Toplamı</h3>
          <div className="price-line">
            <span>Seçimler:</span>
            <span>{(toplamTutar - 85.5).toFixed(2)}₺</span>
          </div>
          <div className="price-line bold">
            <span>Toplam:</span>
            <span>{toplamTutar}₺</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
