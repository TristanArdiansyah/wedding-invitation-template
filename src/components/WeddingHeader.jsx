// src/components/WeddingHeader.jsx
import React from "react";
import Head from "./Head";
import resolvePath from "../utils/resolvePath";

const WeddingHeader = ({
  ogTags,
  eventTitle,
  eventDescription,
  guestName,
  currentUrl,
  weddingDateBrief,
  guestListLastUpdatedAt,
  venueBrief,
  logo,
  coupleName,
  t,
}) => (
  <>
    {/* Global style for calendar button */}
    <style jsx global>{`
      a.react-add-to-calendar__button span {
        cursor: pointer;
        text-decoration: underline;
      }
    `}</style>
    <Head
      {...ogTags}
      title={eventTitle}
      description={eventDescription}
      guestName={guestName}
      url={currentUrl}
      date={weddingDateBrief}
      modifiedTime={guestListLastUpdatedAt}
      venue={venueBrief}
      logo={resolvePath(ogTags.logo)}
      author={resolvePath("/")}
    />
    <section className="header_area">
      <div id="home" className="header_slider">
        <div className="slick-list draggable">
          <div className="slick-track" style={{ opacity: 1 }}>
            <div
              className="bg_cover d-flex justify-content-center align-items-center pb-20"
              style={{ height: "110vh" }}
            >
              <div className="container content">
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <div
                      className="slider_content text-center"
                      style={{ paddingTop: 0 }}
                    >
                      <h3
                        className="slider_sub_title_primary"
                        data-animation="fadeInUp"
                        data-delay="0.2s"
                        style={{ animationDelay: "0.2s" }}
                      >
                        {t("bismillah")}
                      </h3>
                      <h3
                        className="slider_sub_title_primary"
                        data-animation="fadeInUp"
                        data-delay="0.2s"
                        style={{ animationDelay: "0.2s" }}
                      >
                        {t("bismillahMeaning")}
                      </h3>
                      <br />
                      <h5
                        className="slider_sub_title_primary pt-50"
                        data-delay="0.2s"
                        data-animation="fadeInUp"
                        style={{ animationDelay: "0.2s" }}
                      >
                        {t("siteIntro")}
                      </h5>
                      <h3
                        className="slider_sub_title_secondary"
                        data-animation="fadeInUp"
                        data-delay="0.2s"
                        style={{ animationDelay: "0.2s" }}
                      >
                        {t("siteIntroCont")}
                      </h3>
                      <h2
                        className="slider_title"
                        data-animation="fadeInUp"
                        data-delay="0.7s"
                        style={{ animationDelay: "0.7s" }}
                      >
                        {coupleName}
                      </h2>
                      <span
                        className="location"
                        data-animation="fadeInUp"
                        data-delay="1s"
                        style={{ animationDelay: "1s" }}
                      >
                        {t("eventDateValue")}
                      </span>
                      <br />
                      <img src="/assets/images/arrow.svg" alt="" />
                      <br />
                      <a href="https://chat.ryanyasmin.biomadev.my.id/" type="button" className="btn btn-light">
                        {t("buttonChatbot")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default WeddingHeader;
