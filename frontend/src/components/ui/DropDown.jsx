// src/components/ui/Dropdown.jsx
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

/*
  Props:
    - items: string[]
    - placeholder: string
    - value: string | number | ''
    - onChange: (val) => void
    - disabled?: boolean
    - width?: string
*/

const Dropdown = ({
  items = [],
  placeholder = "Select",
  value = "",
  onChange = () => { },
  disabled = false,
  width,
  className="",
  style={},
}) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const onKey = (e) => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((p) => !p);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <StyledWrapper
      ref={wrapRef}
      $width={width}
      $disabled={disabled}
      $active={Boolean(value)}  // <-- highlight when selected
      className={className}
      style={style}
    >
      <button
        type="button"
        className="link"
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={disabled}
        onClick={() => !disabled && setOpen((p) => !p)}
        onKeyDown={onKey}
      >
        <span>{value ? String(value) : placeholder}</span>
        <svg viewBox="0 0 360 360" aria-hidden="true">
          <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
        </svg>
      </button>

      <ul role="listbox" className={`submenu ${open ? "open" : ""}`}>
        {items.map((it) => (
          <li key={it} className="submenu-item">
            <button
              type="button"
              className="submenu-link"
              onClick={() => {
                onChange(it);
                setOpen(false);
              }}
            >
              {it}
            </button>
          </li>
        ))}
        {items.length === 0 && <li className="submenu-item empty">No options</li>}
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  ${(p) => p.$width ? `width: ${p.$width};` : ""}
  position: relative;
  font-size: 15px;
  line-height: 1.4;

  /* Button */
  .link {
    position: relative;
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,.18);
    background: rgba(255,255,255,0.18);
    backdrop-filter: blur(6px);
    transition: all .28s cubic-bezier(.23,1,.32,1);
    cursor: pointer;

    /* default text/icon color on dark bg */
    color: #f5f5f5;
  }
  .link > span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .link svg { width: 14px; height: 14px; fill: #f5f5f5; transition: transform .28s, fill .28s; }

  /* white fill on hover, flip text/icon to dark for contrast */
  .link::after{
    content:"";
    position:absolute; inset:0;
    background: rgba(255,255,255,0.95);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .28s cubic-bezier(.23,1,.32,1);
    border-radius:14px;
    z-index:-1;
  }
  .link:hover { color:#171717; }
  .link:hover svg{ transform: rotate(-180deg); fill:#171717; }
  .link:hover::after{ transform: scaleX(1); transform-origin: right; }

  /* Active state (value selected) — stay white even when not hovered */
  ${(p) => p.$active && `
    .link {
      background: rgba(255,255,255,0.95);
      color: #171717;
      border-color: rgba(255,255,255,.22);
    }
    .link svg { fill:#171717; }
    .link::after { display:none; } /* prevent hover overlay fighting */
  `}

  /* Disabled */
  ${(p) => p.$disabled && `
    .link { opacity:.55; cursor:not-allowed; }
    .link:hover::after{ transform:scaleX(0); }
  `}

  /* Panel */
  .submenu{
    position:absolute; top: calc(100% + 8px); left:0; width:100%;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(6px);
    border:1px solid rgba(255,255,255,.22);
    border-radius: 12px;
    overflow: hidden;
    transform: translateY(-8px);
    opacity:0; visibility:hidden; pointer-events:none;
    transition: all .22s ease;
    z-index: 50;

    /* show max ~3 items then scroll */
    max-height: 150px;
    overflow-y: auto;
  }
  .submenu.open{ transform: translateY(0); opacity:1; visibility:visible; pointer-events:auto; }

  .submenu-link{
    width:100%; text-align:left;
    padding:10px 14px; cursor:pointer; background:transparent; border:none;
    color:#171717;
    transition: background .18s ease, transform .18s ease;
  }
  .submenu-link:hover{ background: rgba(0,0,0,0.06); transform: translateX(2px); }

  .submenu-item.empty{ padding:12px 14px; color:#777; }

  /* slim scrollbar inside panel */
  .submenu::-webkit-scrollbar { width: 6px; }
  .submenu::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.25); border-radius: 3px; }

  
/* ---------- LIGHT MODE OVERRIDES ---------- */
  :root:not(.dark) & .link {
    border: 1px solid rgba(0,0,0,.12);
    background: rgba(0,0,0,.06);
    color: #171717;
  }
  :root:not(.dark) & .link svg { fill:#171717; }

  /* On light, the hover overlay should darken slightly (not white) */
  :root:not(.dark) & .link::after {
    background: rgba(0,0,0,.08);
  }
  :root:not(.dark) & .link:hover { color:#0f0f0f; }
  :root:not(.dark) & .link:hover svg { fill:#0f0f0f; }

  /* When a value is selected (active), keep it visible on light */
  ${(p) => p.$active && `
    :root:not(.dark) & .link {
      background: #ffffff;
      border-color: rgba(0,0,0,.14);
      color: #171717;
    }
    :root:not(.dark) & .link::after { display:none; }
  `}

  /* Dark-mode panel is fine; add explicit dark panel if you want higher contrast */
  .submenu { /* light defaults already white */ }
  .dark & .submenu{
    background: rgba(24,24,24,.98);
    border-color: rgba(255,255,255,.12);
  }
  .dark & .submenu-link{ color:#f5f5f5; }
  .dark & .submenu-link:hover{ background: rgba(255,255,255,.06); }
`;

export default Dropdown;