import React from "react";
import styled from "styled-components";

const ButtonLoader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="box1" />
        <div className="box2" />
        <div className="box3" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* scaled container: 112 -> 28 */
  .loader {
    width: 28px;
    height: 28px;
    position: relative;
  }

  /* 16px border -> 3px; color white to match button text */
  .box1,
  .box2,
  .box3 {
    border: 3px solid #fff;
    box-sizing: border-box;
    position: absolute;
    display: block;
  }

  /* ---- initial positions (scaled) ----
     112 -> 28, 48 -> 12, 64 -> 16
  */

  .box1 {
    width: 28px;
    height: 12px;
    margin-top: 16px; /* bottom row */
    margin-left: 0px; /* left column */
    animation: abox1 4s 1s infinite ease-in-out;
  }

  .box2 {
    width: 12px;
    height: 12px;
    margin-top: 0px;  /* top row */
    margin-left: 0px; /* left column */
    animation: abox2 4s 1s infinite ease-in-out;
  }

  .box3 {
    width: 12px;
    height: 12px;
    margin-top: 0px;   /* top row */
    margin-left: 16px; /* right column */
    animation: abox3 4s 1s infinite ease-in-out;
  }

  /* ---- keyframes scaled 1:1 from original ---- */

  @keyframes abox1 {
    0%   { width:28px; height:12px; margin-top:16px; margin-left:0px; }  /* wide bottom-left */
    12.5%{ width:12px; height:12px; margin-top:16px; margin-left:0px; }  /* bottom-left square */
    25%  { width:12px; height:12px; margin-top:16px; margin-left:0px; }
    37.5%{ width:12px; height:12px; margin-top:16px; margin-left:0px; }
    50%  { width:12px; height:12px; margin-top:16px; margin-left:0px; }
    62.5%{ width:12px; height:12px; margin-top:16px; margin-left:0px; }
    75%  { width:12px; height:28px; margin-top:0px;  margin-left:0px; }   /* tall left */
    87.5%{ width:12px; height:12px; margin-top:0px;  margin-left:0px; }   /* top-left square */
    100% { width:12px; height:12px; margin-top:0px;  margin-left:0px; }
  }

  @keyframes abox2 {
    0%   { width:12px; height:12px; margin-top:0px;  margin-left:0px; }   /* top-left square */
    12.5%{ width:12px; height:12px; margin-top:0px;  margin-left:0px; }
    25%  { width:12px; height:12px; margin-top:0px;  margin-left:0px; }
    37.5%{ width:12px; height:12px; margin-top:0px;  margin-left:0px; }
    50%  { width:28px; height:12px; margin-top:0px;  margin-left:0px; }   /* wide top-left */
    62.5%{ width:12px; height:12px; margin-top:0px;  margin-left:16px; }  /* top-right square */
    75%  { width:12px; height:12px; margin-top:0px;  margin-left:16px; }
    87.5%{ width:12px; height:12px; margin-top:0px;  margin-left:16px; }
    100% { width:12px; height:12px; margin-top:0px;  margin-left:16px; }
  }

  @keyframes abox3 {
    0%   { width:12px; height:12px; margin-top:0px;  margin-left:16px; }  /* top-right square */
    12.5%{ width:12px; height:12px; margin-top:0px;  margin-left:16px; }
    25%  { width:12px; height:28px; margin-top:0px;  margin-left:16px; }  /* tall right */
    37.5%{ width:12px; height:12px; margin-top:16px; margin-left:16px; }  /* bottom-right square */
    50%  { width:12px; height:12px; margin-top:16px; margin-left:16px; }
    62.5%{ width:12px; height:12px; margin-top:16px; margin-left:16px; }
    75%  { width:12px; height:12px; margin-top:16px; margin-left:16px; }
    87.5%{ width:12px; height:12px; margin-top:16px; margin-left:16px; }
    100% { width:28px; height:12px; margin-top:16px; margin-left:0px; }   /* wide bottom-left (handoff) */
  }
`;

export default ButtonLoader;