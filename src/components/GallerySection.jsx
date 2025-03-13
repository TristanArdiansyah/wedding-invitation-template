// src/components/GallerySection.jsx
import React from "react";

const GallerySection = () => (
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
      <br />
      <h4>
        وَمِنْ ءَايَـٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ
        أَزْوَٰجًۭا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم
        مَّوَدَّةًۭ وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَـَٔايَـٰتٍۢ
        لِّقَوْمٍۢ يَتَفَكَّرُونَ
      </h4>
      <br />
      <h4>
        And one of His signs is that He created for you spouses from among
        yourselves so that you may find comfort in them. And He has placed
        between you compassion and mercy. Surely in this are signs for people
        who reflect.
      </h4>
      <br />
      <h3>- AR-RUM : 21 -</h3>
      <img
        src="/assets/images/section-divider.png"
        alt="divider"
        className="pt-50"
      />
    </div>
  </section>
);

export default GallerySection;
