// src/components/TimeAndDateSection.jsx
import React from "react";
import Countdown from "@src/components/Countdown";

const TimeAndDateSection = ({ venue, t }) => {
  return (
    <section id="time-and-date" className="coming_soon_area pt-20 pb-70">
      <div className="coming_soon_shape_1" style={{ zIndex: -1 }}>
        <img src="/assets/images/shape-1.png" alt="shape" />
      </div>
      <div className="container text-center">
        <h1>We are getting married</h1>
        <br />
        <br />
        <h3>Assalamualaikum Warahmatullahi Wabarakatuh</h3>
        <br />
        <h3>
          With the grace and blessing of Allah SWT, <br />
          We are delighted to invite you to the wedding <br />
          ceremony of Yasmin & Ryan that will be held on:
        </h3>
        <br />
        <h1>April 13th 2025</h1>
        <br />
        <br />
        <Countdown targetDate="2025-04-13T10:00:00" />
        <br />
        <br />
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="card text-center"
                style={{
                  height: "80vh",
                  backgroundImage: "url('/assets/images/bea-cukai.png')",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderRadius: 30,
                }}
              >
                <div className="card-body">
                  {/* Additional content can be added here */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="card text-center"
                style={{
                  height: "80vh",
                  backgroundImage: "url('/assets/images/audit-merauke.png')",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderRadius: 30,
                }}
              >
                <div className="card-body">
                  {/* Additional content can be added here */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="count_content" style={{ zIndex: 1, paddingTop: 20 }}>
          <a href={venue.mapUrl}>
            <img
              style={{ borderRadius: 5, width: "100vw" }}
              src="/assets/images/oval-hotel-map-horizontal.png"
              alt="oval hotel map"
            />
          </a>
          <a
            href={venue.mapUrl}
            style={{
              width: "75vw",
              overflowX: "hidden",
              textOverflow: "ellipsis",
              marginTop: 10,
            }}
          ></a>
          <h4>
            It would give us great honor and happiness if you are willing to
            attend the wedding to give blessings for the bride and groom 💛
          </h4>
        </div>
        <img
          src="/assets/images/section-divider.png"
          alt="divider"
          className="mt-40"
        />
      </div>
      <div className="coming_soon_shape_2" style={{ zIndex: -1 }}>
        <img src="/assets/images/shape-2.png" alt="shape" />
      </div>
    </section>
  );
};

export default TimeAndDateSection;
