// src/components/GallerySection.jsx
import React from "react";

const GallerySection = ( {t} ) => (
  <section id="gallery" className="coming_soon_area pt-20 pb-70">
    <div className="container text-center">
      <h1>Gallery</h1>
    </div>
    <img
      src="/assets/images/gallery.png"
      alt="Gallery"
      className="pt-50"
      style={{ width: "100%" }}
    />
    <div className="container text-center">
      <br /> <br />
      <h4>{t("ayahArabic")}
      </h4>
      <br /><br />
      <h4>
      {t("arRumMeaning")}
      </h4>
      <br /><br />
      <h3>{t("ayahInformation")}</h3>
      <img
        src="/assets/images/section-divider.png"
        alt="divider"
        className="pt-50"
      />
    </div>
  </section>
);

export default GallerySection;
