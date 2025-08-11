import React, { useState } from "react";
import Loader from "./src/components/ui/Loader.jsx";
import ButtonLoader from "./src/components/ui/ButtonLoader.jsx";
import ErrorPage from "./src/components/ui/ErrorPage.jsx";
import Footer from "./src/components/Footer.jsx";
import ViewSection from "./src/components/ViewSection.jsx";
import HeroSection from "./src/components/HeroSection.jsx";
import PaperDetails from "./src/components/PaperDetails.jsx";
import Navbar from "./src/components/ui/Navbar.jsx";

// ⬇️ import your helpers (adjust path if different)
import { findSubjectYear, flattenSession } from "./src/api/mockPapers.js";

export default function App() {
  const [subject, setSubject] = useState('');
  const [year, setYear] = useState('');
  const [loading, setLoading] = useState(false);
  const [papers, setPapers] = useState({ s: [], w: [], meta: null, error: "" });

  const handleFind = (subj, yr) => {
    setLoading(true);
    setTimeout(() => {
      const node = findSubjectYear(subj, yr);
      if (!node) {
        setPapers({ s: [], w: [], meta: { subject_name: subj, subject_code: "-", year: yr }, error: "No data found." });
      } else {
        setPapers({
          s: flattenSession(node.sessions.s),
          w: flattenSession(node.sessions.w),
          meta: { subject_name: node.subject_name, subject_code: node.subject_code, year: node.year },
          error: ""
        });
      }
      setLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-[1200px] min-h-screen w-full px-6 lg:px-10">
        <div className="pt-6" />
        <Navbar />

        <main className="w-full">
          <HeroSection
            subject={subject}
            year={year}
            setSubject={setSubject}
            setYear={setYear}
            loading={loading}
            onFind={handleFind}
          />

          {/* 90% width divider */}
          <div role="separator" className="mx-auto w-[90%] h-px bg-white/15 my-10" />

          {/* Paper Details (centered headings; two columns; OutlineFillButton rows) */}
          <PaperDetails
            data={papers}
            onPick={(sel) => {
              // sel: { session, paper, variant, types, links }
              // plug into ViewSection later
              console.log("Picked:", sel);
            }}
          />

          <ViewSection />
          <Footer />
        </main>

        <div className="pb-12" />
      </div>
    </div>
  );
}
