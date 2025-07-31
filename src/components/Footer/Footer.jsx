import React from 'react';
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-inner">

        <div className="footer-logo">
          <img src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler Logo" />
     

        <div className="footer-contact">
          <div className="footer-item">
            <img src="images\iteration-2-images\icons\placeholder.png" alt="Location" />
            <p>341 Londonderry Road, Istanbul Türkiye</p>
          </div>

          <div className="footer-item">
            <img src="images\iteration-2-images\icons\email.png" alt="Mail" />
            <p>aciktim@teknolojikyemekler.com</p>
          </div>

          <div className="footer-item">
            <img src="images\iteration-2-images\icons\phone.png" alt="Phone" />
            <p>+90 216 123 45 67</p>
          </div>
        </div>
   </div>
        <div className="footer-menu">
          <h4>Sıccacık Menüler</h4>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>Bayce Console Frosty</li>
            <li>Taster Çeşitli Mix Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        <div className="footer-instagram">
          <h4>Instagram</h4>
          {/* Buraya 6 tane küçük görsel */}
          <div className="insta-gallery">
            <img src="images\iteration-2-images\footer\insta\li-0.png" alt="food" />
            <img src="images\iteration-2-images\footer\insta\li-1.png" alt="food" />
            <img src="images\iteration-2-images\footer\insta\li-2.png" alt="food" />
            <img src="images\iteration-2-images\footer\insta\li-3.png" alt="food" />
            <img src="images\iteration-2-images\footer\insta\li-4.png" alt="food" />
            <img src="images\iteration-2-images\footer\insta\li-5.png" alt="food" />
          </div>
        </div>

      </div>
          <div className="footer-bottom">
      <p>© 2025 Teknolojik Yemekler</p>
      <div className="social-icons">
       
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="images/iteration-2-images/icons/x.svg"
            alt="Twitter"
            width="17"
            height="17"
          />
        </a>
      </div>
    </div>
    </div>
  );
}

export default Footer;
