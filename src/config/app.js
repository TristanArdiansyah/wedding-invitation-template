const baseConfig = {
  weddingDay: "Sunday",
  weddingTime: "11.00 - 13.00",
  weddingDate: "Apr 13, 2025",
  showBuiltWithInfo: true,
  showQrCode: false,
  calendarInfo: {
    timeStartISO: "2025-13-04T19:00:00+08:00",
    timeEndISO: "2025-13-04T21:00:00+08:00"
  },
  coupleInfo: {
    brideName: "YASMIN",
    groomName: "RYAN",
    coupleNameFormat: "BRIDE_FIRST"
  },
  venue: {
    name: "Bea Cukai Pusat",
    addressLine1: "Jl. Jenderal Ahmad Yani, Pisangan Tim.,",
    addressLine2: " Kec. Pulo Gadung, Kota Jakarta Timur,",
    city: "DKI Jakarta",
    country: "Indonesia",
    mapUrl: "https://www.google.com/maps/place/Auditorium+Merauke/@-6.2066875,106.8729407,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f50016abf253:0x311faa2bb02cab06!8m2!3d-6.2066875!4d106.8755156!16s%2Fg%2F11wj2p7jtq?entry=ttu&g_ep=EgoyMDI1MDMxMC4wIKXMDSoASAFQAw%3D%3D"
  },
  logo: {
    headerLogo: "/assets/images/ring-svg.png",
    footerLogo: "/assets/video/aw-ring-logo-ticker.mp4",
    footerLogoType: "mp4"
  },
  ogTags: {
    logo: "/assets/images/aw-ring-logo.png",
    siteName: "ryanyasmin.biomadev.my.id",
    publishedTime: "2025-03-17"
  }
};

const lang = {
  id: {
    weddingDay: "Minggu",
    weddingDate: "13 April 2025",
    venue: {
      ...baseConfig.venue,
      name: "Bea Cukai Pusat",
      addressLine2: "Jakarta Timur, DKI Jakarta",
    }
  }
};

export default {
  ...baseConfig,
  lang
};
