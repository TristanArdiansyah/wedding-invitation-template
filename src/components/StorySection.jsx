// src/components/StorySection.jsx
import React from "react";

const StorySection = ({ t }) => (
  <section id="story" className="coming_soon_area pt-20 pb-70">
    <div className="coming_soon_shape_1" style={{ zIndex: -1 }}>
      <img src="/assets/images/shape-1.png" alt="shape" />
    </div>
    <div className="container text-center">
      <h1 className="mb-40">{t("storyHeading")}</h1>
      <div className="row align-items-center">
      <div className="col-lg-6">
          <div
            className="card mb-20"
            style={{
              height: "32vh",
              borderRadius: 30,
            }}
          >
            <div className="card-body d-flex">
              <h4 className="align-self-center">
              {t("story2")}
              </h4>
            </div>
          </div>
          <div
            className="card text-center"
            style={{
              height: "50vh",
              backgroundImage:
                "url('/assets/images/story-2.jpeg')",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: 30,
            }}
          ></div>
          <br />
        </div>
        <div className="col-lg-6">
          <div
            className="card text-center"
            style={{
              height: "50vh",
              backgroundImage:
                "url('/assets/images/story-1.jpeg')",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: 30,
            }}
          ></div>
          <div
            className="card mt-20"
            style={{
              height: "34vh",
              borderRadius: 30,
            }}
          >
            <div className="card-body d-flex">
              <h4 className="align-self-center">
                {t("story1")}
              </h4>
            </div>
          </div>
        </div>

      </div>
      <img
        src="/assets/images/section-divider.png"
        alt="divider"
        className="pt-50"
      />
      <div className="coming_soon_shape_2" style={{ zIndex: -1 }}>
        <img src="/assets/images/shape-2.png" alt="shape" />
      </div>
    </div>
  </section>
);

export default StorySection;
