// src/components/ui/OutlineFillButton.jsx
import React from "react";
import styled from "styled-components";

export default function OutlineFillButton({ children = "Hello", onClick }) {
    return (
        <StyledWrapper>
            <button className="btn type1" onClick={onClick}>
                <span className="btn-txt">{children}</span>
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .btn {
    height: 50px;
    width: 500px;
    position: relative;
    background: transparent;
    cursor: pointer;
    border: 2px solid rgba(255, 255, 255, 0.9); /* white outline */
    border-radius: 10px;
    color: rgba(255, 255, 255, 0.92);           /* white text on dark bg */
    overflow: hidden;
    transition: color .35s ease, border-color .35s ease, box-shadow .35s ease;
  }

  .btn:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255,255,255,.18), 0 0 0 6px rgba(255,255,255,.08);
  }

  .btn-txt {
    position: relative;
    z-index: 1;
    font-weight: 700;
    letter-spacing: 0.05em;
    font-family: 'Space Grotesk', sans-serif;
  }

  /* expanding fill */
  .type1::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 10px;
    height: 10px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 30px;
    background: #fff;                           /* WHITE fill on hover */
    transition: transform .5s cubic-bezier(.23,1,.32,1);
    z-index: 0;
  }

  /* hover -> fill white, turn text dark */
  .btn:hover {
    color: #0f0f0f;                              /* dark text over white */
    border-color: transparent;
    box-shadow: 0 8px 60px rgba(255, 255, 255, 0.12);
  }

  .btn:hover.type1::after {
    transform: translate(-50%, -50%) scale(40);  /* grows to cover button */
  }

  /* Light mode tweak: keep the same feel (optional) */
  @media (prefers-color-scheme: light) {
    .btn {
      border-color: rgba(0,0,0,.8);
      color: #111;
    }
    .type1::after { background: #111; }
    .btn:hover { color: #fff; box-shadow: 0 8px 60px rgba(0,0,0,.15); }
  }
`;
