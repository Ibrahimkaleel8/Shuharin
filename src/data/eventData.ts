export interface VenueInfo {
  label: string;
  name: string;
  address: string;
  city: string;
  googleMapsUrl: string;
}

export interface EventData {
  couple: {
    bride: string;
    groom: string;
    brideShort: string;
    groomShort: string;
    brideParents: string;
    groomLineage: string;
    hosts: string;
    hostsAddress: string;
    monogram: {
      bride: string;
      groom: string;
      combined: string;
    };
    tagline: string;
    romanticQuote: string;
    familyGreeting: string;
    announcement: string;
    eventType: string;
    eventTypeName: string;
    dateFormatted: string;
    targetDate: string;
    endDate: string;
    venueName: string;
    venueLocation: string;
    fullAddress: string;
    googleMapsUrl: string;
    contactPhone: string;
  };
  dateTime: {
    day: string;
    month: string;
    monthShort: string;
    monthUpper: string;
    year: string;
    yearSpaced: string;
    dayOfWeek: string;
    time: string;
    period: string;
    timeNote: string;
    dateFormatted: string;
    targetDate: string;
    endDate: string;
    timezone: string;
    calendarStartUtc: string;
    calendarEndUtc: string;
  };
  venue: {
    name: string;
    location: string;
    city: string;
    fullAddress: string;
    googleMapsUrl: string;
    contactPhone: string;
  };
  nikah: {
    title: string;
    dateFormatted: string;
    hijriDate: string;
    time: string;
    venueName: string;
    venueAddress: string;
    googleMapsUrl: string;
  };
  lunch: {
    title: string;
    note: string;
    venueName: string;
    venueAddress: string;
    googleMapsUrl: string;
  };
  reception: {
    title: string;
    subtitle: string;
    dateFormatted: string;
    dayOfWeek: string;
    time: string;
    venueName: string;
    venueAddress: string;
    fullAddress: string;
    googleMapsUrl: string;
    calendarStartUtc: string;
    calendarEndUtc: string;
  };
  bestWishes: {
    title: string;
    names: string[];
    duaQuote: string;
  };
  blessings: {
    bismillahArabic: string;
    bismillahTranslation: string;
    chapterTitle: string;
    quranicArabic: string;
    quranicTranslation: string;
    verseCitation: string;
    warmBlessings: string;
    invitationNote: string;
    quranicVerse: string;
    verseSource: string;
  };
  closing: {
    header: string;
    arabicGreeting: string;
    subtext: string;
    authorWebsite: string;
    authorName: string;
  };
}

