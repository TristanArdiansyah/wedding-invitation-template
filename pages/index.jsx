import AddToCalendar from "react-add-to-calendar";
import QRCode from "qrcode.react";
import useSWR from "swr";

import Head from "@src/components/Head";
import Countdown from "@src/components/Countdown";
import GiftsInformation from "@src/components/GiftsInformation";
import resolvePath from "@src/utils/resolvePath";
import appConfig from "@src/config/app";
import { useTranslation, defaultLocale } from "@src/i18n";
import guestList from "./guest_list.json";

const translateConfig = (appConfig, locale) => {
  if (!locale || locale === defaultLocale) {
    return appConfig
  }
  // Replace config with lang
  const configLang = appConfig.lang[locale]
  if (configLang === undefined) {
    throw new Error("invalid locale: ", locale)
  }
  return { ...appConfig, ...configLang }
}

const ShowInvite = ({ currentUrl, guestListLastUpdatedAt, guest }) => {
  const t = useTranslation(guest.locale)

  // Initiate config variables
  const { logo, ogTags, coupleInfo, venue, weddingDay, weddingDate, weddingTime, calendarInfo } = translateConfig(appConfig, guest.locale)
  const { brideName, groomName, coupleNameFormat } = coupleInfo

  const coupleNameStr = coupleNameFormat === 'GROOM_FIRST'
    ? `${groomName} & ${brideName}`
    : `${brideName} & ${groomName}`
  const coupleName = coupleNameFormat === 'GROOM_FIRST'
    ? (<>{groomName} <span>&amp;</span> {brideName}</>)
    : (<>{brideName} <span>&amp;</span> {groomName}</>)

  // Venue info
  const venueBrief = `${venue.name}, ${venue.city}, ${venue.country}`
  const weddingDateBrief = `${weddingDay}, ${weddingDate}`

  // Event info
  const eventTitle = `${coupleNameStr}'s Wedding`
  let eventDescription = `${weddingDateBrief} at ${venue.name}, ${venue.city}`
  if (guest.name) {
    eventDescription = `Dear ${guest.name}, you are cordially invited to our wedding on ${weddingDate} at ${venue.name}. Looking forward to seeing you!`
  }

  // Calendar payload
  const calendarEvent = {
    title: eventTitle,
    description: eventDescription,
    location: `${venue.city}, ${venue.country}`,
    startTime: calendarInfo.timeStartISO,
    endTime: calendarInfo.timeEndISO
  }

  return (
    <div>
      <style jsx global>{`
      a.react-add-to-calendar__button span {
        cursor: pointer;
        text-decoration: underline;
      }
      `}
      </style>
      <Head {...ogTags}
        title={eventTitle}
        description={eventDescription}
        guestName={guest.name}
        url={currentUrl}
        date={weddingDateBrief}
        modifiedTime={guestListLastUpdatedAt}
        venue={venueBrief}
        logo={resolvePath(ogTags.logo)}
        author={resolvePath('/')}
      />

      < section className="header_area">
        <div
          id="home"
          className="header_slider"
        >
          <div className="slick-list draggable">
            <div className="slick-track" style={{ opacity: 1 }}>
              <div
                className=" bg_cover d-flex align-items-top pt-100"
                style={{
                  height: '100vh'
                }}
              >
                <div className="container content">
                  <div className="row justify-content-center">
                    <div className="col-lg-12">
                      <div className="slider_content text-center" style={{ paddingTop: 0 }}>
                        <h3
                          className="slider_sub_title_primary"
                          data-animation="fadeInUp"
                          data-delay="0.2s"
                          style={{ animationDelay: '0.2s' }}
                        >{t('bismillah')}</h3>
                        <h3
                          className="slider_sub_title_primary"
                          data-animation="fadeInUp"
                          data-delay="0.2s"
                          style={{ animationDelay: '0.2s' }}
                        >{t('bismillahMeaning')}</h3>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h5
                          className="slider_sub_title_primary"
                          data-animation="fadeInUp"
                          data-delay="0.2s"
                          style={{ animationDelay: '0.2s' }}
                        >{t('siteIntro')}</h5>
                        <h3
                          className="slider_sub_title_secondary"
                          data-animation="fadeInUp"
                          data-delay="0.2s"
                          style={{ animationDelay: '0.2s' }}
                        >{t('siteIntroCont')}</h3>
                        <h2
                          className="slider_title"
                          data-animation="fadeInUp"
                          data-delay="0.7s"
                          style={{ animationDelay: '0.7s' }}
                        >
                          {coupleName}
                        </h2>
                        <span
                          className="location"
                          data-animation="fadeInUp"
                          data-delay="1s"
                          style={{ animationDelay: '1s' }}
                        >{t('eventDateValue')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bride-groom" className="coming_soon_area pt-20 pb-70">
        <div className="coming_soon_shape_1" style={{ zIndex: 1 }}>
          <img src="/assets/images/shape-1.png" alt="shape" />
        </div>
        <div className="container text-center pt-40">
          <h1>Meet The Happy Couple</h1>
          <br />

          <h3>All praise due to Allah, The Lord of the universe which has created humans in pairs.
            To Him we ask for the blessing for our wedding and for the rest of our lives.</h3>
          <br />

          <div className="row align-items-center">
            <div className="col-lg-6">

              <img src="/assets/images/ryan.png" alt="Shape" />
              <br />
              <h1>Muhammad Ryanrahmadifa</h1>
              <h4>Son of</h4>
              <h3>Mr. Budiyanto Kurniawan, S.Kom.
                <br />&<br />
                Ms. Fatmah Sardin S.E. M.Kom.</h3>
            </div>
            <div className="col-lg-6">
              <div
                className="wow fadeIn"
                data-wow-duration="1.3s"
                data-wow-delay="0.6s"
                style={{ visibility: 'visible', animationDuration: '1.3s', animationDelay: '0.6s', animationName: 'fadeIn' }}
              >
                <img src="/assets/images/yasmin.png" alt="Shape" />
                <br />
                <h1>Yasmin Salimah</h1>
                <h4>Daughter of</h4>
                <h3>Mr. Ferry Zuljanna, S.T., M.M. <br />
                  & <br />
                  Mrs. Adithyarini Susilo, S.Psi.</h3>
              </div>
            </div>
          </div>
          <img src="/assets/images/section-divider.png" alt="shape" className="pt-80" />
        </div>
        <div className="coming_soon_shape_2">
          <img src="/assets/images/shape-2.png" alt="shape" />
        </div>
      </section>

      <section id="time-and-date" className="coming_soon_area pt-20 pb-70">
        <div className="coming_soon_shape_1" style={{ zIndex: 1 }}>
          <img src="/assets/images/shape-1.png" alt="shape" />
        </div>
        <div className="container text-center">
          <h1>We are getting married</h1>
          <br />
          <br />

          <h3>Assalamualaikum Warahmatullahi Wabarakatuh</h3>
          <br />

          <h3>With the grace and blessing of Allah SWT, <br />
            We are delighted to invite you to the wedding <br />
            ceremony of Yasmin & Ryan that will be held on:</h3>

          <br />

          <h1>April 13th 2025</h1>

          <br /><br />
          <Countdown targetDate="2025-04-13T10:00:00" />
          <br /><br />
          
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="card text-center"
                  style={{
                    height: "80vh",
                    backgroundImage: "url('/assets/images/bea-cukai.png')",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    borderRadius: 30
                  }}>
                  <div className="card-body">
                    {/* <h2 className="card-title text-white">Wedding Ceremony</h2>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card text-center"
                  style={{
                    height: "80vh",
                    backgroundImage: "url('/assets/images/audit-merauke.png')",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    borderRadius: 30
                  }}>
                  <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="count_content" style={{ zIndex: 1, paddingTop: 20 }}>
            <a href={venue.mapUrl}>
              <img style={{ borderRadius: 5, width: '100vw' }} src="/assets/images/oval-hotel-map-horizontal.png" alt="oval hotel map" />
            </a>
            <a href={venue.mapUrl} style={{
              width: '75vw',
              overflowX: 'hidden',
              textOverflow: 'ellipsis',
              marginTop: 10,
            }}>
            </a>
            <h4>It would give us great honor and happiness if you are willing to attend the wedding to give blessings for the bride and groom 💛</h4>
          </div>
          <img src="/assets/images/section-divider.png" alt="shape" className="mt-40" />
        </div>
        <div className="coming_soon_shape_2">
          <img src="/assets/images/shape-2.png" alt="shape" />
        </div>
      </section >

      <section id="story" className="coming_soon_area pt-20 pb-70">
      <div className="coming_soon_shape_1" style={{ zIndex: 1 }}>
          <img src="/assets/images/shape-1.png" alt="shape" />
        </div>
        <div className="container text-center">
          <h1 className="mb-40">Our Story</h1>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="card text-center"
                style={{
                  height: "50vh",
                  backgroundImage: "url('https://s3-alpha-sig.figma.com/img/80bf/01c1/0dc0ba5b1cd0485ebe47ba468a23f110?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ntYhJhtrXXMAAODxMXdMizOt~rc8kFSR1J8AjgKbpFOp0L8dcPj7m6B0SMtyq5xba-WGVtoapxdBziRHg5HD~sHzo4e-cHLfHLPQYlN8IXTAc02lyDOkTWNRLTMO~n3Bxb1WqzOYaAXUniBPhh0CqyZApLIPxfpA3ZrjumEXG1GtdxWlBkjKmngizsIlApg4XADlZea6cQ0T~4-oi~IKNZUOfNbmD40k9LMjrECQVnNPQxo3p0JDp9Uay-gRQHAVP9DJ23Ov9duEdvfqPrtBFGNJnxk~Tq5UVD3Zq-EcLdoicRescC-qt8pw7GrR5W2D5VT5sz4epAyp-q6vQQdF3Q__')",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderRadius: 30
                }}>
              </div>
              <div className="card mt-20"
                style={{
                  height: "30vh",
                  borderRadius: 30
                }}
              >
                <div className="card-body d-flex">
                  <h3 className="align-self-center">Although they spent most of their time apart geographically, they have always maintained
                    a close relationship to this day. At first, they thought they were so different from each other, but, as time went longer and distance farther, their hearts grew fonder of each other.
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card mb-20"
                style={{
                  height: "30vh",
                  borderRadius: 30
                }}
              >
                <div className="card-body d-flex">
                  <h3 className="align-self-center">Yasmin and Ryan first met in middle school was Head and Vice Head of the Disciplinary Committee in the Student Council (OSIS)
                    at Jakarta Islamic School. They attended different high schools and Universities.
                  </h3>
                </div>
              </div>
              <div className="card text-center"
                style={{
                  height: "50vh",
                  backgroundImage: "url('https://s3-alpha-sig.figma.com/img/5183/8073/da55b2952b218d34f81dc2d8692ca729?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VqiXK6l5RQQx265R~CTblj7Rn-L~l-gcg2KPV26nbUSe32SmxrLjhGwEtifyExjaSxjXLLpZRTiARrVOGpAN65hFh-jZl5Jo1hBX-InP3MQ8uq06obcdigN-YtDAosEeqkWKfqaYTqXTbl2XFeJr9ruJbH3NxLIuByr-sdqY8HXw1Xwaj4bEyoBtM2TDoZHW3WDLB~dF9RQZZCYR8AdDImYpNCqh1fbj7w12kwQs-DvBqgy6NIBa21OKFv9-fm75t3C5Rk-cCFJyCurux~2xYcl89T0a5kKuI0StlsE42sqAP6WHxqHxSOAljHjnlporavHtVsqAz0E3ohEE-Lvp3g__')",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderRadius: 30
                }}>
              </div>
            </div>
          </div>
          <img src="/assets/images/section-divider.png" alt="shape" className="pt-50" />
          <div className="coming_soon_shape_2">
          <img src="/assets/images/shape-2.png" alt="shape" />
        </div>
        </div>

      </section>

      <section id="gallery" className="coming_soon_area pt-20 pb-70">
        <div className="container text-center">
          <h1>Gallery</h1>
        </div>
        <img src="/assets/images/gallery.png" alt="shape" className="pt-50"
          style={{ width: "100%" }} />
        <div className="container text-center">
          <br />
          <h4>وَمِنْ ءَايَـٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًۭا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةًۭ وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَـَٔايَـٰتٍۢ لِّقَوْمٍۢ يَتَفَكَّرُونَ</h4>
          <br />
          <h4>And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them. And He has placed between you compassion and mercy. Surely in this are signs for people who reflect.</h4>
          <br />
          <h3>- AR-RUM : 21 -</h3>
          <img src="/assets/images/section-divider.png" alt="shape" className="pt-50" />
        </div>
      </section>

      <section id="gifts" className="coming_soon_area pt-20 pb-70">
      <div className="coming_soon_shape_1" style={{ zIndex: 1 }}>
          <img src="/assets/images/shape-1.png" alt="shape" />
        </div>
        <div className="container text-center">
          <h1>Send Us A gift!</h1>
          <br /><br />
          <h4>We thank you for all of your good wishes and presence for our wedding. If you are interested in sending us some gifts, it will be very much appreciated!</h4>
          <br /><br />

            <GiftsInformation/>

          <img src="/assets/images/section-divider.png" alt="shape" className="pt-50" />
          <div className="coming_soon_shape_2">
          <img src="/assets/images/shape-2.png" alt="shape" />
        </div>
        </div>
      </section>
      <section id="coming_soon" className="coming_soon_area pt-20 pb-70">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="card mb-20 d-flex align-items-center"
              style={{
                height: "60vh",
                width: "100%",
                borderRadius: 30
              }}
            >
              <div className="card-body">
                <h2>Leave Us A Message</h2>
                <h4 className="text-left">Name</h4>
                <input type="text" class="form-control" placeholder="" />
                <h4 className="text-left">Message</h4>
                <input type="text" class="form-control" placeholder="" />
                <h4 className="text-left">Attendance</h4>
                <input type="text" class="form-control" placeholder="" />
                <br />
                <button type="button text-center" className="btn btn-info btn-lg">Send Now</button>



              </div>
            </div>
          </div>

          <img src="/assets/images/section-divider.png" alt="shape" className="pt-50" />
        </div>
      </section>

      {/* Footer section */}
      <footer id="footer" className="footer_area">
        <div className="footer_shape_1">
          <img src="/assets/images/shape-1.png" alt="shape" />
        </div>
        <div className="container">
          <div className="footer_widget pt-50 pb-10 text-center">
            <div className="footer_logo">
              {logo.footerLogo &&
                (logo.footerLogoType === "mp4" ?
                  <video height="140" autoPlay muted loop>
                    <source src={logo.footerLogo} type="video/mp4" />
                  </video>
                  : <img src={logo.footerLogo} />
                )}
            </div>
            <div className="footer_title">
              <h3 className="title">
                {coupleName}
              </h3>
            </div>
          </div>
        </div>
        {appConfig.showBuiltWithInfo && (<div style={{
          textAlign: 'center',
          marginBottom: 40,
        }}>
          <small>
            <a style={{ color: 'grey' }} href="https://github.com/wzulfikar/nextjs-wedding-invite">
              Built with&nbsp;<object style={{ height: "0.5rem" }} data="/assets/images/heart.svg" type="image/svg+xml"></object>&nbsp;using NextJS
            </a>
          </small>
        </div>)}
      </footer>
    </div >
  )
};

ShowInvite.getInitialProps = (ctx) => {
  const localeParams = ctx.query.lang || defaultLocale
  const emptyGuestParams = {
    guest: {
      guestId: '',
      name: '',
      greeting: '',
      locale: localeParams,
    }
  }

  const currentUrl = resolvePath(ctx.req.url)
  const guestId = ctx.query.u
  if (!guestId) {
    return {
      currentUrl,
      ...emptyGuestParams
    }
  }

  const guestData = guestList.data
  const guestListLastUpdatedAt = guestList.meta.lastUpdatedAt
  const { name, greeting, locale } = guestData.filter(guest => guest.guestId === guestId)[0] || {}
  if (!name) {
    return {
      currentUrl,
      ...emptyGuestParams
    }
  }

  return {
    currentUrl,
    guestListLastUpdatedAt,
    guest: {
      name,
      greeting,
      guestId,
      locale: locale || localeParams,
    }
  }
}

export default ShowInvite