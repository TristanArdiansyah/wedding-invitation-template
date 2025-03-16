// src/components/GallerySection.jsx
import React from "react";
import GiftsInformation from "@src/components/GiftsInformation";

const GiftsSection = ({ t }) => (
    <section id="gallery" className="coming_soon_area pt-20 pb-70">
        <div className="container text-center">
            <h1>{t("giftsSection")}</h1>
            <GiftsInformation t={t} />
            <img
                src="/assets/images/section-divider.png"
                alt="divider"
                className="pt-50"
            />
        </div>
    </section>
);

export default GiftsSection;