export const eventData: EventData = {
  couple: {
    bride: 'Safrin R',
    groom: 'Mohammed Shuhaid',
    brideShort: 'Safrin',
    groomShort: 'Shuhaid',
    brideParents: 'D/o. Abdul Razak, Ripponpete',
    groomLineage: 'Grand S/o. Marhoom Meera Iddin Sab',
    hosts: 'Mrs. & Mr. Abdul Rehaman',
    hostsAddress: 'Fathima Bi Manzil, Nehru Nagar 1st Cross, Sagara',
    monogram: {
      bride: 'S',
      groom: 'M',
      combined: 'M & S',
    },
    tagline: 'Two hearts, one blessed beginning.',
    romanticQuote: 'Your Dua and Blessings are the Best Gift for Us.',
    familyGreeting: 'WITH THE BLESSINGS OF ALLAH WE ARE DELIGHTED TO INVITE YOU TO THE WEDDING CEREMONY OF OUR SON',
    announcement: 'INSHAA ALLAH, WE ARE GETTING',
    eventType: 'Married',
    eventTypeName: 'Wedding',
    dateFormatted: 'Sunday, December 27, 2026',
    targetDate: '2026-12-27T11:30:00+05:30',
    endDate: '2026-12-27T20:00:00+05:30',
    venueName: 'Badriya Masjid',
    venueLocation: 'Ripponpete',
    fullAddress: 'Badriya Masjid, Ripponpete',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Badriya+Masjid+Ripponpete',
    contactPhone: '',
  },
  dateTime: {
    day: '27',
    month: 'December',
    monthShort: 'Dec',
    monthUpper: 'DECEMBER',
    year: '2026',
    yearSpaced: '2 0 2 6',
    dayOfWeek: 'Sunday',
    time: '11:30 AM',
    period: '18 Rajab Hijri 1448',
    timeNote: 'Nikah Ceremony • Followed by Lunch',
    dateFormatted: 'Sunday, December 27, 2026',
    targetDate: '2026-12-27T11:30:00+05:30',
    endDate: '2026-12-27T20:00:00+05:30',
    timezone: 'Asia/Kolkata',
    calendarStartUtc: '20261227T060000Z',
    calendarEndUtc: '20261227T100000Z',
  },
  venue: {
    name: 'Badriya Masjid',
    location: 'Ripponpete',
    city: 'Ripponpete',
    fullAddress: 'Badriya Masjid, Ripponpete',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Badriya+Masjid+Ripponpete',
    contactPhone: '',
  },
  nikah: {
    title: 'Nikah Ceremony',
    dateFormatted: 'Sunday, December 27, 2026',
    hijriDate: '18 Rajab Hijri 1448',
    time: '11:30 AM',
    venueName: 'Badriya Masjid',
    venueAddress: 'Ripponpete',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Badriya+Masjid+Ripponpete',
  },
  lunch: {
    title: 'Followed by Lunch',
    note: 'Wedding Feast',
    venueName: 'SR Convention Hall',
    venueAddress: 'Thirthahalli Road, Ripponpete',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=SR+Convention+Hall+Thirthahalli+Road+Ripponpete',
  },
  reception: {
    title: 'Reception',
    subtitle: 'You are cordially invited to the Reception Ceremony of',
    dateFormatted: 'Monday, December 28, 2026',
    dayOfWeek: 'Monday',
    time: '12:00 PM Onwards',
    venueName: 'MG Hall',
    venueAddress: 'Jog Road, Sagar',
    fullAddress: 'MG Hall, Jog Road, Sagar',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=MG+Hall+Jog+Road+Sagar',
    calendarStartUtc: '20261228T063000Z',
    calendarEndUtc: '20261228T103000Z',
  },
  bestWishes: {
    title: 'With Best Wishes From',
    names: [
      'Ismail Iddin Sab, Sagara',
      'Abdul Razak, Uchila',
      'Abdul Khader & Brothers',
      'Abdul Naseer',
      'S/o. T.M Yusuf Family',
      'Relatives & Friends',
    ],
    duaQuote: 'Your Dua and Blessings are the Best Gift for Us',
  },
  blessings: {
    bismillahArabic: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
    bismillahTranslation: 'IN THE NAME OF ALLAH, THE MOST GRACIOUS & THE MOST MERCIFUL',
    chapterTitle: 'A BLESSED CHAPTER',
    quranicArabic: 'وَخَلَقْنَاكُمْ أَزْوَاجًا',
    quranicTranslation: 'And We created you in pairs',
    verseCitation: '— Surah An-Naba [78:8] —',
    warmBlessings: 'Your Dua and Blessings are the Best Gift for Us.',
    invitationNote: 'WITH THE BLESSINGS OF ALLAH WE ARE DELIGHTED TO INVITE YOU TO THE WEDDING CEREMONY OF OUR SON',
    quranicVerse:
      'And among His Signs is this, that He created for you mates from among yourselves, that ye may dwell in tranquility with them, and He has put love and mercy between your (hearts).',
    verseSource: '— Surah Ar-Rum (30:21)',
  },
  closing: {
    header: "WE CAN'T WAIT TO CELEBRATE THIS SPECIAL MOMENT WITH YOU",
    arabicGreeting: 'Jazak Allahu Khairan',
    subtext: 'Your Dua and Blessings are the Best Gift for Us.',
    authorWebsite: '',
    authorName: '',
  },
};
