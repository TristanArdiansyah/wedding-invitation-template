// src/components/StorySection.jsx
import React from "react";

const StorySection = () => (
  <section id="story" className="coming_soon_area pt-20 pb-70">
    <div className="coming_soon_shape_1" style={{ zIndex: -1 }}>
      <img src="/assets/images/shape-1.png" alt="shape" />
    </div>
    <div className="container text-center">
      <h1 className="mb-40">Our Story</h1>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div
            className="card text-center"
            style={{
              height: "50vh",
              backgroundImage:
                "url('https://s3-alpha-sig.figma.com/img/80bf/01c1/0dc0ba5b1cd0485ebe47ba468a23f110?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ntYhJhtrXXMAAODxMXdMizOt~rc8kFSR1J8AjgKbpFOp0L8dcPj7m6B0SMtyq5xba-WGVtoapxdBziRHg5HD~sHzo4e-cHLfHLPQYlN8IXTAc02lyDOkTWNRLTMO~n3Bxb1WqzOYaAXUniBPhh0CqyZApLIPxfpA3ZrjumEXG1GtdxWlBkjKmngizsIlApg4XADlZea6cQ0T~4-oi~IKNZUOfNbmD40k9LMjrECQVnNPQxo3p0JDp9Uay-gRQHAVP9DJ23Ov9duEdvfqPrtBFGNJnxk~Tq5UVD3Zq-EcLdoicRescC-qt8pw7GrR5W2D5VT5sz4epAyp-q6vQQdF3Q__')",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: 30,
            }}
          ></div>
          <div
            className="card mt-20"
            style={{
              height: "30vh",
              borderRadius: 30,
            }}
          >
            <div className="card-body d-flex">
              <h3 className="align-self-center">
                Although they spent most of their time apart geographically, they
                have always maintained a close relationship to this day. At
                first, they thought they were so different from each other, but
                as time went on and the distance grew, their hearts grew fonder.
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="card mb-20"
            style={{
              height: "30vh",
              borderRadius: 30,
            }}
          >
            <div className="card-body d-flex">
              <h3 className="align-self-center">
                Yasmin and Ryan first met in middle school when they were Head
                and Vice Head of the Disciplinary Committee in the Student
                Council (OSIS) at Jakarta Islamic School. They attended different
                high schools and universities.
              </h3>
            </div>
          </div>
          <div
            className="card text-center"
            style={{
              height: "50vh",
              backgroundImage:
                "url('https://s3-alpha-sig.figma.com/img/5183/8073/da55b2952b218d34f81dc2d8692ca729?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VqiXK6l5RQQx265R~CTblj7Rn-L~l-gcg2KPV26nbUSe32SmxrLjhGwEtifyExjaSxjXLLpZRTiARrVOGpAN65hFh-jZl5Jo1hBX-InP3MQ8uq06obcdigN-YtDAosEeqkWKfqaYTqXTbl2XFeJr9ruJbH3NxLIuByr-sdqY8HXw1Xwaj4bEyoBtM2TDoZHW3WDLB~dF9RQZZCYR8AdDImYpNCqh1fbj7w12kwQs-DvBqgy6NIBa21OKFv9-fm75t3C5Rk-cCFJyCurux~2xYcl89T0a5kKuI0StlsE42sqAP6WHxqHxSOAljHjnlporavHtVsqAz0E3ohEE-Lvp3g__')",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: 30,
            }}
          ></div>
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
