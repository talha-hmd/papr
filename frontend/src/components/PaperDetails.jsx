import React from "react";
import OutlineFillButton from "./ui/OutlineFillButton";

/**
 * Expects props.data = { s: [...], w: [...], meta: {...}, error?: string }
 * Each item in s/w: { paper, variant, types, links }
 * No QP/MS chips, just one button per variant.
 */
export default function PaperDetails({ data, onPick }) {
  const meta = data?.meta;

  return (
    <section className="mt-16">
      {/* Centered heading + subheading */}
      <h2 className="text-center text-4xl md:text-5xl font-semibold text-white font-heading">
        Paper Details
      </h2>
      <p className="font-heading text-center text-gray-400 mt-2">
        {meta ? `${meta.subject_name} (${meta.subject_code}) — ${meta.year}` : "Choose a subject and year above"}
      </p>

      {/* Render columns only when we have data */}
      {meta && !data?.error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Summer */}
          <SessionColumn
            title="Summer"
            items={data?.s || []}
            sessionCode="s"
            onPick={onPick}
          />
          {/* Winter */}
          <SessionColumn
            title="Winter"
            items={data?.w || []}
            sessionCode="w"
            onPick={onPick}
          />
        </div>
      )}

      {/* optional: error / empty states */}
      {meta && data?.error && (
        <div className="font-heading text-center text-red-300 mt-8">{data.error}</div>
      )}
      {meta && !data?.error && !(data?.s?.length || data?.w?.length) && (
        <div className="font-heading text-center text-slate-400 mt-8">No papers found.</div>
      )}
    </section>
  );
}

function SessionColumn({ title, items, sessionCode, onPick }) {
  return (
    <div className="border border-white/15 rounded-2xl p-5">
      <h3 className="font-heading text-center text-xl text-white mb-4">{title}</h3>
      <div className="flex flex-col items-center gap-3">
        {items?.length ? (
          items.map((it, idx) => (
            <OutlineFillButton
              key={`${sessionCode}-${it.paper}-${it.variant}-${idx}`}
              onClick={() =>
                onPick?.({
                  session: sessionCode,
                  paper: it.paper,
                  variant: it.variant,
                  // pass both types/links so ViewSection can decide later
                  types: it.types,
                  links: it.links,
                })
              }
              className="w-full text-left"
            >
              {/* Label like "Paper 3 — Variant 2" */}
              {`Paper ${it.paper.replace("P", "")} — Variant ${it.variant.replace("V", "")}`}
            </OutlineFillButton>
          ))
        ) : (
          <div className="font-heading text-center text-slate-500 text-sm italic py-6">
            No entries
          </div>
        )}
      </div>
    </div>
  );
}
