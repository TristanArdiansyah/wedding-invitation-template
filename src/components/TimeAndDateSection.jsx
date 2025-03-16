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
                <h1>{t("gettingMarried")}</h1>
                <br />
                <br />
                <h3>Assalamualaikum Warahmatullahi Wabarakatuh</h3>
                <br />
                <h3>
                    {t("withThePraise1")} <br />
                    {t("withThePraise2")} <br />
                    {t("withThePraise3")} <br />
                </h3>
                <br />
                <h1>{t("datetime")}</h1>
                <br />
                <br />
                {/* Existing Countdown */}
                <Countdown targetDate="2025-04-13T07:00:00" />
                <br />
                <br />

                {/* Two parallel cards */}
                <div className="row justify-content-center">
                    {/* Card 1: Wedding Ceremony */}
                    <div className="col-lg-6 mb-4">
                        <div
                            className="card"
                            style={{
                                backgroundImage: "url('/assets/images/bea-cukai.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: 20,
                                color: "#fff",
                                minHeight: "500px",
                            }}
                        >
                            <div
                                className="card-body d-flex flex-column justify-content-center align-items-center"
                                style={{ height: "80vh", backdropFilter: "blur(5px) brightness(70%)", borderRadius: 20 }}
                            >
                                {/* Placeholder icon */}
                                <img
                                    src="/assets/images/wedding-ring.svg"
                                    alt="icon"
                                    style={{ width: "60px", marginBottom: "1rem" }}
                                />
                                <h2 className="mb-2 text-white">{t("akad")}</h2>
                                <br /><br />
                                <h3 className="mb-3 text-white">07.00 - 09.00</h3>
                                <br /><br />
                                <h2 className="mb-3 text-white">Bea Cukai Pusat</h2>
                                <br />
                                <p className="text-center text-white" style={{ maxWidth: "250px" }}>
                                    Jl. Jenderal Ahmad Yani, Pisangan Tim., Kec. Pulo Gadung, Kota
                                    Jakarta Timur, DKI Jakarta
                                </p>
                                {/* Link to your map URL */}
                                {/* <a href={venue.mapUrl} className="btn btn-light mt-3">
                  Open Map
                </a> */}
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Wedding Reception */}
                    <div className="col-lg-6 mb-4">
                        <div
                            className="card"
                            style={{
                                backgroundImage: "url('/assets/images/audit-merauke.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: 20,
                                color: "#fff",
                                minHeight: "500px",
                            }}
                        >
                            <div
                                className="card-body d-flex flex-column justify-content-center align-items-center"
                                style={{ height: "80vh", backdropFilter: "blur(5px) brightness(70%)", borderRadius: 20 }}
                            >
                                {/* Placeholder icon */}
                                <img
                                    src="/assets/images/dinner-table.svg"
                                    alt="icon"
                                    style={{ width: "60px", marginBottom: "1rem" }}
                                />
                                <h2 className="mb-2 text-white">{t("reception")}</h2>
                                <br /><br />
                                <h3 className="mb-3 text-white">11.00 - 14.00</h3>
                                <br /><br />
                                <h2 className="mb-3 text-white">Auditorium Merauke</h2>
                                <br />
                                <p className="text-center text-white" style={{ maxWidth: "250px" }}>
                                    Jl. Jenderal Ahmad Yani, Pisangan Tim., Kec. Pulo Gadung, Kota
                                    Jakarta Timur, DKI Jakarta
                                </p>
                                {/* Link to your map URL */}
                                {/* <a href={venue.mapUrl} className="btn btn-light mt-3">
                  Open Map
                </a> */}
                            </div>
                        </div>
                    </div>
                    
                    <a
                        href="https://www.google.com/maps/place/Auditorium+Merauke/@-6.2066875,106.8729407,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f50016abf253:0x311faa2bb02cab06!8m2!3d-6.2066875!4d106.8755156!16s%2Fg%2F11wj2p7jtq?entry=ttu&g_ep=EgoyMDI1MDMxMC4wIKXMDSoASAFQAw%3D%3D"
                        className="card-body d-flex flex-column justify-content-center align-items-center border ml-15 mr-15"
                        style={{
                            height: "40vh", 
                            borderRadius: 20,
                            backgroundImage: "url('/assets/images/audit-map.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Placeholder icon */}
                    </a>
                </div>

                {/* Additional note / invitation */}
                <div className="count_content" style={{ zIndex: 1, paddingTop: 20 }}>
                    <h4>
                        {t("thanksForAttendance")}
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
