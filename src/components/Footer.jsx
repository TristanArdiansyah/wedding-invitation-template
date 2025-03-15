// src/components/Footer.jsx
import React from "react";

const Footer = ({ logo, coupleName, appConfig }) => (
  <footer id="footer" className="footer_area"
  style={{
    backgroundImage: "url('/assets/images/flowers-footer.png')",
    backgroundSize: "cover",
    
  }}
  
  >
    <div className="text-center d-flex flex-column justify-content-center align-items-center"
    style={{height: "40vh", background: "linear-gradient(#fcf4ec, black)", opacity: .9}}
    >
      <div className="footer_widget text-center">
        <div className="footer_title">
          <h3 className="title text-white">{coupleName}</h3>
        </div>
      </div>
    <img src="/assets/images/section-divider-white.svg" alt="divider" className="pt-40" style={{width: "60vw"}} />
    <br /><br />
    <p>Made with ♥ <br /> from Tristan Ardiansyah & Bioma AI</p>
    </div>
  </footer>
);

export default Footer;
