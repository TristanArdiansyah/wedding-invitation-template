// pages/index.jsx
"use client";
import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';

import { useTranslation, defaultLocale } from "../src/i18n";
import resolvePath from "../src/utils/resolvePath";
import appConfig from "../src/config/app";

// Import the new components
import WeddingHeader from "../src/components/WeddingHeader";
import CoupleSection from "../src/components/CoupleSection";
import TimeAndDateSection from "../src/components/TimeAndDateSection";
import StorySection from "../src/components/StorySection";
import GallerySection from "../src/components/GallerySection";
import MessageSection from "../src/components/MessageSection";
import Footer from "../src/components/Footer";
import RSVPSection from "../src/components/RSVPSection";
// import GiftsSection from "../src/components/GiftsAndSupportSection";
import FloatingButton from "../src/components/FloatingButton";

const translateConfig = (appConfig, locale) => {
  if (!locale || locale === defaultLocale) {
    return appConfig;
  }
  const configLang = appConfig.lang[locale];
  if (configLang === undefined) {
    throw new Error("invalid locale: ", locale);
  }
  return { ...appConfig, ...configLang };
};

const ShowInvite = ({ currentUrl, guestListLastUpdatedAt, guest }) => {
  const t = useTranslation(guest.locale);

  // Initiate config variables
  const {
    logo,
    ogTags,
    coupleInfo,
    venue,
    weddingDay,
    weddingDate,
    weddingTime,
    calendarInfo,
  } = translateConfig(appConfig, guest.locale);
  const { brideName, groomName, coupleNameFormat } = coupleInfo;

  const coupleNameStr =
    coupleNameFormat === "GROOM_FIRST"
      ? `${groomName} & ${brideName}`
      : `${brideName} & ${groomName}`;
  const coupleName =
    coupleNameFormat === "GROOM_FIRST" ? (
      <>
        {groomName} <span>&amp;</span> {brideName}
      </>
    ) : (
      <>
        {brideName} <span>&amp;</span> {groomName}
      </>
    );

  const venueBrief = `${venue.name}, ${venue.city}, ${venue.country}`;
  const weddingDateBrief = `${weddingDay}, ${weddingDate}`;
  const eventTitle = `${coupleNameStr}'s Wedding`;
  let eventDescription = `${weddingDateBrief} at ${venue.name}, ${venue.city}`;
  if (guest.name) {
  }
  eventDescription = `Dear ${guest.name}, you are cordially invited to our wedding on ${weddingDate} at ${venue.name}. Looking forward to seeing you!`;

  // Calendar payload is still here if needed

  return (
    <div>
      <WeddingHeader
        ogTags={ogTags}
        eventTitle={eventTitle}
        eventDescription={eventDescription}
        guestName={guest.name}
        currentUrl={currentUrl}
        weddingDateBrief={weddingDateBrief}
        guestListLastUpdatedAt={guestListLastUpdatedAt}
        venueBrief={venueBrief}
        logo={logo}
        coupleName={coupleName}
        t={t}
      />
      <CoupleSection t={t} />
      <TimeAndDateSection venue={venue} t={t} />
      <StorySection t={t} />
      <GallerySection  t={t} />
      <RSVPSection t={t} />
      <MessageSection t={t} />
      <FloatingButton  />
      <Footer logo={logo} coupleName={coupleName} appConfig={appConfig} />
    </div>
  );
};

ShowInvite.getInitialProps = (ctx) => {
  const localeParams = ctx.query.lang || defaultLocale;
  const emptyGuestParams = {
    guest: {
      guestId: "",
      name: "",
      greeting: "",
      locale: localeParams,
    },
  };

  const currentUrl = resolvePath(ctx.req.url);
  const guestId = ctx.query.u;
  if (!guestId) {
    return {
      currentUrl,
      ...emptyGuestParams,
    };
  }


  return {
    currentUrl,
    guest: {
      name,
      greeting,
      guestId,
      locale: locale || localeParams,
    },
  };
};

export default ShowInvite;
