import React, { useRef, useEffect } from "react";
import "./style.css";

import angieValen from "../../../static/Invitation-figma2.png";
import confetti from 'canvas-confetti';

export const IphoneProMax = () => {
  const confettiRef = useRef(null);

  useEffect(() => {
    if (confettiRef.current) {
      confetti.create(confettiRef.current, { resize: true });
    }
  }, []);

  const fireConfetti = () => {
    confetti();
  };

  return (
    <div className="iphone-pro-max">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />
          <img
            className="invitation-figma"
            alt="Invitation figma"
            src={angieValen}
          />
          <div className="button-parroquia">
            <a href="https://maps.app.goo.gl/HMLMjjS96yk1GvPb8" target="_blank" rel="noopener noreferrer">
              <div className="overlap-group">
                <div className="div" />
                <p className="text-wrapper">11:30 | Parroquia inmaculada concepción: José cubas 3599</p>
              </div>
            </a>
          </div>
          <div className="overlap-group-wrapper">
            <a href="https://maps.app.goo.gl/fDmbJ7k7h2hZT9iM9" target="_blank" rel="noopener noreferrer">
              <div className="overlap-2">
                <div className="rectangle-2" />
                <p className="p">13:00 | Festejo en Tamarindo: campana 1747</p>
              </div>
            </a>
          </div>
          <div className="asisitir-button">
            <a href="https://forms.gle/vqj751mpHtnXPscC9" target="_blank" rel="noopener noreferrer">
              <div className="div-wrapper">
                <div className="text-wrapper-2" onClick={fireConfetti}>Confirmar asistencia</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
