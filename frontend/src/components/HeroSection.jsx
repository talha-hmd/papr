import React from "react";
import Dropdown from "./ui/DropDown";
import ButtonLoader from "./ui/ButtonLoader";
import { subjects, yearsBySubject } from "../api/options.js";

export default function HeroSection({
  subject,
  year,
  setSubject,
  setYear,
  loading,
  onFind
}) {
  const years = subject ? yearsBySubject[subject] || [] : [];

  return (
    <section className="relative w-full h-[641px] grey-bg text-white flex flex-col justify-center items-center overflow-visible">
      {/* LEFT QUOTE (slightly higher) */}
      <aside
        className="hidden md:block absolute left-10 top-1/3 -translate-y-1/2 w-[260px] p-4 rounded-[28px] glass-card grain float-soft float-delay-sm"
        aria-hidden="true"
      >
        <div className="flex items-center gap-3 mb-1">
          <span className="quote-mark">“</span>
        </div>
        <p className="text-sm leading-6 -mt-6 font-body-inter">
          Pay attention to what users do, not what they say.
        </p>
        <div className="mt-4 text-xs opacity-70 font-body-inter">— Jakob Nielsen</div>
      </aside>

      {/* RIGHT QUOTE (slightly lower) */}
      <aside
        className="hidden md:block absolute right-10 top-1/2 translate-y-6 w-[260px] p-4 rounded-[28px] glass-card grain float-soft float-delay-md"
        aria-hidden="true"
      >
        <div className="flex items-center gap-3 mb-1">
          <span className="quote-mark">“</span>
        </div>
        <p className="text-sm leading-6 -mt-6 font-body-inter">
          Every day hustlin', I gotta go get it.
        </p>
        <div className="mt-4 text-xs opacity-70 font-body-inter">— Young Thug</div>
      </aside>

      {/* Center headline + controls */}
      <h1 className="font-heading text-9xl text-center font-extrabold tracking-wider">
        Papr.
      </h1>
      <p className="font-body text-lg text-gray-400 mt-4 text-center">
        fast • clean • side-by-side
      </p>

      <div className="flex flex-row gap-4 mt-6 font-body w-[384px]">
        <Dropdown
          placeholder="Subject"
          items={subjects}
          value={subject}
          onChange={(v) => { setSubject(v); setYear(""); }}
          width="220px"
        />
        <Dropdown
          placeholder="Year"
          items={years.map(String)}
          value={year}
          onChange={setYear}
          disabled={!subject}
          width="160px"
        />
      </div>

      <button
        className="mt-4 px-5 py-3 w-[384px] rounded-full bg-white/20 backdrop-blur-md border border-white/15 text-white hover:bg-white/35 transition disabled:opacity-50 duration-300 font-body cursor-pointer"
        disabled={!subject || !year || loading}
        onClick={() => onFind?.(subject, year)}
      >
        {loading ? <ButtonLoader /> : "Find Paper"}
      </button>
    </section>
  );
}