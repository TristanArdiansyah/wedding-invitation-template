// src/components/CoupleSection.jsx
import React from "react";

const CoupleSection = ({
    t
}) => (
    <section id="bride-groom" className="coming_soon_area pt-20 pb-70">
        <div className="container text-center pt-40">
            <h1>{t("coupleIntro")}</h1>
            <br />
            <h3>
                {t("coupleSubheading")}
            </h3>
            <br />
            <div className="row align-items-center">

                <div className="col-lg-6 pt-5">
                    <img src="/assets/images/yasmin.png" alt="Bride" />
                    <br /><br />
                    <h1 className="couple_name">{t("brideFullName")}</h1>
                    <h4>{t("daughterOf")}</h4>
                    <h3>
                    {t("brideParents")}
                    </h3>
                </div>
                <div className="col-lg-6 pt-5">
                    <img src="/assets/images/ryan.png" alt="Groom" />
                    <br /><br />
                    <h1 className="couple_name">{t("groomFullName")}</h1>
                    <h4>{t("sonOf")}</h4>
                    <h3>
                    {t("groomParents")}
                    </h3>
                </div>
            </div>
            <img src="/assets/images/section-divider.png" alt="divider" className="pt-80" />
        </div>
    </section>
);

export default CoupleSection;
