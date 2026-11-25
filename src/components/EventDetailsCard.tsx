import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Utensils, Navigation, CalendarPlus } from 'lucide-react';
import { eventData } from '../data/eventData';

export const EventDetailsCard: React.FC = () => {
  const [isAddingReception, setIsAddingReception] = useState(false);

  const handleAddReceptionToCalendar = () => {
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      `${eventData.couple.groom} & ${eventData.couple.bride} - Reception`
    )}&dates=${eventData.reception.calendarStartUtc}/${eventData.reception.calendarEndUtc}&details=${encodeURIComponent(
      `Inshaa Allah, you are cordially invited to the Reception Ceremony of ${eventData.couple.groom} and ${eventData.couple.bride}.\n\nVenue: ${eventData.reception.fullAddress}\nTime: ${eventData.reception.time}`
    )}&location=${encodeURIComponent(eventData.reception.fullAddress)}`;

    setIsAddingReception(true);
    window.open(gCalUrl, '_blank');
    setTimeout(() => setIsAddingReception(false), 4000);
  };

  return (
    <section
      id="event-details"
      className="py-8 sm:py-12 px-3 sm:px-4 bg-transparent text-center relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
        {/* Card 1: Nikah & Lunch */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl sm:rounded-[2rem] p-5 sm:p-7 border border-[#C5A059]/70 overflow-hidden text-left bg-[#0D2547] shadow-xl flex flex-col justify-between"
        >
          {/* Background Layer */}
          <div
            className="absolute left-0 right-0 top-0 pointer-events-none select-none z-0 opacity-75"
            style={{
              bottom: '-140px',
              backgroundImage: 'url("/images/bg-3.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Gradient Tint */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#0D2547]/88 via-[#13355F]/82 to-[#0A1D36]/90 backdrop-blur-[1px] pointer-events-none z-10" />

          {/* Floral Cascade Overlay Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 inset-y-0 h-full w-[44%] sm:w-1/2 pointer-events-none select-none z-15 flex justify-end overflow-hidden"
          >
            <img
              src="/images/flower-4.png"
              alt="Royal Blue Floral Cascade"
              className="h-full w-auto min-h-full max-w-none object-cover object-right opacity-80 sm:opacity-90 pointer-events-none filter drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)]"
            />
          </motion.div>

          {/* Content Card */}
          <div className="relative z-20 space-y-4 sm:space-y-5">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-center space-y-1.5 sm:space-y-2 pb-0.5 sm:pb-1"
            >
              <h2 className="font-eb-garamond text-xl sm:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.24em] text-[#FFFFFF] uppercase leading-tight drop-shadow-xs">
                NIKAH &amp; LUNCH
              </h2>
              <div className="flex items-center justify-center gap-2.5">
                <div className="h-[1px] w-10 sm:w-16 bg-[#C5A059]/60" />
                <span className="text-[#C5A059] text-[8px] sm:text-[10px]">✦</span>
                <div className="h-[1px] w-10 sm:w-16 bg-[#C5A059]/60" />
              </div>
            </motion.div>

            {/* List of Details */}
            <div className="space-y-3 sm:space-y-4">
              {/* Date */}
              <motion.div
                initial={{ opacity: 0, x: -25, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: false }}
                transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 sm:gap-4 pb-3 border-b border-white/10"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#C5A059] bg-[#C5A059]/20 flex items-center justify-center shrink-0 shadow-md shadow-black/20">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#F3E5AB]" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="font-sans-ui text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-[#E5C77F] uppercase block">
                    DATE
                  </span>
                  <h3 className="font-eb-garamond text-base sm:text-xl font-bold text-[#FFFFFF] leading-tight">
                    {eventData.nikah.dateFormatted}
                  </h3>
                  <p className="font-sans-ui text-[11px] sm:text-xs text-[#E2E8F0]/85 font-medium">
                    {eventData.nikah.hijriDate}
                  </p>
                </div>
              </motion.div>

              {/* Nikah Time & Venue */}
              <motion.div
                initial={{ opacity: 0, x: -25, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: false }}
                transition={{ duration: 0.85, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 sm:gap-4 pb-3 border-b border-white/10"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#C5A059] bg-[#C5A059]/20 flex items-center justify-center shrink-0 shadow-md shadow-black/20">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#F3E5AB]" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="font-sans-ui text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-[#E5C77F] uppercase block">
                    NIKAH • {eventData.nikah.time}
                  </span>
                  <h3 className="font-eb-garamond text-base sm:text-xl font-bold text-[#FFFFFF] leading-tight">
                    {eventData.nikah.venueName}
                  </h3>
                  <p className="font-sans-ui text-[11px] sm:text-xs text-[#E2E8F0]/85 font-medium">
                    {eventData.nikah.venueAddress}
                  </p>
                </div>
              </motion.div>

              {/* Followed by Lunch */}
              <motion.div
                initial={{ opacity: 0, x: -25, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: false }}
                transition={{ duration: 0.85, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 sm:gap-4 pt-0.5"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#C5A059] bg-[#C5A059]/20 flex items-center justify-center shrink-0 shadow-md shadow-black/20">
                  <Utensils className="w-4 h-4 sm:w-5 sm:h-5 text-[#F3E5AB]" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="font-sans-ui text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-[#E5C77F] uppercase block">
                    {eventData.lunch.title}
                  </span>
                  <h3 className="font-eb-garamond text-base sm:text-xl font-bold text-[#FFFFFF] leading-tight">
                    {eventData.lunch.venueName}
                  </h3>
                  <p className="font-sans-ui text-[11px] sm:text-xs text-[#E2E8F0]/85 font-medium">
                    {eventData.lunch.venueAddress}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Reception */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl sm:rounded-[2rem] p-5 sm:p-7 border border-[#C5A059]/70 overflow-hidden text-left bg-[#0D2547] shadow-xl flex flex-col justify-between"
        >
          {/* Background Layer */}
          <div
            className="absolute left-0 right-0 top-0 pointer-events-none select-none z-0 opacity-75"
            style={{
              bottom: '-140px',
              backgroundImage: 'url("/images/bg-3.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Gradient Tint */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#0D2547]/88 via-[#13355F]/82 to-[#0A1D36]/90 backdrop-blur-[1px] pointer-events-none z-10" />

          {/* Floral Cascade Overlay Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 inset-y-0 h-full w-[44%] sm:w-1/2 pointer-events-none select-none z-15 flex justify-end overflow-hidden"
          >
            <img
              src="/images/flower-4.png"
              alt="Royal Blue Floral Cascade"
              className="h-full w-auto min-h-full max-w-none object-cover object-right opacity-80 sm:opacity-90 pointer-events-none filter drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)]"
            />
          </motion.div>

          {/* Content Card */}
          <div className="relative z-20 space-y-4 sm:space-y-5">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-center space-y-1.5 sm:space-y-2 pb-0.5 sm:pb-1"
            >
              <h2 className="font-eb-garamond text-xl sm:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.24em] text-[#FFFFFF] uppercase leading-tight drop-shadow-xs">
                RECEPTION
              </h2>
              <div className="flex items-center justify-center gap-2.5">
                <div className="h-[1px] w-10 sm:w-16 bg-[#C5A059]/60" />
                <span className="text-[#C5A059] text-[8px] sm:text-[10px]">✦</span>
                <div className="h-[1px] w-10 sm:w-16 bg-[#C5A059]/60" />
              </div>
            </motion.div>

            {/* List of Details */}
            <div className="space-y-3 sm:space-y-4">
              {/* Date */}
              <motion.div
                initial={{ opacity: 0, x: -25, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: false }}
                transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 sm:gap-4 pb-3 border-b border-white/10"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#C5A059] bg-[#C5A059]/20 flex items-center justify-center shrink-0 shadow-md shadow-black/20">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#F3E5AB]" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="font-sans-ui text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-[#E5C77F] uppercase block">
                    DATE
                  </span>
                  <h3 className="font-eb-garamond text-base sm:text-xl font-bold text-[#FFFFFF] leading-tight">
                    {eventData.reception.dateFormatted}
                  </h3>
                  <p className="font-sans-ui text-[11px] sm:text-xs text-[#E2E8F0]/85 font-medium">
                    Inshaa Allah
                  </p>
                </div>
              </motion.div>

              {/* Time */}
              <motion.div
                initial={{ opacity: 0, x: -25, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: false }}
                transition={{ duration: 0.85, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 sm:gap-4 pb-3 border-b border-white/10"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#C5A059] bg-[#C5A059]/20 flex items-center justify-center shrink-0 shadow-md shadow-black/20">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#F3E5AB]" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="font-sans-ui text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-[#E5C77F] uppercase block">
                    TIME
                  </span>
                  <h3 className="font-eb-garamond text-base sm:text-xl font-bold text-[#FFFFFF] leading-tight">
                    {eventData.reception.time}
                  </h3>
                  <p className="font-sans-ui text-[11px] sm:text-xs text-[#E2E8F0]/85 font-medium">
                    Reception Ceremony
                  </p>
                </div>
              </motion.div>

              {/* Venue */}
              <motion.div
                initial={{ opacity: 0, x: -25, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: false }}
                transition={{ duration: 0.85, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 sm:gap-4 pt-0.5"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#C5A059] bg-[#C5A059]/20 flex items-center justify-center shrink-0 shadow-md shadow-black/20">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#F3E5AB]" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="font-sans-ui text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-[#E5C77F] uppercase block">
                    VENUE
                  </span>
                  <h3 className="font-eb-garamond text-base sm:text-xl font-bold text-[#FFFFFF] leading-tight">
                    {eventData.reception.venueName}
                  </h3>
                  <p className="font-sans-ui text-[11px] sm:text-xs text-[#E2E8F0]/85 font-medium">
                    {eventData.reception.venueAddress}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Reception Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href={eventData.reception.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C5A059]/20 hover:bg-[#C5A059]/35 text-[#F3E5AB] border border-[#C5A059]/70 text-[10px] sm:text-[11px] font-sans-ui font-semibold tracking-wider uppercase transition-all"
              >
                <Navigation className="w-3 h-3 text-[#F3E5AB]" />
                <span>Directions</span>
              </a>
              <button
                type="button"
                onClick={handleAddReceptionToCalendar}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 text-[10px] sm:text-[11px] font-sans-ui font-semibold tracking-wider uppercase transition-all cursor-pointer"
              >
                <CalendarPlus className="w-3 h-3 text-[#F3E5AB]" />
                <span>{isAddingReception ? 'Opening...' : 'Save Date'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
