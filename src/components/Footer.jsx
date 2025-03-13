// src/components/Footer.jsx
import React from "react";

const Footer = ({ logo, coupleName, appConfig }) => (
  <footer id="footer" className="footer_area">
    <div className="footer_shape_1">
      <img src="/assets/images/shape-1.png" alt="shape" />
    </div>
    <div className="container">
      <div className="footer_widget pt-50 pb-10 text-center">
        <div className="footer_logo">
          {logo.footerLogo &&
            (logo.footerLogoType === "mp4" ? (
              <video height="140" autoPlay muted loop>
                <source src={logo.footerLogo} type="video/mp4" />
              </video>
            ) : (
              <img src={logo.footerLogo} alt="Footer Logo" />
            ))}
        </div>
        <div className="footer_title">
          <h3 className="title">{coupleName}</h3>
        </div>
      </div>
    </div>
    {appConfig.showBuiltWithInfo && (
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <small>
          <a
            style={{ color: "grey" }}
            href="https://github.com/wzulfikar/nextjs-wedding-invite"
          >
            Built with&nbsp;
            <object
              style={{ height: "0.5rem" }}
              data="/assets/images/heart.svg"
              type="image/svg+xml"
            ></object>
            &nbsp;using NextJS
          </a>
        </small>
      </div>
    )}
  </footer>
);

export default Footer;
