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
                <div className="col-lg-6">
                    <img src="/assets/images/ryan.png" alt="Ryan" />
                    <br /><br />
                    <h1 className="couple_name">Muhammad Ryanrahmadifa</h1>
                    <h4>{t("sonOf")}</h4>
                    <h3>
                        Mr. Budiyanto Kurniawan, S.E
                        <br />&<br />
                        Ms. Fatmah Sardin S.E. M.Kom.
                    </h3>
                    <br />
                </div>
                <div className="col-lg-6">
                    <img src="/assets/images/yasmin.png" alt="Yasmin" />
                    <br /><br />
                    <h1 className="couple_name">Yasmin Salimah</h1>
                    <h4>{t("daughterOf")}</h4>
                    <h3>
                        Mr. Ferry Zuljanna, S.T., M.M.
                        <br />&<br />
                        Mrs. Adithyarini Susilo, S.Psi.
                    </h3>
                </div>
            </div>
            <img src="/assets/images/section-divider.png" alt="divider" className="pt-80" />
        </div>
    </section>
);

export default CoupleSection;
