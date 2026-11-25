import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';
import { eventData } from '../data/eventData';

export const VenueSection: React.FC = () => {
  return (
    <section
      id="venue"
      className="py-8 sm:py-14 px-4 bg-transparent text-center relative overflow-hidden"
    >
      <div className="max-w-3xl mx-auto relative z-10 space-y-5 sm:space-y-7 text-center">
        {/* Map Pin Badge */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.65, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-12 h-12 sm:w-18 sm:h-18 rounded-full border border-[#C5A059] sm:border-2 bg-[#1D4E89] flex items-center justify-center text-[#F3E5AB] shadow-lg shadow-[#1D4E89]/25"
          >
            <MapPin className="w-5 h-5 sm:w-8 sm:h-8 stroke-[2.2]" />
          </motion.div>
        </div>

        {/* Primary Venue Title and Location (Nikah) */}
        <div className="space-y-1.5 sm:space-y-2">
          <p className="font-sans-ui text-[10px] sm:text-xs font-bold tracking-[0.28em] text-[#C5A059] uppercase">
            NIKAH VENUE • {eventData.nikah.time}
          </p>
          <motion.h4
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)', scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-royal text-xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.14em] sm:tracking-[0.22em] text-[#1D4E89] uppercase leading-tight drop-shadow-xs"
          >
            {eventData.nikah.venueName}
          </motion.h4>

          <motion.p
            initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans-ui text-[10px] sm:text-sm font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[#C5A059] uppercase"
          >
            {eventData.nikah.venueAddress}
          </motion.p>
        </div>

        {/* Followed by Lunch Venue */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false }}
          transition={{ duration: 0.85, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-1 pt-1"
        >
          <p className="font-eb-garamond text-xs sm:text-sm font-bold tracking-[0.22em] text-[#1D4E89]/80 uppercase">
            {eventData.lunch.title} AT
          </p>
          <p className="font-royal text-base sm:text-2xl font-bold tracking-[0.12em] text-[#1D4E89] uppercase">
            {eventData.lunch.venueName}
          </p>
          <p className="font-sans-ui text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase">
            {eventData.lunch.venueAddress}
          </p>
        </motion.div>

        {/* Get Directions Actions */}
        <div className="pt-2 sm:pt-3 flex flex-wrap items-center justify-center gap-3">
          <motion.a
            id="btn-get-directions"
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href={eventData.nikah.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 sm:gap-2.5 px-5 py-2 sm:px-7 sm:py-3 rounded-full bg-[#1D4E89] hover:bg-[#13325B] text-white border border-[#C5A059] sm:border-2 shadow-md hover:shadow-lg shadow-[#1D4E89]/25 transition-all cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F3E5AB] shrink-0" />
            <span className="font-sans-ui text-[10.5px] sm:text-xs font-bold tracking-[0.14em] sm:tracking-[0.18em] text-white uppercase">
              NIKAH DIRECTIONS
            </span>
          </motion.a>

          <motion.a
            id="btn-lunch-directions"
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href={eventData.lunch.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 sm:gap-2.5 px-5 py-2 sm:px-7 sm:py-3 rounded-full bg-white hover:bg-[#FAF8F5] text-[#1D4E89] border border-[#C5A059] sm:border-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A059] shrink-0" />
            <span className="font-sans-ui text-[10.5px] sm:text-xs font-bold tracking-[0.14em] sm:tracking-[0.18em] text-[#1D4E89] uppercase">
              LUNCH HALL DIRECTIONS
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
